<!-- @format -->

<template>
  <div class="condition-wrap">
    <div v-for="item in localOptions" :key="item.key" style="margin: 4px 0">
      <slot :name="item.key" v-if="item.key"></slot>
      <component
        :is="item.type"
        v-bind="item"
        v-model:value="item.value"
        @change="e => handleChange(e, item)"
      ></component>
    </div>
    <div style="overflow: hidden">
      <slot name="action">
        <button :style="btnStyle" @click="handleClear" v-if="resetText">{{ resetText }}</button>
      </slot>
    </div>
  </div>
</template>

<script>
import {ref, defineComponent, computed, watch} from 'vue'
import CheckboxGroup from './checkbox.vue'
import SelectGroup from './selectGroup.vue'
import Input from './input.vue'
import RadionButton from './radioButton.vue'
import RadioGroup from './radioGroup.vue'

export default defineComponent({
  components: {
    input: Input,
    'select-group': SelectGroup,
    'checkbox-group': CheckboxGroup,
    'radio-button': RadionButton,
    'radio-group': RadioGroup,
  },
  emits: ['change'],
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    resetText: {
      type: String,
      default: '重置',
    },
  },
  setup(props, {expose, emit}) {
    const handleChange = (e, item) => {
      emit('change', e, item)
    }

    const localOptions = ref(props.options)

    watch(
      () => props.options,
      n => {
        localOptions.value = n
      },
    )

    const handleClear = () => {
      localOptions.value.forEach(item => (item.value = undefined))
      emit('change', undefined, undefined)
    }

    expose({
      handleClear,
      getData: () => {
        return localOptions.value
      },
    })
    const btnStyle = {
      background: '#1890ff',
      color: '#fff',
      border: 'none',
      borderRadius: '2px',
      padding: '4px 8px',
      marginTop: '8px',
      float: 'right',
    }
    return {
      handleChange,
      handleClear,
      localOptions,
      btnStyle,
    }
  },
})
</script>

<style src="ant-design-vue/lib/checkbox/style/index.css"></style>
<style src="ant-design-vue/lib/input/style/index.css"></style>
<style src="ant-design-vue/lib/radio/style/index.css"></style>
<style src="ant-design-vue/lib/select/style/index.css"></style>

<style lang="less" scoped>
.ant-radio-inner::after {
  top: 4px;
  left: 4px;
}
.ant-checkbox-checked::after {
  border: none;
}
.ant-select-selector {
  flex: 1;
}
.wrap {
  position: relative;
}
.content {
  min-width: 200px;
  background: #fff;
  box-shadow: 0 0 5px #eee;
  padding: 8px;
  z-index: 99;
}
.popBtn {
  margin: 0 4px;
}
.divider {
  padding: 8px 0;
}
.dividerContent {
  border-top: 1px solid #eee;
  width: 90%;
  left: 0;
  position: absolute;
}
.btn {
  background: #1890ff;
  color: #fff;
  border: none;
  border-radius: 2px;
  padding: 4px 8px;
  margin-top: 8px;
  &:active {
    opacity: 0.8;
  }
}
</style>
