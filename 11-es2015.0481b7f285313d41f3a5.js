(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"QR/W":function(n,t,e){"use strict";e.r(t),e.d(t,"DetailsPageModule",(function(){return k}));var o=e("ofXK"),i=e("3Pt+"),l=e("TEn/"),a=e("tyNb"),c=e("lJxs"),s=e("fXoL"),d=e("QNcV"),r=e("SXvR"),b=e("sSZD"),u=e("Vaw3");function g(n,t){if(1&n){const n=s.Mb();s.Lb(0,"ion-button",14),s.Tb("click",(function(){s.ec(n);const t=s.Vb().$implicit;return s.Vb().del(t)})),s.Jb(1,"ion-icon",15),s.Kb()}}function h(n,t){if(1&n){const n=s.Mb();s.Lb(0,"ion-card"),s.Lb(1,"ion-header"),s.Lb(2,"ion-badge"),s.Jb(3,"ion-icon",9),s.Kb(),s.Kb(),s.Lb(4,"ion-item"),s.Lb(5,"a",10),s.Lb(6,"ion-icon",11),s.Tb("click",(function(){s.ec(n);const e=t.$implicit;return s.Vb().getlinks(e)})),s.Kb(),s.Kb(),s.Lb(7,"ion-label",12),s.ic(8),s.Kb(),s.hc(9,g,2,0,"ion-button",13),s.Kb(),s.Kb()}if(2&n){const n=t.$implicit,e=s.Vb();s.yb(8),s.jc(" ",n.value.name," "),s.yb(1),s.ac("ngIf",e.getuid==n.value.uid)}}const f=function(){return["/uploader"]},p=[{path:"",component:(()=>{class n{constructor(n,t,e,o,i){this.auth=n,this.fileuploadservice=t,this.afdb=e,this.router=i,this.datakeys=[]}ngOnInit(){this.getuid=sessionStorage.getItem("uid")}function(){window.location.reload()}getlinks(n){window.open(""+n.value.url,"_blank")}checkuser(n){this.isSameUser=this.auth.currentUser.uid==n}del(n){this.fuid=n.value.uid,this.itemsRef.remove(""+this.datakeys[n.key]).then(()=>{console.log("item removed")}).catch(n=>{console.log("error",n)}),window.location.reload()}deleteFileUpload(n){this.fileuploadservice.deleteFile(n)}signOut(){this.auth.signOut().then(()=>{this.router.navigateByUrl("/",{replaceUrl:!0})})}ionViewDidEnter(){this.itemsRef=this.afdb.list("uploads"),this.itemsRef.valueChanges().subscribe(n=>{this.urldata=n}),this.afdb.list("/uploads").snapshotChanges().subscribe(n=>{for(let t=0;t<=n.length;t++)this.datakeys.push(n[t].key),this.keylength=this.datakeys.length}),this.fileuploadservice.getFiles(500).snapshotChanges().pipe(Object(c.a)(n=>n.map(n=>Object.assign({key:n.payload.key},n.payload.val())))).subscribe(n=>{this.fileUploads=n})}}return n.\u0275fac=function(t){return new(t||n)(s.Ib(d.a),s.Ib(r.a),s.Ib(b.a),s.Ib(u.a),s.Ib(a.f))},n.\u0275cmp=s.Cb({type:n,selectors:[["app-details"]],inputs:{fileUpload:"fileUpload"},decls:15,vars:7,consts:[["slot","end","padding",""],["fill","clear",3,"routerLink"],["name","cloud-upload","slot","icon-only"],["fill","clear",3,"click"],["name","log-out","slot","icon-only"],[4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end",1,"fabtn"],["fill","outline",3,"routerLink"],["name","cloud-upload"],["large","","name","document",1,"foldericon"],["target","_blank"],["name","download",1,"down",3,"click"],[1,"namelabel"],["slot","end","fill","clear","color","danger","class","del",3,"click",4,"ngIf"],["slot","end","fill","clear","color","danger",1,"del",3,"click"],["slot","icon-only","name","trash"]],template:function(n,t){1&n&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar"),s.Lb(2,"ion-title"),s.ic(3,"Dashboard "),s.Kb(),s.Lb(4,"ion-buttons",0),s.Lb(5,"ion-button",1),s.Jb(6,"ion-icon",2),s.Kb(),s.Lb(7,"ion-button",3),s.Tb("click",(function(){return t.signOut()})),s.Jb(8,"ion-icon",4),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Lb(9,"ion-content"),s.hc(10,h,10,2,"ion-card",5),s.Wb(11,"keyvalue"),s.Lb(12,"ion-fab",6),s.Lb(13,"ion-fab-button",7),s.Jb(14,"ion-icon",8),s.Kb(),s.Kb(),s.Kb()),2&n&&(s.yb(5),s.ac("routerLink",s.bc(5,f)),s.yb(5),s.ac("ngForOf",s.Xb(11,3,t.urldata)),s.yb(3),s.ac("routerLink",s.bc(6,f)))},directives:[l.n,l.v,l.u,l.e,l.d,l.A,a.g,l.o,l.k,o.j,l.l,l.m,l.f,l.c,l.q,l.r,o.k],pipes:[o.f],styles:["@media only screen and (max-width:600px){ion-card[_ngcontent-%COMP%]{width:50%;max-width:50%;display:inline-block}ion-badge[_ngcontent-%COMP%]{font-size:xx-large;font-weight:bolder;display:block;background-color:#789}.del[_ngcontent-%COMP%], .down[_ngcontent-%COMP%]{font-size:large;font-weight:bolder;display:block}}@media only screen and (min-width:600px){ion-card[_ngcontent-%COMP%]{min-width:45%;width:50%;max-width:50%;display:inline-block}ion-badge[_ngcontent-%COMP%]{font-size:xx-large;font-weight:bolder;display:block;background-color:#789}}ion-card[_ngcontent-%COMP%]{min-width:27%;width:27%;max-width:30%;display:inline-block}ion-badge[_ngcontent-%COMP%]{display:block;background-color:#789}.down[_ngcontent-%COMP%], ion-badge[_ngcontent-%COMP%]{font-size:xx-large;font-weight:bolder}.down[_ngcontent-%COMP%]{margin-right:30px}.namelabel[_ngcontent-%COMP%]{padding-top:50px;padding-bottom:50px}.foldericon[_ngcontent-%COMP%]{padding:25px;font-size:xx-large;font-weight:bolder}.del[_ngcontent-%COMP%]{font-size:17px}.fabtn[_ngcontent-%COMP%]{position:fixed}"]}),n})()}];let m=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[a.h.forChild(p)],a.h]}),n})(),k=(()=>{class n{}return n.\u0275mod=s.Gb({type:n}),n.\u0275inj=s.Fb({factory:function(t){return new(t||n)},imports:[[o.c,i.d,l.w,m]]}),n})()}}]);