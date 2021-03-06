import { Component, Prop, State, Element, Listen, Method, Watch, Event, EventEmitter } from '@stencil/core';
import { WrstsSelectOption, WrstsSelectOptionType } from '../wrsts-select-option/wrsts-select-option';
import { SerializationType, ComponentSerializer, ComponentSerializerResolver } from '../../lib/component-serialization';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';

// TODO: huge cleanup needed

export type WrstsSelectType = WrstsSelect & HTMLElement

@Component({
  tag: 'wrsts-select',
  styleUrl: 'wrsts-select.scss',
  shadow: true
})
export class WrstsSelect extends WrstsBaseShadow {
  constructor() { super() }

  @Method() getShadowRoot(): ShadowRoot {
    return (this as any).elementRef.shadowRoot || ((this as any).elementRef as any)
  }

  @Method() getSlot() {
    return this.getShadowRoot().querySelector('slot') || this.getShadowRoot()
  }

  @Method() getSlotNodes<T extends HTMLElement>(name?: string): T[] {
    const slotSelector = name ? `slot[name="${name}"]` : 'slot'
    let assignedNodes
    const slot = this.getShadowRoot().querySelector(slotSelector)
    if (slot) {
      assignedNodes = (slot as any).assignedNodes()
    } else {
      assignedNodes = this.getShadowRoot().querySelectorAll('*')
    }
    return Array.prototype.slice.call(
      assignedNodes
    )
  }

  @Method() shadowQuerySelector<T extends HTMLElement>(query: string): T {
    return this.getShadowRoot().querySelector(query)
  }

  @Method() shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[] {
    return Array.prototype.slice.call(
      this.getShadowRoot().querySelectorAll(query)
    )
  }

