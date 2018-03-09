import { Component, Element, Method } from '@stencil/core';
import { GetSlotElementsByTagName, Helpers } from '../helpers';

export type WrstsTabControlContentsType = WrstsTabControlContents & HTMLElement

@Component({
  tag: 'wrsts-tab-control-contents',
  styleUrl: 'wrsts-tab-control-contents.scss',
  shadow: true
})
export class WrstsTabControlContents implements GetSlotElementsByTagName {

  @Method() getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
    return Helpers.getSlotElementsByTagName.bind(this)(tagName)
  }

  @Element() elementRef: WrstsTabControlContentsType

  render() {
    return (
      <slot />
    )
  }
}
