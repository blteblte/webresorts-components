import { Component, Element, Method, Prop, Event, EventEmitter } from '@stencil/core';
import { SerializationType } from '../../lib/component-serialization';
import { httpAsync } from '../../lib/http/http';
import { isFunction } from '../../lib/js-helpers/js-helpers';

const FORM_ELEMENTS_QUERY_SELECTOR =
    'wrsts-checkbox'
  + ', wrsts-select'
  + ', wrsts-tinymce'

@Component({
  tag: 'wrsts-json-form'
})
export class WrstsJsonForm {

  @Element() wrstsJsonForm: WrstsJsonForm & HTMLElement
  formElements: any[]
  form: HTMLFormElement

  @Event() submitted: EventEmitter

  @Prop() action: string
  @Prop() method: string
  @Prop() target: string
  @Prop() ajax: boolean

  componentDidLoad() {
    this.rebind()
  }

  @Method() rebind() {
    this.formElements = Array.prototype.slice.call(
      this.wrstsJsonForm.querySelectorAll(FORM_ELEMENTS_QUERY_SELECTOR)
    )
    this.form = this.wrstsJsonForm.querySelector('form')
  }

  @Method() toJson(type: SerializationType = 0) {
    return this.formElements.reduce((arr, next) => {
      arr.push(next.toJson(type))
      return arr
    }, [])
  }

  @Method() submit(callback?, type: SerializationType = 0) {
    if (!this.ajax && this.form) {
      this.form.submit()
      this.submitted.emit()
    } else {
      const data = this.toJson(type)
      httpAsync(this.action, this.method, JSON.stringify(data))
        .then((e) => { isFunction(callback) && callback(e); this.submitted.emit(e) })
        .catch((e) => { isFunction(callback) && callback(e); this.submitted.emit(e) })
    }
  }

  render() {
    return (
      <div>
        {this.ajax
          ? <slot />
          : <form action={this.action} method={this.method} target={this.target} novalidate>
              <slot />
            </form>
        }
      </div>
    )
  }
}
