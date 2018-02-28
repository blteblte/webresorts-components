/*! Built with http://stenciljs.com */
WrstsComponents.loadBundle("8yu7fu5p",["exports","./chunk1.js"],function(e,t){var n=window.WrstsComponents.h,i=function(){function e(){this.checked=!1,this.disabled=!1,this.groupBoxesBindings=[]}return e.prototype.onGroupTogglerChanged=function(e){null===e||void 0===e||""===e?this.releaseGroupBindings():this.bind()},e.prototype.check=function(e){this.indeterminate&&(this.indeterminateState=!1,this.checkbox.indeterminate=!1),this.checked||(this.checked=!0,this.checkbox.checked=!0,this.isToggler&&!e&&this.handleGroupElementsOnTogglerCheck(!0),this.change.emit(!0))},e.prototype.uncheck=function(e){this.indeterminate&&(this.indeterminateState=!1,this.checkbox.indeterminate=!1),this.checked&&(this.checked=!1,this.checkbox.checked=!1,this.isToggler&&!e&&this.handleGroupElementsOnTogglerCheck(!1),this.change.emit(!1))},e.prototype.setIndeterminate=function(){this.indeterminate&&!this.indeterminateState&&(this.indeterminateState=!0,this.checked=!1,this.checkbox.checked=!1,this.checkbox.indeterminate=!0,this.change.emit(!1))},e.prototype.getNativeElement=function(){return this.checkbox},e.prototype.bind=function(){var e=this;this.isToggler&&(this.releaseGroupBindings(),this.groupBoxesBindings=[],[].forEach.call(document.querySelectorAll('wrsts-checkbox[group="'+this.groupToggler+'"]'),function(t){e.groupBoxesBindings.push({elementRef:t,listener:t.addEventListener("change",e.changeGroupElementHandler.bind(e))})}))},e.prototype.getGroupBoxesBindings=function(){return this.groupBoxesBindings},e.prototype.getData=function(e){return void 0===e&&(e=1),t.ComponentSerializerResolver.ResolveDataAttributes(this.wrstsCheckBox,e)},e.prototype.toJson=function(e,n){return void 0===e&&(e=0),void 0===n&&(n=!0),this.isToggler?t.ComponentSerializer.SerializeData(n?[this.wrstsCheckBox].concat(this.groupBoxesBindings.map(function(e){return e.elementRef})):this.groupBoxesBindings.map(function(e){return e.elementRef}),e,{valueResolver:t.ComponentSerializerResolver.ResolveCheckboxValue}):t.ComponentSerializer.Serialize(this.wrstsCheckBox,e,{valueResolver:t.ComponentSerializerResolver.ResolveCheckboxValue})},e.prototype.componentDidLoad=function(){this.checkbox=this.wrstsCheckBox.querySelector('input[type="checkbox"]'),this.checkbox.checked=this.checked,this.bind()},Object.defineProperty(e.prototype,"totalGroupBoxesCount",{get:function(){var e=this;return this.groupBoxesBindings.filter(function(t){return t.elementRef.group===e.groupToggler}).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groupCheckedCount",{get:function(){var e=this;return this.groupBoxesBindings.filter(function(t){return t.elementRef.group===e.groupToggler&&t.elementRef.checked}).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isToggler",{get:function(){return void 0!==this.groupToggler&&null!==this.groupToggler&&""!==this.groupToggler},enumerable:!0,configurable:!0}),e.prototype.releaseGroupBindings=function(){this.groupBoxesBindings&&this.groupBoxesBindings.forEach(function(e){e.elementRef.removeEventListener("change",e.listener)}),this.groupBoxesBindings=[]},e.prototype.changeGroupElementHandler=function(){if(this.indeterminate){var e=this.totalGroupBoxesCount,t=this.groupCheckedCount;t>0&&t<e?this.setIndeterminate():0===t?this.uncheck(!0):this.check(!0)}else this.groupCheckedCount===this.totalGroupBoxesCount?this.check(!0):this.uncheck(!0)},e.prototype.handleGroupElementsOnTogglerCheck=function(e){var t=this;this.groupBoxesBindings.forEach(function(n){n.elementRef.group===t.groupToggler&&(e?n.elementRef.check():n.elementRef.uncheck())})},e.prototype.clickHandler=function(){this.disabled||(this.checked?this.uncheck():this.check())},e.prototype.getCheckboxIcon=function(){return this.isToggler&&this.indeterminate&&this.indeterminateState?n("i",{class:"indeterminate"}):this.checked?n("i",{class:"checked"}):n("i",{class:"unchecked"})},e.prototype.render=function(){return n("div",{onClick:this.clickHandler.bind(this)},n("input",{type:"checkbox",name:this.name,id:this.id,value:this.value}),this.getCheckboxIcon(),n("label",null,n("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"wrsts-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{bind:{method:!0},check:{method:!0},checked:{type:Boolean,attr:"checked",mutable:!0},disabled:{type:Boolean,attr:"disabled"},getData:{method:!0},getGroupBoxesBindings:{method:!0},getNativeElement:{method:!0},group:{type:String,attr:"group"},groupToggler:{type:String,attr:"group-toggler",watchCallbacks:["onGroupTogglerChanged"]},hidden:{type:Boolean,attr:"hidden"},id:{type:String,attr:"id"},indeterminate:{type:Boolean,attr:"indeterminate"},indeterminateState:{state:!0},name:{type:String,attr:"name"},setIndeterminate:{method:!0},toJson:{method:!0},uncheck:{method:!0},value:{type:String,attr:"value"},wrstsCheckBox:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@-webkit-keyframes wrsts-checkbox-appear{0%{opacity:0}100%{opacity:1}}\@keyframes wrsts-checkbox-appear{0%{opacity:0}100%{opacity:1}}wrsts-checkbox{-webkit-animation:wrsts-checkbox-appear .2s ease-in;animation:wrsts-checkbox-appear .2s ease-in;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-table}wrsts-checkbox[hidden]{display:none}wrsts-checkbox[disabled]{color:#838383}wrsts-checkbox input[type=checkbox]{display:none}wrsts-checkbox div{display:table}wrsts-checkbox label{display:inline-block;line-height:20px}wrsts-checkbox label::before{content:'';display:inline-block;width:3px}wrsts-checkbox i{display:table-cell;width:20px;height:20px;transition:background-image .2s ease-in-out}wrsts-checkbox i.checked{background:url(/assets/img/checkbox-checked.svg)}wrsts-checkbox i.unchecked{background:url(/assets/img/checkbox-unchecked.svg)}wrsts-checkbox i.indeterminate{background:url(/assets/img/checkbox-indeterminate.svg)}"},enumerable:!0,configurable:!0}),e}();e.WrstsCheckbox=i,Object.defineProperty(e,"__esModule",{value:!0})});