(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Aags:function(e,a,t){e.exports={CustomerLogo:"listOfContent-module--CustomerLogo--3jl7e",Link:"listOfContent-module--Link--3dESm"}},MhGU:function(e,a,t){"use strict";var o=t("q1tI"),r=t.n(o),n=t("Wbzz"),l=(t("Bl7J"),t("vrFN"),t("wx14")),s=t("zLVn"),c=t("TSYQ"),i=t.n(c),d=(t("2W6z"),t("JCAc")),m=t("vUet"),u=t("rQNl"),p=t("VWqr"),b=t("ILyh"),g=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,c=e.disabled,d=e.className,u=e.variant,g=e.action,f=e.as,v=e.eventKey,k=e.onClick,j=Object(s.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(m.a)(t,"list-group-item");var N=Object(o.useCallback)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();k&&k(e)}),[c,k]);return r.a.createElement(p.a,Object(l.a)({ref:a},j,{eventKey:Object(b.b)(v,j.href),as:f||(g?j.href?"a":"button":"div"),onClick:N,className:i()(d,t,n&&"active",c&&"disabled",u&&t+"-"+u,g&&t+"-action")}))}));g.defaultProps={variant:null,active:!1,disabled:!1},g.displayName="ListGroupItem";var f=g,v=r.a.forwardRef((function(e,a){var t,o=Object(d.a)(e,{activeKey:"onSelect"}),n=o.className,c=o.bsPrefix,p=o.variant,b=o.horizontal,g=o.as,f=void 0===g?"div":g,v=Object(s.a)(o,["className","bsPrefix","variant","horizontal","as"]);return c=Object(m.a)(c,"list-group"),t=b?!0===b?"horizontal":"horizontal-"+b:null,r.a.createElement(u.a,Object(l.a)({ref:a},v,{as:f,className:i()(n,c,p&&c+"-"+p,t&&c+"-"+t)}))}));v.defaultProps={variant:null,horizontal:null},v.displayName="ListGroup",v.Item=f;var k=v,j=t("2mvg"),N=(t("YwZP"),t("Aags")),h=t.n(N);a.a=function(e){console.log("props: "+JSON.stringify(e));var a=e.projects.allAirtable.edges;console.log("ListOfContent props: "+JSON.stringify(a[0].node.data.customerLogo[0].url)),console.log("ListOfContent projects variable: "+a);var t=a.map((function(e){var a=e.node.data,t=a.customerLogo,o=a.projectUrlName,l=a.projectName,s=a.ready_to_upload,c=null!==t?t[0].url:"";return"YES"===s?r.a.createElement(k.Item,{key:e.node.data.id},r.a.createElement(j.a,{src:c,className:h.a.CustomerLogo}),r.a.createElement(n.Link,{to:"/"+o+"/projectPage",className:h.a.Link},l)):null}));return r.a.createElement(k,null,t)}},WB0Q:function(e,a,t){"use strict";t.r(a);var o=t("vk7L"),r=t("q1tI"),n=t.n(r),l=t("7vrA"),s=t("Bl7J"),c=t("vrFN"),i=t("MhGU");t("bHiP");a.default=function(){var e=o.data;return n.a.createElement(s.a,{pageInfo:{pageName:"index"}},n.a.createElement(c.a,{title:"Home"}),n.a.createElement(l.a,{className:"text-left"},n.a.createElement(i.a,{projects:e})))}},vk7L:function(e){e.exports=JSON.parse('{"data":{"allAirtable":{"edges":[{"node":{"data":{"customerLogo":[{"url":"https://dl.airtable.com/.attachments/dcb7eaa0fc0b0467eb71b2c4a95385b0/96408640/r8_logo.svg"}],"projectUrlName":"R8-Henrik-Ibsens-gate","id":"2021-02-15T10:19:18.000Z-R8-Henrik-Ibsens-gate","projectName":"R8 Henrik Ibsens gate","ready_to_upload":"YES"}}},{"node":{"data":{"customerLogo":[{"url":"https://dl.airtable.com/.attachments/bcbc76f9a65a0816073638d29eb5c2ab/08ea1d05/r8_logo.svg"}],"projectUrlName":"R8-Inkognitogata","id":"2021-02-15T10:19:18.000Z-R8-Inkognitogata","projectName":"R8 Inkognitogata","ready_to_upload":"NO"}}},{"node":{"data":{"customerLogo":[{"url":"https://dl.airtable.com/.attachments/1d8b936cb57bf56da4203abe5af26d1b/803eba98/Ramboll_Logo_Grey_RGB_402x85px.png"}],"projectUrlName":"Test-project","id":"2021-02-17T11:31:51.000Z-Test-project","projectName":"Test project","ready_to_upload":"YES"}}},{"node":{"data":{"customerLogo":[{"url":"https://dl.airtable.com/.attachments/63cbad2cee912a36b871241a7a7ebdc8/e3b0c6d3/kommunevapen.png"}],"projectUrlName":"Vikstunet-Omsorgsbolig","id":"2021-02-15T10:19:18.000Z-Vikstunet-Omsorgsbolig","projectName":"Vikstunet Omsorgsbolig","ready_to_upload":"YES"}}},{"node":{"data":{"customerLogo":[{"url":"https://dl.airtable.com/.attachments/6f1a39a585764c432172ab5fec983907/021be8fb/logoskien.png"}],"projectUrlName":"Bysentrum-Skien","id":"2021-02-15T10:19:18.000Z-Bysentrum-Skien","projectName":"Bysentrum Skien","ready_to_upload":"NO"}}},{"node":{"data":{"customerLogo":[{"url":"https://dl.airtable.com/.attachments/ecfa479c9b992db55ceef72991e2874d/320cf0d6/kommunevapen.png"}],"projectUrlName":"Vikstunet-Ventilasjon","id":"2021-02-15T10:19:18.000Z-Vikstunet-Ventilasjon","projectName":"Vikstunet Ventilasjon","ready_to_upload":"YES"}}},{"node":{"data":{"customerLogo":[{"url":"https://dl.airtable.com/.attachments/698a09a8e5874d1072d6aaf868f83165/b778d5a8/kommunevapen.png"}],"projectUrlName":"Hole-Herredshus","id":"2021-02-15T10:19:18.000Z-Hole-Herredshus","projectName":"Hole Herredshus","ready_to_upload":"YES"}}},{"node":{"data":{"customerLogo":[{"url":"https://dl.airtable.com/.attachments/3379cdf48f9f9aec4317a1a888eacb81/4c372767/kommunevapen.png"}],"projectUrlName":"Vik-skole","id":"2021-02-15T10:19:18.000Z-Vik-skole","projectName":"Vik skole","ready_to_upload":"YES"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-projects-list-js-428d170d948dad27ad11.js.map