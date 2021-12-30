/**
 * @format 原slot 不起作用时的替代方案  如 popover （example）
 * @param originSlotNode 原占位节点
 * @param slot_name 替换的占位名
 * @param id 外部容器id
 * @param shadowId 父节点为shadowRoot 的id
 */

export const insetSlot = (originSlotNode: HTMLElement, slot_name: string, id: string, shadowId?: string) => {
  if (originSlotNode && (id || shadowId)) {
    let childSlotNode = null
    if (shadowId) {
      const _id = id ? `#${id} ` : ''
      childSlotNode = document.querySelector(`#${shadowId}`)?.shadowRoot?.querySelector(`${_id}[slot=${slot_name}]`)
    } else if (id) {
      childSlotNode = document.querySelector(`#${id} [slot=${slot_name}]`)
    }
    if (childSlotNode) {
      originSlotNode.innerHTML = ''
      originSlotNode.append(childSlotNode)
    }
  }
}

export const isTrue = (params: boolean | string) => {
  if (typeof params === 'boolean') {
    return params
  } else if (typeof params === 'string') {
    if (params === 'true') {
      return true
    } else {
      return false
    }
  }
  return false
}

interface IStyleMap {
  [key: string]: string
}

// 转化str 为 style object
export const getStyleByString = (str: Object | String) => {
  if (typeof str === 'string') {
    const objMap: IStyleMap = {}
    if (str?.length) {
      if (/\;/g.test(str)) {
        const itemArr = str.split(';')
        itemArr.forEach(item => {
          const [k, v] = item.split(':')
          if (k?.trim() && v?.trim()) {
            const key = k.trim()
            const value = v.trim()
            objMap[key] = value
          }
        })
      } else {
        const [k, v] = str.split(':')
        if (k?.trim() && v?.trim()) {
          const key = k.trim()
          const value = v.trim()
          objMap[key] = value
        }
      }
    }
    return objMap
  }
  return str
}
