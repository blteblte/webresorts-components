import { Component, Prop, State, Element, Listen } from '@stencil/core';
import { WrstsSelectOption } from '../wrsts-select-option/wrsts-select-option';

@Component({
  tag: 'wrsts-select',
  styleUrl: 'wrsts-select.scss'
})
export class WrstsSelect {

  @Element() wrstsSelect: WrstsSelect & HTMLElement
  select: HTMLElement
  wrstsSelectSelect: HTMLElement

  @Prop() id: string
  @Prop() name: string
  @Prop() search: boolean

  @State() wrstsSelectOptions: WrstsSelectOption[] = []
  @State() showDropdown: boolean

  @Listen('document:click') onDocumentClick(e) {
    if (e.target !== this.wrstsSelectSelect) {
      if (this.showDropdown) this.showDropdown = false
    }
  }

  get selectedOption() {
    return this.wrstsSelectOptions.find(x => x.selected)
  }

  get selectedText() {
    return this.selectedOption
      ? this.selectedOption.getSlot().innerText
      : '--'
  }

  componentDidLoad() {
    this.wrstsSelectOptions = Array.prototype.slice.call(
      this.wrstsSelect.querySelectorAll('wrsts-select-option')
    )
    this.wrstsSelectSelect = this.wrstsSelect.querySelector('.wrsts-select-select')
  }

  onSelectClicked() {
    console.log('select:clicked')
    this.showDropdown = !this.showDropdown
  }

  render() {
    return (
      <div>

        <select name={this.name} id={this.id}>
          {this.wrstsSelectOptions.map((wrstsOption) =>
            <option value={wrstsOption.value}>{wrstsOption.getSlot().innerText}</option>
          )}
        </select>

        <div onClick={this.onSelectClicked.bind(this)} class="wrsts-select-select">{this.selectedText}</div>
        <div class={'wrsts-select-options ' + (this.showDropdown ? 'visible' : 'hidden')}>
          <slot />
        </div>
      </div>
    )
  }
}
