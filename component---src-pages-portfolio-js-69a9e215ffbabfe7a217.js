(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{130:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),o=n(0),i=n.n(o),l=n(132),c=(n(168),n(169)),m=n(139),d=n.n(m),s=Object(l.b)(c.b).withConfig({displayName:"Carousel__StyledDotGroup",componentId:"sc-12bl96k-0"})(["& button{background-color:",";}"],function(e){return e.color}),p=function(e){var t=e.images[0].node.childImageSharp.sizes.aspectRatio;return i.a.createElement(c.a,{naturalSlideWidth:t,naturalSlideHeight:1,totalSlides:e.images.length},i.a.createElement(c.d,null,e.images.map(function(e,t){return i.a.createElement(c.c,{index:t,key:"slide-"+t},i.a.createElement(d.a,{title:"Portfolio item screenshot",alt:"Screenshot",sizes:e.node.childImageSharp.sizes}))})),i.a.createElement(s,{color:e.dotColor}))};p.propTypes={images:a.a.arrayOf(r.any).isRequired,dotColor:a.a.string},p.defaultProps={dotColor:"#fff"};var u=p,f=l.b.div.withConfig({displayName:"PortfolioItem__Container",componentId:"g6rnha-0"})(["--text-color:",";display:flex;align-items:center;justify-content:center;color:var(--text-color);background-color:",";& a{color:var(--text-color);text-decoration:underline;}& a:visited{color:var(--text-color);}@media screen and (max-width:1024px){&:first-child div{margin-top:0;}}"],function(e){return e.color},function(e){return e.bgColor}),g=l.b.div.withConfig({displayName:"PortfolioItem__Inner",componentId:"g6rnha-1"})(["margin:2.5rem 0;width:60%;@media screen and (max-width:1680px){}@media screen and (max-width:1280px){}@media screen and (max-width:980px){}@media screen and (max-width:768px){width:80%;}@media screen and (max-width:480px){width:90%;}@media screen and (max-width:360px){}"]),h=l.b.h3.withConfig({displayName:"PortfolioItem__Title",componentId:"g6rnha-2"})(["padding:0rem 0.2rem;@media screen and (max-width:480px){font-size:1.1rem;}"]),b=l.b.span.withConfig({displayName:"PortfolioItem__TitleName",componentId:"g6rnha-3"})(["font-weight:700;",""],function(e){return void 0!==e.bgColor?Object(l.a)(["background-color:",";padding:0 0.5rem;"],e.bgColor):void 0!==e.color?Object(l.a)(["color:",";"],e.color):void 0}),w=l.b.span.withConfig({displayName:"PortfolioItem__TitlePitch",componentId:"g6rnha-4"})(["font-weight:400;"]),x=l.b.div.withConfig({displayName:"PortfolioItem__CarouselContainer",componentId:"g6rnha-5"})(["margin-bottom:1rem;"]),E=l.b.div.withConfig({displayName:"PortfolioItem__InfoContainer",componentId:"g6rnha-6"})(["display:flex;justify-content:center;@media screen and (max-width:480px){flex-direction:column;}"]),y=l.b.ul.withConfig({displayName:"PortfolioItem__List",componentId:"g6rnha-7"})(["flex-basis:50%;margin-bottom:0;@media screen and (max-width:480px){flex-basis:100%;margin-top:0.5rem;margin-bottom:1rem;align-self:center;margin-left:0;}"]),v=l.b.li.withConfig({displayName:"PortfolioItem__ListItem",componentId:"g6rnha-8"})(["list-style:none;margin:0;font-size:0.567rem;color:",";&::before{content:'■';font-weight:bold;display:inline-block;width:1em;margin-left:-1em;}"],function(e){return e.color?e.color:"#000"}),C=l.b.span.withConfig({displayName:"PortfolioItem__ListItemTitle",componentId:"g6rnha-9"})(["margin-right:0.5rem;text-transform:uppercase;font-weight:bold;letter-spacing:0.03rem;"]),_=l.b.span.withConfig({displayName:"PortfolioItem__ListItemInfo",componentId:"g6rnha-10"})(["color:",";"],function(e){return e.color?e.color:"#000"}),z=l.b.p.withConfig({displayName:"PortfolioItem__Description",componentId:"g6rnha-11"})(["flex-basis:70%;font-size:0.567rem;margin-bottom:0;"]),k=function(e){var t=e.renderTitle,n=e.renderTitleName,r=e.renderTitlePitch,a=e.renderList,l=e.renderDescription;return i.a.createElement(f,{color:e.color,bgColor:e.bgColor},i.a.createElement(g,null,i.a.createElement(h,null,void 0!==t?t({color:e.color}):i.a.createElement(o.Fragment,null,i.a.createElement(b,null,n({color:e.color})),"  —  ",i.a.createElement(w,null,r({color:e.color})))),i.a.createElement(x,null,i.a.createElement(u,{images:e.images,dotColor:e.color})),i.a.createElement(E,null,i.a.createElement(y,null,a({color:e.color})),i.a.createElement(z,null,l()))))};k.propTypes={images:a.a.arrayOf(r.any).isRequired,color:a.a.string,bgColor:a.a.string,renderTitle:a.a.func,renderTitleName:a.a.func,renderTitlePitch:a.a.func,renderList:a.a.func,renderDescription:a.a.func},k.defaultProps={color:"#fff",bgColor:"#2a2f4a",title:"Title"};var I=k,S=n(146),T=n.n(S),N=n(142);n.d(t,"sizedImages",function(){return j}),n.d(t,"pageQuery",function(){return B});t.default=function(e){var t=e.data.BannerBgImgData,n=e.data.TrailImgs.edges,r=e.data.LifeCalendarImgs.edges,a=e.data.MeetupBotImgs.edges,l=e.data.QRAnalyticsImgs.edges,c=e.data.PopulismImgs.edges,m=e.data.SortingHatImgData.edges,d=e.data.ChatlerLandingImgData.edges;return i.a.createElement(N.a,{withButton:!1,withContacts:!0,logoTitle:"András",logoSubtitle:"Szücs",title:"Portfolio",subtitle:["I am passionate about building innovative","products with cutting-edge technology"],bannerBgImage:t,bannerBgColor:"#110023"},i.a.createElement(T.a,{title:"András Szücs - Portfolio"}),i.a.createElement("div",null,i.a.createElement(I,{images:n,color:"#ecf0f1",bgColor:"#110023",renderTitleName:function(){return"Trail"},renderTitlePitch:function(){return"Building the next-generation gaming experience"},renderList:function(e){var t=e.color;return i.a.createElement(o.Fragment,null,i.a.createElement(v,{color:t},i.a.createElement(C,null,"Company:"),i.a.createElement(_,{color:t},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.trail.gg/",target:"_blank"},"Trail Games AB"))),i.a.createElement(v,{color:t},i.a.createElement(C,null,"Role:"),i.a.createElement(_,{color:t},"Frontend Developer")),i.a.createElement(v,{color:t},i.a.createElement(C,null,"Date:"),i.a.createElement(_,{color:t},"2018. May-June")))},renderDescription:function(){return"Developed a frontend application similar to Netflix's web app for a\n            company bringing native quality gaming into the browsers. Worked\n            together with the designer and the CTO to rewrite the frontend\n            client from EmberJS to ReactJS."}}),i.a.createElement(I,{images:r,color:"#000",bgColor:"#dfe6e9",renderTitleName:function(){return"Lifecalendar"},renderTitlePitch:function(){return"Visualizing your life to serve as a daily reminder to only worry about things that truly matter"},renderList:function(){var e="#00000080";return i.a.createElement(o.Fragment,null,i.a.createElement(v,{color:e},i.a.createElement(C,null,"Project:"),i.a.createElement(_,null,"Own Side-project")),i.a.createElement(v,{color:e},i.a.createElement(C,null,"Date:"),i.a.createElement(_,null,"2018. March")),i.a.createElement(v,{color:e},i.a.createElement(C,null,"Demo:"),i.a.createElement(_,{color:e},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://andrewszucs.github.io/lifecalendar/",target:"_blank"},"Visit Demo")," / ",i.a.createElement("a",{rel:"noopener noreferrer",href:"https://chrome.google.com/webstore/detail/lifecalendar-extension/icebmcdnlmgejfkplolagngalhpkjhan",target:"_blank"},"Chrome Store"))),i.a.createElement(v,{color:e},i.a.createElement(C,null,"Code:"),i.a.createElement(_,{color:e},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/lifecalendar",target:"_blank"},"Github repo"))))},renderDescription:function(){return"A Chrome New-tab Extension and web application visualizing how much time you have got to live. \n            Developed with ReactJS with an emphasis on responsivity. \n            During the project I experimented with creating a multi-platform build process \n            for Chrome and the web.\n            "}}),i.a.createElement(I,{images:a,color:"#fff",bgColor:"#0086ff",renderTitle:function(){return i.a.createElement(h,null,i.a.createElement(b,null,"MeetupBot")," — ",i.a.createElement(w,null,"Engaging a MeetupGroup through Messenger"))},renderList:function(e){return e.color,i.a.createElement(o.Fragment,null,i.a.createElement(v,{color:"#fff"},i.a.createElement(C,null,"Project:"),i.a.createElement(_,{color:"#fff"},"Own Side-project")),i.a.createElement(v,{color:"#fff"},i.a.createElement(C,null,"Date:"),i.a.createElement(_,{color:"#fff"},"2016. September")),i.a.createElement(v,{color:"#fff"},i.a.createElement(C,null,"Demo:"),i.a.createElement(_,null,i.a.createElement("a",{rel:"noopener noreferrer",href:"https://youtu.be/xU7-SJ-9mfU",target:"_blank"},"Watch on YouTube"))),i.a.createElement(v,{color:"#fff"},i.a.createElement(C,null,"Code:"),i.a.createElement(_,null,i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/bpbotsmeetup",target:"_blank"},"Github repo"))))},renderDescription:function(){return"A Messenger Chatbot application developed for the Budapest Bots Meetup group \n          to engage the participants both during and in-between meetups. \n          Features include: automatic meetup notification, event information, newsletter subscription, \n          Q&A question submission and feedback sending. Developed with NodeJS and MongoDB."}}),i.a.createElement(I,{images:l,color:"#d2dae2",bgColor:"#000",renderTitleName:function(){return"QuikReply Analytics"},renderTitlePitch:function(){return"Exploring what an Analytics service could look like for chatbots"},renderList:function(e){var t=e.color;return i.a.createElement(o.Fragment,null,i.a.createElement(v,{color:"#ffffff"},i.a.createElement(C,null,"Project:"),i.a.createElement(_,{color:t},"Bachelor Thesis")),i.a.createElement(v,{color:"#ffffff"},i.a.createElement(C,null,"Date:"),i.a.createElement(_,{color:t},"2017. May")),i.a.createElement(v,{color:"#ffffff"},i.a.createElement(C,null,"Code:"),i.a.createElement(_,{color:t},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/quikreply-bot",target:"_blank"},"Github repo"))))},renderDescription:function(){return"All-in-one chatbot and analytics application for Messenger.\n          Designed and developed the project on my own using ReactJS, NodeJS and \n          Machine Learning tools in Python for the Natural Language Processing API.\n          Used testing tools such as Jest and Tape during the development.\n            "}}),i.a.createElement(I,{images:d,color:"#5324fb",bgColor:"#daf5fd",renderTitleName:function(){return"Chatler.ai website"},renderTitlePitch:function(){return'Presenting the value proposition of an automatic "chat-butler"'},renderList:function(e){var t=e.color;return i.a.createElement(o.Fragment,null,i.a.createElement(v,{color:t},i.a.createElement(C,null,"Company:"),i.a.createElement(_,{color:t},"Chatler.ai Ltd")),i.a.createElement(v,{color:t},i.a.createElement(C,null,"Date:"),i.a.createElement(_,{color:t},"2017. January")))},renderDescription:function(){return"Landing page developed for the Chatler.ai company.\n          Combined Gulp, Pug and SASS to create a Static-Site Generator behind the website, which provides:\n          compilation commands, live reloading and easy deployment to AWS..\n          "}}),i.a.createElement(I,{images:c,color:"#000",bgColor:"#fff",renderTitleName:function(){return"Populist Countries"},renderTitlePitch:function(){return"Exploring the factors that could contribute to the rise of populism through information visualization"},renderList:function(e){var t=e.color;return i.a.createElement(o.Fragment,null,i.a.createElement(v,{color:"#000000"},i.a.createElement(C,null,"Project:"),i.a.createElement(_,{color:t},"School Project")),i.a.createElement(v,{color:"#000000"},i.a.createElement(C,null,"Date:"),i.a.createElement(_,{color:t},"2018. February")),i.a.createElement(v,{color:"#000000"},i.a.createElement(C,null,"Demo:"),i.a.createElement(_,{color:t},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://andrewszucs.github.io/info-viz-project2/",target:"_blank"},"Visit Demo"))),i.a.createElement(v,{color:"#000000"},i.a.createElement(C,null,"Code:"),i.a.createElement(_,{color:t},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/info-viz-project2",target:"_blank"},"Github repo"))))},renderDescription:function(){return"Combined data from the World Values Survey and Gapminder to help the exploration of countries\n          around the world in regards to the rise of populism. Used ReactJS to develop the visualization\n          components.\n            "}}),i.a.createElement(I,{images:m,color:"#000",bgColor:"#fbc531",renderTitleName:function(){return"The Sorting Hat"},renderTitlePitch:function(){return"Creating fair groups in a university class with the use of data exploration"},renderList:function(e){var t=e.color;return i.a.createElement(o.Fragment,null,i.a.createElement(v,{color:"#000"},i.a.createElement(C,null,"Project:"),i.a.createElement(_,{color:t},"School Project")),i.a.createElement(v,{color:"#000"},i.a.createElement(C,null,"Date:"),i.a.createElement(_,{color:t},"2018. January")),i.a.createElement(v,{color:"#000"},i.a.createElement(C,null,"Demo:"),i.a.createElement(_,{color:t},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://andrewszucs.github.io/info-viz-project1/",target:"_blank"},"Visit Demo"))),i.a.createElement(v,{color:"#000"},i.a.createElement(C,null,"Code:"),i.a.createElement(_,{color:t},i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/info-viz-project1",target:"_blank"},"Github repo"))))},renderDescription:function(){return"Visualized survey data for the Information Visualization class of 2018 \n          at KTH Stockholm. The web application includes an automatic group creator and the \n          tool to fine-tune the selections. Used the KMeans clustering algorithm to group the students\n          based on their interests as well.\n            "}})))};var j="1077402098",B="2708533806"},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return u});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(133),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var m=n(135),d=n.n(m);n.d(t,"PageRenderer",function(){return d.a});var s=n(29);n.d(t,"parsePath",function(){return s.a});var p=a.a.createContext({}),u=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},135:function(e,t,n){var r;e.exports=(r=n(136))&&r.default||r},136:function(e,t,n){"use strict";n.r(t);n(28);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=n(47),c=n(2),m=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};m.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=m},137:function(e,t,n){"use strict";var r=n(132),a=n(134),o=n(4),i=n.n(o),l=n(0),c=n.n(l),m=r.b.div.withConfig({displayName:"NavBar__StyledNavBar",componentId:"sc-1pbwsai-0"})(["height:3.07rem;letter-spacing:0.236rem;line-height:4.1;position:fixed;z-index:10000;left:0;top:0;display:flex;width:100%;margin:0;color:white;background-color:#2a2f4a;box-shadow:0 0 0.25rem 0 rgba(0,0,0,0.15);font-weight:bold;text-transform:uppercase;cursor:default;"," opacity:0;"," @media screen and (max-width:1680px){letter-spacing:0.2rem;line-height:4;}@media screen and (max-width:1280px){letter-spacing:0.17rem;}@media screen and (max-width:980px){line-height:4.1;}@media screen and (max-width:736px){line-height:3.5;}@media screen and (max-width:480px){}@media screen and (max-width:360px){}"],function(e){return!0===e.transparent?Object(r.a)(["animation:none;background-color:transparent;box-shadow:none;position:absolute;transition:opacity 2.5s ease;transition-delay:0.75s;"]):""},function(e){return!0===e.loaded||void 0===e.loaded?Object(r.a)(["opacity:1;"]):""}),d=Object(r.b)(a.Link).withConfig({displayName:"NavBar__StyledLogoLink",componentId:"sc-1pbwsai-1"})(["font-size:0.755rem;border:0;display:inline-block;height:inherit;padding:0 1.14rem;text-decoration:none;transition:color 0.2s ease-in-out,border-bottom-color 0.2s ease-in-out;cursor:pointer;& strong{line-height:1.24rem;color:#242943;background-color:#fff;display:inline-block;margin-right:0.25rem;padding:0 0.1rem 0 0.28rem;transition:background-color 0.2s ease-in-out,color 0.2s ease-in-out;}&:hover{color:#9bf1ff;}&:hover strong{background-color:#9bf1ff;}&:active{color:#53e3fb;}&:active strong{background-color:#53e3fb;}@media screen and (max-width:1680px){font-size:0.62rem;padding:0 0 0 0.9rem;& strong{line-height:1rem;margin-right:0.18rem;padding:0 0.07rem 0 0.25rem;}}@media screen and (max-width:1280px){font-size:0.53rem;padding:0 0.8rem;& strong{line-height:0.9rem;margin-right:0.17rem;padding:0 0.05rem 0 0.2rem;}}@media screen and (max-width:736px){padding:0 0.55rem;}@media screen and (max-width:480px){& span{display:none;}}@media screen and (max-width:360px){}"]),s=r.b.nav.withConfig({displayName:"NavBar__StyledNav",componentId:"sc-1pbwsai-2"})(["display:flex;flex-grow:1;justify-content:flex-end;"]),p=r.b.div.withConfig({displayName:"NavBar__MenuButton",componentId:"sc-1pbwsai-3"})(["display:none;& p{cursor:pointer;display:block;font-size:0.75rem;transition:color 0.2s ease-in-out,border-bottom-color 0.2s ease-in-out;margin-bottom:0;}&:hover p{color:#9bf1ff;}&:active p{color:#53e3fb;}&:hover line{stroke:#9bf1ff;}&:active line{stroke:#53e3fb;}@media screen and (max-width:980px){}"]),u=r.b.div.withConfig({displayName:"NavBar__HamburgerIcon",componentId:"sc-1pbwsai-4"})(["cursor:pointer;display:flex;align-items:center;padding-right:1.5rem;padding-left:0.42rem;& line{stroke-width:2px;stroke:#ffffff;}"]),f=r.b.ul.withConfig({displayName:"NavBar__NavItems",componentId:"sc-1pbwsai-5"})(["display:flex;font-size:0.75rem;letter-spacing:0.1rem;& li{list-style:none;padding-right:1.5rem;cursor:pointer;text-shadow:0px 2px 7px #000;}& li:hover{color:#9bf1ff;}& li:active{color:#9bf1ff;}@media screen and (max-width:1680px){font-size:0.62rem;}@media screen and (max-width:1280px){font-size:0.53rem;}@media screen and (max-width:980px){}@media screen and (max-width:736px){& li{padding-right:1.2rem;}& li:last-child{padding-right:0.55rem;}}@media screen and (max-width:480px){margin-left:0;& li{padding-right:1rem;}}@media screen and (max-width:360px){& li{padding-right:0.6rem;}& li:last-child{padding-right:0.3rem;}}"]),g=function(e){return c.a.createElement(a.Link,{to:e.to,activeStyle:{color:"#9bf1ff",cursor:"default"}},e.children)},h=function(e){return c.a.createElement(m,e,c.a.createElement(d,{to:"/",activeStyle:{cursor:"default"}},c.a.createElement("strong",null,e.logoTitle)," ",c.a.createElement("span",null,e.logoSubtitle)),c.a.createElement(s,null,c.a.createElement(f,null,c.a.createElement("li",null,c.a.createElement(g,{to:"/"},"About Me")),c.a.createElement("li",null,c.a.createElement(g,{to:"/portfolio"},"Portfolio"))),c.a.createElement(p,null,c.a.createElement("p",null,"Menu"),c.a.createElement(u,null,c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"32",viewBox:"0 0 24 32",preserveAspectRatio:"none"},c.a.createElement("line",{x1:"0",y1:"11",x2:"24",y2:"11"}),c.a.createElement("line",{x1:"0",y1:"21",x2:"24",y2:"21"}),c.a.createElement("line",{x1:"0",y1:"16",x2:"24",y2:"16"}))))))};h.propTypes={transparent:i.a.bool,logoTitle:i.a.string,logoSubtitle:i.a.string},h.defaultProps={transparent:!1},t.a=h},138:function(e,t,n){"use strict";n(28),n(145);var r=n(132),a=n(134),o=n(4),i=n.n(o),l=n(0),c=n.n(l),m=function(e){return Object(r.b)(e).withConfig({displayName:"Button",componentId:"sc-1x5qrk2-0"})(["border:0;border-radius:0;cursor:pointer;display:flex;align-items:center;justify-content:center;text-transform:uppercase;transition:background-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out,color 0.2s ease-in-out;white-space:nowrap;font-weight:600;letter-spacing:0.25em;padding:0 1.75em;height:3.5em;"," "," "," "," "," &:focus{outline:none;}"],function(e){return!0===e.fit?Object(r.a)(["width:100%;"]):""},function(e){switch(e.size){case"large":return Object(r.a)(["font-size:1.25em;height:3em;line-height:3em;"]);case"small":return Object(r.a)(["font-size:0.6rem;"]);default:return Object(r.a)(["font-size:0.76rem;@media screen and (max-width:1680px){font-size:0.6rem;}@media screen and (max-width:1280px){font-size:0.53rem;}"])}},function(e){return!0===e.disabled?Object(r.a)(["cursor:default;opacity:0.25;pointer-events:none;"]):""},function(e){return!0===e.primary?Object(r.a)(["background-color:#fff;box-shadow:none;color:#242943;&:hover{background-color:#9bf1ff;color:#242943 !important;}&:active{background-color:#53e3fb;}"]):Object(r.a)(["background-color:transparent;box-shadow:inset 0 0 0 2px #fff;color:#fff;&:hover{box-shadow:inset 0 0 0 2px #9bf1ff;color:#9bf1ff;border-bottom-color:transparent;}&:active{background-color:rgba(155,241,255,0.1);box-shadow:inset 0 0 0 2px #53e3fb;color:#53e3fb;}"])},function(e){return!0===e.alternate?Object(r.a)(["background-color:#000;color:#fff;"]):""})},d=function(e){if(e.to.startsWith("http")){var t=m(function(e){return c.a.createElement("a",Object.assign({target:"_blank",rel:"noopener noreferrer",href:e.to},e))});return c.a.createElement(t,e,e.children)}var n=m(a.Link);return c.a.createElement(n,e,e.children)};d.propTypes={children:i.a.node.isRequired,size:i.a.oneOf(["small","medium","large"]),primary:i.a.bool,fit:i.a.bool,disabled:i.a.bool,onClick:i.a.func,to:i.a.string,alternate:i.a.bool},d.defaultProps={to:"/",size:"medium",primary:!1,fit:!1,disabled:!1,alternate:!1},t.a=d},142:function(e,t,n){"use strict";var r=n(6),a=n.n(r),o=n(0),i=n.n(o),l=n(149),c=n(150),m=n(4),d=n.n(m),s=n(132),p=n(138),u=n(140),f=n(139),g=n.n(f),h=s.b.div.withConfig({displayName:"Banner__StyledBanner",componentId:"ilbu78-0"})(["color:white;max-height:50rem;height:60vh;min-height:22.7rem;align-items:center;border-bottom:0 !important;cursor:default;display:flex;padding:2.75rem 0 0 0;position:relative;@media screen and (max-width:1680px){padding:2rem 0 0 0;min-height:23.35rem;}@media screen and (max-width:1280px){padding:1.85rem 0 0 0;min-height:14.65rem;height:54vh;}@media screen and (max-width:980px){padding:2rem 0 0 0;min-height:20rem;}@media screen and (max-width:736px){height:auto;max-height:none;min-height:0;padding:3.6rem 0 0 0;}@media screen and (max-width:480px){padding:5.7rem 0 0rem 0;}@media screen and (max-width:360px){}"]),b=s.b.div.withConfig({displayName:"Banner__StyledInner",componentId:"ilbu78-1"})(["margin:0 auto;max-width:60.8rem;width:calc(100% - 6rem);position:relative;opacity:0;filter:blur(0.125em);transform:translateX(-0.5em);transition:opacity 1.5s ease,transform 0.5s ease-out,filter 0.5s ease,-webkit-filter 0.5s ease;z-index:3;"," @media screen and (max-width:1680px){width:calc(100% - 4.65rem);max-width:50.5rem;}@media screen and (max-width:1280px){width:calc(100% - 4rem);max-width:43.3rem;}@media screen and (max-width:980px){width:calc(100% - 4rem);}@media screen and (max-width:736px){width:calc(100% - 2rem);}@media screen and (max-width:480px){}@media screen and (max-width:360px){}"],function(e){return!0===e.loaded||void 0===e.loaded?Object(s.a)(["opacity:1;filter:none;transform:translateX(0);"]):""}),w=(s.b.div.withConfig({displayName:"Banner__StyledColorOverlay",componentId:"ilbu78-2"})(["content:'';display:block;height:100%;left:0;opacity:0.85;pointer-events:none;position:absolute;top:0;transition:opacity 2.5s ease;transition-delay:0.75s;width:100%;z-index:2;overflow:hidden;"]),s.b.h1.withConfig({displayName:"Banner__StyledTitle",componentId:"ilbu78-3"})(["font-size:3.08rem;margin-bottom:0;letter-spacing:0.02rem;@media screen and (max-width:1680px){font-size:2.525rem;}@media screen and (max-width:1280px){font-size:2.16rem;letter-spacing:0.02rem;}@media screen and (max-width:736px){font-size:1.35rem;}@media screen and (max-width:480px){font-size:1.33rem;}@media screen and (max-width:360px){}"])),x=s.b.div.withConfig({displayName:"Banner__StyledHorizontalLine",componentId:"ilbu78-4"})(["background-color:#fff;content:'';display:block;height:2px;margin:1.89rem 0;width:100%;@media screen and (max-width:1680px){margin:1.5rem 0;}@media screen and (max-width:1280px){margin:1.3rem 0;}@media screen and (max-width:736px){margin:0.8rem 0 1.3rem 0;}@media screen and (max-width:480px){}@media screen and (max-width:360px){}"]),E=s.b.div.withConfig({displayName:"Banner__StyledSubtitleContainer",componentId:"ilbu78-5"})(["display:flex;align-items:center;@media screen and (max-width:736px){flex-direction:column;align-items:flex-start;margin-bottom:2rem;}"]),y=s.b.p.withConfig({displayName:"Banner__StyledSubtitle",componentId:"ilbu78-6"})(["font-size:0.67rem;font-weight:600;letter-spacing:0.161rem;text-transform:uppercase;margin-bottom:0;margin-right:1.5rem;@media screen and (max-width:1680px){font-size:0.56rem;letter-spacing:0.13rem;margin-right:1.2rem;}@media screen and (max-width:1280px){font-size:0.46rem;letter-spacing:0.12rem;margin-right:1rem;}@media screen and (max-width:736px){margin-right:0;margin-bottom:0.9rem;}@media screen and (max-width:480px){& br{display:none;}}@media screen and (max-width:360px){}"]),v=Object(s.b)(u.a).withConfig({displayName:"Banner__StyledButtonIcon",componentId:"ilbu78-7"})(["margin-left:0.7rem;"]),C=Object(s.b)(g.a).withConfig({displayName:"Banner__StyledImg",componentId:"ilbu78-8"})(["& img{object-fit:cover !important;object-position:50% 45% !important;font-family:' object-fit: cover !important; object-position: 50% 50% !important; ';}"]),_=function(e){return i.a.createElement(h,e,i.a.createElement(b,e,i.a.createElement(w,null,e.title),i.a.createElement(x,null),i.a.createElement(E,null,i.a.createElement(y,null,e.subtitle.map(function(e){return[e,i.a.createElement("br",null)]}).reduce(function(e,t){return e.concat(t)}).slice(0,-1)),!0===e.withButton?i.a.createElement(p.a,{to:"/portfolio"},"Check Out My Work",i.a.createElement(v,{icon:"arrow-right"})):"")),i.a.createElement(C,{title:"Background image",alt:"Background image",fluid:e.bgImage.childImageSharp.fluid,backgroundColor:e.bgColor,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%",zIndex:1}}))};_.propTypes={withButton:d.a.bool,title:d.a.string,subtitle:d.a.arrayOf(d.a.string),bgImage:d.a.object,bgColor:d.a.string},_.defaultProps={withButton:!1,bgColor:"#000"};var z=_,k=s.b.button.withConfig({displayName:"SocialButton__StyledButton",componentId:"xlcqzw-0"})(["display:flex;align-items:center;justify-content:center;border-radius:100%;border:none;color:#000;background-color:#fff;cursor:pointer;"," &:hover{background-color:#9bf1ff;color:#000 !important;}&:active{background-color:#53e3fb;}&:focus{outline:none;}"],function(e){switch(e.size){case"large":return Object(s.a)(["height:4rem;width:4rem;font-size:2rem;@media screen and (max-width:1280px){height:3rem;width:3rem;font-size:1.5rem;}@media screen and (max-width:1000px){height:2rem;width:2rem;font-size:1rem;}"]);default:return Object(s.a)(["height:1.75rem;width:1.75rem;margin-right:0.75rem;"])}}),I=function(e){return i.a.createElement(k,e,i.a.createElement(u.a,{icon:e.icon}))};I.propTypes={size:d.a.oneOf(["small","large"])},I.defaultProps={size:"small"};var S=I,T=s.b.div.withConfig({displayName:"TitleText__TitleContainer",componentId:"sc-16vlgrs-0"})([""]),N=s.b.div.withConfig({displayName:"TitleText__Header",componentId:"sc-16vlgrs-1"})(["color:#fff;margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:0;color:inherit;font-weight:600;text-rendering:optimizeLegibility;line-height:1.1;font-size:1.65rem;@media screen and (max-width:1680px){font-size:1.35rem;}@media screen and (max-width:1280px){font-size:1.15rem;}@media screen and (max-width:736px){font-size:1rem;}@media screen and (max-width:480px){font-size:1.15rem;}"]),j=s.b.div.withConfig({displayName:"TitleText__HorizontalLine",componentId:"sc-16vlgrs-2"})(["background-color:#fff;content:'';display:block;height:2px;margin:0.325em 0 0.5em;width:100%;"]),B=function(e){return i.a.createElement(T,null,i.a.createElement(N,null,e.title),i.a.createElement(j,null))};B.propTypes={title:d.a.string.isRequired,underline:d.a.bool},B.defaultProps={underline:!1};var P=B,D=s.b.div.withConfig({displayName:"Contact__StyledContact",componentId:"sc-16to3dp-0"})(["color:#fff;background-color:#000;border-top:1px solid rgba(212,212,255,0.1);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;"]),L=s.b.div.withConfig({displayName:"Contact__TitleTextContainer",componentId:"sc-16to3dp-1"})(["padding:2rem 0rem 2rem 3.778rem;@media screen and (max-width:1680px){padding:2rem 0rem 2rem 3rem;}@media screen and (max-width:1280px){padding:2rem 0rem 2rem 2rem;}@media screen and (max-width:736px){padding:2rem 0rem 2rem 1rem;}"]),O=s.b.div.withConfig({displayName:"Contact__SocialButtonList",componentId:"sc-16to3dp-2"})(["display:flex;align-items:center;justify-content:space-evenly;flex-wrap:wrap;width:100%;margin-bottom:3rem;padding:0 3.778rem;@media screen and (max-width:980px){margin-bottom:1rem;}"]),F=s.b.div.withConfig({displayName:"Contact__SocialButtonContainer",componentId:"sc-16to3dp-3"})(["display:flex;flex-direction:column;align-items:center;flex-basis:25%;@media screen and (max-width:980px){flex-basis:50%;margin-bottom:2rem;}@media screen and (max-width:576px){flex-basis:100%;}&:last-child{margin-right:0;}"]),q=s.b.div.withConfig({displayName:"Contact__SocialButtonTitleContainer",componentId:"sc-16to3dp-4"})(["display:flex;flex-direction:column;align-items:center;justify-content:center;@media screen and (max-width:1280px){font-size:1.1rem;}"]),M=s.b.div.withConfig({displayName:"Contact__SocialButtonTitle",componentId:"sc-16to3dp-5"})(["font-weight:bold;font-size:1.3rem;line-height:1;margin:0.5rem 0;letter-spacing:0.03rem;@media screen and (max-width:1680px){font-size:1.2rem;}@media screen and (max-width:1440px){font-size:1.15rem;}@media screen and (max-width:1280px){font-size:1.1rem;}@media screen and (max-width:1112px){font-size:0.8rem;}@media screen and (max-width:736px){}"]),R=s.b.a.withConfig({displayName:"Contact__SocialButtonTextLink",componentId:"sc-16to3dp-6"})(["text-align:center;opacity:0.8;font-size:0.9rem;letter-spacing:0.05rem;border-bottom:1px dotted;@media screen and (max-width:1680px){font-size:0.8rem;}@media screen and (max-width:1440px){font-size:0.7rem;}@media screen and (max-width:1280px){font-size:0.65rem;}@media screen and (max-width:1112px){font-size:0.58rem;}@media screen and (max-width:1000px){font-size:0.5rem;}&:hover{color:#9bf1ff;}"]),A=function(){return i.a.createElement(D,null,i.a.createElement(L,null,i.a.createElement(P,{title:"Let's keep in touch!"})),i.a.createElement(O,null,i.a.createElement(F,null,i.a.createElement(q,null,i.a.createElement("a",{rel:"noopener noreferrer",href:"mailto:andrew0szucs@gmail.com",target:"_blank"},i.a.createElement(S,{size:"large",icon:"envelope"})),i.a.createElement(M,null,"Email")),i.a.createElement(R,{rel:"noopener noreferrer",href:"mailto:andrew0szucs@gmail.com",target:"_blank"},"andrew0szucs[at]gmail.com")),i.a.createElement(F,null,i.a.createElement(q,null,i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/andrewszucs",target:"_blank"},i.a.createElement(S,{size:"large",icon:["fab","linkedin"]})),i.a.createElement(M,null,"LinkedIn")),i.a.createElement(R,{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/andrewszucs",target:"_blank"},"linkedin.com/in/andrewszucs")),i.a.createElement(F,null,i.a.createElement(q,null,i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs",target:"_blank"},i.a.createElement(S,{size:"large",icon:["fab","github"]})),i.a.createElement(M,null,"Github")),i.a.createElement(R,{rel:"noopener noreferrer",href:"https://github.com/andrewszucs",target:"_blank"},"github.com/andrewszucs")),i.a.createElement(F,null,i.a.createElement(q,null,i.a.createElement("a",{rel:"noopener noreferrer",href:"https://twitter.com/andrewszucs",target:"_blank"},i.a.createElement(S,{size:"large",icon:["fab","twitter"]})),i.a.createElement(M,null,"Twitter")),i.a.createElement(R,{href:"https://twitter.com/andrewszucs",target:"_blank",rel:"noopener noreferrer"},"twitter.com/andrewszucs"))))},G=(n(134),s.b.div.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-9ux7ns-0"})(["display:flex;align-items:center;background-color:#000;border-top:1px solid rgba(212,212,255,0.1);"])),J=s.b.div.withConfig({displayName:"Footer__StyledInner",componentId:"sc-9ux7ns-1"})(["margin:0 auto;max-width:65rem;width:calc(100% - 6rem);padding:",";@media screen and (max-width:480px){text-align:center;align-self:center;}"],function(e){return e.withContacts?"4rem 0 3rem 0":"2rem 0 2rem 0"}),H=s.b.ul.withConfig({displayName:"Footer__ContactIcons",componentId:"sc-9ux7ns-2"})(["display:flex;margin:0 0 1.5rem 0;"]),U=s.b.div.withConfig({displayName:"Footer__Copyright",componentId:"sc-9ux7ns-3"})(["font-size:0.8em;list-style:none;padding-left:0;color:rgba(244,244,255,0.4);display:inline-block;line-height:1;"]),Q=function(e){return!0===e.withContacts?i.a.createElement(G,null,i.a.createElement(J,e,i.a.createElement(H,null,i.a.createElement("a",{href:"mailto:andrew0szucs@gmail.com",target:"_blank"},i.a.createElement(S,{icon:"envelope"})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/andrewszucs",target:"_blank"},i.a.createElement(S,{icon:["fab","linkedin"]})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs",target:"_blank"},i.a.createElement(S,{icon:["fab","github"]})),i.a.createElement("a",{rel:"noopener noreferrer",href:"https://twitter.com/andrewszucs",target:"_blank"},i.a.createElement(S,{icon:["fab","twitter"]}))),i.a.createElement(U,null,"© András Szücs - ",(new Date).getFullYear()))):i.a.createElement(G,null,i.a.createElement(J,e,i.a.createElement(U,null,"© András Szücs - ",(new Date).getFullYear())))};Q.propTypes={withContacts:d.a.bool},Q.defaultProps={withContacts:!1};var V=Q,W=n(137);n(141).b.add(l.a,l.b,l.c,l.e,l.d,c.b,c.c,c.a);var Y=s.b.div.withConfig({displayName:"Layout__StyledPage",componentId:"sc-117p9u7-0"})(["display:flex;flex-direction:column;background-color:#000;& a{color:unset;text-decoration:none;}"]),K=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return i.a.createElement(Y,null,i.a.createElement(W.a,{transparent:!0,loaded:!0,logoTitle:this.props.logoTitle,logoSubtitle:this.props.logoSubtitle}),i.a.createElement(z,{withButton:this.props.withButton,loaded:!0,title:this.props.title,subtitle:this.props.subtitle,bgImage:this.props.bannerBgImage,bgColor:this.props.bannerBgColor}),this.props.children,!0===this.props.index?i.a.createElement(A,null):"",i.a.createElement(V,{withContacts:!1===this.props.index}))},t}(o.Component);K.propTypes={index:d.a.bool,withButton:d.a.bool,withContacts:d.a.bool,logoTitle:d.a.string,logoSubtitle:d.a.string,title:d.a.string,subtitle:d.a.arrayOf(d.a.string),bannerBgImage:d.a.object,bannerBgColor:d.a.string},K.defaultProps={index:!1,withButton:!1,withContacts:!1,logoTitle:"Forty",logoSubtitle:"By HTML5 Up",title:"Hi, my name is Forty",subtitle:["A responsive site template designed by HTML5 UP","and released under the creative commons."]};t.a=K},168:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-69a9e215ffbabfe7a217.js.map