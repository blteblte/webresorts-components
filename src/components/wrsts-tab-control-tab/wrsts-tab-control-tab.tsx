import { Component, Prop, Event, EventEmitter, Method, Element } from '@stencil/core';

@Component({
  tag: 'wrsts-tab-control-tab',
  styleUrl: 'wrsts-tab-control-tab.scss'
})
export class WrstsTabControlTab {

  @Element() wrstsTabControlTab: WrstsTabControlTab & HTMLElement
  @Event() clicked: EventEmitter
  @Prop({ mutable: true }) active: boolean

  @Method() setActive() {
    if (!this.active) {
      this.wrstsTabControlTab.setAttribute('active', 'true')
    }
  }

  @Method() unsetActive() {
    if (this.active) {
      this.wrstsTabControlTab.removeAttribute('active')
    }
  }

  render() {
    return (
      <label class={this.active ? 'active' : ''} onClick={(e) => this.clicked.emit(e)}>
        <slot />
      </label>
    )
  }
}
