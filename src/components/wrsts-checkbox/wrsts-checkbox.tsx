import {
    Component
  , Event
  , EventEmitter
  , Prop
  , Watch
  , Method
  , Element
} from '@stencil/core';

interface ChildBoxBinding {
  index: number,
  elementRef: WrstsCheckbox,
  listener: any
}

@Component({
  tag: 'wrsts-checkbox',
  styleUrl: 'wrsts-checkbox.scss',
  shadow: false
})
export class WrstsCheckbox {

  @Element() webresortsCheckBox: HTMLElement
  checkbox: HTMLInputElement

  groupBoxesBindings: ChildBoxBinding[] = []
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

  @Event() change: EventEmitter

  @Prop({ mutable: true }) checked: boolean
  @Prop() disabled: boolean
  @Prop() name: string
  @Prop() id: string

  @Prop() group: string
  @Prop() groupToggler: string
  @Watch('groupToggler') onGroupTogglerChanged(newValue: string/*, oldValue: string*/) {
    if (!(newValue !== null && newValue !== undefined && newValue !== '')) {
      this.releaseGroupBindings()
    } else {
      this.rebindGroupElements()
    }
  }

  componentDidLoad() {
    this.checkbox = this.webresortsCheckBox.querySelector('input[type="checkbox"]')
    this.checkbox.checked = this.checked

    this.rebindGroupElements()
  }

  /**
   * Check the checkbox programmatically
   */
  @Method() check() {
    if (this.checked) { return }
    this.checked = true
    this.checkbox.checked = true
    this.change.emit(true)
  }

  /**
   * Uncheck the checkbox programmatically
   */
  @Method() uncheck() {
    if (!this.checked) { return }
    this.checked = false
    this.checkbox.checked = false
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
  @Method() rebindGroupElements() {
    if (!(this.groupToggler !== undefined && this.groupToggler !== null && this.groupToggler !== '')) {
      return
    }

    this.releaseGroupBindings()

    const groupBoxes = Array.prototype.slice
      .call(document.querySelectorAll(`wrsts-checkbox[group="${this.groupToggler}"]`))

    if (!groupBoxes) { return }

    this.groupBoxesBindings = []

    groupBoxes.forEach((el: WrstsCheckbox, i: number) => {
      this.groupBoxesBindings.push({
        index: i,
        elementRef: el,
        listener: (el as any).addEventListener('change', this.changeGroupElementHandler.bind(this))
      })
    })
  }

  /**
   * Get all the binded group boxes without toggler
  */
  @Method() getGroupBoxes() {
    return this.groupBoxesBindings
  }

  @Method() toJsonObject() {

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
      this.check()
    } else {
      this.uncheck()
    }
  }

  handleGroupElementsOnTogglerCheck(checked: boolean) {
    this.groupBoxesBindings.forEach((x) => {
      if (x.elementRef.group === this.groupToggler) {
        x.elementRef.checked = checked
      }
    })
  }

  clickHandler() {
    if (this.disabled) { return }
    if (this.checked) { this.uncheck() }
    else { this.check() }
    this.handleGroupElementsOnTogglerCheck(this.checked)
  }

  getCheckboxIcon () {
    return this.checked
      ? <i class="checked"></i>
      : <i class="unchecked"></i>
  }

  render() {
    return (
      <div class="webresorts-checkbox-container" onClick={this.clickHandler.bind(this)}>
        <input type="checkbox" name={this.name} id={this.id} />
        {this.getCheckboxIcon()}
        <label><slot /></label>
      </div>
    )
  }
}
