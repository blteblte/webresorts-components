/*! Built with http://stenciljs.com */
WrstsComponents.loadBundle("rrm49xvc",["exports"],function(e){var t,n=window.WrstsComponents.h;window.WrstsComponents.Context;!function(e){e[e.Default=0]="Default",e[e.Object=1]="Object",e[e.Array=2]="Array"}(t||(t={}));var r=function(){return function(){}}();function o(e){return[].filter.call(e.attributes,function(e){return/^data-/.test(e.name)}).map(function(e){return{name:e.name.substr(5).replace(/-(.)/g,function(e,t){return t.toUpperCase()}),value:e.value}})}r.ResolveKey=function(e,t){return e.name||e.id||t},r.ResolveCheckboxValue=function(e){return e.checked},r.ResolveDataAttributes=function(e,n){return n===t.Object?function(e){var t={};return o(e).forEach(function(e){t[e.name]=e.value}),t}(e):o(e)};var i=function(){function e(){}return e.SerializeData=function(e,n,o){var i=o.valueResolver,c=o.keyResolver,s=o.dataResolver;switch(o.keyResolver||(c=r.ResolveKey),o.dataResolver||(s=r.ResolveDataAttributes),n){case t.Object:return function(e,t,n,r,o){return e.reduce(function(e,i,c){var s,u;return e[n(i,c)]=(s=r(i),u=o(i,t),{value:s,data:u}),e},{})}(e,n,c,i,s);case t.Array:return function(e,t,n,r,o){return e.reduce(function(e,i,c){var s,u,a;return e[c]=(s=n(i,c),u=r(i),a=o(i,t),{name:s,value:u,data:a}),e},[])}(e,n,c,i,s);case t.Default:return function(e,t,n){return e.reduce(function(e,r,o){return e[t(r,o)]=n(r),e},{})}(e,c,i)}},e.Serialize=function(e,t,n){return this.SerializeData([e],t,n)},e}();var c=function(){function e(){this.checked=!1,this.disabled=!1,this.groupBoxesBindings=[]}return e.prototype.onGroupTogglerChanged=function(e){null===e||void 0===e||""===e?this.releaseGroupBindings():this.rebindGroup()},e.prototype.check=function(e){this.indeterminate&&(this.indeterminateState=!1,this.checkbox.indeterminate=!1),this.checked||(this.checked=!0,this.checkbox.checked=!0,this.isToggler&&!e&&this.handleGroupElementsOnTogglerCheck(!0),this.change.emit(!0))},e.prototype.uncheck=function(e){this.indeterminate&&(this.indeterminateState=!1,this.checkbox.indeterminate=!1),this.checked&&(this.checked=!1,this.checkbox.checked=!1,this.isToggler&&!e&&this.handleGroupElementsOnTogglerCheck(!1),this.change.emit(!1))},e.prototype.setIndeterminate=function(){this.indeterminate&&!this.indeterminateState&&(this.indeterminateState=!0,this.checked=!1,this.checkbox.checked=!1,this.checkbox.indeterminate=!0,this.change.emit(!1))},e.prototype.getNativeElement=function(){return this.checkbox},e.prototype.rebindGroup=function(){var e=this;if(this.isToggler){this.releaseGroupBindings();var t=Array.prototype.slice.call(document.querySelectorAll('wrsts-checkbox[group="'+this.groupToggler+'"]'));t&&(this.groupBoxesBindings=[],t.forEach(function(t){e.groupBoxesBindings.push({elementRef:t,listener:t.addEventListener("change",e.changeGroupElementHandler.bind(e))})}))}},e.prototype.getGroupBoxesBindings=function(){return this.groupBoxesBindings},e.prototype.getData=function(e){return void 0===e&&(e=1),r.ResolveDataAttributes(this.wrstsCheckBox,e)},e.prototype.toJson=function(e){void 0===e&&(e=0);var t=e;return this.isToggler?i.SerializeData([this.wrstsCheckBox].concat(this.groupBoxesBindings.map(function(e){return e.elementRef})),t,{valueResolver:r.ResolveCheckboxValue}):i.Serialize(this.wrstsCheckBox,t,{valueResolver:r.ResolveCheckboxValue})},e.prototype.componentDidLoad=function(){this.checkbox=this.wrstsCheckBox.querySelector('input[type="checkbox"]'),this.checkbox.checked=this.checked,this.rebindGroup()},Object.defineProperty(e.prototype,"totalGroupBoxesCount",{get:function(){var e=this;return this.groupBoxesBindings.filter(function(t){return t.elementRef.group===e.groupToggler}).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groupCheckedCount",{get:function(){var e=this;return this.groupBoxesBindings.filter(function(t){return t.elementRef.group===e.groupToggler&&t.elementRef.checked}).length},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isToggler",{get:function(){return void 0!==this.groupToggler&&null!==this.groupToggler&&""!==this.groupToggler},enumerable:!0,configurable:!0}),e.prototype.releaseGroupBindings=function(){this.groupBoxesBindings&&this.groupBoxesBindings.forEach(function(e){e.elementRef.removeEventListener("change",e.listener)}),this.groupBoxesBindings=[]},e.prototype.changeGroupElementHandler=function(){if(this.indeterminate){var e=this.totalGroupBoxesCount,t=this.groupCheckedCount;t>0&&t<e?this.setIndeterminate():0===t?this.uncheck(!0):this.check(!0)}else this.groupCheckedCount===this.totalGroupBoxesCount?this.check(!0):this.uncheck(!0)},e.prototype.handleGroupElementsOnTogglerCheck=function(e){var t=this;this.groupBoxesBindings.forEach(function(n){n.elementRef.group===t.groupToggler&&(e?n.elementRef.check():n.elementRef.uncheck())})},e.prototype.clickHandler=function(){this.disabled||(this.checked?this.uncheck():this.check())},e.prototype.getCheckboxIcon=function(){return this.isToggler&&this.indeterminate&&this.indeterminateState?n("i",{class:"indeterminate"}):this.checked?n("i",{class:"checked"}):n("i",{class:"unchecked"})},e.prototype.render=function(){return n("div",{onClick:this.clickHandler.bind(this)},n("input",{type:"checkbox",name:this.name,id:this.id,value:this.value}),this.getCheckboxIcon(),n("label",null,n("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"wrsts-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{check:{method:!0},checked:{type:Boolean,attr:"checked",mutable:!0},disabled:{type:Boolean,attr:"disabled"},getData:{method:!0},getGroupBoxesBindings:{method:!0},getNativeElement:{method:!0},group:{type:String,attr:"group"},groupToggler:{type:String,attr:"group-toggler",watchCallbacks:["onGroupTogglerChanged"]},hidden:{type:Boolean,attr:"hidden"},id:{type:String,attr:"id"},indeterminate:{type:Boolean,attr:"indeterminate"},indeterminateState:{state:!0},name:{type:String,attr:"name"},rebindGroup:{method:!0},setIndeterminate:{method:!0},toJson:{method:!0},uncheck:{method:!0},value:{type:String,attr:"value"},wrstsCheckBox:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"wrsts-checkbox{user-select:none;display:inline-block;font-family:Helvetica,sans-serif}wrsts-checkbox div{display:inline-block}wrsts-checkbox label{margin-left:4px}wrsts-checkbox input[type=checkbox]{display:none}wrsts-checkbox i{display:inline-block;width:20px;height:20px;margin-bottom:-4px}wrsts-checkbox i.checked{background:url(/assets/img/checkbox-checked.svg)}wrsts-checkbox i.unchecked{background:url(/assets/img/checkbox-unchecked.svg)}wrsts-checkbox i.indeterminate{background:url(/assets/img/checkbox-indeterminate.svg)}wrsts-checkbox[disabled]{color:gray}wrsts-checkbox[hidden]{display:none}"},enumerable:!0,configurable:!0}),e}();e.WrstsCheckbox=c,Object.defineProperty(e,"__esModule",{value:!0})});