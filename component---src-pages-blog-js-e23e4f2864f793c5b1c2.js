"use strict";(self.webpackChunkconnors_website=self.webpackChunkconnors_website||[]).push([[7],{9186:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),a=n(8037),l=n(1496);function o(e){var t=e.handleSearch,n=e.placeholderText,a=e.searchVal,l=e.isSticky,o=void 0!==l&&l;return r.createElement("input",{onChange:t,placeholder:n,value:a,"data-default":"",className:"roboto-mono f4 normal ba br3 pa2 "+(o&&"sticky")})}var c=n(8977),s=function(e){var t=e.node.frontmatter.featuredImage.childImageSharp.fluid;return r.createElement("div",{class:"flex w-50 pv5 justify-center-ns items-center"},r.createElement(l.Z,{className:"w-75 br3",fluid:t}))},i=function(e){return r.createElement("div",{class:"blog-content w-50"},r.createElement("div",{name:"header",class:"blog-header mt5 pa3 bg-lightest-blue br3 shadow-5"},r.createElement("div",{name:"title",class:"f2"},e.node.frontmatter.title),r.createElement("div",{name:"date",class:"f5 mt1 mid-gray"},e.node.fields.date)),r.createElement("div",{name:"excerpt",class:"blog-text f4 pv4 lh-large"},e.node.excerpt))},u=function(e){var t=e.slug,n=e.children;return r.createElement(a.ZP,{className:"link",to:"/"+t},r.createElement("div",{className:"pv4 bb-ns bw1-ns b--moon-gray"},r.createElement("div",{class:"flex h6 "},n)))};function m(e){var t=e.data,n=(0,r.useState)(""),a=n[0],l=n[1],m=(0,r.useState)(""),d=m[0],f=m[1],v=function(e){f(e===d?"":e)},h=t.allMarkdownRemark.edges.filter((function(e){return((e.node.frontmatter.title+" "+e.node.excerpt).toLowerCase().includes(a.toLowerCase())||""===a)&&(e.node.frontmatter.category===d||""===d)})).map((function(e,t){var n=e.node.fields.slug;return t%2?r.createElement(u,{slug:n},s(e),i(e)):r.createElement(u,{slug:n},i(e),s(e))})),b=function(e){return e===d?{color:"#cdecff",borderColor:"black"}:{}};return r.createElement(c.D,null,r.createElement("div",{class:"f4 pt6 pb4 blog-tagline"},"This is where I obsess about Survivor and have strong opinions on shows that no one watches.",r.createElement("div",{class:"flex items-center mt4"},r.createElement(o,{handleSearch:function(e){l(e.target.value)},placeholderText:"search",searchVal:a,isSticky:!1}),r.createElement("ul",{class:"filter"},r.createElement("li",{key:"survivor",style:b("survivor"),onMouseDown:function(){return v("survivor")},class:"first-li"},"Survivor"),r.createElement("li",{key:"tv",style:b("tv"),onMouseDown:function(){return v("tv")}},"TV Reviews"),r.createElement("li",{key:"community",style:b("community"),onMouseDown:function(){return v("community")}},"Creative Writing")))),r.createElement("div",null,h))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-e23e4f2864f793c5b1c2.js.map