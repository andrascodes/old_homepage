(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{131:function(e,t,r){"use strict";r.r(t);var n=r(4),a=r.n(n),o=r(0),l=r.n(o),i=r(132),c=(r(168),r(169)),m=r(136),s=r.n(m),d=Object(i.b)(c.b).withConfig({displayName:"Carousel__StyledDotGroup",componentId:"sc-12bl96k-0"})(["& button{background-color:",";}"],function(e){return e.color}),u=function(e){var t=e.images[0].node.childImageSharp.sizes.aspectRatio;return l.a.createElement(c.a,{naturalSlideWidth:t,naturalSlideHeight:1,totalSlides:e.images.length},l.a.createElement(c.d,null,e.images.map(function(e,t){return l.a.createElement(c.c,{index:t,key:"slide-"+t},l.a.createElement(s.a,{title:"Portfolio item screenshot",alt:"Screenshot",sizes:e.node.childImageSharp.sizes}))})),l.a.createElement(d,{color:e.dotColor}))};u.propTypes={images:a.a.arrayOf(n.any).isRequired,dotColor:a.a.string},u.defaultProps={dotColor:"#fff"};var f=u,g=i.b.div.withConfig({displayName:"PortfolioItem__Container",componentId:"g6rnha-0"})(["--text-color:",";display:flex;align-items:center;justify-content:center;color:var(--text-color);background-color:",";& a{color:var(--text-color);text-decoration:underline;}& a:visited{color:var(--text-color);}@media screen and (max-width:1024px){&:first-child div{margin-top:0;}}"],function(e){return e.color},function(e){return e.bgColor}),p=i.b.div.withConfig({displayName:"PortfolioItem__Inner",componentId:"g6rnha-1"})(["margin:2.5rem 0;width:60%;@media screen and (max-width:1680px){}@media screen and (max-width:1280px){}@media screen and (max-width:980px){}@media screen and (max-width:768px){width:80%;}@media screen and (max-width:480px){width:90%;}@media screen and (max-width:360px){}"]),h=i.b.h3.withConfig({displayName:"PortfolioItem__Title",componentId:"g6rnha-2"})(["padding:0rem 0.2rem;@media screen and (max-width:480px){font-size:1.1rem;}"]),E=i.b.span.withConfig({displayName:"PortfolioItem__TitleName",componentId:"g6rnha-3"})(["font-weight:700;",""],function(e){return void 0!==e.bgColor?Object(i.a)(["background-color:",";padding:0 0.5rem;"],e.bgColor):void 0!==e.color?Object(i.a)(["color:",";"],e.color):void 0}),b=i.b.span.withConfig({displayName:"PortfolioItem__TitlePitch",componentId:"g6rnha-4"})(["font-weight:400;"]),w=i.b.div.withConfig({displayName:"PortfolioItem__CarouselContainer",componentId:"g6rnha-5"})(["margin-bottom:1rem;"]),v=i.b.div.withConfig({displayName:"PortfolioItem__InfoContainer",componentId:"g6rnha-6"})(["display:flex;justify-content:center;@media screen and (max-width:480px){flex-direction:column;}"]),y=i.b.ul.withConfig({displayName:"PortfolioItem__List",componentId:"g6rnha-7"})(["flex-basis:50%;margin-bottom:0;@media screen and (max-width:480px){flex-basis:100%;margin-top:0.5rem;margin-bottom:1rem;align-self:center;margin-left:0;}"]),C=i.b.li.withConfig({displayName:"PortfolioItem__ListItem",componentId:"g6rnha-8"})(["list-style:none;margin:0;font-size:0.567rem;color:",";&::before{content:'■';font-weight:bold;display:inline-block;width:1em;margin-left:-1em;}"],function(e){return e.color?e.color:"#000"}),I=i.b.span.withConfig({displayName:"PortfolioItem__ListItemTitle",componentId:"g6rnha-9"})(["margin-right:0.5rem;text-transform:uppercase;font-weight:bold;letter-spacing:0.03rem;"]),x=i.b.span.withConfig({displayName:"PortfolioItem__ListItemInfo",componentId:"g6rnha-10"})(["color:",";"],function(e){return e.color?e.color:"#000"}),D=i.b.p.withConfig({displayName:"PortfolioItem__Description",componentId:"g6rnha-11"})(["flex-basis:70%;font-size:0.567rem;margin-bottom:0;"]),P=function(e){var t=e.renderTitle,r=e.renderTitleName,n=e.renderTitlePitch,a=e.renderList,i=e.renderDescription;return l.a.createElement(g,{color:e.color,bgColor:e.bgColor},l.a.createElement(p,null,l.a.createElement(h,null,void 0!==t?t({color:e.color}):l.a.createElement(o.Fragment,null,l.a.createElement(E,null,r({color:e.color})),"  —  ",l.a.createElement(b,null,n({color:e.color})))),l.a.createElement(w,null,l.a.createElement(f,{images:e.images,dotColor:e.color})),l.a.createElement(v,null,l.a.createElement(y,null,a({color:e.color})),l.a.createElement(D,null,i()))))};P.propTypes={images:a.a.arrayOf(n.any).isRequired,color:a.a.string,bgColor:a.a.string,renderTitle:a.a.func,renderTitleName:a.a.func,renderTitlePitch:a.a.func,renderList:a.a.func,renderDescription:a.a.func},P.defaultProps={color:"#fff",bgColor:"#2a2f4a",title:"Title"};var T=P,_=r(145);r.d(t,"sizedImages",function(){return S}),r.d(t,"pageQuery",function(){return k});t.default=function(e){var t=e.data.BannerBgImgData,r=e.data.TrailImgs.edges,n=e.data.ColiviaImgs.edges,a=e.data.LifeCalendarImgs.edges,i=e.data.MeetupBotImgs.edges,c=e.data.QRAnalyticsImgs.edges,m=e.data.PopulismImgs.edges,s=e.data.SortingHatImgData.edges,d=e.data.ChatlerLandingImgData.edges;return l.a.createElement(_.a,{withButton:!1,withContacts:!0,logoTitle:"András",logoSubtitle:"Szücs",title:"Portfolio",subtitle:["I am passionate about building innovative","products with cutting-edge technology"],bannerBgImage:t,bannerBgColor:"#110023",pageTitle:"Portfolio"},l.a.createElement("div",null,l.a.createElement(T,{images:r,color:"#ecf0f1",bgColor:"#110023",renderTitleName:function(){return"Trail"},renderTitlePitch:function(){return"Building the next-generation gaming experience"},renderList:function(e){var t=e.color;return l.a.createElement(o.Fragment,null,l.a.createElement(C,{color:t},l.a.createElement(I,null,"Company:"),l.a.createElement(x,{color:t},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://www.trail.gg/",target:"_blank"},"Trail Games AB"))),l.a.createElement(C,{color:t},l.a.createElement(I,null,"Role:"),l.a.createElement(x,{color:t},"Frontend Developer")),l.a.createElement(C,{color:t},l.a.createElement(I,null,"Date:"),l.a.createElement(x,{color:t},"2018. May-June")))},renderDescription:function(){return"Developed a frontend application similar to Netflix's web app for a\n            company bringing native quality gaming into the browsers. Worked\n            together with the designer and the CTO to rewrite the frontend\n            client from EmberJS to ReactJS."}}),l.a.createElement(T,{images:n,color:"#1A224C",bgColor:"#EDE5E1",renderTitleName:function(){return"Colivia"},renderTitlePitch:function(){return"Making the healthcare staffing process more efficient through better data input tools and data visualization"},renderList:function(e){var t=e.color;return l.a.createElement(o.Fragment,null,l.a.createElement(C,{color:t},l.a.createElement(I,null,"Company:"),l.a.createElement(x,{color:t},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://colivia.se/",target:"_blank"},"Colivia Sweden AB"))),l.a.createElement(C,{color:t},l.a.createElement(I,null,"Role:"),l.a.createElement(x,{color:t},"Full Stack Developer & UX Designer")),l.a.createElement(C,{color:t},l.a.createElement(I,null,"Date:"),l.a.createElement(x,{color:t},"2019. March-September")))},renderDescription:function(){return"Designed and developed an in-house system for digitalizing healthcare\n             job assignments and visualizing them to the company’s sales staff. \n             Ran an iterative participatory design process to create a UI that eased \n             the sales employees every-day workflow immensely. \n             Then implemented the design using React, Apollo, GraphQL and Node.js"}}),l.a.createElement(T,{images:a,color:"#000",bgColor:"#dfe6e9",renderTitleName:function(){return"Lifecalendar"},renderTitlePitch:function(){return"Visualizing your life to serve as a daily reminder to only worry about things that truly matter"},renderList:function(){var e="#00000080";return l.a.createElement(o.Fragment,null,l.a.createElement(C,{color:e},l.a.createElement(I,null,"Project:"),l.a.createElement(x,null,"Own Side-project")),l.a.createElement(C,{color:e},l.a.createElement(I,null,"Date:"),l.a.createElement(x,null,"2018. March")),l.a.createElement(C,{color:e},l.a.createElement(I,null,"Demo:"),l.a.createElement(x,{color:e},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://andrewszucs.github.io/lifecalendar/",target:"_blank"},"Visit Demo")," / ",l.a.createElement("a",{rel:"noopener noreferrer",href:"https://chrome.google.com/webstore/detail/lifecalendar-extension/icebmcdnlmgejfkplolagngalhpkjhan",target:"_blank"},"Chrome Store"))),l.a.createElement(C,{color:e},l.a.createElement(I,null,"Code:"),l.a.createElement(x,{color:e},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/lifecalendar",target:"_blank"},"Github repo"))))},renderDescription:function(){return"A Chrome New-tab Extension and web application visualizing how much time you have got to live. \n            Developed with ReactJS with an emphasis on responsivity. \n            During the project I experimented with creating a multi-platform build process \n            for Chrome and the web.\n            "}}),l.a.createElement(T,{images:i,color:"#fff",bgColor:"#0086ff",renderTitle:function(){return l.a.createElement(h,null,l.a.createElement(E,null,"MeetupBot")," — ",l.a.createElement(b,null,"Engaging a MeetupGroup through Messenger"))},renderList:function(e){return e.color,l.a.createElement(o.Fragment,null,l.a.createElement(C,{color:"#fff"},l.a.createElement(I,null,"Project:"),l.a.createElement(x,{color:"#fff"},"Own Side-project")),l.a.createElement(C,{color:"#fff"},l.a.createElement(I,null,"Date:"),l.a.createElement(x,{color:"#fff"},"2016. September")),l.a.createElement(C,{color:"#fff"},l.a.createElement(I,null,"Demo:"),l.a.createElement(x,null,l.a.createElement("a",{rel:"noopener noreferrer",href:"https://youtu.be/xU7-SJ-9mfU",target:"_blank"},"Watch on YouTube"))),l.a.createElement(C,{color:"#fff"},l.a.createElement(I,null,"Code:"),l.a.createElement(x,null,l.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/bpbotsmeetup",target:"_blank"},"Github repo"))))},renderDescription:function(){return"A Messenger Chatbot application developed for the Budapest Bots Meetup group \n          to engage the participants both during and in-between meetups. \n          Features include: automatic meetup notification, event information, newsletter subscription, \n          Q&A question submission and feedback sending. Developed with NodeJS and MongoDB."}}),l.a.createElement(T,{images:c,color:"#d2dae2",bgColor:"#000",renderTitleName:function(){return"QuikReply Analytics"},renderTitlePitch:function(){return"Exploring what an Analytics service could look like for chatbots"},renderList:function(e){var t=e.color;return l.a.createElement(o.Fragment,null,l.a.createElement(C,{color:"#ffffff"},l.a.createElement(I,null,"Project:"),l.a.createElement(x,{color:t},"Bachelor Thesis")),l.a.createElement(C,{color:"#ffffff"},l.a.createElement(I,null,"Date:"),l.a.createElement(x,{color:t},"2017. May")),l.a.createElement(C,{color:"#ffffff"},l.a.createElement(I,null,"Code:"),l.a.createElement(x,{color:t},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/quikreply-bot",target:"_blank"},"Github repo"))))},renderDescription:function(){return"All-in-one chatbot and analytics application for Messenger.\n          Designed and developed the project on my own using ReactJS, NodeJS and \n          Machine Learning tools in Python for the Natural Language Processing API.\n          Used testing tools such as Jest and Tape during the development.\n            "}}),l.a.createElement(T,{images:d,color:"#5324fb",bgColor:"#daf5fd",renderTitleName:function(){return"Chatler.ai website"},renderTitlePitch:function(){return'Presenting the value proposition of an automatic "chat-butler"'},renderList:function(e){var t=e.color;return l.a.createElement(o.Fragment,null,l.a.createElement(C,{color:t},l.a.createElement(I,null,"Company:"),l.a.createElement(x,{color:t},"Chatler.ai Ltd")),l.a.createElement(C,{color:t},l.a.createElement(I,null,"Date:"),l.a.createElement(x,{color:t},"2017. January")))},renderDescription:function(){return"Landing page developed for the Chatler.ai company.\n          Combined Gulp, Pug and SASS to create a Static-Site Generator behind the website, which provides:\n          compilation commands, live reloading and easy deployment to AWS..\n          "}}),l.a.createElement(T,{images:m,color:"#000",bgColor:"#fff",renderTitleName:function(){return"Populist Countries"},renderTitlePitch:function(){return"Exploring the factors that could contribute to the rise of populism through information visualization"},renderList:function(e){var t=e.color;return l.a.createElement(o.Fragment,null,l.a.createElement(C,{color:"#000000"},l.a.createElement(I,null,"Project:"),l.a.createElement(x,{color:t},"School Project")),l.a.createElement(C,{color:"#000000"},l.a.createElement(I,null,"Date:"),l.a.createElement(x,{color:t},"2018. February")),l.a.createElement(C,{color:"#000000"},l.a.createElement(I,null,"Demo:"),l.a.createElement(x,{color:t},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://andrewszucs.github.io/info-viz-project2/",target:"_blank"},"Visit Demo"))),l.a.createElement(C,{color:"#000000"},l.a.createElement(I,null,"Code:"),l.a.createElement(x,{color:t},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/info-viz-project2",target:"_blank"},"Github repo"))))},renderDescription:function(){return"Combined data from the World Values Survey and Gapminder to help the exploration of countries\n          around the world in regards to the rise of populism. Used ReactJS to develop the visualization\n          components.\n            "}}),l.a.createElement(T,{images:s,color:"#000",bgColor:"#fbc531",renderTitleName:function(){return"The Sorting Hat"},renderTitlePitch:function(){return"Creating fair groups in a university class with the use of data exploration"},renderList:function(e){var t=e.color;return l.a.createElement(o.Fragment,null,l.a.createElement(C,{color:"#000"},l.a.createElement(I,null,"Project:"),l.a.createElement(x,{color:t},"School Project")),l.a.createElement(C,{color:"#000"},l.a.createElement(I,null,"Date:"),l.a.createElement(x,{color:t},"2018. January")),l.a.createElement(C,{color:"#000"},l.a.createElement(I,null,"Demo:"),l.a.createElement(x,{color:t},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://andrewszucs.github.io/info-viz-project1/",target:"_blank"},"Visit Demo"))),l.a.createElement(C,{color:"#000"},l.a.createElement(I,null,"Code:"),l.a.createElement(x,{color:t},l.a.createElement("a",{rel:"noopener noreferrer",href:"https://github.com/andrewszucs/info-viz-project1",target:"_blank"},"Github repo"))))},renderDescription:function(){return"Visualized survey data for the Information Visualization class of 2018 \n          at KTH Stockholm. The web application includes an automatic group creator and the \n          tool to fine-tune the selections. Used the KMeans clustering algorithm to group the students\n          based on their interests as well.\n            "}})))};var S="1077402098",k="4274633871"},168:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-bc0b3f064eb464eb355a.js.map