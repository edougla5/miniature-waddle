(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(14),i=n.n(c),s=(n(45),n(21)),r=(n(46),n(29)),u=n(83),l=n(71),j=n(79),h=n(73),b=n(80),d=n(78),p=n(72),m=n(74),O=n(75),f=n(76),x=n(70),g=n(82),v=n(13),k=n(3),w=Object(x.a)((function(e){return Object(g.a)({search:Object(r.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(r.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"})})})),y=function(e){var t=w(),n=Object(o.useState)(""),a=Object(s.a)(n,2),c=a[0],i=a[1];return Object(k.jsx)(u.a,{position:"static",children:Object(k.jsxs)(l.a,{children:[Object(k.jsx)(j.a,{edge:"start",color:"inherit","aria-label":"open drawer",children:Object(k.jsx)(p.a,{})}),Object(k.jsx)(h.a,{variant:"h6",noWrap:!0,children:" Books"}),Object(k.jsxs)("div",{className:t.search,children:[Object(k.jsx)("div",{className:t.searchIcon,children:Object(k.jsx)(m.a,{})}),Object(k.jsx)(b.a,{classes:{root:t.inputRoot,input:t.inputInput},onChange:function(t){return n=t.target.value,i(n),void e.setBooks(e.books.filter((function(e){return e.title.toLowerCase().includes(n)})));var n},value:c,placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(k.jsx)("div",{style:{flexGrow:1}}),Object(k.jsx)(j.a,{edge:"end","aria-label":"account of current user","aria-haspopup":"true",color:"inherit",children:Object(k.jsx)(O.a,{})}),Object(k.jsx)(d.a,{sx:{display:{xs:"flex",md:"none"}},children:Object(k.jsx)(j.a,{"aria-label":"show more","aria-haspopup":"true",color:"inherit",children:Object(k.jsx)(f.a,{})})})]})})},I=n(77),B=(n(52),function(e){return Object(k.jsxs)("div",{className:"book",children:[Object(k.jsx)("h2",{children:e.title}),Object(k.jsx)("img",{src:e.image}),Object(k.jsx)("h3",{children:e.author})]})}),R=(n(53),["harry potter","captin underpants","the odyssey","the hunger games","the divine comedy of dante alighieri"]),C=function(e){return Object(o.useEffect)((function(){var t=R.map((function(e){return fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(encodeURIComponent(e),"&key=").concat("AIzaSyBFGdkpTlaCrmtFpXqBH0RRHQXrUMudYcE")).then((function(e){return e.json()}))}));Promise.all(t).then((function(t){var n=t.map((function(e){return e.items})).flat(2).map((function(e){return{title:e.volumeInfo.title,image:e.volumeInfo.imageLinks.thumbnail,author:e.volumeInfo.authors}}));e.setBooks(n),e.setTempBooks(n)}))}),[]),0===e.books.length?Object(k.jsx)("div",{className:"loader",children:Object(k.jsx)(I.a,{})}):Object(k.jsx)("div",{className:"books",children:e.books.map((function(e){return Object(k.jsx)(B,{title:e.title,image:e.image,author:e.author})}))})},N=function(){var e=Object(o.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)([]),i=Object(s.a)(c,2),r=i[0],u=i[1];return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)(y,{books:n,setBooks:u}),Object(k.jsx)(C,{books:r,setBooks:a,setTempBooks:u})]})};i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(N,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.b0b98e4e.chunk.js.map