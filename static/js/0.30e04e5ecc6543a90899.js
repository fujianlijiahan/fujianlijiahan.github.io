webpackJsonp([0],{"0dRr":function(e,t,r){"use strict";var o=r("IcnI"),i={props:["item"],data:function(){return{iconShow:"/dragAndResize"===this.$route.path,rules:[{type:"number",message:"必须为数字值"}],comId:"",dialogFormVisible:!1,myForm:{overflow:"hidden"},formLabelWidth:"120px",chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}},computed:{dragAndResizeArr:function(){return o.a.getters.dragAndResizeArr}},created:function(){},methods:{setThisCom:function(e){for(var t in this.comId=e.id,this.dialogFormVisible=!0,this.dragAndResizeArr)this.dragAndResizeArr[t].id===e.id&&(this.myForm.height=Number(this.dragAndResizeArr[t].objStyle.height.replace("px","")),this.myForm.width=Number(this.dragAndResizeArr[t].objStyle.width.replace("px","")),this.myForm.top=Number(this.dragAndResizeArr[t].objStyle.top.replace("px","")),this.myForm.left=Number(this.dragAndResizeArr[t].objStyle.left.replace("px","")),this.myForm.overflow=this.dragAndResizeArr[t].objStyle.overflow)},sureSetCom:function(e){var t=this;this.$refs.myForm.validate(function(r){if(!r)return console.log("error submit!!"),!1;for(var o in t.dialogFormVisible=!1,t.item.colors=e.colors.split(","),t.dragAndResizeArr)t.dragAndResizeArr[o].id===t.comId&&(t.dragAndResizeArr[o].objStyle.height=e.height+"px",t.dragAndResizeArr[o].objStyle.width=e.width+"px",t.dragAndResizeArr[o].objStyle.top=e.top+"px",t.dragAndResizeArr[o].objStyle.left=e.left+"px",t.dragAndResizeArr[o].objStyle.overflow=e.overflow)})}}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.iconShow?r("i",{staticClass:"el-icon-setting",on:{click:function(t){e.setThisCom(e.item)}}}):e._e(),e._v(" "),r("div",[e._v("\n    组件1\n  ")]),e._v(" "),e.dialogFormVisible?r("el-dialog",{attrs:{title:"dataSet",visible:e.dialogFormVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"myForm",attrs:{model:e.myForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"width",prop:"width",rules:e.rules}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.myForm.width,callback:function(t){e.$set(e.myForm,"width",e._n(t))},expression:"myForm.width"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"height",prop:"height",rules:e.rules}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.myForm.height,callback:function(t){e.$set(e.myForm,"height",e._n(t))},expression:"myForm.height"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"top",prop:"top",rules:e.rules}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.myForm.top,callback:function(t){e.$set(e.myForm,"top",e._n(t))},expression:"myForm.top"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"left",prop:"left",rules:e.rules}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.myForm.left,callback:function(t){e.$set(e.myForm,"left",e._n(t))},expression:"myForm.left"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"overflow",prop:"overflow",rules:[{required:!0,message:"必须输入"}]}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.myForm.overflow,callback:function(t){e.$set(e.myForm,"overflow",t)},expression:"myForm.overflow"}},[r("el-option",{attrs:{value:"hidden"}}),e._v(" "),r("el-option",{attrs:{value:"auto"}}),e._v(" "),r("el-option",{attrs:{value:"scroll"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sureSetCom(e.myForm)}}},[e._v("确 定")])],1)],1):e._e()],1)},staticRenderFns:[]};var s=r("C7Lr")(i,a,!1,function(e){r("dM4O")},"data-v-71932ff0",null).exports,l={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  组件2\n")])},staticRenderFns:[]};r("C7Lr")({name:"two"},l,!1,function(e){r("2QgP")},"data-v-b6b671d8",null).exports;var n={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  组件3\n")])},staticRenderFns:[]};r("C7Lr")({name:"three"},n,!1,function(e){r("nu3D")},"data-v-6176d652",null).exports;var d={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  组件4\n")])},staticRenderFns:[]};r("C7Lr")({name:"four"},d,!1,function(e){r("hJWx")},"data-v-c3cb78e4",null).exports;var m=r("aozt"),c=r.n(m),u={props:["item"],data:function(){return{baseUrl:"https://www.easy-mock.com/mock/5ba196944442b90220354ed2/yeyoo",iconShow:"/dragAndResize"===this.$route.path,rules:[{type:"number",message:"必须为数字值"}],comId:"",dialogFormVisible:!1,myForm:{overflow:"hidden"},formLabelWidth:"120px",chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}},computed:{dragAndResizeArr:function(){return o.a.getters.dragAndResizeArr}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;this.item.api&&c.a.get(this.baseUrl+this.item.api).then(function(t){e.chartData=t.data})},setThisCom:function(e){for(var t in this.comId=e.id,this.dialogFormVisible=!0,this.dragAndResizeArr)this.dragAndResizeArr[t].id===e.id&&(this.myForm.height=Number(this.dragAndResizeArr[t].objStyle.height.replace("px","")),this.myForm.width=Number(this.dragAndResizeArr[t].objStyle.width.replace("px","")),this.myForm.top=Number(this.dragAndResizeArr[t].objStyle.top.replace("px","")),this.myForm.left=Number(this.dragAndResizeArr[t].objStyle.left.replace("px","")),this.myForm.overflow=this.dragAndResizeArr[t].objStyle.overflow,this.myForm.colors=this.dragAndResizeArr[t].options.colors.join(","),this.myForm.api=this.dragAndResizeArr[t].api)},sureSetCom:function(e){var t=this;this.$refs.myForm.validate(function(r){if(!r)return console.log("error submit!!"),!1;for(var o in t.dialogFormVisible=!1,t.item.options.colors=e.colors.split(","),t.item.api=e.api,t.dragAndResizeArr)t.dragAndResizeArr[o].id===t.comId&&(t.dragAndResizeArr[o].objStyle.height=e.height+"px",t.dragAndResizeArr[o].objStyle.width=e.width+"px",t.dragAndResizeArr[o].objStyle.top=e.top+"px",t.dragAndResizeArr[o].objStyle.left=e.left+"px",t.dragAndResizeArr[o].objStyle.overflow=e.overflow);t.getData()})}}},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.iconShow?r("i",{staticClass:"el-icon-setting",on:{click:function(t){e.setThisCom(e.item)}}}):e._e(),e._v(" "),r("ve-line",{attrs:{data:e.chartData,colors:e.item.options.colors}}),e._v(" "),e.dialogFormVisible?r("el-dialog",{attrs:{title:"dataSet",visible:e.dialogFormVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"myForm",attrs:{model:e.myForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"width",prop:"width",rules:e.rules}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.myForm.width,callback:function(t){e.$set(e.myForm,"width",e._n(t))},expression:"myForm.width"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"height",prop:"height",rules:e.rules}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.myForm.height,callback:function(t){e.$set(e.myForm,"height",e._n(t))},expression:"myForm.height"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"top",prop:"top",rules:e.rules}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.myForm.top,callback:function(t){e.$set(e.myForm,"top",e._n(t))},expression:"myForm.top"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"left",prop:"left",rules:e.rules}},[r("el-input",{attrs:{"auto-complete":"off"},model:{value:e.myForm.left,callback:function(t){e.$set(e.myForm,"left",e._n(t))},expression:"myForm.left"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"colors",prop:"colors",rules:[{required:!0,message:"必须输入"},{pattern:/^(#([0-9a-fA-F]{6},?|[0-9a-fA-F]{3},?))+$/g,message:"请按要求输入"}]}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"输入标准色号以英文逗号隔开.例:#ddd,#956328"},model:{value:e.myForm.colors,callback:function(t){e.$set(e.myForm,"colors",t)},expression:"myForm.colors"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"xAxis",prop:"xAxis"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"输入xAxis以英文逗号隔开.例:一月,二月"},model:{value:e.myForm.xAxis,callback:function(t){e.$set(e.myForm,"xAxis",t)},expression:"myForm.xAxis"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"api",prop:"api"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"api"},model:{value:e.myForm.api,callback:function(t){e.$set(e.myForm,"api",t)},expression:"myForm.api"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"overflow",prop:"overflow",rules:[{required:!0,message:"必须输入"}]}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.myForm.overflow,callback:function(t){e.$set(e.myForm,"overflow",t)},expression:"myForm.overflow"}},[r("el-option",{attrs:{value:"hidden"}}),e._v(" "),r("el-option",{attrs:{value:"auto"}}),e._v(" "),r("el-option",{attrs:{value:"scroll"}})],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sureSetCom(e.myForm)}}},[e._v("确 定")])],1)],1):e._e()],1)},staticRenderFns:[]};var h=r("C7Lr")(u,p,!1,function(e){r("R+Ev")},"data-v-6f0ab914",null).exports,f={render:function(){var e=this.$createElement;return(this._self._c||e)("ve-histogram",{attrs:{data:this.chartData}})},staticRenderFns:[]},g=(r("C7Lr")({data:function(){return{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}}},f,!1,null,null,null).exports,{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData}},[t("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),this._v(" "),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),this._v(" "),t("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)},staticRenderFns:[]}),b=(r("C7Lr")({data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}}},g,!1,null,null,null).exports,{render:function(){var e=this.$createElement;return(this._self._c||e)("ve-radar",{attrs:{data:this.chartData}})},staticRenderFns:[]}),v=(r("C7Lr")({data:function(){return{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}}},b,!1,null,null,null).exports,r("aIFB")),y={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.iconShow?r("i",{staticClass:"el-icon-setting",on:{click:function(t){e.setThisCom(e.item)}}}):e._e(),e._v(" "),r("ve-chart",{attrs:{data:e.chartData,"judge-width":!0,events:e.chartEvents,settings:e.item.options.chartSettings,colors:e.item.options.colors}}),e._v(" "),e.dialogFormVisible?r("el-dialog",{attrs:{title:"dataSet",visible:e.dialogFormVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"myForm",attrs:{model:e.myForm,"label-width":"100px"}},[r("form-public",{attrs:{myForm:e.myForm}}),e._v(" "),r("el-form-item",{attrs:{label:"colors",prop:"colors",rules:[{required:!0,message:"必须输入"},{pattern:/^(#([0-9a-fA-F]{6},?|[0-9a-fA-F]{3},?))+$/g,message:"请按要求输入"}]}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"输入标准色号以英文逗号隔开.例:#ddd,#956328"},model:{value:e.myForm.colors,callback:function(t){e.$set(e.myForm,"colors",t)},expression:"myForm.colors"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"xAxis",prop:"xAxis"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"输入xAxis以英文逗号隔开.例:一月,二月"},model:{value:e.myForm.xAxis,callback:function(t){e.$set(e.myForm,"xAxis",t)},expression:"myForm.xAxis"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"api",prop:"api"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"api"},model:{value:e.myForm.api,callback:function(t){e.$set(e.myForm,"api",t)},expression:"myForm.api"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"type",prop:"type",rules:[{required:!0,message:"必须输入"}]}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.myForm.type,callback:function(t){e.$set(e.myForm,"type",t)},expression:"myForm.type"}},[r("el-option",{attrs:{value:"line"}}),e._v(" "),r("el-option",{attrs:{value:"histogram"}}),e._v(" "),r("el-option",{attrs:{value:"pie"}}),e._v(" "),r("el-option",{attrs:{value:"bar"}}),e._v(" "),r("el-option",{attrs:{value:"ring"}}),e._v(" "),r("el-option",{attrs:{value:"radar"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"clickFunction",prop:"clickFunction"}},[r("el-input",{attrs:{type:"textarea",rows:10,placeholder:"请输入内容"},model:{value:e.myForm.clickFunction,callback:function(t){e.$set(e.myForm,"clickFunction",t)},expression:"myForm.clickFunction"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sureSetCom(e.myForm)}}},[e._v("确 定")])],1)],1):e._e()],1)},staticRenderFns:[]};var A=function(e){r("ogRG")},_=r("C7Lr")(v.a,y,!1,A,"data-v-ab97f71a",null).exports,F={name:"myButton",props:["item"],data:function(){var e=this;return this.btnClick={click:function(t){var r=t.buttonConfig.target;for(var o in e.dragAndResizeArr)e.dragAndResizeArr[o].id===r&&("/chartsLine1"===e.dragAndResizeArr[o].api?e.dragAndResizeArr[o].api="/chartsLine0":e.dragAndResizeArr[o].api="/chartsLine1")}},{comId:"",iconShow:"/dragAndResize"===this.$route.path,rules:[{type:"number",message:"必须为数字值"}],dialogFormVisible:!1,myForm:{overflow:"hidden",type:"default"}}},computed:{dragAndResizeArr:function(){return o.a.getters.dragAndResizeArr}},methods:{setThisCom:function(e){for(var t in this.comId=e.id,this.dialogFormVisible=!0,this.myForm.type=e.buttonConfig.type,this.myForm.buttonText=e.buttonConfig.buttonText,this.myForm.target=e.buttonConfig.target,this.myForm.link=e.link,this.myForm.sql=e.sql,this.dragAndResizeArr)this.dragAndResizeArr[t].id===e.id&&(this.myForm.height=Number(this.dragAndResizeArr[t].objStyle.height.replace("px","")),this.myForm.width=Number(this.dragAndResizeArr[t].objStyle.width.replace("px","")),this.myForm.top=Number(this.dragAndResizeArr[t].objStyle.top.replace("px","")),this.myForm.left=Number(this.dragAndResizeArr[t].objStyle.left.replace("px","")),this.myForm.overflow=this.dragAndResizeArr[t].objStyle.overflow,this.myForm.border=this.dragAndResizeArr[t].objStyle.border,this.myForm.id=this.dragAndResizeArr[t].id)},sureSetCom:function(e){var t=this;this.$refs.myForm.validate(function(r){if(!r)return console.log("error submit!!"),!1;for(var o in t.dialogFormVisible=!1,t.item.buttonConfig.type=e.type,t.item.buttonConfig.buttonText=e.buttonText,t.item.buttonConfig.target=e.target,t.item.api=e.api,t.item.link=e.link,t.item.sql=e.sql,t.dragAndResizeArr)t.dragAndResizeArr[o].id===t.comId&&(t.dragAndResizeArr[o].objStyle.height=e.height+"px",t.dragAndResizeArr[o].objStyle.width=e.width+"px",t.dragAndResizeArr[o].objStyle.top=e.top+"px",t.dragAndResizeArr[o].objStyle.left=e.left+"px",t.dragAndResizeArr[o].objStyle.overflow=e.overflow)})}}},x={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.iconShow?r("i",{staticClass:"el-icon-setting",on:{click:function(t){e.setThisCom(e.item)}}}):e._e(),e._v(" "),r("el-button",{attrs:{type:e.item.buttonConfig.type},on:{click:function(t){e.btnClick.click(e.item)}}},[e._v("\n    "+e._s(e.item.buttonConfig.buttonText)+"\n  ")]),e._v(" "),r("el-dialog",{attrs:{title:"buttonSet",visible:e.dialogFormVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[r("el-form",{ref:"myForm",attrs:{model:e.myForm,"label-width":"100px"}},[r("form-public",{attrs:{myForm:e.myForm}}),e._v(" "),r("el-form-item",{attrs:{label:"api",prop:"api"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"api"},model:{value:e.myForm.api,callback:function(t){e.$set(e.myForm,"api",t)},expression:"myForm.api"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"link",prop:"link"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"link"},model:{value:e.myForm.link,callback:function(t){e.$set(e.myForm,"link",t)},expression:"myForm.link"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"sql",prop:"sql"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"sql"},model:{value:e.myForm.sql,callback:function(t){e.$set(e.myForm,"sql",t)},expression:"myForm.sql"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"buttonText",prop:"buttonText"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"buttonText"},model:{value:e.myForm.buttonText,callback:function(t){e.$set(e.myForm,"buttonText",t)},expression:"myForm.buttonText"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"type",prop:"type",rules:[{required:!0,message:"必须输入"}]}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.myForm.type,callback:function(t){e.$set(e.myForm,"type",t)},expression:"myForm.type"}},[r("el-option",{attrs:{value:"default"}}),e._v(" "),r("el-option",{attrs:{value:"success"}}),e._v(" "),r("el-option",{attrs:{value:"warning"}}),e._v(" "),r("el-option",{attrs:{value:"primary"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"target",prop:"target"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"target"},model:{value:e.myForm.target,callback:function(t){e.$set(e.myForm,"target",t)},expression:"myForm.target"}})],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sureSetCom(e.myForm)}}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var R=r("C7Lr")(F,x,!1,function(e){r("d4DW")},"data-v-25a78414",null).exports;t.a={one:s,chartsLine:h,chartsAll:_,myButton:R}},"2QgP":function(e,t){},BE7J:function(e,t){},Jrsi:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("4YfN"),i=r.n(o);var a=r("0dRr"),s=r("IcnI"),l={name:"dragAndResize",components:i()({},a.a),data:function(){return{itemObj:{},objStyle:{},hasMove:!1,isDrag:!1,navArr:this.getNav(),resizable:!0,draggable:!0,edge:20,dragStyle:{background:"#dddd",border:"1px solid #000",height:"50px",width:"200px"}}},created:function(){},computed:{dragAndResizeArr:function(){return s.a.getters.dragAndResizeArr}},methods:{getNav:function(){var e=[];for(var t in a.a){e.push(t)}return e},delCom:function(e){for(var t in this.dragAndResizeArr)this.dragAndResizeArr[t].id===e.id&&this.dragAndResizeArr.splice(t,1)},onMouseOver:function(e,t,r){var o={id:t.id,name:t.name};this.itemObj=o},goTo:function(){this.$store.dispatch("setDragAndResizeArrActions",this.dragAndResizeArr),this.$router.push("/dragAndResizePreview")},leftOnMouseDown:function(e){var t={id:function(){for(var e="",t=1;t<=32;t++)e+=Math.floor(16*Math.random()).toString(16),8!=t&&12!=t&&16!=t&&20!=t||(e+="-");return e}(),secondId:"",name:e,api:"",link:"https://www.baidu.com",sql:"",objStyle:{height:"300px",width:"300px",left:"0px",top:"0px",position:"absolute",border:"1px solid #000",overflow:"hidden"}},r={};e.toLowerCase().indexOf("charts")>-1?r.options={colors:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3"],chartSettings:{type:"line"},clickFunction:""}:e.toLowerCase().indexOf("button")>-1&&(r.buttonConfig={type:"default",buttonText:"按钮",target:""});var o=i()({},t,r);this.dragAndResizeArr.push(o)},dragStartStart:function(){this.isDrag=!0},resizeStopStop:function(e){for(var t in this.objStyle={height:e.height+"px",width:e.width+"px",left:e.left+"px",top:e.top+"px",position:"absolute",border:"1px solid #000",overflow:"hidden"},this.dragAndResizeArr)this.dragAndResizeArr[t].id===this.itemObj.id&&(this.dragAndResizeArr[t].objStyle.height=this.objStyle.height,this.dragAndResizeArr[t].objStyle.width=this.objStyle.width,this.dragAndResizeArr[t].objStyle.left=this.objStyle.left,this.dragAndResizeArr[t].objStyle.top=this.objStyle.top);this.$store.dispatch("setDragAndResizeArrActions",this.dragAndResizeArr)},dragEndEnd:function(e){for(var t in this.objStyle={height:e.height+"px",width:e.width+"px",left:e.left+"px",top:e.top+"px",position:"absolute",border:"1px solid #000",overflow:"hidden"},this.dragAndResizeArr)this.dragAndResizeArr[t].id===this.itemObj.id&&(this.dragAndResizeArr[t].objStyle.height=this.objStyle.height,this.dragAndResizeArr[t].objStyle.width=this.objStyle.width,this.dragAndResizeArr[t].objStyle.left=this.objStyle.left,this.dragAndResizeArr[t].objStyle.top=this.objStyle.top);this.$store.dispatch("setDragAndResizeArrActions",this.dragAndResizeArr),this.hasMove=!0,this.isDrag=!1},onMouseMove:function(e,t,r){Math.abs(e.offsetX-e.currentTarget.offsetWidth)<=20?(this.resizable=!1,this.draggable=!0):Math.abs(e.offsetY-e.currentTarget.offsetHeight)<=20?(this.resizable=!1,this.draggable=!0):(this.resizable=!0,this.draggable=!1)},onDrag:function(){console.log("正在拖拽")}},watch:{isDrag:function(){this.navArr=this.getNav()}}},n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-row",[r("el-col",{attrs:{span:3}},[r("div",{staticClass:"buttonContainer"},[r("el-button",{on:{click:function(t){e.goTo()}}},[e._v("预览")])],1),e._v(" "),e._l(e.navArr,function(t){return r("div",{style:e.dragStyle,on:{mousedown:function(r){e.leftOnMouseDown(t)}}},[e._v(e._s(t))])})],2),e._v(" "),r("el-col",{attrs:{span:4}},[r("div",[r("pre",[e._v(e._s(e.dragAndResizeArr)+"\n      ")])])]),e._v(" "),r("el-col",{attrs:{span:17}},[r("div",{staticStyle:{"min-height":"2000px","background-color":"#DDDDDD",position:"relative"}},e._l(e.dragAndResizeArr,function(t,o){return r("div",{directives:[{name:"Resizable",rawName:"v-Resizable",value:{disabled:e.resizable,edge:e.edge,resizeStop:e.resizeStopStop},expression:"{disabled:resizable,edge:edge,resizeStop:resizeStopStop}"},{name:"Draggable",rawName:"v-Draggable",value:{disabled:e.draggable,dragEnd:e.dragEndEnd,dragStart:e.dragStartStart},expression:"{disabled:draggable,dragEnd:dragEndEnd,dragStart:dragStartStart}"}],style:t.objStyle,on:{mousemove:function(r){e.onMouseMove(r,t,o)},mouseover:function(r){e.onMouseOver(r,t,o)}}},[r("div",{staticStyle:{position:"relative"}},[r("i",{staticClass:"el-icon-remove",on:{click:function(r){e.delCom(t)}}}),e._v(" "),r(t.name,{tag:"component",attrs:{item:t}})],1)])}))])],1)],1)},staticRenderFns:[]};var d=r("C7Lr")(l,n,!1,function(e){r("BE7J")},"data-v-fb969df4",null);t.default=d.exports},"R+Ev":function(e,t){},aIFB:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__store__=__webpack_require__("IcnI"),__WEBPACK_IMPORTED_MODULE_1_axios__=__webpack_require__("aozt"),__WEBPACK_IMPORTED_MODULE_1_axios___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);__webpack_exports__.a={props:["item"],data:function data(){var self=this;return this.chartEvents={click:function click(e){eval(self.item.options.clickFunction)}},{dataList:[],baseUrl:"https://www.easy-mock.com/mock/5ba196944442b90220354ed2/yeyoo",iconShow:"/dragAndResize"===this.$route.path,rules:[{type:"number",message:"必须为数字值"}],comId:"",dialogFormVisible:!1,dialogTableVisible:!1,myForm:{overflow:"hidden",type:"line"},formLabelWidth:"120px",chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}},computed:{dragAndResizeArr:function(){return __WEBPACK_IMPORTED_MODULE_0__store__.a.getters.dragAndResizeArr}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;this.item.api&&__WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(this.baseUrl+this.item.api).then(function(t){e.chartData=t.data})},setThisCom:function(e){for(var t in this.comId=e.id,this.dialogFormVisible=!0,this.myForm.border=e.objStyle.border,this.myForm.clickFunction=e.options.clickFunction,this.dragAndResizeArr)this.dragAndResizeArr[t].id===e.id&&(this.myForm.height=Number(this.dragAndResizeArr[t].objStyle.height.replace("px","")),this.myForm.width=Number(this.dragAndResizeArr[t].objStyle.width.replace("px","")),this.myForm.top=Number(this.dragAndResizeArr[t].objStyle.top.replace("px","")),this.myForm.left=Number(this.dragAndResizeArr[t].objStyle.left.replace("px","")),this.myForm.overflow=this.dragAndResizeArr[t].objStyle.overflow,this.myForm.colors=this.dragAndResizeArr[t].options.colors.join(","),this.myForm.api=this.dragAndResizeArr[t].api,this.myForm.id=this.dragAndResizeArr[t].id,this.myForm.type=this.dragAndResizeArr[t].options.chartSettings.type)},sureSetCom:function(e){var t=this;this.$refs.myForm.validate(function(r){if(!r)return console.log("error submit!!"),!1;for(var o in t.dialogFormVisible=!1,t.item.options.colors=e.colors.split(","),t.item.api=e.api,t.item.objStyle.border=e.border,t.item.options.chartSettings.type=e.type,t.item.options.clickFunction=e.clickFunction,t.dragAndResizeArr)t.dragAndResizeArr[o].id===t.comId&&(t.dragAndResizeArr[o].objStyle.height=e.height+"px",t.dragAndResizeArr[o].objStyle.width=e.width+"px",t.dragAndResizeArr[o].objStyle.top=e.top+"px",t.dragAndResizeArr[o].objStyle.left=e.left+"px",t.dragAndResizeArr[o].objStyle.overflow=e.overflow);t.getData()})}},watch:{"item.api":function(){this.getData()}}}},d4DW:function(e,t){},dM4O:function(e,t){},hJWx:function(e,t){},nu3D:function(e,t){},ogRG:function(e,t){}});
//# sourceMappingURL=0.30e04e5ecc6543a90899.js.map