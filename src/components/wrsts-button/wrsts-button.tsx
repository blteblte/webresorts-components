import { Component } from '@stencil/core';

@Component({
  tag: 'wrsts-button',
  styleUrl: 'wrsts-button.scss'
})
export class WrstsButton {
  render() {
    return (
      <button><slot /></button>
    )
  }
}
