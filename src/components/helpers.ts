
//
function getShadowRoot(): ShadowRoot {
  return (this as any).elementRef.shadowRoot || ((this as any).elementRef as any)
}
export interface GetShadowRoot { getShadowRoot: typeof getShadowRoot }

//
function getSlot() {
  return getShadowRoot.bind(this)().querySelector('slot') || getShadowRoot.bind(this)()
}
export interface GetSlot { getSlot: typeof getSlot }

//
function getSlotNodes<T extends HTMLElement>(name?: string): T[] {
  const slotSelector = name ? `slot[name="${name}"]` : 'slot'
  let assignedNodes
  const slot = getShadowRoot.bind(this)().querySelector(slotSelector)
  if (slot) {
    assignedNodes = (slot as any).assignedNodes()
  } else {
    assignedNodes = getShadowRoot.bind(this)().querySelectorAll('*')
  }
  return Array.prototype.slice.call(
    assignedNodes
  )
}
export interface GetSlotNodes { getSlotNodes: typeof getSlotNodes }

//
function shadowQuerySelector<T extends HTMLElement>(query: string): T {
  return getShadowRoot.bind(this)().querySelector(query)
}
export interface ShadowQuerySelector { shadowQuerySelector: typeof shadowQuerySelector }

//
function shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[] {
  return Array.prototype.slice.call(
    getShadowRoot.bind(this)().querySelectorAll(query)
  )
}
export interface ShadowQuerySelectorAll { shadowQuerySelectorAll: typeof shadowQuerySelectorAll }

//
function getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
  return getSlotNodes.bind(this)()
    .filter(o => o.tagName === tagName.toUpperCase()) as T[]
}
export interface GetSlotElementsByTagName { getSlotElementsByTagName: typeof getSlotElementsByTagName }




export const Helpers = {
    getShadowRoot
  , getSlot
  , getSlotNodes
  , shadowQuerySelector
  , shadowQuerySelectorAll
  , getSlotElementsByTagName
}
