import { WrstsBaseShadow } from '../wrsts-base-shadow/wrsts-base-shadow';
export class WrstsTabControl extends WrstsBaseShadow {
    constructor() { super(); }
    componentDidLoad() {
        this.bind();
        this.navigateByHash();
    }
    bind() {
        this.tabs = [];
        this.contents = [];
        const controlTabs = this.getSlotElementsByTagName('wrsts-tab-control-tabs');
        if (controlTabs.length) {
            this.tabs = controlTabs[0].getSlotElementsByTagName('wrsts-tab-control-tab');
        }
        const controlContents = this.getSlotElementsByTagName('wrsts-tab-control-contents');
        if (controlContents.length) {
            this.contents = controlContents[0].getSlotElementsByTagName('wrsts-tab-control-content');
        }
        // todo: test rebinding and what happens with event listeners
        if (this.tabs) {
            this.tabs.forEach((tab, index) => {
                tab.addEventListener('clicked', () => {
                    this.setTab(index);
                });
            });
        }
    }
    navigateByHash() {
        this.locationHash = window.location.hash;
        this.tabUrl = this.locationHash.replace('#/', '');
        if (this.tabUrl !== undefined && this.tabUrl !== null) {
            /* does not work on IE11 !!??!! */
            //var urlIndex = this.tabs.findIndex(x => x.route === this.tabUrl)
            /* workararound: */
            let urlIndex = 0;
            this.tabs.forEach((x, i) => {
                if (x.route === this.tabUrl)
                    urlIndex = i;
            });
            if (urlIndex > -1) {
                this.setTab(urlIndex);
            }
        }
    }
    setTab(index) {
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
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "bind": { "method": true }, "elementRef": { "elementRef": true }, "setTab": { "method": true } }; }
    static get events() { return [{ "name": "change", "method": "change", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "/**style-placeholder:wrsts-tab-control:**/"; }
}
