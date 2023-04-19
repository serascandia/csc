"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[268],{6236:(v,c,n)=>{n.d(c,{J:()=>s});var f=n(1281),l=n(8288),e=n(4650),u=n(6895);function p(o,t){1&o&&(e.ynx(0),e.TgZ(1,"div",1),e.Hsn(2),e.qZA(),e.TgZ(3,"div",2),e.Hsn(4,1),e.qZA(),e.BQk())}function a(o,t){1&o&&(e.TgZ(0,"div",4),e.Hsn(1,3),e.qZA()),2&o&&e.Q6J("@expandCollapse",void 0)}function m(o,t){if(1&o&&(e.ynx(0),e.Hsn(1,2),e.YNc(2,a,2,1,"div",3),e.BQk()),2&o){const i=e.oxw();e.xp6(2),e.Q6J("ngIf",i.expanded)}}const x=[[["","fuseCardFront",""]],[["","fuseCardBack",""]],"*",[["","fuseCardExpansion",""]]];class d{constructor(){this.expanded=!1,this.face="front",this.flippable=!1}get classList(){return{"fuse-card-expanded":this.expanded,"fuse-card-face-back":this.flippable&&"back"===this.face,"fuse-card-face-front":this.flippable&&"front"===this.face,"fuse-card-flippable":this.flippable}}ngOnChanges(t){"expanded"in t&&(this.expanded=(0,f.Ig)(t.expanded.currentValue)),"flippable"in t&&(this.flippable=(0,f.Ig)(t.flippable.currentValue))}}d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=e.Xpm({type:d,selectors:[["fuse-card"]],hostVars:2,hostBindings:function(t,i){2&t&&e.Tol(i.classList)},inputs:{expanded:"expanded",face:"face",flippable:"flippable"},exportAs:["fuseCard"],features:[e.TTD],ngContentSelectors:["[fuseCardFront]","[fuseCardBack]","*","[fuseCardExpansion]"],decls:2,vars:2,consts:[[4,"ngIf"],[1,"fuse-card-front"],[1,"fuse-card-back"],["class","fuse-card-expansion",4,"ngIf"],[1,"fuse-card-expansion"]],template:function(t,i){1&t&&(e.F$t(x),e.YNc(0,p,5,0,"ng-container",0),e.YNc(1,m,3,1,"ng-container",0)),2&t&&(e.Q6J("ngIf",i.flippable),e.xp6(1),e.Q6J("ngIf",!i.flippable))},dependencies:[u.O5],styles:["fuse-card{position:relative;display:flex;overflow:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable{border-radius:0;overflow:visible;transform-style:preserve-3d;transition:transform 1s;perspective:600px;background:transparent;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front{visibility:hidden;opacity:0;transform:rotateY(180deg)}fuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back{visibility:visible;opacity:1;transform:rotateY(360deg)}fuse-card.fuse-card-flippable .fuse-card-front,fuse-card.fuse-card-flippable .fuse-card-back{display:flex;flex-direction:column;flex:1 1 auto;z-index:10;transition:transform .5s ease-out 0s,visibility 0s ease-in .2s,opacity 0s ease-in .2s;-webkit-backface-visibility:hidden;backface-visibility:hidden;--tw-bg-opacity: 1;background-color:rgba(var(--fuse-bg-card-rgb),var(--tw-bg-opacity));border-radius:1rem;--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}fuse-card.fuse-card-flippable .fuse-card-front{position:relative;opacity:1;visibility:visible;transform:rotateY(0);overflow:hidden}fuse-card.fuse-card-flippable .fuse-card-back{position:absolute;inset:0;opacity:0;visibility:hidden;transform:rotateY(180deg);overflow:hidden auto}\n"],encapsulation:2,data:{animation:l.L}});class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez]})},4268:(v,c,n)=>{n.r(c),n.d(c,{AuthConfirmationRequiredModule:()=>s});var f=n(9299),l=n(4859),e=n(6236),u=n(4466),p=n(8288),a=n(4650),m=n(9085);const x=function(){return["/sign-in"]};class r{constructor(){}}r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=a.Xpm({type:r,selectors:[["auth-confirmation-required"]],decls:20,vars:3,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card","bg-sky-100","dark:border-l"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"mt-4"],[1,"mt-8","text-md","font-medium","text-secondary"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden"],[1,"w-full","mx-auto","sm:mx-0"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6","mb-10",3,"color"]],template:function(t,i){1&t&&(a.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),a._UZ(4,"img",4),a.qZA(),a.TgZ(5,"div",5),a._uU(6,"Confirmation required"),a.qZA(),a.TgZ(7,"div",6),a._uU(8," A confirmation mail with instructions has been sent to your email address. Follow those instructions to confirm your email address and activate your account. "),a.qZA(),a.TgZ(9,"div",7)(10,"span"),a._uU(11,"Return to"),a.qZA(),a.TgZ(12,"a",8),a._uU(13,"sign in "),a.qZA()()()(),a.TgZ(14,"div",9)(15,"div",10)(16,"button",11)(17,"span"),a._uU(18," Sistema de Control de Hemoderivados "),a.qZA()(),a._UZ(19,"app-carousel"),a.qZA()()()),2&t&&(a.xp6(12),a.Q6J("routerLink",a.DdM(2,x)),a.xp6(4),a.Q6J("color","primary"))},dependencies:[f.rH,l.lW,m.F],encapsulation:2,data:{animation:p.L}});const d=[{path:"",component:r}];class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=a.oAB({type:s}),s.\u0275inj=a.cJS({imports:[f.Bz.forChild(d),l.ot,e.J,u.m]})}}]);