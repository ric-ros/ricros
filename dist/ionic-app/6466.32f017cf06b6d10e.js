"use strict";(self.webpackChunkionic_app=self.webpackChunkionic_app||[]).push([[6466],{6466:(S,g,r)=>{r.r(g),r.d(g,{HomePage:()=>k});var e=r(8256),o=r(9032),l=r(6290),c=r(6895),m=r(830);let p=(()=>{class t{constructor(){this.platform=(0,e.f3M)(o.t4)}isIos(){return this.platform.is("ios")}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function d(t,a){1&t&&e._UZ(0,"ion-icon",12)}const _=function(t){return{"dot-unread":t}},f=function(t){return{"star-checked":t}};function u(t,a){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"ion-item-sliding",null,1)(3,"ion-item-options",2),e.NdJ("ionSwipe",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.markRead(s.message.id))}),e.TgZ(4,"ion-item-option",3),e.NdJ("click",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.markRead(s.message.id))}),e._uU(5),e.qZA()(),e.TgZ(6,"ion-item",4),e._UZ(7,"div",5)(8,"div",6),e.TgZ(9,"ion-label",7)(10,"h2"),e._uU(11),e.TgZ(12,"span",8)(13,"ion-note"),e._uU(14),e.qZA(),e.YNc(15,d,1,0,"ion-icon",9),e.qZA()(),e.TgZ(16,"h3"),e._uU(17),e.qZA(),e.TgZ(18,"p"),e._uU(19),e.qZA()()(),e.TgZ(20,"ion-item-options",10),e.NdJ("ionSwipe",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.markImportant(s.message.id))}),e.TgZ(21,"ion-item-option",11),e.NdJ("click",function(){e.CHM(n);const s=e.oxw();return e.KtG(s.markImportant(s.message.id))}),e._uU(22),e.qZA()()(),e.BQk()}if(2&t){const n=e.oxw();e.xp6(5),e.hij(" ",n.message.read?"Mark as Unread":"Mark as Read"," "),e.xp6(1),e.Q6J("routerLink",n.message.id.toString())("detail",!1),e.xp6(1),e.Q6J("ngClass",e.VKq(11,_,!n.message.read)),e.xp6(1),e.Q6J("ngClass",e.VKq(13,f,n.message.important)),e.xp6(3),e.hij(" ",n.message.fromName," "),e.xp6(3),e.Oqu(n.message.date),e.xp6(1),e.Q6J("ngIf",n.platform.isIos()),e.xp6(2),e.Oqu(n.message.subject),e.xp6(2),e.Oqu(n.message.content),e.xp6(3),e.hij(" ",n.message.important?"Mark as Unimportant":"Mark as Important"," ")}}let h=(()=>{class t{constructor(){this.platform=(0,e.f3M)(p),this.dataService=(0,e.f3M)(m.D)}markRead(n){var i;this.dataService.toggleRead(n),null===(i=this.itemSlidingSection)||void 0===i||i.closeOpened()}markImportant(n){var i;this.dataService.toggleImportant(n),null===(i=this.itemSlidingSection)||void 0===i||i.closeOpened()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-message"]],viewQuery:function(n,i){if(1&n&&e.Gf(o.td,5),2&n){let s;e.iGM(s=e.CRH())&&(i.itemSlidingSection=s.first)}},inputs:{message:"message"},standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[[4,"ngIf"],["itemSlidingSection",""],["side","start",3,"ionSwipe"],["color","secondary","expandable","",3,"click"],[3,"routerLink","detail"],["slot","start",1,"dot",3,"ngClass"],["slot","end",1,"star",3,"ngClass"],[1,"ion-text-wrap"],[1,"date"],["aria-hidden","true","name","chevron-forward","size","small",4,"ngIf"],["side","end",3,"ionSwipe"],["color","tertiary","expandable","",3,"click"],["aria-hidden","true","name","chevron-forward","size","small"]],template:function(n,i){1&n&&e.YNc(0,u,23,15,"ng-container",0),2&n&&e.Q6J("ngIf",i.message)},dependencies:[o.Pc,o.gu,o.Ie,o.u8,o.IK,o.td,o.Q$,o.uN,o.YI,l.rH,c.O5,c.mk],styles:['@charset "UTF-8";ion-item[_ngcontent-%COMP%]{--padding-start: 0;--inner-padding-end: 0}ion-label[_ngcontent-%COMP%]{margin-top:12px;margin-bottom:12px}ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:600;margin:0}ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:95%}ion-item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{float:right;align-items:center;display:flex}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#c9c9ca}ion-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%]{font-size:15px;margin-right:8px;font-weight:400}ion-item[_ngcontent-%COMP%]   ion-note.md[_ngcontent-%COMP%]{margin-right:14px}.dot[_ngcontent-%COMP%]{display:block;height:12px;width:12px;border-radius:50%;border:1px solid var(--ion-color-primary);align-self:start;margin:16px 10px 16px 16px}.dot-unread[_ngcontent-%COMP%]{background:var(--ion-color-secondary)}.star[_ngcontent-%COMP%]:before{content:"\\2606";color:var(--ion-color-primary);margin:16px 10px 16px 16px}.star-checked[_ngcontent-%COMP%]:before{content:"\\2605";color:var(--ion-color-tertiary);margin:16px 10px 16px 16px}ion-footer[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{font-size:11px;font-weight:400}'],changeDetection:0}),t})();var x=r(9646);function M(t,a){1&t&&e._UZ(0,"app-message",10),2&t&&e.Q6J("message",a.$implicit)}function v(t,a){if(1&t&&(e.ynx(0),e.YNc(1,M,1,1,"app-message",9),e.BQk()),2&t){const n=e.oxw().ngIf;e.xp6(1),e.Q6J("ngForOf",n)}}function C(t,a){1&t&&(e.TgZ(0,"ion-item",11),e._UZ(1,"ion-icon",12),e.TgZ(2,"ion-label",13)(3,"ion-note"),e._uU(4,"No messages found"),e.qZA()()()),2&t&&e.Q6J("detail",!1)}function Z(t,a){if(1&t&&(e.ynx(0),e.YNc(1,v,2,1,"ng-container",6),e.YNc(2,C,5,1,"ng-template",null,8,e.W1O),e.BQk()),2&t){const n=a.ngIf,i=e.MAs(3);e.xp6(1),e.Q6J("ngIf",n.length)("ngIfElse",i)}}function P(t,a){1&t&&(e.TgZ(0,"ion-item")(1,"ion-label")(2,"h3"),e._UZ(3,"ion-skeleton-text",15),e.qZA(),e.TgZ(4,"p"),e._UZ(5,"ion-skeleton-text",16),e.qZA(),e.TgZ(6,"p"),e._UZ(7,"ion-skeleton-text",17),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("animated",!0),e.xp6(2),e.Q6J("animated",!0),e.xp6(2),e.Q6J("animated",!0))}const O=function(){return[1,2,3,4]};function T(t,a){1&t&&e.YNc(0,P,8,3,"ion-item",14),2&t&&e.Q6J("ngForOf",e.DdM(1,O))}let k=(()=>{class t{constructor(){this.activatedRoute=(0,e.f3M)(l.gz),this.dataService=(0,e.f3M)(m.D),this.platformService=(0,e.f3M)(p),this.folder=null}ngOnInit(){var n;switch(this.folder=this.activatedRoute.snapshot.paramMap.get("id"),null===(n=this.folder)||void 0===n?void 0:n.toLocaleLowerCase()){case"favorites":this.messages$=this.dataService.favoriteMessages$;break;case"inbox":this.messages$=this.dataService.inboxMessages$;break;default:this.messages$=(0,x.of)([])}}refresh(n){setTimeout(()=>{n.detail.complete()},1e3)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],standalone:!0,features:[e.jDz],decls:18,vars:8,consts:[[3,"translucent"],["slot","start"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],["collapse","condense"],["size","large"],[4,"ngIf","ngIfElse"],["loading",""],["noMessages",""],[3,"message",4,"ngFor","ngForOf"],[3,"message"],[3,"detail"],["aria-hidden","true","name","alert-circle-outline","slot","start"],[1,"ion-text-wrap"],[4,"ngFor","ngForOf"],[2,"width","30%","height","20px",3,"animated"],[2,"width","60%","height","15px",3,"animated"],[2,"width","90%",3,"animated"]],template:function(n,i){if(1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-content",2)(7,"ion-refresher",3),e.NdJ("ionRefresh",function(w){return i.refresh(w)}),e._UZ(8,"ion-refresher-content"),e.qZA(),e.TgZ(9,"ion-header",4)(10,"ion-toolbar")(11,"ion-title",5),e._uU(12),e.qZA()()(),e.TgZ(13,"ion-list"),e.YNc(14,Z,4,2,"ng-container",6),e.ALo(15,"async"),e.YNc(16,T,1,2,"ng-template",null,7,e.W1O),e.qZA()()),2&n){const s=e.MAs(17);e.Q6J("translucent",!0),e.xp6(5),e.Oqu(i.folder),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(6),e.hij(" ",i.folder," "),e.xp6(2),e.Q6J("ngIf",e.lcZ(15,6,i.messages$))("ngIfElse",s)}},dependencies:[o.Pc,o.Sm,o.W2,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.fG,o.uN,o.nJ,o.Wo,o.CK,o.wd,o.sr,h,c.sg,c.O5,c.Ov]}),t})()}}]);