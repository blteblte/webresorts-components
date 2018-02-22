export class WrstsTabControl {
    componentDidLoad() {
        this.rebindTabsControll();
    }
    rebindTabsControll() {
        const tabs = Array.prototype.slice.call(this.wrstsTabControl.children[0].children);
        const contents = Array.prototype.slice.call(this.wrstsTabControl.children[1].children);
        console.log(contents);
        tabs.forEach((tab, index) => {
            tab.addEventListener('clicked', () => {
                tabs.forEach((t, tabIndex) => {
                    if (index !== tabIndex) {
                        t.unsetActive();
                    }
                    else {
                        t.setActive();
                    }
                });
                contents.forEach((c, contentIndex) => {
                    if (index !== contentIndex) {
                        c.unsetActive();
                    }
                    else {
                        c.setActive();
                    }
                });
            });
        });
    }
    render() {
        return (h("slot", null));
    }
    static get is() { return "wrsts-tab-control"; }
    static get properties() { return { "wrstsTabControl": { "elementRef": true } }; }
    static get style() { return "/**style-placeholder:wrsts-tab-control:**/"; }
}
