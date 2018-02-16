/*! Built with http://stenciljs.com */
WrstsComponents.loadBundle("3ojyk2sg",["exports"],function(e){var t=window.WrstsComponents.h,n=(window.WrstsComponents.Context,function(){function e(){this.checked=!1,this.disabled=!1,this.groupBoxesBindings=[]}return e.prototype.onGroupTogglerChanged=function(e){null===e||void 0===e||""===e?this.releaseGroupBindings():this.rebindGroupElements()},e.prototype.check=function(e){this.checked||(this.checked=!0,this.checkbox.checked=!0,!e&&this.handleGroupElementsOnTogglerCheck(!0),this.change.emit(!0))},e.prototype.uncheck=function(e){this.checked&&(this.checked=!1,this.checkbox.checked=!1,!e&&this.handleGroupElementsOnTogglerCheck(!1),this.change.emit(!1))},e.prototype.getNativeElement=function(){return this.checkbox},e.prototype.rebindGroupElements=function(){var e=this;if(this.isToggler){this.releaseGroupBindings();var t=Array.prototype.slice.call(document.querySelectorAll('wrsts-checkbox[group="'+this.groupToggler+'"]'));t&&(this.groupBoxesBindings=[],t.forEach(function(t,n){e.groupBoxesBindings.push({index:n,elementRef:t,listener:t.addEventListener("change",e.changeGroupElementHandler.bind(e))})}))}},e.prototype.getGroupBoxes=function(){return this.groupBoxesBindings},e.prototype.getData=function(){return[].filter.call(this.wrstsCheckBox.attributes,function(e){return/^data-/.test(e.name)}).map(function(e){var t;return(t={})[e.name.substr(5).replace(/-(.)/g,function(e,t){return t.toUpperCase()})]=e.value,t})},e.prototype.toJson=function(){return this.isToggler?this.groupBoxesBindings.reduce(function(e,t,n){return e[t.elementRef.name||t.elementRef.id||n]={value:t.elementRef.checked,data:t.elementRef.getData()},e},{}):((e={})[this.name||this.id||0]={value:this.checked,data:this.getData()},e);var e},e.prototype.componentDidLoad=function(){this.checkbox=this.wrstsCheckBox.querySelector('input[type="checkbox"]'),this.checkbox.checked=this.checked,this.rebindGroupElements()},Object.defineProperty(e.prototype,"totalGroupBoxesCount",{get:function(){var e=this;return this.groupBoxesBindings.filter(function(t){return t.elementRef.group===e.groupToggler}).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groupCheckedCount",{get:function(){var e=this;return this.groupBoxesBindings.filter(function(t){return t.elementRef.group===e.groupToggler&&t.elementRef.checked}).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isToggler",{get:function(){return void 0!==this.groupToggler&&null!==this.groupToggler&&""!==this.groupToggler},enumerable:!0,configurable:!0}),e.prototype.releaseGroupBindings=function(){this.groupBoxesBindings&&this.groupBoxesBindings.forEach(function(e){e.elementRef.removeEventListener("change",e.listener)}),this.groupBoxesBindings=[]},e.prototype.changeGroupElementHandler=function(){this.groupCheckedCount===this.totalGroupBoxesCount?this.check(!0):this.uncheck(!0)},e.prototype.handleGroupElementsOnTogglerCheck=function(e){var t=this;this.groupBoxesBindings.forEach(function(n){n.elementRef.group===t.groupToggler&&(n.elementRef.checked=e)})},e.prototype.clickHandler=function(){this.disabled||(this.checked?this.uncheck():this.check())},e.prototype.getCheckboxIcon=function(){return this.checked?t("i",{class:"checked"}):t("i",{class:"unchecked"})},e.prototype.render=function(){return t("div",{class:"webresorts-checkbox-container",onClick:this.clickHandler.bind(this)},t("input",{type:"checkbox",name:this.name,id:this.id}),this.getCheckboxIcon(),t("label",null,t("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"wrsts-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{check:{method:!0},checked:{type:Boolean,attr:"checked",mutable:!0},customData:{type:String,attr:"custom-data"},disabled:{type:Boolean,attr:"disabled"},getData:{method:!0},getGroupBoxes:{method:!0},getNativeElement:{method:!0},group:{type:String,attr:"group"},groupToggler:{type:String,attr:"group-toggler",watchCallbacks:["onGroupTogglerChanged"]},id:{type:String,attr:"id"},name:{type:String,attr:"name"},rebindGroupElements:{method:!0},toJson:{method:!0},uncheck:{method:!0},wrstsCheckBox:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"wrsts-checkbox{user-select:none;display:inline-block;font-family:Impact,Haettenschweiler,'Arial Narrow Bold',sans-serif}wrsts-checkbox div{display:inline-block}wrsts-checkbox label{margin-left:4px}wrsts-checkbox input[type=checkbox]{display:none}wrsts-checkbox i{display:inline-block;width:20px;height:20px;margin-bottom:-3px}wrsts-checkbox i.checked{background:url(/assets/img/checkbox-checked.svg)}wrsts-checkbox i.unchecked{background:url(/assets/img/checkbox-unchecked.svg)}wrsts-checkbox[disabled]{color:gray}"},enumerable:!0,configurable:!0}),e}());e.WrstsCheckbox=n,Object.defineProperty(e,"__esModule",{value:!0})});