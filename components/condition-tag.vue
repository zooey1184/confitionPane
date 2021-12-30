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
        <a-tag v-if="tagList.more.length">
          <span class="tag-item">{{ tagList.more.length }}{{ maxTagText }}</span>
        </a-tag>
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
      default: 2,
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
        const filters = Array.from(_tags).filter((item, index) => index < maxLength)
        const more = Array.from(_tags).filter((item, index) => index >= maxLength)
        return {
          tags: filters,
          hasTags: filters?.some(item => !!item.label),
          more: more,
        }
      }

      return {
        tags: _tags,
        hasTags: _tags?.some(item => !!item.label),
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
<style>
.imc-condition-popover .tags-wrap {
  display: flex;
}

.imc-condition-popover .tags-pane {
  background: #1890ff;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 2px;
  color: #fff;
}

.imc-condition-popover .items-center {
  align-items: center;
}
.imc-condition-popover .close {
  font-weight: 600;
  line-height: 12px;
  padding-right: 3px;
}

.imc-condition-popover .close:active {
  opacity: 0.8;
}

.imc-condition-popover--content .ant-popover-inner-content {
  padding: 0;
}

.imc-condition-popover--content .imc-condition-popover--overlayItem {
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.imc-condition-popover--content .imc-condition-popover--overlayItem:active {
  color: #1890ff;
}

.imc-condition-popover--content .imc-condition-popover--overlayItem:hover {
  color: #1890ff;
  background: rgba(200, 200, 200, 0.2);
}
</style>
