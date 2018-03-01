
export abstract class BaseShadowComponent<X extends HTMLElement> {

  abstract elementRef: X

  public get ShadowRoot(): ShadowRoot {
    return this.elementRef.shadowRoot
  }

  public get Slot() {
    return this.ShadowRoot.querySelector('slot')
  }

  public get SlotNodes() {
    return this.getSlotNodes()
  }

  public getSlotNodes<T extends HTMLElement>(name?: string): T[] {
    const slotSelector = name ? `slot[name="${name}"]` : 'slot'
    return Array.prototype.slice.call(
      (this.ShadowRoot.querySelector(slotSelector) as any).assignedNodes()
    )
  }

  public shadowQuerySelector<T extends HTMLElement>(query: string): T {
    return this.ShadowRoot.querySelector(query)
  }

  public shadowQuerySelectorAll<T extends HTMLElement>(query: string): T[] {
    return Array.prototype.slice.call(
      this.ShadowRoot.querySelectorAll(query)
    )
  }

  public getSlotElementsByTagName<T extends HTMLElement>(tagName: string): T[] {
    this.SlotNodes.forEach(o => console.log(o))
    return this.SlotNodes.filter(o => o.tagName === tagName) as T[]
  }

}
