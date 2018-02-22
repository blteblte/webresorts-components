import { Component, Element, Method, Listen } from '@stencil/core';
import { WrstsTabControlTab } from '../wrsts-tab-control-tab/wrsts-tab-control-tab';
import { WrstsTabControlContent } from '../wrsts-tab-control-content/wrsts-tab-control-content';

@Component({
  tag: 'wrsts-tab-control',
  styleUrl: 'wrsts-tab-control.scss'
})
export class WrstsTabControl {

  @Element() wrstsTabControl: WrstsTabControl & HTMLElement
  tabs: (WrstsTabControlTab & HTMLElement)[]
  contents: (WrstsTabControlContent & HTMLElement)[]
  locationHash: string
  tabUrl: string

  componentDidLoad() {
    this.rebindTabsControll()
    this.navigateByHash()
  }

  rebindTabsControll() {
    this.tabs = Array.prototype.slice.call(this.wrstsTabControl.children[0].children)
    this.contents = Array.prototype.slice.call(this.wrstsTabControl.children[1].children)

    this.tabs.forEach((tab, index) => {
      tab.addEventListener('clicked', () => {
        this.activateTab(index)
      })
    })
  }

  @Listen('window:hashchange') navigateByHash() {
    this.locationHash = window.location.hash
    this.tabUrl = this.locationHash.replace('#/', '')
    if (this.tabUrl !== undefined && this.tabUrl !== null) {
      var urlIndex = this.tabs.findIndex(x => x.route === this.tabUrl)
      if (urlIndex > -1) {
        this.activateTab(urlIndex)
      }
    }
  }

  @Method() activateTab(index: number) {
    this.tabs.forEach((t, tabIndex) => {
      if (index !== tabIndex) {
        t.unsetActive()
      } else  {
        t.setActive()
      }
    })

    this.contents.forEach((c, contentIndex) => {
      if (index !== contentIndex) {
        c.unsetActive()
      } else {
        c.setActive()
      }
    })
  }

  render() {
    return (
      <slot />
    )
  }
}
