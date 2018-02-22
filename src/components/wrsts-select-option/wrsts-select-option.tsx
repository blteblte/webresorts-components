import { Component, Prop, Event, EventEmitter, Element, Method } from '@stencil/core';

@Component({
  tag: 'wrsts-select-option',
  styleUrl: 'wrsts-select-option.scss'
})
export class WrstsSelectOption {

  @Element() wrstsSelectOption: WrstsSelectOption & HTMLElement
  slotElement: HTMLElement

  @Prop() value: string
  @Prop() selected: boolean
  @Event() clicked: EventEmitter

  componentDidLoad() {
    this.slotElement = this.wrstsSelectOption
      .children[0] /* div */ as any
  }

  @Method() getSlot() {
    return this.slotElement
  }

  render() {
    return (
      <div onClick={(e) => this.clicked.emit(e)}><slot /></div>
    )
  }
}
