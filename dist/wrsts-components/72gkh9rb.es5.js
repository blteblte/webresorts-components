/*! Built with http://stenciljs.com */
var __extends=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function s(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}();WrstsComponents.loadBundle("72gkh9rb",["exports","./chunk1.js","./chunk2.js"],function(e,t,n){var s=window.WrstsComponents.h,o=function(e){function n(){var t=e.apply(this,arguments)||this;return t.setProp=0,t.wrstsSelectOptions=[],t}return __extends(n,e),n.prototype.onSelectedIndexChanged=function(e,t){console.log("watch selected index"),void 0!==e&&null!==e&&NaN!==parseInt(e,10)?e!==t&&this.selectOptionByIndex(parseInt(e,10)):(this.selectedValue=null,this.unselectAllOptions())},n.prototype.onSelectedValueChanged=function(e,t){void 0!==e&&null!==e&&""!==e?e!==t&&this.selectOptionByValue(e):(this.selectedIndex=null,this.unselectAllOptions())},n.prototype.onDocumentClick=function(e){e.target!==this.elementRef&&e.target!==this.input?(this.showDropdown&&this.toggleDropdown(!1),this.focused&&(this.focused=!1)):this.focused=!0},n.prototype.handleUp=function(e){if(this.showDropdown){e.preventDefault();var t=0,n=this.wrstsSelectOptions.findIndex(function(e){return e.focused});n>0&&(t=n-1),n>-1&&this.wrstsSelectOptions[n].unfocus();var s=this.wrstsSelectOptions[t];if(s.hidden){for(var o=!1,i=!1,r=t;!i;)this.wrstsSelectOptions[r].hidden||(this.wrstsSelectOptions[r].focus(),i=!0,o=!0),0===r&&(i=!0),r--;!o&&n>-1&&this.wrstsSelectOptions[n].focus()}else s.focus()}},n.prototype.handleDown=function(e){if(this.showDropdown){e.preventDefault(),console.log(this.wrstsSelectOptions);var t=0,n=this.wrstsSelectOptions.length,s=this.wrstsSelectOptions.findIndex(function(e){return e.focused});s>-1&&(t=s+1),t>n-1&&(t=n-1),s>-1&&this.wrstsSelectOptions[s].unfocus();var o=this.wrstsSelectOptions[t];if(o.hidden){for(var i=!1,r=!1,c=t;!r;)this.wrstsSelectOptions[c].hidden||(this.wrstsSelectOptions[c].focus(),r=!0,i=!0),c===this.wrstsSelectOptions.length-1&&(r=!0),c++;!i&&s>-1&&this.wrstsSelectOptions[s].focus()}else o.focus()}},n.prototype.handleEnter=function(e){if(!this.showDropdown)return this.focused?void this.toggleDropdown(!0):void 0;e.preventDefault();var t=this.wrstsSelectOptions.findIndex(function(e){return e.focused});t>-1&&(this.selectIndex(t),this.toggleDropdown(!1))},n.prototype.handleEsc=function(e){this.showDropdown&&(e.preventDefault(),this.toggleDropdown(!1))},Object.defineProperty(n.prototype,"selectedOption",{get:function(){return this.wrstsSelectOptions.find(function(e){return e.selected})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"selectedText",{get:function(){return this.selectedOption?this.selectedOption.getSlotNodes():this.placeholder||""},enumerable:!0,configurable:!0}),n.prototype.componentDidLoad=function(){this.bind()},n.prototype.bind=function(){var e=this;this.select=this.shadowQuerySelector("select"),this.wrstsSelectSelect=this.shadowQuerySelector(".wrsts-select-select"),this.wrstsSelectOptions=this.getSlotElementsByTagName("wrsts-select-option"),console.log(this.wrstsSelectOptions),this.wrstsSelectOptions.forEach(function(t,n){t.index=n.toString(),t.addEventListener("clicked",function(){e.selectIndex(n)}),t.selected&&e.selectIndex(n)}),this.search&&(this.input=this.shadowQuerySelector("input"),this.input.addEventListener("change",function(e){return e.stopPropagation()}))},n.prototype.selectIndex=function(e){this.selectedIndex=e.toString()},n.prototype.selectValue=function(e){this.selectedValue=e},n.prototype.selectOptionByIndex=function(e){var t;this.setProp++,this.wrstsSelectOptions.forEach(function(n,s){s!==e?(n.unselect(),n.unfocus()):(t=n,n.select(),n.focus())}),this.select.selectedIndex=e,this.selectedValue=t.value,1===this.setProp&&this.change.emit(),this.setProp--},n.prototype.selectOptionByValue=function(e){var t,n=this;this.setProp++,this.wrstsSelectOptions.forEach(function(s,o){s.value!==e?(s.unselect(),s.unfocus()):(t=s,s.select(),s.focus(),n.select.selectedIndex=o)}),this.selectedIndex=t.index,1===this.setProp&&this.change.emit(),this.setProp--},n.prototype.unselectAllOptions=function(){this.wrstsSelectOptions.forEach(function(e){e.unselect(),e.unfocus()})},n.prototype.onSelectClicked=function(){this.toggleDropdown()},n.prototype.toggleDropdown=function(e){var t=this;void 0===e&&(e=null),this.showDropdown=null===e?!this.showDropdown:e,this.showDropdown&&this.search&&setTimeout(function(){t.input.focus()},100)},n.prototype.getOptionsVisibilityClass=function(){return this.showDropdown?"visible":"hidden"},n.prototype.handleSearch=function(e){var t=e.target.value;this.wrstsSelectOptions.forEach(function(e){var n=!1;e.getSlotNodes().filter(function(e){return e.innerText.toLowerCase().indexOf(t.toLowerCase())>-1})&&(n=!0),e.value.toLowerCase().indexOf(t.toLowerCase())>-1&&(n=!0),n?e.unhide():e.hide()})},n.prototype.toJson=function(e){return void 0===e&&(e=0),t.ComponentSerializer.Serialize(this.elementRef,e,{valueResolver:t.ComponentSerializerResolver.ResolveSelectValue})},n.prototype.render=function(){return s("div",{class:this.focused?"focused":null},s("select",{name:this.name,id:this.id},this.wrstsSelectOptions.map(function(e){return s("option",{value:e.value},e.getSlotNodes().reduce(function(e,t){return e+t.innerText},""))})),s("div",{onClick:this.onSelectClicked.bind(this),class:"wrsts-select-select "+this.getOptionsVisibilityClass()},this.selectedText),s("div",{class:"wrsts-select-options "+this.getOptionsVisibilityClass()},this.search?s("input",{onKeyUp:this.handleSearch.bind(this),type:"text"}):null,s("slot",null)))},Object.defineProperty(n,"is",{get:function(){return"wrsts-select"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{bind:{method:!0},elementRef:{elementRef:!0},focused:{type:Boolean,attr:"focused",mutable:!0},id:{type:String,attr:"id"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},search:{type:Boolean,attr:"search"},selectedIndex:{type:String,attr:"selected-index",mutable:!0,watchCallbacks:["onSelectedIndexChanged"]},selectedValue:{type:String,attr:"selected-value",mutable:!0,watchCallbacks:["onSelectedValueChanged"]},selectIndex:{method:!0},selectValue:{method:!0},showDropdown:{state:!0},toJson:{method:!0},wrstsSelectOptions:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return"\@charset \"UTF-8\";\@-webkit-keyframes wrsts-select-appear{0%{opacity:0}100%{opacity:1}}\@keyframes wrsts-select-appear{0%{opacity:0}100%{opacity:1}}\@-webkit-keyframes wrsts-select-in{0%{opacity:0;-webkit-transform:translateY(-2%);transform:translateY(-2%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes wrsts-select-in{0%{opacity:0;-webkit-transform:translateY(-2%);transform:translateY(-2%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}:host{display:inline-block}:host>div{-webkit-animation:wrsts-select-appear .2s ease-in;animation:wrsts-select-appear .2s ease-in;color:#595959;display:inline-block;position:relative;transition:box-shadow .2s ease-in-out}:host>div.focused{box-shadow:0 0 6px rgba(0,0,0,.2)}:host>div select{display:none}:host>div input{border:1px solid #a5a5a5;color:#595959;outline:0;padding:4px 8px;display:block;width:100%;box-sizing:border-box}:host>div .wrsts-select-select{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:6px 30px 6px 10px;background-color:#fff;border:1px solid #a5a5a5;min-width:200px;min-height:20px;box-shadow:0 1px 2px rgba(0,0,0,.2)}:host>div .wrsts-select-select:after{content:'▾';position:absolute;right:8px}:host>div .wrsts-select-select.visible:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host>div .wrsts-select-options{box-sizing:border-box;position:absolute;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d8d8d8;-webkit-animation:wrsts-select-in .2s ease-in-out;animation:wrsts-select-in .2s ease-in-out;background-color:#fff;z-index:1}:host>div .wrsts-select-options.hidden{display:none}:host>div .wrsts-select-options.visible{display:block}"},enumerable:!0,configurable:!0}),n}(n.BaseShadowComponent),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.select=function(){this.selected||(this.selected=!0)},t.prototype.unselect=function(){this.selected&&(this.selected=!1)},t.prototype.focus=function(){this.focused||(this.focused=!0)},t.prototype.unfocus=function(){this.focused&&(this.focused=!1)},t.prototype.hide=function(){this.hidden||(this.hidden=!0)},t.prototype.unhide=function(){this.hidden&&(this.hidden=!1)},t.prototype.getClass=function(){var e="";return this.selected&&(e+="selected"),this.focused&&(e+=" focused"),this.hidden&&(e+=" hidden"),e},t.prototype.render=function(){var e=this;return s("div",{class:this.getClass(),onClick:function(t){return e.clicked.emit(t)}},s("slot",null))},Object.defineProperty(t,"is",{get:function(){return"wrsts-select-option"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{elementRef:{elementRef:!0},focus:{method:!0},focused:{type:Boolean,attr:"focused",mutable:!0},hidden:{type:Boolean,attr:"hidden",mutable:!0},hide:{method:!0},index:{type:String,attr:"index"},select:{method:!0},selected:{type:Boolean,attr:"selected",mutable:!0},unfocus:{method:!0},unhide:{method:!0},unselect:{method:!0},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"clicked",method:"clicked",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:block}:host>div{display:block;padding:4px 6px;background-color:#fff;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .2s ease-in-out}:host>div.selected{background-color:#e6e6e6}:host>div:hover{background-color:#f2f2f2}:host>div.focused{background-color:#e6e6e6}:host>div.hidden{display:none}"},enumerable:!0,configurable:!0}),t}(n.BaseShadowComponent);e.WrstsSelect=o,e.WrstsSelectOption=i,Object.defineProperty(e,"__esModule",{value:!0})});