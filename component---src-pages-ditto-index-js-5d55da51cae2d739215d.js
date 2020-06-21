(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0nl+":function(e,t,a){e.exports=a.p+"static/Fig5-7887a793ed65e79619e876e71f8f64bc.png"},"1QLx":function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),n=a.n(i),o=a("vrFN"),r=a("lfaM"),s=a.n(r),l=a("C9AA"),c=a.n(l),h=a("9odD"),m=a.n(h),d=a("2OqC"),p=a.n(d),g=a("OgYw"),f=a.n(g),u=a("FhGX"),y=a.n(u),b=a("e4LL"),w=a.n(b),k=a("tNNl"),v=a.n(k),E=a("h9Yu"),C=a.n(E),T=a("C5ei"),I=a.n(T),x=a("daP/"),S=a.n(x),D=a("FqJ0"),N=a.n(D),A=a("Z0me"),B=a.n(A),F=a("d6ZA"),U=a.n(F),Y=a("5jpY"),G=a.n(Y),_=a("XMGa"),P=a.n(_),H=a("jvmU"),M=a.n(H),O=a("uG0m"),R=a.n(O),j=a("BjRz"),L=a.n(j),q=a("nMjL"),W=a.n(q),z=a("xiRL"),Q=a.n(z),X=a("erR2"),J=a.n(X),V=a("0nl+"),Z=a.n(V),K=a("sOT1"),$=a.n(K),ee=a("1r9w"),te=a.n(ee),ae=(a("93Eu"),a("Eg6Q")),ie=a("mlXe"),ne=a("JvEO"),oe=a("fuVz"),re=a("5CFU"),se=a("Herf"),le=a("sloh"),ce=a("JnD4"),he=a("0vS8"),me=a("gOdI"),de=a("UZXO"),pe=a("nblT"),ge=a("3ZoP"),fe=a("Mq0D"),ue=a("/g0T"),ye=a("fItr"),be=a("X7BR");var we=[{extension:"mp4",file:p.a},{extension:"webm",file:m.a}],ke=[{extension:"mp4",file:y.a},{extension:"webm",file:f.a}],ve=[{extension:"mp4",file:v.a},{extension:"webm",file:w.a}],Ee=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){return n.a.createElement("div",{className:"ditto"},n.a.createElement(o.a,{title:"Ditto",description:"Ditto is a tool that allows designers to copy CSS font styles from live websites and paste them into Sketch. Originally created for the Yext design team by Yana Gevorgyan during her UI Design internship."}),n.a.createElement("div",{className:"hero__wrapper"},n.a.createElement(ae.a,null),n.a.createElement(ie.a,{img:s.a}),n.a.createElement(ne.a,{heroCategory:be.a.ditto.heroCategory,heroYear:be.a.ditto.heroYear,heroDeliverable:be.a.ditto.heroDeliverable,heroTitle:be.a.ditto.heroTitle,heroSummary:"Ditto is a tool that allows designers to copy CSS font styles from live websites and paste them into Sketch."})),n.a.createElement(oe.a,{glams:[[c.a],[ke,C.a],[I.a,ve],[we]],abstractTeam:"Yana Gevorgyan & Blake Quigley",abstractRole:"UI Designer · Developer",abstractTools:"Sketch API · CocoaScript · JS",abstractTime:"2 months · Summer 2019",abstractBody:"Ditto is a Chrome extension with a companion Sketch plugin that allows designers to copy CSS font styles from live websites and paste them directly into Sketch as Sketch styles. It was created to improve the workflow of the UI Design team at Yext.",liveLink:"https://ygev.github.io/ditto",gitLink:"https://github.com/ygev/ditto"}),n.a.createElement(re.a,{phaseList:["UNDERSTAND","DEFINE","DECIDE","PROTOTYPE","VALIDATE"],trackerHead:be.a.ditto.heroTitle}),n.a.createElement("div",{id:"p1"},n.a.createElement(le.a,{phaseTitle:"Understanding a Unique Use Case for Sketch"}),n.a.createElement(se.a,{paragraphTitle:"Designing Backwards",paragraphBody:"Normally, product prototyping tools like Sketch and Figma are used to create designs that will end up on the web, rather than copying what is on the web into the prototype. <<However, this is the use case at Yext,>> and I was tasked with creating a tool that performs this workflow more efficiently, using my skillsets in UX design and UI engineering. "}),n.a.createElement(he.a,{img:S.a,imgNum:"01",imgCaption:"Yext Cobalt Design System's sample style guide that is filled out with client font styles and colors."}),n.a.createElement(se.a,{paragraphTitle:"Reverse-Engineering a Brand",paragraphBody:"The UI Design team at Yext creates custom landing pages for Fortune 500 clients, from Taco Bell to Marriott International Hotel. This means that when you search for “Taco Bell near Union Square,” the first result will lead to a custom landing page for Taco Bell Union Square, designed by Yext with information that is up to date and customized to that particular location. <<In order to design these subpages, the team needs to pull client’s styles from their site into Sketch to design additional pages.>> Since not all clients have custom Sketch libraries, style guides or even their own design team, the team at Yext has to compile these styles manually, using the client’s site as a source of truth.  "}),n.a.createElement(se.a,{paragraphTitle:"Cobalt Atomic Design Language",paragraphBody:"The system by which the team collects the client's style guide is called Cobalt. It is an atomic design system that contains components the team might need to construct a location page. This includes the grid of the original website, known information architecture patterns, and so on. <<At the beginning, the team compiles style guide for the main colors, fonts and other design patterns scavenged from the clients website.>> This is demonstrated in Figure 1. "})),n.a.createElement("div",{id:"p2"},n.a.createElement(le.a,{phaseTitle:"Defining the Pain Points of the Team's Workflow"}),n.a.createElement(se.a,{paragraphTitle:"Copy-Pasting Galore",paragraphBody:"The impetus for this project is an opportunity to accelerate the team's workflow. Currently, UI designers at Yext take up to a minute per font-style. <<Their CSS-to-Sketch workflow consists of relying heavily on their own memory and Chrome Dev Tools to manually find every property of a font and copy it to Sketch, from font-family to letter-spacing.>> This gets very tedious, especially when you are working on several clients a day and copying up to a dozen fonts per client.  "}),n.a.createElement(me.a,{img:N.a,imgNum:"02",imgCaption:"Current workflow of UI Designers at Yext. Highlighted in red are areas for improvement."}),n.a.createElement(se.a,{paragraphTitle:"Desired Workflow Acceleration",paragraphBody:"I compiled a workflow graphic for me to analyse and highlighted areas that were most stressful to the team. Afterwards, I thought about aspects of it can be automated. <<Copying-pasting between Chrome and Sketch are the most tedious task for the designers and is the easiest to automate.>> Unfortunately, I cannot do anything about switching windows between the two programs, other than limit the number of times one will have to do it. "}),n.a.createElement(me.a,{img:B.a,imgNum:"03",imgCaption:"Desired workflow adjustments thanks to the design accelerator."}),n.a.createElement(se.a,{paragraphBody:"After generating an updated flowchart of the workflow adjustments, my problem was defined, and I conceived a How-Might-We statement to help direct my future brainstorming and prototyping vision."}),n.a.createElement(pe.a,{howMightWe:"How might we optimize the unique CSS-to-Sketch workflow of UI designers at Yext?"})),n.a.createElement("div",{id:"p3"},n.a.createElement(le.a,{phaseTitle:"Deciding on the Project's Scope"}),n.a.createElement(he.a,{img:U.a,imgNum:"04",imgCaption:"Razer Naga Trinity, what I use for hotkeys in Sketch."}),n.a.createElement(se.a,{paragraphTitle:"A Note on Design Accelerators",paragraphBody:"I never truly appreciated plugins and hotkeys before starting to work in an environment as fast paced as Yext. Design accelerators can cut down on a lot of time. For instance, <<hotkeys can reduce a task from clicking through a series of nested menus to one click.>> In fact, some designers on my team, including me, use gaming mice with programmable hotkeys, such as the Razer Naga Trinity. Therefore, I kept in mind the team's love of hotkeys when designing this tool.  "}),n.a.createElement(se.a,{paragraphTitle:"What medium is best for this design accelerator?",paragraphBody:"Since the workflow deals with Chrome and Sketch, it seems that it will either have to be a Chrome Extension or a Sketch Plugin. After doing some research on the functionalities of both, a software engineering intern and I decided that it will have to be a combination of the two. <<We outlined what actions the extension will do in Chrome and what the plugin will do in Sketch:>> "}),n.a.createElement(ce.a,{img:G.a,imgNum:"",imgCaption:""}),n.a.createElement(se.a,{paragraphTitle:"What properties define a font's identity?",paragraphBody:"In order to accurately copy the essence of a font, we needed to determine what makes a font style in CSS. These properties must also have equivalents in Sketch. For instance, the font-family property of CSS should correspond to the Typefaces field in Sketch. The final list of properties that are <<most commonly specified in CSS and make a font instantly recognizable as a distinct style>> are as follows: "}),n.a.createElement(de.a,{listTitle:"",listType:"ul",listItems:["font-size","color","line-height","font-weight","text-decoration","font-family","font-style","letter-spacing","text-transform","font-variant","text-shadow"]})),n.a.createElement("div",{id:"p4"},n.a.createElement(le.a,{phaseTitle:"Conceiving the Initial Release"}),n.a.createElement(he.a,{img:[P.a,M.a,R.a],imgNum:"",imgCaption:""}),n.a.createElement(se.a,{paragraphTitle:"Downselection of Font-Properties for Display",paragraphBody:"The primary interface of the Chrome extension is the <<modal with the Clipboard History that appears once the extension is activated.>> I identified font-family, font-weight and font-size as the <<three most important features of a font>> that will be displayed on the pop-up Clipboard History. The font properties that are currently in the clipboard will be highlighted in pink following the Google Material Design Guidelines and accompanied with a Material Icon of a copy symbol. "}),n.a.createElement(ce.a,{img:L.a,imgNum:"",imgCaption:""}),n.a.createElement(se.a,{paragraphTitle:"Developing the Chrome Extension and Sketch Plugin",paragraphBody:"After the interface was complete, I had a hand-off with Blake Quigley. Within a week, he developed the initial code base for both the Chrome Extension and the Sketch Plugin, <<incorporating dropdown animations we discussed during the handoff.>> The plugin entered the QA section of the development process and we asked the UI Design team to use it for a week and note any bugs on GitHub. "}),n.a.createElement(ce.a,{img:W.a}),n.a.createElement(he.a,{img:J.a,padding:"yes",imgNum:"05",imgCaption:"Published on the Chrome Web Store under Klepto."}),n.a.createElement(se.a,{paragraphTitle:"Publishing to Chrome Store",paragraphBody:"After bug fixes and QA testing, the project was published to the Chrome Store under the moniker Klepto with an icon of a pink flamboyant raccoon. <<It was highly successful with the UI Design team and had 38 active users within a month of publishing, meaning that people outside of Yext tried it out.>>  "})),n.a.createElement("div",{id:"p5"},n.a.createElement(le.a,{phaseTitle:"Validation and Post-Internship Maintenance"}),n.a.createElement(se.a,{paragraphTitle:"A Paragon of Iterative Design",paragraphBody:"After graduating from the internship, I gained more skills in both web development, plugin creation, as well as visual design. I noticed that no one was maintaining this extension and <<took initiative to redesign it to make it more usable.>> I forked the repository and fixed a number of bugs, as well as removed code that was not doing anything. <<After speaking with other designers, as well as observing the plugin myself, I identified the following visual design issues:>> "}),n.a.createElement(ge.a,{img:Q.a,issueTitle:"Poor Color Contrast",issueItems:["Cannot see white font-families.","Light colored fonts invisible"]}),n.a.createElement(ge.a,{img:L.a,issueTitle:"Poor Visibility of Modal",issueItems:["Most websites are light-mode.","Cannot find modal easily."]}),n.a.createElement(ge.a,{img:P.a,issueTitle:"No Directions for Hotkey",issueItems:["Don't know how to copy font.","How to activate the extension?"]}),n.a.createElement(se.a,{paragraphBody:"Additionally, <<the project lacked good usage directions>> and was never officially published to Sketch's plugin repository, which limited its accessibliity outside of the UI Design team's reach. "}),n.a.createElement(se.a,{paragraphTitle:"Usability Overhaul",paragraphBody:"I took time to address each problem and came up with a solution for the Chrome Extension modal that solves every issue noted by the users and myself during the heuristic evaluation. "}),n.a.createElement(he.a,{img:s.a,imgNum:"",imgCaption:""}),n.a.createElement(de.a,{listTitle:"Features that Solved the Usability Issues",listType:"ul",listItems:["<<Dark-Mode Interface>> The dark mode interface proved to be more visible for users on most websites and was better suited for the plugin. Perhaps in the future, I can use the new CSS option to detect the user's screen-mode and toggle dark-mode whenever appropriate.","<<Hotkey Directions in the Title>> I put the hotkey combination directly in the title of the modal, so that it was more clear what the next step was after activating the extension.","<<Static Color for all Fonts>> Letting the color of all fonts display as white in the clipboard history allows all fonts to be perfectly visible. Selecting a black font will not obscure the font-family name due to poor color contrast. Moreover, this change makes for better accessibility, since that color combination is sure to pass WCAG AAA."]}),n.a.createElement(he.a,{img:[Z.a,$.a],imgNum:["06","07"],imgCaption:["Brainstorming the optimal file structure of the repo.","Website design of Ditto."]}),n.a.createElement(se.a,{paragraphTitle:"Creating a Monorepo",paragraphBody:"Additionally, I cleaned up the file structure on GitHub and made it clear for those who are trying to read the code, or even download the latest release without relying on Chrome's Web Store and Sketch's Plugin Repository. "}),n.a.createElement(se.a,{paragraphTitle:"Creating a Brand Identity and Website",paragraphBody:"I dubbed my updated plugin Ditto, a name that has a less negative connotation than Klepto, and a name that the UI Design team really enjoyed during our brainstorming sessions. I teamed up with my visual designer friend, Amanda Yeh, and <<developed a promotional website for the plugin>> that displays a new brand identity based on the dark-mode of the new Chrome extension. "}),n.a.createElement(se.a,{paragraphTitle:"Future Developments",paragraphBody:"I hope to some day merge Ditto with another Chrome Extension I made: Banditto. <<Banditto fetches webfonts from websites and downloads them to your computer with a single click.>> As this can technically be used as a piracy tool, I feel uneasy going through with this, but the idea is still amusing to think about. "}),n.a.createElement(ce.a,{img:te.a,imgNum:"08",imgCaption:"Banditto in action, nabbing a font from Hoefler via a context-menu. Very unethical."}),n.a.createElement(se.a,{paragraphTitle:"Subsequent Response from Yext",paragraphBody:"In late May of 2020, I have officially reached out to Tyler Anderson, the Senior UI Designer at Yext to see if I can take over the maintenance of the plugin, since no one has touched it since the end of my internship. He, as well as the Creative Director of the UI Team, Erin Pfiffner, were completely on board and commended my efforts to keep the plugin active. <<I am waiting on the final okay from Yext's legal team to push the updates to the Chrome Web Store!>> "})),n.a.createElement(fe.a,null),n.a.createElement(ue.a,null),n.a.createElement(ye.a,null))},i}(n.a.Component);t.default=Ee},"1r9w":function(e,t,a){e.exports=a.p+"static/Fig12-310d51bef1c2cc08dda9b8af66e18c3c.png"},"2OqC":function(e,t,a){e.exports=a.p+"static/Glam2-d29775454bcfdb102b3e035750044ba3.mp4"},"5jpY":function(e,t,a){e.exports=a.p+"static/Fig13-7b417c3042accce157c063eeee4ca9ae.svg"},"9odD":function(e,t,a){e.exports=a.p+"static/Glam2-ac8a04331597eb69b1f415f002e01c78.webm"},BjRz:function(e,t,a){e.exports=a.p+"static/Fig7-b390ad81e55bce509c2769543db82a1c.png"},C5ei:function(e,t,a){e.exports=a.p+"static/Glam6-1d4af3c5b5cb85833e99101a9811d117.png"},C9AA:function(e,t,a){e.exports=a.p+"static/Glam1-97e7dd67a1cf3963c06830d73a3c18d5.png"},FhGX:function(e,t,a){e.exports=a.p+"static/Glam3-67bcca0cb9ee006c214e67ad97f96223.mp4"},FqJ0:function(e,t,a){e.exports=a.p+"static/Fig2-531dd9218aa0c3f7b655b27240e7b9aa.svg"},"Hfm/":function(e,t,a){},OgYw:function(e,t,a){e.exports=a.p+"static/Glam3-64cdfb212971ba6b1730759f87987e36.webm"},QG2h:function(e,t,a){},UZXO:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("HEwt");var i=a("q1tI"),n=a.n(i),o=(a("QG2h"),a("eCV3"),a("4QlT"),a("93Eu"),a("K2+y"));function r(e){return Array.from(Array(e.length).keys()).map((function(t){return n.a.createElement("li",{className:"list__item"},n.a.createElement(o.a,{content:e[t]}))}))}t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"gridContainer"},n.a.createElement("section",{className:"list"},n.a.createElement("article",{className:"list__section"},e.listTitle?n.a.createElement("h4",{className:"paragraph__title"},e.listTitle):"","ol"===e.listType?n.a.createElement("ol",{className:"list__items list__ordered"},r(e.listItems)):n.a.createElement("ul",{className:"list__items list__unordered"},r(e.listItems))))))}},XMGa:function(e,t,a){e.exports=a.p+"static/Fig9-4f1eaf0e80c93ec47d0771634a49cc99.png"},Z0me:function(e,t,a){e.exports=a.p+"static/Fig3-1fb04af2530108bcddd105f0dbea481b.svg"},d6ZA:function(e,t,a){e.exports=a.p+"static/Fig6-4f5fa62066d572004482b98f1d574cab.jpg"},"daP/":function(e,t,a){e.exports=a.p+"static/Fig1-651dd483ddffa9967edd2ea88a0cb713.png"},e4LL:function(e,t,a){e.exports=a.p+"static/Glam4-56ebeb59235d992524b6a88e35cd8a7e.webm"},erR2:function(e,t,a){e.exports=a.p+"static/Fig15-be3723b85add7377c80c672cccf74432.png"},gOdI:function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i);a("5CwW"),a("Hfm/"),a("eCV3"),a("4QlT"),a("93Eu");t.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("figure",{className:"imgFull"},n.a.createElement("img",{src:e.img,alt:"",className:"imgFull__img"}),n.a.createElement("figcaption",{className:"imgRight__caption"},n.a.createElement("span",{className:"imgRight__number"},e.imgNum)," ",e.imgCaption)))}},h9Yu:function(e,t,a){e.exports=a.p+"static/Glam5-0b8a26de98b75ff9eb6c19e0a2796183.png"},jvmU:function(e,t,a){e.exports=a.p+"static/Fig8-69174b0eb8352c38443114181d459a21.png"},nMjL:function(e,t,a){e.exports=a.p+"static/Fig11-5b0f702ddbe59081c21bc0a575c9efb4.gif"},sOT1:function(e,t,a){e.exports=a.p+"static/Fig16-6e51f8a3996f57bf86050c8ac1035644.png"},tNNl:function(e,t,a){e.exports=a.p+"static/Glam4-49d20bc5df1cc21d05c7aa1dbe06a0d8.mp4"},uG0m:function(e,t,a){e.exports=a.p+"static/Fig10-cabc0daf5104e4884a4b3c4715bd04f7.png"},xiRL:function(e,t,a){e.exports=a.p+"static/Fig14-94648f3eb4a041fa7bef2985b5527748.png"}}]);
//# sourceMappingURL=component---src-pages-ditto-index-js-5d55da51cae2d739215d.js.map