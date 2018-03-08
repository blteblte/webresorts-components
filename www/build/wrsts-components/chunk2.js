/*! Built with http://stenciljs.com */
const{h:e}=window.WrstsComponents;var t;!function(e){e[e.Default=0]="Default",e[e.Object=1]="Object",e[e.Array=2]="Array"}(t||(t={}));class a{}function r(e){return[].filter.call(e.attributes,e=>/^data-/.test(e.name)).map(e=>({name:e.name.substr(5).replace(/-(.)/g,(e,t)=>t.toUpperCase()),value:e.value}))}a.ResolveKey=function(e,t){return e.name||e.id||t},a.ResolveCheckboxValue=function(e){return e.checked},a.ResolveTextareaValue=function(e){return e.value},a.ResolveSelectValue=function(e){return e.selectedValue},a.ResolveInputValue=function(e){return e.input.value},a.ResolveDataAttributes=((e,a)=>a===t.Object?function(e){const t={};return r(e).forEach(e=>{t[e.name]=e.value}),t}(e):r(e));class n{static SerializeData(e,r,n){const u=n.valueResolver;let l=n.keyResolver,s=n.dataResolver;switch(n.keyResolver||(l=a.ResolveKey),n.dataResolver||(s=a.ResolveDataAttributes),r){case t.Object:return function(e,t,a,r,n){return e.reduce((e,s,c)=>(e[a(s,c)]=(u=r(s),l=n(s,t),{value:u,data:l}),e),{});var u,l}(e,r,l,u,s);case t.Array:return function(e,t,a,r,n){return e.reduce((e,c,o)=>(e[o]=(u=a(c,o),l=r(c),s=n(c,t),{name:u,value:l,data:s}),e),[]);var u,l,s}(e,r,l,u,s);case t.Default:return function(e,t,a){return e.reduce((e,r,n)=>(e[t(r,n)]=a(r),e),{})}(e,l,u)}}static Serialize(e,t,a){return this.SerializeData([e],t,a)}}export{n as ComponentSerializer,a as ComponentSerializerResolver};