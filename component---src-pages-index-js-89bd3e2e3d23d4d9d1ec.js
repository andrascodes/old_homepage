(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return y});var a=n(138),i=n(146),r=n.n(i),o=n(139),l=n.n(o),d=n(142),m=n(0),s=n.n(m),c=n(132),p="https://drive.google.com/open?id=17Hun2x2fNQYaZrbWdZHZoVxsqipiJkX6",u=c.b.div.withConfig({displayName:"pages__Content",componentId:"sc-6kvjaa-0"})(["background-color:#fff;color:#000;margin-top:4rem;display:flex;align-items:center;justify-content:center;"]),h=c.b.div.withConfig({displayName:"pages__Inner",componentId:"sc-6kvjaa-1"})(["max-width:48rem;width:calc(100% - 12rem);display:flex;justify-content:center;@media screen and (max-width:1680px){max-width:43rem;}@media screen and (max-width:1280px){max-width:30rem;width:calc(100% - 6rem);}@media screen and (max-width:768px){flex-direction:column;}@media screen and (max-width:480px){width:calc(100% - 2rem);}@media screen and (max-width:360px){}"]),f=c.b.div.withConfig({displayName:"pages__Pictures",componentId:"sc-6kvjaa-2"})(["display:flex;flex-direction:column;flex-basis:35%;@media screen and (max-width:768px){flex-direction:row;& div{flex-basis:50%;margin-bottom:1rem;}& div:nth-child(2){margin-left:1rem;}}"]),g=c.b.div.withConfig({displayName:"pages__Description",componentId:"sc-6kvjaa-3"})(["align-self:flex-start;flex-basis:65%;font-size:1.1rem;margin-left:1.5rem;margin-top:1rem;margin-bottom:1rem;& p{margin-bottom:0.75rem;}@media screen and (max-width:1680px){font-size:1rem;}@media screen and (max-width:1280px){font-size:0.7rem;}@media screen and (max-width:768px){font-size:0.6rem;margin-left:0;}@media screen and (max-width:480px){}@media screen and (max-width:360px){}"]),b=Object(c.b)(l.a).withConfig({displayName:"pages__StyledImg",componentId:"sc-6kvjaa-4"})(["margin-bottom:1.5rem;@media screen and (max-width:1680px){margin-bottom:2rem;}@media screen and (max-width:768px){margin-top:-2rem;}"]),x=c.b.div.withConfig({displayName:"pages__DesktopButtonContainer",componentId:"sc-6kvjaa-5"})(["color:#fff;margin-bottom:2.5rem;@media screen and (max-width:768px){display:none;}"]),w=c.b.div.withConfig({displayName:"pages__MobileButtonContainer",componentId:"sc-6kvjaa-6"})(["color:#fff;display:none;@media screen and (max-width:768px){display:block;}"]);t.default=function(e){var t=e.data.BannerBgImgData,n=e.data.ProfilePicOne,i=e.data.ProfilePicTwo;return s.a.createElement(d.a,{index:!0,withButton:!0,logoTitle:"András",logoSubtitle:"Szücs",title:"Hi, my name is András",subtitle:["A Jack-Of-All-Trades Technologist with strong","skills in Development, UX and Business"],bannerBgImage:t,bannerBgColor:"#000"},s.a.createElement(r.a,{title:"András Szücs - About Me"}),s.a.createElement(u,null,s.a.createElement(h,null,s.a.createElement(f,null,s.a.createElement(b,{title:"Profile pic One",alt:"Profile pic One",sizes:n.childImageSharp.sizes,style:{marginTop:"-2rem"}}),s.a.createElement(b,{title:"Profile pic One",alt:"Profile pic One",sizes:i.childImageSharp.sizes}),s.a.createElement(x,null,s.a.createElement(a.a,{to:p,size:"medium",primary:!0,alternate:!0},"Download My CV"))),s.a.createElement(w,null,s.a.createElement(a.a,{to:p,size:"medium",primary:!0,alternate:!0},"Download My CV")),s.a.createElement(g,null,s.a.createElement("p",null,"My full name is András Szücs and I was born in Hungary. I studied Computer Science at the Eötvös Loránd University in Budapest. During my studies I participated in the Innovation Lab at the university where I gained practical experience in validating startup ideas and creating feasible business models. Thanks to this, I got to participate in a few startup projects such as Pulmoment and Chatler.AI. After graduating, I have been accepted to the EIT Digital Master School, a two-year double degree combining Technical programmes with Innovation and Entrepreneurship skills. I did my first year at KTH Royal Institute of Technology in Stockholm and currently I’m finishing my second year at Université Paris-Sud, majoring in Human-Computer Interaction and Design."),s.a.createElement("p",null,"My main expertise is in Full Stack Javascript Development. On the Frontend, I like to use React and on the backend Node.js. Thanks to my studies and projects I have also picked up skills in User Experience Design and Business. For this reason I can contribute to a team as a Designer (in User Research or Prototyping) or as Product Manager as well."),s.a.createElement("p",null,"Currently, I am looking for opportunities in Paris, London or Stockholm. Ideally, I’d like to find a position where I can combine my software development and design skills at a startup or at a fast-paced product development team in a larger company. Don’t hesitate to contact me if you're recruiting!")))))};var y="557033268"},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return u});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(133),d=n.n(l);n.d(t,"Link",function(){return d.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var m=n(135),s=n.n(m);n.d(t,"PageRenderer",function(){return s.a});var c=n(29);n.d(t,"parsePath",function(){return c.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},135:function(e,t,n){var a;e.exports=(a=n(136))&&a.default||a},136:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(47),d=n(2),m=function(e){var t=e.location,n=d.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=m},137:function(e,t,n){"use strict";var a=n(132),i=n(134),r=n(4),o=n.n(r),l=n(0),d=n.n(l),m=a.b.div.withConfig({displayName:"NavBar__StyledNavBar",componentId:"sc-1pbwsai-0"})(["height:3.07rem;letter-spacing:0.236rem;line-height:4.1;position:fixed;z-index:10000;left:0;top:0;display:flex;width:100%;margin:0;color:white;background-color:#2a2f4a;box-shadow:0 0 0.25rem 0 rgba(0,0,0,0.15);font-weight:bold;text-transform:uppercase;cursor:default;"," opacity:0;"," @media screen and (max-width:1680px){letter-spacing:0.2rem;line-height:4;}@media screen and (max-width:1280px){letter-spacing:0.17rem;}@media screen and (max-width:980px){line-height:4.1;}@media screen and (max-width:736px){line-height:3.5;}@media screen and (max-width:480px){}@media screen and (max-width:360px){}"],function(e){return!0===e.transparent?Object(a.a)(["animation:none;background-color:transparent;box-shadow:none;position:absolute;transition:opacity 2.5s ease;transition-delay:0.75s;"]):""},function(e){return!0===e.loaded||void 0===e.loaded?Object(a.a)(["opacity:1;"]):""}),s=Object(a.b)(i.Link).withConfig({displayName:"NavBar__StyledLogoLink",componentId:"sc-1pbwsai-1"})(["font-size:0.755rem;border:0;display:inline-block;height:inherit;padding:0 1.14rem;text-decoration:none;transition:color 0.2s ease-in-out,border-bottom-color 0.2s ease-in-out;cursor:pointer;& strong{line-height:1.24rem;color:#242943;background-color:#fff;display:inline-block;margin-right:0.25rem;padding:0 0.1rem 0 0.28rem;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out;}&:hover{color:#9bf1ff;}&:hover strong{background-color:#9bf1ff;}&:active{color:#53e3fb;}&:active strong{background-color:#53e3fb;}@media screen and (max-width:1680px){font-size:0.62rem;padding:0 0 0 0.9rem;& strong{line-height:1rem;margin-right:0.18rem;padding:0 0.07rem 0 0.25rem;}}@media screen and (max-width:1280px){font-size:0.53rem;padding:0 0.8rem;& strong{line-height:0.9rem;margin-right:0.17rem;padding:0 0.05rem 0 0.2rem;}}@media screen and (max-width:736px){padding:0 0.55rem;}@media screen and (max-width:480px){& span{display:none;}}@media screen and (max-width:360px){}"]),c=a.b.nav.withConfig({displayName:"NavBar__StyledNav",componentId:"sc-1pbwsai-2"})(["display:flex;flex-grow:1;justify-content:flex-end;"]),p=a.b.div.withConfig({displayName:"NavBar__MenuButton",componentId:"sc-1pbwsai-3"})(["display:none;& p{cursor:pointer;display:block;font-size:0.75rem;transition:color 0.2s ease-in-out,border-bottom-color 0.2s ease-in-out;margin-bottom:0;}&:hover p{color:#9bf1ff;}&:active p{color:#53e3fb;}&:hover line{stroke:#9bf1ff;}&:active line{stroke:#53e3fb;}@media screen and (max-width:980px){}"]),u=a.b.div.withConfig({displayName:"NavBar__HamburgerIcon",componentId:"sc-1pbwsai-4"})(["cursor:pointer;display:flex;align-items:center;padding-right:1.5rem;padding-left:0.42rem;& line{stroke-width:2px;stroke:#ffffff;}"]),h=a.b.ul.withConfig({displayName:"NavBar__NavItems",componentId:"sc-1pbwsai-5"})(["display:flex;font-size:0.75rem;letter-spacing:0.1rem;& li{list-style:none;padding-right:1.5rem;cursor:pointer;text-shadow:0px 2px 7px #000;}& li:hover{color:#9bf1ff;}& li:active{color:#9bf1ff;}@media screen and (max-width:1680px){font-size:0.62rem;}@media screen and (max-width:1280px){font-size:0.53rem;}@media screen and (max-width:980px){}@media screen and (max-width:736px){& li{padding-right:1.2rem;}& li:last-child{padding-right:0.55rem;}}@media screen and (max-width:480px){margin-left:0;& li{padding-right:1rem;}}@media screen and (max-width:360px){& li{padding-right:0.6rem;}& li:last-child{padding-right:0.3rem;}}"]),f=function(e){return d.a.createElement(i.Link,{to:e.to,activeStyle:{color:"#9bf1ff",cursor:"default"}},e.children)},g=function(e){return d.a.createElement(m,e,d.a.createElement(s,{to:"/",activeStyle:{cursor:"default"}},d.a.createElement("strong",null,e.logoTitle)," ",d.a.createElement("span",null,e.logoSubtitle)),d.a.createElement(c,null,d.a.createElement(h,null,d.a.createElement("li",null,d.a.createElement(f,{to:"/"},"About Me")),d.a.createElement("li",null,d.a.createElement(f,{to:"/portfolio"},"Portfolio"))),d.a.createElement(p,null,d.a.createElement("p",null,"Menu"),d.a.createElement(u,null,d.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"32",viewBox:"0 0 24 32",preserveAspectRatio:"none"},d.a.createElement("line",{x1:"0",y1:"11",x2:"24",y2:"11"}),d.a.createElement("line",{x1:"0",y1:"21",x2:"24",y2:"21"}),d.a.createElement("line",{x1:"0",y1:"16",x2:"24",y2:"16"}))))))};g.propTypes={transparent:o.a.bool,logoTitle:o.a.string,logoSubtitle:o.a.string},g.defaultProps={transparent:!1},t.a=g},138:function(e,t,n){"use strict";n(28),n(145);var a=n(132),i=n(134),r=n(4),o=n.n(r),l=n(0),d=n.n(l),m=function(e){return Object(a.b)(e).withConfig({displayName:"Button",componentId:"sc-1x5qrk2-0"})(["border:0;border-radius:0;cursor:pointer;display:flex;align-items:center;justify-content:center;text-transform:uppercase;transition:background-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out,color 0.2s ease-in-out;white-space:nowrap;font-weight:600;letter-spacing:0.25em;padding:0 1.75em;height:3.5em;"," "," "," "," "," &:focus{outline:none;}"],function(e){return!0===e.fit?Object(a.a)(["width:100%;"]):""},function(e){switch(e.size){case"large":return Object(a.a)(["font-size:1.25em;height:3em;line-height:3em;"]);case"small":return Object(a.a)(["font-size:0.6rem;"]);default:return Object(a.a)(["font-size:0.76rem;@media screen and (max-width:1680px){font-size:0.6rem;}@media screen and (max-width:1280px){font-size:0.53rem;}"])}},function(e){return!0===e.disabled?Object(a.a)(["cursor:default;opacity:0.25;pointer-events:none;"]):""},function(e){return!0===e.primary?Object(a.a)(["background-color:#fff;box-shadow:none;color:#242943;&:hover{background-color:#9bf1ff;color:#242943 !important;}&:active{background-color:#53e3fb;}"]):Object(a.a)(["background-color:transparent;box-shadow:inset 0 0 0 2px #fff;color:#fff;&:hover{box-shadow:inset 0 0 0 2px #9bf1ff;color:#9bf1ff;border-bottom-color:transparent;}&:active{background-color:rgba(155,241,255,0.1);box-shadow:inset 0 0 0 2px #53e3fb;color:#53e3fb;}"])},function(e){return!0===e.alternate?Object(a.a)(["background-color:#000;color:#fff;"]):""})},s=function(e){if(e.to.startsWith("http")){var t=m(function(e){return d.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer",href:e.to},e))});return d.a.createElement(t,e,e.children)}var n=m(i.Link);return d.a.createElement(n,e,e.children)};s.propTypes={children:o.a.node.isRequired,size:o.a.oneOf(["small","medium","large"]),primary:o.a.bool,fit:o.a.bool,disabled:o.a.bool,onClick:o.a.func,to:o.a.string,alternate:o.a.bool},s.defaultProps={to:"/",size:"medium",primary:!1,fit:!1,disabled:!1,alternate:!1},t.a=s},142:function(e,t,n){"use strict";var a=n(6),i=n.n(a),r=n(0),o=n.n(r),l=n(149),d=n(150),m=n(4),s=n.n(m),c=n(132),p=n(138),u=n(140),h=n(139),f=n.n(h),g=c.b.div.withConfig({displayName:"Banner__StyledBanner",componentId:"ilbu78-0"})(["color:white;max-height:50rem;height:60vh;min-height:22.7rem;align-items:center;border-bottom:0 !important;cursor:default;display:flex;padding:2.75rem 0 0 0;position:relative;@media screen and (max-width:1680px){padding:2rem 0 0 0;min-height:23.35rem;}@media screen and (max-width:1280px){padding:1.85rem 0 0 0;min-height:14.65rem;height:54vh;}@media screen and (max-width:980px){padding:2rem 0 0 0;min-height:20rem;}@media screen and (max-width:736px){height:auto;max-height:none;min-height:0;padding:3.6rem 0 0 0;}@media screen and (max-width:480px){padding:5.7rem 0 0rem 0;}@media screen and (max-width:360px){}"]),b=c.b.div.withConfig({displayName:"Banner__StyledInner",componentId:"ilbu78-1"})(["margin:0 auto;max-width:60.8rem;width:calc(100% - 6rem);position:relative;opacity:0;filter:blur(0.125em);transform:translateX(-0.5em);transition:opacity 1.5s ease,transform 0.5s ease-out,filter 0.5s ease,-webkit-filter 0.5s ease;z-index:3;"," @media screen and (max-width:1680px){width:calc(100% - 4.65rem);max-width:50.5rem;}@media screen and (max-width:1280px){width:calc(100% - 4rem);max-width:43.3rem;}@media screen and (max-width:980px){width:calc(100% - 4rem);}@media screen and (max-width:736px){width:calc(100% - 2rem);}@media screen and (max-width:480px){}@media screen and (max-width:360px){}"],function(e){return!0===e.loaded||void 0===e.loaded?Object(c.a)(["opacity:1;filter:none;transform:translateX(0);"]):""}),x=(c.b.div.withConfig({displayName:"Banner__StyledColorOverlay",componentId:"ilbu78-2"})(["content:'';display:block;height:100%;left:0;opacity:0.85;pointer-events:none;position:absolute;top:0;transition:opacity 2.5s ease;transition-delay:0.75s;width:100%;z-index:2;overflow:hidden;"]),c.b.h1.withConfig({displayName:"Banner__StyledTitle",componentId:"ilbu78-3"})(["font-size:3.08rem;margin-bottom:0;letter-spacing:0.02rem;@media screen and (max-width:1680px){font-size:2.525rem;}@media screen and (max-width:1280px){font-size:2.16rem;letter-spacing:0.02rem;}@media screen and (max-width:736px){font-size:1.35rem;}@media screen and (max-width:480px){font-size:1.33rem;}@media screen and (max-width:360px){}"])),w=c.b.div.withConfig({displayName:"Banner__StyledHorizontalLine",componentId:"ilbu78-4"})(["background-color:#fff;content:'';display:block;height:2px;margin:1.89rem 0;width:100%;@media screen and (max-width:1680px){margin:1.5rem 0;}@media screen and (max-width:1280px){margin:1.3rem 0;}@media screen and (max-width:736px){margin:0.8rem 0 1.3rem 0;}@media screen and (max-width:480px){}@media screen and (max-width:360px){}"]),y=c.b.div.withConfig({displayName:"Banner__StyledSubtitleContainer",componentId:"ilbu78-5"})(["display:flex;align-items:center;@media screen and (max-width:736px){flex-direction:column;align-items:flex-start;margin-bottom:2rem;}"]),v=c.b.p.withConfig({displayName:"Banner__StyledSubtitle",componentId:"ilbu78-6"})(["font-size:0.67rem;font-weight:600;letter-spacing:0.161rem;text-transform:uppercase;margin-bottom:0;margin-right:1.5rem;@media screen and (max-width:1680px){font-size:0.56rem;letter-spacing:0.13rem;margin-right:1.2rem;}@media screen and (max-width:1280px){font-size:0.46rem;letter-spacing:0.12rem;margin-right:1rem;}@media screen and (max-width:736px){margin-right:0;margin-bottom:0.9rem;}@media screen and (max-width:480px){& br{display:none;}}@media screen and (max-width:360px){}"]),E=Object(c.b)(u.a).withConfig({displayName:"Banner__StyledButtonIcon",componentId:"ilbu78-7"})(["margin-left:0.7rem;"]),k=Object(c.b)(f.a).withConfig({displayName:"Banner__StyledImg",componentId:"ilbu78-8"})(["& img{object-fit:cover !important;object-position:50% 45% !important;font-family:' object-fit: cover !important; object-position: 50% 50% !important; ';}"]),z=function(e){return o.a.createElement(g,e,o.a.createElement(b,e,o.a.createElement(x,null,e.title),o.a.createElement(w,null),o.a.createElement(y,null,o.a.createElement(v,null,e.subtitle.map(function(e){return[e,o.a.createElement("br",null)]}).reduce(function(e,t){return e.concat(t)}).slice(0,-1)),!0===e.withButton?o.a.createElement(p.a,{to:"/portfolio"},"Check Out My Work",o.a.createElement(E,{icon:"arrow-right"})):"")),o.a.createElement(k,{title:"Background image",alt:"Background image",fluid:e.bgImage.childImageSharp.fluid,backgroundColor:e.bgColor,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:1}}))};z.propTypes={withButton:s.a.bool,title:s.a.string,subtitle:s.a.arrayOf(s.a.string),bgImage:s.a.object,bgColor:s.a.string},z.defaultProps={withButton:!1,bgColor:"#000"};var _=z,C=c.b.button.withConfig({displayName:"SocialButton__StyledButton",componentId:"xlcqzw-0"})(["display:flex;align-items:center;justify-content:center;border-radius:100%;border:none;color:#000;background-color:#fff;cursor:pointer;"," &:hover{background-color:#9bf1ff;color:#000 !important;}&:active{background-color:#53e3fb;}&:focus{outline:none;}"],function(e){switch(e.size){case"large":return Object(c.a)(["height:4rem;width:4rem;font-size:2rem;@media screen and (max-width:1280px){height:3rem;width:3rem;font-size:1.5rem;}@media screen and (max-width:1000px){height:2rem;width:2rem;font-size:1rem;}"]);default:return Object(c.a)(["height:1.75rem;width:1.75rem;margin-right:0.75rem;"])}}),I=function(e){return o.a.createElement(C,e,o.a.createElement(u.a,{icon:e.icon}))};I.propTypes={size:s.a.oneOf(["small","large"])},I.defaultProps={size:"small"};var S=I,B=c.b.div.withConfig({displayName:"TitleText__TitleContainer",componentId:"sc-16vlgrs-0"})([""]),N=c.b.div.withConfig({displayName:"TitleText__Header",componentId:"sc-16vlgrs-1"})(["color:#fff;margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:0;color:inherit;font-weight:600;text-rendering:optimizeLegibility;line-height:1.1;font-size:1.65rem;@media screen and (max-width:1680px){font-size:1.35rem;}@media screen and (max-width:1280px){font-size:1.15rem;}@media screen and (max-width:736px){font-size:1rem;}@media screen and (max-width:480px){font-size:1.15rem;}"]),j=c.b.div.withConfig({displayName:"TitleText__HorizontalLine",componentId:"sc-16vlgrs-2"})(["background-color:#fff;content:'';display:block;height:2px;margin:0.325em 0 0.5em;width:100%;"]),T=function(e){return o.a.createElement(B,null,o.a.createElement(N,null,e.title),o.a.createElement(j,null))};T.propTypes={title:s.a.string.isRequired,underline:s.a.bool},T.defaultProps={underline:!1};var O=T,P=c.b.div.withConfig({displayName:"Contact__StyledContact",componentId:"sc-16to3dp-0"})(["color:#fff;background-color:#000;border-top:1px solid rgba(212,212,255,0.1);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;"]),L=c.b.div.withConfig({displayName:"Contact__TitleTextContainer",componentId:"sc-16to3dp-1"})(["padding:2rem 0rem 2rem 3.778rem;@media screen and (max-width:1680px){padding:2rem 0rem 2rem 3rem;}@media screen and (max-width:1280px){padding:2rem 0rem 2rem 2rem;}@media screen and (max-width:736px){padding:2rem 0rem 2rem 1rem;}"]),q=c.b.div.withConfig({displayName:"Contact__SocialButtonList",componentId:"sc-16to3dp-2"})(["display:flex;align-items:center;justify-content:space-evenly;flex-wrap:wrap;width:100%;margin-bottom:3rem;padding:0 3.778rem;@media screen and (max-width:980px){margin-bottom:1rem;}"]),D=c.b.div.withConfig({displayName:"Contact__SocialButtonContainer",componentId:"sc-16to3dp-3"})(["display:flex;flex-direction:column;align-items:center;flex-basis:25%;@media screen and (max-width:980px){flex-basis:50%;margin-bottom:2rem;}@media screen and (max-width:576px){flex-basis:100%;}&:last-child{margin-right:0;}"]),A=c.b.div.withConfig({displayName:"Contact__SocialButtonTitleContainer",componentId:"sc-16to3dp-4"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;@media screen and (max-width:1280px){font-size:1.1rem;}"]),M=c.b.div.withConfig({displayName:"Contact__SocialButtonTitle",componentId:"sc-16to3dp-5"})(["font-weight:bold;font-size:1.3rem;line-height:1;margin:0.5rem 0;letter-spacing:0.03rem;@media screen and (max-width:1680px){font-size:1.2rem;}@media screen and (max-width:1440px){font-size:1.15rem;}@media screen and (max-width:1280px){font-size:1.1rem;}@media screen and (max-width:1112px){font-size:0.8rem;}@media screen and (max-width:736px){}"]),F=c.b.a.withConfig({displayName:"Contact__SocialButtonTextLink",componentId:"sc-16to3dp-6"})(["text-align:center;opacity:0.8;font-size:0.9rem;letter-spacing:0.05rem;border-bottom:1px dotted;@media screen and (max-width:1680px){font-size:0.8rem;}@media screen and (max-width:1440px){font-size:0.7rem;}@media screen and (max-width:1280px){font-size:0.65rem;}@media screen and (max-width:1112px){font-size:0.58rem;}@media screen and (max-width:1000px){font-size:0.5rem;}&:hover{color:#9bf1ff;}"]),H=function(){return o.a.createElement(P,null,o.a.createElement(L,null,o.a.createElement(O,{title:"Let's keep in touch!"})),o.a.createElement(q,null,o.a.createElement(D,null,o.a.createElement(A,null,o.a.createElement("a",{rel:"noopener noreferrer",href:"mailto:andrew0szucs@gmail.com",target:"_blank"},o.a.createElement(S,{size:"large",icon:"envelope"})),o.a.createElement(M,null,"Email")),o.a.createElement(F,{rel:"noopener noreferrer",href:"mailto:andrew0szucs@gmail.com",target:"_blank"},"andrew0szucs[at]gmail.com")),o.a.createElement(D,null,o.a.createElement(A,null,o.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/andrewszucs",target:"_blank"},o.a.createElement(S,{size:"large",icon:["fab","linkedin"]})),o.a.createElement(M,null,"LinkedIn")),o.a.createElement(F,{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/andrewszucs",target:"_blank"},"linkedin.com/in/andrewszucs")),o.a.createElement(D,null,o.a.createElement(A,null,o.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs",target:"_blank"},o.a.createElement(S,{size:"large",icon:["fab","github"]})),o.a.createElement(M,null,"Github")),o.a.createElement(F,{rel:"noopener noreferrer",href:"https://github.com/andrewszucs",target:"_blank"},"github.com/andrewszucs")),o.a.createElement(D,null,o.a.createElement(A,null,o.a.createElement("a",{rel:"noopener noreferrer",href:"https://twitter.com/andrewszucs",target:"_blank"},o.a.createElement(S,{size:"large",icon:["fab","twitter"]})),o.a.createElement(M,null,"Twitter")),o.a.createElement(F,{href:"https://twitter.com/andrewszucs",target:"_blank",rel:"noopener noreferrer"},"twitter.com/andrewszucs"))))},R=(n(134),c.b.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-9ux7ns-0"})(["display:flex;align-items:center;background-color:#000;border-top:1px solid rgba(212,212,255,0.1);"])),U=c.b.div.withConfig({displayName:"Footer__StyledInner",componentId:"sc-9ux7ns-1"})(["margin:0 auto;max-width:65rem;width:calc(100% - 6rem);padding:",";@media screen and (max-width:480px){text-align:center;align-self:center;}"],function(e){return e.withContacts?"4rem 0 3rem 0":"2rem 0 2rem 0"}),G=c.b.ul.withConfig({displayName:"Footer__ContactIcons",componentId:"sc-9ux7ns-2"})(["display:flex;margin:0 0 1.5rem 0;"]),J=c.b.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-9ux7ns-3"})(["font-size:0.8em;list-style:none;padding-left:0;color:rgba(244,244,255,0.4);display:inline-block;line-height:1;"]),Q=function(e){return!0===e.withContacts?o.a.createElement(R,null,o.a.createElement(U,e,o.a.createElement(G,null,o.a.createElement("a",{href:"mailto:andrew0szucs@gmail.com",target:"_blank"},o.a.createElement(S,{icon:"envelope"})),o.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/andrewszucs",target:"_blank"},o.a.createElement(S,{icon:["fab","linkedin"]})),o.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs",target:"_blank"},o.a.createElement(S,{icon:["fab","github"]})),o.a.createElement("a",{rel:"noopener noreferrer",href:"https://twitter.com/andrewszucs",target:"_blank"},o.a.createElement(S,{icon:["fab","twitter"]}))),o.a.createElement(J,null,"© András Szücs - ",(new Date).getFullYear()))):o.a.createElement(R,null,o.a.createElement(U,e,o.a.createElement(J,null,"© András Szücs - ",(new Date).getFullYear())))};Q.propTypes={withContacts:s.a.bool},Q.defaultProps={withContacts:!1};var X=Q,V=n(137);n(141).b.add(l.a,l.b,l.c,l.e,l.d,d.b,d.c,d.a);var W=c.b.div.withConfig({displayName:"Layout__StyledPage",componentId:"sc-117p9u7-0"})(["display:flex;flex-direction:column;background-color:#000;& a{color:unset;text-decoration:none;}"]),Y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return o.a.createElement(W,null,o.a.createElement(V.a,{transparent:!0,loaded:!0,logoTitle:this.props.logoTitle,logoSubtitle:this.props.logoSubtitle}),o.a.createElement(_,{withButton:this.props.withButton,loaded:!0,title:this.props.title,subtitle:this.props.subtitle,bgImage:this.props.bannerBgImage,bgColor:this.props.bannerBgColor}),this.props.children,!0===this.props.index?o.a.createElement(H,null):"",o.a.createElement(X,{withContacts:!1===this.props.index}))},t}(r.Component);Y.propTypes={index:s.a.bool,withButton:s.a.bool,withContacts:s.a.bool,logoTitle:s.a.string,logoSubtitle:s.a.string,title:s.a.string,subtitle:s.a.arrayOf(s.a.string),bannerBgImage:s.a.object,bannerBgColor:s.a.string},Y.defaultProps={index:!1,withButton:!1,withContacts:!1,logoTitle:"Forty",logoSubtitle:"By HTML5 Up",title:"Hi, my name is Forty",subtitle:["A responsive site template designed by HTML5 UP","and released under the creative commons."]};t.a=Y}}]);
//# sourceMappingURL=component---src-pages-index-js-89bd3e2e3d23d4d9d1ec.js.map