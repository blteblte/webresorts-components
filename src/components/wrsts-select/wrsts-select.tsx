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

  @Prop() focused: boolean


  @State() wrstsSelectOptions: WrstsSelectOption[] = []
  @State() showDropdown: boolean

  // todo: celan up
  @Listen('document:click') onDocumentClick(e) {
    if (e.target !== this.wrstsSelectSelect) {
      if (this.showDropdown) {
        this.showDropdown = false
      }
      if (this.focused) {
        this.wrstsSelect.removeAttribute('focused')
      }
    } else {
      this.wrstsSelect.setAttribute('focused', 'true')
    }
  }

  @Listen('document:keydown.up') handleUp(e) {
    if (!this.showDropdown) { return }
    e.preventDefault()

    let prevIndex = 0
    const focusedIndex = this.wrstsSelectOptions.findIndex(x => x.focused)
    if (focusedIndex > 0) {
      prevIndex = focusedIndex - 1
    }
    if (focusedIndex > -1) this.wrstsSelectOptions[focusedIndex].unfocus()
    const prevOption = this.wrstsSelectOptions[prevIndex]
    if (!prevOption.hidden) {  prevOption.focus() }
    else {
      const prevVisibleOption = this.wrstsSelectOptions.find((x, i) => !x.hidden && i <= prevIndex)
      if (prevVisibleOption) { prevVisibleOption.focus() }
    }
  }

  // todo: celan up
  @Listen('document:keydown.down') handleDown(e) {
    if (!this.showDropdown) { return }
    e.preventDefault()

    let nextIndex = 0
    const len = this.wrstsSelectOptions.length
    const focusedIndex = this.wrstsSelectOptions.findIndex(x => x.focused)
    if (focusedIndex > -1) {
      nextIndex = focusedIndex + 1
    }
    if (nextIndex > len - 1) {
      nextIndex = len - 1
    }
    if (focusedIndex > -1) this.wrstsSelectOptions[focusedIndex].unfocus()

    const nextOption = this.wrstsSelectOptions[nextIndex]
    if (!nextOption.hidden) { nextOption.focus() }
    else {
      const nextVisibleOption = this.wrstsSelectOptions.find((x, i) => !x.hidden && i >= nextIndex)
      if (nextVisibleOption) { nextVisibleOption.focus() }
    }
  }

  @Listen('document:keydown.enter') handleEnter(e) {
    if (!this.showDropdown) {
      if (this.focused) { this.showDropdown = true; return; }
      else { return }
    }
    e.preventDefault()

    const focusedIndex = this.wrstsSelectOptions.findIndex(x => x.focused)
    this.selectIndex(focusedIndex)
    this.showDropdown = false
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
      if (wrstsSelectOption.selected) {
        this.selectIndex(index)
      }
    })
  }

  @Method() selectIndex(index: number) {
    this.wrstsSelect.setAttribute('selected-index', index.toString())
  }

  @Method() selectValue(value: string) {
    this.wrstsSelect.setAttribute('selected-value', value)
  }

  private selectOptionByIndex(index: number) {
    this.wrstsSelectOptions.forEach((option, i) => {
      if (i !== index) {
        option.unselect()
        option.unfocus()
      } else {
        option.select()
        option.focus()
      }
    })

    this.select.selectedIndex = index
    this.change.emit()
  }

  private selectOptionByValue(value: string) {
    this.wrstsSelectOptions.forEach((option, i) => {
      if (option.value !== value) {
        option.unselect()
        option.unfocus()
      } else {
        option.select()
        option.focus()
        this.select.selectedIndex = i
      }
    })

    this.change.emit()
  }

  private unselectAllOptions() {
    this.wrstsSelectOptions.forEach(o => {
      o.unselect()
      o.unfocus()
    })
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
