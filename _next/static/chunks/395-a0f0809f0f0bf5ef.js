(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{2221:function(e,t,n){"use strict";n.d(t,{X:function(){return d}});var r=n(1799),a=n(9396),i=n(9534),s=n(5893),o=n(7294),c=n(2362),l=n(361),u=n.n(l),d=function(e){var t=e.children,n=e.level,l=void 0===n?1:n,d=e.as,m=e.align,p=void 0===m?"auto":m,h=e.weight,f=void 0===h?"medium":h,g=e.className,v=(0,i.Z)(e,["children","level","as","align","weight","className"]),y=Math.min(Math.max(l,0),5),_=d||"h".concat(Math.max(y,1));return(0,s.jsx)(o.Fragment,{children:(0,s.jsx)(_,(0,a.Z)((0,r.Z)({className:(0,c.Sh)(u().heading,g),"data-align":p,"data-weight":f,"data-level":y},v),{children:t}))})}},1424:function(e,t,n){"use strict";n.d(t,{E:function(){return y}});var r=n(7568),a=n(1799),i=n(9534),s=n(655),o=n(5893),c=n(8526),l=n(9630),u=n(8718),d=n(3302),m=n(4529),p=n(7294),h=n(5622),f=n(2362),g=n(2288),v=n.n(g),y=function(e){var t=e.className,n=e.style,r=e.reveal,s=e.delay,c=void 0===s?0:s,l=e.raised,d=e.src,h=e.srcSet,g=e.placeholder,y=(0,i.Z)(e,["className","style","reveal","delay","raised","src","srcSet","placeholder"]),w=(0,p.useState)(!1),j=w[0],S=w[1],E=(0,u.Fg)().themeId,N=(0,p.useRef)(),P=d||(null===h||void 0===h?void 0:h[0]),Z=(0,m.NM)(N,!x(P)),b=(0,p.useCallback)((function(){S(!0)}),[]);return(0,o.jsx)("div",{className:(0,f.Sh)(v().image,t),"data-visible":Z||j,"data-reveal":r,"data-raised":l,"data-theme":E,style:(0,f.Fh)({delay:(0,f.aU)(c)},n),ref:N,children:(0,o.jsx)(_,(0,a.Z)({delay:c,onLoad:b,loaded:j,inViewport:Z,reveal:r,src:P,srcSet:h,placeholder:g},y))})},_=function(e){var t=e.onLoad,n=e.loaded,u=e.inViewport,g=e.srcSet,y=e.placeholder,_=e.delay,w=e.src,j=e.alt,S=e.play,E=void 0===S||S,N=e.restartOnPause,P=e.reveal,Z=e.sizes,b=e.noPauseButton,L=(0,i.Z)(e,["onLoad","loaded","inViewport","srcSet","placeholder","delay","src","alt","play","restartOnPause","reveal","sizes","noPauseButton"]),I=(0,d.J)(),z=(0,p.useState)(!0),R=z[0],U=z[1],k=(0,p.useState)(!I),F=k[0],C=k[1],B=(0,p.useState)(),M=B[0],V=B[1],W=(0,p.useState)(!1),J=W[0],O=W[1],X=(0,p.useRef)(),A=(0,p.useRef)(),H=x(w),K=u,T=(0,h.A2)(g),D=(0,m.f3)();(0,p.useEffect)((function(){var e=function(){var e=(0,r.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,(0,h.Ro)({srcSet:g,sizes:Z})];case 1:return e=t.sent(),V(e),[2]}}))}));return function(){return e.apply(this,arguments)}}();H&&g?e():H&&V(w.src)}),[H,Z,w,g]),(0,p.useEffect)((function(){if(A.current&&M){var e=function(){C(!1),A.current.pause()};E||(e(),N&&(A.current.currentTime=0)),J||(u?u&&!I&&E&&(C(!0),A.current.play()):e())}}),[u,E,I,N,J,M]);return(0,o.jsxs)("div",{className:v().elementWrapper,"data-reveal":P,"data-visible":u||n,style:(0,f.Fh)({delay:(0,f.aU)(_+1e3)}),children:[H&&D&&(0,o.jsxs)(p.Fragment,{children:[(0,o.jsx)("video",(0,a.Z)({muted:!0,loop:!0,playsInline:!0,className:v().element,"data-loaded":n,autoPlay:!I,role:"img",onLoadStart:t,src:M,"aria-label":j,ref:A},L)),!b&&(0,o.jsxs)(c.z,{className:v().button,onClick:function(e){e.preventDefault(),O(!0),A.current.paused?(C(!0),A.current.play()):(C(!1),A.current.pause())},children:[(0,o.jsx)(l.J,{icon:F?"pause":"play"}),F?"Pause":"Play"]})]}),!H&&(0,o.jsx)("img",(0,a.Z)({className:v().element,"data-loaded":n,onLoad:t,decoding:"async",src:K?w.src:void 0,srcSet:K?T:void 0,width:w.width,height:w.height,alt:j,sizes:Z},L)),R&&(0,o.jsx)("img",{"aria-hidden":!0,className:v().placeholder,"data-loaded":n,style:(0,f.Fh)({delay:(0,f.aU)(_)}),ref:X,src:y.src,width:y.width,height:y.height,onTransitionEnd:function(){return U(!1)},decoding:"async",alt:"",role:"presentation"})]})};function x(e){return"string"===typeof e.src&&e.src.endsWith(".mp4")}},5633:function(e,t,n){"use strict";n.d(t,{h:function(){return u}});var r=n(5893),a=n(9008),i=n.n(a),s="https://pulsepepe.io",o="PULSE PEPE",c="@PULSExPEPE",l="".concat(s,"/social-image.png"),u=function(e){e.title;var t=e.description,n=(e.prefix,e.ogImage),a=void 0===n?l:n,u="PULSExPEPE";return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:u},"title"),(0,r.jsx)("meta",{name:"description",content:t},"description"),(0,r.jsx)("meta",{name:"author",content:o}),(0,r.jsx)("meta",{property:"og:image",content:a}),(0,r.jsx)("meta",{property:"og:image:alt",content:"Banner for the site"}),(0,r.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,r.jsx)("meta",{property:"og:image:width",content:"1280"}),(0,r.jsx)("meta",{property:"og:image:height",content:"675"}),(0,r.jsx)("meta",{property:"og:title",content:u}),(0,r.jsx)("meta",{property:"og:site_name",content:o}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:s}),(0,r.jsx)("meta",{property:"og:description",content:t}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:description",content:t}),(0,r.jsx)("meta",{name:"twitter:title",content:u}),(0,r.jsx)("meta",{name:"twitter:site",content:c}),(0,r.jsx)("meta",{name:"twitter:creator",content:c}),(0,r.jsx)("meta",{name:"twitter:image",content:a})]})}},6602:function(e,t,n){"use strict";n.d(t,{$:function(){return d}});var r=n(1799),a=n(9396),i=n(9534),s=n(5893),o=n(7294),c=n(2362),l=n(4828),u=n.n(l),d=(0,o.forwardRef)((function(e,t){var n=e.as,o=void 0===n?"div":n,l=e.children,d=e.className,m=(0,i.Z)(e,["as","children","className"]);return(0,s.jsx)(o,(0,a.Z)((0,r.Z)({className:(0,c.Sh)(u().section,d),ref:t},m),{children:l}))}))},5622:function(e,t,n){"use strict";n.d(t,{A2:function(){return c},Ro:function(){return d}});var r=n(7568),a=n(828),i=n(655);function s(e){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)((function(e){var t,n,r;return(0,i.__generator)(this,(function(a){return t=e.src,n=e.srcSet,r=e.sizes,[2,new Promise((function(e,a){var i=c(n);try{if(!t&&!n)throw new Error("No image src or srcSet provided");var s=new Image;t&&(s.src=t),i&&(s.srcset=i),r&&(s.sizes=r);var o=function(){s.removeEventListener("load",o);var t=s.currentSrc;s=null,e(t)};s.addEventListener("load",o)}catch(l){a("Error loading ".concat(i,": ").concat(l))}}))]}))}))).apply(this,arguments)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return"string"===typeof e?e:e.map((function(e){return"".concat(e.src," ").concat(e.width,"w")})).join(", ")}function l(){return u.apply(this,arguments)}function u(){return u=(0,r.Z)((function(){var e,t,n=arguments;return(0,i.__generator)(this,(function(a){return e=n.length>0&&void 0!==n[0]?n[0]:1,t=n.length>1&&void 0!==n[1]?n[1]:1,[2,new Promise((function(n){var a=document.createElement("canvas"),s=a.getContext("2d");a.width=e,a.height=t,s.fillStyle="rgba(0, 0, 0, 0)",s.fillRect(0,0,e,t),a.toBlob(function(){var e=(0,r.Z)((function(e){var t;return(0,i.__generator)(this,(function(r){if(!e)throw new Error("Video thumbnail failed to load");return t=URL.createObjectURL(e),a.remove(),n(t),[2]}))}));return function(t){return e.apply(this,arguments)}}())}))]}))})),u.apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return m=(0,r.Z)((function(e){var t,n,o,u,d,m;return(0,i.__generator)(this,(function(p){switch(p.label){case 0:return t=e.srcSet,n=e.sizes,o=c(t),[4,Promise.all(o.split(", ").map(function(){var e=(0,r.Z)((function(e){var t,n,r,s;return(0,i.__generator)(this,(function(i){switch(i.label){case 0:return t=(0,a.Z)(e.split(" "),2),n=t[0],r=t[1],[4,l(Number(r.replace("w","")))];case 1:return s=i.sent(),[2,{src:n,image:s,width:r}]}}))}));return function(t){return e.apply(this,arguments)}}()))];case 1:return u=p.sent(),d=u.map((function(e){var t=e.image,n=e.width;return"".concat(t," ").concat(n)})).join(", "),[4,s({srcSet:d,sizes:n})];case 2:return m=p.sent(),[2,u.find((function(e){return e.image===m})).src]}}))})),m.apply(this,arguments)}},361:function(e){e.exports={heading:"Heading_heading__209rB"}},2288:function(e){e.exports={image:"Image_image__fhfXL",container:"Image_container__9ry6H",elementWrapper:"Image_elementWrapper__dY5KC",placeholder:"Image_placeholder__rZeKX",element:"Image_element__EpM9I",button:"Image_button__S1k_J"}},4828:function(e){e.exports={section:"Section_section__FuI7l"}}}]);