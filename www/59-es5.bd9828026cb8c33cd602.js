(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"ZG/G":function(e,o,t){"use strict";t.r(o),t.d(o,"ion_popover",function(){return f});var i=t("mrSG"),r=t("3eIi"),n=(t("lSdy"),t("bjU6"),t("XIrJ")),s=t("fXh5"),p=t("6WfQ"),a=t("i7WA"),l=function(e,o,t){var i="top",r="left",n=o.querySelector(".popover-content"),s=n.getBoundingClientRect(),p=s.width,a=s.height,l=o.ownerDocument.defaultView.innerWidth,d=o.ownerDocument.defaultView.innerHeight,v=t&&t.target&&t.target.getBoundingClientRect(),h=null!=v&&"top"in v?v.top:d/2-a/2,u=null!=v&&"left"in v?v.left:l/2,f=v&&v.width||0,m=v&&v.height||0,b=o.querySelector(".popover-arrow"),w=b.getBoundingClientRect(),g=w.width,y=w.height;null==v&&(b.style.display="none");var x={top:h+m,left:u+f/2-g/2},k={top:h+m+(y-1),left:u+f/2-p/2},D=!1,P=!1;k.left<c+25?(D=!0,k.left=c):p+c+k.left+25>l&&(P=!0,k.left=l-p-c,r="right"),h+m+a>d&&h-a>0?(x.top=h-(y+1),k.top=h-a-(y-1),o.className=o.className+" popover-bottom",i="bottom"):h+m+a>d&&(n.style.bottom=c+"%"),b.style.top=x.top+"px",b.style.left=x.left+"px",n.style.top=k.top+"px",n.style.left=k.left+"px",D&&(n.style.left="calc("+k.left+"px + var(--ion-safe-area-left, 0px))"),P&&(n.style.left="calc("+k.left+"px - var(--ion-safe-area-right, 0px))"),n.style.transformOrigin=i+" "+r;var j=new e,O=new e;O.addElement(o.querySelector("ion-backdrop")),O.fromTo("opacity",.01,.08);var E=new e;return E.addElement(o.querySelector(".popover-wrapper")),E.fromTo("opacity",.01,1),Promise.resolve(j.addElement(o).easing("ease").duration(100).add(O).add(E))},c=5,d=function(e,o){var t=new e,i=new e;i.addElement(o.querySelector("ion-backdrop"));var r=new e;return r.addElement(o.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),i.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(i).add(r))},v=function(e,o,t){var i=o.ownerDocument,r="rtl"===i.dir,n="top",s=r?"right":"left",p=o.querySelector(".popover-content"),a=p.getBoundingClientRect(),l=a.width,c=a.height,d=i.defaultView.innerWidth,v=i.defaultView.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),f=null!=u&&"bottom"in u?u.bottom:v/2-c/2,m=u&&u.height||0,b={top:f,left:null!=u&&"left"in u?r?u.left-l+u.width:u.left:d/2-l/2};b.left<h?(b.left=h,s="left"):l+h+b.left>d&&(b.left=d-l-h,s="right"),f+m+c>v&&f-c>0?(b.top=f-c-m,o.className=o.className+" popover-bottom",n="bottom"):f+m+c>v&&(p.style.bottom=h+"px"),p.style.top=b.top+"px",p.style.left=b.left+"px",p.style.transformOrigin=n+" "+s;var w=new e,g=new e;g.addElement(o.querySelector("ion-backdrop")),g.fromTo("opacity",.01,.32);var y=new e;y.addElement(o.querySelector(".popover-wrapper")),y.fromTo("opacity",.01,1);var x=new e;x.addElement(o.querySelector(".popover-content")),x.fromTo("scale",.001,1);var k=new e;return k.addElement(o.querySelector(".popover-viewport")),k.fromTo("opacity",.01,1),Promise.resolve(w.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(g).add(y).add(x).add(k))},h=12,u=function(e,o){var t=new e,i=new e;i.addElement(o.querySelector("ion-backdrop"));var r=new e;return r.addElement(o.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),i.fromTo("opacity",.32,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(i).add(r))},f=function(){function e(e){var o=this;Object(r.m)(this,e),this.presented=!1,this.mode=Object(r.e)(this),this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),o.dismiss()},this.onBackdropTap=function(){o.dismiss(void 0,n.a)},this.onLifecycle=function(e){var t=o.usersElement,i=m[e.type];if(t&&i){var r=new CustomEvent(i,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(r)}},this.didPresent=Object(r.d)(this,"ionPopoverDidPresent",7),this.willPresent=Object(r.d)(this,"ionPopoverWillPresent",7),this.willDismiss=Object(r.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=Object(r.d)(this,"ionPopoverDidDismiss",7)}return e.prototype.present=function(){return i.b(this,void 0,void 0,function(){var e,o,t;return i.e(this,function(i){switch(i.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign({},this.componentProps,{popover:this.el}),t=this,[4,Object(p.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:return t.usersElement=i.sent(),[4,Object(a.a)(this.usersElement)];case 2:return i.sent(),[2,Object(n.e)(this,"popoverEnter",l,v,this.event)]}})})},e.prototype.dismiss=function(e,o){return i.b(this,void 0,void 0,function(){var t;return i.e(this,function(i){switch(i.label){case 0:return[4,Object(n.f)(this,e,o,"popoverLeave",d,u,this.event)];case 1:return(t=i.sent())?[4,Object(p.b)(this.delegate,this.usersElement)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,t]}})})},e.prototype.onDidDismiss=function(){return Object(n.g)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(n.g)(this.el,"ionPopoverWillDismiss")},e.prototype.render=function(){var e,o=Object(r.e)(this),t=this.onLifecycle;return Object(r.i)(r.a,{"aria-modal":"true","no-router":!0,style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign({},Object(s.b)(this.cssClass),(e={},e[o]=!0,e["popover-translucent"]=this.translucent,e)),onIonPopoverDidPresent:t,onIonPopoverWillPresent:t,onIonPopoverWillDismiss:t,onIonPopoverDidDismiss:t,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap},Object(r.i)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.i)("div",{class:"popover-wrapper"},Object(r.i)("div",{class:"popover-arrow"}),Object(r.i)("div",{class:"popover-content"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl].sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl] .sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after{top:-6px}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.popover-translucent.sc-ion-popover-ios-h .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}'},enumerable:!0,configurable:!0}),e}(),m={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"}}}]);