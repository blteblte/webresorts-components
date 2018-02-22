import {
    Component
  , Element
  , Prop
  , Method
  , Event
  , EventEmitter
} from '@stencil/core';
import tinymce from 'tinymce';
import { ComponentSerializer, ComponentSerializerResolver, SerializationType } from '../../lib/component-serialization';

@Component({
  tag: 'wrsts-tinymce',
  styleUrl: 'wrsts-tinymce.scss',
  shadow: false
})
export class WrstsTinymce {

  @Element() wrstsTinymce: WrstsTinymce & HTMLElement
  textarea: HTMLElement
  tinymce: any
  editor: any
  tinyMceOptions = {}

  @Event() change: EventEmitter
  @Event() load: EventEmitter

  @Prop() id: string
  @Prop() name: string
  @Prop() value: string
  @Prop() width: string
  @Prop() height: string

  @Prop() baseUrl: string = ""

  get h() {
    let h = parseFloat(this.height) || 201
    if (h < 201) { h = 201 }
    return h - (135 /* editor added height */)
  }

  get w() {
    const w = parseFloat(this.width) || 420
    return w - (2 /* editor added width */)
  }

  componentDidLoad() {
    this.tinymce = tinymce
    this.textarea = this.wrstsTinymce.querySelector('textarea')
    this.textarea.addEventListener('change', (e) => this.change.emit(e))

    this.tinymce.init({
      target: this.textarea,
      width: this.w,
      height: this.h,
      skin_url: `${this.baseUrl}assets/vendor/tinymce/skins/lightgray`,
      theme_url: `${this.baseUrl}assets/vendor/tinymce/themes/modern/theme.min.js`,
      init_instance_callback: (editor) => {
        this.editor = editor;
        editor.on('init', (e) => { this.load.emit(e) })
      }
    })
  }

  @Method() getNativeElement() { return this.textarea }
  @Method() getTinyMce() { return this.tinymce }
  @Method() getEditor() { return this.editor }

  @Method() toJson(type: SerializationType = 0) {
    return ComponentSerializer.Serialize(
        this.wrstsTinymce
      , type
      , { valueResolver: ComponentSerializerResolver.ResolveTextareaValue }
    )
  }

  render() {
    return (
      <textarea id={this.id} name={this.name} value={this.value}></textarea>
    )
  }
}
