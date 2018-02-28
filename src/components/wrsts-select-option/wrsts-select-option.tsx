import { Component, Prop, Event, EventEmitter, Element, Method } from '@stencil/core';

@Component({
  tag: 'wrsts-select-option',
  styleUrl: 'wrsts-select-option.scss'
})
export class WrstsSelectOption {

  @Element() wrstsSelectOption: WrstsSelectOption & HTMLElement
  slotElement: HTMLElement

  @Prop() value: string
  @Prop() index:  string
  @Prop({ mutable: true }) selected: boolean
  @Prop({ mutable: true }) focused: boolean
  @Prop({ mutable: true }) hidden: boolean
  @Event() clicked: EventEmitter

  componentDidLoad() {
    this.slotElement = this.wrstsSelectOption
      .children[0] /* div */ as any
  }

  @Method() getSlot() {
    return this.slotElement
  }

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
