(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Aags:function(e,a,t){e.exports={CustomerLogo:"listOfContent-module--CustomerLogo--3jl7e",Link:"listOfContent-module--Link--3dESm"}},"CDF/":function(e,a,t){"use strict";t.r(a),t.d(a,"projectsQuery",(function(){return m}));var r=t("q1tI"),n=t.n(r),o=t("Bl7J"),s=t("vrFN"),l=(t("MhGU"),t("7vrA")),c=t("2mvg"),i=t("snB6"),u=t.n(i);a.default=function(e){var a=e.data.airtable.data;return n.a.createElement(o.a,{pageInfo:{pageName:"management"},data:a},n.a.createElement(s.a,{title:"Manage",keywords:["gatsby","react","bootstrap"]}),n.a.createElement(l.a,{className:"text-center"},n.a.createElement(c.a,{src:a.projectPicture[0].url,className:u.a.projectImage})))};var m="2340772187"},MhGU:function(e,a,t){"use strict";var r=t("q1tI"),n=t.n(r),o=t("Wbzz"),s=(t("Bl7J"),t("vrFN"),t("wx14")),l=t("zLVn"),c=t("TSYQ"),i=t.n(c),u=(t("2W6z"),t("JCAc")),m=t("vUet"),d=t("rQNl"),v=t("VWqr"),p=t("ILyh"),f=n.a.forwardRef((function(e,a){var t=e.bsPrefix,o=e.active,c=e.disabled,u=e.className,d=e.variant,f=e.action,b=e.as,g=e.eventKey,j=e.onClick,N=Object(l.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(m.a)(t,"list-group-item");var L=Object(r.useCallback)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();j&&j(e)}),[c,j]);return n.a.createElement(v.a,Object(s.a)({ref:a},N,{eventKey:Object(p.b)(g,N.href),as:b||(f?N.href?"a":"button":"div"),onClick:L,className:i()(u,t,o&&"active",c&&"disabled",d&&t+"-"+d,f&&t+"-action")}))}));f.defaultProps={variant:null,active:!1,disabled:!1},f.displayName="ListGroupItem";var b=f,g=n.a.forwardRef((function(e,a){var t,r=Object(u.a)(e,{activeKey:"onSelect"}),o=r.className,c=r.bsPrefix,v=r.variant,p=r.horizontal,f=r.as,b=void 0===f?"div":f,g=Object(l.a)(r,["className","bsPrefix","variant","horizontal","as"]);return c=Object(m.a)(c,"list-group"),t=p?!0===p?"horizontal":"horizontal-"+p:null,n.a.createElement(d.a,Object(s.a)({ref:a},g,{as:b,className:i()(o,c,v&&c+"-"+v,t&&c+"-"+t)}))}));g.defaultProps={variant:null,horizontal:null},g.displayName="ListGroup",g.Item=b;var j=g,N=t("2mvg"),L=(t("YwZP"),t("Aags")),O=t.n(L);a.a=function(e){console.log("props: "+JSON.stringify(e));var a=e.projects.allAirtable.edges;console.log("ListOfContent props: "+JSON.stringify(a[0].node.data.customerLogo[0].url)),console.log("ListOfContent projects variable: "+a);var t=a.map((function(e){var a=e.node.data,t=a.customerLogo,r=a.projectUrlName,s=a.projectName,l=null!==t?t[0].url:"";return n.a.createElement(j.Item,{key:e.node.data.id},n.a.createElement(N.a,{src:l,className:O.a.CustomerLogo}),n.a.createElement(o.Link,{to:"/"+r+"/projectPage",className:O.a.Link},s))}));return n.a.createElement(j,null,t)}},snB6:function(e,a,t){e.exports={projectImage:"projectPage-module--projectImage--2l86H"}}}]);
//# sourceMappingURL=component---src-pages-project-page-js-8333c9d8ff160778502f.js.map