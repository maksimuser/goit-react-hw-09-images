(this["webpackJsonpgoit-react-hw-09-images"]=this["webpackJsonpgoit-react-hw-09-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3Q6ic",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__37iIg"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2hqz_",Modal:"Modal_Modal__1Pb39"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1Ibt0"}},26:function(e,t,a){e.exports={Button:"Button_Button__t4N0F"}},5:function(e,t,a){e.exports={SearchBar:"SearchBar_SearchBar__1181a",SearchForm:"SearchBar_SearchForm__1_Ruq",SearchForm__button:"SearchBar_SearchForm__button__1FT87",SearchForm__label:"SearchBar_SearchForm__label__2XB0b",SearchForm__input:"SearchBar_SearchForm__input__2PpTn"}},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),o=a.n(c),l=a(14),s=a(4),u=a(23),i=a.n(u),m=a(10),h=a.n(m),b=a(24),j=a(11),_=a.n(j);_.a.defaults.baseURL="https://pixabay.com";var d={fetchHits:function(){var e=Object(b.a)(h.a.mark((function e(t){var a,r,n,c,o,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchQuery,r=void 0===a?"":a,n=t.currentPage,c=void 0===n?1:n,e.next=3,_.a.get("/api/?q=".concat(r,"&page=").concat(c,"&key=").concat("21016038-c4a85434ef4684dfcad661ac9","&image_type=photo&orientation=horizontal&per_page=12"));case 3:return o=e.sent,l=o.data,e.abrupt("return",l.hits);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=a(5),f=a.n(g),O=a(1);function p(e){var t=e.onSubmit,a=Object(r.useState)(""),n=Object(s.a)(a,2),c=n[0],o=n[1];return Object(O.jsx)("header",{className:f.a.SearchBar,children:Object(O.jsxs)("form",{className:f.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(c),o("")},children:[Object(O.jsx)("button",{type:"submit",className:f.a.SearchForm__button,children:Object(O.jsx)("span",{className:f.a.SearchForm__label,children:"Search"})}),Object(O.jsx)("input",{className:f.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.target.value)}})]})})}var S=a(12),v=a.n(S),x=function(e){var t=e.url,a=e.alt,r=e.onToggle,n=e.onLargeImage;return Object(O.jsx)("li",{className:v.a.ImageGalleryItem,onClick:function(){return r(n,a)},children:Object(O.jsx)("img",{src:t,alt:a,className:v.a.ImageGalleryItem__image})})},y=a(25),I=a.n(y),w=function(e){var t=e.hits,a=e.onToggleModal;return Object(O.jsx)("ul",{className:I.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.tags,c=e.largeImageURL;return Object(O.jsx)(x,{url:r,alt:n,onToggle:a,onLargeImage:c},t)}))})};w.defaultProp={hits:[]};var F=w,B=a(26),N=a.n(B),G=function(e){var t=e.onLoadMore;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(O.jsx)("button",{className:N.a.Button,type:"button",onClick:t,children:"Load more"})},L=a(13),M=a.n(L),k=document.querySelector("#modal-root");function T(e){var t=e.onClose,a=e.children;Object(r.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(c.createPortal)(Object(O.jsx)("div",{className:M.a.Overlay,onClick:function(e){e.target===e.currentTarget&&t()},children:Object(O.jsx)("div",{className:M.a.Modal,children:a})}),k)}function C(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(1),o=Object(s.a)(c,2),u=o[0],m=o[1],h=Object(r.useState)(""),b=Object(s.a)(h,2),j=b[0],_=b[1],g=Object(r.useState)(!1),f=Object(s.a)(g,2),S=f[0],v=f[1],x=Object(r.useState)(null),y=Object(s.a)(x,2),I=y[0],w=y[1],B=Object(r.useState)({}),N=Object(s.a)(B,2),L=N[0],M=N[1],k=Object(r.useState)(!1),C=Object(s.a)(k,2),E=C[0],P=C[1];Object(r.useEffect)((function(){!function(){var e={searchQuery:j,currentPage:u};j&&(v(!0),d.fetchHits(e).then((function(e){n((function(t){return[].concat(Object(l.a)(t),Object(l.a)(e))}))})).catch((function(e){return w(e.message)})).finally((function(){return v(!1)})))}()}),[u,j]);var q=function(e,t){P(!E),M({url:e,alt:t})},R=a.length>0&&!S;return Object(O.jsxs)("div",{className:"App",children:[E&&Object(O.jsx)(T,{onClose:q,children:Object(O.jsx)("img",{src:L.url,alt:L.alt})}),I&&Object(O.jsxs)("p",{children:["Whoops, something went wrong: ",I.message]}),Object(O.jsx)(p,{onSubmit:function(e){_(e),m(1),n([]),w(null)}}),Object(O.jsx)(F,{hits:a,onToggleModal:q}),S&&Object(O.jsx)("div",{className:"Loader",children:Object(O.jsx)(i.a,{type:"ThreeDots",color:"blue",height:80,width:80})}),R&&Object(O.jsx)(G,{onLoadMore:function(){m((function(e){return e+1}))}})]})}a(71);o.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.99fc67d6.chunk.js.map