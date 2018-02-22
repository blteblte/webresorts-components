import { Component, Prop, State, Element, Listen, Method, Watch, Event, EventEmitter } from '@stencil/core';
import { WrstsSelectOption } from '../wrsts-select-option/wrsts-select-option';

@Component({
  tag: 'wrsts-select',
  styleUrl: 'wrsts-select.scss'
})
export class WrstsSelect {

  @Element() wrstsSelect: WrstsSelect & HTMLElement
  select: HTMLSelectElement
  wrstsSelectSelect: HTMLElement

  @Event() change: EventEmitter

  @Prop() id: string
  @Prop() name: string
  @Prop() placeholder: string
  @Prop() search: boolean

  @Prop() selectedIndex: string
  @Watch('selectedIndex') onSelectedIndexChanged(newValue, oldValue) {
    if (newValue !== undefined && newValue !== null && parseInt(newValue, 10) !== NaN) {
      if (newValue !== oldValue) this.selectOptionByIndex(parseInt(newValue, 10))
    } else {
      this.unselectAllOptions()
    }
  }

  @Prop() selectedValue: string
  @Watch('selectedValue') onSelectedValueChanged(newValue, oldValue) {
    if (newValue !== undefined && newValue !== null && newValue !== '') {
      if (newValue !== oldValue) this.selectOptionByValue(newValue)
    } else {
      this.unselectAllOptions()
    }
  }


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
      : this.placeholder || ''
  }

  componentDidLoad() {
    this.select = this.wrstsSelect.querySelector('select')

    this.wrstsSelectOptions = Array.prototype.slice.call(
      this.wrstsSelect.querySelectorAll('wrsts-select-option')
    )
    this.wrstsSelectSelect = this.wrstsSelect.querySelector('.wrsts-select-select')

    this.wrstsSelectOptions.forEach((wrstsSelectOption, index) => {
      (wrstsSelectOption as any).addEventListener('clicked', () => {
        this.selectIndex(index)
      })
    })
  }

  @Method() selectIndex(index: number) {
    this.wrstsSelect.setAttribute('selected-index', index.toString())
  }

  @Method() selectValue(value: string) {
    this.wrstsSelect.setAttribute('selected-value', value)
  }

  selectOptionByIndex(index: number) {
    this.wrstsSelectOptions.forEach((option, i) => {
      if (i !== index) {
        option.unselect()
      } else {
        option.select()
      }
    })

    this.select.selectedIndex = index
    this.change.emit()
  }

  selectOptionByValue(value: string) {
    this.wrstsSelectOptions.forEach((option, i) => {
      if (option.value !== value) {
        option.unselect()
      } else {
        option.select()
        this.select.selectedIndex = i
      }
    })

    this.change.emit()
  }

  unselectAllOptions() {
    this.wrstsSelectOptions.forEach(o => o.unselect())
  }

  onSelectClicked() {
    this.showDropdown = !this.showDropdown
  }

  getOptionsVisibilityClass() {
    return this.showDropdown
      ? 'visible'
      : 'hidden'
  }

  render() {
    return (
      <div>

        <select name={this.name} id={this.id}>
          {this.wrstsSelectOptions.map((wrstsOption) =>
            <option value={wrstsOption.value}>{wrstsOption.getSlot().innerText}</option>
          )}
        </select>

        <div onClick={this.onSelectClicked.bind(this)}
          class={'wrsts-select-select ' + this.getOptionsVisibilityClass()}>
            {this.selectedText}
        </div>
        <div class={'wrsts-select-options ' + this.getOptionsVisibilityClass()}>
          <slot />
        </div>
      </div>
    )
  }
}
