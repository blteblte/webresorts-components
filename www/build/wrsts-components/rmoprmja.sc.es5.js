/*! Built with http://stenciljs.com */
WrstsComponents.loadBundle("rmoprmja",["exports","./chunk1.js"],function(e,t){var o=window.WrstsComponents.h,n=function(){function e(){this.setProp=0,this.wrstsSelectOptions=[]}return e.prototype.getShadowRoot=function(){return this.elementRef.shadowRoot},e.prototype.getSlot=function(){return this.getShadowRoot().querySelector("slot")},e.prototype.getSlotNodes=function(e){var t=e?'slot[name="'+e+'"]':"slot";return Array.prototype.slice.call(this.getShadowRoot().querySelector(t).assignedNodes())},e.prototype.shadowQuerySelector=function(e){return this.getShadowRoot().querySelector(e)},e.prototype.shadowQuerySelectorAll=function(e){return Array.prototype.slice.call(this.getShadowRoot().querySelectorAll(e))},e.prototype.getSlotElementsByTagName=function(e){return this.getSlotNodes().filter(function(t){return t.tagName===e.toUpperCase()})},e.prototype.onSelectedIndexChanged=function(e,t){void 0!==e&&null!==e&&NaN!==parseInt(e,10)?e!==t&&this.selectOptionByIndex(parseInt(e,10)):(this.selectedValue=null,this.unselectAllOptions())},e.prototype.onSelectedValueChanged=function(e,t){void 0!==e&&null!==e&&""!==e?e!==t&&this.selectOptionByValue(e):(this.selectedIndex=null,this.unselectAllOptions())},e.prototype.onDocumentClick=function(e){e.target!==this.elementRef&&e.target!==this.input?(this.showDropdown&&this.toggleDropdown(!1),this.focused&&(this.focused=!1)):this.focused=!0},e.prototype.handleUp=function(e){if(this.showDropdown){e.preventDefault();var t=0,o=this.wrstsSelectOptions.findIndex(function(e){return e.focused});o>0&&(t=o-1),o>-1&&this.wrstsSelectOptions[o].unfocus();var n=this.wrstsSelectOptions[t];if(n.hidden){for(var s=!1,i=!1,r=t;!i;)this.wrstsSelectOptions[r].hidden||(this.wrstsSelectOptions[r].focus(),i=!0,s=!0),0===r&&(i=!0),r--;!s&&o>-1&&this.wrstsSelectOptions[o].focus()}else n.focus()}},e.prototype.handleDown=function(e){if(this.showDropdown){e.preventDefault();var t=0,o=this.wrstsSelectOptions.length,n=this.wrstsSelectOptions.findIndex(function(e){return e.focused});n>-1&&(t=n+1),t>o-1&&(t=o-1),n>-1&&this.wrstsSelectOptions[n].unfocus();var s=this.wrstsSelectOptions[t];if(s.hidden){for(var i=!1,r=!1,l=t;!r;)this.wrstsSelectOptions[l].hidden||(this.wrstsSelectOptions[l].focus(),r=!0,i=!0),l===this.wrstsSelectOptions.length-1&&(r=!0),l++;!i&&n>-1&&this.wrstsSelectOptions[n].focus()}else s.focus()}},e.prototype.handleEnter=function(e){if(!this.showDropdown)return this.focused?void this.toggleDropdown(!0):void 0;e.preventDefault();var t=this.wrstsSelectOptions.findIndex(function(e){return e.focused});t>-1&&(this.selectIndex(t),this.toggleDropdown(!1))},e.prototype.handleEsc=function(e){this.showDropdown&&(e.preventDefault(),this.toggleDropdown(!1))},Object.defineProperty(e.prototype,"selectedOption",{get:function(){return this.wrstsSelectOptions.find(function(e){return e.selected})},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectedText",{get:function(){return this.selectedOption?this.selectedOption.getSlotNodes():this.placeholder||""},enumerable:!0,configurable:!0}),e.prototype.componentDidLoad=function(){this.bind()},e.prototype.bind=function(){var e=this;this.select=this.shadowQuerySelector("select"),this.wrstsSelectSelect=this.shadowQuerySelector(".wrsts-select-select"),this.wrstsSelectOptions=this.getSlotElementsByTagName("wrsts-select-option"),this.wrstsSelectOptions.forEach(function(t,o){t.index=o.toString(),t.addEventListener("clicked",function(){e.selectIndex(o)}),t.selected&&e.selectIndex(o)}),this.search&&(this.input=this.shadowQuerySelector("input"),this.input.addEventListener("change",function(e){return e.stopPropagation()}))},e.prototype.selectIndex=function(e){this.selectedIndex=e.toString()},e.prototype.selectValue=function(e){this.selectedValue=e},e.prototype.selectOptionByIndex=function(e){var t;this.setProp++,this.wrstsSelectOptions.forEach(function(o,n){n!==e?(o.unselect(),o.unfocus()):(t=o,o.select(),o.focus())}),this.select.selectedIndex=e,this.selectedValue=t.value,1===this.setProp&&this.change.emit(),this.setProp--},e.prototype.selectOptionByValue=function(e){var t,o=this;this.setProp++,this.wrstsSelectOptions.forEach(function(n,s){n.value!==e?(n.unselect(),n.unfocus()):(t=n,n.select(),n.focus(),o.select.selectedIndex=s)}),this.selectedIndex=t.index,1===this.setProp&&this.change.emit(),this.setProp--},e.prototype.unselectAllOptions=function(){this.wrstsSelectOptions.forEach(function(e){e.unselect(),e.unfocus()})},e.prototype.onSelectClicked=function(){this.toggleDropdown()},e.prototype.toggleDropdown=function(e){var t=this;void 0===e&&(e=null),this.showDropdown=null===e?!this.showDropdown:e,this.showDropdown&&this.search&&setTimeout(function(){t.input.focus()},100)},e.prototype.getOptionsVisibilityClass=function(){return this.showDropdown?"visible":"hidden"},e.prototype.handleSearch=function(e){var t=e.target.value;this.wrstsSelectOptions.forEach(function(e){var o=!1;e.getSlotNodes().filter(function(e){return e.innerText.toLowerCase().indexOf(t.toLowerCase())>-1})&&(o=!0),e.value.toLowerCase().indexOf(t.toLowerCase())>-1&&(o=!0),o?e.unhide():e.hide()})},e.prototype.toJson=function(e){return void 0===e&&(e=0),t.ComponentSerializer.Serialize(this.elementRef,e,{valueResolver:t.ComponentSerializerResolver.ResolveSelectValue})},e.prototype.render=function(){return o("div",{class:this.focused?"focused":null},o("select",{name:this.name,id:this.id},this.wrstsSelectOptions.map(function(e){return o("option",{value:e.value},e.getSlotNodes().reduce(function(e,t){return e+t.innerText},""))})),o("div",{onClick:this.onSelectClicked.bind(this),class:"wrsts-select-select "+this.getOptionsVisibilityClass()},this.selectedText),o("div",{class:"wrsts-select-options "+this.getOptionsVisibilityClass()},this.search?o("input",{onKeyUp:this.handleSearch.bind(this),type:"text"}):null,o("slot",null)))},Object.defineProperty(e,"is",{get:function(){return"wrsts-select"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{bind:{method:!0},elementRef:{elementRef:!0},focused:{type:Boolean,attr:"focused",mutable:!0},getShadowRoot:{method:!0},getSlot:{method:!0},getSlotElementsByTagName:{method:!0},getSlotNodes:{method:!0},id:{type:String,attr:"id"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},search:{type:Boolean,attr:"search"},selectedIndex:{type:String,attr:"selected-index",mutable:!0,watchCallbacks:["onSelectedIndexChanged"]},selectedValue:{type:String,attr:"selected-value",mutable:!0,watchCallbacks:["onSelectedValueChanged"]},selectIndex:{method:!0},selectValue:{method:!0},shadowQuerySelector:{method:!0},shadowQuerySelectorAll:{method:!0},showDropdown:{state:!0},toJson:{method:!0},wrstsSelectOptions:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@charset \"UTF-8\";\@-webkit-keyframes wrsts-select-appear{0%{opacity:0}100%{opacity:1}}\@keyframes wrsts-select-appear{0%{opacity:0}100%{opacity:1}}\@-webkit-keyframes wrsts-select-in{0%{opacity:0;-webkit-transform:translateY(-2%);transform:translateY(-2%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes wrsts-select-in{0%{opacity:0;-webkit-transform:translateY(-2%);transform:translateY(-2%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}[data-wrsts-select-host]{display:inline-block}[data-wrsts-select-host] > div[data-wrsts-select]{-webkit-animation:wrsts-select-appear .2s ease-in;animation:wrsts-select-appear .2s ease-in;color:#595959;display:inline-block;position:relative;transition:box-shadow .2s ease-in-out}[data-wrsts-select-host] > div.focused[data-wrsts-select]{box-shadow:0 0 6px rgba(0,0,0,.2)}[data-wrsts-select-host] > div[data-wrsts-select]   select[data-wrsts-select]{display:none}[data-wrsts-select-host] > div[data-wrsts-select]   input[data-wrsts-select]{border:1px solid #a5a5a5;color:#595959;outline:0;padding:4px 8px;display:block;width:100%;box-sizing:border-box}[data-wrsts-select-host] > div[data-wrsts-select]   .wrsts-select-select[data-wrsts-select]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:6px 30px 6px 10px;background-color:#fff;border:1px solid #a5a5a5;min-width:200px;min-height:20px;box-shadow:0 1px 2px rgba(0,0,0,.2)}[data-wrsts-select-host] > div[data-wrsts-select]   .wrsts-select-select[data-wrsts-select]:after{content:'▾';position:absolute;right:8px}[data-wrsts-select-host] > div[data-wrsts-select]   .wrsts-select-select.visible[data-wrsts-select]:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}[data-wrsts-select-host] > div[data-wrsts-select]   .wrsts-select-options[data-wrsts-select]{box-sizing:border-box;position:absolute;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d8d8d8;-webkit-animation:wrsts-select-in .2s ease-in-out;animation:wrsts-select-in .2s ease-in-out;background-color:#fff;z-index:1}[data-wrsts-select-host] > div[data-wrsts-select]   .wrsts-select-options.hidden[data-wrsts-select]{display:none}[data-wrsts-select-host] > div[data-wrsts-select]   .wrsts-select-options.visible[data-wrsts-select]{display:block}"},enumerable:!0,configurable:!0}),e}(),s=function(){function e(){}return e.prototype.getShadowRoot=function(){return this.elementRef.shadowRoot},e.prototype.getSlot=function(){return this.getShadowRoot().querySelector("slot")},e.prototype.getSlotNodes=function(e){var t=e?'slot[name="'+e+'"]':"slot";return Array.prototype.slice.call(this.getShadowRoot().querySelector(t).assignedNodes())},e.prototype.shadowQuerySelector=function(e){return this.getShadowRoot().querySelector(e)},e.prototype.shadowQuerySelectorAll=function(e){return Array.prototype.slice.call(this.getShadowRoot().querySelectorAll(e))},e.prototype.getSlotElementsByTagName=function(e){return this.getSlotNodes().filter(function(t){return t.tagName===e.toUpperCase()})},e.prototype.select=function(){this.selected||(this.selected=!0)},e.prototype.unselect=function(){this.selected&&(this.selected=!1)},e.prototype.focus=function(){this.focused||(this.focused=!0)},e.prototype.unfocus=function(){this.focused&&(this.focused=!1)},e.prototype.hide=function(){this.hidden||(this.hidden=!0)},e.prototype.unhide=function(){this.hidden&&(this.hidden=!1)},e.prototype.getClass=function(){var e="";return this.selected&&(e+="selected"),this.focused&&(e+=" focused"),this.hidden&&(e+=" hidden"),e},e.prototype.render=function(){var e=this;return o("div",{class:this.getClass(),onClick:function(t){return e.clicked.emit(t)}},o("slot",null))},Object.defineProperty(e,"is",{get:function(){return"wrsts-select-option"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{elementRef:{elementRef:!0},focus:{method:!0},focused:{type:Boolean,attr:"focused",mutable:!0},getShadowRoot:{method:!0},getSlot:{method:!0},getSlotElementsByTagName:{method:!0},getSlotNodes:{method:!0},hidden:{type:Boolean,attr:"hidden",mutable:!0},hide:{method:!0},index:{type:String,attr:"index"},select:{method:!0},selected:{type:Boolean,attr:"selected",mutable:!0},shadowQuerySelector:{method:!0},shadowQuerySelectorAll:{method:!0},unfocus:{method:!0},unhide:{method:!0},unselect:{method:!0},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"clicked",method:"clicked",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-wrsts-select-option-host]{display:block}[data-wrsts-select-option-host] > div[data-wrsts-select-option]{display:block;padding:4px 6px;background-color:#fff;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .2s ease-in-out}[data-wrsts-select-option-host] > div.selected[data-wrsts-select-option]{background-color:#e6e6e6}[data-wrsts-select-option-host] > div[data-wrsts-select-option]:hover{background-color:#f2f2f2}[data-wrsts-select-option-host] > div.focused[data-wrsts-select-option]{background-color:#e6e6e6}[data-wrsts-select-option-host] > div.hidden[data-wrsts-select-option]{display:none}"},enumerable:!0,configurable:!0}),e}();e.WrstsSelect=n,e.WrstsSelectOption=s,Object.defineProperty(e,"__esModule",{value:!0})});