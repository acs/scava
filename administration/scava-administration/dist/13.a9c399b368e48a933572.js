(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/cdV":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=function(){},u=t("pMnS"),a=t("ZYCi"),r=t("Ip0R"),i=t("lwpf"),c=t("ebCm"),s=t("X3fo"),g=function(){function n(n,l){var t=this;this.router=n,this.localStorageService=l,this.pushRightClass="push-right",this.router.events.subscribe(function(n){n instanceof a.d&&window.innerWidth<=992&&t.isToggled()&&t.toggleSidebar()})}return n.prototype.ngOnInit=function(){null==this.username&&(this.username=this.localStorageService.getUsername())},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.clear()},n}(),d=e.La({encapsulation:0,styles:[["[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]{background-color:#f8f8f8}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{color:#ff9400;font-weight:700}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{color:#000}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover{color:#337ab7}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]{width:300px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]{border-bottom:1px solid #ddd;padding:5px 10px}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:last-child{border-bottom:none}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:13px;font-weight:600}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   .messages[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .last[_ngcontent-%COMP%]{font-size:12px;margin:0}"]],data:{}});function p(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,4,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Xa(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.Ma(1,671744,null,0,a.o,[a.l,a.a,r.i],{routerLink:[0,"routerLink"]},null),e.Ya(2,3),(n()(),e.Na(3,0,null,null,0,"i",[["class","fa fa-fw fa-user"]],null,null,null,null,null)),(n()(),e.fb(4,null,[" "," "]))],function(n,l){n(l,1,0,n(l,2,0,"/profile",l.component.username,"edit"))},function(n,l){n(l,0,0,e.Xa(l,1).target,e.Xa(l,1).href),n(l,4,0,"Profile")})}function f(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,4,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Xa(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.Ma(1,671744,null,0,a.o,[a.l,a.a,r.i],{routerLink:[0,"routerLink"]},null),e.Ya(2,3),(n()(),e.Na(3,0,null,null,0,"i",[["class","fa fa-fw fa-clock-o"]],null,null,null,null,null)),(n()(),e.fb(4,null,[" "," "]))],function(n,l){n(l,1,0,n(l,2,0,"/password",l.component.username,"edit"))},function(n,l){n(l,0,0,e.Xa(l,1).target,e.Xa(l,1).href),n(l,4,0,"Password")})}function b(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,28,"nav",[["class","navbar navbar-expand-lg fixed-top"]],null,null,null,null,null)),(n()(),e.Na(1,0,null,null,2,"a",[["class","navbar-brand"],["href","#"]],null,null,null,null,null)),(n()(),e.Na(2,0,null,null,0,"img",[["src","assets/images/CROSSMINER_logo.png"],["width","75px"]],null,null,null,null,null)),(n()(),e.fb(-1,null,[" Administration"])),(n()(),e.Na(4,0,null,null,1,"button",[["class","navbar-toggler"],["type","button"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleSidebar()&&e),e},null,null)),(n()(),e.Na(5,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bars text-muted"]],null,null,null,null,null)),(n()(),e.Na(6,0,null,null,22,"div",[["class","collapse navbar-collapse"]],null,null,null,null,null)),(n()(),e.Na(7,0,null,null,21,"ul",[["class","navbar-nav ml-auto"]],null,null,null,null,null)),(n()(),e.Na(8,0,null,null,20,"li",[["class","nav-item dropdown"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(n,l,t){var o=!0;return"keyup.esc"===l&&(o=!1!==e.Xa(n,9).closeFromOutsideEsc()&&o),"document:click"===l&&(o=!1!==e.Xa(n,9).closeFromClick(t)&&o),o},null,null)),e.Ma(9,212992,null,2,i.a,[c.a,e.x],null,null),e.db(335544320,1,{_menu:0}),e.db(335544320,2,{_anchor:0}),(n()(),e.Na(12,0,null,null,5,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Xa(n,13).toggleOpen()&&o),o},null,null)),e.Ma(13,16384,null,0,i.d,[i.a,e.k],null,null),e.cb(2048,[[2,4]],i.b,null,[i.d]),(n()(),e.Na(15,0,null,null,0,"i",[["class","fa fa-user"]],null,null,null,null,null)),(n()(),e.fb(16,null,[" Hi, "," "])),(n()(),e.Na(17,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(n()(),e.Na(18,0,null,null,10,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),e.Ma(19,16384,[[1,4]],0,i.c,[i.a,e.k,e.B],null,null),(n()(),e.Ea(16777216,null,null,1,null,p)),e.Ma(21,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.Ea(16777216,null,null,1,null,f)),e.Ma(23,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.Na(24,0,null,null,4,"a",[["class","dropdown-item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0,u=n.component;return"click"===l&&(o=!1!==e.Xa(n,25).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),"click"===l&&(o=!1!==u.onLoggedout()&&o),o},null,null)),e.Ma(25,671744,null,0,a.o,[a.l,a.a,r.i],{routerLink:[0,"routerLink"]},null),e.Ya(26,1),(n()(),e.Na(27,0,null,null,0,"i",[["class","fa fa-fw fa-power-off"]],null,null,null,null,null)),(n()(),e.fb(28,null,[" "," "]))],function(n,l){var t=l.component;n(l,9,0),n(l,21,0,!t.localStorageService.hasRole("ROLE_ADMIN")),n(l,23,0,!t.localStorageService.hasRole("ROLE_ADMIN")),n(l,25,0,n(l,26,0,"/login"))},function(n,l){var t=l.component;n(l,8,0,e.Xa(l,9).isOpen()),n(l,12,0,e.Xa(l,13).dropdown.isOpen()),n(l,16,0,t.username),n(l,18,0,!0,e.Xa(l,19).dropdown.isOpen(),e.Xa(l,19).placement),n(l,24,0,e.Xa(l,25).target,e.Xa(l,25).href),n(l,28,0,"Log Out")})}var M=function(){function n(n,l){var t=this;this.router=n,this.localStorageService=l,this.isActive=!1,this.showMenu="",this.pushRightClass="push-right",this.router.events.subscribe(function(n){n instanceof a.d&&window.innerWidth<=992&&t.isToggled()&&t.toggleSidebar()})}return n.prototype.eventCalled=function(){this.isActive=!this.isActive},n.prototype.addExpandClass=function(n){this.showMenu=n===this.showMenu?"0":n},n.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},n.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},n.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},n.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},n}(),h=e.La({encapsulation:0,styles:[[".sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;z-index:1000;top:56px;left:235px;width:240px;margin-left:-235px;border:none;overflow-y:auto;background-color:#f8f8f8;bottom:0;overflow-x:hidden;padding-bottom:40px;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]{background:#f8f8f8;border:0;border-radius:0;color:#000;text-decoration:none}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.list-group-item[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{margin-right:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a.router-link-active[_ngcontent-%COMP%], .sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background:#ebebeb;color:#337ab7}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%]{padding-top:10px}.sidebar[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%]   .header-fields[_ngcontent-%COMP%] > .list-group-item[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(255,255,255,.2)}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus{border-radius:none;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{font-size:1rem;height:50px;margin-bottom:0}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999;text-decoration:none;font-weight:400;background:#f8f8f8}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:relative;display:block;padding:1rem 1.5rem .75rem}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff;outline:0;outline-offset:-2px}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]:hover{background:#ebebeb}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]{border-radious:0;border:none}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border-radius:0;background-color:#f8f8f8;border:0 solid transparent}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#999}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}.sidebar[_ngcontent-%COMP%]   .sidebar-dropdown[_ngcontent-%COMP%]   .panel-collapse[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background:#ebebeb}.nested-menu[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.nested-menu[_ngcontent-%COMP%]   .nested[_ngcontent-%COMP%]{list-style-type:none}.nested-menu[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:none;height:0}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]{display:block;list-style-type:none;height:auto}.nested-menu[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]   ul.submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;padding:10px;display:block}@media screen and (max-width:992px){.sidebar[_ngcontent-%COMP%]{top:54px;left:0}}@media (min-width:992px){.header-fields[_ngcontent-%COMP%]{display:none}}[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}[_ngcontent-%COMP%]::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 0 #fff;border-radius:3px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:3px;-webkit-box-shadow:inset 0 0 3px #fff}"]],data:{}});function C(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,3,"a",[["class","list-group-item"],["routerLink","/user-management"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Xa(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.Ma(1,671744,null,0,a.o,[a.l,a.a,r.i],{routerLink:[0,"routerLink"]},null),(n()(),e.Na(2,0,null,null,0,"i",[["class","fa fa-lg fa-user-plus"]],null,null,null,null,null)),(n()(),e.fb(3,null,["\xa0"," "]))],function(n,l){n(l,1,0,"/user-management")},function(n,l){n(l,0,0,e.Xa(l,1).target,e.Xa(l,1).href),n(l,3,0,"User management")})}function m(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,3,"a",[["class","list-group-item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addExpandClass("pages")&&e),e},null,null)),(n()(),e.Na(1,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.Na(2,0,null,null,0,"i",[["class","fa fa-lg fa-folder-open"]],null,null,null,null,null)),(n()(),e.fb(3,null,["\xa0 ",""]))],null,function(n,l){n(l,3,0,"New Project")})}function O(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,34,"nav",[["class","sidebar"]],null,null,null,null,null)),e.Ma(1,278528,null,0,r.j,[e.q,e.r,e.k,e.B],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.ab(2,{sidebarPushRight:0}),(n()(),e.Na(3,0,null,null,31,"div",[["class","list-group"]],null,null,null,null,null)),(n()(),e.Na(4,0,null,null,7,"a",[["class","list-group-item"],["routerLink","/home"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Xa(n,5).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.Ma(5,671744,[[2,4]],0,a.o,[a.l,a.a,r.i],{routerLink:[0,"routerLink"]},null),e.Ma(6,1720320,null,2,a.n,[a.l,e.k,e.B,e.h],{routerLinkActive:[0,"routerLinkActive"]},null),e.db(603979776,1,{links:1}),e.db(603979776,2,{linksWithHrefs:1}),e.Ya(9,1),(n()(),e.Na(10,0,null,null,0,"i",[["class","fa fa-lg fa-home"]],null,null,null,null,null)),(n()(),e.fb(11,null,["\xa0"," "])),(n()(),e.Ea(16777216,null,null,1,null,C)),e.Ma(13,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.Na(14,0,null,null,3,"a",[["class","list-group-item"],["routerLink","/project"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Xa(n,15).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.Ma(15,671744,null,0,a.o,[a.l,a.a,r.i],{routerLink:[0,"routerLink"]},null),(n()(),e.Na(16,0,null,null,0,"i",[["class","fa fa-lg fa-cube"]],null,null,null,null,null)),(n()(),e.fb(17,null,["\xa0"," "])),(n()(),e.Na(18,0,null,null,16,"div",[["class","nested-menu"]],null,null,null,null,null)),(n()(),e.Ea(16777216,null,null,1,null,m)),e.Ma(20,16384,null,0,r.l,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.Na(21,0,null,null,13,"li",[["class","nested"]],[[2,"expand",null]],null,null,null,null)),(n()(),e.Na(22,0,null,null,12,"ul",[["class","submenu"]],null,null,null,null,null)),(n()(),e.Na(23,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),e.Na(24,0,null,null,4,"a",[["href","javascript:void(0)"],["routerLink","/project/import"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Xa(n,25).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.Ma(25,671744,null,0,a.o,[a.l,a.a,r.i],{routerLink:[0,"routerLink"]},null),(n()(),e.Na(26,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.Na(27,0,null,null,0,"i",[["class","fa fa-lg fa-plus-circle "]],null,null,null,null,null)),(n()(),e.fb(28,null,["\xa0 "," "])),(n()(),e.Na(29,0,null,null,5,"li",[],null,null,null,null,null)),(n()(),e.Na(30,0,null,null,4,"a",[["href","javascript:void(0)"],["routerLink","/project/create"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Xa(n,31).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&o),o},null,null)),e.Ma(31,671744,null,0,a.o,[a.l,a.a,r.i],{routerLink:[0,"routerLink"]},null),(n()(),e.Na(32,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),e.Na(33,0,null,null,0,"i",[["class","fa fa-lg fa-plus-circle"]],null,null,null,null,null)),(n()(),e.fb(34,null,["\xa0 "," "]))],function(n,l){var t=l.component;n(l,1,0,"sidebar",n(l,2,0,t.isActive)),n(l,5,0,"/home"),n(l,6,0,n(l,9,0,"router-link-active")),n(l,13,0,t.localStorageService.hasRole("ROLE_ADMIN")),n(l,15,0,"/project"),n(l,20,0,t.localStorageService.hasRole("ROLE_PROJECT_MANAGER")),n(l,25,0,"/project/import"),n(l,31,0,"/project/create")},function(n,l){var t=l.component;n(l,4,0,e.Xa(l,5).target,e.Xa(l,5).href),n(l,11,0,"Home"),n(l,14,0,e.Xa(l,15).target,e.Xa(l,15).href),n(l,17,0,"Projects Catalogue"),n(l,21,0,"pages"===t.showMenu),n(l,24,0,e.Xa(l,25).target,e.Xa(l,25).href),n(l,28,0,"Import Project"),n(l,30,0,e.Xa(l,31).target,e.Xa(l,31).href),n(l,34,0,"Create New Project")})}var P=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),_=e.La({encapsulation:0,styles:[[".main-container[_ngcontent-%COMP%]{margin-top:35px;margin-left:235px;padding:15px;-ms-overflow-x:hidden;overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden}@media screen and (max-width:992px){.main-container[_ngcontent-%COMP%]{margin-left:0!important}}"]],data:{}});function k(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,1,"app-header",[],null,null,null,b,d)),e.Ma(1,114688,null,0,g,[a.l,s.a],null,null),(n()(),e.Na(2,0,null,null,1,"app-sidebar",[],null,null,null,O,h)),e.Ma(3,49152,null,0,M,[a.l,s.a],null,null),(n()(),e.Na(4,0,null,null,2,"section",[["class","main-container"]],null,null,null,null,null)),(n()(),e.Na(5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.Ma(6,212992,null,0,a.q,[a.b,e.M,e.j,[8,null],e.h],null,null)],function(n,l){n(l,1,0),n(l,6,0)},null)}var v=e.Ja("app-layout",P,function(n){return e.hb(0,[(n()(),e.Na(0,0,null,null,1,"app-layout",[],null,null,null,k,_)),e.Ma(1,114688,null,0,P,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),w=function(){},y=t("C9m0");t.d(l,"LayoutModuleNgFactory",function(){return N});var N=e.Ka(o,[],function(n){return e.Ua([e.Va(512,e.j,e.Z,[[8,[u.a,v]],[3,e.j],e.v]),e.Va(4608,r.n,r.m,[e.s,[2,r.w]]),e.Va(4608,c.a,c.a,[]),e.Va(1073742336,r.b,r.b,[]),e.Va(1073742336,a.p,a.p,[[2,a.v],[2,a.l]]),e.Va(1073742336,w,w,[]),e.Va(1073742336,y.a,y.a,[]),e.Va(1073742336,o,o,[]),e.Va(1024,a.j,function(){return[[{path:"",component:P,children:[{path:"",redirectTo:"login"},{path:"profile",loadChildren:"./profile/profile.module#ProfileModule"},{path:"password",loadChildren:"./password/password.module#PasswordModule"},{path:"home",loadChildren:"./home/home.module#HomeModule"},{path:"project",loadChildren:"./project/project.module#ProjectModule"},{path:"user-management",loadChildren:"./user-management/user-management.module#UserManagementModule"}]}]]},[])])})}}]);