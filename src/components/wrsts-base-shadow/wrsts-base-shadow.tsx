import { Component, Method } from '@stencil/core';

/* extending does not seem to work in stencil */
@Component({
  tag: 'wrsts-base-shadow'
})
export class WrstsBaseShadow {
  @Method() getShadowRoot(): ShadowRoot {
    return (this as any).elementRef.shadowRoot || ((this as any).elementRef as any)
  }

  @Method() getSlot() {
    return this.getShadowRoot().querySelector('slot') || this.getShadowRoot()
  }

  @Method() getSlotNodes<T extends HTMLElement>(name?: string): T[] {
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

  @Method() shadowQuerySelector<T extends HTMLElement>(query: string): T {
    return this.getShadowRoot().querySelector(query)
  }

  @Method() shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[] {
    return Array.prototype.slice.call(
      this.getShadowRoot().querySelectorAll(query)
    )
  }

  @Method() getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
    return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase()) as T[]
  }
}

