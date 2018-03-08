import { Component, Element, Method } from '@stencil/core';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';

export type WrstsTabControlTabsType = WrstsTabControlTabs & HTMLElement

@Component({
  tag: 'wrsts-tab-control-tabs',
  styleUrl: 'wrsts-tab-control-tabs.scss',
  shadow: true
})
export class WrstsTabControlTabs extends WrstsBaseShadow {
  constructor() { super() }

  @Method() @PPP() getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
    return this.getSlotNodes().filter(o => o.tagName === tagName.toUpperCase()) as T[]
  }

  @Element() elementRef: WrstsTabControlTabsType

  render() {
    return (
      <slot />
    )
  }
}

function PPP() {
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('PPP', target)
    console.log('PPP', propertyKey)
    console.log('PPP', descriptor)
  }
}
