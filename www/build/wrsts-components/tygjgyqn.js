/*! Built with http://stenciljs.com */
const{h:t}=window.WrstsComponents;class e{componentDidLoad(){this.rebindTabsControll()}rebindTabsControll(){const t=Array.prototype.slice.call(this.wrstsTabControl.children[0].children),e=Array.prototype.slice.call(this.wrstsTabControl.children[1].children);console.log(e),t.forEach((s,r)=>{s.addEventListener("clicked",()=>{t.forEach((t,e)=>{r!==e?t.unsetActive():t.setActive()}),e.forEach((t,e)=>{r!==e?t.unsetActive():t.setActive()})})})}render(){return t("slot",null)}static get is(){return"wrsts-tab-control"}static get properties(){return{wrstsTabControl:{elementRef:!0}}}static get style(){return""}}class s{setActive(){this.active||this.wrstsTabControlContent.setAttribute("active","true")}unsetActive(){this.active&&this.wrstsTabControlContent.removeAttribute("active")}render(){return t("div",null,t("slot",null))}static get is(){return"wrsts-tab-control-content"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},setActive:{method:!0},unsetActive:{method:!0},wrstsTabControlContent:{elementRef:!0}}}static get style(){return"\@keyframes wrsts-tab-control-content-in{0%{opacity:0;transform:scale(.99,.99)}100%{opacity:1;transform:scale(1,1)}}wrsts-tab-control-content{display:none;padding:10px 8px;background-color:#fefefe;color:#404040}wrsts-tab-control-content[active]{display:block}wrsts-tab-control-content>div{animation:wrsts-tab-control-content-in .2s ease-in-out}"}}class r{render(){return t("slot",null)}static get is(){return"wrsts-tab-control-contents"}static get style(){return""}}class n{setActive(){this.active||this.wrstsTabControlTab.setAttribute("active","true")}unsetActive(){this.active&&this.wrstsTabControlTab.removeAttribute("active")}render(){return t("label",{class:this.active?"active":"",onClick:t=>this.clicked.emit(t)},t("slot",null))}static get is(){return"wrsts-tab-control-tab"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},setActive:{method:!0},unsetActive:{method:!0},wrstsTabControlTab:{elementRef:!0}}}static get events(){return[{name:"clicked",method:"clicked",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"wrsts-tab-control-tab{display:inline-block;user-select:none}wrsts-tab-control-tab label{display:inline-block;background-color:#f1f1f1;color:#595959;padding:10px 8px;font-weight:700;cursor:pointer;transition:background-color .2s ease-in-out}wrsts-tab-control-tab label:hover{background-color:#e4e4e4}wrsts-tab-control-tab[active] label{background-color:#fefefe}"}}class l{render(){return t("slot",null)}static get is(){return"wrsts-tab-control-tabs"}static get style(){return"wrsts-tab-control-tabs{user-select:none}"}}export{e as WrstsTabControl,s as WrstsTabControlContent,r as WrstsTabControlContents,n as WrstsTabControlTab,l as WrstsTabControlTabs};