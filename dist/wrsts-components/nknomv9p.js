/*! Built with http://stenciljs.com */
const{h:t}=window.WrstsComponents;import{WrstsBaseShadow as e}from"./chunk1.js";class s extends e{constructor(){super()}componentDidLoad(){this.bind(),this.navigateByHash()}bind(){this.tabs=[],this.contents=[];const t=this.getSlotElementsByTagName("wrsts-tab-control-tabs");t.length&&(this.tabs=t[0].getSlotElementsByTagName("wrsts-tab-control-tab"));const e=this.getSlotElementsByTagName("wrsts-tab-control-contents");e.length&&(this.contents=e[0].getSlotElementsByTagName("wrsts-tab-control-content")),this.tabs&&this.tabs.forEach((t,e)=>{t.addEventListener("clicked",()=>{this.setTab(e)})})}navigateByHash(){if(this.locationHash=window.location.hash,this.tabUrl=this.locationHash.replace("#/",""),void 0!==this.tabUrl&&null!==this.tabUrl){let t=0;this.tabs.forEach((e,s)=>{e.route===this.tabUrl&&(t=s)}),t>-1&&this.setTab(t)}}setTab(t){this.tabs.forEach((e,s)=>{t!==s?e.unsetActive():e.setActive()}),this.contents.forEach((e,s)=>{t!==s?e.unsetActive():e.setActive()}),this.change.emit(t)}render(){return t("slot",null)}static get is(){return"wrsts-tab-control"}static get encapsulation(){return"shadow"}static get properties(){return{bind:{method:!0},elementRef:{elementRef:!0},setTab:{method:!0}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{display:block}"}}class n extends e{constructor(){super()}setActive(){this.active||(this.active=!0)}unsetActive(){this.active&&(this.active=!1)}render(){return t("div",{class:this.active?"active":""},t("slot",null))}static get is(){return"wrsts-tab-control-content"}static get encapsulation(){return"shadow"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},elementRef:{elementRef:!0},setActive:{method:!0},unsetActive:{method:!0}}}static get style(){return"\@-webkit-keyframes wrsts-tab-control-content-in{0%{opacity:0;-webkit-transform:scale(.99,.99);transform:scale(.99,.99)}100%{opacity:1;-webkit-transform:scale(1,1);transform:scale(1,1)}}\@keyframes wrsts-tab-control-content-in{0%{opacity:0;-webkit-transform:scale(.99,.99);transform:scale(.99,.99)}100%{opacity:1;-webkit-transform:scale(1,1);transform:scale(1,1)}}:host{display:block}:host>div{display:none;padding:10px 8px;background-color:#fff;color:#595959;box-shadow:0 1px 2px rgba(0,0,0,.2);-webkit-animation:wrsts-tab-control-content-in .2s ease-in-out;animation:wrsts-tab-control-content-in .2s ease-in-out}:host>div.active{display:block}"}}class r extends e{constructor(){super()}render(){return t("slot",null)}static get is(){return"wrsts-tab-control-contents"}static get encapsulation(){return"shadow"}static get properties(){return{elementRef:{elementRef:!0}}}static get style(){return":host{display:block}"}}class a extends e{setActive(){this.active||(this.active=!0,void 0!==this.route&&null!==this.route&&(window.location.href=`#/${this.route}`))}unsetActive(){this.active&&(this.active=!1)}render(){return t("label",{class:this.active?"active":"",onClick:t=>this.clicked.emit(t)},t("slot",null))}static get is(){return"wrsts-tab-control-tab"}static get encapsulation(){return"shadow"}static get properties(){return{active:{type:Boolean,attr:"active",mutable:!0},elementRef:{elementRef:!0},historyTitle:{type:String,attr:"history-title"},route:{type:String,attr:"route"},setActive:{method:!0},unsetActive:{method:!0}}}static get events(){return[{name:"clicked",method:"clicked",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host label{display:inline-block;background-color:#f3f3f3;color:#595959;padding:10px 8px;font-weight:700;cursor:pointer;transition:background-color .2s ease-in-out;box-shadow:0 -.5px 2px rgba(0,0,0,.2)}:host label:hover{background-color:#e6e6e6}:host label.active{background-color:#fff}"}}class o extends e{constructor(){super()}getSlotElementsByTagName(t){return this.getSlotNodes().filter(e=>e.tagName===t.toUpperCase())}render(){return t("slot",null)}static get is(){return"wrsts-tab-control-tabs"}static get encapsulation(){return"shadow"}static get properties(){return{elementRef:{elementRef:!0},getSlotElementsByTagName:{method:!0}}}static get style(){return":host{display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}"}}!function(t,e,s,n){var r,a=arguments.length,o=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,s,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(o=(a<3?r(o):a>3?r(e,s,o):r(e,s))||o);a>3&&o&&Object.defineProperty(e,s,o)}([function(t,e,s){console.log("PPP",t),console.log("PPP",e),console.log("PPP",s)}],o.prototype,"getSlotElementsByTagName",null);export{s as WrstsTabControl,n as WrstsTabControlContent,r as WrstsTabControlContents,a as WrstsTabControlTab,o as WrstsTabControlTabs};