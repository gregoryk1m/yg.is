(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"48la":function(e,t,r){r("2Spj"),r("/SS/"),r("hHhE"),r("HAE/"),e.exports=function(e,t){"use strict";var r="default"in e?e.default:e;function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return"translateX(".concat(e,"px)")}t=t&&t.hasOwnProperty("default")?t.default:t;var c=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(o=a(t).call(this,e))||"object"!=typeof o&&"function"!=typeof o?s(n):o,i(s(r),"_animationState",{stopped:!0,lastTickTime:null}),i(s(r),"_pos",{x:null}),i(s(r),"_refs",{container:null,inner:null}),r._setContainerRef=r._setContainerRef.bind(s(r)),r._setInnerRef=r._setInnerRef.bind(s(r)),r._tick=r._tick.bind(s(r)),r}var c,h,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(t,e),c=t,(h=[{key:"componentDidMount",value:function(){this._resetPosition(),this._requestAnimationWithDelay()}},{key:"componentDidUpdate",value:function(){this._resetPosition(),this._requestAnimationWithDelay()}},{key:"_setContainerRef",value:function(e){this._refs.container=e}},{key:"_setInnerRef",value:function(e){this._refs.inner=e}},{key:"_resetPosition",value:function(){this._pos.x=this._getInitialPosition(),this._refs.inner.style.transform=l(this._pos.x)}},{key:"_requestAnimationWithDelay",value:function(){var e=this.props.delay;setTimeout(this._requestAnimationIfNeeded.bind(this),e)}},{key:"_requestAnimationIfNeeded",value:function(){this._refs.container&&this._refs.inner&&this._refs.inner.scrollWidth>this._refs.container.clientWidth&&window.requestAnimationFrame(this._tick)}},{key:"_tick",value:function(e){var t=this._animationState.lastTickTime;t&&this._updateInnerPosition(e-t),this._animationState.lastTickTime=e,this._requestAnimationIfNeeded()}},{key:"_updateInnerPosition",value:function(e){var t=this,r=this.props,n=r.direction,i=r.speed,a=r.childMargin,o=function(){if("right"===n){var r=t._pos.x+e*i;return r>-a?t._getInitialPosition():r}if("left"===n){var o=t._pos.x-e*i;return o<-t._refs.inner.clientWidth/2-a?t._getInitialPosition():o}return t._pos.x}();this._pos.x=o,this._refs.inner.style.transform=l(o)}},{key:"_getInitialPosition",value:function(){var e=this.props,t=e.direction,r=e.childMargin;return"right"===t?-this._refs.inner.clientWidth/2-r:-r}},{key:"render",value:function(){var e=this.props,t=e.childMargin,n=e.children,i=function(){return r.createElement("span",{style:{margin:"0 ".concat(t,"px")}},n)};return r.createElement("div",{ref:this._setContainerRef,style:{overflowX:"hidden"}},r.createElement("div",{ref:this._setInnerRef,style:{display:"inline-block"}},r.createElement(i,null),r.createElement(i,null)))}}])&&n(c.prototype,h),u&&n(c,u),t}(e.PureComponent);return i(c,"propTypes",{speed:t.number,direction:t.oneOf(["left","right"]),delay:t.number,childMargin:t.number,children:t.node}),i(c,"defaultProps",{speed:.04,delay:3e3,direction:"right",childMargin:15,children:null}),c}(r("q1tI"),r("17x9"))},HbZ0:function(e,t,r){e.exports=r.p+"static/hero-42abcfff6b1feb27884aaa579e658531.png"},KmJ5:function(e,t,r){e.exports=r.p+"static/hero-c3979f605e00275cb4503b9fd64bb431.png"},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n),a=r("vrFN"),o=(r("93Eu"),r("Eg6Q")),s=(r("zLI8"),r("4QlT"),r("/eHF")),l=r.n(s),c=(r("48la"),r("X7BR")),h=r("Xj7D"),u=r.n(h),f=r("Rrg0"),p=r.n(f),m=r("KmJ5"),g=r.n(m),d=r("lfaM"),b=r.n(d),v=r("eaA5"),y=r.n(v),_=r("HbZ0"),T=r.n(_),w=r("jgBf"),D=r.n(w),C={default:u.a,phisher:p.a,cluse:g.a,ditto:b.a,webx:T.a,fisqual:y.a,trunks:D.a},E=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{duration:500},i.a.createElement("section",{className:"home__hero "+e.currentHover},i.a.createElement("figure",{className:"home__img"},i.a.createElement("img",{className:"home__img--limiter",src:C[e.currentHover]})))))},k=(r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("HEwt"),r("vQWL"),r("Wbzz"));var P=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"home__txt--wrapper"},i.a.createElement("section",{className:"home__txt"},i.a.createElement(l.a,{opposite:!0,duration:500},(t=e.projects,r=e.mouseOverCallback,Array.from(Array(t.length).keys()).map((function(e){return i.a.createElement(k.Link,{paintDrip:!0,hex:"#000000",to:t[e]},i.a.createElement("div",{className:"link__wrapper",onMouseOver:r},i.a.createElement("h1",{className:"home__head"},(n=t[e]).charAt(0).toUpperCase()+n.slice(1)),i.a.createElement("h2",{className:"home__brow"},c.a[t[e]].heroYear)));var n})))))));var t,r},x=r("/g0T"),I=r("fItr");var A=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).handleProjectHover=function(e){r.setState({currentName:e.currentTarget.querySelector(".home__head").innerHTML.toLowerCase()})},r.handleHeaderHover=function(e){r.setState({currentName:"default"})},r.state={currentName:"default"},r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{title:"Yana Gevorgyan"}),i.a.createElement("main",{className:"home"},i.a.createElement("div",{className:"hero__wrapper"},i.a.createElement(o.a,{mouseOverCallback:this.handleHeaderHover}),i.a.createElement(E,{currentHover:this.state.currentName}),i.a.createElement(P,{currentHover:this.state.currentName,projects:["cluse","fisqual","trunks","webx","phisher"],mouseOverCallback:this.handleProjectHover})),i.a.createElement(x.a,null),i.a.createElement(I.a,null)))},n}(i.a.Component);t.default=A},Rrg0:function(e,t,r){e.exports=r.p+"static/hero-99578b0237fdd2c7b8a8b764d6af3066.png"},X7BR:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={default:{heroCategory:"",heroYear:"",heroDeliverable:"",heroTitle:"Multidisciplinary Product Designer"},phisher:{heroCategory:"UX Design",heroYear:"2019",heroDeliverable:"Phishing Tool",heroTitle:"Raising Awareness About Infosec with a Targeted Phishing Tool"},cluse:{heroCategory:"Software Design",heroYear:"2020",heroDeliverable:"Sketch Plugin",heroTitle:"Developing Inclusive Design Habits for the Average Sketch User"},ditto:{heroCategory:"Software Design",heroYear:"2019",heroDeliverable:"Sketch Plugin",heroTitle:"Optimizing the CSS-to-Sketch Conversion Workflow for Yext, Inc."},fisqual:{heroCategory:"Interaction Design",heroYear:"2019",heroDeliverable:"Finances App",heroTitle:"Ensuring Financial Wellness for Those with Variable Incomes"},trunks:{heroCategory:"Visual Design",heroYear:"2018",heroDeliverable:"Data Visualization",heroTitle:"Architecting a Compact Family Tree Model for Easy Web Browsing"},semaphore:{heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Learning Tool",heroTitle:"Teaching Flag Semaphore with Gamification and Machine Learning"},avam:{heroCategory:"User Research",heroYear:"2018",heroDeliverable:"Information Architecture",heroTitle:"Untitled For Now"},bitshit:{heroCategory:"Publication Design",heroYear:"2018",heroDeliverable:"Bootleg Newspaper",heroTitle:"Capturing the Underground Cryptocurrency Scene on Newsprint"},spiral:{heroCategory:"Net Art",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Untitled For Now"},lissitzky:{heroCategory:"Net Art",heroYear:"2018",heroDeliverable:"Web App",heroTitle:"Throwing Together Constructivist Paintings with Physics Engines"},madlads:{heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Reinventing Mad Libs with Machine Learning and Camera Lens"},tarpits:{heroCategory:"Experience Design",heroYear:"2019",heroDeliverable:"User Journey",heroTitle:"Crafting a Foam Pit Experience for the La Brea Tar Pits"},yext:{heroCategory:"Visual Design",heroYear:"2019",heroDeliverable:"Information Architecture",heroTitle:"Boosting SEO for Fortune 500 Companies with Visual Design"},carpets:{heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Generating Nightmarish Oriental Textiles with Pix2Pix"},decred:{heroCategory:"Experience Design",heroYear:"2019",heroDeliverable:"Crypto Calculator",heroTitle:"Visualizing Ticket Staking History for the Decred Cryptocurrency"},arteca:{heroCategory:"UI/UX Design",heroYear:"2016",heroDeliverable:"Publishing Platform",heroTitle:"Creating an Interdisciplinary Online Publishing Platform for MIT Press"},webx:{heroCategory:"Web Development",heroYear:"2020",heroDeliverable:"Online Exhibition",heroTitle:"Hosting a Graduation Exhibition for Designers in Times of COVID-19"}}},Xj7D:function(e,t,r){e.exports=r.p+"static/hero-c3d0eb53df635025ef2b0827ff51da76.gif"},eaA5:function(e,t,r){e.exports=r.p+"static/hero-365662866966a63e30d96688624ca867.png"},jgBf:function(e,t,r){e.exports=r.p+"static/hero-4269f8a4990a650c527c996d4e0f8811.png"},lfaM:function(e,t,r){e.exports=r.p+"static/hero-7c923901b33184ba4fc7d2034e2a1378.png"},vQWL:function(e,t,r){},zLI8:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-index-js-be45e05df0df125252ab.js.map