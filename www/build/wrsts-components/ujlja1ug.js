/*! Built with http://stenciljs.com */
const{h,Context}=window.WrstsComponents;class WrstsCheckbox{constructor(){this.groupBoxesBindings=[],this.groupCheckedCount=0}get totalGroupBoxesCount(){return this.groupBoxesBindings.filter(e=>e.elementRef.group===this.groupToggler).length}onGroupTogglerChanged(e){null===e||void 0===e||""===e?this.releaseGroupBindings():this.rebindGroupElements()}componentDidLoad(){this.checkbox=this.webresortsCheckBox.querySelector('input[type="checkbox"]'),this.checkbox.checked=this.checked,this.rebindGroupElements()}check(){this.checked||(this.checked=!0,this.checkbox.checked=!0,this.change.emit(!0))}uncheck(){this.checked&&(this.checked=!1,this.checkbox.checked=!1,this.change.emit(!1))}getNativeElement(){return this.checkbox}rebindGroupElements(){if(void 0===this.groupToggler||null===this.groupToggler||""===this.groupToggler)return;this.releaseGroupBindings();const e=Array.prototype.slice.call(document.querySelectorAll(`wrsts-checkbox[group="${this.groupToggler}"]`));e&&(this.groupBoxesBindings=[],e.forEach((e,t)=>{this.groupBoxesBindings.push({index:t,elementRef:e,listener:e.addEventListener("change",this.changeGroupElementHandler.bind(this,t,e))}),e.checked&&this.groupCheckedCount++}))}getGroupBoxes(){return this.groupBoxesBindings}toJsonObject(){}releaseGroupBindings(){this.groupBoxesBindings&&this.groupBoxesBindings.forEach(e=>{e.elementRef.removeEventListener("change",e.listener)}),this.groupCheckedCount=0,this.groupBoxesBindings=[]}changeGroupElementHandler(e,t){t.group!==this.groupToggler&&this.removeGroupElement(t),this.groupBoxesBindings.find(t=>t.index===e).elementRef.checked?this.groupCheckedCount++:this.groupCheckedCount--,this.groupCheckedCount===this.totalGroupBoxesCount?this.check():this.uncheck()}handleGroupElementsOnTogglerCheck(e){this.groupBoxesBindings.forEach(t=>{t.elementRef.group!==this.groupToggler?this.removeGroupElement(t.elementRef):t.elementRef.checked=e})}removeGroupElement(e){e.checked||this.groupCheckedCount--}clickHandler(){this.disabled||(this.checked?this.uncheck():this.check(),this.handleGroupElementsOnTogglerCheck(this.checked))}getCheckboxIcon(){return this.checked?h("i",{class:"checked"}):h("i",{class:"unchecked"})}render(){return h("div",{class:"webresorts-checkbox-container",onClick:this.clickHandler.bind(this)},h("input",{type:"checkbox",name:this.name,id:this.id}),this.getCheckboxIcon(),h("label",null,h("slot",null)))}static get is(){return"wrsts-checkbox"}static get properties(){return{check:{method:!0},checked:{type:Boolean,attr:"checked",mutable:!0},disabled:{type:Boolean,attr:"disabled"},getGroupBoxes:{method:!0},getNativeElement:{method:!0},group:{type:String,attr:"group"},groupToggler:{type:String,attr:"group-toggler",watchCallbacks:["onGroupTogglerChanged"]},id:{type:String,attr:"id"},name:{type:String,attr:"name"},rebindGroupElements:{method:!0},toJsonObject:{method:!0},uncheck:{method:!0},webresortsCheckBox:{elementRef:!0}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"wrsts-checkbox{user-select:none;display:inline-block;font-family:Impact,Haettenschweiler,'Arial Narrow Bold',sans-serif}wrsts-checkbox div{display:inline-block}wrsts-checkbox label{margin-left:4px}wrsts-checkbox input[type=checkbox]{display:none}wrsts-checkbox i{display:inline-block;width:20px;height:20px;margin-bottom:-3px}wrsts-checkbox i.checked{background:url(/assets/img/checkbox-checked.svg)}wrsts-checkbox i.unchecked{background:url(/assets/img/checkbox-unchecked.svg)}wrsts-checkbox[disabled]{color:gray}"}}export{WrstsCheckbox};