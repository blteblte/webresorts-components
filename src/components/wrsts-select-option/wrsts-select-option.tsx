import { Component, Prop, Event, EventEmitter, Element, Method } from '@stencil/core';

@Component({
  tag: 'wrsts-select-option',
  styleUrl: 'wrsts-select-option.scss'
})
export class WrstsSelectOption {

  @Element() wrstsSelectOption: WrstsSelectOption & HTMLElement
  slotElement: HTMLElement

  @Prop() value: string
  @Prop({ mutable: true }) selected: boolean
  @Event() clicked: EventEmitter

  componentDidLoad() {
    this.slotElement = this.wrstsSelectOption
      .children[0] /* div */ as any
  }

  @Method() getSlot() {
    return this.slotElement
  }

  @Method() select() {
    if (!this.selected) this.wrstsSelectOption.setAttribute('selected', 'true')
  }

  @Method() unselect() {
    if (this.selected) this.wrstsSelectOption.removeAttribute('selected')
  }

  render() {
    return (
      <div onClick={(e) => this.clicked.emit(e)}><slot /></div>
    )
  }
}
