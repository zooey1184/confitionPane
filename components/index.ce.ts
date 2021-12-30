/** @format */

import {defineCustomElement} from 'vue'
import ConditionPopover from './condition-popover.ce.vue'

const CUSTOM_PREFIX = 'imc-'
const ImcConditionPopover = defineCustomElement(ConditionPopover)

export {ImcConditionPopover}

customElements.define(`${CUSTOM_PREFIX}condition-popover`, ImcConditionPopover)
