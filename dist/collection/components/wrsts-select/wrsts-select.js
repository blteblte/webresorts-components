export class WrstsSelect {
    render() {
        return (h("select", { name: this.name, id: this.id }));
    }
    static get is() { return "wrsts-select"; }
    static get properties() { return { "id": { "type": String, "attr": "id" }, "name": { "type": String, "attr": "name" } }; }
    static get style() { return "/**style-placeholder:wrsts-select:**/"; }
}
