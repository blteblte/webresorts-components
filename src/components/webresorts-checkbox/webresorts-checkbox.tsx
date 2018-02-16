import { Component, Event, EventEmitter, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'webresorts-checkbox',
  styleUrl: 'webresorts-checkbox.scss',
  shadow: false
})
export class WebresortsCheckbox {

  @Event() change: EventEmitter

  @Element() webresortsCheckBox: HTMLElement
  checkbox: HTMLInputElement

  @Prop({ mutable: true }) checked: boolean
  @Prop() disabled: boolean
  @Prop() name: string
  @Prop() id: string

  componentDidLoad() {
    this.checkbox = this.webresortsCheckBox.querySelector('input[type="checkbox"]')
    this.checkbox.checked = this.checked
  }

  @Method() check() {
    if (this.checked) { return }
    this.checked = true
    this.checkbox.checked = true
    this.change.emit(true)
  }

  @Method() uncheck() {
    if (!this.checked) { return }
    this.checked = false
    this.checkbox.checked = false
    this.change.emit(false)
  }

  @Method() getNativeElement() {
    return this.checkbox
  }

  clickHandler() {
    if (this.disabled) { return }
    if (this.checked) { this.uncheck() }
    else { this.check() }
  }

  getCheckboxSrc () {
    return this.checked
      ? '/assets/img/checkbox-checked.svg'
      : '/assets/img/checkbox-unchecked.svg'
  }

  render() {
    return (
      <div class="webresorts-checkbox-container" onClick={this.clickHandler.bind(this)}>
        <input type="checkbox" name={this.name} id={this.id} />
        <img class="icon" src={this.getCheckboxSrc()} />
        <label><slot /></label>
      </div>
    )
  }
}
