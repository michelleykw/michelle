(this.webpackJsonpmichelle=this.webpackJsonpmichelle||[]).push([[0],{254:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),o=n.n(i),c=n(44),s=n(9),l=n(284),d=n(285),m=n(138),u={breakpoints:{values:{xs:0,sm:600,md:960,lg:1280,xl:1920}},shadows:["none"],palette:{common:{black:"#000",white:"#fff",mingBlue:{dark:"#2A4A64",main:"#355C7D",light:"#5D7D97",100:"#D7DEE5",50:"#EBEFF2"},teakMustard:{dark:"#927E4E",main:"#B69D61",light:"#C5B181",100:"#F0EBDF",50:"#F8F5EF"}},background:{paper:"#FAFAFA",default:"#F4F4F4"},divider:"#E8E7E8",primary:{dark:"#564962",main:"#6C5B7B",light:"#897C95",800:"#2B2431",100:"#E2DEE5",50:"#F0EFF2",contrastText:"#FAFAFA"},secondary:{dark:"#9A566A",main:"#C06C84",light:"#CD899D",100:"#F2E2E6",50:"#F9F0F3",contrastText:"#FAFAFA"},text:{disabled:"#C7C6C8",hint:"#A2A0A3",primary:"#161219",secondary:"#5C595E"},success:{dark:"#1A661D",main:"#208024",light:"#E9F4EA",contrastText:"#FAFAFA"},warning:{dark:"#BA6106",main:"#E97908",light:"#FDF2E6",contrastText:"#FAFAFA"},error:{dark:"#A11819",main:"#C91E1F",light:"#F8E4E4",50:"#FEF8F8",contrastText:"#FAFAFA"}},typography:{h1:{fontFamily:'"Montserrat", sans-serif',fontSize:"9rem",fontWeight:600,lineHeight:.96},h2:{fontFamily:'"Montserrat", sans-serif',fontSize:"5.5rem",fontWeight:600,letterSpacing:"-4%"},h3:{fontSize:"3rem",fontWeight:400,letterSpacing:"2%",lineHeight:1.6},h4:{fontFamily:'"Montserrat", sans-serif',fontSize:"2.25rem",fontWeight:600,lineHeight:1.33,letterSpacing:"0.25px"},h5:{fontFamily:'"Montserrat", sans-serif',fontSize:"1.5rem",fontWeight:600,lineHeight:1.6},h6:{fontFamily:'"Montserrat", sans-serif',fontSize:"1.25rem",fontWeight:600,lineHeight:1.6},body1:{fontSize:"1rem",fontWeight:400,lineHeight:1.6,letterSpacing:"2%"},body2:{fontSize:"0.9375rem",fontWeight:400,lineHeight:1.6,letterSpacing:"2%"},body3:{fontFamily:'"Merriweather", serif',fontSize:"0.875rem",fontWeight:400,lineHeight:1.68,letterSpacing:"2%"},subtitle1:{fontSize:"1.25rem",fontWeight:400,lineHeight:1.6,letterSpacing:"2%"},subtitle2:{fontSize:"1.125rem",fontWeight:400,lineHeight:1.6,letterSpacing:"2%"},button:{fontFamily:'"Montserrat", sans-serif',fontSize:"0.9375rem",fontWeight:600,lineHeight:1.6,letterSpacing:"-1%",textTransform:"uppercase"},fontSize:16,fontFamily:'"Merriweather", serif',fontWeightBold:600}};window.innerWidth<600?(u.typography.h1.fontSize="4rem",u.typography.h2.fontSize="3rem",u.typography.h3.fontSize="1.5rem",u.typography.h4.fontSize="1.75rem",u.typography.h5.fontSize="1.5rem",u.typography.h6.fontSize="1.25rem",u.typography.body1.fontSize="1rem",u.typography.body2.fontSize="0.9375rem",u.typography.body3.fontSize="0.875rem",u.typography.subtitle1.fontSize="1.125rem",u.typography.subtitle2.fontSize="0.9375rem",u.typography.button.fontSize="0.875remrem"):window.innerWidth<1024&&(u.typography.h1.fontSize="7rem",u.typography.h2.fontSize="5rem",u.typography.h3.fontSize="2.5rem");var p=Object(m.a)(u),h=n(12),g=n(276),b=n(40),j=n(278),f=n(279),x=n(280),O=n(277),y=n(1),v=Object(g.a)((function(e){return{button:{backgroundColor:e.palette.primary[50],borderRadius:e.spacing(5),height:e.spacing(6),color:e.palette.primary.dark,"&:hover":{backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText}},small:{minWidth:e.spacing(20)},large:{minWidth:e.spacing(30)}}}));var S=function(e){var t=e.href,n=e.content,a=e.onClick,r=e.icon,i=e.size,o=void 0===i?"large":i,c=e.variant,s=e.disabled,l=void 0!==s&&s,d=e.type,m=void 0===d?"button":d,u=e.className,p=v();return t?Object(y.jsx)(O.a,{href:t,disabled:l,variant:c||"outlined",startIcon:r,onClick:a,type:m,className:"".concat(p.button," ").concat(p[o]," ").concat(u),children:n}):Object(y.jsx)(O.a,{disabled:l,variant:c||"outlined",startIcon:r,onClick:a,type:m,className:"".concat(p.button," ").concat(p[o]," ").concat(u),children:n})},C=n(125),N=n.n(C),k=Object(g.a)((function(e){return{scrollButton:{padding:e.spacing(.5),fontSize:e.spacing(5),border:"1px solid",borderColor:e.palette.primary.light,borderRadius:e.spacing(10),position:"fixed",bottom:e.spacing(4),right:e.spacing(4),height:e.spacing(8),zIndex:1e3,cursor:"pointer",animation:"fadeIn 0.3s",transition:"opacity 0.4s",backgroundColor:e.palette.background.default,"&:hover":{borderColor:e.palette.primary[800],color:e.palette.primary[800]}}}}));var w=function(){var e=k(),t=Object(a.useState)(!1),n=Object(h.a)(t,2),r=n[0],i=n[1];return window.addEventListener("scroll",(function(){!r&&window.pageYOffset>400?i(!0):r&&window.pageYOffset<=400&&i(!1)})),Object(y.jsx)(N.a,{color:"primary",className:e.scrollButton,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{display:r?"flex":"none"}})},E=Object(g.a)((function(e){return{leftBar:{minHeight:"76vh",maxWidth:"5%",borderRightStyle:"solid",borderRightWidth:1,borderRightColor:e.palette.text.primary},leftBarValue:{transform:"rotate(270deg)",whiteSpace:"nowrap"},primaryColor:{color:e.palette.primary.main}}}));var A=function(e){var t=e.side,n=void 0===t?"left":t,a=e.copy,r=E();return Object(y.jsx)(j.a,{container:!0,item:!0,xs:1,className:"".concat("left"===n&&r.leftBar),justify:"center",alignItems:"center",children:Object(y.jsx)(f.a,{variant:"body2",className:"".concat(r.primaryColor," ").concat("left"===n&&r.leftBarValue),children:a})})},H=Object(g.a)((function(e){return{content:{marginLeft:"1.5%",marginRight:"1.83%"},fullScreenHeight:{minHeight:"90vh"},textAlignCenter:{textAlign:"center"},mb1:{marginBottom:e.spacing(1)},mt3:{marginTop:e.spacing(3)},mt5:{marginTop:e.spacing(5)}}}));var F=function(e){var t=e.item,n=e.isPortfolioPage,a=void 0!==n&&n,r=H(),i=t.category,o=t.isHighlight,c=t.name,s=t.desc,l=t.imageHref,d=t.iframe,m=a||!a&&o;return m?Object(y.jsxs)(j.a,{container:!0,className:r.fullScreenHeight,children:[a&&Object(y.jsx)(A,{copy:i}),Object(y.jsx)(j.a,{container:!0,xs:a?11:12,justify:"center",className:"".concat(!m&&r.content," ").concat(r.mt5),children:Object(y.jsxs)(j.a,{item:!0,xs:a?11:10,children:[Object(y.jsx)(j.a,{container:!0,item:!0,xs:12,justify:"space-between",className:r.mb1,children:Object(y.jsx)(f.a,{variant:"h3",children:c})}),Object(y.jsx)(f.a,{variant:"subtitle2",color:"textSecondary",children:s}),Object(y.jsxs)(j.a,{container:!0,item:!0,xs:12,justify:"space-between",className:r.mt3,children:[l&&Object(y.jsx)("img",{src:l,alt:"".concat(i,": ").concat(c),width:"100%",height:"auto"}),d]})]})})]}):null},B=n(126),I=n.n(B),M=n(127),D=n.n(M),T=n(128),P=n.n(T),z=n(129),L=n.n(z),R=n.p+"static/media/hero.9fe211a5.svg",U=[{category:"UI/UX Design",isHighlight:!0,name:"Roomi",desc:"Designed a mobile application for the purpose of finding an ideal house mate from the perspective of a person who has a space to live, as well as that looking for a place to live.",imageHref:"https://mb.com.ph/wp-content/uploads/2021/02/youth2-1.jpg"},{category:"UI/UX Design",isHighlight:!0,name:"NUSReg",desc:"Redesign of the NUS EduReg, a module registration platform used by students in NUS, through a series of user study.",imageHref:R},{category:"Product",isHighlight:!0,name:"MivPay",desc:"Conducted user interviews and designed mockup to allow users to share reviews on purchases for cashback.",imageHref:""},{category:"UI/UX Design",isHighlight:!0,name:"Love, Bonito",desc:"UI/UX and icon designs for minimum checkout for free delivery and media mention.",imageHref:R},{category:"Social Media Collaterals",isHighlight:!1,name:"NUSSU Open Day 2020",desc:"Designed collaterals used on the NUSSU social media accounts for the publicity leading up to the NUS e-Open House & Student Life talks 2020.",website:"",imageHref:""},{category:"Social Media Collaterals",isHighlight:!0,name:"Enterprise House (N-House)",desc:"Designed collaterals used on the N-House social media accounts, Telegram channel and email blast to publicise the Wicked Wednesdays events and 10 Year Anniversary.",imageHref:""},{category:"Development",isHighlight:!1,name:"E-Auction",desc:"Implemented website for auctioning, based on microservices architecture using React, NodeJS and MongoDB.",imageHref:""}],W=[{name:"Full Stack Developer Intern",duration:"Jan 2021 - Aug 2021",company:"GoalsMapper Pte Ltd",desc:["Collaborated with the Product Development Team on the development of the platform with over 2,000 users","Designed and built mobile responsive frontend application using React, including translating mock-ups into code","Developed and designed RESTful APIs and functional databases on the backend using Django Python","Performed unit testing using Endtest to streamline the process of testing for the platform"]},{name:"Product Management Intern",duration:"Aug 2020 - Jan 2021",company:"LoveBonito Pte Ltd",desc:["Analysed end customer problems through data analysis using Google Analytics and proposed potential factors to work on to the Product Head","Conducted A/B testing with Google Optimise for users on the Singapore, Malaysia and International website","Updated onsite touchpoints and create pop-ups for websites using HTML, CSS and JavaScript","Designed website UI/UX using Figma and an icon using Illustrator found on the International website","Created solutions through detailing out workflows and system interactions on FluidUI"]},{name:"Part-Time Private Tutor (Secondary)",duration:"Feb 2018 \u2013 Oct 2021",company:"SimleTutor Pte Ltd",desc:["Tutored 8 students over 3.5 years, with observed improvements by 2 grades on average","Evaluated student\u2019s progress and discussed with parents on how to work on their weaknesses","Prepared educational materials, assigned homework and corrected assignments"]}],q=[{school:"National University of Singapore (NUS)",degree:"Bachelor of Computing with Honours",duration:"Aug 2018 - May 2022 (Expected)",desc:["Major in Computer Science and Minor in Management","NUS Overseas Colleges (NOC), Singapore, Jan 2021 \u2013 Jul 2021","Coursework: Interaction Design, Technological Innovation, Software Engineering, Start Up Case Study & Analysis, Finance"]},{school:"National Junior College",degree:"H2 Physics, H2 Chemistry, H2 Mathematics, H2 Economics",duration:"Jan 2016 - Dec 2017",desc:["Chairperson of student-initiated volunteer project in collaboration with Sree Narayana Mission Home","Member in Badminton and represented the school in the National A Div Girls"]}],V=[{href:"/michelle",label:"Home"},{href:"/michelle/about",label:"About"},{href:"/michelle/portfolio",label:"Portfolio"},{href:"/michelle/contact",label:"Contact"}],G=[{label:"LinkedIn",icon:Object(y.jsx)(I.a,{}),href:"https://www.linkedin.com/in/michelle-yong"},{label:"Github",icon:Object(y.jsx)(D.a,{}),href:"https://github.com/michelleykw"},{label:"Instagram",icon:Object(y.jsx)(P.a,{}),href:"https://www.instagram.com/immychelle"},{label:"Email",icon:Object(y.jsx)(L.a,{}),href:"mailto:michelle.yong@u.nus.edu"}],J=[{name:"Development - Frontend",toolList:["React","Redux","Material UI","Bootstrap"]},{name:"Development - Backend",toolList:["Django Python","PostgreSQL","MongoDB","NodeJS"]},{name:"UI/UX Design",toolList:["Figma","FluidUI","Balsamiq","WordPress","Wix"]},{name:"Illustration",toolList:["Adobe Photoshop","Adobe Illustrator","GIMP","iMovie","Canva"]},{name:"Product Management",toolList:["Jira","Confluence","Hotjar","Google Drive","Google Analytics","Google Optimize"]},{name:"Programming Languages",toolList:["JavaScript","Python","HTML","CSS","Java","Swift","C","C++"]}],Y=[{cca:"NUS ENterprise House (N-House)",name:"Residential Assistant, Marketing Communications",duration:"Dec 2021 - May 2022 (Expected)",desc:["Plan and implement events with the N-House team to support residents in their entrepreneurial journey","Counsel 14 undergraduate residents from various background on academic and personal questions","Lead a team of 15 for publicity and production projects","Designed posters published on N-House social media for various events from Jan to Dec 2021, including N-House\u2019s flagship event Pitch Night and 10 Year Anniversary, using Canva and Illustrator"]},{cca:"NUS Student Union Venture Enterprise",name:"Executive, Product Development",duration:"Aug 2021 \u2013 Dec 2021",desc:["Conducted market surveys to learn about the product that customers want and their willingness to pay","Designed merchandise based on the preferences indicated by potential customers"]},{cca:"Aiesec in NUS",name:"Executive, Finance and External Relations | Vice President, External Relations (NLDC)",duration:"Aug 2019 \u2013 Jul 2020",desc:["Conducted market research and reviewed current product pricings under the Product Pricing Team","Led a team of 3 in raising 3 in-kind sponsors for National Leadership Development Conference (NLDC)"]},{cca:"NUS Student Union",name:"Executive, Open Day Student Village Publicity Team",duration:"Nov 2019 \u2013 Mar 2020",desc:["Designed social media posts and stories, using Photoshop and Illustrator, gaining over 1,800 outreach"]},{cca:"School of Computing",name:"Float Head, Receive-and-Give (RAG) Committee",duration:"Dec 2018 \u2013 Aug 2019",desc:["Led the float team in float design, manpower allocation, budget allocation and spending, attaining Silver Award"]}],X=n.p+"static/media/background.5c78eb5a.png",_=Object(g.a)((function(e){return{hoverCursor:{"&:hover":{color:e.palette.text.primary,"& $cursor":{transform:"translate(-50%, -50%) scale(1.7)",border:"1px solid",borderColor:e.palette.common.teakMustard[100],backgroundColor:e.palette.common.teakMustard[100],mixBlendMode:"difference",backfaceVisibility:"hidden"},"& $cursorDot":{mixBlendMode:"difference",opacity:0,backfaceVisibility:"hidden"}}},cursor:{width:"50px",height:"50px",border:"1px solid",borderColor:e.palette.primary.dark,borderRadius:"50%",position:"fixed",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:".1s",backfaceVisibility:"hidden"},cursorDot:{width:"8px",height:"8px",border:"1px solid",borderColor:e.palette.primary.dark,borderRadius:"50%",position:"fixed",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:".15s",backfaceVisibility:"hidden"},textAlignCenter:{textAlign:"center"},fullScreen:{minHeight:"100vh"},fullScreenWithFooterHeight:{minHeight:"calc(100vh - 112px)"},fullScreenWithHeaderHeight:{minHeight:"calc(100vh - 80px)"},backgroundColor:{backgroundColor:e.palette.background.default},heroBackgroundImage:{backgroundImage:"url(".concat(X,")"),height:"100%",width:"auto",backgroundPosition:"center",backgroundSize:"cover",zIndex:"-99"},heroShapeImage:{backgroundImage:"url(".concat(R,")"),height:"56%",opacity:"1",width:"auto",backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",zIndex:"-1"},mb2:{marginBottom:e.spacing(2)},mb4:{marginBottom:e.spacing(4)}}}));var $=function(){var e=_(),t=Object(b.a)(),n=Object(x.a)(t.breakpoints.up("md")),r=Object(a.useState)(),i=Object(h.a)(r,2),o=i[0],c=i[1],s=Object(a.useState)(),l=Object(h.a)(s,2),d=l[0],m=l[1];window.addEventListener("mousemove",(function(e){c(e.clientX),m(e.clientY)}));var u=function(){window.open("https://drive.google.com/file/d/1Ri3-7eHY_XVpla0tu-x9PceQflMFlKVE/view?usp=sharing","_blank")},p=function(){var e=(new Date).getHours();return e<5||e>=20?"Good Night":e<12?"Good Morning":e<=17?"Good Afternoon":"Good Evening"};return Object(y.jsxs)(j.a,{container:!0,children:[Object(y.jsx)(j.a,{container:!0,className:"".concat(e.fullScreenWithHeaderHeight),id:"homeHero",children:Object(y.jsx)(j.a,{container:!0,item:!0,xs:12,justify:"center",alignItems:"center",className:"".concat(e.heroBackgroundImage),children:Object(y.jsx)(j.a,{container:!0,item:!0,xs:12,justify:"center",alignItems:"center",className:"".concat(e.heroShapeImage),children:Object(y.jsx)(j.a,{container:!0,item:!0,xs:10,justify:"center",children:Object(y.jsx)(j.a,{xs:12,className:"".concat(e.textAlignCenter),children:Object(y.jsx)(f.a,{variant:"h1",children:p()})})})})})}),Object(y.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",className:"".concat(e.fullScreen," ").concat(e.backgroundColor),id:"homeIntro",children:Object(y.jsxs)(j.a,{container:!0,item:!0,xs:10,md:8,justify:"center",children:[Object(y.jsxs)(f.a,{variant:"h3",className:"".concat(e.textAlignCenter," ").concat(e.mb4," ").concat(n&&e.hoverCursor),children:["Hello, I\u2019m Michelle, a final year NUS Computer Science student! Currently actively looking for roles as an Associate Product Manager in the tech industry. I have experience interning with Love, Bonito as a Product Intern and GoalsMapper as a Full Stack Developer.",n&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:e.cursor,style:{left:o+"px",top:d+"px"}}),Object(y.jsx)("div",{className:e.cursorDot,style:{left:o+"px",top:d+"px"}})]})]}),Object(y.jsx)(S,{content:"View Resume",onClick:u})]})}),Object(y.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",className:"".concat(e.fullScreenWithFooterHeight," ").concat(e.backgroundColor),id:"homePortfolio",children:Object(y.jsxs)(j.a,{container:!0,item:!0,justify:"center",children:[U.map((function(e){return Object(y.jsx)(F,{item:e})})),n&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{className:e.cursor,style:{left:o+"px",top:d+"px"}}),Object(y.jsx)("div",{className:e.cursorDot,style:{left:o+"px",top:d+"px"}})]}),Object(y.jsx)(S,{content:"View Resume",onClick:u,className:e.mb4})]})}),Object(y.jsx)(w,{})]})},Q=n(15),K=n(130),Z=n.n(K),ee=Object(g.a)((function(e){return{gradientText:{background:"-webkit-linear-gradient(#355C7D, #6C5B7B, #C67B90)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",paddingBottom:e.spacing(1.5)}}}));var te=function(e){var t=e.copy,n=e.variant,a=void 0===n?"h1":n,r=e.className,i=ee();return Object(y.jsx)(f.a,{variant:a,className:"".concat(i.gradientText," ").concat(r),children:t})},ne=Object(g.a)((function(e){var t,n,a;return{container:(t={},Object(Q.a)(t,e.breakpoints.up("md"),{padding:e.spacing(4)}),Object(Q.a)(t,e.breakpoints.down("sm"),{padding:e.spacing(2)}),Object(Q.a)(t,e.breakpoints.down("xs"),{padding:e.spacing(2)}),t),hoverCursor:{"&:hover":{"& $cursor":{transform:"translate(-50%, -50%) scale(1.7)",border:"1px solid",borderColor:e.palette.common.teakMustard[100],backgroundColor:e.palette.common.teakMustard[100],mixBlendMode:"difference",backfaceVisibility:"hidden"},"& $cursorDot":{mixBlendMode:"difference",opacity:0,backfaceVisibility:"hidden"}}},cursor:{width:"50px",height:"50px",border:"1px solid",borderColor:e.palette.primary.dark,borderRadius:"50%",position:"fixed",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:".1s",backfaceVisibility:"hidden"},cursorDot:{width:"8px",height:"8px",border:"1px solid",borderColor:e.palette.primary.dark,borderRadius:"50%",position:"fixed",pointerEvents:"none",transform:"translate(-50%, -50%)",transition:".15s",backfaceVisibility:"hidden"},textAlignCenter:{textAlign:"center"},fullScreenHeight:{minHeight:"96vh"},fullScreenWithHeaderHeight:{minHeight:"calc(100vh - 112px)"},introDesc:(n={},Object(Q.a)(n,e.breakpoints.up("md"),{paddingBottom:e.spacing(10)}),Object(Q.a)(n,e.breakpoints.down("sm"),{paddingBottom:e.spacing(9)}),Object(Q.a)(n,e.breakpoints.down("xs"),{paddingBottom:e.spacing(8)}),n),introProfile:(a={height:"calc(100vh - 112px)",width:"auto"},Object(Q.a)(a,e.breakpoints.up("sm"),{paddingBottom:e.spacing(4)}),Object(Q.a)(a,e.breakpoints.down("md"),{width:"100%",height:"auto"}),a),introProfileMobile:Object(Q.a)({height:e.spacing(40),width:e.spacing(40),objectFit:"cover",borderRadius:e.spacing(50),margin:e.spacing(3)},e.breakpoints.down("xs"),{height:e.spacing(25),width:e.spacing(25)}),background:{backgroundColor:e.palette.background.default},outlineRounded:{padding:e.spacing(.5),fontSize:e.spacing(5),border:"1px solid",borderRadius:e.spacing(10)},ul:{marginLeft:e.spacing(4),marginRight:e.spacing(4),paddingLeft:e.spacing(1)},li:{fontSize:"1.125rem",color:e.palette.text.secondary,paddingBottom:e.spacing(2)},mb1:{marginBottom:e.spacing(1)},mb2:{marginBottom:e.spacing(2)},mb3:{marginBottom:e.spacing(3)},mb5:{marginBottom:e.spacing(5)},mb6:{marginBottom:e.spacing(6)},mt5:{marginTop:e.spacing(5)},mt10:{marginTop:e.spacing(10)},mx12:{marginLeft:e.spacing(12),marginRight:e.spacing(12)},px2:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},px4:{paddingLeft:e.spacing(4),paddingRight:e.spacing(4)}}}));var ae=function(){var e=ne(),t=Object(b.a)(),n=Object(x.a)(t.breakpoints.up("md")),r=Object(a.useRef)(null),i=Object(a.useState)(),o=Object(h.a)(i,2),c=o[0],s=o[1],l=Object(a.useState)(),d=Object(h.a)(l,2),m=d[0],u=d[1];return window.addEventListener("mousemove",(function(e){s(e.clientX),u(e.clientY)})),Object(y.jsxs)(j.a,{container:!0,className:e.container,children:[Object(y.jsxs)(j.a,{container:!0,justify:"center",alignItems:"center",className:"".concat(e.fullScreenWithHeaderHeight),id:"aboutIntro",children:[!n&&Object(y.jsx)("img",{src:"https://res.cloudinary.com/lovebonitointl/image/upload/q_auto,f_auto/v1624725942/profile.png",alt:"profile",className:e.introProfileMobile}),Object(y.jsxs)(j.a,{item:!0,container:!0,justify:!n&&"center",xs:11,sm:10,md:6,lg:5,className:"".concat(e.introDesc," ").concat(!n&&e.textAlignCenter),children:[Object(y.jsx)(te,{copy:"Michelle Yong;",className:e.mb5}),n&&Object(y.jsx)(f.a,{variant:"h6",color:"primary",className:"".concat(e.mb2),children:"THIS IS ME"}),Object(y.jsx)(f.a,{variant:"subtitle1",children:"Hello there, nice to meet you! This is Michelle, a Year 4 NUS undergraduate, pursuing a Bachelor of Computing in Computer Science and a minor in Management. I enjoy design, product and development \u2661"}),Object(y.jsx)(Z.a,{color:"primary",className:"".concat(e.outlineRounded," ").concat(e.mt10),onClick:function(){return e=r,void window.scroll({top:e.current.offsetTop,behavior:"smooth"});var e}})]}),n&&Object(y.jsx)(j.a,{container:!0,item:!0,sm:5,justify:"flex-end",children:Object(y.jsx)("img",{src:"https://res.cloudinary.com/lovebonitointl/image/upload/q_auto,f_auto/v1624725942/profile.png",alt:"profile",className:e.introProfile})})]}),Object(y.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",className:"".concat(e.background," ").concat(e.fullScreenHeight),id:"aboutExpertise",ref:r,children:Object(y.jsxs)(j.a,{container:!0,item:!0,xs:8,justify:"center",className:n&&e.hoverCursor,children:[Object(y.jsx)(te,{variant:"h2",copy:"Expertise",className:n?e.mb5:e.mb3}),Object(y.jsx)(f.a,{variant:"h3",className:"".concat(e.textAlignCenter),children:"Product Management, Web Design and Development, Full Stack Development, Project Management, UI/UX"}),n&&Object(y.jsxs)(j.a,{children:[Object(y.jsx)("div",{className:e.cursor,style:{left:c+"px",top:m+"px"}}),Object(y.jsx)("div",{className:e.cursorDot,style:{left:c+"px",top:m+"px"}})]})]})}),Object(y.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",className:e.fullScreenHeight,id:"aboutExperience",children:Object(y.jsxs)(j.a,{container:!0,item:!0,xs:11,sm:10,md:8,lg:6,justify:"center",children:[Object(y.jsx)(j.a,{xs:12,className:e.textAlignCenter,children:Object(y.jsx)(te,{variant:"h2",copy:"Experience",className:n?e.mb5:e.mb3})}),W.map((function(t){return function(t,a,r,i){return Object(y.jsxs)(j.a,{item:!0,xs:12,children:[Object(y.jsx)(f.a,{variant:"h4",className:"".concat(e.textAlignCenter," ").concat(e.mb2),children:t}),Object(y.jsx)(f.a,{variant:"subtitle1",className:"".concat(e.textAlignCenter," ").concat(n?e.mb3:e.mb2),children:"".concat(a," @ ").concat(r)}),Object(y.jsx)("ul",{className:"".concat(e.ul," ").concat(n?e.mb5:e.mb3),children:i.map((function(t){return Object(y.jsx)("li",{className:e.li,children:t})}))})]})}(t.name,t.duration,t.company,t.desc)}))]})}),Object(y.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",className:e.fullScreenHeight,id:"aboutTools",children:Object(y.jsxs)(j.a,{container:!0,item:!0,xs:11,sm:10,justify:"center",children:[Object(y.jsx)(j.a,{xs:12,className:e.textAlignCenter,children:Object(y.jsx)(te,{variant:"h2",copy:"Tools",className:n?e.mb5:e.mb3})}),J.map((function(t){return function(t,a){return Object(y.jsxs)(j.a,{item:!0,xs:12,sm:6,md:4,className:n?e.px4:e.px2,children:[Object(y.jsx)(f.a,{variant:"h5",color:"textSecondary",className:"".concat(e.textAlignCenter," ").concat(n?e.mb2:e.mb1),children:t}),Object(y.jsx)(f.a,{variant:"subtitle1",className:"".concat(e.textAlignCenter," ").concat(n?e.mb6:e.mb3),children:a.join(", ")})]})}(t.name,t.toolList)}))]})}),Object(y.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",className:e.fullScreenHeight,id:"aboutEducation",children:Object(y.jsxs)(j.a,{container:!0,item:!0,xs:11,sm:10,md:8,lg:6,justify:"center",children:[Object(y.jsx)(j.a,{xs:12,className:e.textAlignCenter,children:Object(y.jsx)(te,{variant:"h2",copy:"Education",className:n?e.mb5:e.mb3})}),q.map((function(t){return function(t,a,r,i){return Object(y.jsxs)(j.a,{item:!0,xs:12,children:[Object(y.jsx)(f.a,{variant:"h4",className:"".concat(e.textAlignCenter," ").concat(e.mb2),children:t}),Object(y.jsx)(f.a,{variant:"subtitle1",className:"".concat(e.textAlignCenter," ").concat(e.mb1),children:"".concat(a)}),Object(y.jsx)(f.a,{variant:"subtitle2",className:"".concat(e.textAlignCenter," ").concat(n?e.mb3:e.mb2),children:"".concat(r)}),Object(y.jsx)("ul",{className:"".concat(e.ul," ").concat(e.mb3),children:i.map((function(t){return Object(y.jsx)("li",{className:e.li,children:t})}))})]})}(t.school,t.degree,t.duration,t.desc)}))]})}),Object(y.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",className:e.fullScreenHeight,id:"aboutCca",children:Object(y.jsxs)(j.a,{container:!0,item:!0,xs:11,sm:10,md:8,lg:6,justify:"center",children:[Object(y.jsx)(j.a,{xs:12,className:e.textAlignCenter,children:Object(y.jsx)(te,{variant:"h2",copy:"Co-Curricular Activities",className:n?e.mb5:e.mb3})}),Y.map((function(t){return function(t,a,r,i){return Object(y.jsxs)(j.a,{item:!0,xs:12,children:[Object(y.jsx)(f.a,{variant:"h4",className:"".concat(e.textAlignCenter," ").concat(e.mb2),children:t}),Object(y.jsx)(f.a,{variant:"subtitle1",className:"".concat(e.textAlignCenter," ").concat(e.mb1),children:a}),Object(y.jsx)(f.a,{variant:"subtitle2",className:"".concat(e.textAlignCenter," ").concat(n?e.mb3:e.mb2),children:"".concat(r)}),Object(y.jsx)("ul",{className:"".concat(e.ul," ").concat(e.mb3),children:i.map((function(t){return Object(y.jsx)("li",{className:e.li,children:t})}))})]})}(t.cca,t.name,t.duration,t.desc)}))]})}),Object(y.jsx)(w,{})]})},re=Object(g.a)((function(e){return{}}));var ie=function(){return re(),Object(s.f)(),Object(y.jsxs)(j.a,{container:!0,children:[U.map((function(e){return Object(y.jsx)(F,{item:e,isPortfolioPage:!0})})),Object(y.jsx)(w,{})]})},oe=n(31),ce=n(42),se=n(46),le=n(49),de=n(136),me=n.n(de),ue=Object(g.a)((function(e){return{hasError:{color:e.palette.error.main,borderColor:e.palette.error.main},errorText:{color:e.palette.error.main,fontStyle:"italic"},infoErrorSize:{fontSize:e.spacing(1.8),marginRight:e.spacing(.5)}}}));var pe=function(e){var t=e.children,n=ue();return Object(y.jsx)(j.a,{item:!0,children:Object(y.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(y.jsx)(me.a,{color:"error",className:n.infoErrorSize}),Object(y.jsx)(f.a,{className:n.errorText,children:t})]})})},he=Object(g.a)((function(e){return{formControl:{marginBottom:e.spacing(2)},component:{display:"block",width:"100%",height:e.spacing(6),padding:"6px 12px",fontSize:"1rem",fontFamily:'"Merriweather", serif',color:e.palette.text.primary,backgroundColor:e.palette.background.default,border:"1px solid",borderRadius:e.spacing(0),borderColor:e.palette.primary.main,"&:focus":{outline:"none",borderRadius:e.spacing(0),borderColor:e.palette.primary[800],backgroundColor:e.palette.primary[50],boxShadow:"0 0 4px #E2DEE5"}},hasError:{color:e.palette.error.main,borderColor:e.palette.error.main,"&:focus":{borderColor:e.palette.error.dark,backgroundColor:e.palette.error[50],boxShadow:"0 0 4px #FEF8F8"}}}}));var ge=function(e){var t=e.label,n=e.name,a=e.placeholder,r=e.required,i=void 0!==r&&r,o=e.hasError,c=void 0!==o&&o,s=Object(le.a)(e,["label","name","placeholder","required","hasError"]),l=he();return Object(y.jsxs)(j.a,{container:!0,item:!0,className:l.formControl,justitfy:"flex-start",children:[Object(y.jsxs)(j.a,{container:!0,item:!0,xs:12,justify:"space-between",children:[Object(y.jsx)(j.a,{item:!0,children:Object(y.jsx)("label",{htmlFor:n,className:c&&l.hasError,children:"".concat(t).concat(i?" *":"")})}),Object(y.jsx)(oe.a,{name:n,component:pe})]}),Object(y.jsx)(oe.b,Object(se.a)({id:n,name:n,placeholder:a,className:"".concat(l.component," ").concat(c&&l.hasError)},s))]})},be=Object(g.a)((function(e){return{formControl:{marginBottom:e.spacing(2)},component:{display:"block",width:"100%",height:e.spacing(13),padding:e.spacing(1.5),fontSize:"1rem",fontFamily:'"Merriweather", serif',lineHeight:"160%",color:e.palette.text.primary,backgroundColor:e.palette.background.default,border:"1px solid",borderColor:e.palette.primary.main,"&:focus":{outline:"none",borderRadius:e.spacing(0),borderColor:e.palette.primary[800],backgroundColor:e.palette.primary[50],boxShadow:"0 0 4px #E2DEE5"}},hasError:{color:e.palette.error.main,borderColor:e.palette.error.main,"&:focus":{borderColor:e.palette.error.dark,backgroundColor:e.palette.error[50],boxShadow:"0 0 4px #FEF8F8"}}}}));var je=function(e){var t=e.label,n=e.name,a=e.placeholder,r=e.required,i=void 0!==r&&r,o=e.hasError,c=void 0!==o&&o,s=Object(le.a)(e,["label","name","placeholder","required","hasError"]),l=be();return Object(y.jsxs)(j.a,{container:!0,item:!0,className:l.formControl,justitfy:"flex-start",children:[Object(y.jsxs)(j.a,{container:!0,item:!0,xs:12,justify:"space-between",children:[Object(y.jsx)(j.a,{item:!0,children:Object(y.jsx)("label",{htmlFor:n,className:c&&l.hasError,children:"".concat(t).concat(i?" *":"")})}),Object(y.jsx)(oe.a,{name:n,component:pe})]}),Object(y.jsx)(oe.b,Object(se.a)({as:"textarea",id:n,name:n,placeholder:a,cols:3,className:"".concat(l.component," ").concat(c&&l.hasError)},s))]})};var fe=function(e){var t=e.control,n=void 0===t?"input":t,a=Object(le.a)(e,["control"]);switch(n){case"input":return Object(y.jsx)(ge,Object(se.a)({},a));case"textarea":return Object(y.jsx)(je,Object(se.a)({},a));default:return null}},xe=Object(g.a)((function(e){return{content:{marginLeft:"1.5%",marginRight:"1.83%"},fullScreenHeight:{minHeight:"90vh"},textAlignCenter:{textAlign:"center"},primaryColor:{color:e.palette.primary.main},mb5:{marginBottom:e.spacing(5)},mt2:{marginTop:e.spacing(2)},mt3:{marginTop:e.spacing(3)},mt5:{marginTop:e.spacing(5)},pl1:{paddingLeft:e.spacing(1)},pr1:{paddingRight:e.spacing(1)}}}));var Oe=function(){var e=xe(),t=Object(b.a)(),n=Object(x.a)(t.breakpoints.up("sm")),r=Object(a.useState)(!1),i=Object(h.a)(r,2),o=i[0],c=(i[1],ce.a().shape({firstName:ce.b().min(1,"Too Short!").max(50,"Too Long!").required("First name is required"),lastName:ce.b().min(2,"Too Short!").max(50,"Too Long!").notRequired().nullable(),email:ce.b().email("Invalid email").required("Email is required"),phone:ce.b().notRequired().nullable(),subject:ce.b().min(1,"Too Short!").max(50,"Too Long!").required("Subject is required"),message:ce.b().min(1,"Too Short!").max(500,"Too Long!").required("Message is required")})),s=function(t,n){return Object(y.jsxs)(j.a,{item:!0,xs:12,className:e.mt3,children:[Object(y.jsx)(te,{copy:t,className:e.textAlignCenter}),Object(y.jsx)(f.a,{variant:"subtitle2",className:"".concat(e.textAlignCenter," ").concat(e.primaryColor),children:n})]})};return Object(y.jsxs)(j.a,{justify:"center",container:!0,className:e.fullScreenHeight,children:[n&&Object(y.jsx)(A,{copy:"Currently seeking full-time opportunities as an Associate Product Manager in the Tech industry"}),o?Object(y.jsx)(j.a,{container:!0,item:!0,xs:11,justify:"center",alignItems:"center",className:"".concat(e.content," ").concat(e.textAlignCenter),children:s("Thank you!","I would do my best to get back to you in the next 3 days. Have a great day!")}):Object(y.jsx)(j.a,{container:!0,item:!0,xs:11,justify:"center",alignItems:"center",className:"".concat(e.content," ").concat(e.textAlignCenter),children:Object(y.jsxs)(j.a,{container:!0,children:[s("Get in Touch","Hi there, I\u2019m Michelle. Would like to get in touch with me? Simply fill up the form below."),Object(y.jsx)(j.a,{item:!0,xs:12,className:n?e.mt5:e.mt2,children:Object(y.jsx)(oe.d,{initialValues:{firstName:"",lastName:"",email:"",phone:"",subject:"",message:""},onSubmit:function(e){console.log(e)},validationSchema:c,children:function(t){return function(t){var a=t.touched,r=t.errors;return Object(y.jsx)(oe.c,{children:Object(y.jsx)(j.a,{container:!0,justify:"center",alignItems:"center",children:Object(y.jsxs)(j.a,{container:!0,item:!0,xs:11,sm:10,lg:8,children:[Object(y.jsxs)(j.a,{container:!0,item:!0,justify:"space-between",children:[Object(y.jsx)(j.a,{item:!0,xs:12,sm:6,className:n&&e.pr1,children:Object(y.jsx)(fe,{name:"firstName",type:"text",label:"First Name",placeholder:"Michelle",hasError:a.firstName&&r.firstName,required:!0})}),Object(y.jsx)(j.a,{item:!0,xs:12,sm:6,className:n&&e.pl1,children:Object(y.jsx)(fe,{name:"lastName",type:"text",label:"Last Name",placeholder:"Yong"})})]}),Object(y.jsxs)(j.a,{container:!0,item:!0,justify:"space-between",children:[Object(y.jsx)(j.a,{item:!0,xs:12,sm:6,className:n&&e.pr1,children:Object(y.jsx)(fe,{name:"email",type:"email",label:"Email",placeholder:"themichelleyong@gmail.com",hasError:a.email&&r.email,required:!0})}),Object(y.jsx)(j.a,{item:!0,xs:12,sm:6,className:n&&e.pl1,children:Object(y.jsx)(fe,{name:"phone",label:"Phone"})})]}),Object(y.jsx)(j.a,{container:!0,item:!0,children:Object(y.jsx)(j.a,{item:!0,xs:12,children:Object(y.jsx)(fe,{name:"subject",type:"text",label:"Subject",hasError:a.subject&&r.subject,required:!0})})}),Object(y.jsx)(j.a,{container:!0,item:!0,xs:12,children:Object(y.jsx)(j.a,{item:!0,xs:12,children:Object(y.jsx)(fe,{name:"message",type:"text",label:"Message",control:"textarea",placeholder:"Leave me a message \u2661",hasError:a.message&&r.message,required:!0})})}),Object(y.jsx)(j.a,{container:!0,item:!0,justify:n?"flex-end":"center",className:"".concat(e.mt2," ").concat(e.mb5),children:Object(y.jsx)(S,{content:"Submit",type:"submit"})})]})})})}(t)}})})]})})]})},ye=Object(g.a)((function(e){return{fullScreenHeight:{minHeight:"76vh"},textAlignCenter:{textAlign:"center"},content:{marginLeft:"1.5%",marginRight:"1.83%"},mb4mt12:Object(Q.a)({marginBottom:e.spacing(4),marginTop:e.spacing(8)},e.breakpoints.down("md"),{marginBottom:e.spacing(2),marginTop:e.spacing(2)}),mt1:{marginTop:e.spacing(1)},mx1:{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}));var ve=function(){var e=ye(),t=Object(s.f)(),n=Object(b.a)(),a=Object(x.a)(n.breakpoints.up("md"));return Object(y.jsxs)(j.a,{container:!0,alignItems:"center",className:e.fullScreenHeight,children:[a&&Object(y.jsx)(A,{copy:"Download Michelle's full resume"}),Object(y.jsxs)(j.a,{container:!0,sm:12,md:11,className:e.content,justify:"center",alignItems:"center",children:[Object(y.jsx)(te,{copy:"Oh no, the page can\u2019t be found :(",className:"".concat(e.textAlignCenter," ").concat(e.mx1)}),Object(y.jsx)(j.a,{item:!0,xs:12,justifyItems:"center",children:Object(y.jsx)(f.a,{variant:"subtitle2",className:"".concat(e.textAlignCenter," ").concat(e.mb4mt12),children:"Are you looking for any of the following pages?"})}),Object(y.jsx)(j.a,{item:!0,container:!0,xs:11,sm:10,md:9,lg:7,justify:a?"space-between":"center",children:V.map((function(n){var r=n.href,i=n.label;return Object(y.jsx)(S,{content:i,className:!a&&e.mt1,size:a?"small":"large",onClick:function(){return function(e){t.push(e)}(r)}})}))})]})]})},Se=n(281),Ce=n(286),Ne=n(287),ke=n(282),we=n(283),Ee=n(137),Ae=n.n(Ee),He=Object(g.a)((function(e){var t;return{header:Object(Q.a)({backgroundColor:e.palette.background.default,borderBottomStyle:"solid",borderBottomWidth:1,borderBottomColor:e.palette.text.primary,justifyContent:"center"},e.breakpoints.up("sm"),{paddingLeft:e.spacing(2),height:e.spacing(10)}),navButton:(t={fontSize:"1.125rem"},Object(Q.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(2),marginRight:e.spacing(2)}),Object(Q.a)(t,e.breakpoints.down("xs"),{marginTop:e.spacing(2),marginBottom:e.spacing(2)}),t),drawer:{padding:e.spacing(9)},michelle:{fontSize:"3rem",cursor:"pointer"}}}));var Fe=function(){var e=He(),t=Object(s.g)(),n=Object(s.f)(),r=Object(a.useState)(!1),i=Object(h.a)(r,2),o=i[0],l=i[1],d=Object(a.useState)(!1),m=Object(h.a)(d,2),u=m[0],p=m[1];Object(a.useEffect)((function(){var e=function(){window.innerWidth<480?l(!0):l(!1)};return e(),window.addEventListener("resize",(function(){return e()})),function(){window.removeEventListener("resize",(function(){return e()}))}}),[]);var g=function(){p(!1)},b=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return V.map((function(a){var r=a.href,i=a.label;return Object(y.jsx)(O.a,{component:c.b,to:r,color:t.pathname===r?"primary":"textPrimary",onClick:n&&g,className:e.navButton,children:i})}))};return Object(y.jsx)(ke.a,{position:"static",className:e.header,children:Object(y.jsx)(we.a,{children:Object(y.jsxs)(j.a,{container:!0,justify:"space-between",justifyContent:"center",children:[Object(y.jsx)(f.a,{variant:"h3",color:"textPrimary",onClick:function(){n.push("/michelle")},className:e.michelle,children:"*M"}),o?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Se.a,{onClick:function(){return p(!0)},children:Object(y.jsx)(Ae.a,{fontSize:"large",color:"primary"})}),Object(y.jsx)(Ce.a,{anchor:"right",open:u,onClose:g,children:Object(y.jsx)(j.a,{container:!0,direction:"column",alignItems:"center",ustify:"center",className:e.drawer,children:b(!0)})})]}):Object(y.jsx)(Ne.a,{display:"flex",justifyContent:"center",children:b()})]})})})},Be=Object(g.a)((function(e){return{appBar:{backgroundColor:e.palette.primary[800]},toolBar:{justifyContent:"center",minHeight:e.spacing(7)},socialMediaBar:{backgroundColor:e.palette.background.default,color:e.palette.text.primary,borderTopStyle:"solid",borderTopWidth:1,borderTopColor:e.palette.text.primary}}}));var Ie=function(){var e=Be(),t=Object(a.useState)(!1),n=Object(h.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var e=function(){window.innerWidth<480?i(!0):i(!1)};return e(),window.addEventListener("resize",(function(){return e()})),function(){window.removeEventListener("resize",(function(){return e()}))}}),[]),Object(y.jsxs)(ke.a,{position:"static",className:e.appBar,id:"footer",children:[Object(y.jsx)(we.a,{className:"".concat(e.socialMediaBar," ").concat(e.toolBar),children:G.map((function(e){var t=e.label,n=e.icon,a=e.href;return r?Object(y.jsx)(Se.a,{color:"primary",href:a,target:"_blank",children:n}):Object(y.jsx)(O.a,{href:a,target:"_blank",children:t})}))}),Object(y.jsx)(we.a,{className:e.toolBar,children:Object(y.jsx)(f.a,{variant:"body1",color:"inherit",children:"\xa9 Jan 2022 by Michelle Yong;"})})]})};var Me=function(){return Object(y.jsxs)(l.a,{theme:p,children:[Object(y.jsx)(d.a,{}),Object(y.jsx)("div",{className:"wrapper",children:Object(y.jsxs)(c.a,{children:[Object(y.jsx)(Fe,{}),Object(y.jsxs)(s.c,{children:[Object(y.jsx)(s.a,{exact:!0,path:"/michelle/about",component:ae}),Object(y.jsx)(s.a,{exact:!0,path:"/michelle/contact",component:Oe}),Object(y.jsx)(s.a,{exact:!0,path:"/michelle/portfolio",component:ie}),Object(y.jsx)(s.a,{exact:!0,path:"/michelle",component:$}),Object(y.jsx)(s.a,{component:ve})]}),Object(y.jsx)(Ie,{})]})})]})};o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(Me,{})}),document.getElementById("root"))}},[[254,1,2]]]);
//# sourceMappingURL=main.4614c36b.chunk.js.map