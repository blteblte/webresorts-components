import {
    Component
  , Event
  , EventEmitter
  , Prop
  , Watch
  , Method
  , Element
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

  @Element() wrstsCheckBox: WrstsCheckbox & HTMLElement

  @Event() change: EventEmitter

  @Prop({ mutable: true }) checked: boolean = false
  @Prop() disabled: boolean = false
  @Prop() name: string
  @Prop() id: string
  @Prop() hidden: boolean

  @Prop() group: string
  @Prop() groupToggler: string
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
    if (!this.checked) { return }
    this.checked = false
    this.checkbox.checked = false
    this.isToggler && !handleGroupElements && this.handleGroupElementsOnTogglerCheck(false)
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
          this.groupBoxesBindings.map(el => el.elementRef)
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
    if (this.groupCheckedCount === this.totalGroupBoxesCount) {
      this.check(true)
    } else {
      this.uncheck(true)
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
    return this.checked
      ? <i class="checked"></i>
      : <i class="unchecked"></i>
  }

  render() {
    return (
      <div onClick={this.clickHandler.bind(this)}>
        <input type="checkbox" name={this.name} id={this.id} />
        {this.getCheckboxIcon()}
        <label><slot /></label>
      </div>
    )
  }
}
