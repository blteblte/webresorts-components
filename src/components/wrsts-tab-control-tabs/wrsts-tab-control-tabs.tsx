import { Component, Element, Method } from '@stencil/core';
import { GetSlotElementsByTagName, Helpers } from '../helpers';

export type WrstsTabControlTabsType = WrstsTabControlTabs & HTMLElement

@Component({
  tag: 'wrsts-tab-control-tabs',
  styleUrl: 'wrsts-tab-control-tabs.scss',
  shadow: true
})
export class WrstsTabControlTabs implements GetSlotElementsByTagName {

  @Method() getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
    return Helpers.getSlotElementsByTagName.bind(this)(tagName)
  }

  @Element() elementRef: WrstsTabControlTabsType

  render() {
    return (
      <slot />
    )
  }
}


