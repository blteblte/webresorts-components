import { Component, Event, EventEmitter, Prop, Method } from '@stencil/core';

@Component({
  tag: 'webresorts-checkbox',
  styleUrl: 'webresorts-checkbox.scss',
  shadow: true
})
export class WebresortsCheckbox {

  @Event() change: EventEmitter
  @Prop({ mutable: true }) checked: boolean
  @Prop() disabled: boolean

  @Method() check() {
    if (this.checked) { return }
    this.checked = true
    this.change.emit(true)
  }

  @Method() uncheck() {
    if (!this.checked) { return }
    this.checked = false
    this.change.emit(false)
  }

  clickHandler() {
    if (this.disabled) { return }
    if (this.checked) { this.uncheck() }
    else { this.check() }
  }

  getCheckboxUI () {
    return this.checked
      ? (
        <svg width="100%" height="100%" class="checked">
          <rect x="0" y="0" width="20" height="20" stroke="gray" stroke-width="2" fill="#fff" />
          <path d="M3 3 L10 17 L18 6 L10 14 Z" />
        </svg>
      )
      :(
        <svg width="100%" height="100%" class="unchecked">
          <rect x="0" y="0" width="20" height="20" stroke="gray" stroke-width="2" fill="#fff" />
        </svg>
      )
  }

  render() {
    return (
      <div class="webresorts-checkbox-container" onClick={this.clickHandler.bind(this)}>
        <i class="icon">{this.getCheckboxUI()}</i>
        <label><slot /></label>
      </div>
    )
  }
}