  @Method() getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
    return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase()) as T[]
  }

  @Element() elementRef: WrstsSelectType
  select: HTMLSelectElement
  wrstsSelectSelect: HTMLElement
  input: HTMLInputElement

  setProp = 0 // hax

  @Event() change: EventEmitter

  @Prop() id: string
  @Prop() name: string
  @Prop() placeholder: string
  @Prop() search: boolean

  @Prop({ mutable: true }) selectedIndex: string
  @Watch('selectedIndex') onSelectedIndexChanged(newValue, oldValue) {
    //console.log('watch selected index')
    if (newValue !== undefined && newValue !== null && parseInt(newValue, 10) !== NaN) {
      if (newValue !== oldValue) {
        this.selectOptionByIndex(parseInt(newValue, 10))
      }
    } else {
      this.selectedValue = null
      this.unselectAllOptions()
    }
  }

  @Prop({ mutable: true }) selectedValue: string
  @Watch('selectedValue') onSelectedValueChanged(newValue, oldValue) {
    if (newValue !== undefined && newValue !== null && newValue !== '') {
      if (newValue !== oldValue) {
        this.selectOptionByValue(newValue)
      }
    } else {
      this.selectedIndex = null
      this.unselectAllOptions()
    }
  }

  @Prop({ mutable: true }) focused: boolean

  @State() wrstsSelectOptions: WrstsSelectOptionType[] = []
  @State() showDropdown: boolean

  @Listen('document:click') onDocumentClick(e) {
    if (e.target !== this.elementRef && e.target !== this.input) {
      if (this.showDropdown) {
        this.toggleDropdown(false)
      }
      if (this.focused) {
        this.focused = false
      }
    } else {
      this.focused = true
    }
  }

  // todo: celan up
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
      let elFound = false
      let loop = false
      let i = prevIndex
      while(!loop) {
        if (!this.wrstsSelectOptions[i].hidden) {
          this.wrstsSelectOptions[i].focus()
          loop = true
          elFound = true
        }
        if (i === 0) { loop = true }
        i--
      }
      if (!elFound && focusedIndex > -1) { this.wrstsSelectOptions[focusedIndex].focus() }
    }
  }

  // todo: celan up
  @Listen('document:keydown.down') handleDown(e) {
    if (!this.showDropdown) { return }
    e.preventDefault()

    //console.log(this.wrstsSelectOptions)

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
      let elFound = false
      let loop = false
      let i = nextIndex
      while(!loop) {
        if (!this.wrstsSelectOptions[i].hidden) {
          this.wrstsSelectOptions[i].focus()
          loop = true
          elFound = true
        }
        if (i === this.wrstsSelectOptions.length - 1) { loop = true }
        i++
      }
      if (!elFound && focusedIndex > -1) { this.wrstsSelectOptions[focusedIndex].focus() }
    }
  }

  @Listen('document:keydown.enter') handleEnter(e) {
    if (!this.showDropdown) {
      if (this.focused) { this.toggleDropdown(true); return; }
      else { return }
    }
    e.preventDefault()

    const focusedIndex = this.wrstsSelectOptions.findIndex(x => x.focused)
    if (focusedIndex > -1) {
      this.selectIndex(focusedIndex)
      this.toggleDropdown(false)
    }
  }

  @Listen('document:keydown.escape') handleEsc(e) {
    if (!this.showDropdown) { return }
    e.preventDefault()
    this.toggleDropdown(false)
  }

  get selectedOption() {
    return this.wrstsSelectOptions.find(x => x.selected)
  }

  get selectedText() {
    return this.selectedOption
      ? this.selectedOption.getSlotNodes()
      : this.placeholder || ''
  }

  componentDidLoad() {
    this.bind()
  }

  /**
   * this should occur automatically - if <slot /> get's changed
   *  ... how do we look for a <slot /> changes?
   */
  @Method() bind() {
    this.select = this.shadowQuerySelector('select')
    this.wrstsSelectSelect = this.shadowQuerySelector('.wrsts-select-select')

    this.wrstsSelectOptions = this.getSlotElementsByTagName<WrstsSelectOptionType>('wrsts-select-option')
    //console.log(this.wrstsSelectOptions)
    this.wrstsSelectOptions.forEach((wrstsSelectOption, index) => {
      wrstsSelectOption.index = index.toString()
      wrstsSelectOption.addEventListener('clicked', () => {
        this.selectIndex(index)
      })
      if (wrstsSelectOption.selected) {
        this.selectIndex(index)
      }
    })

    if (this.search) {
      this.input = this.shadowQuerySelector('input')
      this.input.addEventListener('change', e => e.stopPropagation())
    }
  }

  @Method() selectIndex(index: number) {
    this.selectedIndex = index.toString()
  }

  @Method() selectValue(value: string) {
    this.selectedValue = value
  }

  private selectOptionByIndex(index: number) {
    this.setProp++ // this should we redone totally...
    let selectedOption: WrstsSelectOption
    this.wrstsSelectOptions.forEach((option, i) => {
      if (i !== index) {
        option.unselect()
        option.unfocus()
      } else {
        selectedOption = option
        option.select()
        option.focus()
      }
    })

    this.select.selectedIndex = index
    this.selectedValue = selectedOption.value

    if (this.setProp === 1) {
      this.change.emit()
    }
    this.setProp--
  }

  private selectOptionByValue(value: string) {
    this.setProp++ // this should we redone totally...
    let selectedOption: WrstsSelectOption
    this.wrstsSelectOptions.forEach((option, i) => {
      if (option.value !== value) {
        option.unselect()
        option.unfocus()
      } else {
        selectedOption = option
        option.select()
        option.focus()
        this.select.selectedIndex = i
      }
    })

    this.selectedIndex = selectedOption.index

    if (this.setProp === 1) {
      this.change.emit()
    }
    this.setProp--
  }

  private unselectAllOptions() {
    this.wrstsSelectOptions.forEach(o => {
      o.unselect()
      o.unfocus()
    })
  }

  onSelectClicked() {
    this.toggleDropdown()
  }

  toggleDropdown(forceState: boolean = null) {
    if (forceState === null) {
      this.showDropdown = !this.showDropdown
    }
    else {
      this.showDropdown = forceState
    }
    if (this.showDropdown && this.search) {
      setTimeout(() => { this.input.focus() }, 100)
    }
  }

  getOptionsVisibilityClass() {
    return this.showDropdown
      ? 'visible'
      : 'hidden'
  }

  handleSearch(e) {
    const value = e.target.value
    this.wrstsSelectOptions.forEach((option) => {
      var isMatch = false
      if (option.getSlotNodes().filter(o => o.innerText.toLowerCase().indexOf(value.toLowerCase()) > -1)) {
        isMatch = true
      }
      if (option.value.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        isMatch = true
      }

      if (isMatch) {
        option.unhide()
      } else {
        option.hide()
      }
    })
  }

  @Method() toJson(type: SerializationType = 0) {
    return ComponentSerializer.Serialize(
        this.elementRef
      , type
      , { valueResolver: ComponentSerializerResolver.ResolveSelectValue }
    )
  }

  render() {
    return (
      <div class={this.focused ? 'focused' : null}>

        <select name={this.name} id={this.id}>
          {/* {this.wrstsSelectOptions.map((wrstsOption) =>
            <option value={wrstsOption.value}>{wrstsOption.getSlotNodes().reduce((p, n) => p += n.innerText, '')}</option>
          )} */}
        </select>

        <div onClick={this.onSelectClicked.bind(this)}
          class={'wrsts-select-select ' + this.getOptionsVisibilityClass()}>
            {this.selectedText}
        </div>
        <div class={'wrsts-select-options ' + this.getOptionsVisibilityClass()}>
          {this.search
            ? <input onKeyUp={this.handleSearch.bind(this)} type="text"/>
            : null}
          <slot />
        </div>
      </div>
    )
  }
}
