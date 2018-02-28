import { Component, Prop, Event, EventEmitter, Method, Element } from '@stencil/core';

@Component({
  tag: 'wrsts-tab-control-tab',
  styleUrl: 'wrsts-tab-control-tab.scss'
})
export class WrstsTabControlTab {

  @Element() wrstsTabControlTab: WrstsTabControlTab & HTMLElement
  @Event() clicked: EventEmitter
  @Prop({ mutable: true }) active: boolean
  @Prop() route: string
  @Prop() historyTitle: string

  @Method() setActive() {
    if (!this.active) {
      this.active = true
      if (this.route !== undefined && this.route !== null) {
        window.history.pushState(null, this.historyTitle, `#/${this.route}`)
      }
    }
  }

  @Method() unsetActive() {
    if (this.active) {
      this.active = false
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
