/*! Built with http://stenciljs.com */
const{h:t}=window.WrstsComponents;function s(t){return t&&"[object Function]"==={}.toString.call(t)}const e="wrsts-checkbox, wrsts-select, wrsts-tinymce";class n{componentDidLoad(){this.bind()}bind(){this.formElements=Array.prototype.slice.call(this.wrstsJsonForm.querySelectorAll(e)),this.form=this.wrstsJsonForm.querySelector("form")}toJson(t=0){return this.formElements.reduce((s,e)=>(s.push(e.toJson(t)),s),[])}submit(t,s=0){!this.ajax&&this.form?this.submiSync():this.submitAsyncJson(t,s)}submiSync(){this.form.submit(),this.submitted.emit()}submitAsyncJson(t,e=0){const n=this.toJson(e);(function(t,s,e){return new Promise(function(n,o){var i=new XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&200===i.status?n(i.responseText):4==i.readyState&&200!==i.status&&o(i)},i.open(s,t,!0),i.send(e)})})(this.action,this.method,JSON.stringify(n)).then(e=>{s(t)&&t(e),this.submitted.emit(e)}).catch(e=>{s(t)&&t(e),this.submitted.emit(e)})}render(){return t("div",null,this.ajax?t("slot",null):t("form",{action:this.action,method:this.method,target:this.target,novalidate:!0},t("slot",null)))}static get is(){return"wrsts-json-form"}static get properties(){return{action:{type:String,attr:"action"},ajax:{type:Boolean,attr:"ajax"},bind:{method:!0},method:{type:String,attr:"method"},submit:{method:!0},target:{type:String,attr:"target"},toJson:{method:!0},wrstsJsonForm:{elementRef:!0}}}static get events(){return[{name:"submitted",method:"submitted",bubbles:!0,cancelable:!0,composed:!0}]}}export{n as WrstsJsonForm};