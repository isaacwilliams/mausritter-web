(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[641],{2897:function(t,e,M){"use strict";M.d(e,{Sl:function(){return a},Vf:function(){return o},ei:function(){return r},mq:function(){return y}});var n=M(6356),i=M.n(n),N=M(5919),u=M.n(N);const r=t=>t[Math.floor(Math.random()*t.length)],y=t=>{const e=u()(t.map((t=>t.weight))),M=Math.random()*e;let n=0;for(const i of t)if(n+=i.weight,M<n)return i;return t[0]},a=t=>Math.floor(Math.random()*t)+1,o=t=>e=>u()(i()((()=>a(e)),t))},1847:function(t,e,M){"use strict";M.d(e,{$t:function(){return y},Dx:function(){return r},ZV:function(){return a}});var n=M(3133),i=M(3074),N=M(7544),u=M(6738);const r=n.default.h1.withConfig({displayName:"generatorComponents__Title",componentId:"sc-nwkmjf-0"})(["font-size:2.2rem;font-weight:bold;",";"],i.Z.display),y=n.default.div.withConfig({displayName:"generatorComponents__TitleWrapper",componentId:"sc-nwkmjf-1"})(["display:flex;align-items:center;justify-content:space-between;margin-top:5rem;margin-bottom:3rem;",""],u.Z.phone`
        display: block;
        margin-top: 1rem;
        margin-bottom: 2rem;
        margin-left: 1rem;
        margin-right: 1rem;
    `),a=n.default.button.withConfig({displayName:"generatorComponents__RollButton",componentId:"sc-nwkmjf-2"})(["padding:0.6rem 1.5rem;border:0;border-radius:0.2rem;background:#ddd;color:",";font-size:1.1rem;"," letter-spacing:0.05rem;cursor:pointer;outline:none;&:hover{background:yellow;color:black;}"],N.Z.body,i.Z.display)},8548:function(t,e,M){"use strict";M.d(e,{Ej:function(){return u},OO:function(){return N}});var n=M(3133),i=M(6738);const N=n.default.section.withConfig({displayName:"ContentContainer",componentId:"sc-1m59fxh-0"})(["margin-left:auto;margin-right:auto;width:auto;padding-left:3rem;padding-right:3rem;"," ",""],i.Z.phone`
        padding-left: 0;
        padding-right: 0;
    `,i.Z.large`
        width: 70rem;
        padding-left: 0;
        padding-right: 0;
    `),u=(0,n.default)(N).withConfig({displayName:"ContentContainer__FlexContainer",componentId:"sc-1m59fxh-1"})(["display:flex;align-items:center;justify-content:center;flex-direction:row;"]);e.ZP=N},5035:function(t,e,M){"use strict";var n=M(7294),i=M(4593),N=M(4160);function u(t){let{description:e,lang:M,meta:u,title:r}=t;const{site:y}=(0,N.K2)("63159454"),a=e||y.siteMetadata.description;return n.createElement(i.q,{htmlAttributes:{lang:M},title:r,titleTemplate:`%s | ${y.siteMetadata.title}`,meta:[{name:"description",content:a},{property:"og:title",content:r},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:y.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:a}].concat(u)})}u.defaultProps={lang:"en",meta:[],description:""},e.Z=u},6960:function(t,e,M){"use strict";M.r(e),M.d(e,{default:function(){return h}});var n=M(7294),i=(M(4160),M(3133)),N=M(5035),u=M(1321),r=M(1745),y=M(1072),a=M(3074),o=M(6738),j=M(8548),I=M(1847),c=M(3416),g=M(2897);const T=[[{x:3,y:1},{x:3,y:2},{x:3,y:3},{x:3,y:4},{x:2,y:3},{x:4,y:2}],[{x:3,y:1},{x:3,y:2},{x:3,y:3},{x:2,y:3},{x:1,y:3},{x:4,y:3},{x:5,y:3}],[{x:3,y:1},{x:3,y:2},{x:4,y:2},{x:2,y:2},{x:2,y:3},{x:4,y:3},{x:2,y:4},{x:4,y:4},{x:3,y:4}],[{x:3,y:1},{x:3,y:2},{x:2,y:2},{x:4,y:2},{x:4,y:3},{x:1,y:2},{x:1,y:3},{x:3,y:3}],[{x:3,y:1},{x:3,y:2},{x:4,y:2},{x:2,y:2},{x:3,y:3}],[{x:3,y:1},{x:3,y:2},{x:4,y:2},{x:2,y:2},{x:3,y:3},{x:3,y:4},{x:2,y:4}],[{x:3,y:1},{x:3,y:2},{x:3,y:3},{x:3,y:4},{x:4,y:4},{x:2,y:4},{x:1,y:4},{x:5,y:4},{x:5,y:3},{x:5,y:2},{x:4,y:2}],[{x:3,y:1},{x:3,y:2},{x:3,y:3},{x:2,y:3},{x:1,y:3},{x:4,y:2}]],L=t=>{const e=`${(0,g.ei)(t.siteName.partA)} ${(0,g.ei)(t.siteName.partB)}`,M={construction:(0,g.ei)(t.summary.construction),ruinAction:(0,g.ei)(t.summary.ruinAction),ruin:(0,g.ei)(t.summary.ruin),inhabitant:(0,g.ei)(t.summary.inhabitant),inhabitantAction:(0,g.ei)(t.summary.inhabitantAction),inhabitantGoal:(0,g.ei)(t.summary.inhabitantGoal),secretHidden:(0,g.ei)(t.summary.secretHidden),secret:(0,g.ei)(t.summary.secret)},n=(0,g.ei)(T).map((e=>{const M=(0,g.mq)(t.roomTypes);return{id:(0,c.x0)(6),position:e,type:M.typeName,description:(0,g.ei)(M.descriptions),creature:(0,g.Vf)(1)(6)<=M.creatureChance,treasure:(0,g.Vf)(1)(6)<=M.treasureChance}}));return{id:(0,c.x0)(),name:e,summary:M,rooms:n}};var D=t=>{const{0:e,1:M}=(0,n.useState)(L(t));return[e,()=>{M(L(t))}]},m=M(4593);const z=i.default.div.withConfig({displayName:"AdventureSiteGenerator__Summary",componentId:"sc-um8jfy-0"})(["max-width:50rem;margin:0 auto;font-size:1.8rem;text-align:justify;",""],o.Z.phone`
        margin: 0 1rem;
        font-size: 1.4rem;
    `),l=i.default.span.withConfig({displayName:"AdventureSiteGenerator__SummaryName",componentId:"sc-um8jfy-1"})([""," font-size:2.4rem;",""],a.Z.display,o.Z.phone`
        font-size: 1.8rem;
    `),d=i.default.span.withConfig({displayName:"AdventureSiteGenerator__SummaryFeature",componentId:"sc-um8jfy-2"})(["",";"],a.Z.display),s=i.default.div.withConfig({displayName:"AdventureSiteGenerator__RoomsContainer",componentId:"sc-um8jfy-3"})(["position:relative;margin-top:4rem;",""],o.Z.phone`
        overflow: scroll;
        max-width: 100%;

        -webkit-overflow-scrolling: touch;
    `),A=i.default.div.withConfig({displayName:"AdventureSiteGenerator__RoomArray",componentId:"sc-um8jfy-4"})(["display:grid;grid-template-columns:repeat(5,1fr);grid-template-rows:repeat(4,1fr);gap:1rem;",""],o.Z.phone`
        padding: 1rem;
        grid-template-columns: repeat(5, 8rem);
        grid-template-rows: repeat(4, 1fr);
        gap: 0.8rem;
    `),x=i.default.div.withConfig({displayName:"AdventureSiteGenerator__Room",componentId:"sc-um8jfy-5"})(["position:relative;padding:1rem;border:",";background:#eee;grid-column:",";grid-row:",";",""],(t=>{let{creature:e}=t;return"1px solid #ccc"}),(t=>{let{posX:e}=t;return e}),(t=>{let{posY:e}=t;return e}),o.Z.phone`
        padding: 0.8rem;
        font-size: 0.8rem;
    `),w=i.default.div.withConfig({displayName:"AdventureSiteGenerator__StatusIconContainer",componentId:"sc-um8jfy-6"})(["position:absolute;top:-0.5rem;right:-0.5rem;z-index:1;"]),C=i.default.div.withConfig({displayName:"AdventureSiteGenerator__StatusIcon",componentId:"sc-um8jfy-7"})(["width:1.5rem;height:1.5rem;margin-bottom:0.2rem;",""],o.Z.phone`
        width: 1.2rem;
        height: 1.2rem;
    `),p=(0,i.default)(C).withConfig({displayName:"AdventureSiteGenerator__CreatureIcon",componentId:"sc-um8jfy-8"})(["background:url(",");background-color:black;"],"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iaGVpZ2h0OiA1MTJweDsgd2lkdGg6IDUxMnB4OyI+PHBhdGggZD0iTTAgMGg1MTJ2NTEySDB6IiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsbC1vcGFjaXR5PSIwIj48L3BhdGg+PGcgY2xhc3M9IiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgc3R5bGU9InRvdWNoLWFjdGlvbjogbm9uZTsiPjxwYXRoIGQ9Ik0xNiAxNy4xODh2MjM2LjY1NmMwIDIwLjQ4IDE5LjMyNCA0MC4zNjUgNDguMTU2IDU3LjQ3IDExLjUwNC02LjA2NiAyMy4yNi05LjU2NCAzNC44MTMtOS41NjQgMjkuMDIzIDAgNTMuNDUzIDIwLjMgNjIuMDkzIDQ4LjE4OCAxLjg4OC40OTUgMy43NTIuODYzIDUuNjI1IDEuMzQzIDEzLjgyNC05LjkyIDI2LjI1NS0xMi4yMTcgMzQuNjg3LTEyLjIxNyAxNy41NTIgMCAzMy4wMzcgOS42ODggNDIuMTI1IDI0LjMxMiA0LjI4OC4yMDggOC43MTcuNTMgMTIuNzguNTMgNC4xNzcgMCA4LjUwNy0uMTggMTIuOTQtLjQzNiA5LjA4Ny0xNC42OSAyNC41ODYtMjQuNDA4IDQyLjE4Ni0yNC40MDggOC4wOCAwIDE5Ljg1IDIuMTk4IDMyLjk3IDExLjA5NCAyLjY1NS0uNzM2IDUuMjk2LTEuNTc2IDcuOTY4LTIuMzQ0IDkuMjE2LTI2Ljc4NCAzMy4xOC00Ni4wMyA2MS40Ny00Ni4wMyAxMC4yNyAwIDIwLjcxIDIuNzE1IDMwLjk5OCA3LjUzQzQ3NS4zMjUgMjkxLjYgNDk2IDI3MS45MjMgNDk2IDI1My45N1YxNy4xODdIMTZ6bTY3LjUzIDEyNi4yOGMyMC43MiAwIDM3LjUgMTYuNzk2IDM3LjUgMzcuNTMyIDAgMjAuNzItMTYuNzggMzcuNS0zNy41IDM3LjVTNDYgMjAxLjcyIDQ2IDE4MXMxNi44MS0zNy41MyAzNy41My0zNy41M3ptMzQ1LjEyNiAwYzIwLjcyIDAgMzcuNTMgMTYuNzk2IDM3LjUzIDM3LjUzMi4wMDIgMjAuNzItMTYuODEgMzcuNS0zNy41MyAzNy41LTIwLjcyIDAtMzcuNTMtMTYuNzgtMzcuNTMtMzcuNXMxNi44MS0zNy41MyAzNy41My0zNy41M3pNNzYuOTcgMTU1LjI4MmMtOS4xMTIgMC0xNi41IDcuMzktMTYuNSAxNi41IDAgOS4xMTIgNy4zODggMTYuNSAxNi41IDE2LjUgOS4xMSAwIDE2LjUtNy4zODggMTYuNS0xNi41IDAtOS4xMS03LjM5LTE2LjUtMTYuNS0xNi41em0zNDUuMTI0IDBjLTkuMTEgMC0xNi41IDcuMzktMTYuNSAxNi41IDAgOS4xMTIgNy4zOSAxNi41IDE2LjUgMTYuNXMxNi41LTcuMzg4IDE2LjUtMTYuNWMwLTkuMTEtNy4zOS0xNi41LTE2LjUtMTYuNXptLTI0MS4wMyAxMS45N2MzMy4xMzUgMCA2MCAyNi44NDggNjAgNjAgLjAxNCAzMy4xMzYtMjYuODUgNjAuMDMtNjAgNjAuMDMtMzMuMTM3IDAtNjAuMDMzLTI2Ljg5NC02MC4wMzMtNjAuMDNzMjYuODk3LTYwIDYwLjAzMi02MHptMTUwLjA2IDBjMzMuMTM3IDAgNjAgMjYuODQ4IDYwIDYwIC4wMTcgMzMuMTM2LTI2Ljg0NyA2MC4wMy02MCA2MC4wMy0zMy4xMzUgMC02MC4wMy0yNi44OTQtNjAuMDMtNjAuMDNzMjYuODk1LTYwIDYwLjAzLTYwek0xNzAuNTYzIDE4Mi41Yy0xNi41NzcgMC0zMC4wMyAxMy40MjMtMzAuMDMgMzAgMCAxNi41NzcgMTMuNDUzIDMwLjAzIDMwLjAzIDMwLjAzIDE2LjU3OCAwIDMwLTEzLjQ1MyAzMC0zMC4wM3MtMTMuNDIyLTMwLTMwLTMwem0xNTAuMDMyIDBjLTE2LjU3OCAwLTMwIDEzLjQyMy0zMCAzMCAwIDE2LjU3NyAxMy40MjIgMzAuMDMgMzAgMzAuMDMgMTYuNTc3IDAgMzAuMDMtMTMuNDUzIDMwLjAzLTMwLjAzcy0xMy40NTMtMzAtMzAuMDMtMzB6TTEwMC4wMyAxOTMuNTYzYy0zLjYzIDAtNi41OTMgMi45Ni02LjU5MyA2LjU5MyAwIDMuNjMyIDIuOTYyIDYuNTYzIDYuNTk0IDYuNTYzIDMuNjMzIDAgNi41NjQtMi45MzIgNi41NjQtNi41NjRzLTIuOTMtNi41OTQtNi41NjMtNi41OTR6bTM0NS4xMjYgMGMtMy42MzIgMC02LjU5NCAyLjk2LTYuNTk0IDYuNTkzIDAgMy42MzIgMi45NjIgNi41NjMgNi41OTQgNi41NjNzNi41NjMtMi45MzIgNi41NjMtNi41NjQtMi45MzItNi41OTQtNi41NjQtNi41OTR6TTIwNy40NyAyNDIuODc1Yy04LjI5IDAtMTUgNi43MS0xNSAxNXM2LjcxIDE1LjAzIDE1IDE1LjAzYzguMjg3IDAgMTUtNi43NCAxNS0xNS4wM3MtNi43MTMtMTUtMTUtMTV6bTE1MC4wNiAwYy04LjI4NyAwLTE1LjAzIDYuNzEtMTUuMDMgMTVzNi43NDMgMTUuMDMgMTUuMDMgMTUuMDNjOC4yOSAwIDE1LTYuNzQgMTUtMTUuMDNzLTYuNzEtMTUtMTUtMTV6bTU2LjMxNCA4MS4zNzVjLTI1LjU4NCAwLTQzLjE1NiAyMy4yNDUtNDMuMTU2IDQ3LjQ3IDMxLjQwOCAyNS43MSA1MS43NSA2Ny4yOTIgNTEuNzUgMTE0LjA5MiAwIDMuMDA4LS4wNiA2LjAwOC0uMTU3IDkgMjkuMTA1LTI0LjkyOCA0Ni45NC01OC41NCA0Ni45NC05NS41IDAtMjAuNjI0LTUuNTY1LTQwLjE2NS0xNS41MzMtNTcuNzgtMTQuMzY4LTEyLjI1Ny0yNy45NTUtMTcuMjgyLTM5Ljg0My0xNy4yODJ6TTk5IDMyNC4yOGMtMTEuODcyIDAtMjUuNDkgNC45OTUtMzkuODc1IDE3LjI1LTkuOTY4IDE3LjYxNy0xNS41IDM3LjE5LTE1LjUgNTcuODE0IDAgMzYuOTQ0IDE3LjgxOCA3MC41NTYgNDYuOTA2IDk1LjUtLjExLTIuOTc2LS4xNTUtNS45OTItLjE1NS05IDAtNDYuOCAyMC4zNzMtODguMzk4IDUxLjc4LTExNC4wOTQuMDE3LTI0LjI0LTE3LjU3LTQ3LjQ3LTQzLjE1NS00Ny40N3ptMTAyLjQwNiAzNS44NDVjLTguMTQ0IDAtMTcuNDg4IDMuNS0yNy4zNDQgMTIuMTI1LTYuODMyIDEyLjQtMTAuNjU2IDI2LjE3NS0xMC42NTYgNDAuNjg4IDAgMjYuMDE2IDEyLjI1IDQ5LjY2NiAzMi4yMiA2Ny4yMTgtLjA4LTIuMDk2LS4xMjYtNC4yLS4xMjYtNi4zMTIgMC0zMi45NDQgMTMuOTgtNjIuMjE3IDM1LjUzLTgwLjMxMyAwLTE3LjAyMy0xMi4wNzItMzMuNDA1LTI5LjYyNC0zMy40MDV6bTExMC4wMyAwYy0xNy41NSAwLTI5LjYyMyAxNi4zODItMjkuNjIzIDMzLjQzOCAyMS41NTIgMTguMDk2IDM1LjUgNDcuMzUyIDM1LjUgODAuMzEyIDAgMi4xMTItLjAxNCA0LjIxNi0uMDk0IDYuMzEzIDE5Ljk2Ny0xNy41NjggMzIuMjE3LTQxLjIwMyAzMi4yMTctNjcuMjIgMC0xNC41MS0zLjgwOC0yOC4yODctMTAuNjU2LTQwLjY4Ny05Ljg1NS04LjYyMy0xOS4xODItMTIuMTctMjcuMzQyLTEyLjE1NXoiIGZpbGw9IiNmZjY2MzMiIGZpbGwtb3BhY2l0eT0iMSI+PC9wYXRoPjwvZz48L3N2Zz4K"),E=(0,i.default)(C).withConfig({displayName:"AdventureSiteGenerator__TreasureIcon",componentId:"sc-um8jfy-9"})(["background:url(",");background-color:black;"],"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iaGVpZ2h0OiA1MTJweDsgd2lkdGg6IDUxMnB4OyI+PHBhdGggZD0iTTAgMGg1MTJ2NTEySDB6IiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsbC1vcGFjaXR5PSIwIj48L3BhdGg+PGcgY2xhc3M9IiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwwKSIgc3R5bGU9InRvdWNoLWFjdGlvbjogbm9uZTsiPjxwYXRoIGQ9Ik0xNDYuODU3IDIwLjg0MmMtMTIuNTM1LS4wMzYtMjQuMjY4IDIuODYtMzcuMjg1IDkuNDI0aC4wMDRDNjEuMzU2IDU0LjYgMTkuOTY2IDEyMC43MzQgMTcuOTgyIDE3NS45MWw0MS44NDggMTQuMjM2YzQuMzMtNjEuODkgNDcuMDU3LTEyOC4zNyAxMDEuNTI3LTE1NS44NmguMDAyYzQuNDIzLTIuMjMgOC44MjItNC4xNjIgMTMuMTg1LTUuOGwtMjIuMjYtNy40NWMtMS44My0uMTIzLTMuNjM3LS4xOS01LjQyOC0uMTk0em01OS4zNCAyMC4xOWMtMTAuNDc4LS4wOS0yMi44MzIgMy4wOTMtMzYuNDI0IDkuOTQzbC4wMDQtLjAwNGMtNDguMjMgMjQuMzQtODkuNjI1IDkwLjUxMy05MS41NDggMTQ1LjQzNmwxNTYuNDg1IDUzLjI0YzMuODY1LTYyLjIyIDQ2Ljc5Ny0xMjkuMzcyIDEwMS42MTMtMTU3LjAzNWguMDAybC4wMDItLjAwM2M0LjMwMy0yLjE2OCA4LjU4NC00LjA1NiAxMi44MzItNS42NjZsLTEzNC41NC00NS4wMzZjLTIuNjUyLS41NDItNS40NTgtLjg0Ny04LjQyNy0uODczem0xNzQuOTcgNTguMzIzYy0xMC40NzYtLjA5LTIyLjgzIDMuMDkyLTM2LjQyIDkuOTRsLS4wMDUuMDAyYy00OC41NzcgMjQuNTE4LTkwLjIyNSA5MS40NzMtOTEuNTg2IDE0Ni42MjNsNDYuMjA1IDE1LjcyYzMuOTE0LTYyLjE4OCA0Ni44MjUtMTI5LjI3NCAxMDEuNjA3LTE1Ni45MiA0LjUyMi0yLjI4MyA5LjA0LTQuMjU4IDEzLjUzLTUuOTFsLTI2LjU0NC04Ljg4NGMtMi4xNjQtLjM1LTQuNDIzLS41NS02Ljc4NS0uNTd6bTYzLjU1NCAyMi4wMTRjLTEwLjI2Ny4wOTMtMjIuMDk0IDMuMzUzLTM1LjMzMyAxMC4wMzQtNDcuMTU4IDIzLjgtODcuNzc3IDg3LjU4Ny05MS4zNjIgMTQxLjc1bDE3NC41NS03My43MjZjLS40MDQtMzkuMDEtMTAuNzU0LTYxLjMwNC0yNC40MTUtNzEuMDgyLTIuMzQ3LTEuNjgtNC44NjctMy4wNTctNy41NS00LjEzN2wtLjAxLjAzNC00LjczNS0xLjU4NGMtMy40OC0uODg3LTcuMTk1LTEuMzI3LTExLjE0NC0xLjI5ek0xNy45IDE5NS42MjJsLS4wMzUgMTg3LjQ4NEw1OS40NiAzOTcuNThWMjA5Ljc2NEwxNy45IDE5NS42MjR6TTc4LjE1IDIxNi4xMnYxODcuOTYybDE1Ni4yODIgNTQuMzdWMjY5LjI4OGwtMjkuMDUzLTkuODg2djExOS40M2wtMTAxLjA1NC0zNC4wODJWMjI1LjAyNUw3OC4xNSAyMTYuMTJ6bTQxNC4yMiAzLjY4M0wzMTguNDMzIDI5My4yN3YxODkuMjM2bDE3My45MzUtNzMuNTA0di0xODkuMnptLTM2OS4zNTQgMTEuNTgydjk5Ljk0N2w2My42NzUgMjEuNDc3di05OS43NjNsLTYzLjY3NC0yMS42NjJ6bTMxLjMwNiAyOC43OTdjOS43MDUgMCAxNy41NzMgNy44NjcgMTcuNTczIDE3LjU3MiAwIDYuMzQtMy4zNyAxMS44OC04LjQwNyAxNC45N3YyOC41M2gtMTguNjl2LTI4Ljc0NmMtNC44MzgtMy4xMy04LjA0OC04LjU2Mi04LjA0OC0xNC43NTQgMC05LjcwNSA3Ljg2Ny0xNy41NzIgMTcuNTcyLTE3LjU3MnptOTguNzk3IDE1LjQ2NHYxODkuMzA3bDQ2LjYyNiAxNi4yMlYyOTEuNTFsLTQ2LjYyNy0xNS44NjR6IiBmaWxsPSIjZmZmZjAwIiBmaWxsLW9wYWNpdHk9IjEiPjwvcGF0aD48L2c+PC9zdmc+Cg=="),O=i.default.div.withConfig({displayName:"AdventureSiteGenerator__RoomType",componentId:"sc-um8jfy-10"})(["font-weight:bold;"]),f=i.default.div.withConfig({displayName:"AdventureSiteGenerator__RoomsKey",componentId:"sc-um8jfy-11"})(["position:absolute;width:30rem;left:1rem;",""],o.Z.phone`
        font-size: 0.8rem;
    `),S=i.default.div.withConfig({displayName:"AdventureSiteGenerator__RoomsKeyEntry",componentId:"sc-um8jfy-12"})(["display:flex;align-items:center;","{margin-right:0.3rem;}"],C),Y=i.default.div.withConfig({displayName:"AdventureSiteGenerator__Credits",componentId:"sc-um8jfy-13"})(["margin-top:4rem;margin-bottom:8rem;text-align:center;font-size:0.8rem;color:#999;a{color:#999;}"]);var U=()=>{const{t:t}=(0,y.$G)("adventure_site_generator"),e=t("data",{returnObjects:!0}),[{name:M,summary:i,rooms:N},u]=D(e);return n.createElement(j.OO,null,n.createElement(m.q,null,n.createElement("title",null,t("pageTitle"))),n.createElement(I.$t,null,n.createElement(I.Dx,null,t("title")),n.createElement(I.ZV,{onClick:()=>u()},t("ui.rollButton"))),n.createElement(z,null,n.createElement(l,null,M),n.createElement(y.cC,{t:t,i18nKey:"data.summary.format",values:i,tOptions:{escapeValue:!1},components:{b:n.createElement(d,null)}})),n.createElement(s,null,n.createElement(f,null,n.createElement(S,null,n.createElement(p,null)," ",t("labels.creature")),n.createElement(S,null,n.createElement(E,null)," ",t("labels.treasure"))),n.createElement(A,null,N.map((t=>{let{id:e,position:M,creature:i,treasure:N,type:u,description:r}=t;return n.createElement(x,{key:e,posX:M.x,posY:M.y,creature:i,treasure:N},n.createElement(O,null,u),r,n.createElement(w,null,i&&n.createElement(p,null),N&&n.createElement(E,null)))})))),n.createElement(Y,null,n.createElement(y.cC,{t:t,i18nKey:"other.credits",components:{a:n.createElement("a",null)}})))};i.default.div.withConfig({displayName:"adventure-site__BodyDark",componentId:"sc-1qbrhs6-0"})(["position:absolute;background:#eee;height:100%;width:100%;"]);var h=()=>n.createElement(u.Z,null,n.createElement(N.Z,{title:"Adventure site generator"}),n.createElement(r.Z,{showLanguage:!0}),n.createElement(U,null))},7762:function(t){t.exports=function(t,e){for(var M,n=-1,i=t.length;++n<i;){var N=e(t[n]);void 0!==N&&(M=void 0===M?N:M+N)}return M}},4290:function(t,e,M){var n=M(6557);t.exports=function(t){return"function"==typeof t?t:n}},9087:function(t){t.exports={cap:!1,curry:!1,fixed:!1,immutable:!1,rearg:!1}},5919:function(t,e,M){var n=M(2822)("sum",M(2297),M(9087));n.placeholder=M(9306),t.exports=n},6356:function(t,e,M){var n=M(2822)("times",M(8913));n.placeholder=M(9306),t.exports=n},2297:function(t,e,M){var n=M(7762),i=M(6557);t.exports=function(t){return t&&t.length?n(t,i):0}},8913:function(t,e,M){var n=M(2545),i=M(4290),N=M(554),u=4294967295,r=Math.min;t.exports=function(t,e){if((t=N(t))<1||t>9007199254740991)return[];var M=u,y=r(t,u);e=i(e),t-=u;for(var a=n(y,e);++M<t;)e(M);return a}},3416:function(t,e,M){"use strict";M.d(e,{x0:function(){return n}});let n=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"")}}]);
//# sourceMappingURL=component---src-pages-adventure-site-js-359e3f1516e1d1a9eb65.js.map