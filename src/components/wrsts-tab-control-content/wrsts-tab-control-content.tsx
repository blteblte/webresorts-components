import { Component, Prop, Method, Element } from '@stencil/core';

export type WrstsTabControlContentType = WrstsTabControlContent & HTMLElement

@Component({
  tag: 'wrsts-tab-control-content',
  styleUrl: 'wrsts-tab-control-content.scss',
  shadow: true
})
export class WrstsTabControlContent {
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

  @Element() elementRef: WrstsTabControlContentType
  @Prop({ mutable: true }) active: boolean

  @Method() setActive() {
    if (!this.active) {
      this.active = true
    }
  }

  @Method() unsetActive() {
    if (this.active) {
      this.active = false
    }
  }

  render() {
    return (
      <div class={this.active ? 'active' : ''}>
        <slot />
      </div>
    )
  }
}
