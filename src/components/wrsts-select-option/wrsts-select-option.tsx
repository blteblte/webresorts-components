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
    if (!this.selected) this.wrstsSelectOption.setAttribute('selected', 'true')
  }

  @Method() unselect() {
    if (this.selected) this.wrstsSelectOption.removeAttribute('selected')
  }

  @Method() focus() {
    if (!this.focused) this.wrstsSelectOption.setAttribute('focused', 'true')
  }

  @Method() unfocus() {
    if (this.focused) this.wrstsSelectOption.removeAttribute('focused')
  }

  @Method() hide() {
    if (!this.hidden) this.wrstsSelectOption.setAttribute('hidden', 'true')
  }

  @Method() unhide() {
    if (this.hidden) this.wrstsSelectOption.removeAttribute('hidden')
  }

  render() {
    return (
      <div onClick={(e) => this.clicked.emit(e)}><slot /></div>
    )
  }
}
