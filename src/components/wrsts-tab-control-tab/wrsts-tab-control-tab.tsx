import { Component, Prop, Event, EventEmitter, Method, Element } from '@stencil/core';

export type WrstsTabControlTabType = WrstsTabControlTab & HTMLElement

@Component({
  tag: 'wrsts-tab-control-tab',
  styleUrl: 'wrsts-tab-control-tab.scss',
  shadow: true
})
export class WrstsTabControlTab {
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

  @Element() elementRef: WrstsTabControlTabType

  @Event() clicked: EventEmitter
  @Prop({ mutable: true }) active: boolean
  @Prop() route: string
  @Prop() historyTitle: string

  @Method() setActive() {
    if (!this.active) {
      this.active = true
      if (this.route !== undefined && this.route !== null) {
        window.location.href = `#/${this.route}`
      }
    }
  }

  @Method() unsetActive() {
    if (this.active) {
      this.active = false
    }
  }

  render() {
    return (
      <label class={this.active ? 'active' : ''} onClick={(e) => this.clicked.emit(e)}>
        <slot />
      </label>
    )
  }
}
