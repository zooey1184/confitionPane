<!-- @format -->

<template>
  <div class="checkgroup-pane">
    <slot name="action" v-if='actionable'>
      <div style="display: flex; justify-content: space-between; margin-bottom: 8px">
        <div style="display: flex">
          <span @click="handleAll" style="margin-right: 24px; cursor: pointer; color: #999" v-if="btnAll">{{
            btnAll
          }}</span>
          <span
            size="small"
            type="link"
            style="cursor: pointer; color: #999"
            v-if="btnReverse"
            @click="handleReverse"
            >{{ btnReverse }}</span
          >
        </div>
        <span size="small" type="link" style="cursor: pointer; color: #1890ff" v-if="btnClear" @click="handleClear">{{
          btnClear
        }}</span>
      </div>
    </slot>

    <Input
      style="margin-bottom: 8px"
      v-if="searchable"
      allow-clear
      @change="handleSearchChange"
      :placeholder="placeholder"
      v-model:value="searchWords"
    />
    <div style="max-height: 250px; overflow: auto; padding-bottom: 8px; position: relative">
      <a-checkbox-group v-model:value="val" name="checkboxgroup" @change="handleChange">
        <div :style="getStyleByString(groupStyle)">
          <div v-for="item in checkList.matchList" :key="item.value" :style="getStyleByString(itemStyle)">
            <a-checkbox :value="item.value">
              <Highlight :text="item.label" :keyword="searchWords"></Highlight>
            </a-checkbox>
          </div>
          <div v-if="checkList.matchList.length && checkList.notMatchList.length" class="divider">
            <div class="dividerContent"></div>
          </div>
          <div v-for="item in checkList.notMatchList" :key="item.value" :style="getStyleByString(itemStyle)">
            <a-checkbox :value="item.value">{{ item.label }}</a-checkbox>
          </div>
        </div>
      </a-checkbox-group>
    </div>
  </div>
</template>

<script>
import {ref, defineComponent, computed, watch, unref} from 'vue'
import {Checkbox, Input} from 'ant-design-vue'
import {getStyleByString} from './utils'
import Highlight from './highlight.vue'

export default defineComponent({
  name: 'imc-checkgroup-pane',
  components: {
    'a-checkbox': Checkbox,
    'a-checkbox-group': Checkbox.Group,
    Input,
    Highlight,
  },
  emits: ['pickAll', 'pickReverse', 'pickClear', 'searchChange', 'change', 'update:value'],
  props: {
    btnClear: {
      type: String,
      default: '清空',
    },
    btnReverse: {
      type: String,
      default: '反选',
    },
    btnAll: {
      type: String,
      default: '全选',
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: '请搜索',
    },
    defaultValue: {
      type: Array,
      default: () => [],
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    actionable: {
      type: Boolean,
      default: false,
    },
    searchAttr: {
      type: Array,
      default: ['label'],
    },
    groupStyle: {
      type: [String, Object],
      default: () => ({}),
    },
    itemStyle: {
      type: [String, Object],
      default: () => ({}),
    },
    filterable: {
      type: [Boolean, String],
      default: false,
    },
    value: {
      type: [String, Number, Array],
    },
  },
  setup(props, {emit, expose}) {
    const val = ref(props.value)
    const searchWords = ref('')

    watch(
      () => props.value,
      n => {
        val.value = n
      },
    )

    // 匹配选项是否符合该项属性的值
    const checkAttrMatch = (item, options) => {
      const {attr, value} = options
      if (typeof value === 'string') {
        // 模糊匹配
        return attr.some(ii => item?.[ii]?.indexOf(value) > -1)
      } else if (typeof value === 'object') {
        // 精准匹配
        return attr.find(ii => value.includes(item?.[ii]))
      }
      return false
    }

    const checkList = computed(() => {
      const _val = searchWords.value
      const matchList = []
      const notMatchList = []

      if (_val?.length) {
        props.options.forEach(item => {
          const t = checkAttrMatch(item, {
            attr: props.searchAttr,
            value: _val,
          })
          if (t) {
            matchList.push(item)
          } else {
            notMatchList.push(item)
          }
        })
        return {
          matchList,
          notMatchList,
        }
      }
      return {
        matchList: [],
        notMatchList: props.options,
      }
    })

    // 全选
    const handleAll = () => {
      const t = []
      props.options.forEach(item => {
        t.push(item.value)
      })
      val.value = t
      // emit("pickAll", { value: val.value, data: props.options });
      const value = JSON.parse(JSON.stringify(val.value))
      emit('update:value', value)
      emit('change', value)
    }

    // 反选
    const handleReverse = () => {
      const t = []
      props.options.forEach(item => {
        if (!val?.value?.includes(item.value)) {
          t.push(item.value)
        }
      })
      val.value = t
      const value = JSON.parse(JSON.stringify(val.value))
      emit('update:value', value)
      emit('change', JSON.parse(JSON.stringify(val.value)))
    }

    // 清除
    const handleClear = () => {
      val.value = []
      const value = JSON.parse(JSON.stringify(val.value))
      emit('update:value', value)
      emit('change', JSON.parse(JSON.stringify(val.value)))
    }

    // 搜索change
    const handleSearchChange = e => {
      emit('searchChange', e.target.value)
    }

    const getValue = () => {
      return val.value
    }

    const handleChange = e => {
      emit('change', e)
      emit('update:value', e)
    }

    expose({
      getValue,
    })

    return {
      val,
      searchWords,
      checkList,
      handleAll,
      handleReverse,
      handleClear,
      getStyleByString,
      handleSearchChange,
      handleChange,
    }
  },
})
</script>
