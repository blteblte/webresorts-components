import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wrsts-input',
  styleUrl: 'wrsts-input.scss'
})
export class WrstsInput {

  @Prop() type: string
  @Prop() id: string
  @Prop() name: string
  @Prop() value: string
  @Prop() title: string

  @Prop() placeholder: string
  @Prop() maxlength: number
  @Prop() minlength: number
  @Prop() size: number
  @Prop() autocomplete: 'on' | 'off'
  @Prop() formaction: string
  @Prop() formenctype: string
  @Prop() formmethod: string
  @Prop() formtarget: string
  @Prop() width: number
  @Prop() height: number
  @Prop() list: string
  @Prop() min: number
  @Prop() max: number
  @Prop() step: number
  @Prop() patern: string

  @Prop() readonly: boolean
  @Prop() disabled: boolean
  @Prop() autofocus: boolean
  @Prop() formnovalidate: boolean
  @Prop() multiple: boolean
  @Prop() required: boolean

  render() {
    return (
      <input type={this.type} id={this.id} name={this.name} value={this.value} title={this.title}

        autocomplete={this.autocomplete}
        placeholder={this.placeholder}
        formenctype={this.formenctype}
        formaction={this.formaction}
        formmethod={this.formmethod}
        formtarget={this.formtarget}
        maxlength={this.maxlength}
        minlength={this.minlength}
        list={this.list}
        min={this.min}
        max={this.max}
        step={this.step}
        pattern={this.patern}

        height={this.height}
        width={this.width}

        size={this.size}

        {...this.formnovalidate}
        {...this.autofocus}
        {...this.required}
        {...this.readonly}
        {...this.multiple}
        {...this.disabled}
      />
    )
  }
}
