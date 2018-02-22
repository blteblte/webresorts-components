import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wrsts-select',
  styleUrl: 'wrsts-select.scss'
})
export class WrstsSelect {

  @Prop() id: string
  @Prop() name: string

  render() {
    return (
      <select name={this.name} id={this.id}>

      </select>
    )
  }
}
