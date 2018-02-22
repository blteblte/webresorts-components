import { Component } from '@stencil/core';

@Component({
  tag: 'wrsts-tab-control-contents',
  styleUrl: 'wrsts-tab-control-contents.scss'
})
export class WrstsTabControlContents {
  render() {
    return (
      <slot />
    )
  }
}
