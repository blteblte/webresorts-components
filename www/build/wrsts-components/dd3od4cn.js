/*! Built with http://stenciljs.com */
const{h:t}=window.WrstsComponents;class s{get hasForm(){return void 0!==this.formId&&null!==this.formId}componentDidLoad(){this.hasForm&&(this.wrstsJsonForm=document.getElementById(this.formId))}onClick(t){this.hasForm&&(this.wrstsJsonForm.ajax&&t.preventDefault(),this.wrstsJsonForm.submit())}render(){return t("button",{onClick:this.onClick.bind(this)},t("slot",null))}static get is(){return"wrsts-button"}static get properties(){return{formId:{type:String,attr:"form-id"}}}static get style(){return"wrsts-button{display:inline-block;cursor:pointer}wrsts-button button{border:none;outline:0;padding:8px 12px;background-color:#f3f3f3;color:#595959;transition:background-color .2s ease-in-out}wrsts-button button:hover{background-color:#dadada}"}}export{s as WrstsButton};