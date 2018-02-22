import { Component, Element } from '@stencil/core';
import { WrstsTabControlTab } from '../wrsts-tab-control-tab/wrsts-tab-control-tab';
import { WrstsTabControlContent } from '../wrsts-tab-control-content/wrsts-tab-control-content';

@Component({
  tag: 'wrsts-tab-control',
  styleUrl: 'wrsts-tab-control.scss'
})
export class WrstsTabControl {

  @Element() wrstsTabControl: WrstsTabControl & HTMLElement

  componentDidLoad() {
    this.rebindTabsControll()
  }

  rebindTabsControll() {
    const tabs = Array.prototype.slice.call(this.wrstsTabControl.children[0].children) as (WrstsTabControlTab & HTMLElement)[]
    const contents = Array.prototype.slice.call(this.wrstsTabControl.children[1].children) as (WrstsTabControlContent & HTMLElement)[]

    console.log(contents)

    tabs.forEach((tab, index) => {

      tab.addEventListener('clicked', () => {

        tabs.forEach((t, tabIndex) => {
          if (index !== tabIndex) {
            t.unsetActive()
          } else  {
            t.setActive()
          }
        })

        contents.forEach((c, contentIndex) => {
          if (index !== contentIndex) {
            c.unsetActive()
          } else {
            c.setActive()
          }
        })

      })

    })
  }

  render() {
    return (
      <slot />
    )
  }
}
