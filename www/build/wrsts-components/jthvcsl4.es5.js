/*! Built with http://stenciljs.com */
WrstsComponents.loadBundle("jthvcsl4",["exports"],function(t){var e=window.WrstsComponents.h,n=function(){function t(){}return Object.defineProperty(t.prototype,"hasForm",{get:function(){return void 0!==this.formId&&null!==this.formId},enumerable:!0,configurable:!0}),t.prototype.componentDidLoad=function(){this.hasForm&&(this.wrstsJsonForm=document.getElementById(this.formId))},t.prototype.onClick=function(t){this.hasForm&&(this.wrstsJsonForm.ajax&&t.preventDefault(),this.wrstsJsonForm.submit())},t.prototype.render=function(){return e("button",{onClick:this.onClick.bind(this)},e("slot",null))},Object.defineProperty(t,"is",{get:function(){return"wrsts-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{formId:{type:String,attr:"form-id"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"wrsts-button{display:inline-block;cursor:pointer}wrsts-button button{border:none;outline:0;padding:8px 12px;background-color:#f1f1f1;color:#595959;transition:background-color .2s ease-in-out}wrsts-button button:hover{background-color:#d8d8d8}"},enumerable:!0,configurable:!0}),t}();t.WrstsButton=n,Object.defineProperty(t,"__esModule",{value:!0})});