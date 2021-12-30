<!-- @format -->

<template>
  <div>
    <a-select
      v-bind="$props"
      ref="select"
      v-model:value="selectVal"
      @change="handleChange"
      :getPopupContainer="getPopupContainer"
      v-if="!useLocal"
      :style="{width: '100%', display: mode === 'multiple' ? 'inline-block' : 'flex'}"
    >
      <a-select-option v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</a-select-option>
    </a-select>
    <select
      v-else
      :placeholder="placeholder"
      v-model="selectVal"
      @change="handleChange"
      style="width: 100%; border: 1px solid #e1e1e1; padding: 3px 4px; outline: none; border-radius: 2px"
    >
      <option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </div>
</template>

<script>
import {ref, defineComponent, onMounted, watch} from 'vue'
import {Select} from 'ant-design-vue'

export default defineComponent({
  components: {
    'a-select': Select,
    'a-select-option': Select.Option,
  },
  emits: ['change', 'update:value'],
  props: {
    defaultValue: {
      type: [String, Array, Number],
    },
    placeholder: {
      type: String,
    },
    allowClear: {
      type: [Boolean, String],
    },
    mode: {
      type: String,
    },
    maxTagTextLength: {
      type: [Number, String],
    },
    disabled: {
      type: [Boolean, String],
      default: false,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Array, Number],
    },
    popupContainerId: {
      type: String,
    },
    useLocal: {
      type: [Boolean, String],
      default: false,
    },
  },
  setup(props, {emit}) {
    const selectWrap = ref(null)
    const handleChange = e => {
      if (props.useLocal) {
        const val = e.target.value
        emit('change', val)
        emit('update:value', val)
      } else {
        emit('change', e)
        emit('update:value', e)
      }
    }
    const getPopupContainer = () => {
      return props.popupContainerId ? document.querySelector(`#${props.popupContainerId}`) : document.body
    }

    const selectVal = ref(props.value)

    watch(
      () => props.value,
      n => {
        selectVal.value = n
      },
    )
    return {
      selectVal,
      handleChange,
      selectWrap,
      getPopupContainer,
    }
  },
})
</script>
