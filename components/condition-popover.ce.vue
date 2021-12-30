<!-- @format -->

<template>
  <div class="imc-condition-popover" :style="getStyleByString(wrapStyle)">
    <div class="popover-content">
      <a-popover
        :title="title"
        v-bind="params"
        v-model:visible="visible"
        overlayClassName="imc-condition-popover--content"
        placement="bottomLeft"
        :trigger="trigger"
        @visibleChange="handleVisibleChangeParent"
      >
        <template #content>
          <div ref="overlay" style="max-height: 350px; overflow: auto; min-width: 240px; padding: 4px">
            <div v-for="item in optionsState" :key="item.key">
              <a-popover
                :trigger="childTrigger"
                v-model:visible="visibleMap[item.key]"
                :autoAdjustOverflow="isTrue(childAutoAdjustOverflow)"
                @visibleChange="e => handleVisibleChange(item.key, e)"
                placement="rightTop"
              >
                <template #default>
                  <div
                    class="imc-condition-popover--overlayItem"
                    :ref="overlayRefMap.titleMap[item.key]"
                    @click="handleClickItem(item)"
                    :style="{color: activeKey === item.key ? '#1890ff' : '#333'}"
                  >
                    <span>{{ item.label }}</span>
                    <RightOutlined style="color: #999" />
                  </div>
                </template>
                <template #content>
                  <div
                    :ref="overlayRefMap.overlayMap[item.key]"
                    style="overflow: hidden; position: relative; min-width: 240px"
                  >
                    <div style="font-size: 16px; font-weight: 600; margin-bottom: 8px">
                      {{ item.label }}
                    </div>
                    <condition-pane
                      @change="(val, record) => handleChange(val, record, item)"
                      v-bind="item"
                    ></condition-pane>
                  </div>
                  <div :ref="overlayRefMap.contentMap[`${item.key}-content`]"></div>
                </template>
              </a-popover>
            </div>
          </div>
        </template>
        <template #default>
          <span style="display: flex; flex-grow: 1">
            <slot name="icon">
              <FilterTwoTone style="font-size: 28px; padding-top: 10px; line-height: 24px; margin: 0 8px" />
            </slot>

            <div style="display: flex; flex-grow: 1; flex-wrap: wrap">
              <div
                style="margin: 8px; display: flex; margin-left: 0"
                v-for="(item, index) in tagsValue"
                :key="item.key"
                @click="handleVisibleShow(item.key)"
              >
                <condition-tag
                  @close="e => handleCloseTag(index, item)"
                  :tags="item.tags"
                  :label="item.label"
                  :maxTagCount="2"
                ></condition-tag>
              </div>
            </div>
          </span>
        </template>
      </a-popover>
    </div>

    <div class="action">
      <slot name="action">
        <button class="btn reset-btn" v-if="restText" style="margin-right: 8px" @click="handleClear">
          {{ restText }}
        </button>
        <button class="btn primary-btn" type="primary" v-if="confirmText" @click="handleConfirm">
          {{ confirmText }}
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
import {
  ref,
  defineComponent,
  computed,
  watchEffect,
  watch,
  toRefs,
  onMounted,
  nextTick,
  reactive,
  cloneVNode,
} from 'vue'
import {Popover} from 'ant-design-vue'
import conditionPane from './condition-pane.vue'
import conditionTag from './condition-tag.vue'
import {FilterTwoTone, RightOutlined} from '@ant-design/icons-vue'
import {getStyleByString, insetSlot, isTrue} from './utils'

