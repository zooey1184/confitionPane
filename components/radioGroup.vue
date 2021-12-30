<!-- @format -->

<template>
  <a-radio-group :options="options" v-model:value="value" @change="handleChange" />
</template>

<script>
import {ref, defineComponent} from 'vue'
import {Radio} from 'ant-design-vue'

export default defineComponent({
  components: {
    'a-radio-group': Radio.Group,
    'a-radio': Radio,
  },
  emits: ['change'],
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    defaultValue: {
      type: [String, Number, Boolean],
    },
  },
  setup(props, {emit}) {
    const handleChange = e => {
      emit('change', e.target.value)
    }
    return {
      value: ref(props.value),
      handleChange,
    }
  },
})
</script>
