<!-- @format -->

<template>
  <div class="radio-group">
    <a-radio-group v-model:value="value" @change="handleChange">
      <a-radio-button :key="item.value" v-for="item in options" :value="item.value">{{ item.value }}</a-radio-button>
    </a-radio-group>
  </div>
</template>

<script>
import {ref, defineComponent} from 'vue'
import {Radio} from 'ant-design-vue'

export default defineComponent({
  components: {
    'a-radio-group': Radio.Group,
    'a-radio-button': Radio.Button,
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
  setup(props) {
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
