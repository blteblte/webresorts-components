import { Component } from '@stencil/core';

@Component({
  tag: 'wrsts-tab-control-contents',
  styleUrl: 'wrsts-tab-control-contents.scss',
  shadow: true
})
export class WrstsTabControlContents {
  render() {
    return (
      <slot />
    )
  }
}
