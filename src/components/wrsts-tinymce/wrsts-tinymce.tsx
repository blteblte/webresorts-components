import { Component, Element, Prop } from '@stencil/core';
import tinymce from 'tinymce';

@Component({
  tag: 'wrsts-tinymce',
  styleUrl: 'wrsts-tinymce.scss',
  shadow: false
})
export class WrstsTinymce {

  @Element() wrstsTinymce: WrstsTinymce & HTMLElement
  textarea: HTMLElement

  @Prop() id: string

  @Prop() name: string

  componentDidLoad() {
    this.textarea = this.wrstsTinymce.querySelector('textarea')
    tinymce.init({ target: this.textarea })
  }

  render() {
    return (
      <textarea id={this.id} name={this.name}></textarea>
    )
  }
}
