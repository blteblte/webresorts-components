import { Component, Prop, Method, Element } from '@stencil/core';

export type WrstsTabControlContentType = WrstsTabControlContent & HTMLElement

@Component({
  tag: 'wrsts-tab-control-content',
  styleUrl: 'wrsts-tab-control-content.scss',
  shadow: true
})
export class WrstsTabControlContent {

  @Element() elementRef: WrstsTabControlContentType
  @Prop({ mutable: true }) active: boolean

  @Method() setActive() {
    if (!this.active) {
      this.active = true
    }
  }

  @Method() unsetActive() {
    if (this.active) {
      this.active = false
    }
  }

  render() {
    return (
      <div class={this.active ? 'active' : ''}>
        <slot />
      </div>
    )
  }
}