export default defineComponent({
  components: {
    'a-popover': Popover,
    conditionPane,
    conditionTag,
    FilterTwoTone,
    RightOutlined,
  },
  emits: ['delete', 'confirm', 'change'],
  props: {
    id: {
      type: String,
      default: '',
    },
    shadowId: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    trigger: {
      type: String,
      default: 'click',
    },
    childTrigger: {
      type: String,
      default: 'click',
    },
    options: {
      type: Array,
      default: () => [],
    },
    defaultValue: {
      type: Array,
      default: () => [],
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    restText: {
      type: String,
      default: '重置',
    },
    wrapStyle: {
      type: [Object, String],
      default: () => ({}),
    },
    childAutoAdjustOverflow: {
      type: [Boolean, String],
      default: true,
    },
    autoArrowTop: {
      type: [Boolean, String],
      default: true,
    },
    params: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, {emit, expose}) {
    const visible = ref(false)
    const overlay = ref(null)
    const overlayOutside = ref(null)
    const overlayModal = ref(null)
    const optionsState = ref(props.options)
    const tagsValue = ref(props.defaultValue)
    const visibleMap = reactive({})
    const activeKey = ref('')
    const arrowTop = ref(undefined)

    const handleVisibleChange = (key, e) => {
      visibleMap[key] = e
    }

    const handleVisibleShow = key => {
      setTimeout(() => {
        visible.value = true
      })
      for (let i in visibleMap) {
        if (i === key) {
          visibleMap[key] = true
          activeKey.value = key
        } else {
          visibleMap[i] = false
        }
      }
    }

    watch(
      () => props.options,
      n => {
        optionsState.value = n
        props.options.map(item => {
          visibleMap[item.key] = false
        })
      },
    )

    const handleVisibleChangeParent = e => {
      console.log(e)
      visible.value = e
      if (!e) {
        activeKey.value = ''
      }
    }

    const overlayRefMap = computed(() => {
      const overlayMap = {}
      const contentMap = {}
      const tagsMap = {}
      const titleMap = {}
      props.options.forEach(item => {
        if (!overlayMap[item.key]?.value) {
          overlayMap[item.key] = ref(null)
        }
        if (!contentMap[item.key]?.value) {
          contentMap[`${item.key}-content`] = ref(null)
        }
        if (!tagsMap[item.key]?.value) {
          tagsMap[item.key] = ref(null)
        }
        if (!titleMap[item.key]?.value) {
          titleMap[item.key] = ref(null)
        }
      })
      return {
        overlayMap,
        contentMap,
        tagsMap,
        titleMap,
      }
    })

    const outsideElement = document.querySelector(`#${props.id}`)
    const outsideOriginChildNodes = outsideElement?.childNodes
    // 动态插入节点 slot-content 为外部挂载提供一个节点
    watchEffect(() => {
      if (overlay.value) {
        const refStateContent = overlayRefMap.value.contentMap
        const shadowId = props.shadowId
        const id = props.id
        for (let i in refStateContent) {
          let childSlotNode = null
          if (shadowId) {
            const _id = id ? `#${id} ` : ''
            childSlotNode = document.querySelector(`#${shadowId}`)?.shadowRoot?.querySelector(`${_id}[slot=${i}]`)
          } else if (id) {
            childSlotNode = document.querySelector(`#${id} [slot=${i}]`)
          }
          if (!childSlotNode) {
            const div = document.createElement('div')
            const [key, content] = i.split('-')
            div.id = i
            div.slot = i
            outsideElement.append(div)
          }
        }
      }
    })
    watchEffect(() => {
      if (overlay.value && props.id) {
        // 插入自定义节点
        const refStateContent = overlayRefMap.value.contentMap
        const outside = outsideElement?.childNodes
        if (outside?.length) {
          const refState = overlayRefMap.value.overlayMap
          for (let i in refState) {
            insetSlot(refState[i].value, i, props.id, props.shadowId)
          }
          for (let i in refStateContent) {
            if (refStateContent[i].value?.[0]) {
              insetSlot(refStateContent[i].value[0], i, props.id, props.shadowId)
            }
          }
        }
      }
    })

    // 转化data => tag
    const getTags = data => {
      const options = data.options
      const tags = []
      options?.forEach(item => {
        const value = item.value
        if (item?.options?.length) {
          if (typeof value === 'string') {
            const optionsItem = item?.options?.find(iii => iii.value === value)
            optionsItem && tags.push(optionsItem)
          } else {
            value?.forEach(ii => {
              const optionsItem = item?.options?.find(iii => iii.value === ii)
              optionsItem && tags.push(optionsItem)
            })
          }
        } else {
          item.value && tags.push({label: item.value, value: item.label})
        }
      })
      return {
        tags,
        ...data,
      }
    }

    // 更新标签
    const updateTag = _item => {
      const _options = _item.options
      const key = _item.key
      let _index = undefined
      const hasTagInTags = tagsValue?.value?.some((item, index) => {
        if (item.key === key) {
          _index = index
        }
        return item.key === key
      })

      nextTick(() => {
        const hasVal = _item.options.some(item => {
          return item.value?.length
        })
        if (hasTagInTags) {
          if (hasVal) {
            const tags = getTags(_item)
            tagsValue.value[_index] = tags
          } else {
            tagsValue.value.splice(_index, 1)
          }
        } else {
          if (hasVal) {
            const tags = getTags(_item)
            tagsValue.value.push(tags)
          }
        }
      })
    }

    const handleChange = (val, record, row) => {
      emit('change', val, record, row)
      nextTick(() => {
        updateTag(row)
      })
    }

    /**
     * key: 需要更新的key 对应的options
     * 修改options
     * deep: 是否全量替换
     */
    const updateOptions = (key, options, deep = false) => {
      const originItem = optionsState.value.find(item => item.key === key)
      if (originItem) {
        if (deep) {
          originItem.options = options
        } else {
          const _options = []
          const _optionsMap = {}
          options.forEach(item => {
            if (item.key) {
              _optionsMap[item.key] = item
            }
          })
          if (originItem?.options?.length) {
            originItem?.options?.forEach(item => {
              if (_optionsMap[item.key]) {
                _options.push(Object.assign(item, _optionsMap[item.key]))
              } else {
                _options.push(item)
              }
            })
            originItem.options = _options
          } else {
            originItem.options = options
          }
        }

        setTimeout(() => {
          updateTag(originItem)
        }, 100)
      }
    }

    const handleCloseTag = (index, row) => {
      const item = tagsValue.value[index]
      const key = item.key
      const t = optionsState.value.find(item => item.key === key)
      emit('delete', index, row)
      const _options = []
      t.options.forEach(item => {
        item.value = undefined
        _options.push(item)
      })
      t.options = _options
      tagsValue.value.splice(index, 1)
    }

    const handleConfirm = () => {
      emit('confirm', optionsState.value, tagsValue.value)
    }

    const clear = () => {
      optionsState.value?.forEach(item => {
        const options = item.options
        const _options = []
        options?.forEach(ii => {
          ii.value = undefined
          _options.push(ii)
        })
        item.options = _options
      })
      tagsValue.value = []
    }

    const handleClear = () => {
      clear()
      emit('clear', optionsState.value)
    }

    const getTagsValue = key => {
      const obj = {}
      tagsValue.value.forEach(item => {
        const _obj = {}
        item?.options?.forEach(_item => {
          _obj[_item?.key] = _item?.value
        })
        obj[item.key] = _obj
      })
      return key ? obj[key] : obj
    }

    const handleClickItem = item => {
      if (props.childAutoAdjustOverflow && props.autoArrowTop) {
        setTimeout(() => {
          const ref = overlayRefMap.value?.titleMap?.[activeKey?.value]
          console.log(ref.value[0])
          const rect = ref?.value?.[0]?.getBoundingClientRect()
          if (rect?.top) {
            arrowTop.value = rect.top + 12
          } else {
            arrowTop.value = 12
          }
        })
      }

      activeKey.value = item.key
    }

    expose({
      updateTag,
      updateOptions,
      clear,
      handleVisibleShow,
      getState: () => optionsState.value,
      getTagsValue,
    })

    return {
      overlay,
      overlayOutside,
      overlayModal,
      handleChange,
      tagsValue,
      handleCloseTag,
      optionsState,
      handleConfirm,
      getStyleByString,
      handleClear,
      overlayRefMap,
      visibleMap,
      handleVisibleChange,
      handleVisibleShow,
      activeKey,
      handleVisibleChangeParent,
      handleClickItem,
      arrowTop,
      isTrue,
      visible,
    }
  },
})
</script>

<style src="ant-design-vue/lib/checkbox/style/index.css"></style>
<style src="ant-design-vue/lib/input/style/index.css"></style>
<style src="ant-design-vue/lib/radio/style/index.css"></style>
<style src="ant-design-vue/lib/select/style/index.css"></style>
<style src="ant-design-vue/lib/tag/style/index.css"></style>
<style>
.imc-condition-popover .ant-tag {
  display: flex;
}
.tag-item {
  max-width: 180px;
  line-height: 22px;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.imc-condition-popover .ant-radio-inner::after {
  top: 4px;
  left: 4px;
}
.imc-condition-popover {
  overflow: hidden;
  display: flex;
  cursor: pointer;
  background: rgba(132, 198, 255, 0.2);
}
.imc-condition-popover .overlay-wrap {
  position: absolute;
  z-index: -1;
  display: none;
}

.imc-condition-popover .tags-wrap {
  display: flex;
}

.imc-condition-popover .popover-content {
  flex: 1;
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
.imc-condition-popover .close::active {
  opacity: 0.8;
}
.imc-condition-popover .action {
  padding: 8px;
  float: right;
}

.btn {
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px #00000004;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: #000000d9;
  background: #fff;
  border-color: #d9d9d9;
}
.btn :before {
  content: '';
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 4px;
  pointer-events: none;
  opacity: 1;
  z-index: 1;
}

.imc-condition-popover .btn:before {
  content: '';
  -webkit-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 4px;
  pointer-events: none;
  opacity: 1;
  z-index: 1;
}

.imc-condition-popover .btn:active:before {
  box-shadow: 0px 0px 8px 2px rgba(47, 136, 238, 0.3);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  opacity: 1;
}

.imc-condition-popover .primary-btn {
  background: #1890ff;
  color: #fff;
}
.imc-condition-popover .primary-btn:hover {
  opacity: 0.8;
}

.imc-condition-popover .reset-btn:hover {
  color: #1890ff;
  border: 1px solid #1890ff;
}
.ant-popover-placement-rightTop > .ant-popover-content > .ant-popover-arrow {
  top: v-bind('arrowTop');
}
</style>
