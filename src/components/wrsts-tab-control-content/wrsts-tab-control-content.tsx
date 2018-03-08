import { Component, Prop, Method, Element } from '@stencil/core';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';

export type WrstsTabControlContentType = WrstsTabControlContent & HTMLElement

@Component({
  tag: 'wrsts-tab-control-content',
  styleUrl: 'wrsts-tab-control-content.scss',
  shadow: true
})
export class WrstsTabControlContent extends WrstsBaseShadow {
  constructor() { super() }

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
