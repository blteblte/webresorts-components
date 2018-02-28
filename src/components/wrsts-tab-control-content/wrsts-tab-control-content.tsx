import { Component, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'wrsts-tab-control-content',
  styleUrl: 'wrsts-tab-control-content.scss'
})
export class WrstsTabControlContent {

  @Element() wrstsTabControlContent: WrstsTabControlContent & HTMLElement

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
