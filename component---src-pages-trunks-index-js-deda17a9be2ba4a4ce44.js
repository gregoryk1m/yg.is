(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Bhmw:function(e,a,t){e.exports=t.p+"static/Glam5-e62f15ce27d163d3dc83cfc2a98cd972.png"},Cv8l:function(e,a,t){e.exports=t.p+"static/Glam6-22fb1e0147f96da2ca83837e1772e186.png"},LTYH:function(e,a,t){e.exports=t.p+"static/Glam2-7341ee0b244e3e97c6bd5e29d7050457.webm"},NQzY:function(e,a,t){e.exports=t.p+"static/Glam7-3bb4d4373ff1cc1be4442288bbacbb25.png"},RJyG:function(e,a,t){e.exports=t.p+"static/Glam3-00bbfe5d3a3bac09ea0ffd3825bb85c2.webm"},dOWa:function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),n=t.n(i),r=t("jgBf"),o=t.n(r),s=t("oCQ2"),l=t.n(s),h=t("LTYH"),c=t.n(h),d=t("RJyG"),m=t.n(d),p=t("wKkz"),u=t.n(p),f=t("Bhmw"),g=t.n(f),y=t("Cv8l"),b=t.n(y),w=t("NQzY"),v=t.n(w),T=(t("93Eu"),t("Eg6Q")),E=t("mlXe"),k=t("JvEO"),I=t("fuVz"),N=t("5CFU"),S=(t("UZXO"),t("Wb9P")),z=(t("h+qz"),t("MkOy"),t("Herf")),B=t("sloh"),_=(t("JnD4"),t("0vS8"),t("gOdI"),t("nblT")),D=(t("3ZoP"),t("/g0T")),x=t("fItr"),A=t("X7BR");var C=function(e){var a,t;function i(){return e.apply(this,arguments)||this}return t=e,(a=i).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,i.prototype.render=function(){return n.a.createElement("div",{className:"trunks"},n.a.createElement("div",{className:"hero__wrapper"},n.a.createElement(T.a,null),n.a.createElement(E.a,{img:o.a}),n.a.createElement(k.a,{heroCategory:A.a.trunks.heroCategory,heroYear:A.a.trunks.heroYear,heroDeliverable:A.a.trunks.heroDeliverable,heroTitle:A.a.trunks.heroTitle,heroSummary:"Trunks is an ancestry visualization tool inspired by rings on a tree trunk. ",btnGit:"View Repository",gitLink:"https://github.com/ygev/trunks"})),n.a.createElement(I.a,{glams:[[l.a],[c.a,m.a],[u.a],[g.a,b.a,v.a]],abstractRole:"UI Designer · Developer",abstractTools:"D3.js · Node.js",abstractTime:"3 weeks · Winter 2018",abstractBody:"Trunks is what happens when you chop down a family tree. It is a web application visualizes familial bonds in the form of a sunburst chart, inspired by rings on tree trunks.",liveLink:"https://ygev.github.io/trunks"}),n.a.createElement(N.a,{phaseList:["UNDERSTAND","ANALYSE`","DESIGN","VALIDATE"],trackerHead:A.a.trunks.heroTitle}),n.a.createElement("div",{id:"p1"},n.a.createElement(B.a,{phaseTitle:"Understanding Ancestry Visualization"}),n.a.createElement(z.a,{paragraphTitle:"Doubting the Establishment",paragraphBody:"I first thought about the limitations of the traditional tree model in my summer Cultural Anthropology class. We were assigned to map a historical dynasty of our choosing using genogram notation. While sinking my teeth into the Habsburgs, I found myself pondering whether a family tree is the ideal way to display multi-generational swaths of data. <<Instead of diving deeper into descendants upon descendants, what if I wanted to display more lateral information on siblings, second aunts and cousins?>> Thus, this side-project was born. What is a better alternative to family trees that is more concerned with breadth of relations, rather than their depths?"}),n.a.createElement(z.a,{paragraphTitle:"Identifying Pain-Points of the Tree Model",paragraphBody:"I interviewed classmates in my Cultural Anthropology course about the same assignment assignment that inspired my inquiry into ancestral data visualization. I interviewed 5 people for 15 minutes each about their experience with the family tree project. Here are some of the things the students have said: "}),n.a.createElement(S.a,{listTitle:"",listType:"ul",listItems:["I can only focus on <<one branch at a time>> and kind of ignore second cousins and anyone who is not a direct descendant.","I have to move a lot of members to the side when I learn that the sibling got married and had children. It gets kind of convoluted and stretched in strange directions."]}),n.a.createElement(z.a,{paragraphTitle:"🔍 Poor Digital Scalability",paragraphBody:"The dimensions of family trees are unpredictable and based on the data being mapped. When the ancestor has many siblings, the graph is bloated horizontally. On the other hand, when the ancestor has many descendants, the chart is bloated vertically. Usually, full family trees are a bit of both. <<This variability is not accounted for when displaying graphs on digital screens, especially smaller viewport sizes. Even when viewed on a large screen, the window needs to scroll both vertically and horizontally, leading to unnecesasry gestures that diminish the user's experience.>> Therefore, the tree model is not suitable for a lot of screen usage, especially for a complete view of a large dynasty."}),n.a.createElement(z.a,{paragraphTitle:"🔍 Perceptual Density",paragraphBody:"<<The horizontally and vertically variable design does not give a concise summary of data to the user at first glance. Hierarchy is not effectively communicated and requires more thinking of the user’s part.>> Additionally, traditional family trees are not usually color coded. There are few distinguishments between family tree branches. Effective data visualizations must be effortless to comprehend and the family tree model misses out on these criteria."}),n.a.createElement(z.a,{paragraphTitle:"🔍 Narrow Scope",paragraphBody:"<<Family trees focus on one branch because it's hard to show all possible relatives without visual over-stimulation.>> Although this is the most common way to view family trees, these dimensional and sensory limitations result in unilaterality; you can only look at one branch at a time. But what if you wanted to see all branches in depth?"})),n.a.createElement("div",{id:"p2"},n.a.createElement(B.a,{phaseTitle:"Developing the Trunk Model with Graph Theory"}),n.a.createElement(z.a,{paragraphTitle:"What type of graph is a family tree?",paragraphBody:"To understand the tree-model of ancestral visualization better, I decided to think of familial relationships mathematically. <<At the end of the day, a family tree is a graph, namely, a directed acyclic graph (DAC).>> A directed acyclic graph is a finite graph with no cycle, which means that there is a finite amount of vertices and edges, which can never loop. In the context of family trees, <<this means that no one can become their own ancestor.>> Therefore, I reframed the data visualization model of trees into a more general DAC graph pattern which will help me analyse its usage better."}),n.a.createElement(z.a,{paragraphTitle:"Depth- vs. Breadth-First Search",paragraphBody:" To understand human cognition, it is often helpful to look at how computer algorithms work. After all, they are inspired by human cognition. In this case, we will look at two common graph search algorithms: <<depth-first search (DFS) and breadth-first search (BFS)>>. These are two different ways people can construct and read familly trees. DFS follows the descendants of one child as far as it can go, from root to finish. On the other hand BFS traverses through all the children of a node, before moving on to the descendants."}),n.a.createElement(z.a,{paragraphBody:"<<Family trees are usually created with a depth-first search in mind.>> In the context of geneology, this means that the creator of a family tree takes one child and follows it deeply through generations of children, not thinking much about the auxilliary relatives, like siblings and cousins. <<In order to design a geneology visualization model that can display these auxilliary family members, one must take a breadth-first approach.>> The ideal system would account for all collateral ancestral relations. The challenge then lies in finding a visualization methodology that analyses and displays both the depth and the breadth of genealogical data."}),n.a.createElement(_.a,{howMightWe:"How might we architect a breadth-first model of ancenstral data visualization?"})),n.a.createElement("div",{id:"p3"},n.a.createElement(B.a,{phaseTitle:"Making the Trunk Model Reality"}),n.a.createElement(z.a,{paragraphTitle:"JSON Structure",paragraphBody:"The first step in redefining genealogical data visualization is translating from traditional family tree models into something a computer can easily comprehend. I used the algorithm of a directed acyclic graph to determine vertices and edges by matching up parents and common children in a JSON file through name-value pairs. I then calculated generations by analyzing the structural depth of parental relations. Below is an illustration of how the pair structure works in a traditional tree model and a JSON file."}),n.a.createElement(z.a,{paragraphTitle:"Tangential Inspiration",paragraphBody:"Instead of using the branch-system of ancestral relation, I drew inspiration from annual growth rings on tree trunks. The resulting visualization technique expanded multilaterally, rather than just to the left or right. As a result, I developed something I call the trunk model of genealogical data visualization. This radial model presents three distinct solutions to the issues posed by the traditional family tree."}),n.a.createElement(z.a,{paragraphTitle:"Validating the First Iteration",paragraphBody:"The following is my first iteration for the web application Trunks, that uses the eponymous model in d3 to visualize some dynasties. I am using a color palette that is recommended by Colorbrewer 3.0, a colorblind-friendly and accessible palette generator. This iteration is the prototype one can view and work with live. While I am content with the model itself, the interface presented several issues that I am in the process of solving."}),n.a.createElement(z.a,{paragraphTitle:"Developing the Second Iteration",paragraphBody:"THIS IS DESIGN ONLY. NOT CODED YET. The following are projected solutions to the issues presented in first web app iteration. This interface is more visual and, by including previews of other family trees, prompts the viewer to explore them. In addition, the json structure allows me to pull more data and visualizations from it, and allow the user to view general statistics about the dynasty. Moreover, one can explore various branches of the family in depth."})),n.a.createElement("div",{id:"p4"},n.a.createElement(B.a,{phaseTitle:"Testing the Model on Real Familial Lines"}),n.a.createElement(z.a,{paragraphTitle:"Forebears",paragraphBody:"Look at all the old families blah blah blah"}),n.a.createElement(z.a,{paragraphTitle:"Future Development",paragraphBody:"Hook it up to Wikipedia. Here is what I tried and why it's crazy weird and hard. Wikipedia's weird format."})),n.a.createElement(D.a,null),n.a.createElement(x.a,null))},i}(n.a.Component);a.default=C},"h+qz":function(e,a,t){"use strict";t("rGqo"),t("yt8O"),t("Btvt"),t("XfO3"),t("HEwt");var i=t("q1tI"),n=t.n(i);t("uq4o"),t("eCV3"),t("5CwW"),t("4QlT"),t("93Eu");a.a=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"gridContainer"},n.a.createElement("section",{className:"listStats"},(a=e.statNum,t=e.statTxt,i=e.imgCaption,Array.isArray(a)?Array.from(Array(a.length).keys()).map((function(e){return n.a.createElement("div",{className:"listStats__item--wrapper"},n.a.createElement("article",{className:"listStats__item"},n.a.createElement("h1",{className:"listStats__num"},a[e]),n.a.createElement("h2",{className:"listStats__txt"},t[e])),n.a.createElement("figcaption",{className:"imgRight__caption"},i[e]))})):n.a.createElement("div",{className:"listStats__item--wrapper"},n.a.createElement("article",{className:"listStats__item"},n.a.createElement("h1",{className:"listStats__num"},a),n.a.createElement("h2",{className:"listStats__txt"},t)),n.a.createElement("figcaption",{className:"imgRight__caption"},i))))));var a,t,i}},jgBf:function(e,a,t){e.exports=t.p+"static/hero-a86f126923bebc236663d46e4f91ea1c.png"},oCQ2:function(e,a,t){e.exports=t.p+"static/Glam1-d67a41c4a239e1597e56d0ef36fdaf4d.gif"},wKkz:function(e,a,t){e.exports=t.p+"static/Glam4-c80fb9f67cc9f7645ae998eaa505d7dd.png"}}]);
//# sourceMappingURL=component---src-pages-trunks-index-js-deda17a9be2ba4a4ce44.js.map