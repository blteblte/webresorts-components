import { Component, Element, Method, Listen, Event, EventEmitter } from '@stencil/core';
import { WrstsTabControlTab, WrstsTabControlTabType } from '../wrsts-tab-control-tab/wrsts-tab-control-tab';
import { WrstsTabControlContent, WrstsTabControlContentType } from '../wrsts-tab-control-content/wrsts-tab-control-content';
import { WrstsTabControlTabsType } from '../wrsts-tab-control-tabs/wrsts-tab-control-tabs';
import { WrstsTabControlContentsType } from '../wrsts-tab-control-contents/wrsts-tab-control-contents';
import { GetSlotElementsByTagName, Helpers } from '../helpers';

export type WrstsTabControlType = WrstsTabControl & HTMLElement

@Component({
  tag: 'wrsts-tab-control',
  styleUrl: 'wrsts-tab-control.scss',
  shadow: true
})
export class WrstsTabControl implements GetSlotElementsByTagName {

  @Method() getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
    return Helpers.getSlotElementsByTagName.bind(this)(tagName)
  }

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
    this.tabs = []
    this.contents = []
    const controlTabs = this.getSlotElementsByTagName<WrstsTabControlTabsType>('wrsts-tab-control-tabs')
    if (controlTabs.length) {
      this.tabs = controlTabs[0].getSlotElementsByTagName<WrstsTabControlTabType>('wrsts-tab-control-tab')
    }

    const controlContents = this.getSlotElementsByTagName<WrstsTabControlContentsType>('wrsts-tab-control-contents')
    if (controlContents.length) {
      this.contents = controlContents[0].getSlotElementsByTagName<WrstsTabControlContentType>('wrsts-tab-control-content')
    }

    // todo: test rebinding and what happens with event listeners
    if (this.tabs) {
      this.tabs.forEach((tab, index) => {
        tab.addEventListener('clicked', () => {
          this.setTab(index)
        })
      })
    }
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
