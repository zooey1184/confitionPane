<!-- @format -->

<template>
  <a-input v-model:value="inputVal" style="width: 100%" @change="handleChange" />
</template>

<script>
import {ref, defineComponent, watch} from 'vue'
import {Input} from 'ant-design-vue'

export default defineComponent({
  components: {
    'a-input': Input,
  },
  emits: ['change', 'update:value'],
  props: {
    defaultValue: {
      type: [String, Number],
    },
    value: {
      type: [String, Number],
    },
  },
  setup(props, {emit}) {
    const inputVal = ref(props.value)
    const handleChange = e => {
      emit('change', e.target.value)
      emit('update:value', e.target.value)
    }
    watch(
      () => props.value,
      n => {
        inputVal.value = n
      },
    )
    return {
      inputVal,
      handleChange,
    }
  },
})
</script>
