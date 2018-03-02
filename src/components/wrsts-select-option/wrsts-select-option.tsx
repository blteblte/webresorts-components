import { Component, Prop, Event, EventEmitter, Element, Method } from '@stencil/core';

export type WrstsSelectOptionType = WrstsSelectOption & HTMLElement

@Component({
  tag: 'wrsts-select-option',
  styleUrl: 'wrsts-select-option.scss',
  shadow: true
})
export class WrstsSelectOption {
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

  @Element() elementRef: WrstsSelectOptionType

  @Prop() value: string
  @Prop() index:  string
  @Prop({ mutable: true }) selected: boolean
  @Prop({ mutable: true }) focused: boolean
  @Prop({ mutable: true }) hidden: boolean
  @Event() clicked: EventEmitter

  @Method() select() {
    if (!this.selected) this.selected = true
  }

  @Method() unselect() {
    if (this.selected) this.selected = false
  }

  @Method() focus() {
    if (!this.focused) this.focused = true
  }

  @Method() unfocus() {
    if (this.focused) this.focused = false
  }

  @Method() hide() {
    if (!this.hidden) this.hidden = true
  }

  @Method() unhide() {
    if (this.hidden) this.hidden = false
  }

  getClass() {
    let className = ''
    if (this.selected) className += 'selected'
    if (this.focused) className += ' focused'
    if (this.hidden) className += ' hidden'
    return className
  }

  render() {
    return (
      <div class={this.getClass()} onClick={(e) => this.clicked.emit(e)}><slot /></div>
    )
  }
}
