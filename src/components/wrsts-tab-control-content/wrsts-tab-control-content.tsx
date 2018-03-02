import { Component, Prop, Method } from '@stencil/core';

@Component({
  tag: 'wrsts-tab-control-content',
  styleUrl: 'wrsts-tab-control-content.scss',
  shadow: true
})
export class WrstsTabControlContent {

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
