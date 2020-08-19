!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function e(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Yj9t:function(t,i,a){"use strict";a.r(i),a.d(i,"AuthModule",(function(){return _}));var o=a("rhD1"),r=a("ofXK"),u=a("3Pt+"),c=a("tyNb"),s=a("fXoL"),b=a("qXBG"),f=a("Wp6s"),l=a("Xa2L"),m=a("kmnG"),d=a("qFsG"),p=a("bTqV");function g(n,t){1&n&&s.Lb(0,"mat-spinner")}function h(n,t){1&n&&(s.Pb(0,"mat-error"),s.uc(1,"Please enter a valid email."),s.Ob())}function v(n,t){1&n&&(s.Pb(0,"mat-error"),s.uc(1,"Please enter a valid password."),s.Ob())}function y(n,t){1&n&&(s.Pb(0,"button",9),s.uc(1,"Login"),s.Ob())}function I(n,t){if(1&n){var e=s.Qb();s.Pb(0,"form",2,3),s.Wb("submit",(function(){s.lc(e);var n=s.jc(1);return s.ac().onLogin(n)})),s.Pb(2,"mat-form-field"),s.Lb(3,"input",4,5),s.tc(5,h,2,0,"mat-error",0),s.Ob(),s.Pb(6,"mat-form-field"),s.Lb(7,"input",6,7),s.tc(9,v,2,0,"mat-error",0),s.tc(10,y,2,0,"button",8),s.Ob(),s.Ob()}if(2&n){var i=s.jc(4),a=s.jc(8),o=s.ac();s.zb(5),s.fc("ngIf",i.invalid),s.zb(4),s.fc("ngIf",a.invalid),s.zb(1),s.fc("ngIf",!o.isLoading)}}function P(n,t){1&n&&s.Lb(0,"mat-spinner")}function w(n,t){1&n&&(s.Pb(0,"mat-error"),s.uc(1,"Please enter a valid email."),s.Ob())}function L(n,t){1&n&&(s.Pb(0,"mat-error"),s.uc(1,"Please enter a valid password."),s.Ob())}function O(n,t){1&n&&(s.Pb(0,"button",9),s.uc(1,"Signup"),s.Ob())}function S(n,t){if(1&n){var e=s.Qb();s.Pb(0,"form",2,3),s.Wb("submit",(function(){s.lc(e);var n=s.jc(1);return s.ac().onSignup(n)})),s.Pb(2,"mat-form-field"),s.Lb(3,"input",4,5),s.tc(5,w,2,0,"mat-error",0),s.Ob(),s.Pb(6,"mat-form-field"),s.Lb(7,"input",6,7),s.tc(9,L,2,0,"mat-error",0),s.tc(10,O,2,0,"button",8),s.Ob(),s.Ob()}if(2&n){var i=s.jc(4),a=s.jc(8),o=s.ac();s.zb(5),s.fc("ngIf",i.invalid),s.zb(4),s.fc("ngIf",a.invalid),s.zb(1),s.fc("ngIf",!o.isLoading)}}var M,k,j,z,C=[{path:"login",component:(k=function(){function t(e){n(this,t),this.authService=e,this.isLoading=!1}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.authStatusSub=this.authService.getAuthStatusListener().subscribe((function(t){n.isLoading=!1}))}},{key:"onLogin",value:function(n){n.invalid||(this.isLoading=!0,this.authService.login(n.value.email,n.value.password))}},{key:"ngOnDestroy",value:function(){this.authStatusSub.unsubscribe()}}]),t}(),k.\u0275fac=function(n){return new(n||k)(s.Kb(b.a))},k.\u0275cmp=s.Eb({type:k,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["loginForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-mail address","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(n,t){1&n&&(s.Pb(0,"mat-card"),s.tc(1,g,1,0,"mat-spinner",0),s.tc(2,I,11,3,"form",1),s.Ob()),2&n&&(s.zb(1),s.fc("ngIf",t.isLoading),s.zb(1),s.fc("ngIf",!t.isLoading))},directives:[f.a,r.k,l.b,u.p,u.j,u.k,m.c,d.a,u.a,u.i,u.l,u.n,u.b,m.b,p.b],styles:["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),k)},{path:"signup",component:(M=function(){function t(e){n(this,t),this.authService=e,this.isLoading=!1}return e(t,[{key:"ngOnInit",value:function(){var n=this;this.authStatusSub=this.authService.getAuthStatusListener().subscribe((function(t){n.isLoading=!1}))}},{key:"onSignup",value:function(n){n.invalid||(this.isLoading=!0,this.authService.createUser(n.value.email,n.value.password))}},{key:"ngOnDestroy",value:function(){this.authStatusSub.unsubscribe()}}]),t}(),M.\u0275fac=function(n){return new(n||M)(s.Kb(b.a))},M.\u0275cmp=s.Eb({type:M,selectors:[["ng-component"]],decls:3,vars:2,consts:[[4,"ngIf"],[3,"submit",4,"ngIf"],[3,"submit"],["signupForm","ngForm"],["matInput","","name","email","ngModel","","type","email","placeholder","E-mail address","required","","email",""],["emailInput","ngModel"],["type","password","name","password","ngModel","","matInput","","placeholder","Password","required",""],["passwordInput","ngModel"],["mat-raised-button","","color","accent","type","submit",4,"ngIf"],["mat-raised-button","","color","accent","type","submit"]],template:function(n,t){1&n&&(s.Pb(0,"mat-card"),s.tc(1,P,1,0,"mat-spinner",0),s.tc(2,S,11,3,"form",1),s.Ob()),2&n&&(s.zb(1),s.fc("ngIf",t.isLoading),s.zb(1),s.fc("ngIf",!t.isLoading))},directives:[f.a,r.k,l.b,u.p,u.j,u.k,m.c,d.a,u.a,u.i,u.l,u.n,u.b,m.b,p.b],styles:["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{width:100%}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),M)}],q=((z=function t(){n(this,t)}).\u0275mod=s.Ib({type:z}),z.\u0275inj=s.Hb({factory:function(n){return new(n||z)},imports:[[c.e.forChild(C)],c.e]}),z),_=((j=function t(){n(this,t)}).\u0275mod=s.Ib({type:j}),j.\u0275inj=s.Hb({factory:function(n){return new(n||j)},imports:[[r.c,o.a,u.g,q]]}),j)}}])}();