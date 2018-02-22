import { Component } from '@stencil/core';

@Component({
  tag: 'wrsts-tab-control-tabs',
  styleUrl: 'wrsts-tab-control-tabs.scss'
})
export class WrstsTabControlTabs {
  render() {
    return (
      <slot />
    )
  }
}
