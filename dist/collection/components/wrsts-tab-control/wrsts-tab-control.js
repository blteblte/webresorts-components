export class WrstsTabControl {
    componentDidLoad() {
        this.rebindTabsControll();
        this.navigateByHash();
    }
    rebindTabsControll() {
        this.tabs = Array.prototype.slice.call(this.wrstsTabControl.children[0].children);
        this.contents = Array.prototype.slice.call(this.wrstsTabControl.children[1].children);
        this.tabs.forEach((tab, index) => {
            tab.addEventListener('clicked', () => {
                this.activateTab(index);
            });
        });
    }
    navigateByHash() {
        this.locationHash = window.location.hash;
        this.tabUrl = this.locationHash.replace('#/', '');
        if (this.tabUrl !== undefined && this.tabUrl !== null) {
            var urlIndex = this.tabs.findIndex(x => x.route === this.tabUrl);
            if (urlIndex > -1) {
                this.activateTab(urlIndex);
            }
        }
    }
    activateTab(index) {
        this.tabs.forEach((t, tabIndex) => {
            if (index !== tabIndex) {
                t.unsetActive();
            }
            else {
                t.setActive();
            }
        });
        this.contents.forEach((c, contentIndex) => {
            if (index !== contentIndex) {
                c.unsetActive();
            }
            else {
                c.setActive();
            }
        });
        // todo: this is not really what we want
        this.change.emit(index);
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control"; }
    static get properties() { return { "activateTab": { "method": true }, "wrstsTabControl": { "elementRef": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-tab-control:**/"; }
}
