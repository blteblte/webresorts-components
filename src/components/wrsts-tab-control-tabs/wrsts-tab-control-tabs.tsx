import { Component, Method, Element } from '@stencil/core';

export type WrstsTabControlTabsType = WrstsTabControlTabs & HTMLElement

@Component({
  tag: 'wrsts-tab-control-tabs',
  styleUrl: 'wrsts-tab-control-tabs.scss',
  shadow: true
})
export class WrstsTabControlTabs {
  @Method() public getShadowRoot(): ShadowRoot {
    return this.elementRef.shadowRoot
  }

  @Method() public getSlot() {
    return this.getShadowRoot().querySelector('slot')
  }

  @Method() public getSlotNodes<T extends HTMLElement>(name?: string): T[] {
    const slotSelector = name ? `slot[name="${name}"]` : 'slot'
    return Array.prototype.slice.call(
      (this.getShadowRoot().querySelector(slotSelector) as any).assignedNodes()
    )
  }

  @Method() public shadowQuerySelector<T extends HTMLElement>(query: string): T {
    return this.getShadowRoot().querySelector(query)
  }

  @Method() public shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[] {
    return Array.prototype.slice.call(
      this.getShadowRoot().querySelectorAll(query)
    )
  }

  @Method() public getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
    return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase()) as T[]
  }

  @Element() elementRef: WrstsTabControlTabsType

  render() {
    return (
      <slot />
    )
  }
}
