import {
    Component
  , Event
  , EventEmitter
  , Prop
  , Watch
  , Method
  , Element
  , State
} from '@stencil/core';

import {
    ComponentSerializer
  , ComponentSerializerResolver
  , SerializationType
} from './../../lib/component-serialization';

interface ChildBoxBinding {
  elementRef: WrstsCheckbox & HTMLElement,
  listener: any
}

@Component({
  tag: 'wrsts-checkbox',
  styleUrl: 'wrsts-checkbox.scss',
  shadow: false
})
export class WrstsCheckbox {

  /**
   * WrstsCheckbox DOM element reference
   */
  @Element() wrstsCheckBox: WrstsCheckbox & HTMLElement

  /**
   * Fires on checkbox change
   */
  @Event() change: EventEmitter

  /**
   * WrstsCheckbox 'checked' attribute. Mimics native checkbox 'checked' attribute
   */
  @Prop({ mutable: true }) checked: boolean = false

  /**
   * native checkbox 'name' attribute
   */
  @Prop() name: string

  /**
   * native checkbox 'id' attribute
   */
  @Prop() id: string

  /**
   * native checkbox 'value' attribute
   */
  @Prop() value: string

  /**
   * WrstsCheckbox 'indeterminate' attribute controlls if checkbox should have
   * 'indeterminate' state when used as a toggler and not all of checkboxes are selected
   */
  @Prop() indeterminate: boolean

  /**
   * WrstsCheckbox indeterminate state
   */
  @State() indeterminateState: boolean

  /**
   * WrstsCheckbox 'hidden' attribute. Hides the DOM element
   */
  @Prop() hidden: boolean

  /**
   * WrstsCheckbox 'disabled' attribute. Disables the DOM element
   */
  @Prop() disabled: boolean = false

  /**
   * WrstsCheckbox 'group' attribute. Specifies if checkbox belongs to certain group
   */
  @Prop() group: string

  /**
   * WrstsCheckbox 'group-toggler' attribute. Specifies the toggler checkbox for the group
   */
  @Prop() groupToggler: string

  /**
   * Watch for 'group-toggler' attribute change realtime
   */
  @Watch('groupToggler') onGroupTogglerChanged(newValue: string/*, oldValue: string*/) {
    if (!(newValue !== null && newValue !== undefined && newValue !== '')) {
      this.releaseGroupBindings()
    } else {
      this.rebindGroup()
    }
  }

  /* native input[type="checkbox"] element ref */
  checkbox: HTMLInputElement

  /* group boxes reference if item is toggler */
  groupBoxesBindings: ChildBoxBinding[] = []

  /**
   * Check the checkbox programmatically
   */
  @Method() check(handleGroupElements?: boolean) {

    if (this.indeterminate) {
      this.indeterminateState = false
      this.checkbox.indeterminate = false
    }

    if (this.checked) { return }
    this.checked = true
    this.checkbox.checked = true
    this.isToggler && !handleGroupElements && this.handleGroupElementsOnTogglerCheck(true)
    this.change.emit(true)
  }

  /**
   * Uncheck the checkbox programmatically
   */
  @Method() uncheck(handleGroupElements?: boolean) {

    if (this.indeterminate) {
      this.indeterminateState = false
      this.checkbox.indeterminate = false
    }

    if (!this.checked) { return }
    this.checked = false
    this.checkbox.checked = false
    this.isToggler && !handleGroupElements && this.handleGroupElementsOnTogglerCheck(false)
    this.change.emit(false)
  }

  /**
   * Set checkbox state as indeterminate. WrstsCheckbox element must have 'indeterminate' attribute
   */
  @Method() setIndeterminate() {
    if (!(this.indeterminate && !this.indeterminateState)) { return }
    this.indeterminateState = true
    this.checked = false
    this.checkbox.checked = false
    this.checkbox.indeterminate = true
    this.change.emit(false)
  }

  /**
   * Get the native HTMLInputElement
   */
  @Method() getNativeElement() {
    return this.checkbox
  }

