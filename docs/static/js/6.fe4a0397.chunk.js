(this["webpackJsonpreact-saas-template"]=this["webpackJsonpreact-saas-template"]||[]).push([[6],{110:function(e,t,a){"use strict";var n=1/0;function c(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>0&&n>e?(n=e,window.requestAnimationFrame(c),window.scrollTo(0,e-e/8)):n=1/0}t.a=function(){setTimeout((function(){c()}),10)}},116:function(e,t,a){"use strict";var n=a(90),c=a(94),i=a(1),s=a.n(i),r=a(2),o=a(5);t.a=function(e){var t=e.component,a=Object(c.a)(e,["component"]);return Object(o.jsx)(r.a,Object(n.a)(Object(n.a)({},a),{},{render:function(e){return function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var c=Object.assign.apply(Object,[{}].concat(a));return s.a.createElement(e,c)}(t,e,a)}}))}},117:function(e,t,a){"use strict";var n=a(1),c=a(30),i=a(270),s=a(273),r=a(246),o=a(230),l=a(247),d=a(225),b=a(229),j=a(231),u=a(227),p=a(24),m=a(118),h=a.n(m),O=a(5);t.a=Object(i.a)()(Object(p.a)((function(e){return{closeIcon:{marginRight:e.spacing(.5)},headSection:{width:200},blackList:{backgroundColor:e.palette.common.black,height:"100%"},noDecoration:{textDecoration:"none !important"}}}),{withTheme:!0})((function(e){var t=e.width,a=e.open,p=e.onClose,m=e.anchor,g=e.classes,x=e.menuItems,f=e.selectedItem,v=e.theme;return Object(n.useEffect)((function(){window.onresize=function(){Object(i.c)("sm",t)&&a&&p()}}),[t,a,p]),Object(O.jsxs)(s.a,{variant:"temporary",open:a,onClose:p,anchor:m,children:[Object(O.jsx)(r.a,{className:g.headSection,children:Object(O.jsx)(o.a,{style:{paddingTop:v.spacing(0),paddingBottom:v.spacing(0),height:"100%",justifyContent:"left"===m?"flex-start":"flex-end"},disableGutters:!0,children:Object(O.jsx)(l.a,{className:g.closeIcon,children:Object(O.jsx)(d.a,{onClick:p,"aria-label":"Close Navigation",children:Object(O.jsx)(h.a,{color:"primary"})})})})}),Object(O.jsx)(b.a,{className:g.blackList,children:x.map((function(e){return e.link?Object(O.jsx)(c.b,{to:e.link,className:g.noDecoration,onClick:p,children:Object(O.jsxs)(o.a,{button:!0,selected:f===e.name,disableRipple:!0,disableTouchRipple:!0,children:[Object(O.jsx)(l.a,{children:e.icon}),Object(O.jsx)(j.a,{primary:Object(O.jsx)(u.a,{variant:"subtitle1",className:"text-white",children:e.name})})]})},e.name):Object(O.jsxs)(o.a,{button:!0,onClick:e.onClick,children:[Object(O.jsx)(l.a,{children:e.icon}),Object(O.jsx)(j.a,{primary:Object(O.jsx)(u.a,{variant:"subtitle1",className:"text-white",children:e.name})})]},e.name)}))})]})})))},259:function(e,t,a){"use strict";a.r(t);var n=a(86),c=a(3),i=a(1),s=a(88),r=a.n(s),o=a(24),l=a(2),d=a(258),b=a(264),j=a(224),u=a(227),p=a(228),m=a(229),h=a(230),O=a(231),g=a(232),x=a(233),f=a(260),v=a(269),k=a(239),y=a(240),w=a(128),C=a.n(w),N=a(270),S=a(5);var T=Object(o.a)((function(e){return{wrapper:{border:"".concat(e.border.borderWidth,"px solid ").concat(e.border.borderColor)},greyed:{border:"".concat(e.border.borderWidth,"px solid rgba(0, 0, 0, 0.23)")}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.theme,n=e.disableVerticalPadding,c=e.disableBorderRadius,i=e.children,s=e.variant;return Object(S.jsx)("div",{className:"greyed"===s?t.greyed:t.wrapper,style:{paddingLeft:n?0:a.spacing(2),paddingRight:n?0:a.spacing(2),borderRadius:c?0:a.shape.borderRadius},children:i})})),I=a(96),L=["None","Slow","Normal","Fast"];var D=Object(N.a)()(Object(o.a)((function(e){return{numberInput:{width:110},numberInputInput:{padding:"9px 34px 9px 14.5px"},dBlock:{display:"block"},listItemLeftPadding:{paddingRight:e.spacing(3)},accordionDetails:{paddintTop:e.spacing(0),justifyContent:"flex-end"}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.pushMessageToSnackbar,c=Object(i.useState)(!1),s=Object(n.a)(c,2),r=s[0],o=s[1],l=Object(i.useState)(!1),w=Object(n.a)(l,2),N=w[0],D=w[1],R=Object(i.useState)("None"),B=Object(n.a)(R,2),P=B[0],M=B[1],A=Object(i.useState)("None"),F=Object(n.a)(A,2),E=F[0],W=F[1],_=Object(i.useState)("None"),Y=Object(n.a)(_,2),z=Y[0],G=Y[1],H=Object(i.useState)("None"),V=Object(n.a)(H,2),J=V[0],U=V[1],q=Object(i.useState)("2 Days"),X=Object(n.a)(q,2),K=X[0],Q=X[1],Z=Object(i.useState)(7500),$=Object(n.a)(Z,2),ee=$[0],te=$[1],ae=Object(i.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;if("option6"!==a||!(n>7500||n<1e3))switch(a){case"option1":M(n);break;case"option2":W(n);break;case"option3":G(n);break;case"option4":U(n);break;case"option5":Q(n);break;case"option6":te(n);break;default:throw new Error("No branch selected in switch statement.")}}),[M,W,G,U,Q,te]),ne=Object(i.useCallback)((function(){o(!1),D(!1),M("None"),W("None"),G("None"),U("None"),Q("2 Days"),te(7500)}),[o,D,M,W,G,U,Q,te]),ce=Object(i.useCallback)((function(){D(!0),setTimeout((function(){a({text:"Your settings have been reset to default"}),ne()}),1500)}),[a,ne]),ie=Object(i.useCallback)((function(){o(!0),setTimeout((function(){a({text:"Your settings have been saved"}),o(!1)}),1500)}),[o,a]),se=[{state:P,label:"Option 1",stateName:"option1"},{state:E,label:"Option 2",stateName:"option2"},{state:z,label:"Option 3",stateName:"option3"},{state:J,label:"Option 4",stateName:"option4"}];return Object(S.jsxs)(b.a,{children:[Object(S.jsx)(j.a,{expandIcon:Object(S.jsx)(C.a,{}),children:Object(S.jsx)(u.a,{children:"Settings 1"})}),Object(S.jsx)(p.a,{className:t.dBlock,children:Object(S.jsx)(m.a,{disablePadding:!0,children:Object(S.jsxs)(T,{disableVerticalPadding:!0,disableBorderRadius:!0,children:[se.map((function(e,a){return Object(S.jsxs)(h.a,{className:"listItemLeftPadding",disableGutters:!0,divider:!0,children:[Object(S.jsx)(O.a,{children:Object(S.jsx)(u.a,{variant:"body2",children:e.label})}),Object(S.jsx)(g.a,{variant:"outlined",children:Object(S.jsx)(x.a,{className:t.ListItemSecondaryAction,children:Object(S.jsx)(f.a,{value:e.state,onChange:ae,input:Object(S.jsx)(v.a,{name:e.stateName,labelWidth:0,className:t.numberInput,classes:{input:t.numberInputInput}}),MenuProps:{disableScrollLock:!0},children:L.map((function(e){return Object(S.jsx)(k.a,{value:e,children:e},e)}))})})})]},a)})),Object(S.jsxs)(h.a,{className:"listItemLeftPadding",disableGutters:!0,divider:!0,children:[Object(S.jsx)(O.a,{children:Object(S.jsx)(u.a,{variant:"body2",children:"Option 5"})}),Object(S.jsx)(g.a,{variant:"outlined",children:Object(S.jsx)(x.a,{className:t.ListItemSecondaryAction,children:Object(S.jsx)(f.a,{value:K,onChange:ae,input:Object(S.jsx)(v.a,{name:"option5",labelWidth:0,className:t.numberInput,classes:{input:t.numberInputInput}}),MenuProps:{disableScrollLock:!0},children:["Always","6 Hours","12 Hours","1 Day","2 Days","3 Days","1 Week"].map((function(e){return Object(S.jsx)(k.a,{value:e,children:e},e)}))})})})]}),Object(S.jsxs)(h.a,{className:"listItemLeftPadding",disableGutters:!0,children:[Object(S.jsx)(O.a,{children:Object(S.jsx)(u.a,{variant:"body2",children:"Option 6"})}),Object(S.jsx)(g.a,{variant:"outlined",children:Object(S.jsx)(x.a,{className:t.ListItemSecondaryAction,children:Object(S.jsx)(v.a,{labelWidth:0,name:"option6",value:ee,type:"number",onChange:ae,className:t.numberInput,classes:{input:t.numberInputInput},inputProps:{step:20}})})})]})]})})}),Object(S.jsxs)(p.a,{className:t.accordionDetails,children:[Object(S.jsx)(d.a,{mr:1,children:Object(S.jsxs)(y.a,{onClick:ce,disabled:r||N,children:["Default ",N&&Object(S.jsx)(I.a,{})]})}),Object(S.jsxs)(y.a,{variant:"contained",color:"secondary",disabled:r||N,onClick:ie,children:["Save ",r&&Object(S.jsx)(I.a,{})]})]})]})}))),R=a(263),B=a(90),P=a(271),M=a(151),A=a.n(M);var F=Object(o.a)((function(e){return{tooltipTypo:Object(B.a)(Object(B.a)({whiteSpace:"pre-line !important"},e.typography.caption),{},{color:e.palette.common.white}),tooltip:{verticalAlign:"middle",fontSize:"1.25rem"},helpIcon:{marginLeft:e.spacing(1),"@media (max-width: 350px)":{marginLeft:e.spacing(.5)},transition:e.transitions.create(["color"],{duration:e.transitions.duration.short,easing:e.transitions.easing.easeInOut})}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.title,c=Object(i.useState)(!1),s=Object(n.a)(c,2),r=s[0],o=s[1],l=Object(i.useCallback)((function(){o(!0)}),[]),d=Object(i.useCallback)((function(){o(!1)}),[]);return Object(S.jsx)(P.a,{title:Object(S.jsx)(u.a,{variant:"body2",className:t.tooltipTypo,children:a}),className:t.tooltip,enterTouchDelay:300,children:Object(S.jsx)(A.a,{onMouseOver:l,onFocus:l,onBlur:d,onMouseLeave:d,color:r?"primary":"inherit",className:t.helpIcon,style:{cursor:r?"pointer":"auto"}})})}));var E=Object(o.a)((function(e){var t,a;return{numberInput:(t={width:120},Object(c.a)(t,e.breakpoints.down("sm"),{width:80}),Object(c.a)(t,"@media (max-width: 350px)",{width:65}),t),numberInputInput:{padding:"9px 14.5px","@media (max-width: 380px)":{padding:"9px 8.5px"},"@media (max-width: 350px)":{padding:"9px 6.5px"}},listItem:(a={},Object(c.a)(a,e.breakpoints.up("sm"),{paddingLeft:e.spacing(4)}),Object(c.a)(a,"paddingLeft",100),a),AccordionDetails:{paddingTop:e.spacing(0),justifyContent:"flex-end"},dBlock:{display:"block"}}}),{withTheme:!0})((function(e){var t=e.pushMessageToSnackbar,a=e.classes,c=Object(i.useState)(!1),s=Object(n.a)(c,2),r=s[0],o=s[1],l=Object(i.useState)(!1),w=Object(n.a)(l,2),N=w[0],L=w[1],D=Object(i.useState)(!1),B=Object(n.a)(D,2),P=B[0],M=B[1],A=Object(i.useState)(!1),E=Object(n.a)(A,2),W=E[0],_=E[1],Y=Object(i.useState)(!1),z=Object(n.a)(Y,2),G=z[0],H=z[1],V=Object(i.useState)(!1),J=Object(n.a)(V,2),U=J[0],q=J[1],X=Object(i.useState)(!1),K=Object(n.a)(X,2),Q=K[0],Z=K[1],$=Object(i.useState)("Both"),ee=Object(n.a)($,2),te=ee[0],ae=ee[1],ne=Object(i.useState)("2 weeks"),ce=Object(n.a)(ne,2),ie=ce[0],se=ce[1],re=Object(i.useCallback)((function(){o(!1),L(!1),M(!1),_(!1),H(!1),q(!1),Z(!1),ae("Both"),se("2 weeks")}),[M,_,H,q,Z,ae,se]),oe=Object(i.useCallback)((function(){L(!0),setTimeout((function(){t({text:"Your settings have been saved"}),L(!1)}),1500)}),[t,L]),le=Object(i.useCallback)((function(){o(!0),setTimeout((function(){t({text:"Your settings have been reset to default"}),re()}),1500)}),[t,re,o]),de=Object(i.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"option6":ae(n);break;case"option7":se(n);break;default:throw new Error("No branch selected in switch statement")}}),[ae,se]),be=function(e){return function(t){switch(e){case"option1":M(t.target.checked);break;case"option2":_(t.target.checked);break;case"option3":H(t.target.checked);break;case"option4":q(t.target.checked);break;case"option5":Z(t.target.checked);break;default:throw new Error("No branch selected in switch statement.")}}},je=[{title:"Option 1",secondaryAction:Object(S.jsx)(R.a,{value:"option1",color:"primary",checked:P,onChange:be("option1")})},{title:"Option 2",secondaryAction:Object(S.jsx)(R.a,{value:"option2",color:"primary",checked:W,onChange:be("option2")})},{title:"Option 3",secondaryAction:Object(S.jsx)(R.a,{value:"option3",color:"primary",checked:G,onChange:be("option3")}),helpText:"You can add some further explanation here."},{title:"Option 4",secondaryAction:Object(S.jsx)(R.a,{value:"option4",color:"primary",checked:U,onChange:be("option4")})},{title:"Option 5",secondaryAction:Object(S.jsx)(R.a,{value:"option5",color:"primary",checked:Q,onChange:be("option5")})},{title:"Option 6",secondaryAction:Object(S.jsxs)(f.a,{value:te,input:Object(S.jsx)(v.a,{onChange:de,labelWidth:0,className:a.numberInput,classes:{input:a.numberInputInput},name:"option6"}),children:[Object(S.jsx)(k.a,{value:"Both",children:"Both"}),Object(S.jsx)(k.a,{value:"Male+",children:"Male+"}),Object(S.jsx)(k.a,{value:"Female+",children:"Female+"}),Object(S.jsx)(k.a,{value:"Only male",children:"Only male"}),Object(S.jsx)(k.a,{value:"Only female",children:"Only female"})]}),helpText:"You can add some further explanation here."},{title:"Option 7",secondaryAction:Object(S.jsxs)(f.a,{value:ie,input:Object(S.jsx)(v.a,{onChange:de,labelWidth:0,className:a.numberInput,classes:{input:a.numberInputInput},name:"option7"}),children:[Object(S.jsx)(k.a,{value:"None",children:"None"}),Object(S.jsx)(k.a,{value:"6 hours",children:"6 hours"}),Object(S.jsx)(k.a,{value:"12 hours",children:"12 hours"}),Object(S.jsx)(k.a,{value:"1 day",children:"1 day"}),Object(S.jsx)(k.a,{value:"3 days",children:"3 days"}),Object(S.jsx)(k.a,{value:"1 week",children:"1 week"}),Object(S.jsx)(k.a,{value:"2 weeks",children:"2 weeks"}),Object(S.jsx)(k.a,{value:"1 month",children:"1 month"}),Object(S.jsx)(k.a,{value:"3 months",children:"3 months"}),Object(S.jsx)(k.a,{value:"6 months",children:"6 months"})]}),helpText:"You can add some further explanation here."}];return Object(S.jsxs)(b.a,{children:[Object(S.jsx)(j.a,{expandIcon:Object(S.jsx)(C.a,{}),children:Object(S.jsx)(u.a,{children:"Settings 2"})}),Object(S.jsx)(p.a,{className:a.dBlock,children:Object(S.jsx)(m.a,{disablePadding:!0,children:Object(S.jsx)(T,{disableVerticalPadding:!0,disableBorderRadius:!0,children:je.map((function(e,t){return Object(S.jsxs)(h.a,{divider:t!==je.length-1,className:"listItemLeftPadding",children:[Object(S.jsx)(O.a,{children:Object(S.jsxs)(u.a,{variant:"body2",children:[e.title,e.helpText&&Object(S.jsx)(F,{title:e.helpText})]})}),Object(S.jsx)(x.a,{children:Object(S.jsx)(g.a,{variant:"outlined",children:e.secondaryAction})})]},t)}))})})}),Object(S.jsxs)(p.a,{className:a.AccordionDetails,children:[Object(S.jsx)(d.a,{mr:1,children:Object(S.jsxs)(y.a,{onClick:le,disabled:N||r,children:["Default ",r&&Object(S.jsx)(I.a,{})]})}),Object(S.jsxs)(y.a,{variant:"contained",color:"secondary",onClick:oe,disabled:N||r,children:["Save ",N&&Object(S.jsx)(I.a,{})]})]})]})}));var W=function(e){var t=e.pushMessageToSnackbar;return Object(S.jsxs)(i.Fragment,{children:[Object(S.jsx)(D,{pushMessageToSnackbar:t}),Object(S.jsx)(E,{pushMessageToSnackbar:t})]})};var _=function(e){var t=e.selectDashboard,a=e.pushMessageToSnackbar;return Object(i.useEffect)(t,[t]),Object(S.jsxs)(i.Fragment,{children:[Object(S.jsx)(d.a,{mt:4}),Object(S.jsx)(W,{pushMessageToSnackbar:a})]})},Y=a(116);function z(e){var t=e.classes,a=e.pushMessageToSnackbar,n=e.selectDashboard;return Object(S.jsx)("div",{className:t.wrapper,children:Object(S.jsx)(l.c,{children:Object(S.jsx)(Y.a,{path:"",component:_,pushMessageToSnackbar:a,selectDashboard:n})})})}var G=Object(o.a)((function(e){var t;return{wrapper:(t={margin:e.spacing(1),width:"auto"},Object(c.a)(t,e.breakpoints.up("xs"),{width:"95%",marginLeft:"auto",marginRight:"auto",marginTop:e.spacing(4),marginBottom:e.spacing(4)}),Object(c.a)(t,e.breakpoints.up("sm"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"90%",marginLeft:"auto",marginRight:"auto"}),Object(c.a)(t,e.breakpoints.up("md"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"82.5%",marginLeft:"auto",marginRight:"auto"}),Object(c.a)(t,e.breakpoints.up("lg"),{marginTop:e.spacing(6),marginBottom:e.spacing(6),width:"70%",marginLeft:"auto",marginRight:"auto"}),t)}}),{withTheme:!0})(Object(i.memo)(z)),H=a(30),V=a(242),J=a(246),U=a(265),q=a(225),X=a(272),K=a(273),Q=a(247),Z=a(172),$=a.n(Z),ee=a(173),te=a.n(ee),ae=a(134),ne=a.n(ae),ce=a(236),ie=a(243),se=a(133),re=a.n(se),oe=a(241),le=a(152),de=a.n(le),be=a(153),je=a.n(be);var ue=function(e){var t=e.message,a=e.divider,c=Object(i.useState)(!1),s=Object(n.a)(c,2),r=s[0],o=s[1],l=Object(i.useCallback)((function(){o(!0)}),[o]);return Object(S.jsxs)(h.a,{divider:a,children:[Object(S.jsx)(oe.a,{children:r?Object(S.jsx)(de.a,{color:"secondary"}):Object(S.jsx)(X.a,{src:r?null:t.src,onError:l})}),Object(S.jsx)(O.a,{primary:t.text,secondary:"".concat(je()(1e3*t.date,new Date)," ago")})]})};var pe=Object(o.a)((function(e){return{tabContainer:{overflowY:"auto",maxHeight:350},popoverPaper:Object(c.a)({width:"100%",maxWidth:350,marginLeft:e.spacing(2),marginRight:e.spacing(1)},e.breakpoints.down("sm"),{maxWidth:270}),divider:{marginTop:-2},noShadow:{boxShadow:"none !important"}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.messages,c=Object(i.useRef)(),s=Object(i.useState)(!1),r=Object(n.a)(s,2),o=r[0],l=r[1],b=Object(i.useCallback)((function(){l(!o)}),[o,l]),j=Object(i.useCallback)((function(){l(!1)}),[l]),p=o?"scroll-playground":null;return Object(S.jsxs)(i.Fragment,{children:[Object(S.jsx)(q.a,{onClick:b,buttonRef:c,"aria-label":"Open Messages","aria-describedby":p,color:"primary",children:Object(S.jsx)(re.a,{})}),Object(S.jsxs)(ce.a,{disableScrollLock:!0,id:p,open:o,anchorEl:c.current,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"right"},classes:{paper:t.popoverPaper},onClose:j,children:[Object(S.jsxs)(V.a,{position:"static",color:"inherit",className:t.noShadow,children:[Object(S.jsx)(d.a,{pt:1,pl:2,pb:1,pr:1,children:Object(S.jsx)(u.a,{variant:"subtitle1",children:"Messages"})}),Object(S.jsx)(ie.a,{className:t.divider})]}),Object(S.jsx)(m.a,{dense:!0,className:t.tabContainer,children:0===a.length?Object(S.jsx)(h.a,{children:Object(S.jsx)(O.a,{children:"You haven't received any messages yet."})}):a.map((function(e,t){return Object(S.jsx)(ue,{message:e,divider:t!==a.length-1},t)}))})]})]})})),me=a(117);var he=Object(N.a)()(Object(o.a)((function(e){var t,a;return{appBar:Object(c.a)({boxShadow:e.shadows[6],backgroundColor:e.palette.common.white,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{width:"100%",marginLeft:0}),appBarToolbar:(t={display:"flex",justifyContent:"space-between",paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},Object(c.a)(t,e.breakpoints.up("sm"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(c.a)(t,e.breakpoints.up("md"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),Object(c.a)(t,e.breakpoints.up("lg"),{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}),t),accountAvatar:Object(c.a)({backgroundColor:e.palette.secondary.main,height:24,width:24,marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.down("xs"),{marginLeft:e.spacing(1.5),marginRight:e.spacing(1.5)}),drawerPaper:(a={height:"100%vh",whiteSpace:"nowrap",border:0,width:e.spacing(7),overflowX:"hidden",marginTop:e.spacing(8)},Object(c.a)(a,e.breakpoints.up("sm"),{width:e.spacing(9)}),Object(c.a)(a,"backgroundColor",e.palette.common.black),a),smBordered:Object(c.a)({},e.breakpoints.down("xs"),{borderRadius:"50% !important"}),menuLink:{textDecoration:"none",color:e.palette.text.primary},iconListItem:{width:"auto",borderRadius:e.shape.borderRadius,paddingTop:11,paddingBottom:11,marginLeft:e.spacing(1),marginRight:e.spacing(1)},textPrimary:{color:e.palette.primary.main},mobileItemSelected:{backgroundColor:"".concat(e.palette.primary.main," !important")},brandText:{fontFamily:"'Baloo Bhaijaan', cursive",fontWeight:400},username:{paddingLeft:0,paddingRight:e.spacing(2)},justifyCenter:{justifyContent:"center"},permanentDrawerListItem:{justifyContent:"center",paddingTop:e.spacing(2),paddingBottom:e.spacing(2)}}}),{withTheme:!0})((function(e){var t=e.selectedTab,a=e.messages,c=e.classes,s=e.width,o=Object(i.useRef)([]),l=Object(i.useState)(!1),b=Object(n.a)(l,2),j=b[0],p=b[1],g=Object(i.useCallback)((function(){p(!0)}),[p]),x=Object(i.useCallback)((function(){p(!1)}),[p]),f=[{link:"/c/dashboard",name:"Dashboard",onClick:x,icon:{desktop:Object(S.jsx)($.a,{className:"Dashboard"===t?c.textPrimary:"text-white",fontSize:"small"}),mobile:Object(S.jsx)($.a,{className:"text-white"})}}];return Object(S.jsxs)(i.Fragment,{children:[Object(S.jsx)(V.a,{position:"sticky",className:c.appBar,children:Object(S.jsxs)(J.a,{className:c.appBarToolbar,children:[Object(S.jsxs)(d.a,{display:"flex",alignItems:"center",children:[Object(S.jsx)(U.a,{smUp:!0,children:Object(S.jsx)(d.a,{mr:1,children:Object(S.jsx)(q.a,{"aria-label":"Open Navigation",onClick:g,color:"primary",children:Object(S.jsx)(ne.a,{})})})}),Object(S.jsxs)(U.a,{xsDown:!0,children:[Object(S.jsx)(u.a,{variant:"h4",className:c.brandText,display:"inline",color:"secondary",children:"T"}),Object(S.jsx)(u.a,{variant:"h4",className:c.brandText,display:"inline",color:"primary",children:"o"}),Object(S.jsx)(u.a,{variant:"h4",className:c.brandText,display:"inline",color:"secondary",children:"ggl"}),Object(S.jsx)(u.a,{variant:"h4",className:c.brandText,display:"inline",color:"primary",children:"ee"})]})]}),Object(S.jsxs)(d.a,{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%",children:[Object(S.jsx)(pe,{messages:a}),Object(S.jsxs)(h.a,{disableGutters:!0,className:r()(c.iconListItem,c.smBordered),children:[Object(S.jsx)(X.a,{alt:"profile picture",src:"".concat("","/images/logged_in/profilePicture.jpg"),className:r()(c.accountAvatar)}),Object(N.c)("sm",s)&&Object(S.jsx)(O.a,{className:c.username,primary:Object(S.jsx)(u.a,{color:"textPrimary",children:"Username"})})]})]}),Object(S.jsx)(H.b,{to:"/",children:Object(S.jsx)(te.a,{})})]})}),Object(S.jsx)(U.a,{xsDown:!0,children:Object(S.jsx)(K.a,{variant:"permanent",classes:{paper:c.drawerPaper},open:!1,children:Object(S.jsx)(m.a,{children:f.map((function(e,a){return Object(S.jsx)(H.b,{to:e.link,className:c.menuLink,onClick:e.onClick,ref:function(e){o.current[a]=e},children:Object(S.jsx)(P.a,{title:e.name,placement:"right",children:Object(S.jsx)(h.a,{selected:t===e.name,button:!0,divider:a!==f.length-1,className:c.permanentDrawerListItem,onClick:function(){o.current[a].click()},"aria-label":"Logout"===e.name?"Logout":"Go to ".concat(e.name),children:Object(S.jsx)(Q.a,{className:c.justifyCenter,children:e.icon.desktop})})},e.name)},a)}))})})}),Object(S.jsx)(me.a,{menuItems:f.map((function(e){return{link:e.link,name:e.name,icon:e.icon.mobile,onClick:e.onClick}})),anchor:"left",open:j,selectedItem:t,onClose:x})]})}))),Oe=a(266);var ge=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.primary.main,paddingTop:0,paddingBottom:0}}}),{withTheme:!0})((function(e){var t=e.classes,a=e.getPushMessageFromChild,c=Object(i.useState)(!1),s=Object(n.a)(c,2),r=s[0],o=s[1],l=Object(i.useState)({}),d=Object(n.a)(l,2),b=d[0],j=d[1],u=Object(i.useRef)([]),p=Object(i.useCallback)((function(){u.current.length>0&&(j(u.current.shift()),o(!0))}),[j,o,u]),m=Object(i.useCallback)((function(e,t){"clickaway"!==t&&o(!1)}),[o]),h=Object(i.useCallback)((function(e){u.current.push({message:e,key:(new Date).getTime()}),r?o(!1):p()}),[u,r,o,p]);return Object(i.useEffect)((function(){a(h)}),[a,h]),Object(S.jsx)(Oe.a,{disableWindowBlurListener:!0,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:m,onExited:p,ContentProps:{classes:{root:t.root}},message:Object(S.jsx)("span",{children:b.message?b.message.text:null})},b.key)})),xe=a(110),fe=[{src:"".concat("","/images/logged_in/image1.jpg"),name:"Markus"},{src:"".concat("","/images/logged_in/image2.jpg"),name:"David"},{src:"".concat("","/images/logged_in/image3.jpg"),name:"Arold"},{src:"".concat("","/images/logged_in/image4.jpg"),name:"Joanic"},{src:"".concat("","/images/logged_in/image5.jpg"),name:"Sophia"},{src:"".concat("","/images/logged_in/image6.jpg"),name:"Aaron"},{src:"".concat("","/images/logged_in/image7.jpg"),name:"Steven"},{src:"".concat("","/images/logged_in/image8.jpg"),name:"Felix"},{src:"".concat("","/images/logged_in/image9.jpg"),name:"Vivien"},{src:"".concat("","/images/logged_in/image10.jpg"),name:"Leonie"}];function ve(e){var t=e.classes,a=Object(i.useState)(null),c=Object(n.a)(a,2),s=c[0],o=c[1],l=Object(i.useState)(!1),d=Object(n.a)(l,2),b=d[0],j=d[1],u=Object(i.useState)([]),p=Object(n.a)(u,2),m=p[0],h=p[1],O=Object(i.useState)(null),g=Object(n.a)(O,2),x=g[0],f=g[1],v=Object(i.useCallback)((function(){!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(fe);for(var e=[],t=fe.length,a=Math.round((new Date).getTime()/1e3-86400*t),n=0;n<t;n+=1){var c={id:n,src:fe[n].src,date:a,text:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed."};a+=86400,e.push(c)}e.reverse(),h(e)}),[h]),k=Object(i.useCallback)((function(){Object(xe.a)(),document.title="Toggle - Dashboard",o("Dashboard"),b||j(!0)}),[o,b,j]),y=Object(i.useCallback)((function(e){f((function(){return e}))}),[f]);return Object(i.useEffect)((function(){v()}),[v]),Object(S.jsxs)(i.Fragment,{children:[Object(S.jsx)(he,{selectedTab:s,messages:m}),Object(S.jsx)(ge,{getPushMessageFromChild:y}),Object(S.jsx)("main",{className:r()(t.main),children:Object(S.jsx)(G,{pushMessageToSnackbar:x,selectDashboard:k})})]})}t.default=Object(o.a)((function(e){return{main:Object(c.a)({marginLeft:e.spacing(9),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},e.breakpoints.down("xs"),{marginLeft:0})}}),{withTheme:!0})(Object(i.memo)(ve))},96:function(e,t,a){"use strict";a(1);var n=a(258),c=a(222),i=a(24),s=a(5);t.a=Object(i.a)((function(e){return{circularProgress:{color:e.palette.secondary.main}}}),{withTheme:!0})((function(e){var t=e.size,a=e.classes;return Object(s.jsx)(n.a,{color:"secondary.main",pl:1.5,display:"flex",children:Object(s.jsx)(c.a,{size:t||24,thickness:t?t/5*24:5,className:a.circularProgress})})}))}}]);
//# sourceMappingURL=6.fe4a0397.chunk.js.map