<!-- @format -->

<template>
  <div class="tags-wrap" v-if="tagList.hasTags">
    <div class="tags-pane">
      <slot name="title"
        ><div>{{ label }}</div></slot
      >
      <span v-if="colon" style="padding-left: 4px">:</span>
      <div style="margin-left: 8px; display: flex">
        <span v-for="item in tagList.tags" :key="item.value">
          <a-tag
            v-if="item.label"
            :color="item.color ? item.color : color"
            :closable="isTrue(tagClosable)"
            @close="handleCloseTagItem"
          >
            <span class="tag-item">{{ item.label }}</span>
          </a-tag>
        </span>
        <a-tag v-if="tagList.more.length">{{ tagList.more.length }}{{ maxTagText }}</a-tag>
      </div>
      <div class="close" v-if="isTrue(closable)" @click.stop="handleClose">
        <slot name="close">
          <CloseOutlined />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, defineComponent, computed} from 'vue'
import {Tag} from 'ant-design-vue'
import {CloseOutlined} from '@ant-design/icons-vue'
import {isTrue} from './utils'

export default defineComponent({
  components: {
    'a-tag': Tag,
    CloseOutlined,
  },
  emits: ['close', 'click', 'select', 'closeTag'],
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    colon: {
      type: [Boolean, String],
      default: false,
    },
    maxTagCount: {
      type: [String, Number],
    },
    maxTagText: {
      type: String,
      default: '+ ...',
    },
    closable: {
      type: [String, Boolean],
      default: true,
    },
    tagClosable: {
      type: [String, Boolean],
      default: false,
    },
    color: {
      type: String,
      default: 'default',
    },
  },
  setup(props, {emit}) {
    const maxTagCount = computed(() => Number.parseInt(props.maxTagCount))

    const tags = computed(() => {
      const _tags = props.tags
      const maxLength = maxTagCount.value
      if (maxLength && maxLength < _tags.length) {
        const filters = _tags.filter((item, index) => index < maxLength)
        const more = _tags.filter((item, index) => index >= maxLength)
        return {
          tags: filters,
          hasTags: filters.some(item => !!item.label),
          more: more,
        }
      }
      return {
        tags: _tags,
        hasTags: _tags.some(item => !!item.label),
        more: [],
      }
    })

    const handleClose = () => {
      emit('close')
    }
    const handleCloseTagItem = e => {
      emit('closeTag', e)
    }
    return {
      maxTagLength: maxTagCount,
      tagList: tags,
      isTrue,
      handleCloseTagItem,
      handleClose,
    }
  },
})
</script>

<style src="ant-design-vue/lib/tag/style/index.css"></style>
<style scoped>
.tags-wrap {
  display: flex;
}
.tags-pane {
  background: #1890ff;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 2px;
  color: #fff;
}
.items-center {
  align-items: center;
}
.close {
  font-weight: 600;
  line-height: 12px;
  padding-right: 3px;
}
.close:active {
  opacity: 0.8;
}
.tag-item {
  max-width: 200px;
  line-height: 14px;
  padding-top: 4px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
