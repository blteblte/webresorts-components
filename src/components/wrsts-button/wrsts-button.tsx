import { Component, Prop } from '@stencil/core';
import { WrstsJsonForm } from '../wrsts-json-form/wrsts-json-form';

@Component({
  tag: 'wrsts-button',
  styleUrl: 'wrsts-button.scss'
})
export class WrstsButton {

  @Prop() formId: string
  wrstsJsonForm: WrstsJsonForm

  get hasForm() {
    return this.formId !== undefined && this.formId !== null
  }

  componentDidLoad() {
    if (this.hasForm) {
      this.wrstsJsonForm = (document.getElementById(this.formId) as any)
    }
  }

  onClick(e) {
    if (this.hasForm) {
      if (this.wrstsJsonForm.ajax) {
        e.preventDefault()
      }
      this.wrstsJsonForm.submit()
    }
  }

  render() {
    return (
      <button onClick={this.onClick.bind(this)}><slot /></button>
    )
  }
}
