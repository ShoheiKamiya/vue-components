(function(e){function t(t){for(var r,a,u=t[0],l=t[1],s=t[2],d=0,m=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(t);while(m.length)m.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue-components/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{attrs:{id:"nav"}},[n("ul",{staticClass:"main-menu"},[n("li",{staticClass:"main-menu__item"},[n("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),n("li",{staticClass:"main-menu__item"},[n("router-link",{attrs:{to:"/01-grid-table"}},[e._v("01 GridTable")])],1)])]),n("div",{staticClass:"main"},[n("router-view")],1)])},i=[],a=(n("5c0b"),n("2877")),u={},l=Object(a["a"])(u,o,i,!1,null,null,null),s=l.exports,c=n("8c4f"),d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h1",[e._v("This is a home page")])])}],p={},f=Object(a["a"])(p,d,m,!1,null,null,null),h=f.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("GridTable")],1)},y=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",e._l(e.mapColumns,(function(t){return n("th",{key:t[0]},[e._v(e._s(t[1]))])})),0)]),n("tbody",e._l(e.data,(function(t,r){return n("tr",{key:t.id},e._l(e.mapColumns,(function(o,i){return n("GridCell",{key:o[0],attrs:{"row-index":r,"col-key":o[0],value:t[o[0]],"tab-index":""+(5*r+i)},on:{update:e.updateValue,keydown:e.move}})})),1)})),0)])},w=[],x=(n("a434"),n("4ec9"),n("4fad"),n("d3b7"),n("3ca3"),n("ddb0"),n("ade3")),g=n("5530"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("td",{ref:"cell",attrs:{tabindex:e.tabIndex},on:{keydown:e.keyAcion,dblclick:e.showEditor}},[n("input",{directives:[{name:"show",rawName:"v-show",value:e.editting,expression:"editting"}],ref:"editor",attrs:{type:"text"},domProps:{value:e.value},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateValue(t)},blur:e.hideEditor}}),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.editting,expression:"!editting"}]},[e._v(e._s(e.value))])])},k=[],O=(n("a9e3"),{props:{tabIndex:{type:String,required:!0},rowIndex:{type:Number,required:!0},colKey:{type:String,required:!0},value:{type:String,required:!0}},data:function(){return{editting:!1}},methods:{keyAcion:function(e){"Enter"!==e.key?this.$emit("keydown",e):this.showEditor()},showEditor:function(){var e=this;this.editting=!0,this.$nextTick((function(){return e.$refs.editor.focus()}))},hideEditor:function(){this.editting=!1,this.$refs.cell.focus()},updateValue:function(){var e=this,t={rowIndex:this.rowIndex,colKey:this.colKey,oldValue:this.value,newValue:this.$refs.editor.value};this.$nextTick((function(){return e.$refs.editor.blur()})),this.$emit("update",t)}}}),C=O,j=Object(a["a"])(C,_,k,!1,null,null,null),I=j.exports,$=[{id:1,name:"もげじ太朗",email:"moge1@example.com",birthday:"1994-05-11",annualIncome:"3000",employmentStatus:"役員"},{id:2,name:"もげじ次郎",email:"moge2@example.com",birthday:"1994-05-11",annualIncome:"40000",employmentStatus:"従業員"},{id:3,name:"Moge花子",email:"moge3@example.com",birthday:"1994-05-11",annualIncome:"83000",employmentStatus:"従業員"}],E={name:"名前",email:"メールアドレス",birthday:"誕生日",annualIncome:"年収",employmentStatus:"雇用形態"},S={components:{GridCell:I},data:function(){return{data:$,columns:E}},computed:{mapColumns:function(){return new Map(Object.entries(this.columns))},maxIndex:function(){return this.data.length*this.mapColumns.size},minIndex:function(){return 0},columnLength:function(){return this.mapColumns.size}},methods:{move:function(e){var t=e.path[0].tabIndex;"ArrowUp"!==e.key?"ArrowRight"!==e.key?"ArrowDown"!==e.key?"ArrowLeft"===e.key&&this.moveCell(t-1):this.moveCell(t+this.columnLength):this.moveCell(t+1):this.moveCell(t-this.columnLength)},moveCell:function(e){e>=this.maxIndex||e<this.minIndex||document.querySelector('[tabindex="'.concat(e,'"]')).focus()},updateValue:function(e){var t=this.data[e.rowIndex],n=Object(g["a"])(Object(g["a"])({},t),{},Object(x["a"])({},e.colKey,e.newValue));this.data.splice(e.rowIndex,1,n)}}},T=S,P=Object(a["a"])(T,b,w,!1,null,null,null),V=P.exports,A={components:{GridTable:V}},M=A,q=Object(a["a"])(M,v,y,!1,null,null,null),G=q.exports;r["a"].use(c["a"]);var K=[{path:"/",name:"Home",component:h},{path:"/01-grid-table",component:G}],L=new c["a"]({mode:"history",base:"/vue-components/",routes:K}),N=L;n("a3d0");r["a"].config.productionTip=!1,new r["a"]({router:N,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.2d139e03.js.map