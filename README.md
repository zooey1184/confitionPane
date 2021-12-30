<!-- @format -->

# `imc-condition-popover`

### 版本

version: 0.1.3 size: 376.23 KiB / gzip: 109.59 KiB

### 引用

```js
/** 引入vue3.0 */
<script src="https://statics.igg.com/assets/lib/vue/3.2.26/vue.global.prod.js"></script>
/** 引入组件js */
<script src="https://statics.igg.com/assets/lib/imc/imc-condition-popover/0.1.3/index.umd.js"></script>
/** 引入组件样式 */
<link rel="stylesheet" href="https://statics.igg.com/assets/lib/imc/imc-condition-popover/0.1.3/style.css" />
/** 该组件依赖antd css */
<link rel="stylesheet" href="https://statics.igg.com/assets/lib/ant-design-vue/2.2.8/antd.min.css" />
```

### 简单使用

```html
<imc-condition-popover id="conditionPopover"></imc-condition-popover>
```

```js
$imc('#conditionPopover').setProps({
  options: [
    {
      label: '6天广告',
      key: 'ad',
      value: 'ad',
      options: [
        {
          label: 'radio',
          type: 'radio-group',
          key: 'adname',
          options: [
            {
              label: '14tian',
              value: '14',
            },
            {
              label: '7天',
              value: '7',
            },
          ],
        },
      ],
    },
    {
      label: '关键词匹配',
      key: 'keyword',
      value: 'keyword',
      options: [
        {
          label: 'dd',
          type: 'input',
          placeholder: '请输入wenan',
        },
        {
          label: 'dd',
          type: 'select-group',
          placeholder: '请输入',
          key: 'tt',
          // mode: "multiple",
          popupContainerId: 'keyword-content', // 这个是键-content 保证挂载点
          options: [
            {
              label: '14tian',
              value: '14',
            },
            {
              label: '7天',
              value: '7',
            },
          ],
        },
      ],
    },
  ],
})
```

### props

| 属性         | 解释                                        | 默认值     |
| ------------ | ------------------------------------------- | ---------- |
| title        | 弹窗标题                                    | --         |
| id           | 组件 id                                     | --         |
| trigger      | 弹窗交互弹起方式 click 点击 hover：鼠标移入 | click      |
| childTrigger | 子项弹窗的弹起方式                          | click      |
| options      | 配置                                        | 具体看下面 |
| confirmText  | 确定按钮文案 设置空不展示                   | 确定       |
| restText     | 重置按钮文案                                | 重置       |
| wrapStyle    | 容器样式                                    | {}         |

### props.options

| 属性    | 解释                                                                    | 默认值       |
| ------- | ----------------------------------------------------------------------- | ------------ |
| label   | 显示的文案                                                              | --           |
| key     | 唯一键                                                                  | --           |
| value   | 对应的键值（options 内部表示键值，外部不与键值匹配）                    | --           |
| options | 面板对应的配置 (如果是自定义可不配置, 如果是配置渲染的条件面板需要配置) | OptionItem[] |

### OptionItem

| 属性        | 解释                                                                    | 默认值           |
| ----------- | ----------------------------------------------------------------------- | ---------------- |
| label       | 显示的文案                                                              | --               |
| key         | 唯一键                                                                  | --               |
| value       | 对应的键值（options 内部表示键值，外部不与键值匹配）                    | --               |
| placeholder | 输入框提示文案                                                          | --               |
| type        | 配置类型（input, radio-group, radio-button, check-group, select-group） | --               |
| options     | 对应的组件内置选项                                                      | {label, value}[] |
| 其他的配置  | 同 ant-design                                                           | ..               |

### checkbox-group 额外的配置

| 属性       | 解释          | 默认值           |
| ---------- | ------------- | ---------------- |
| searchable | 是否可搜索    | --               |
| btnClear   | 清空按钮文案  | --               |
| btnReverse | 反选按钮文案  | --               |
| btnAll     | 全选按钮文案  | --               |
| searchAttr | 搜索属性      | --               |
| itemStyle  | 选项样式      | {label, value}[] |
| 其他的配置 | 同 ant-design | ..               |

#### 对外暴露的方法

```js
// 获取内部状态
$imc('#conditionPopover').getState()

// 清空状态
$imc('#conditionPopover').clear()

// 更新options
$imc('#conditionPopover').updateOptions('keyword', [
  {
    key: 'tt'
    value: [14]
  }
])

// 监听change 事件
$imc('#conditionPopover').on('change', (e) => {
  console.log(e.detail)
})

// 监听确定 事件
$imc('#conditionPopover').on('confirm', (e) => {
  console.log(e.detail)
})

// 监听删除标签回调 事件
$imc('#conditionPopover').on('delete', (e) => {
  console.log(e.detail)
})

// 获取标签的键值对
$imc('#conditionPopover').getTagsValue()
```

#### 一个复杂的例子

```html
<imc-condition-popover id="condition">
  <div slot="time">
    <div>时间显示器</div>
    <imc-date-picker id="datepicker"></imc-date-picker>
    <button onclick="handleConfirm()">确定</button>
  </div>
</imc-condition-popover>
```

```js
// 一个复杂的例子

$('#conditionPopover').setProps({
  options: [
    {
      key: 'time',
      label: '时间选择',
      value: 'time',
      options: []
    },
    {
      label: '关键词匹配',
      key: 'keyword',
      value: 'keyword',
      options: [
        {
          label: 'dd',
          type: 'input',
          placeholder: '请输入wenan',
        },
        {
          label: 'dd',
          type: 'select-group',
          placeholder: '请输入',
          key: 'tt',
          popupContainerId: 'keyword-content', // 这个是键-content 保证挂载点
          options: [
            {
              label: '14tian',
              value: '14',
            },
            {
              label: '7天',
              value: '7',
            },
          ],
        },
      ],
    },
  ]
})

....

const handleConfirm = () => {
  $('#condition').updateOptions('time', [
    {
      key: 'timekey',
      value: +new Date()
    }
  ])
}
```
