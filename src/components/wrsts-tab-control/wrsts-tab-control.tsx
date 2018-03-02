import { Component, Element, Method, Listen, Event, EventEmitter } from '@stencil/core';
import { WrstsTabControlTab } from '../wrsts-tab-control-tab/wrsts-tab-control-tab';
import { WrstsTabControlContent } from '../wrsts-tab-control-content/wrsts-tab-control-content';
import { BaseShadowComponent } from '../../lib/base-shadow-component';

export type WrstsTabControlType = WrstsTabControl & HTMLElement

@Component({
  tag: 'wrsts-tab-control',
  styleUrl: 'wrsts-tab-control.scss',
  shadow: true
})
export class WrstsTabControl extends BaseShadowComponent<WrstsTabControlType> {

  @Element() elementRef: WrstsTabControlType
  tabs: (WrstsTabControlTab & HTMLElement)[]
  contents: (WrstsTabControlContent & HTMLElement)[]
  locationHash: string
  tabUrl: string

  @Event() change: EventEmitter

  componentDidLoad() {
    this.bind()
    this.navigateByHash()
  }

  @Method() bind() {
    this.tabs = Array.prototype.slice.call(this.ShadowRoot.children[0].children)
    this.contents = Array.prototype.slice.call(this.ShadowRoot.children[1].children)

    // todo: test rebinding and what happens with event listeners
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('clicked', () => {
        this.setTab(index)
      })
    })
  }

  @Listen('window:hashchange') navigateByHash() {
    this.locationHash = window.location.hash
    this.tabUrl = this.locationHash.replace('#/', '')
    if (this.tabUrl !== undefined && this.tabUrl !== null) {

      /* does not work on IE11 !!??!! */
      //var urlIndex = this.tabs.findIndex(x => x.route === this.tabUrl)

      /* workararound: */
      let urlIndex = 0
      this.tabs.forEach((x, i) => {
        if (x.route === this.tabUrl) urlIndex = i;
      })

      if (urlIndex > -1) {
        this.setTab(urlIndex)
      }
    }
  }

  @Method() setTab(index: number) {
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

    // todo: this is not really what we want
    this.change.emit(index)
  }

  render() {
    return (
      <slot />
    )
  }
}
