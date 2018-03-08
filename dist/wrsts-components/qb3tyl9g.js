/*! Built with http://stenciljs.com */
const{h:e}=window.WrstsComponents;import{ComponentSerializer as t,ComponentSerializerResolver as s}from"./chunk2.js";import{WrstsBaseShadow as i}from"./chunk1.js";class n extends i{constructor(){super(),this.setProp=0,this.wrstsSelectOptions=[]}onSelectedIndexChanged(e,t){void 0!==e&&null!==e&&NaN!==parseInt(e,10)?e!==t&&this.selectOptionByIndex(parseInt(e,10)):(this.selectedValue=null,this.unselectAllOptions())}onSelectedValueChanged(e,t){void 0!==e&&null!==e&&""!==e?e!==t&&this.selectOptionByValue(e):(this.selectedIndex=null,this.unselectAllOptions())}onDocumentClick(e){e.target!==this.elementRef&&e.target!==this.input?(this.showDropdown&&this.toggleDropdown(!1),this.focused&&(this.focused=!1)):this.focused=!0}handleUp(e){if(!this.showDropdown)return;e.preventDefault();let t=0;const s=this.wrstsSelectOptions.findIndex(e=>e.focused);s>0&&(t=s-1),s>-1&&this.wrstsSelectOptions[s].unfocus();const i=this.wrstsSelectOptions[t];if(i.hidden){let e=!1,i=!1,n=t;for(;!i;)this.wrstsSelectOptions[n].hidden||(this.wrstsSelectOptions[n].focus(),i=!0,e=!0),0===n&&(i=!0),n--;!e&&s>-1&&this.wrstsSelectOptions[s].focus()}else i.focus()}handleDown(e){if(!this.showDropdown)return;e.preventDefault();let t=0;const s=this.wrstsSelectOptions.length,i=this.wrstsSelectOptions.findIndex(e=>e.focused);i>-1&&(t=i+1),t>s-1&&(t=s-1),i>-1&&this.wrstsSelectOptions[i].unfocus();const n=this.wrstsSelectOptions[t];if(n.hidden){let e=!1,s=!1,n=t;for(;!s;)this.wrstsSelectOptions[n].hidden||(this.wrstsSelectOptions[n].focus(),s=!0,e=!0),n===this.wrstsSelectOptions.length-1&&(s=!0),n++;!e&&i>-1&&this.wrstsSelectOptions[i].focus()}else n.focus()}handleEnter(e){if(!this.showDropdown)return this.focused?void this.toggleDropdown(!0):void 0;e.preventDefault();const t=this.wrstsSelectOptions.findIndex(e=>e.focused);t>-1&&(this.selectIndex(t),this.toggleDropdown(!1))}handleEsc(e){this.showDropdown&&(e.preventDefault(),this.toggleDropdown(!1))}get selectedOption(){return this.wrstsSelectOptions.find(e=>e.selected)}get selectedText(){return this.selectedOption?this.selectedOption.getSlotNodes():this.placeholder||""}componentDidLoad(){this.bind()}bind(){this.select=this.shadowQuerySelector("select"),this.wrstsSelectSelect=this.shadowQuerySelector(".wrsts-select-select"),this.wrstsSelectOptions=this.getSlotElementsByTagName("wrsts-select-option"),this.wrstsSelectOptions.forEach((e,t)=>{e.index=t.toString(),e.addEventListener("clicked",()=>{this.selectIndex(t)}),e.selected&&this.selectIndex(t)}),this.search&&(this.input=this.shadowQuerySelector("input"),this.input.addEventListener("change",e=>e.stopPropagation()))}selectIndex(e){this.selectedIndex=e.toString()}selectValue(e){this.selectedValue=e}selectOptionByIndex(e){let t;this.setProp++,this.wrstsSelectOptions.forEach((s,i)=>{i!==e?(s.unselect(),s.unfocus()):(t=s,s.select(),s.focus())}),this.select.selectedIndex=e,this.selectedValue=t.value,1===this.setProp&&this.change.emit(),this.setProp--}selectOptionByValue(e){let t;this.setProp++,this.wrstsSelectOptions.forEach((s,i)=>{s.value!==e?(s.unselect(),s.unfocus()):(t=s,s.select(),s.focus(),this.select.selectedIndex=i)}),this.selectedIndex=t.index,1===this.setProp&&this.change.emit(),this.setProp--}unselectAllOptions(){this.wrstsSelectOptions.forEach(e=>{e.unselect(),e.unfocus()})}onSelectClicked(){this.toggleDropdown()}toggleDropdown(e=null){this.showDropdown=null===e?!this.showDropdown:e,this.showDropdown&&this.search&&setTimeout(()=>{this.input.focus()},100)}getOptionsVisibilityClass(){return this.showDropdown?"visible":"hidden"}handleSearch(e){const t=e.target.value;this.wrstsSelectOptions.forEach(e=>{var s=!1;e.getSlotNodes().filter(e=>e.innerText.toLowerCase().indexOf(t.toLowerCase())>-1)&&(s=!0),e.value.toLowerCase().indexOf(t.toLowerCase())>-1&&(s=!0),s?e.unhide():e.hide()})}toJson(e=0){return t.Serialize(this.elementRef,e,{valueResolver:s.ResolveSelectValue})}render(){return e("div",{class:this.focused?"focused":null},e("select",{name:this.name,id:this.id}),e("div",{onClick:this.onSelectClicked.bind(this),class:"wrsts-select-select "+this.getOptionsVisibilityClass()},this.selectedText),e("div",{class:"wrsts-select-options "+this.getOptionsVisibilityClass()},this.search?e("input",{onKeyUp:this.handleSearch.bind(this),type:"text"}):null,e("slot",null)))}static get is(){return"wrsts-select"}static get encapsulation(){return"shadow"}static get properties(){return{bind:{method:!0},elementRef:{elementRef:!0},focused:{type:Boolean,attr:"focused",mutable:!0},id:{type:String,attr:"id"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},search:{type:Boolean,attr:"search"},selectedIndex:{type:String,attr:"selected-index",mutable:!0,watchCallbacks:["onSelectedIndexChanged"]},selectedValue:{type:String,attr:"selected-value",mutable:!0,watchCallbacks:["onSelectedValueChanged"]},selectIndex:{method:!0},selectValue:{method:!0},showDropdown:{state:!0},toJson:{method:!0},wrstsSelectOptions:{state:!0}}}static get events(){return[{name:"change",method:"change",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"\@charset \"UTF-8\";\@-webkit-keyframes wrsts-select-appear{0%{opacity:0}100%{opacity:1}}\@keyframes wrsts-select-appear{0%{opacity:0}100%{opacity:1}}\@-webkit-keyframes wrsts-select-in{0%{opacity:0;-webkit-transform:translateY(-2%);transform:translateY(-2%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}\@keyframes wrsts-select-in{0%{opacity:0;-webkit-transform:translateY(-2%);transform:translateY(-2%)}100%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}:host{display:inline-block}:host>div{-webkit-animation:wrsts-select-appear .2s ease-in;animation:wrsts-select-appear .2s ease-in;color:#595959;display:inline-block;position:relative;transition:box-shadow .2s ease-in-out}:host>div.focused{box-shadow:0 0 6px rgba(0,0,0,.2)}:host>div select{display:none}:host>div input{border:1px solid #a5a5a5;color:#595959;outline:0;padding:4px 8px;display:block;width:100%;box-sizing:border-box}:host>div .wrsts-select-select{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:6px 30px 6px 10px;background-color:#fff;border:1px solid #a5a5a5;min-width:200px;min-height:20px;box-shadow:0 1px 2px rgba(0,0,0,.2)}:host>div .wrsts-select-select:after{content:'▾';position:absolute;right:8px}:host>div .wrsts-select-select.visible:after{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host>div .wrsts-select-options{box-sizing:border-box;position:absolute;width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #d8d8d8;-webkit-animation:wrsts-select-in .2s ease-in-out;animation:wrsts-select-in .2s ease-in-out;background-color:#fff;z-index:1}:host>div .wrsts-select-options.hidden{display:none}:host>div .wrsts-select-options.visible{display:block}"}}class o extends i{constructor(){super()}select(){this.selected||(this.selected=!0)}unselect(){this.selected&&(this.selected=!1)}focus(){this.focused||(this.focused=!0)}unfocus(){this.focused&&(this.focused=!1)}hide(){this.hidden||(this.hidden=!0)}unhide(){this.hidden&&(this.hidden=!1)}getClass(){let e="";return this.selected&&(e+="selected"),this.focused&&(e+=" focused"),this.hidden&&(e+=" hidden"),e}render(){return e("div",{class:this.getClass(),onClick:e=>this.clicked.emit(e)},e("slot",null))}static get is(){return"wrsts-select-option"}static get encapsulation(){return"shadow"}static get properties(){return{elementRef:{elementRef:!0},focus:{method:!0},focused:{type:Boolean,attr:"focused",mutable:!0},hidden:{type:Boolean,attr:"hidden",mutable:!0},hide:{method:!0},index:{type:String,attr:"index"},select:{method:!0},selected:{type:Boolean,attr:"selected",mutable:!0},unfocus:{method:!0},unhide:{method:!0},unselect:{method:!0},value:{type:String,attr:"value"}}}static get events(){return[{name:"clicked",method:"clicked",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{display:block}:host>div{display:block;padding:4px 6px;background-color:#fff;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:background-color .2s ease-in-out}:host>div.selected{background-color:#e6e6e6}:host>div:hover{background-color:#f2f2f2}:host>div.focused{background-color:#e6e6e6}:host>div.hidden{display:none}"}}export{n as WrstsSelect,o as WrstsSelectOption};