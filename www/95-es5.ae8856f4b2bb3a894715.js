(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"72vL":function(e,o,r){"use strict";r.r(o),r.d(o,"iosTransitionAnimation",function(){return n}),r.d(o,"shadow",function(){return t});var t=function(e){return e.shadowRoot||e},n=function(e,o,r){var n="opacity",a="translateX",l="back"===r.direction,d="rtl"===o.ownerDocument.dir,i=d?"-99.5%":"99.5%",f=d?"33%":"-33%",c=r.enteringEl,m=r.leavingEl,s=c.querySelector(":scope > ion-content"),u=c.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),y=c.querySelectorAll(":scope > ion-header > ion-toolbar"),S=new e,b=new e;if(b.addElement(c).duration(r.duration||540).easing(r.easing||"cubic-bezier(0.32,0.72,0,1)").beforeRemoveClass("ion-page-invisible"),m&&o){var T=new e;T.addElement(o),b.add(T)}if(s||0!==y.length||0!==u.length?S.addElement(s).addElement(u):S.addElement(c.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),b.add(S),l)S.beforeClearStyles([n]).fromTo(a,f,"0%",!0).fromTo(n,.8,1,!0);else if(S.beforeClearStyles([n]).fromTo(a,i,"0%",!0),s){var w=t(s).querySelector(".transition-effect");if(w){var E=w.querySelector(".transition-cover"),p=w.querySelector(".transition-shadow"),q=new e,v=new e,g=new e;q.addElement(w).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),v.addElement(E).beforeClearStyles([n]).fromTo(n,0,.1,!0),g.addElement(p).beforeClearStyles([n]).fromTo(n,.7,.03,!0),S.add(q).add(v).add(g)}}if(y.forEach(function(o){var r=new e,c=new e,m=new e,s=new e,u=new e,y=new e,S=o.querySelector("ion-back-button");if(r.addElement(o),b.add(r),c.addElement(o.querySelector("ion-title")),m.addElement(o.querySelectorAll("ion-buttons,[menuToggle]")),s.addElement(o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])")),u.addElement(t(o).querySelector(".toolbar-background")),S&&y.addElement(S),r.add(c).add(m).add(s).add(u).add(y),c.fromTo(n,.01,1,!0),m.fromTo(n,.01,1,!0),s.fromTo(n,.01,1,!0),l)c.fromTo(a,f,"0%",!0),s.fromTo(a,f,"0%",!0),y.fromTo(n,.01,1,!0);else if(c.fromTo(a,i,"0%",!0),s.fromTo(a,i,"0%",!0),u.beforeClearStyles([n]).fromTo(n,.01,1,!0),y.fromTo(n,.01,1,!0),S){var T=new e;T.addElement(t(S).querySelector(".button-text")).fromTo(a,d?"-100px":"100px","0px"),r.add(T)}}),m){var C=new e,h=m.querySelector(":scope > ion-content");if(C.addElement(h).addElement(m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),b.add(C),l){if(C.beforeClearStyles([n]).fromTo(a,"0%",d?"-100%":"100%"),h){var A=t(h).querySelector(".transition-effect");if(A){var k=A.querySelector(".transition-cover"),x=A.querySelector(".transition-shadow"),J=new e,R=new e,z=new e;J.addElement(A).beforeStyles({opacity:"1"}).afterStyles({opacity:""}),R.addElement(k).beforeClearStyles([n]).fromTo(n,.1,0,!0),z.addElement(x).beforeClearStyles([n]).fromTo(n,.7,.03,!0),C.add(J).add(R).add(z)}}}else C.fromTo(a,"0%",f,!0).fromTo(n,1,.8,!0);m.querySelectorAll(":scope > ion-header > ion-toolbar").forEach(function(o){var r=new e,i=new e,c=new e,m=new e,s=o.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"),u=new e,y=new e,S=o.querySelector("ion-back-button");if(r.addElement(o),i.addElement(o.querySelector("ion-title")),c.addElement(o.querySelectorAll("ion-buttons,[menuToggle]")),s.length>0&&m.addElement(s),u.addElement(t(o).querySelector(".toolbar-background")),S&&y.addElement(S),r.add(i).add(c).add(m).add(y).add(u),b.add(r),y.fromTo(n,.99,0),i.fromTo(n,.99,0),c.fromTo(n,.99,0,0),m.fromTo(n,.99,0),l){if(i.fromTo(a,"0%",d?"-100%":"100%"),m.fromTo(a,"0%",d?"-100%":"100%"),u.beforeClearStyles([n]).fromTo(n,1,.01),S){var T=new e;T.addElement(t(S).querySelector(".button-text")),T.fromTo(a,"0%",(d?-124:124)+"px"),r.add(T)}}else i.fromTo(a,"0%",f).afterClearStyles(["transform"]),m.fromTo(a,"0%",f).afterClearStyles(["transform",n]),y.afterClearStyles([n]),i.afterClearStyles([n]),c.afterClearStyles([n])})}return Promise.resolve(b)}}}]);