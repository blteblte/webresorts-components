/*! Built with http://stenciljs.com */
const{h:e}=window.WrstsComponents;import{ComponentSerializer as t,ComponentSerializerResolver as i}from"./chunk1.js";class s{constructor(){this.checked=!1,this.disabled=!1,this.groupBoxesBindings=[]}onGroupTogglerChanged(e){null===e||void 0===e||""===e?this.releaseGroupBindings():this.bind()}check(e){this.indeterminate&&(this.indeterminateState=!1,this.checkbox.indeterminate=!1),this.checked||(this.checked=!0,this.checkbox.checked=!0,this.isToggler&&!e&&this.handleGroupElementsOnTogglerCheck(!0),this.change.emit(!0))}uncheck(e){this.indeterminate&&(this.indeterminateState=!1,this.checkbox.indeterminate=!1),this.checked&&(this.checked=!1,this.checkbox.checked=!1,this.isToggler&&!e&&this.handleGroupElementsOnTogglerCheck(!1),this.change.emit(!1))}setIndeterminate(){this.indeterminate&&!this.indeterminateState&&(this.indeterminateState=!0,this.checked=!1,this.checkbox.checked=!1,this.checkbox.indeterminate=!0,this.change.emit(!1))}getNativeElement(){return this.checkbox}bind(){this.isToggler&&(this.releaseGroupBindings(),this.groupBoxesBindings=[],[].forEach.call(document.querySelectorAll(`wrsts-checkbox[group="${this.groupToggler}"]`),e=>{this.groupBoxesBindings.push({elementRef:e,listener:e.addEventListener("change",this.changeGroupElementHandler.bind(this))})}))}getGroupBoxesBindings(){return this.groupBoxesBindings}getData(e=1){return i.ResolveDataAttributes(this.wrstsCheckBox,e)}toJson(e=0,s=!0){return this.isToggler?t.SerializeData(s?[this.wrstsCheckBox,...this.groupBoxesBindings.map(e=>e.elementRef)]:this.groupBoxesBindings.map(e=>e.elementRef),e,{valueResolver:i.ResolveCheckboxValue}):t.Serialize(this.wrstsCheckBox,e,{valueResolver:i.ResolveCheckboxValue})}componentDidLoad(){this.checkbox=this.wrstsCheckBox.querySelector('input[type="checkbox"]'),this.checkbox.checked=this.checked,this.bind()}get totalGroupBoxesCount(){return this.groupBoxesBindings.filter(e=>e.elementRef.group===this.groupToggler).length}get groupCheckedCount(){return this.groupBoxesBindings.filter(e=>e.elementRef.group===this.groupToggler&&e.elementRef.checked).length}get isToggler(){return void 0!==this.groupToggler&&null!==this.groupToggler&&""!==this.groupToggler}releaseGroupBindings(){this.groupBoxesBindings&&this.groupBoxesBindings.forEach(e=>{e.elementRef.removeEventListener("change",e.listener)}),this.groupBoxesBindings=[]}changeGroupElementHandler(){if(this.indeterminate){const e=this.totalGroupBoxesCount,t=this.groupCheckedCount;t>0&&t<e?this.setIndeterminate():0===t?this.uncheck(!0):this.check(!0)}else this.groupCheckedCount===this.totalGroupBoxesCount?this.check(!0):this.uncheck(!0)}handleGroupElementsOnTogglerCheck(e){this.groupBoxesBindings.forEach(t=>{t.elementRef.group===this.groupToggler&&(e?t.elementRef.check():t.elementRef.uncheck())})}clickHandler(){this.disabled||(this.checked?this.uncheck():this.check())}getCheckboxIcon(){return this.isToggler&&this.indeterminate&&this.indeterminateState?e("i",{class:"indeterminate"}):this.checked?e("i",{class:"checked"}):e("i",{class:"unchecked"})}render(){return e("div",{onClick:this.clickHandler.bind(this)},e("input",{type:"checkbox",name:this.name,id:this.id,value:this.value}),this.getCheckboxIcon(),e("label",null,e("slot",null)))}static get is(){return"wrsts-checkbox"}static get properties(){return{bind:{method:!0},check:{method:!0},checked:{type:Boolean,attr:"checked",mutable:!0},disabled:{type:Boolean,attr:"disabled"},getData:{method:!0},getGroupBoxesBindings:{method:!0},getNativeElement:{method:!0},group:{type:String,attr:"group"},groupToggler:{type:String,attr:"group-toggler",watchCallbacks:["onGroupTogglerChanged"]},hidden:{type:Boolean,attr:"hidden"},id:{type:String,attr:"id"},indeterminate:{type:Boolean,attr:"indeterminate"},indeterminateState:{state:!0},name:{type:String,attr:"name"},setIndeterminate:{method:!0},toJson:{method:!0},uncheck:{method:!0},value:{type:String,attr:"value"},wrstsCheckBox:{elementRef:!0}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@-webkit-keyframes wrsts-checkbox-appear{0%{opacity:0}100%{opacity:1}}\@keyframes wrsts-checkbox-appear{0%{opacity:0}100%{opacity:1}}wrsts-checkbox{-webkit-animation:wrsts-checkbox-appear .2s ease-in;animation:wrsts-checkbox-appear .2s ease-in;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-table}wrsts-checkbox[hidden]{display:none}wrsts-checkbox[disabled]{color:#838383}wrsts-checkbox input[type=checkbox]{display:none}wrsts-checkbox div{display:table}wrsts-checkbox label{display:inline-block;line-height:20px}wrsts-checkbox label::before{content:'';display:inline-block;width:3px}wrsts-checkbox i{display:table-cell;width:20px;height:20px;transition:background-image .2s ease-in-out}wrsts-checkbox i.checked{background:url(/assets/img/checkbox-checked.svg)}wrsts-checkbox i.unchecked{background:url(/assets/img/checkbox-unchecked.svg)}wrsts-checkbox i.indeterminate{background:url(/assets/img/checkbox-indeterminate.svg)}"}}export{s as WrstsCheckbox};