  /**
   * Rebind group elements for toggler checkbox
   */
  @Method() rebindGroup() {
    if (!this.isToggler) { return }

    this.releaseGroupBindings()

    const groupBoxes = Array.prototype.slice
      .call(document.querySelectorAll(`wrsts-checkbox[group="${this.groupToggler}"]`))

    if (!groupBoxes) { return }

    this.groupBoxesBindings = []

    groupBoxes.forEach((el) => {
      this.groupBoxesBindings.push({
        elementRef: el,
        listener: (el as any).addEventListener('change', this.changeGroupElementHandler.bind(this))
      })
    })
  }

  /**
   * Get all the binded group boxes without toggler
  */
  @Method() getGroupBoxesBindings() {
    return this.groupBoxesBindings
  }

  /**
   * Get collection of data attributes as { [name]: value }
   */
  @Method() getData(type = 1) {
    return ComponentSerializerResolver.ResolveDataAttributes(this.wrstsCheckBox, type as SerializationType)
  }

  /**
   * get json object for checkbox or group
  */
  @Method() toJson(type = 0) {
    const serializationType = type as SerializationType
    if (this.isToggler) {
      return ComponentSerializer.SerializeData(
          [ this.wrstsCheckBox, ...this.groupBoxesBindings.map(el => el.elementRef) ]
        , serializationType
        , { valueResolver: ComponentSerializerResolver.ResolveCheckboxValue }
      )
    } else {
      return ComponentSerializer.Serialize(
          this.wrstsCheckBox
        , serializationType
        , { valueResolver: ComponentSerializerResolver.ResolveCheckboxValue }
      )
    }
  }

  componentDidLoad() {
    this.checkbox = this.wrstsCheckBox.querySelector('input[type="checkbox"]')
    this.checkbox.checked = this.checked
    this.rebindGroup()
  }

  get totalGroupBoxesCount() {
    return this.groupBoxesBindings
      .filter(x => x.elementRef.group === this.groupToggler)
      .length
  }

  get groupCheckedCount() {
    return this.groupBoxesBindings
      .filter(x => x.elementRef.group === this.groupToggler
                   && x.elementRef.checked)
      .length
  }

  get isToggler() {
    return this.groupToggler !== undefined
        && this.groupToggler !== null
        && this.groupToggler !== ''
  }

  releaseGroupBindings() {
    if (this.groupBoxesBindings) {
      this.groupBoxesBindings.forEach(x => {
        (x.elementRef as any).removeEventListener('change', x.listener)
      })
    }
    this.groupBoxesBindings = []
  }

  changeGroupElementHandler() {
    if (this.indeterminate) {
      const total = this.totalGroupBoxesCount
      const checked = this.groupCheckedCount
      if (checked > 0 && checked < total) {
        this.setIndeterminate()
      } else if (checked === 0) {
        this.uncheck(true)
      } else {
        this.check(true)
      }
    } else {
      if (this.groupCheckedCount === this.totalGroupBoxesCount) {
        this.check(true)
      } else {
        this.uncheck(true)
      }
    }
  }

  handleGroupElementsOnTogglerCheck(checked: boolean) {
    this.groupBoxesBindings.forEach((x) => {
      if (x.elementRef.group === this.groupToggler) {
        if (checked) {
          x.elementRef.check()
        } else {
          x.elementRef.uncheck()
        }
      }
    })
  }

  clickHandler() {
    if (this.disabled) { return }
    if (this.checked) { this.uncheck() }
    else { this.check() }
  }

  getCheckboxIcon () {
    if (this.isToggler && this.indeterminate) {
      if (this.indeterminateState) {
        return <i class="indeterminate"></i>
      } else if (!this.checked) {
        return <i class="unchecked"></i>
      } else {
        return <i class="checked"></i>
      }

    } else {
      return this.checked
        ? <i class="checked"></i>
        : <i class="unchecked"></i>
    }
  }

  render() {
    return (
      <div onClick={this.clickHandler.bind(this)}>
        <input type="checkbox" name={this.name} id={this.id} value={this.value} />
        {this.getCheckboxIcon()}
        <label>&nbsp;<slot /></label>
      </div>
    )
  }
}
