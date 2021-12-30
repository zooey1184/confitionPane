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
import {ref, defineComponent, computed, watch, onMounted} from 'vue'
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

    onMounted(() => {
      setTimeout(() => {
        console.log(props.options)
      })
    })

    watch(
      () => props.options,
      n => {
        console.log('=====')
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
      cursor: 'pointer',
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
