import { Component, Element } from '@stencil/core';
import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';

export type WrstsTabControlContentsType = WrstsTabControlContents & HTMLElement

@Component({
  tag: 'wrsts-tab-control-contents',
  styleUrl: 'wrsts-tab-control-contents.scss',
  shadow: true
})
export class WrstsTabControlContents extends WrstsBaseShadow {
  constructor() { super() }

  @Element() elementRef: WrstsTabControlContentsType

  render() {
    return (
      <slot />
    )
  }
}
