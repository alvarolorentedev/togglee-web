(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[6],{110:function(e,t,a){"use strict";a(1);var n=a(86),c=a.n(n),r=a(257),i=a(24),o=a(6);t.a=Object(i.a)((function(e){return{main:{backgroundColor:e.palette.warning.light,border:"".concat(e.border.borderWidth,"px solid ").concat(e.palette.warning.main),padding:e.spacing(2),borderRadius:e.shape.borderRadius}}}),{withTheme:!0})((function(e){var t=e.className,a=e.children,n=e.classes;return Object(o.jsx)("div",{className:c()(n.main,t||null),children:Object(o.jsx)(r.a,{variant:"body2",children:a})})}))},115:function(e,t,a){"use strict";var n=1/0;function c(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&n>e?(n=e,window.requestAnimationFrame(c),window.scrollTo(0,e-e/8)):n=1/0}t.a=function(){setTimeout((function(){c()}),10)}},116:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"c",(function(){return j})),a.d(t,"b",(function(){return p}));var n=a(102),c=a.n(n),r=a(103),i=a(124),o=a.n(i),s={start:0,end:107,source:{body:"mutation($email: String!, $password: String!){ createUser(email: $email, password: $password) { success } }",name:"GraphQL request",locationOffset:{line:1,column:1}}},l={start:0,end:124,source:{body:"mutation($email: String!, $password: String!){ validateCredentialsUser(email: $email, password: $password) { success, id } }",name:"GraphQL request",locationOffset:{line:1,column:1}}},u={start:0,end:230,source:{body:"query($id: String!) {\n    user(id:$id) {\n        id,\n        email,\n        isTest,\n        projects {\n            name,\n            owner,\n            id,\n            isTest,\n            url,\n            toggles\n        }\n    }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}}},d={headers:{Authorization:"Basic ".concat(btoa("".concat("admin",":").concat("supersecret")))}},b=function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://togglee.herokuapp.com","/graphql"),{query:s.source.body,variables:{email:t,password:a}},d);case 2:return e.abrupt("return",e.sent.data.data.createUser);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(r.a)(c.a.mark((function e(t,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://togglee.herokuapp.com","/graphql"),{query:l.source.body,variables:{email:t,password:a}},d);case 2:return e.abrupt("return",e.sent.data.data.validateCredentialsUser);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.post("".concat("https://togglee.herokuapp.com","/graphql"),{query:u.source.body,variables:{id:t}},d);case 2:return e.abrupt("return",e.sent.data.data.user);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},121:function(e,t,a){"use strict";var n=a(91),c=a(95),r=a(1),i=a.n(r),o=a(2),s=a(6);t.a=function(e){var t=e.component,a=Object(c.a)(e,["component"]);return Object(s.jsx)(o.a,Object(n.a)(Object(n.a)({},a),{},{render:function(e){return function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var c=Object.assign.apply(Object,[{}].concat(a));return i.a.createElement(e,c)}(t,e,a)}}))}},122:function(e,t,a){"use strict";var n=a(1),c=a(30),r=a(304),i=a(305),o=a(273),s=a(270),l=a(277),u=a(260),d=a(267),b=a(274),j=a(257),p=a(24),m=a(123),g=a.n(m),h=a(6);t.a=Object(r.a)()(Object(p.a)((function(e){return{closeIcon:{marginRight:e.spacing(.5)},headSection:{width:200},blackList:{backgroundColor:e.palette.common.black,height:"100%"},noDecoration:{textDecoration:"none !important"}}}),{withTheme:!0})((function(e){var t=e.width,a=e.open,p=e.onClose,m=e.anchor,O=e.classes,f=e.menuItems,x=e.selectedItem,v=e.theme;return Object(n.useEffect)((function(){window.onresize=function(){Object(r.c)("sm",t)&&a&&p()}}),[t,a,p]),Object(h.jsxs)(i.a,{variant:"temporary",open:a,onClose:p,anchor:m,children:[Object(h.jsx)(o.a,{className:O.headSection,children:Object(h.jsx)(s.a,{style:{paddingTop:v.spacing(0),paddingBottom:v.spacing(0),height:"100%",justifyContent:"left"===m?"flex-start":"flex-end"},disableGutters:!0,children:Object(h.jsx)(l.a,{className:O.closeIcon,children:Object(h.jsx)(u.a,{onClick:p,"aria-label":"Close Navigation",children:Object(h.jsx)(g.a,{color:"primary"})})})})}),Object(h.jsx)(d.a,{className:O.blackList,children:f.map((function(e){return e.link?Object(h.jsx)(c.b,{to:e.link,className:O.noDecoration,onClick:p,children:Object(h.jsxs)(s.a,{button:!0,selected:x===e.name,disableRipple:!0,disableTouchRipple:!0,children:[Object(h.jsx)(l.a,{children:e.icon}),Object(h.jsx)(b.a,{primary:Object(h.jsx)(j.a,{variant:"subtitle1",className:"text-white",children:e.name})})]})},e.name):Object(h.jsxs)(s.a,{button:!0,onClick:e.onClick,children:[Object(h.jsx)(l.a,{children:e.icon}),Object(h.jsx)(b.a,{primary:Object(h.jsx)(j.a,{variant:"subtitle1",className:"text-white",children:e.name})})]},e.name)}))})]})})))},290:function(e,t,a){"use strict";a.r(t);var n=a(102),c=a.n(n),r=a(103),i=a(87),o=a(3),s=a(1),l=a(86),u=a.n(l),d=a(24),b=a(2),j=a(154),p=a(289),m=a(257),g=a(272),h=a(138),O=a.n(h),f=a(91),x=a(296),v=a(259),w=a(261),k=a(262),y=a(263),C=a(252),T=a(253),N=a(297),S=a(266),L=a(291),D=a(269),B=a(271),A=a(260),I=a(166),R=a.n(I),q=a(251),$=a(300),P=a(301),_=a(6);var F=Object(d.a)((function(e){return{tableSortLabel:{cursor:"text",userSelect:"auto",color:"inherit !important"},noIcon:{"& path":{display:"none !important"}},paddingFix:{paddingLeft:e.spacing(3)}}}),{withTheme:!0})((function(e){var t=e.order,a=e.orderBy,n=e.rows,c=e.onRequestSort,r=e.classes,i=Object(s.useCallback)((function(e){return function(t){c(t,e)}}),[c]);return Object(_.jsx)(q.a,{children:Object(_.jsx)(C.a,{children:n.map((function(e,n){return Object(_.jsx)(T.a,{align:e.numeric?"right":"inherit",padding:"default",sortDirection:a===e.name&&t,className:0===n?r.paddingFix:null,children:c?Object(_.jsx)($.a,{title:"Sort",placement:e.numeric?"bottom-end":"bottom-start",enterDelay:300,children:Object(_.jsx)(P.a,{active:a===e.id,direction:t,onClick:i(e.id),children:Object(_.jsx)(m.a,{variant:"body2",children:e.label})})}):Object(_.jsx)(P.a,{className:u()(r.tableSortLabel,r.noIcon),children:Object(_.jsx)(m.a,{variant:"body2",className:r.label,children:e.label})})},n)}))})})})),M=a(110),U=a(168),E=a.n(U),G=a(169),W=a.n(G),z=a(294),J=[{id:"name",numeric:!1,label:"Name"},{id:"type",numeric:!1,label:"Type"},{id:"state",numeric:!1,label:"State"},{id:"action",numeric:!1,label:"Action"}],Q="release",X=[Q,"context"],H=[{name:"equal",id:"eq"},{name:"not equal",id:"ne"},{name:"grater than",id:"gt"},{name:"grater equal",id:"ge"},{name:"lower than",id:"lt"},{name:"lower equal",id:"le"}];var V=Object(d.a)((function(e){var t;return{tableWrapper:{overflowX:"auto",width:"100%"},blackBackground:{backgroundColor:e.palette.primary.main},contentWrapper:(t={padding:e.spacing(3)},Object(o.a)(t,e.breakpoints.down("xs"),{padding:e.spacing(2)}),Object(o.a)(t,"width","100%"),t),dBlock:{display:"block !important"},dNone:{display:"none !important"},firstData:{paddingLeft:e.spacing(3)}}}),{withTheme:!0})((function(e){var t=e.onSend,a=e.project,n=e.classes,l=Object(s.useState)([]),u=Object(i.a)(l,2),d=u[0],b=u[1],p=Object(s.useState)(""),h=Object(i.a)(p,2),I=h[0],q=h[1],$=function(e,t,a){var n=d.map((function(n,c){return e===c?Object(f.a)(Object(f.a)({},n),{},Object(o.a)({},t,a)):n}));b(n)},P=function(){var e=Object(r.a)(c.a.mark((function e(){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(d);case 2:a=e.sent,q(a.success);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){b(JSON.parse(a.toggles))}),[a]);var U=function(e,t,a,n){return $(e,"conditions",t.map((function(e,t){return a===t?n:e})))};return Object(_.jsxs)(x.a,{children:[Object(_.jsx)(v.a,{expandIcon:Object(_.jsx)(R.a,{}),children:Object(_.jsx)(m.a,{children:a.name})}),Object(_.jsxs)(w.a,{className:n.dBlock,children:[Object(_.jsxs)(M.a,{children:[" ",a.url," "]}),Object(_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),P()},children:[d.length>0?Object(_.jsxs)(k.a,{"aria-labelledby":"tableTitle",children:[Object(_.jsx)(F,{rowCount:d.length,rows:J}),Object(_.jsx)(y.a,{children:d.map((function(e,t){return Object(_.jsxs)(C.a,{hover:!0,tabIndex:-1,children:[Object(_.jsx)(T.a,{component:"th",scope:"row",className:n.firstData,children:Object(_.jsx)(N.a,{required:!0,variant:"outlined",label:"Field",value:e.name,onChange:function(e){return $(t,"name",e.target.value)}})}),Object(_.jsx)(T.a,{component:"th",scope:"row",children:Object(_.jsx)(S.a,{variant:"outlined",children:Object(_.jsx)(L.a,{required:!0,labelId:"operation-drop-down",value:e.type,onChange:function(e){return $(t,"type",e.target.value)},children:X.map((function(e){return Object(_.jsx)(D.a,{value:e,children:e},"toggleType".concat(Object(z.a)()))}))})})}),Object(_.jsx)(T.a,{component:"th",scope:"row",children:e.type===Q?Object(_.jsx)(B.a,{color:"secondary",checked:e.value,onChange:function(e){return $(t,"value",e.target.checked)},inputProps:{"aria-label":e.value?"Deactivate Toggle":"Activate Toggle"}}):e.conditions.map((function(a,c){return Object(_.jsxs)("div",{children:[Object(_.jsx)(N.a,{variant:"outlined",required:!0,label:"Field",value:a.field,onChange:function(n){return U(t,e.conditions,c,Object(f.a)(Object(f.a)({},a),{},{field:n.target.value}))}}),Object(_.jsx)(S.a,{variant:"outlined",children:Object(_.jsx)(L.a,{required:!0,labelId:"operation-drop-down",value:a.operation,onChange:function(n){return U(t,e.conditions,c,Object(f.a)(Object(f.a)({},a),{},{operation:n.target.value}))},children:H.map((function(e){return Object(_.jsx)(D.a,{value:e.id,children:e.name},"OperationType".concat(Object(z.a)()))}))})}),Object(_.jsx)(N.a,{variant:"outlined",required:!0,label:"Value",value:a.value,onChange:function(n){return U(t,e.conditions,c,Object(f.a)(Object(f.a)({},a),{},{value:n.target.value}))}}),Object(_.jsx)(A.a,{className:n.iconButton,onClick:function(){$(t,"conditions",e.conditions.filter((function(e,t){return c!==t})))},"aria-label":"Delete",children:Object(_.jsx)(E.a,{className:n.blackIcon})})]},"toggle_".concat(t,"_condition_").concat(c))}))}),Object(_.jsxs)(T.a,{component:"th",scope:"row",children:["context"===e.type&&Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(A.a,{className:n.iconButton,onClick:function(){$(t,"conditions",[].concat(Object(j.a)(e.conditions),[{operation:"eq"}]))},"aria-label":"Delete",children:Object(_.jsx)(O.a,{className:n.blackIcon})})}),Object(_.jsx)(A.a,{className:n.iconButton,onClick:function(){return function(e){b(d.filter((function(t,a){return e!==a})))}(t)},"aria-label":"Delete",children:Object(_.jsx)(E.a,{className:n.blackIcon})})]})]},"toggle_".concat(t))}))})]}):Object(_.jsx)(M.a,{children:"No toggles defined yet."}),!0===I&&Object(_.jsx)(M.a,{children:"Project Updated Correctly"}),!1===I&&Object(_.jsx)(M.a,{children:"\ud83d\ude47\u200d\u2642\ufe0f  Oh no!!! we could not update your project. We might have a bug or our cloud provider is down. Please try again in a few minutes . \ud83d\ude47\u200d\u2642\ufe0f"}),Object(_.jsxs)(g.a,{variant:"contained",color:"primary","aria-label":"add",onClick:function(){b([].concat(Object(j.a)(d),[{name:void 0,type:"release",conditions:[],value:!1}]))},children:[Object(_.jsx)(O.a,{})," Add"]}),Object(_.jsxs)(g.a,{type:"submit",variant:"contained",color:"primary","aria-label":"add",children:[Object(_.jsx)(W.a,{})," Update"]})]})]})]})})),Y=a(258),K=a(273),Z=a(274);var ee=Object(d.a)((function(e){return{paper:{borderBottomLeftRadius:0,borderBottomRightRadius:0},toolbar:{justifyContent:"space-between"},scaleMinus:{transform:"scaleX(-1)"},"@keyframes spin":{from:{transform:"rotate(359deg)"},to:{transform:"rotate(0deg)"}},spin:{animation:"$spin 2s infinite linear"},listItemSecondaryAction:{paddingRight:e.spacing(1)}}}),{withTheme:!0})((function(e){var t=e.classes;return Object(_.jsx)(Y.a,{className:t.paper,children:Object(_.jsx)(K.a,{className:t.toolbar,children:Object(_.jsx)(p.a,{display:"flex",alignItems:"center",children:Object(_.jsx)(p.a,{mr:2,children:Object(_.jsx)(Z.a,{primary:"Plan",secondary:"Hobby",className:"mr-2"})})})})})}));var te=function(e){var t=e.user,a=e.selectDashboard,n=e.pushMessageToSnackbar,c=e.projectUpsert,r=e.toggleAccountActivation,o=Object(s.useState)([]),l=Object(i.a)(o,2),u=l[0],d=l[1];return Object(s.useEffect)(a,[a]),Object(s.useEffect)((function(){t&&d(t.projects)}),[t]),Object(_.jsxs)(s.Fragment,{children:[Object(_.jsx)(ee,{isAccountActivated:!1,toggleAccountActivation:r}),Object(_.jsxs)(p.a,{mt:4,children:[Object(_.jsx)(m.a,{variant:"subtitle1",gutterBottom:!0,children:"Your Projects"}),Object(_.jsxs)(g.a,{variant:"contained",color:"primary","aria-label":"add",disabled:u.length>0,onClick:function(){d([].concat(Object(j.a)(u),[{name:"Default".concat(u.length+1),toggles:"[]"}]))},children:[Object(_.jsx)(O.a,{})," Add"]})]}),u.map((function(e){return Object(_.jsx)(V,{pushMessageToSnackbar:n,project:e,onSend:function(a){return c(t.id,e.name,a)}})}))]})},ae=a(121);function ne(e){var t=e.user,a=e.classes,n=e.pushMessageToSnackbar,c=e.selectDashboard,r=e.isAccountActivated,i=e.accountActivation,o=e.projectUpsert;return Object(_.jsx)("div",{className:a.wrapper,children:Object(_.jsx)(b.c,{children:Object(_.jsx)(ae.a,{path:"",component:te,pushMessageToSnackbar:n,selectDashboard:c,isAccountActivated:r,accountActivation:i,projectUpsert:o,user:t})})})}var ce=Object(d.a)((function(e){var t;return{wrapper:(t={margin:e.spacing(1),width:"auto"},Object(o.a)(t,e.breakpoints.up("xs"),{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(4),marginBottom:e.spacing(4)}),Object(o.a)(t,e.breakpoints.up("sm"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"90%",marginLeft:"auto",marginRight:"auto"}),Object(o.a)(t,e.breakpoints.up("md"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"82.5%",marginLeft:"auto",marginRight:"auto"}),Object(o.a)(t,e.breakpoints.up("lg"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"70%",marginLeft:"auto",marginRight:"auto"}),t)}}),{withTheme:!0})(Object(s.memo)(ne)),re=a(30),ie=a(278),oe=a(298),se=a(270),le=a(304),ue=a(305),de=a(267),be=a(277),je=a(170),pe=a.n(je),me=a(171),ge=a.n(me),he=a(139),Oe=a.n(he),fe=a(122);var xe=Object(le.a)()(Object(d.a)((function(e){var t,a;return{appBar:Object(o.a)({boxShadow:e.shadows[6],backgroundColor:e.palette.common.white,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{width:"100%",marginLeft:0}),appBarToolbar:(t={display:"flex",justifyContent:"space-between",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},Object(o.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(o.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(o.a)(t,e.breakpoints.up("lg"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),accountAvatar:Object(o.a)({backgroundColor:e.palette.secondary.main,height:24,width:24,marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("xs"),{marginLeft:e.spacing(1.5),marginRight:e.spacing(1.5)}),drawerPaper:(a={height:"100%vh",whiteSpace:"nowrap",border:0,width:e.spacing(7),overflowX:"hidden",marginTop:e.spacing(8)},Object(o.a)(a,e.breakpoints.up("sm"),{width:e.spacing(9)}),Object(o.a)(a,"backgroundColor",e.palette.common.black),a),smBordered:Object(o.a)({},e.breakpoints.down("xs"),{borderRadius:"50% !important"}),menuLink:{textDecoration:"none",color:e.palette.text.primary},iconListItem:{width:"auto",borderRadius:e.shape.borderRadius,paddingTop:11,paddingBottom:11,marginLeft:e.spacing(1),marginRight:e.spacing(1)},textPrimary:{color:e.palette.primary.main},mobileItemSelected:{backgroundColor:"".concat(e.palette.primary.main," !important")},brandText:{fontFamily:"'Baloo Bhaijaan', cursive",fontWeight:400},username:{paddingLeft:0,paddingRight:e.spacing(2)},justifyCenter:{justifyContent:"center"},permanentDrawerListItem:{justifyContent:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}}),{withTheme:!0})((function(e){var t=e.selectedTab,a=e.user,n=e.classes,c=e.width,r=Object(s.useRef)([]),o=Object(s.useState)(!1),l=Object(i.a)(o,2),d=l[0],b=l[1],j=Object(s.useCallback)((function(){b(!0)}),[b]),g=Object(s.useCallback)((function(){b(!1)}),[b]),h=[{link:"/c/dashboard",name:"Dashboard",onClick:g,icon:{desktop:Object(_.jsx)(pe.a,{className:"Dashboard"===t?n.textPrimary:"text-white",fontSize:"small"}),mobile:Object(_.jsx)(pe.a,{className:"text-white"})}}];return Object(_.jsxs)(s.Fragment,{children:[Object(_.jsx)(ie.a,{position:"sticky",className:n.appBar,children:Object(_.jsxs)(K.a,{className:n.appBarToolbar,children:[Object(_.jsxs)(p.a,{display:"flex",alignItems:"center",children:[Object(_.jsx)(oe.a,{smUp:!0,children:Object(_.jsx)(p.a,{mr:1,children:Object(_.jsx)(A.a,{"aria-label":"Open Navigation",onClick:j,color:"primary",children:Object(_.jsx)(Oe.a,{})})})}),Object(_.jsxs)(oe.a,{xsDown:!0,children:[Object(_.jsx)(m.a,{variant:"h4",className:n.brandText,display:"inline",color:"secondary",children:"T"}),Object(_.jsx)(m.a,{variant:"h4",className:n.brandText,display:"inline",color:"primary",children:"o"}),Object(_.jsx)(m.a,{variant:"h4",className:n.brandText,display:"inline",color:"secondary",children:"ggl"}),Object(_.jsx)(m.a,{variant:"h4",className:n.brandText,display:"inline",color:"primary",children:"ee"})]})]}),Object(_.jsx)(p.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",children:Object(_.jsx)(se.a,{disableGutters:!0,className:u()(n.iconListItem,n.smBordered),children:Object(le.c)("sm",c)&&Object(_.jsx)(Z.a,{className:n.username,primary:Object(_.jsx)(m.a,{color:"textPrimary",children:a.email})})})}),Object(_.jsx)(re.b,{to:"/",children:Object(_.jsx)(ge.a,{})})]})}),Object(_.jsx)(oe.a,{xsDown:!0,children:Object(_.jsx)(ue.a,{variant:"permanent",classes:{paper:n.drawerPaper},open:!1,children:Object(_.jsx)(de.a,{children:h.map((function(e,a){return Object(_.jsx)(re.b,{to:e.link,className:n.menuLink,onClick:e.onClick,ref:function(e){r.current[a]=e},children:Object(_.jsx)($.a,{title:e.name,placement:"right",children:Object(_.jsx)(se.a,{selected:t===e.name,button:!0,divider:a!==h.length-1,className:n.permanentDrawerListItem,onClick:function(){r.current[a].click()},"aria-label":"Logout"===e.name?"Logout":"Go to ".concat(e.name),children:Object(_.jsx)(be.a,{className:n.justifyCenter,children:e.icon.desktop})})},e.name)},a)}))})})}),Object(_.jsx)(fe.a,{menuItems:h.map((function(e){return{link:e.link,name:e.name,icon:e.icon.mobile,onClick:e.onClick}})),anchor:"left",open:d,selectedItem:t,onClose:g})]})}))),ve=a(299);var we=Object(d.a)((function(e){return{root:{backgroundColor:e.palette.primary.main,paddingTop:0,paddingBottom:0}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.getPushMessageFromChild,n=Object(s.useState)(!1),c=Object(i.a)(n,2),r=c[0],o=c[1],l=Object(s.useState)({}),u=Object(i.a)(l,2),d=u[0],b=u[1],j=Object(s.useRef)([]),p=Object(s.useCallback)((function(){j.current.length>0&&(b(j.current.shift()),o(!0))}),[b,o,j]),m=Object(s.useCallback)((function(e,t){"clickaway"!==t&&o(!1)}),[o]),g=Object(s.useCallback)((function(e){j.current.push({message:e,key:(new Date).getTime()}),r?o(!1):p()}),[j,r,o,p]);return Object(s.useEffect)((function(){a(g)}),[a,g]),Object(_.jsx)(ve.a,{disableWindowBlurListener:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:m,onExited:p,ContentProps:{classes:{root:t.root}},message:Object(_.jsx)("span",{children:d.message?d.message.text:null})},d.key)})),ke=a(115),ye=[{src:"".concat("","/images/logged_in/image1.jpg"),name:"Markus"},{src:"".concat("","/images/logged_in/image2.jpg"),name:"David"},{src:"".concat("","/images/logged_in/image3.jpg"),name:"Arold"},{src:"".concat("","/images/logged_in/image4.jpg"),name:"Joanic"},{src:"".concat("","/images/logged_in/image5.jpg"),name:"Sophia"},{src:"".concat("","/images/logged_in/image6.jpg"),name:"Aaron"},{src:"".concat("","/images/logged_in/image7.jpg"),name:"Steven"},{src:"".concat("","/images/logged_in/image8.jpg"),name:"Felix"},{src:"".concat("","/images/logged_in/image9.jpg"),name:"Vivien"},{src:"".concat("","/images/logged_in/image10.jpg"),name:"Leonie"}],Ce=a(124),Te=a.n(Ce),Ne={start:0,end:136,source:{body:"mutation($name: String!, $owner: String!, $toggles: [Any]!){ upsertProject(name: $name, owner: $owner, toggles: $toggles) { success } }\n",name:"GraphQL request",locationOffset:{line:1,column:1}}},Se={headers:{Authorization:"Basic ".concat(btoa("".concat("admin",":").concat("supersecret")))}},Le=function(){var e=Object(r.a)(c.a.mark((function e(t,a,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Te.a.post("".concat("https://togglee.herokuapp.com","/graphql"),{query:Ne.source.body,variables:{owner:t,name:a,toggles:n}},Se);case 2:return e.abrupt("return",e.sent.data.data.upsertProject);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),De=a(116);function Be(e){var t=e.classes,a=e.location,n=Object(s.useState)(null),o=Object(i.a)(n,2),l=o[0],d=o[1],b=Object(s.useState)(!1),j=Object(i.a)(b,2),p=j[0],m=j[1],g=Object(s.useState)([]),h=Object(i.a)(g,2),O=h[0],f=h[1],x=Object(s.useState)(null),v=Object(i.a)(x,2),w=v[0],k=v[1],y=Object(s.useState)(null),C=Object(i.a)(y,2),T=C[0],N=C[1],S=Object(s.useCallback)((function(){!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(ye);for(var e=[],t=ye.length,a=Math.round((new Date).getTime()/1e3-86400*t),n=0;n<t;n+=1){var c={id:n,src:ye[n].src,date:a,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed."};a+=86400,e.push(c)}e.reverse(),f(e)}),[f]),L=Object(s.useCallback)(Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=k,e.next=3,Object(De.b)(a.state.userId);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[k,a]),D=Object(s.useCallback)((function(){Object(ke.a)(),document.title="Toggle - Dashboard",d("Dashboard"),p||m(!0)}),[d,p,m]),B=Object(s.useCallback)((function(e){N((function(){return e}))}),[N]);return Object(s.useEffect)((function(){L(),S()}),[S,L]),w&&Object(_.jsxs)(s.Fragment,{children:[Object(_.jsx)(xe,{selectedTab:l,messages:O,user:w}),Object(_.jsx)(we,{getPushMessageFromChild:B}),Object(_.jsx)("main",{className:u()(t.main),children:Object(_.jsx)(ce,{pushMessageToSnackbar:T,selectDashboard:D,isAccountActivated:function(){return console.error("Not Implemented")},accountActivation:function(){return console.error("Not Implemented")},projectUpsert:Le,user:w})})]})}t.default=Object(d.a)((function(e){return{main:Object(o.a)({marginLeft:e.spacing(9),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{marginLeft:0})}}),{withTheme:!0})(Object(s.memo)(Be))}}]);
//# sourceMappingURL=6.f80cceac.chunk.js.map