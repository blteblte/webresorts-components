export function getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
  return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase()) as T[]
}

export function getShadowRoot(): ShadowRoot {
  return (this as any).elementRef.shadowRoot || ((this as any).elementRef as any)
}

export function getSlot() {
  return this.getShadowRoot().querySelector('slot') || this.getShadowRoot()
}

export function getSlotNodes<T extends HTMLElement>(name?: string): T[] {
  const slotSelector = name ? `slot[name="${name}"]` : 'slot'
  let assignedNodes
  const slot = this.getShadowRoot().querySelector(slotSelector)
  if (slot) {
    assignedNodes = (slot as any).assignedNodes()
  } else {
    assignedNodes = this.getShadowRoot().querySelectorAll('*')
  }
  return Array.prototype.slice.call(
    assignedNodes
  )
}

export function shadowQuerySelector<T extends HTMLElement>(query: string): T {
  return this.getShadowRoot().querySelector(query)
}

export function shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[] {
  return Array.prototype.slice.call(
    this.getShadowRoot().querySelectorAll(query)
  )
}
