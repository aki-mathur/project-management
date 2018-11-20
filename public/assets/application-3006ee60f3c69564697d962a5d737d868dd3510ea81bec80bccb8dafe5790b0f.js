/*
 AngularJS v1.5.9
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(B){'use strict';function N(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.9/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function ra(a){if(null==a||Xa(a))return!1;if(K(a)||H(a)||E&&a instanceof E)return!0;
var b="length"in Object(a)&&a.length;return Z(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"===typeof a.item)}function q(a,b,d){var c,e;if(a)if(F(a))for(c in a)"prototype"===c||"length"===c||"name"===c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(K(a)||ra(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(zc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function Ac(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Bc(a){return function(b,d){a(d,b)}}function me(){return++sb}function Sb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(I(g)||F(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&I(n)?ba(n)?a[m]=new Date(n.valueOf()):Ya(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Tb(n)?a[m]=n.clone():(I(a[m])||(a[m]=K(n)?[]:{}),Sb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Sb(a,ta.call(arguments,1),!1)}function ne(a){return Sb(a,ta.call(arguments,1),!0)}function aa(a){return parseInt(a,10)}function Ub(a,b){return R(Object.create(a),b)}function C(){}function Za(a){return a}function ma(a){return function(){return a}}function Cc(a){return F(a.toString)&&a.toString!==na}function z(a){return"undefined"===typeof a}function u(a){return"undefined"!==
typeof a}function I(a){return null!==a&&"object"===typeof a}function zc(a){return null!==a&&"object"===typeof a&&!Dc(a)}function H(a){return"string"===typeof a}function Z(a){return"number"===typeof a}function ba(a){return"[object Date]"===na.call(a)}function F(a){return"function"===typeof a}function Ya(a){return"[object RegExp]"===na.call(a)}function Xa(a){return a&&a.window===a}function $a(a){return a&&a.$evalAsync&&a.$watch}function Ia(a){return"boolean"===typeof a}function oe(a){return a&&Z(a.length)&&
pe.test(na.call(a))}function Tb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function qe(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return P(a.nodeName||a[0]&&a[0].nodeName)}function ab(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b){function d(a,b){var d=b.$$hashKey,e;if(K(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(zc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!I(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Xa(a)||$a(a))throw va("cpws");var b=!1,c=e(a);void 0===c&&(c=K(a)?[]:Object.create(Dc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(na.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(F(a.cloneNode))return a.cloneNode(!0)}
var f=[],g=[];if(b){if(oe(b)||"[object ArrayBuffer]"===na.call(b))throw va("cpta");if(a===b)throw va("cpi");K(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function oa(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(K(a)){if(!K(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!oa(a[c],b[c]))return!1;return!0}}else{if(ba(a))return ba(b)?oa(a.getTime(),
b.getTime()):!1;if(Ya(a))return Ya(b)?a.toString()===b.toString():!1;if($a(a)||$a(b)||Xa(a)||Xa(b)||K(b)||ba(b)||Ya(b))return!1;d=S();for(c in a)if("$"!==c.charAt(0)&&!F(a[c])){if(!oa(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&u(b[c])&&!F(b[c]))return!1;return!0}return!1}function bb(a,b,d){return a.concat(ta.call(b,d))}function cb(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!F(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
bb(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function re(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Xa(b)?d="$WINDOW":b&&B.document===b?d="$DOCUMENT":$a(b)&&(d="$SCOPE");return d}function db(a,b){if(!z(a))return Z(b)||(b=b?2:null),JSON.stringify(a,re,b)}function Ec(a){return H(a)?JSON.parse(a):a}function Fc(a,b){a=a.replace(se,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return X(d)?b:d}function Vb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=Fc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function wa(a){a=E(a).clone();try{a.empty()}catch(b){}var d=E("<div>").append(a).html();try{return a[0].nodeType===Ma?P(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+P(b)})}catch(c){return P(d)}}function Gc(a){try{return decodeURIComponent(a)}catch(b){}}function Hc(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Gc(e),u(e)&&(f=u(f)?Gc(f):!0,sa.call(b,e)?K(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Wb(a){var b=[];q(a,function(a,c){K(a)?q(a,function(a){b.push(ca(c,!0)+(!0===a?"":"="+ca(a,!0)))}):b.push(ca(c,!0)+(!0===a?"":"="+ca(a,!0)))});return b.length?b.join("&"):""}function tb(a){return ca(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ca(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function te(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,H(d=a.getAttribute(d)))return d;return null}function ue(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(ve?(e.strictDi=null!==te(d,"strict-di"),
b(d,c?[c]:[],e)):B.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Ic(a,b,d){I(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=E(a);if(a.injector()){var c=a[0]===B.document?"document":wa(a);throw va("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);
b.unshift("ng");c=eb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;B&&e.test(B.name)&&(d.debugInfoEnabled=!0,B.name=B.name.replace(e,""));if(B&&!f.test(B.name))return c();B.name=B.name.replace(f,"");ga.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};F(ga.resumeDeferredBootstrap)&&ga.resumeDeferredBootstrap()}function we(){B.name=
"NG_ENABLE_DEBUG_INFO!"+B.name;B.location.reload()}function xe(a){a=ga.element(a).injector();if(!a)throw va("test");return a.get("$$testability")}function Jc(a,b){b=b||"_";return a.replace(ye,function(a,c){return(c?b:"")+a.toLowerCase()})}function ze(){var a;if(!Kc){var b=ub();(xa=z(b)?B.jQuery:b?B[b]:void 0)&&xa.fn.on?(E=xa,R(xa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=xa.cleanData,xa.cleanData=function(b){for(var c,
e=0,f;null!=(f=b[e]);e++)(c=xa._data(f,"events"))&&c.$destroy&&xa(f).triggerHandler("$destroy");a(b)}):E=T;ga.element=E;Kc=!0}}function vb(a,b,d){if(!a)throw va("areq",b||"?",d||"required");return a}function Pa(a,b,d){d&&K(a)&&(a=a[a.length-1]);vb(F(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw va("badname",b);}function Lc(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=
b[g],a&&(a=(e=a)[c]);return!d&&F(a)?cb(e,a):a}function wb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=E(ta.call(a,0,e))),c.push(b);return c||a}function S(){return Object.create(null)}function Ae(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=N("$injector"),c=N("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||N;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&
(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return J}}function b(a,d){return function(b,e){e&&F(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return J}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],x=a("$injector","invoke","push",e),J={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide",
"constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:x,run:function(a){p.push(a);return this}};h&&x(h);return J})}})}function ia(a,b){if(K(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(I(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];
return b||a}function Be(a){R(a,{bootstrap:Ic,copy:pa,extend:R,merge:ne,equals:oa,element:E,forEach:q,injector:eb,noop:C,bind:cb,toJson:db,fromJson:Ec,identity:Za,isUndefined:z,isDefined:u,isString:H,isFunction:F,isObject:I,isNumber:Z,isElement:Tb,isArray:K,version:Ce,isDate:ba,lowercase:P,uppercase:xb,callbacks:{$$counter:0},getTestability:xe,$$minErr:N,$$csp:ya,reloadWithDebugInfo:we});Xb=Ae(B);Xb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:De});a.provider("$compile",Mc).directive({a:Ee,
input:Nc,textarea:Nc,form:Fe,script:Ge,select:He,option:Ie,ngBind:Je,ngBindHtml:Ke,ngBindTemplate:Le,ngClass:Me,ngClassEven:Ne,ngClassOdd:Oe,ngCloak:Pe,ngController:Qe,ngForm:Re,ngHide:Se,ngIf:Te,ngInclude:Ue,ngInit:Ve,ngNonBindable:We,ngPluralize:Xe,ngRepeat:Ye,ngShow:Ze,ngStyle:$e,ngSwitch:af,ngSwitchWhen:bf,ngSwitchDefault:cf,ngOptions:df,ngTransclude:ef,ngModel:ff,ngList:gf,ngChange:hf,pattern:Oc,ngPattern:Oc,required:Pc,ngRequired:Pc,minlength:Qc,ngMinlength:Qc,maxlength:Rc,ngMaxlength:Rc,ngValue:jf,
ngModelOptions:kf}).directive({ngInclude:lf}).directive(yb).directive(Sc);a.provider({$anchorScroll:mf,$animate:nf,$animateCss:of,$$animateJs:pf,$$animateQueue:qf,$$AnimateRunner:rf,$$animateAsyncRun:sf,$browser:tf,$cacheFactory:uf,$controller:vf,$document:wf,$exceptionHandler:xf,$filter:Tc,$$forceReflow:yf,$interpolate:zf,$interval:Af,$http:Bf,$httpParamSerializer:Cf,$httpParamSerializerJQLike:Df,$httpBackend:Ef,$xhrFactory:Ff,$jsonpCallbacks:Gf,$location:Hf,$log:If,$parse:Jf,$rootScope:Kf,$q:Lf,
$$q:Mf,$sce:Nf,$sceDelegate:Of,$sniffer:Pf,$templateCache:Qf,$templateRequest:Rf,$$testability:Sf,$timeout:Tf,$window:Uf,$$rAF:Vf,$$jqLite:Wf,$$HashMap:Xf,$$cookieReader:Yf})}])}function fb(a){return a.replace(Zf,function(a,d,c,e){return e?c.toUpperCase():c}).replace($f,"Moz$1")}function Uc(a){a=a.nodeType;return 1===a||!a||9===a}function Vc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Yb.test(a)){d=e.appendChild(b.createElement("div"));c=(ag.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;
d.innerHTML=c[1]+a.replace(bg,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=bb(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function Wc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function T(a){if(a instanceof T)return a;var b;H(a)&&(a=U(a),b=!0);if(!(this instanceof T)){if(b&&"<"!==a.charAt(0))throw Zb("nosel");return new T(a)}if(b){b=B.document;var d;a=(d=cg.exec(a))?
[b.createElement(d[1])]:(d=Vc(a,b))?d.childNodes:[]}Xc(this,a)}function $b(a){return a.cloneNode(!0)}function zb(a,b){b||gb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)gb(d[c])}function Yc(a,b,d,c){if(u(c))throw Zb("offargs");var e=(c=Ab(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];u(d)&&ab(c||[],d);u(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);Bb[a]&&g(Bb[a])})}else for(b in e)"$destroy"!==
b&&a.removeEventListener(b,f,!1),delete e[b]}function gb(a,b){var d=a.ng339,c=d&&hb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Yc(a)),delete hb[d],a.ng339=void 0))}function Ab(a,b){var d=a.ng339,d=d&&hb[d];b&&!d&&(a.ng339=d=++dg,d=hb[d]={events:{},data:{},handle:void 0});return d}function ac(a,b,d){if(Uc(a)){var c=u(d),e=!c&&b&&!I(b),f=!b;a=(a=Ab(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];R(a,b)}}}function Cb(a,b){return a.getAttribute?
-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Db(a,b){b&&a.setAttribute&&q(b.split(" "),function(b){a.setAttribute("class",U((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+U(b)+" "," ")))})}function Eb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=U(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",U(d))}}function Xc(a,b){if(b)if(b.nodeType)a[a.length++]=
b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Zc(a,b){return Fb(a,"$"+(b||"ngController")+"Controller")}function Fb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=K(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(u(d=E.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function $c(a){for(zb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Gb(a,b){b||zb(a);var d=a.parentNode;d&&d.removeChild(a)}
function eg(a,b){b=b||B;if("complete"===b.document.readyState)b.setTimeout(a);else E(b).on("load",a)}function ad(a,b){var d=Hb[b.toLowerCase()];return d&&bd[ua(a)]&&d}function fg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=
function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||gg;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function gg(a,b,d){d.call(a,b)}function hg(a,b,d){var c=b.relatedTarget;c&&(c===a||ig.call(a,c))||d.call(a,b)}function Wf(){this.$get=function(){return R(T,{hasClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Eb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);
return Db(a,b)}})}}function za(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||me)():d+":"+a}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function cd(a){a=(Function.prototype.toString.call(a)+" ").replace(jg,"");return a.match(kg)||a.match(lg)}function mg(a){return(a=cd(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function eb(a,b){function d(a){return function(b,
c){if(I(b))q(b,Bc(a));else return a(b,c)}}function c(a,b){Qa(a,"service");if(F(b)||K(b))b=p.instantiate(b);if(!b.$get)throw Da("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Da("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){vb(z(a)||K(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,
!0);try{H(a)?(c=Xb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):F(a)?b.push(p.invoke(a)):K(a)?b.push(p.invoke(a)):Pa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Da("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Da("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=
c(b,e),a[b]}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=eb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Da("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);K(a)&&(a=a[a.length-1]);d=11>=Fa?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,
c))):a.apply(b,c)},instantiate:function(a,b,c){var d=K(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:eb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ra([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ma(b),!1)}),constant:d(function(a,b){Qa(a,"constant");
n[a]=b;x[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ga.isString(b)&&l.push(b);throw Da("unpr",l.join(" <- "));}),x={},J=h(x,function(a,b){var c=p.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=J;n.$injectorProvider={$get:ma(J)};var s=g(a),t=J.get("$injector");t.strictDi=b;q(s,function(a){a&&t.invoke(a)});return t}function mf(){var a=!0;this.disableAutoScrolling=
function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;F(c)?c=c():Tb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):Z(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=H(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):
(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||eg(function(){c.$evalAsync(g)})});return g}]}function jb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;K(a)&&(a=a.join(" "));K(b)&&(b=b.join(" "));return a+" "+b}function ng(a){H(a)&&(a=a.split(" "));var b=S();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ea(a){return I(a)?a:{}}function og(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,
1))}finally{if(J--,0===J)for(;t.length;)try{t.pop()()}catch(b){d.error(b)}}}function f(){w=null;g();h()}function g(){s=O();s=z(s)?null:s;oa(s,A)&&(s=A);A=s}function h(){if(y!==k.url()||D!==s)y=k.url(),D=s,q(L,function(a){a(k.url(),s)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,x={};k.isMock=!1;var J=0,t=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){J++};k.notifyWhenNoOutstandingRequests=function(a){0===J?a():t.push(a)};var s,D,y=l.href,ib=
b.find("base"),w=null,O=c.history?function(){try{return m.state}catch(a){}}:C;g();D=s;k.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=D===e;if(y===b&&(!c.history||f))return k;var h=y&&Ja(y)===Ja(b);y=b;D=e;!c.history||h&&f?(h||(w=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(w=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),D=s);w&&(w=b);return k}return w||l.href.replace(/%27/g,"'")};
k.state=function(){return s};var L=[],Q=!1,A=null;k.onUrlChange=function(b){if(!Q){if(c.history)E(a).on("popstate",f);E(a).on("hashchange",f);Q=!0}L.push(b);return b};k.$$applicationDestroyed=function(){E(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=ib.attr("href");return a?a.replace(/^(https?:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;J++;c=n(function(){delete x[c];e(a)},b||0);x[c]=!0;return c};k.defer.cancel=function(a){return x[a]?(delete x[a],p(a),e(C),
!0):!1}}function tf(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new og(a,c,b,d)}]}function uf(){this.$get=function(){function a(a,c){function e(a){a!==n&&(p?p===a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw N("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=S(),l=c&&c.capacity||Number.MAX_VALUE,m=S(),n=null,p=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});
e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===n&&(n=b.p);b===p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=S();g=0;m=S();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=
function(a){return b[a]};return a}}function Qf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Mc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=S();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw da("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==P(b))throw da("baddir",
a);if(a!==a.trim())throw da("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!K(b)&&I(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?::([^;]+))?;?)/,k=qe("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=S();this.directive=function D(b,d){Qa(b,"directive");H(b)?(c(b),vb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",
["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=a.invoke(f);F(h)?h={compile:ma(h)}:!h.compile&&h.link&&(h.compile=ma(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,Bc(D));return this};this.component=function(a,b){function c(a){function e(b){return F(b)||K(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:
b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:dd(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,F(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return u(a)?
(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return u(a)?(p=a,this):p};var x=10;this.onChangesTtl=function(a){return arguments.length?(x=a,this):x};var J=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(J=a,this):J};var t=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?
(t=a,this):t};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,L,Q,A,G,v){function M(){try{if(!--qa)throw fa=void 0,da("infchng",x);Q.$apply(function(){for(var a=[],b=0,c=fa.length;b<c;++b)try{fa[b]()}catch(d){a.push(d)}fa=void 0;if(a.length)throw a;})}finally{qa++}}function bc(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=
a}function r(a,b,c){pa.innerHTML="<span "+b+">";b=pa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function Ha(a,b){try{a.addClass(b)}catch(c){}}function $(a,b,c,d,e){a instanceof E||(a=E(a));for(var f=/\S+/,g=0,h=a.length;g<h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Wc(k,a[g]=B.document.createElement("span"))}var l=Aa(a,b,a,c,d,e);$.$$addScopeClass(a);var m=null;return function(b,c,d){vb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());
d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==ua(d)&&na.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?E(ba(m,E("<div>").append(a).html())):c?Oa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);$.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function Aa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,y,x;if(n)for(x=Array(c.length),
m=0;m<h.length;m+=3)f=h[m],x[f]=c[f];else x=c;m=0;for(p=h.length;m<p;)k=x[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),$.$$addScopeInfo(E(k),l)):l=a,y=c.transcludeOnThisElement?ha(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ha(a,b):null,c(f,l,k,d,y)):f&&f(a,k.childNodes,void 0,e)}for(var h=[],k,l,m,p,n,y=0;y<a.length;y++){k=new bc;l=dc(a[y],[],k,0===y?d:void 0,e);(f=l.length?Sa(l,a[y],k,b,c,null,[],[],f):null)&&f.scope&&$.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[y].childNodes)||
!m.length?null:Aa(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(y,f,k),p=!0,n=n||f;f=null}return p?g:null}function ha(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=S(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ha(a,b.$$slots[f],c):null;return d}function dc(a,b,c,d,e){var f=c.$attr,g;switch(a.nodeType){case 1:g=ua(a);V(b,Ba(g),"E",d,
e);for(var k,l,m,p,n=a.attributes,y=0,x=n&&n.length;y<x;y++){var A=!1,L=!1;k=n[y];l=k.name;m=U(k.value);k=Ba(l);(p=Da.test(k))&&(l=l.replace(ed,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));(k=k.match(Ea))&&Y(k[1])&&(A=l,L=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=Ba(l.toLowerCase());f[k]=l;if(p||!c.hasOwnProperty(k))c[k]=m,ad(a,k)&&(c[k]=!0);ma(a,b,m,k,p);V(b,k,"A",d,e,A,L)}"input"===g&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");
if(!Ca)break;f=a.className;I(f)&&(f=f.animVal);if(H(f)&&""!==f)for(;a=h.exec(f);)k=Ba(a[2]),V(b,k,"C",d,e)&&(c[k]=U(a[3])),f=f.substr(a.index+a[0].length);break;case Ma:if(11===Fa)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ga(b,a.nodeValue);break;case 8:if(!xa)break;N(a,b,c,d,e)}b.sort(ea);return b}function N(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Ba(f[1]);V(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function fd(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw da("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return E(d)}function gd(a,b,c){return function(d,e,f,g,h){e=fd(e[0],b,c);return a(d,e,f,g,h)}}function fc(a,b,c,d,e,f){var g;return a?$(b,c,d,e,f):function(){g||(g=$(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function Sa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&
(a=gd(a,c,d));a.require=v.require;a.directiveName=w;if(A===v||v.$$isolateScope)a=ja(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=gd(b,c,d));b.require=v.require;b.directiveName=w;if(A===v||v.$$isolateScope)b=ja(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;$a(a)||(d=c,c=b,b=a,a=void 0);J&&(e=D);c||(c=J?M.parent():M);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,r);if(z(f))throw da("noslot",d,wa(M));}else return l(a,b,e,c,r)}var n,v,t,G,Q,D,w,M;b===f?(g=d,M=d.$$element):
(M=E(f),g=new bc(M,d));Q=e;A?G=e.$new(!0):y&&(Q=e.$parent);l&&(w=m,w.$$boundTransclude=l,w.isSlotFilled=function(a){return!!l.$$slots[a]});x&&(D=T(M,g,w,x,G,e,A));A&&($.$$addScopeInfo(M,G,!0,!(L&&(L===A||L===A.$$originalDirective))),$.$$addScopeClass(M,!0),G.$$isolateBindings=A.$$isolateBindings,v=ka(e,g,G,G.$$isolateBindings,A),v.removeWatches&&G.$on("$destroy",v.removeWatches));for(n in D){v=x[n];t=D[n];var cc=v.$$bindings.bindToController;t.bindingInfo=t.identifier&&cc?ka(Q,g,t.instance,cc,v):
{};var O=t();O!==t.instance&&(t.instance=O,M.data("$"+v.name+"Controller",O),t.bindingInfo.removeWatches&&t.bindingInfo.removeWatches(),t.bindingInfo=ka(Q,g,t.instance,cc,v))}q(x,function(a,b){var c=a.require;a.bindToController&&!K(c)&&I(c)&&R(D[b].instance,kb(b,c,M,D))});q(D,function(a){var b=a.instance;if(F(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(F(b.$onInit))try{b.$onInit()}catch(e){c(e)}F(b.$doCheck)&&(Q.$watch(function(){b.$doCheck()}),b.$doCheck());F(b.$onDestroy)&&
Q.$on("$destroy",function(){b.$onDestroy()})});n=0;for(v=h.length;n<v;n++)t=h[n],la(t,t.isolateScope?G:e,M,g,t.require&&kb(t.directiveName,t.require,M,D),w);var r=e;A&&(A.template||null===A.templateUrl)&&(r=G);a&&a(r,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)t=k[n],la(t,t.isolateScope?G:e,M,g,t.require&&kb(t.directiveName,t.require,M,D),w);q(D,function(a){a=a.instance;F(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,y=l.newScopeDirective,x=l.controllerDirectives,A=l.newIsolateScopeDirective,
L=l.templateDirective,t=l.nonTlbTranscludeDirective,Q=!1,D=!1,J=l.hasElementTranscludeDirective,G=d.$$element=E(b),v,w,M,O=e,r,Ga=!1,Ha=!1,u,C=0,Aa=a.length;C<Aa;C++){v=a[C];var B=v.$$start,H=v.$$end;B&&(G=fd(b,B,H));M=void 0;if(n>v.priority)break;if(u=v.scope)v.templateUrl||(I(u)?(X("new/isolated scope",A||y,v,G),A=v):X("new/isolated scope",A,v,G)),y=y||v;w=v.name;if(!Ga&&(v.replace&&(v.templateUrl||v.template)||v.transclude&&!v.$$tlb)){for(u=C+1;Ga=a[u++];)if(Ga.transclude&&!Ga.$$tlb||Ga.replace&&
(Ga.templateUrl||Ga.template)){Ha=!0;break}Ga=!0}!v.templateUrl&&v.controller&&(u=v.controller,x=x||S(),X("'"+w+"' controller",x[w],v,G),x[w]=v);if(u=v.transclude)if(Q=!0,v.$$tlb||(X("transclusion",t,v,G),t=v),"element"===u)J=!0,n=v.priority,M=G,G=d.$$element=E($.$$createComment(w,d[w])),b=G[0],ca(f,ta.call(M,0),b),M[0].$$parentNode=M[0].parentNode,O=fc(Ha,M,e,n,g&&g.name,{nonTlbTranscludeDirective:t});else{var ha=S();M=E($b(b)).contents();if(I(u)){M=[];var N=S(),P=S();q(u,function(a,b){var c="?"===
a.charAt(0);a=c?a.substring(1):a;N[a]=b;ha[b]=null;P[b]=c});q(G.contents(),function(a){var b=N[Ba(ua(a))];b?(P[b]=!0,ha[b]=ha[b]||[],ha[b].push(a)):M.push(a)});q(P,function(a,b){if(!a)throw da("reqslot",b);});for(var Sa in ha)ha[Sa]&&(ha[Sa]=fc(Ha,ha[Sa],e))}G.empty();O=fc(Ha,M,e,void 0,void 0,{needsNewScope:v.$$isolateScope||v.$$newScope});O.$$slots=ha}if(v.template)if(D=!0,X("template",L,v,G),L=v,u=F(v.template)?v.template(G,d):v.template,u=za(u),v.replace){g=v;M=Yb.test(u)?hd(ba(v.templateNamespace,
U(u))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw da("tplrt",w,"");ca(f,G,b);Aa={$attr:{}};u=dc(b,[],Aa);var V=a.splice(C+1,a.length-(C+1));(A||y)&&W(u,A,y);a=a.concat(u).concat(V);Z(d,Aa);Aa=a.length}else G.html(u);if(v.templateUrl)D=!0,X("template",L,v,G),L=v,v.replace&&(g=v),p=aa(a.splice(C,a.length-C),G,d,f,Q&&O,h,k,{controllerDirectives:x,newScopeDirective:y!==v&&y,newIsolateScopeDirective:A,templateDirective:L,nonTlbTranscludeDirective:t}),Aa=a.length;else if(v.compile)try{r=v.compile(G,
d,O);var ec=v.$$originalDirective||v;F(r)?m(null,cb(ec,r),B,H):r&&m(cb(ec,r.pre),cb(ec,r.post),B,H)}catch(Y){c(Y,wa(G))}v.terminal&&(p.terminal=!0,n=Math.max(n,v.priority))}p.scope=y&&!0===y.scope;p.transcludeOnThisElement=Q;p.templateOnThisElement=D;p.transclude=O;l.hasElementTranscludeDirective=J;return p}function kb(a,b,c,d){var e;if(H(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=
g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw da("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=kb(a,b[g],c,d);else I(b)&&(e={},q(b,function(b,f){e[f]=kb(a,b,c,d)}));return e||null}function T(a,b,c,d,e,f,g){var h=S(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=L(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function W(a,b,c){for(var d=0,e=a.length;d<
e;d++)a[d]=Ub(a[d],{$$isolateScope:b,$$newScope:c})}function V(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var p;e=a.get(e+"Directive");for(var n=0,y=e.length;n<y;n++)try{if(p=e[n],(z(h)||h>p.priority)&&-1!==p.restrict.indexOf(g)){l&&(p=Ub(p,{$$start:l,$$end:m}));if(!p.$$bindings){var x=p,v=p,A=p.name,t={isolateScope:null,bindToController:null};I(v.scope)&&(!0===v.bindToController?(t.bindToController=d(v.scope,A,!0),t.isolateScope={}):t.isolateScope=d(v.scope,A,!1));I(v.bindToController)&&
(t.bindToController=d(v.bindToController,A,!0));if(I(t.bindToController)){var L=v.controller,G=v.controllerAs;if(!L)throw da("noctrl",A);if(!dd(L,G))throw da("noident",A);}var Q=x.$$bindings=t;I(Q.isolateScope)&&(p.$$isolateBindings=Q.isolateScope)}b.push(p);k=p}}catch(J){c(J)}}return k}function Y(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function Z(a,b){var c=b.$attr,d=a.$attr;q(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&
b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function aa(a,b,c,d,f,g,h,k){var l=[],m,p,n=b[0],y=a.shift(),x=Ub(y,{templateUrl:null,transclude:null,replace:null,$$originalDirective:y}),v=F(y.templateUrl)?y.templateUrl(b,c):y.templateUrl,A=y.templateNamespace;b.empty();e(v).then(function(e){var t,L;e=za(e);if(y.replace){e=Yb.test(e)?hd(ba(A,U(e))):[];t=e[0];if(1!==e.length||
1!==t.nodeType)throw da("tplrt",y.name,v);e={$attr:{}};ca(d,b,t);var G=dc(t,[],e);I(y.scope)&&W(G,!0);a=G.concat(a);Z(c,e)}else t=n,b.html(e);a.unshift(x);m=Sa(a,t,c,f,b,y,g,h,k);q(d,function(a,c){a===t&&(d[c]=b[0])});for(p=Aa(b[0].childNodes,f);l.length;){e=l.shift();L=l.shift();var Q=l.shift(),D=l.shift(),G=b[0];if(!e.$$destroyed){if(L!==n){var J=L.className;k.hasElementTranscludeDirective&&y.replace||(G=$b(t));ca(Q,E(L),G);Ha(E(G),J)}L=m.transcludeOnThisElement?ha(e,m.transclude,D):D;m(p,e,G,d,
L)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=ha(b,m.transclude,e)),m(p,b,c,d,a)))}}function ea(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw da("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,wa(d));}function ga(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;
b&&$.$$addBindingClass(a);return function(a,c){var e=c.parent();b||$.$$addBindingClass(e);$.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ba(a,b){a=P(a||"html");switch(a){case "svg":case "math":var c=B.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ia(a,b){if("srcdoc"===b)return A.HTML;var c=ua(a);if("src"===b||"ngSrc"===b){if(-1===["img","video","audio","source","track"].indexOf(c))return A.RESOURCE_URL}else if("xlinkHref"===
b||"form"===c&&"action"===b)return A.RESOURCE_URL}function ma(a,c,d,e,f){var g=ia(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ua(a))throw da("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=S());if(m.test(e))throw da("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!==b?k.$updateClass(a,
b):k.$set(e,a)}))}}}})}}function ca(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=B.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);E.hasData(d)&&(E.data(c,E.data(d)),E(d).off("$destroy"));E.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ja(a,
b){return R(function(){return a.apply(null,arguments)},a,b)}function la(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}function ka(a,c,d,e,f){function g(b,c,e){F(d.$onChanges)&&c!==e&&(fa||(a.$$postDigest(M),fa=[]),m||(m={},fa.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Ib(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,x,v,t,A;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(H(a)||Ia(a))g(h,
a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;x=c[m];H(x)?d[h]=b(x)(a):Ia(x)&&(d[h]=x);l[h]=new Ib(gc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;v=n(c[m]);A=v.literal?oa:function(a,b){return a===b||a!==a&&b!==b};t=v.assign||function(){x=d[h]=v(a);throw da("nonassign",c[m],m,f.name);};x=d[h]=v(a);p=function(b){A(b,d[h])||(A(b,x)?t(a,b=d[h]):d[h]=b);return x=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,v.literal);k.push(p);break;
case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;v=n(c[m]);var L=d[h]=v(a);l[h]=new Ib(gc,d[h]);p=a.$watch(v,function(a,b){if(b===a){if(b===L)return;b=L}g(h,a,b);d[h]=a},v.literal);k.push(p);break;case "&":v=c.hasOwnProperty(m)?n(c[m]):C;if(v===C&&p)break;d[h]=function(b){return v(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ra=/^\w/,pa=B.document.createElement("div"),xa=J,Ca=t,qa=x,fa;bc.prototype={$normalize:Ba,
$addClass:function(a){a&&0<a.length&&G.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&G.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=id(a,b);c&&c.length&&G.addClass(this.$$element,c);(c=id(b,a))&&c.length&&G.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=ad(this.$$element[0],a),g=jd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Jc(a,"-"));f=ua(this.$$element);if("a"===
f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=v(b,"src"===a);else if("img"===f&&"srcset"===a&&u(b)){for(var f="",g=U(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+v(U(g[m]),!0),f=f+(" "+U(g[m+1]));g=U(g[2*l]).split(/\s/);f+=v(U(g[0]),!0);2===g.length&&(f+=" "+U(g[1]));this[a]=b=f}!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):ra.test(e)?this.$$element.attr(e,b):r(this.$$element[0],e,b));(a=
this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=S()),e=d[a]||(d[a]=[]);e.push(b);Q.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){ab(e,b)}}};var va=b.startSymbol(),ya=b.endSymbol(),za="{{"===va&&"}}"===ya?Za:function(a){return a.replace(/\{\{/g,va).replace(/}}/g,ya)},Da=/^ngAttr[A-Z]/,Ea=/^(.+)Start$/;$.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];K(b)?c=
c.concat(b):c.push(b);a.data("$binding",c)}:C;$.$$addBindingClass=p?function(a){Ha(a,"ng-binding")}:C;$.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:C;$.$$addScopeClass=p?function(a,b){Ha(a,b?"ng-isolate-scope":"ng-scope")}:C;$.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return B.document.createComment(c)};return $}]}function Ib(a,b){this.previousValue=a;this.currentValue=b}function Ba(a){return fb(a.replace(ed,
""))}function id(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g===e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function hd(a){a=E(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&pg.call(a,b,1);return a}function dd(a,b){if(b&&H(b))return b;if(H(a)){var d=kd.exec(a);if(d)return d[3]}}function vf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Qa(b,"controller");I(b)?R(a,
b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,b,c,d){if(!a||!I(a.$scope))throw N("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&H(k)&&(n=k);if(H(f)){k=f.match(kd);if(!k)throw qg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Lc(g.$scope,m,!0)||(b?Lc(c,m,!0):void 0);Pa(f,m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),R(function(){var a=
d.invoke(f,l,g,m);a!==l&&(I(a)||F(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function wf(){this.$get=["$window",function(a){return E(a.document)}]}function xf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function hc(a){return I(a)?ba(a)?a.toISOString():db(a):a}function Cf(){this.$get=function(){return function(a){if(!a)return"";var b=[];Ac(a,function(a,c){null===a||z(a)||(K(a)?
q(a,function(a){b.push(ca(c)+"="+ca(hc(a)))}):b.push(ca(c)+"="+ca(hc(a))))});return b.join("&")}}}function Df(){this.$get=function(){return function(a){function b(a,e,f){null===a||z(a)||(K(a)?q(a,function(a,c){b(a,e+"["+(I(a)?c:"")+"]")}):I(a)&&!ba(a)?Ac(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ca(e)+"="+ca(hc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function ic(a,b){if(H(a)){var d=a.replace(rg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ld))||
(c=(c=d.match(sg))&&tg[c[0]].test(d));c&&(a=Ec(d))}}return a}function md(a){var b=S(),d;H(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=P(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):I(a)&&q(a,function(a,d){var f=P(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function nd(a){var b;return function(d){b||(b=md(a));return d?(d=b[P(d)],void 0===d&&(d=null),d):b}}function od(a,b,d,c){if(F(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function Bf(){var a=this.defaults=
{transformResponse:[ic],transformRequest:[function(a){return I(a)&&"[object File]"!==na.call(a)&&"[object Blob]"!==na.call(a)&&"[object FormData]"!==na.call(a)?db(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(jc),put:ia(jc),patch:ia(jc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return u(a)?(d=!!a,
this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,d={};q(a,function(a,e){F(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=R({},a);b.data=od(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!I(b))throw N("$http")("badreq",
b);if(!H(b.url))throw N("$http")("badreq",b.url);var g=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[P(b.method)]);a:for(f in c){g=P(f);for(h in d)if(P(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);g.method=xb(g.method);g.paramSerializer=H(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],p=k.when(g);q(J,function(a){(a.request||
a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,a.responseError)});p=c(p,h);p=p.then(function(b){var c=b.headers,d=od(b.data,nd(c),void 0,b.transformRequest);z(d)&&q(c,function(a,b){"content-type"===P(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f)});p=c(p,m);d?(p.success=function(a){Pa(a,"fn");p.then(function(b){a(b.data,b.status,b.headers,g)});return p},p.error=function(a){Pa(a,
"fn");p.then(null,function(b){a(b.data,b.status,b.headers,g)});return p}):(p.success=pd("success"),p.error=pd("error"));return p}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}A&&(200<=a&&300>a?A.put(M,[a,c,md(d),e]):A.remove(M));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,
status:b,headers:nd(d),config:c,statusText:e})}function J(a){n(a.data,a.status,ia(a.headers()),a.statusText)}function O(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var L=k.defer(),Q=L.promise,A,G,v=c.headers,M=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);Q.then(O,O);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(A=I(c.cache)?c.cache:I(a.cache)?a.cache:x);A&&(G=A.get(M),u(G)?G&&F(G.then)?G.then(J,J):K(G)?n(G[1],G[0],ia(G[2]),
G[3]):n(G,200,{},"OK"):A.put(M,Q));z(G)&&((G=qd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(v[c.xsrfHeaderName||a.xsrfHeaderName]=G),e(c.method,M,d,l,v,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return Q}function p(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}var x=g("$http");a.paramSerializer=H(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var J=[];q(c,function(a){J.unshift(H(a)?l.get(a):l.invoke(a))});m.pendingRequests=
[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function Ff(){this.$get=function(){return function(){return new B.XMLHttpRequest}}}function Ef(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return ug(a,c,a.defer,b,d[0])}]}
function ug(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,x="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),x=a.type,g="error"===a.type?404:200);d&&d(g,x)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,
h,k,l,m,n,p,x,J,t){function s(){ib&&ib();w&&w.abort()}function D(b,c,e,f,g){u(L)&&d.cancel(L);ib=w=null;b(c,e,f,g);a.$$completeOutstandingRequest(C)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===P(e))var y=c.createCallback(h),ib=f(h,y,function(a,b){var d=200===a&&c.getResponse(y);D(l,a,d,"",b);c.removeCallback(y)});else{var w=b(e,h);w.open(e,h,!0);q(m,function(a,b){u(a)&&w.setRequestHeader(b,a)});w.onload=function(){var a=w.statusText||"",b="response"in w?w.response:w.responseText,c=
1223===w.status?204:w.status;0===c&&(c=b?200:"file"===Ca(h).protocol?404:0);D(l,c,b,w.getAllResponseHeaders(),a)};e=function(){D(l,-1,null,null,"")};w.onerror=e;w.onabort=e;w.ontimeout=e;q(J,function(a,b){w.addEventListener(b,a)});q(t,function(a,b){w.upload.addEventListener(b,a)});p&&(w.withCredentials=!0);if(x)try{w.responseType=x}catch(O){if("json"!==x)throw O;}w.send(z(k)?null:k)}if(0<n)var L=d(s,n);else n&&F(n.then)&&n.then(s)}}function zf(){var a="{{",b="}}";this.startSymbol=function(b){return b?
(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function k(f,k,p,n){function D(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);var d;if(n&&!u(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=db(a)}d=a}return d}catch(g){c(Ka.interr(f,
g))}}if(!f.length||-1===f.indexOf(a)){var y;k||(k=g(f),y=ma(k),y.exp=f,y.expressions=[],y.$$watchDelegate=h);return y}n=!!n;var q,w,O=0,L=[],Q=[];y=f.length;for(var A=[],G=[];O<y;)if(-1!==(q=f.indexOf(a,O))&&-1!==(w=f.indexOf(b,q+l)))O!==q&&A.push(g(f.substring(O,q))),O=f.substring(q+l,w),L.push(O),Q.push(d(O,D)),O=w+m,G.push(A.length),A.push("");else{O!==y&&A.push(g(f.substring(O)));break}p&&1<A.length&&Ka.throwNoconcat(f);if(!k||L.length){var v=function(a){for(var b=0,c=L.length;b<c;b++){if(n&&
z(a[b]))return;A[G[b]]=a[b]}return A.join("")};return R(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=Q[b](a);return v(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:L,$$watchDelegate:function(a,b){var c;return a.$watchGroup(Q,function(d,e){var f=v(d);F(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function Af(){this.$get=
["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,x):f(s)}var p=4<arguments.length,x=p?ta.call(arguments,4):[],J=b.setInterval,t=b.clearInterval,s=0,D=u(m)&&!m,y=(D?c:d).defer(),q=y.promise;l=u(l)?l:0;q.$$intervalId=J(function(){D?e.defer(n):a.$evalAsync(n);y.notify(s++);0<l&&s>=l&&(y.resolve(s),t(q.$$intervalId),delete g[q.$$intervalId]);D||a.$apply()},k);g[q.$$intervalId]=y;return q}var g={};f.cancel=function(a){return a&&a.$$intervalId in
g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function kc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=tb(a[b]);return a.join("/")}function rd(a,b){var d=Ca(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=aa(d.port)||vg[d.protocol]||null}function sd(a,b){if(wg.test(a))throw lb("badpath",a);var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Ca(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):
c.pathname);b.$$search=Hc(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function ka(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function mb(a){return a.replace(/(#.+)|#$/,"$1")}function lc(a,b,d){this.$$html5=!0;d=d||"";rd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!H(d))throw lb("ipthprfx",a,b);sd(d,this);this.$$path||(this.$$path="/");this.$$compose()};
this.$$compose=function(){var a=Wb(this.$$search),d=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=kc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;u(f=ka(a,c))?(g=f,g=d&&u(f=ka(d,f))?b+(ka("/",f)||f):a+g):u(f=ka(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function mc(a,b,d){rd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=
e:(f="",z(e)&&(a=c,this.replace())):(f=ka(d,e),z(f)&&(f=e));sd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Wb(this.$$search),e=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=kc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)===Ja(b)?(this.$$parse(b),!0):!1}}function td(a,b,d){this.$$html5=
!0;mc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Ja(c)?f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Wb(this.$$search),e=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=kc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Jb(a){return function(){return this[a]}}function ud(a,b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}
function Hf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return u(b)?(a=b,this):a};this.html5Mode=function(a){return Ia(a)?(b.enabled=a,this):I(a)?(Ia(a.enabled)&&(b.enabled=a.enabled),Ia(a.requireBase)&&(b.requireBase=a.requireBase),Ia(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),
l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw lb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?lc:td}else p=Ja(n),m=mc;var x=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,x,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var J=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&
2!==a.which&&2!==a.button){for(var e=E(a.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");I(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Ca(h.animVal).href);J.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!==c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});mb(l.absUrl())!==mb(n)&&c.url(l.absUrl(),!0);var t=!0;c.onUrlChange(function(a,
b){z(ka(x,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=mb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(t=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=mb(c.url()),b=mb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(t||m)t=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",
b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function If(){var a=!0,b=this;this.debugEnabled=function(b){return u(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||
{},e=b[a]||b.log||C;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ta(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ea("isecfld",b);return a}function xg(a){return a+
""}function qa(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a.window===a)throw ea("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ea("isecdom",b);if(a===Object)throw ea("isecobj",b);}return a}function vd(a,b){if(a){if(a.constructor===a)throw ea("isecfn",b);if(a===yg||a===zg||a===Ag)throw ea("isecff",b);}}function Kb(a,b){if(a&&(a===wd||a===xd||a===yd||a===zd||a===Ad||a===Bd||a===Bg||a===Cg||a===Lb||a===Dg||a===Cd||a===Eg))throw ea("isecaf",b);}function Fg(a,b){return"undefined"!==
typeof a?a:b}function Dd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function W(a,b){var d,c,e;switch(a.type){case r.Program:d=!0;q(a.body,function(a){W(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case r.Literal:a.constant=!0;a.toWatch=[];break;case r.UnaryExpression:W(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case r.BinaryExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);
break;case r.LogicalExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case r.ConditionalExpression:W(a.test,b);W(a.alternate,b);W(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case r.Identifier:a.constant=!1;a.toWatch=[a];break;case r.MemberExpression:W(a.object,b);a.computed&&W(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=
[a];break;case r.CallExpression:d=e=a.filter?!b(a.callee.name).$stateful:!1;c=[];q(a.arguments,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=e?c:[a];break;case r.AssignmentExpression:W(a.left,b);W(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case r.ArrayExpression:d=!0;c=[];q(a.elements,function(a){W(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case r.ObjectExpression:d=
!0;c=[];q(a.properties,function(a){W(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case r.ThisExpression:a.constant=!1;a.toWatch=[];break;case r.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Ed(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Fd(a){return a.type===r.Identifier||a.type===r.MemberExpression}function Gd(a){if(1===a.body.length&&Fd(a.body[0].expression))return{type:r.AssignmentExpression,
left:a.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function Hd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===r.Literal||a.body[0].expression.type===r.ArrayExpression||a.body[0].expression.type===r.ObjectExpression)}function Id(a,b){this.astBuilder=a;this.$filter=b}function Jd(a,b){this.astBuilder=a;this.$filter=b}function Mb(a){return"constructor"===a}function nc(a){return F(a.valueOf)?a.valueOf():Gg.call(a)}function Jf(){var a=S(),b=S(),d={"true":!0,
"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,J;e=e||D;switch(typeof c){case "string":J=c=c.trim();var A=e?b:a;g=A[J];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?s:t;var G=new oc(g);g=(new pc(G,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));A[J]=
g}return x(g,d);case "function":return x(c,d);default:return x(C,d)}}function h(a){function b(c,d,e,f){var g=D;D=!0;try{return a(c,d,e,f)}finally{D=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=nc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,
e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&nc(b));return g},b,c,e)}for(var l=[],m=[],p=0,n=f.length;p<n;p++)l[p]=k,m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&nc(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;F(b)&&b.apply(this,arguments);u(a)&&
d.$$postDigest(function(){u(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){u(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;F(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function x(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,
d,e,f);c=b(e,c,d);return u(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var J=ya().noUnsafeEval,t={csp:J,expensiveChecks:!1,literals:pa(d),isIdentifierStart:F(c)&&c,isIdentifierContinue:F(e)&&e},s={csp:J,expensiveChecks:!0,literals:pa(d),isIdentifierStart:F(c)&&c,isIdentifierContinue:F(e)&&e},D=!1;g.$$runningExpensiveChecks=function(){return D};return g}]}function Lf(){this.$get=
["$rootScope","$exceptionHandler",function(a,b){return Kd(function(b){a.$evalAsync(b)},b)}]}function Mf(){this.$get=["$browser","$exceptionHandler",function(a,b){return Kd(function(b){a.defer(b)},b)}]}function Kd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{F(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=N("$q",TypeError),h=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};R(d.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});R(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(I(a)||F(a))g=a&&a.then;F(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=
1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(F(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},
l=function(a,b,c){var d=null;try{F(c)&&(d=c())}catch(e){return k(e,!1)}return d&&F(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},n=function(a){if(!F(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.prototype=d.prototype;n.defer=h;n.reject=function(a){var b=new f;b.reject(a);return b.promise};n.when=m;n.resolve=m;n.all=function(a){var b=
new f,c=0,d=K(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};n.race=function(a){var b=h();q(a,function(a){m(a).then(b.resolve,b.reject)});return b.promise};return n}function Vf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,
e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Kf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++sb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=N("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Fa&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++sb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount=
{};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(D.$$phase)throw d("inprog",D.$$phase);D.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function x(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function J(){}function t(){for(;w.length;)try{w.shift()()}catch(a){f(a)}e=null}function s(){null===e&&(e=h.defer(function(){D.$apply(t)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?
(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:J,get:f,exp:e||a,eq:!!d};c=null;F(b)||(l.fn=C);k||(k=h.$$watchers=[]);k.unshift(l);p(this,
1);return function(){0<=ab(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(I(e))if(ra(e))for(f!==n&&(f=n,s=f.length=0,l++),a=e.length,s!==a&&(l++,f.length=s=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},s=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(s++,f[b]=g,l++));if(s>a)for(b in l++,f)sa.call(e,b)||(s--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},x=!0,s=0;return this.$watch(m,function(){x?(x=!1,b(e,e,d)):b(e,h,d);if(k)if(I(e))if(ra(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,x,s,q=b,w,u=[],z,C;n("$digest");h.$$checkUrlChange();this===D&&null!==e&&(h.defer.cancel(e),t());c=null;do{s=!1;w=this;for(p=0;p<y.length;p++){try{C=y[p],C.scope.$eval(C.expression,C.locals)}catch(B){f(B)}c=null}y.length=0;a:do{if(p=w.$$watchers)for(x=
p.length;x--;)try{if(a=p[x])if(m=a.get,(g=m(w))!==(k=a.last)&&!(a.eq?oa(g,k):X(g)&&X(k)))s=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===J?g:k,w),5>q&&(z=4-q,u[z]||(u[z]=[]),u[z].push({msg:F(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(p=w.$$watchersCount&&w.$$childHead||w!==this&&w.$$nextSibling))for(;w!==this&&!(p=w.$$nextSibling);)w=w.$parent}while(w=p);if((s||y.length)&&!q--)throw D.$$phase=null,d("infdig",b,u);}while(s||
y.length);for(D.$$phase=null;O<r.length;)try{r[O++]()}catch(H){f(H)}r.length=O=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===D&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)x(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);
this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=C;this.$on=this.$watch=this.$watchGroup=function(){return C};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){D.$$phase||y.length||h.defer(function(){y.length&&D.$digest()});y.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){r.push(a)},$apply:function(a){try{n("$apply");
try{return this.$eval(a)}finally{D.$$phase=null}}catch(b){f(b)}finally{try{D.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&w.push(b);a=g(a);s()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,x(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,
g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=bb([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},
defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=bb([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var D=new m,y=D.$$asyncQueue=[],r=D.$$postDigestQueue=[],w=D.$$applyAsyncQueue=[],O=0;return D}]}function De(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Ca(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Hg(a){if("self"===a)return a;if(H(a)){if(-1<a.indexOf("***"))throw fa("iwcard",a);a=Ld(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Ya(a))return new RegExp("^"+a.source+"$");throw fa("imatcher");}function Md(a){var b=[];u(a)&&q(a,function(a){b.push(Hg(a))});return b}function Of(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Md(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Md(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?qd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw fa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw fa("icontext",a,b);if(null===b||z(b)||
""===b)return b;if("string"!==typeof b)throw fa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||z(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=Ca(e.toString()),n,p,x=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){x=!0;break}if(x)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){x=!1;break}if(x)return e;throw fa("insecurl",e.toString());}if(d===la.HTML)return f(e);throw fa("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function Nf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Fa)throw fa("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Za);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(la,function(a,b){var d=P(b);c[fb("parse_as_"+d)]=function(b){return e(a,b)};c[fb("get_trusted_"+d)]=function(b){return f(a,b)};c[fb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Pf(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=aa((/android (\d+)/.exec(P((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||
{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!e||m&&n||(m=H(l.webkitTransition),n=H(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Fa)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},
csp:ya(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Rf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!H(g)||z(b.get(g)))g=e.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;K(k)?k=k.filter(function(a){return a!==ic}):k===ic&&(k=null);return d.get(g,R({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,
a.data);return a.data},function(a){if(!h)throw Ig("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Sf(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ga.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+Ld(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,
b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Tf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){F(f)||(l=k,k=f,f=C);var m=ta.call(arguments,3),n=u(l)&&!l,p=(n?c:d).defer(),
x=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[x.$$timeoutId]}n||a.$apply()},k);x.$$timeoutId=q;g[q]=p;return x}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Ca(a){Fa&&(V.setAttribute("href",a),a=V.href);V.setAttribute("href",a);return{href:V.href,protocol:V.protocol?V.protocol.replace(/:$/,""):"",host:V.host,
search:V.search?V.search.replace(/^\?/,""):"",hash:V.hash?V.hash.replace(/^#/,""):"",hostname:V.hostname,port:V.port,pathname:"/"===V.pathname.charAt(0)?V.pathname:"/"+V.pathname}}function qd(a){a=H(a)?Ca(a):a;return a.protocol===Nd.protocol&&a.host===Nd.host}function Uf(){this.$get=ma(B)}function Od(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=
a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),z(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Yf(){this.$get=Od}function Tc(a){function b(d,c){if(I(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Pd);b("date",Qd);b("filter",Jg);b("json",Kg);b("limitTo",Lg);b("lowercase",Mg);b("number",Rd);b("orderBy",Sd);b("uppercase",Ng)}function Jg(){return function(a,
b,d,c){if(!ra(a)){if(null==a)return a;throw N("filter")("notarray",a);}c=c||"$";var e;switch(qc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=Og(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function Og(a,b,d,c){var e=I(a)&&d in a;!0===b?b=oa:F(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(I(b)||I(a)&&!Cc(a))return!1;a=P(""+a);b=P(""+b);return-1!==a.indexOf(b)});return function(f){return e&&
!I(f)?La(f,a[d],b,d,!1):La(f,a,b,d,c)}}function La(a,b,d,c,e,f){var g=qc(a),h=qc(b);if("string"===h&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c,e);if(K(a))return a.some(function(a){return La(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if("$"!==k.charAt(0)&&La(a[k],b,d,c,!0))return!0;return f?!1:La(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!F(f)&&!z(f)&&(g=k===c,!La(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function qc(a){return null===
a?"null":typeof a}function Pd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Td(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Rd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Td(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Pg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Ud))&&(a=a.replace(Ud,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=
a.length);for(e=0;a.charAt(e)===rc;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===rc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Vd&&(d=d.splice(0,Vd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function Qg(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),
a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Td(a,b,d,c,e){if(!H(a)&&!Z(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=Pg(h);Qg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,
k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Nb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=rc+a;d&&(a=a.substr(a.length-b));return e+a}function Y(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Nb(f,b,c,e)}}function nb(a,
b,d){return function(c,e){var f=c["get"+a](),g=xb((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Wd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Xd(a){return function(b){var d=Wd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Nb(b,a)}}function sc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Qd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,
h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;H(c)&&(c=Rg.test(c)?aa(c):b(c));Z(c)&&
(c=new Date(c));if(!ba(c)||!isFinite(c.getTime()))return c;for(;d;)(l=Sg.exec(d))?(h=bb(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=Fc(f,m),c=Vb(c,f,!0));q(h,function(b){k=Tg[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Kg(){return function(a,b){z(b)&&(b=2);return db(a,b)}}function Lg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):aa(b);if(X(b))return a;Z(a)&&(a=a.toString());if(!ra(a))return a;
d=!d||isNaN(d)?0:aa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?tc(a,d,d+b):0===d?tc(a,b,a.length):tc(a,Math.max(0,d+b),d)}}function tc(a,b,d){return H(a)?a.slice(b,d):ta.call(a,b,d)}function Sd(a){function b(b){return b.map(function(b){var c=1,d=Za;if(F(b))d=b;else if(H(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(I(k)&&(k=a.index),I(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!ra(a))throw N("orderBy")("notarray",a);K(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=F(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(F(e.valueOf)&&(e=e.valueOf(),d(e)))break a;Cc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ua(a){F(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ma(a)}function Yd(a,b,d,
c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ob;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=
a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a);a.$$parentForm=Ob};Zd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);c.addClass(a,
Pb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Pb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function uc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Wa(a,b,d,c,e,f){var g=P(b[0].type);if(!e.android){var h=
!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||
m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if($d[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ba(d))return d;if(H(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-
1)&&(d=d.substring(1,d.length-1));if(Ug.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function ob(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function p(a){return u(a)&&!ba(a)?d(a)||void 0:a}vc(e,f,g,h);Wa(e,f,g,h,k,l);var x=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),x&&(a=Vb(a,x)),a});h.$formatters.push(function(a){if(a&&!ba(a))throw pb("datefmt",a);if(n(a))return(q=a)&&x&&(q=Vb(q,x,!0)),m("date")(a,c,x);q=null;return""});if(u(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!n(a)||z(t)||d(a)>=t};g.$observe("min",
function(a){t=p(a);h.$validate()})}if(u(g.max)||g.ngMax){var s;h.$validators.max=function(a){return!n(a)||z(s)||d(a)<=s};g.$observe("max",function(a){s=p(a);h.$validate()})}}}function vc(a,b,d,c){(c.$$hasNativeValidators=I(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function ae(a){a.$$parserName="number";a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(Vg.test(b))return parseFloat(b)});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!Z(b))throw pb("numfmt",
b);b=b.toString()}return b})}function qb(a){u(a)&&!Z(a)&&(a=parseFloat(a));return X(a)?void 0:a}function wc(a){var b=a.toString(),d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function be(a,b,d,c,e){if(u(c)){a=a(c);if(!a.constant)throw pb("constexpr",d,c);return a(b)}return e}function xc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}
function e(a){var b=[];return K(a)?(q(a,function(a){b=b.concat(e(a))}),b):H(a)?a.split(" "):I(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||S(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&
d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!oa(a,p)){var d=e(p);m(d,c)}}p=K(a)?a.map(function(a){return ia(a)}):ia(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Zd(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,
c){a=a?"-"+Jc(a,"-"):"";b(rb+a,!0===c);b(ce+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[ce]=!(f[rb]=e.hasClass(rb));c.$setValidity=function(a,e,f){z(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),de(c.$pending)&&(c.$pending=void 0));Ia(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(ee,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(ee,!1),c.$valid=de(c.$error),
c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function de(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Wg=/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,P=function(a){return H(a)?a.toLowerCase():a},xb=function(a){return H(a)?a.toUpperCase():a},Fa,E,xa,ta=[].slice,pg=[].splice,Xg=[].push,na=Object.prototype.toString,Dc=Object.getPrototypeOf,va=N("ng"),ga=B.angular||
(B.angular={}),Xb,sb=0;Fa=B.document.documentMode;var X=Number.isNaN||function(a){return a!==a};C.$inject=[];Za.$inject=[];var K=Array.isArray,pe=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,U=function(a){return H(a)?a.trim():a},Ld=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},ya=function(){if(!u(ya.rules)){var a=B.document.querySelector("[ng-csp]")||B.document.querySelector("[data-ng-csp]");if(a){var b=
a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");ya.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=ya;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return ya.rules},ub=function(){if(u(ub.name_))return ub.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b)if(c=Na[b],a=B.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return ub.name_=e},se=/:/g,Na=["ng-",
"data-ng-","ng:","x-ng-"],ve=function(a){if(!a.currentScript)return!0;var b=a.currentScript.getAttribute("src"),d=a.createElement("a");d.href=b;b=d.protocol;if(a.location.protocol===b)return!0;switch(b){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}}(B.document),ye=/[A-Z]/g,Kc=!1,Ma=3,Ce={full:"1.5.9",major:1,minor:5,dot:9,codeName:"timeturning-lockdown"};T.expando="ng339";var hb=T.cache={},dg=1;T._data=function(a){return this.cache[a[this.expando]]||
{}};var Zf=/([:\-_]+(.))/g,$f=/^moz([A-Z])/,Bb={mouseleave:"mouseout",mouseenter:"mouseover"},Zb=N("jqLite"),cg=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Yb=/<|&#?\w+;/,ag=/<([\w:-]+)/,bg=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",
""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var ig=B.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=T.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===B.document.readyState?B.setTimeout(b):(this.on("DOMContentLoaded",b),T(B).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?E(this[a]):E(this[this.length+
a])},length:0,push:Xg,sort:[].sort,splice:[].splice},Hb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Hb[P(a)]=a});var bd={};q("input select option textarea button form details".split(" "),function(a){bd[a]=!0});var jd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:ac,removeData:gb,hasData:function(a){for(var b in hb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)gb(a[b])}},
function(a,b){T[b]=a});q({data:ac,inheritedData:Fb,scope:function(a){return E.data(a,"$scope")||Fb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return E.data(a,"$isolateScope")||E.data(a,"$isolateScopeNoTemplate")},controller:Zc,injector:function(a){return Fb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Cb,css:function(a,b,d){b=fb(b);if(u(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=P(b),
Hb[c])if(u(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||C).specified?c:void 0;else if(u(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(u(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=
[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;zb(a,!0);a.innerHTML=b},empty:$c},function(a,b){T.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==$c&&z(2===a.length&&a!==Cb&&a!==Zc?b:c)){if(I(b)){for(e=0;e<g;e++)if(a===ac)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<
g;e++)a(this[e],b,c);return this}});q({removeData:gb,on:function(a,b,d,c){if(u(c))throw Zb("onargs");if(Uc(a)){c=Ab(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=fg(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],Bb[b]?(h(Bb[b],hg),h(b,void 0,!0)):h(b)}},off:Yc,one:function(a,b,d){a=E(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,
b){var d,c=a.parentNode;zb(a);q(new T(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new T(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new T(b),function(b){a.insertBefore(b,d)})}},
wrap:function(a,b){Wc(a,E(b).eq(0).clone()[0])},remove:Gb,detach:function(a){Gb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new T(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Eb,removeClass:Db,toggleClass:function(a,b,d){b&&q(b.split(" "),function(b){var e=d;z(e)&&(e=!Cb(a,b));(e?Eb:Db)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?
a.getElementsByTagName(b):[]},clone:$b,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=Ab(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:C,type:f,target:a},b.type&&(c=R(c,b)),b=ia(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||
b.apply(a,e)})}},function(a,b){T.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)z(f)?(f=a(this[g],b,c,e),u(f)&&(f=E(f))):Xc(f,a(this[g],b,c,e));return u(f)?f:this};T.prototype.bind=T.prototype.on;T.prototype.unbind=T.prototype.off});Ra.prototype={put:function(a,b){this[za(a,this.nextUid)]=b},get:function(a){return this[za(a,this.nextUid)]},remove:function(a){var b=this[a=za(a,this.nextUid)];delete this[a];return b}};var Xf=[function(){this.$get=[function(){return Ra}]}],kg=/^([^\(]+?)=>/,
lg=/^[^\(]*\(\s*([^\)]*)\)/m,Yg=/,/,Zg=/^\s*(_?)(\S+?)\1\s*$/,jg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Da=N("$injector");eb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw H(d)&&d||(d=a.name||mg(a)),Da("strictdi",d);b=cd(a);q(b[1].split(Yg),function(a){a.replace(Zg,function(a,b,d){c.push(d)})})}a.$inject=c}}else K(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c};var fe=N("$animate"),pf=function(){this.$get=C},qf=function(){var a=
new Ra,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=H(b)?b.split(" "):K(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=ng(b.attr("class")),e="",f="";q(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Eb(a,e);f&&Db(a,f)});a.remove(b)}});b.length=0}return{enabled:C,on:C,off:C,pin:C,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);
k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},nf=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw fe("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&
(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw fe("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},
enter:function(e,f,g,h){f=f&&E(f);g=g&&E(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ea(h))},move:function(e,f,g,h){f=f&&E(f);g=g&&E(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ea(h))},leave:function(b,c){return a.push(b,"leave",Ea(c),function(){b.remove()})},addClass:function(b,c,g){g=Ea(g);g.addClass=jb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ea(g);g.removeClass=jb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ea(h);
h.addClass=jb(h.addClass,c);h.removeClass=jb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ea(k);k.from=k.from?R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=jb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],sf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},rf=function(){this.$get=
["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===
this._state?a():this._doneCallbacks.push(a)},progress:C,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&
this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},of=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=
null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},da=N("$compile"),gc=new function(){};Mc.$inject=["$provide","$$sanitizeUriProvider"];Ib.prototype.isFirstChange=function(){return this.previousValue===gc};var ed=/^((?:x|data)[:\-_])/i,qg=N("$controller"),kd=/^(\S+)(\s+as\s+([\w$]+))?$/,
yf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof E&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},ld="application/json",jc={"Content-Type":ld+";charset=utf-8"},sg=/^\[|^\{(?!\{)/,tg={"[":/]$/,"{":/}$/},rg=/^\)\]\}',?\n/,$g=N("$http"),pd=function(a){return function(){throw $g("legacy",a);}},Ka=ga.$interpolateMinErr=N("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Gf=
function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var f="angular.callbacks."+a,g=b(a);c[f]=d[a]=g;return f},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},ah=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,vg={http:80,https:443,ftp:21},lb=N("$location"),
wg=/^\s*[\\/]{2,}/,bh={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Jb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ah.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Jb("$$protocol"),host:Jb("$$host"),port:Jb("$$port"),path:ud("$$path",function(a){a=null!==a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(H(a)||
Z(a))a=a.toString(),this.$$search=Hc(a);else if(I(a))a=pa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw lb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:ud("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([td,mc,lc],function(a){a.prototype=Object.create(bh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==lc||!this.$$html5)throw lb("nostate");
this.$$state=z(b)?null:b;return this}});var ea=N("$parse"),wd=[].constructor,xd=(!1).constructor,yd=Function.constructor,zd=(0).constructor,Ad={}.constructor,Bd="".constructor,Bg=wd.prototype,Cg=xd.prototype,Lb=yd.prototype,Dg=zd.prototype,Cd=Ad.prototype,Eg=Bd.prototype,yg=Lb.call,zg=Lb.apply,Ag=Lb.bind,Gg=Cd.valueOf,Rb=S();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Rb[a]=!0});var ch={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},oc=function(a){this.options=a};
oc.prototype={constructor:oc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),
c=Rb[b],e=Rb[d];Rb[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===
a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},
codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ea("lexerr",a,b,this.text);
},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=P(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},
readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=ch[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var r=function(a,b){this.lexer=a;this.options=b};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";
r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.LocalsExpression="LocalsExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);
a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},
assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
b;b=this.expect("+","-");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:r.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:r.CallExpression,
callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:r.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==
this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},
object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:r.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",
this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,b){throw ea("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw ea("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ea("ueoe",this.text);return this.tokens[0]},peek:function(a,b,
d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:r.ThisExpression},$locals:{type:r.LocalsExpression}}};Id.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},
assign:{vars:[],body:[],own:{}},inputs:[]};W(c,d.$filter);var e="",f;this.stage="assign";if(f=Gd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=Ed(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+
" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ta,qa,vd,xg,Kb,Fg,Dd,a);this.state=this.stage=void 0;e.literal=Hd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+
b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},
recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||C;if(!f&&u(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case r.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case r.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case r.UnaryExpression:this.recurse(a.argument,void 0,void 0,
function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case r.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case r.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));
c(b);break;case r.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case r.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ta(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",
a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Mb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case r.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),
k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ta(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Mb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},
function(){k.assign(b,"undefined")});c(b)},!!e);break;case r.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),
m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case r.AssignmentExpression:h=this.nextId();g={};if(!Fd(a.left))throw ea("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+
h;k.assign(b,m);c(b||m)})},1);break;case r.ArrayExpression:l=[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case r.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===r.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,
a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===r.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case r.ThisExpression:this.assign(b,"s");c("s");break;case r.LocalsExpression:this.assign(b,"l");c("l");break;case r.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=
this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;
c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),
";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},
getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(H(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+
"'";if(Z(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ea("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Jd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;W(c,d.$filter);var e,f;if(e=Gd(c))f=this.recurse(e);e=Ed(c.body);
var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?C:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=Hd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,
b);case r.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case r.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case r.Identifier:return Ta(a.name,f.expression),f.identifier(a.name,
f.expensiveChecks||Mb(a.name),b,d,f.expression);case r.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ta(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case r.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?
function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){qa(n.context,f.expression);vd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(qa(g[q](a,c,d,m),f.expression));p=qa(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case r.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,
d,g,m);a=e(a,d,g,m);qa(n.value,f.expression);Kb(n.context);n.context[n.name]=a;return b?{value:a}:a};case r.ArrayExpression:return g=[],q(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case r.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),
function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case r.ThisExpression:return function(a){return b?{value:a}:a};case r.LocalsExpression:return function(a,c){return b?{value:c}:c};case r.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=u(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,
f){d=a(d,c,e,f);d=u(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=Dd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(u(h)?h:0)-(u(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&qa(g,e);return d?{context:f,name:a,
value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ta(m,e),c&&1!==c&&(Kb(l),l&&!l[m]&&(l[m]={})),n=l[m],qa(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Kb(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Mb(b))&&qa(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var pc=
function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new r(a,d);this.astCompiler=d.csp?new Jd(this.ast,b):new Id(this.ast,b)};pc.prototype={constructor:pc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var fa=N("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Ig=N("$compile"),V=B.document.createElement("a"),Nd=Ca(B.location.href);Od.$inject=["$document"];Tc.$inject=["$provide"];var Vd=22,Ud=".",rc="0";Pd.$inject=["$locale"];
Rd.$inject=["$locale"];var Tg={yyyy:Y("FullYear",4,0,!1,!0),yy:Y("FullYear",2,0,!0,!0),y:Y("FullYear",1,0,!1,!0),MMMM:nb("Month"),MMM:nb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),LLLL:nb("Month",!1,!0),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:nb("Day"),EEE:nb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,
b,d){a=-1*d;return a=(0<=a?"+":"")+(Nb(Math[0<a?"floor":"ceil"](a/60),2)+Nb(Math.abs(a%60),2))},ww:Xd(2),w:Xd(1),G:sc,GG:sc,GGG:sc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},Sg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Rg=/^\-?\d+$/;Qd.$inject=["$locale"];var Mg=ma(P),Ng=ma(xb);Sd.$inject=["$parse"];var Ee=ma({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e=
"[object SVGAnimatedString]"===na.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),yb={};q(Hb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=Ba("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});yb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(jd,function(a,b){yb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&
(c=e.ngPattern.match(Wg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Ba("ng-"+a);yb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===na.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Fa&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Ob={$addControl:C,$$renameControl:function(a,
b){a.$name=b},$removeControl:C,$setValidity:C,$setDirty:C,$setPristine:C,$setSubmitted:C};Yd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var ge=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||C}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Yd,compile:function(d,f){d.addClass(Va).addClass(rb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in
e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):C;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);R(n,Ob)})}}}}}]},Fe=
ge(),Re=ge(!0),Ug=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,dh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,eh=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Vg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,he=/^(\d{4,})-(\d{2})-(\d{2})$/,
ie=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,yc=/^(\d{4,})-W(\d\d)$/,je=/^(\d{4,})-(\d\d)$/,ke=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,$d=S();q(["date","datetime-local","month","time","week"],function(a){$d[a]=!0});var le={text:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);uc(c)},date:ob("date",he,Qb(he,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":ob("datetimelocal",ie,Qb(ie,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:ob("time",ke,Qb(ke,["HH","mm",
"ss","sss"]),"HH:mm:ss.sss"),week:ob("week",yc,function(a,b){if(ba(a))return a;if(H(a)){yc.lastIndex=0;var d=yc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Wd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:ob("month",je,Qb(je,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){vc(a,b,d,c);Wa(a,b,d,c,e,f);ae(c);var g,h;if(u(d.min)||d.ngMin)c.$validators.min=function(a){return c.$isEmpty(a)||
z(g)||a>=g},d.$observe("min",function(a){g=qb(a);c.$validate()});if(u(d.max)||d.ngMax)c.$validators.max=function(a){return c.$isEmpty(a)||z(h)||a<=h},d.$observe("max",function(a){h=qb(a);c.$validate()})},url:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);uc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||dh.test(d)}},email:function(a,b,d,c,e,f){Wa(a,b,d,c,e,f);uc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||eh.test(d)}},
radio:function(a,b,d,c){z(d.name)&&b.attr("name",++sb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,c){b.attr(a,d[a]);d.$observe(a,c)}function h(a){n=qb(a);X(c.$modelValue)||(m?(a=b.val(),n>a&&(a=n,b.val(a)),c.$setViewValue(a)):c.$validate())}function k(a){p=qb(a);X(c.$modelValue)||(m?(a=b.val(),p<a&&(b.val(p),a=p<n?n:p),c.$setViewValue(a)):
c.$validate())}function l(a){q=qb(a);X(c.$modelValue)||(m&&c.$viewValue!==b.val()?c.$setViewValue(b.val()):c.$validate())}vc(a,b,d,c);ae(c);Wa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,n=m?0:void 0,p=m?100:void 0,q=m?1:void 0,r=b[0].validity;a=u(d.min);e=u(d.max);f=u(d.step);var t=c.$render;c.$render=m&&u(r.rangeUnderflow)&&u(r.rangeOverflow)?function(){t();c.$setViewValue(b.val())}:t;a&&(c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b>=n},
g("min",h));e&&(c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b<=p},g("max",k));f&&(c.$validators.step=m?function(){return!r.stepMismatch}:function(a,b){var d;if(!(d=c.$isEmpty(b)||z(q))){d=n||0;var e=q,f=Number(b);if((f|0)!==f||(d|0)!==d||(e|0)!==e){var g=Math.max(wc(f),wc(d),wc(e)),g=Math.pow(10,g),f=f*g;d*=g;e*=g}d=0===(f-d)%e}return d},g("step",l))},checkbox:function(a,b,d,c,e,f,g,h){var k=be(h,a,"ngTrueValue",d.ngTrueValue,!0),l=be(h,a,"ngFalseValue",d.ngFalseValue,
!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return oa(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:C,button:C,submit:C,reset:C,file:C},Nc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){if(h[0]){var k=P(g.type);"range"!==k||g.hasOwnProperty("ngInputRange")||(k="text");
(le[k]||le.text)(e,f,g,h[0],b,a,d,c)}}}}}],fh=/^(true|false|\d+)$/,jf=function(){return{restrict:"A",priority:100,compile:function(a,b){return fh.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},Je=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=z(a)?"":a})}}}}],Le=
["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Ke=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);
b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],hf=ma({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Me=xc("",!0),Oe=xc("Odd",0),Ne=xc("Even",1),Pe=Ua({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Qe=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Sc={},gh={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Ba("ng-"+a);Sc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};gh[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Te=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=wb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Ue=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ga.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,r,t,s,D=function(){t&&(t.remove(),t=null);r&&
(r.$destroy(),r=null);s&&(d.leave(s).then(function(){t=null}),t=s,s=null)};c.$watch(f,function(f){var m=function(){!u(h)||h&&!c.$eval(h)||b()},w=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&w===q){var b=c.$new();n.template=a;a=p(b,function(a){D();d.enter(a,null,e).then(m)});r=b;s=a;r.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||w!==q||(D(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(D(),n.template=null)})}}}}],lf=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){na.call(d[0]).match(/SVG/)?(d.empty(),a(Vc(e.template,B.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ve=Ua({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),gf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(K(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},rb="ng-valid",ce="ng-invalid",Va="ng-pristine",Pb="ng-dirty",ee="ng-pending",pb=N("ngModel"),hh=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Ob;var m=e(d.ngModel),n=m.assign,p=m,r=n,J=null,t,s=this;this.$$setOptions=function(a){if((s.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);F(c)&&(c=b(a));
return c};r=function(a,b){F(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw pb("nonassign",d.ngModel,wa(c));};this.$render=C;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){s.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var D=0;Zd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){s.$dirty=
!1;s.$pristine=!0;f.removeClass(c,Pb);f.addClass(c,Va)};this.$setDirty=function(){s.$dirty=!0;s.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Pb);s.$$parentForm.$setDirty()};this.$setUntouched=function(){s.$touched=!1;s.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){s.$touched=!0;s.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(J);s.$viewValue=s.$$lastCommittedViewValue;s.$render()};this.$validate=function(){if(!X(s.$modelValue)){var a=
s.$$rawModelValue,b=s.$valid,c=s.$modelValue,d=s.$options&&s.$options.allowInvalid;s.$$runValidators(a,s.$$lastCommittedViewValue,function(e){d||b===e||(s.$modelValue=e?a:void 0,s.$modelValue!==c&&s.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(s.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(s.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(s.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!F(h.then))throw pb("nopromise",
h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},C):g(!0)}function f(a,b){h===D&&s.$setValidity(a,b)}function g(a){h===D&&c(a)}D++;var h=D;(function(){var a=s.$$parserName||"parse";if(z(t))f(a,null);else return t||(q(s.$validators,function(a,b){f(b,null)}),q(s.$asyncValidators,function(a,b){f(b,null)})),f(a,t),t;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=s.$viewValue;g.cancel(J);if(s.$$lastCommittedViewValue!==
a||""===a&&s.$$hasNativeValidators)s.$$updateEmptyClasses(a),s.$$lastCommittedViewValue=a,s.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=s.$$lastCommittedViewValue;if(t=z(b)?void 0:!0)for(var c=0;c<s.$parsers.length;c++)if(b=s.$parsers[c](b),z(b)){t=!1;break}X(s.$modelValue)&&(s.$modelValue=p(a));var d=s.$modelValue,e=s.$options&&s.$options.allowInvalid;s.$$rawModelValue=b;e&&(s.$modelValue=b,s.$modelValue!==d&&s.$$writeModelToScope());s.$$runValidators(b,
s.$$lastCommittedViewValue,function(a){e||(s.$modelValue=a?b:void 0,s.$modelValue!==d&&s.$$writeModelToScope())})};this.$$writeModelToScope=function(){r(a,s.$modelValue);q(s.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){s.$viewValue=a;s.$options&&!s.$options.updateOnDefault||s.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=s.$options;d&&u(d.debounce)&&(d=d.debounce,Z(d)?c=d:Z(d[b])?c=d[b]:Z(d["default"])&&(c=d["default"]));
g.cancel(J);c?J=g(function(){s.$commitViewValue()},c):h.$$phase?s.$commitViewValue():a.$apply(function(){s.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==s.$modelValue&&(s.$modelValue===s.$modelValue||b===b)){s.$modelValue=s.$$rawModelValue=b;t=void 0;for(var c=s.$formatters,d=c.length,e=b;d--;)e=c[d](e);s.$viewValue!==e&&(s.$$updateEmptyClasses(e),s.$viewValue=s.$$lastCommittedViewValue=e,s.$render(),s.$$runValidators(s.$modelValue,s.$viewValue,C))}return b})}],ff=["$rootScope",function(a){return{restrict:"A",
require:["ngModel","^?form","^?ngModelOptions"],controller:hh,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(rb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,
function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],ih=/(\s+|^)default(\s+|$)/,kf=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=pa(a.$eval(b.ngModelOptions));u(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=U(this.$options.updateOn.replace(ih,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=
!0}]}},We=Ua({terminal:!0,priority:1E3}),jh=N("ngOptions"),kh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,df=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ra(a))b=
a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(kh);if(!n)throw jh("iexp",a,wa(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var r=n[9];b=d(n[2]?n[1]:p);var t=a&&d(a)||b,s=r&&d(r),u=r?function(a,b){return s(c,b)}:function(a){return za(a)},y=function(a,b){return u(a,A(a,b))},z=d(n[2]||n[1]),w=d(n[3]||""),C=d(n[4]||""),F=d(n[8]),B={},A=q?function(a,b){B[q]=b;B[p]=a;return B}:function(a){B[p]=a;return B};return{trackBy:r,getTrackByValue:y,getWatchables:d(F,
function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=A(l,h),l=u(l,h);b.push(l);if(n[2]||n[1])l=z(c,h),b.push(l);n[4]&&(h=C(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=F(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=A(d[p],p),s=t(c,q),p=u(s,q),x=z(c,q),B=w(c,q),q=C(c,q),s=new e(p,s,x,B,q);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[y(a)]},getViewValueFromOption:function(a){return r?
ga.copy(a.viewValue):a.viewValue}}}}}var e=B.document.createElement("option"),f=B.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=C},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=w&&p.readValue();if(w)for(var b=w.items.length-1;0<=b;b--){var c=w.items[b];u(c.group)?
Gb(c.element.parentNode):Gb(c.element)}w=B.getOptions();var d={};y&&h.prepend(t);w.items.forEach(function(a){var b;if(u(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),F.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=F,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(F);r.$render();r.$isEmpty(a)||(b=p.readValue(),(B.trackBy||z?oa(a,b):a===b)||(r.$setViewValue(b),r.$render()))}var p=l[0],r=l[1],z=k.multiple,t;l=0;for(var s=h.children(),D=s.length;l<
D;l++)if(""===s[l].value){t=s.eq(l);break}var y=!!t,C=E(e.cloneNode(!1));C.val("?");var w,B=c(k.ngOptions,h,d),F=b[0].createDocumentFragment(),H=function(){y?t.removeAttr("selected"):t.remove()};z?(r.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){w.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=w.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=w.selectValueMap[a])&&!a.disabled&&
b.push(w.getViewValueFromOption(a))});return b},B.trackBy&&d.$watchCollection(function(){if(K(r.$viewValue))return r.$viewValue.map(function(a){return B.getTrackByValue(a)})},function(){r.$render()})):(p.writeValue=function(a){var b=w.selectValueMap[h.val()],c=w.getOptionFromViewValue(a);b&&b.element.removeAttribute("selected");c?(h[0].value!==c.selectValue&&(C.remove(),H(),h[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):null===a||y?(C.remove(),y||h.prepend(t),
h.val(""),t.prop("selected",!0),t.attr("selected",!0)):(H(),h.prepend(C),h.val("?"),C.prop("selected",!0),C.attr("selected",!0))},p.readValue=function(){var a=w.selectValueMap[h.val()];return a&&!a.disabled?(H(),C.remove(),w.getViewValueFromOption(a)):null},B.trackBy&&d.$watch(function(){return B.getTrackByValue(r.$viewValue)},function(){r.$render()}));y?(t.remove(),a(t)(d),t.removeClass("ng-scope")):t=E(e.cloneNode(!1));h.empty();n();d.$watchCollection(B.getWatchables,n)}}}}],Xe=["$locale","$interpolate",
"$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},r={},u=b.startSymbol(),t=b.endSymbol(),s=u+l+"-"+n+t,D=ga.noop,y;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+P(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){r[d]=b(a.replace(c,s))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in p||(c=a.pluralCat(c-n));c===y||e&&X(y)||(D(),e=r[c],
z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),D=C,k()):D=f.$watch(e,k),y=c)})}}}],Ye=["$parse","$animate","$compile",function(a,b,d){var c=N("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],r=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var u=l[3]||l[1],t=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var s,z,y,C,w={$id:za};r?s=a(r):(y=function(a,b){return za(b)},C=function(a){return a});return function(a,d,f,g,l){s&&(z=function(b,c,d){t&&(w[t]=b);w[u]=c;w.$index=
d;return s(a,w)});var m=S();a.$watchCollection(n,function(f){var g,n,s=d[0],r,x=S(),w,B,F,A,H,E,I;p&&(a[p]=f);if(ra(f))H=f,n=z||y;else for(I in n=z||C,H=[],f)sa.call(f,I)&&"$"!==I.charAt(0)&&H.push(I);w=H.length;I=Array(w);for(g=0;g<w;g++)if(B=f===H?g:H[g],F=f[B],A=n(B,F,g),m[A])E=m[A],delete m[A],x[A]=E,I[g]=E;else{if(x[A])throw q(I,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,A,F);I[g]={id:A,scope:void 0,clone:void 0};x[A]=!0}for(r in m){E=m[r];A=wb(E.clone);b.leave(A);if(A[0].parentNode)for(g=
0,n=A.length;g<n;g++)A[g].$$NG_REMOVED=!0;E.scope.$destroy()}for(g=0;g<w;g++)if(B=f===H?g:H[g],F=f[B],E=I[g],E.scope){r=s;do r=r.nextSibling;while(r&&r.$$NG_REMOVED);E.clone[0]!==r&&b.move(wb(E.clone),null,s);s=E.clone[E.clone.length-1];e(E.scope,g,u,F,t,B,w)}else l(function(a,c){E.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,s);s=d;E.clone=a;x[E.id]=E;e(E.scope,g,u,F,t,B,w)});m=x})}}}}],Ze=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,
function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Se=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=Ua(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),af=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases=
{}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var r=wb(h[d].clone);l[d].$destroy();(k[d]=a.leave(r)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),
f)})})})}}}],bf=Ua({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),cf=Ua({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),lh=N("ngTransclude"),ef=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=
a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw lh("orphan",wa(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){a.length?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],Ge=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],mh={$setViewValue:C,$render:C},nh=["$element",
"$scope",function(a,b){var d=this,c=new Ra;d.ngModelCtrl=mh;d.unknownOption=E(B.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+za(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=C});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),
""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=
function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){u(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],He=function(){return{restrict:"E",require:["select","?ngModel"],controller:nh,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});
if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=u(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||oa(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Ie=["$interpolate",
function(a){return{restrict:"E",priority:100,compile:function(b,d){if(u(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],Pc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},
Oc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){H(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw N("ngPattern")("noregexp",f,a,wa(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||z(e)||e.test(b)}}}}},Rc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=aa(a);e=X(a)?-1:a;c.$validate()});
c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Qc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=aa(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};B.angular.bootstrap?B.console&&console.log("WARNING: Tried to load angular more than once."):(ze(),Be(ga),ga.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");
return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),E(B.document).ready(function(){ue(B.document,Ic)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
;
/*
 AngularJS v1.5.9
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(P,d){'use strict';function G(t,g){g=g||{};d.forEach(g,function(d,q){delete g[q]});for(var q in t)!t.hasOwnProperty(q)||"$"===q.charAt(0)&&"$"===q.charAt(1)||(g[q]=t[q]);return g}var z=d.$$minErr("$resource"),M=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var t=/^https?:\/\/[^\/]*/,g=this;this.defaults={stripTrailingSlashes:!0,cancellable:!1,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},
"delete":{method:"DELETE"}}};this.$get=["$http","$log","$q","$timeout",function(q,L,H,I){function A(d,h){return encodeURIComponent(d).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,h?"%20":"+")}function B(d,h){this.template=d;this.defaults=v({},g.defaults,h);this.urlParams={}}function J(e,h,n,k){function b(a,c){var b={};c=v({},h,c);u(c,function(c,h){x(c)&&(c=c(a));var f;if(c&&c.charAt&&"@"===c.charAt(0)){f=a;var l=c.substr(1);if(null==l||""===l||
"hasOwnProperty"===l||!M.test("."+l))throw z("badmember",l);for(var l=l.split("."),m=0,k=l.length;m<k&&d.isDefined(f);m++){var r=l[m];f=null!==f?f[r]:void 0}}else f=c;b[h]=f});return b}function N(a){return a.resource}function m(a){G(a||{},this)}var t=new B(e,k);n=v({},g.defaults.actions,n);m.prototype.toJSON=function(){var a=v({},this);delete a.$promise;delete a.$resolved;return a};u(n,function(a,c){var h=/^(POST|PUT|PATCH)$/i.test(a.method),e=a.timeout,E=d.isDefined(a.cancellable)?a.cancellable:
k&&d.isDefined(k.cancellable)?k.cancellable:g.defaults.cancellable;e&&!d.isNumber(e)&&(L.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."),delete a.timeout,e=null);m[c]=function(f,l,k,g){var r={},n,w,C;switch(arguments.length){case 4:C=g,w=k;case 3:case 2:if(x(l)){if(x(f)){w=f;C=l;break}w=
l;C=k}else{r=f;n=l;w=k;break}case 1:x(f)?w=f:h?n=f:r=f;break;case 0:break;default:throw z("badargs",arguments.length);}var D=this instanceof m,p=D?n:a.isArray?[]:new m(n),s={},A=a.interceptor&&a.interceptor.response||N,B=a.interceptor&&a.interceptor.responseError||void 0,y,F;u(a,function(a,c){switch(c){default:s[c]=O(a);case "params":case "isArray":case "interceptor":case "cancellable":}});!D&&E&&(y=H.defer(),s.timeout=y.promise,e&&(F=I(y.resolve,e)));h&&(s.data=n);t.setUrlParams(s,v({},b(n,a.params||
{}),r),a.url);r=q(s).then(function(f){var b=f.data;if(b){if(d.isArray(b)!==!!a.isArray)throw z("badcfg",c,a.isArray?"array":"object",d.isArray(b)?"array":"object",s.method,s.url);if(a.isArray)p.length=0,u(b,function(a){"object"===typeof a?p.push(new m(a)):p.push(a)});else{var l=p.$promise;G(b,p);p.$promise=l}}f.resource=p;return f},function(a){(C||K)(a);return H.reject(a)});r["finally"](function(){p.$resolved=!0;!D&&E&&(p.$cancelRequest=d.noop,I.cancel(F),y=F=s.timeout=null)});r=r.then(function(a){var c=
A(a);(w||K)(c,a.headers);return c},B);return D?r:(p.$promise=r,p.$resolved=!1,E&&(p.$cancelRequest=y.resolve),p)};m.prototype["$"+c]=function(a,b,d){x(a)&&(d=b,b=a,a={});a=m[c].call(this,a,this,b,d);return a.$promise||a}});m.bind=function(a){return J(e,v({},h,a),n)};return m}var K=d.noop,u=d.forEach,v=d.extend,O=d.copy,x=d.isFunction;B.prototype={setUrlParams:function(e,h,n){var k=this,b=n||k.template,g,m,q="",a=k.urlParams={};u(b.split(/\W/),function(c){if("hasOwnProperty"===c)throw z("badname");
!/^\d+$/.test(c)&&c&&(new RegExp("(^|[^\\\\]):"+c+"(\\W|$)")).test(b)&&(a[c]={isQueryParamValue:(new RegExp("\\?.*=:"+c+"(?:\\W|$)")).test(b)})});b=b.replace(/\\:/g,":");b=b.replace(t,function(a){q=a;return""});h=h||{};u(k.urlParams,function(a,e){g=h.hasOwnProperty(e)?h[e]:k.defaults[e];d.isDefined(g)&&null!==g?(m=a.isQueryParamValue?A(g,!0):A(g,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),b=b.replace(new RegExp(":"+e+"(\\W|$)","g"),function(a,c){return m+c})):b=b.replace(new RegExp("(/?):"+
e+"(\\W|$)","g"),function(a,c,b){return"/"===b.charAt(0)?b:c+b})});k.defaults.stripTrailingSlashes&&(b=b.replace(/\/+$/,"")||"/");b=b.replace(/\/\.(?=\w+($|\?))/,".");e.url=q+b.replace(/\/\\\./,"/.");u(h,function(a,b){k.urlParams[b]||(e.params=e.params||{},e.params[b]=a)})}};return J}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map
;
/*
 AngularJS v1.5.9
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(R,B){'use strict';function Da(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ea(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=X(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof F)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return F(ta(a))}if(1===a.nodeType)return F(a)}function ta(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1===c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function Z(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ha(a,b){Fa(a,b);Ga(a,b)}function Fa(a,b){b.from&&(a.css(b.from),b.from=null)}function Ga(a,b){b.to&&(a.css(b.to),b.to=null)}function V(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=$(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==P?d.domOperation:null;ua(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){G(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",e=a[c]||a[c+"-add"]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function y(a){return a instanceof F?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=$(d,Y(c.addClass,"-add")));c.removeClass&&(d=$(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function va(a,b){var c=b?"paused":"",d=aa+"PlayState";la(a,[d,c]);return[d,c]}function la(a,
b){a.style[b[0]]=b[1]}function $(a,b){return a?b?a+" "+b:a:b}function Ha(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var g=c.charAt(0);if("-"===g||"+"===g||0<=g)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"===a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function wa(a){return 0===a||null!=a}function Ia(a,b){var c=S,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function Ja(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ka(a,b,c){s(c,function(c){a[c]=xa(a[c])?a[c]:b.style.getPropertyValue(c)})}var S,ya,aa,za;void 0===R.ontransitionend&&void 0!==R.onwebkittransitionend?(S="WebkitTransition",ya="webkitTransitionEnd transitionend"):(S="transition",ya=
"transitionend");void 0===R.onanimationend&&void 0!==R.onwebkitanimationend?(aa="WebkitAnimation",za="webkitAnimationEnd animationend"):(aa="animation",za="animationend");var qa=aa+"Delay",Aa=aa+"Duration",ma=S+"Delay",La=S+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:S+"Property",animationDuration:Aa,animationDelay:qa,animationIterationCount:aa+"IterationCount"},Va={transitionDuration:La,transitionDelay:ma,animationDuration:Aa,animationDelay:qa},
Ba,ua,s,X,xa,ea,Ca,ba,G,J,F,P;B.module("ngAnimate",[],function(){P=B.noop;Ba=B.copy;ua=B.extend;F=B.element;s=B.forEach;X=B.isArray;G=B.isString;ba=B.isObject;J=B.isUndefined;xa=B.isDefined;Ca=B.isFunction;ea=B.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,n){var I,g;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);g&&(g.$destroy(),g=null);if(e||0===e)g=b.$new(),
n(g,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;G(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();e||a(function(){e||c()})}}
var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;
return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"===c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;
a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return J(a)&&J(b)||J(e)&&J(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,l,C,Wa,Q,t,H,T){function O(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function x(a,b,c){var f=y(b),d=y(a),N=[];(a=h[c])&&s(a,function(a){w.call(a.node,f)?N.push(a.callback):"leave"===c&&w.call(a.node,
d)&&N.push(a.callback)});return N}function r(a,b,c){var f=ta(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function p(a,h,v){function r(c,f,d,h){sa(function(){var c=x(T,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||ra.off(a)}):"close"!==d||a[0].parentNode||ra.off(a)});c.progress(f,d,h)}function k(b){var c=a,f=m;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),
f.activeClasses=null);E(a,m);ha(a,m);m.domOperation();A.complete(!b)}var m=Ba(v),p,T;if(a=Oa(a))p=y(a),T=a.parent();var m=oa(m),A=new Q,sa=O();X(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!G(m.addClass)&&(m.addClass=null);X(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!G(m.removeClass)&&(m.removeClass=null);m.from&&!ba(m.from)&&(m.from=null);m.to&&!ba(m.to)&&(m.to=null);if(!p)return k(),A;v=[p.className,m.addClass,m.removeClass].join(" ");if(!Xa(v))return k(),
A;var g=0<=["enter","move","leave"].indexOf(h),w=l[0].hidden,t=!f||w||N.get(p);v=!t&&z.get(p)||{};var H=!!v.state;t||H&&1===v.state||(t=!M(a,T,h));if(t)return w&&r(A,h,"start"),k(),w&&r(A,h,"close"),A;g&&K(a);w={structural:g,element:a,event:h,addClass:m.addClass,removeClass:m.removeClass,close:k,options:m,runner:A};if(H){if(d("skip",a,w,v)){if(2===v.state)return k(),A;V(a,v,w);return v.runner}if(d("cancel",a,w,v))if(2===v.state)v.runner.end();else if(v.structural)v.close();else return V(a,v,w),v.runner;
else if(d("join",a,w,v))if(2===v.state)V(a,w,{});else return Sa(a,g?h:null,m),h=w.event=v.event,m=V(a,v,w),v.runner}else V(a,w,{});(H=w.structural)||(H="animate"===w.event&&0<Object.keys(w.options.to||{}).length||e(w));if(!H)return k(),ka(a),A;var C=(v.counter||0)+1;w.counter=C;L(a,1,w);c.$$postDigest(function(){var b=z.get(p),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==C||!f){c&&(E(a,m),ha(a,m));if(c||g&&b.event!==h)m.domOperation(),A.end();
f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,L(a,2),b=Wa(a,h,b.options),A.setHost(b),r(A,h,"start",{}),b.done(function(b){k(!b);(b=z.get(p))&&b.counter===C&&ka(y(a));r(A,h,"close",{})})});return A}function K(a){a=y(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate"),10),c=z.get(a);if(c)switch(b){case 2:c.runner.end();case 1:z.remove(a)}})}function ka(a){a=y(a);a.removeAttribute("data-ng-animate");z.remove(a)}function k(a,b){return y(a)===
y(b)}function M(a,b,c){c=F(l[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,r,e=N.get(y(a));(a=F.data(a[0],"$ngAnimatePin"))&&(b=a);for(b=y(b);b;){d||(d=k(b,g));if(1!==b.nodeType)break;a=z.get(b)||{};if(!h){var p=N.get(b);if(!0===p&&!1!==e){e=!0;break}else!1===p&&(e=!1);h=a.structural}if(J(r)||!0===r)a=F.data(b,"$$ngAnimateChildren"),xa(a)&&(r=a);if(h&&!1===r)break;f||(f=k(b,c));if(f&&d)break;if(!d&&(a=F.data(b,"$ngAnimatePin"))){b=y(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&
d&&f}function L(a,b,c){c=c||{};c.state=b;a=y(a);a.setAttribute("data-ng-animate",b);c=(b=z.get(a))?ua(b,c):c;z.put(a,c)}var z=new C,N=new C,f=null,A=c.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(A(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h=Object.create(null),sa=a.classNameFilter(),Xa=sa?function(a){return sa.test(a)}:function(){return!0},E=Z(H),w=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&
16)},ra={on:function(a,b,c){var f=ta(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});F(b).on("$destroy",function(){z.get(f)||ra.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Da(ea(a),"element","not an element");Da(ea(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return p(a,b,c)},enabled:function(a,
b){var c=arguments.length;if(0===c)b=!!f;else if(ea(a)){var d=y(a);1===c?b=!N.get(d):N.put(d,!b)}else b=f=!!a;return b}};return ra}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,n,I){function g(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,p=d.parentNode;e.put(d,a);for(var K;p;){if(K=e.get(p)){K.processed||(K=b(K));break}p=p.parentNode}(K||
c).children.push(a);return a}var c={children:[]},d,e=new n;for(d=0;d<a.length;d++){var g=a[d];e.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,k=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=e,e=0,b.push(k),k=[]);k.push(g.fn);g.children.forEach(function(a){e++;c.push(a)});a--}k.length&&b.push(k);return b}(c)}var u=[],C=Z(a);return function(n,Q,t){function H(a){a=
a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function T(a){var b=[],c={};s(a,function(a,d){var h=y(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var k=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][k]={animationID:d,element:F(a)}})}else b.push(a)});var d={},e={};s(c,function(c,k){var r=c.from,
p=c.to;if(r&&p){var z=a[r.animationID],g=a[p.animationID],A=r.animationID.toString();if(!e[A]){var n=e[A]={structural:!0,beforeStart:function(){z.beforeStart();g.beforeStart()},close:function(){z.close();g.close()},classes:O(z.classes,g.classes),from:z,to:g,anchors:[]};n.classes.length?b.push(n):(b.push(z),b.push(g))}e[A].anchors.push({out:r.element,"in":p.element})}else r=r?r.animationID:p.animationID,p=r.toString(),d[p]||(d[p]=!0,b.push(a[r]))});return b}function O(a,b){a=a.split(" ");b=b.split(" ");
for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function x(a){for(var c=b.length-1;0<=c;c--){var d=e.get(b[c])(a);if(d)return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function p(){var a=n.data("$$animationRunner");!a||"leave"===Q&&t.$$domOperationFired||a.end()}function K(b){n.off("$destroy",p);n.removeData("$$animationRunner");
C(n,t);ha(n,t);t.domOperation();L&&a.removeClass(n,L);n.removeClass("ng-animate");k.complete(!b)}t=oa(t);var ka=0<=["enter","move","leave"].indexOf(Q),k=new l({end:function(){K()},cancel:function(){K(!0)}});if(!b.length)return K(),k;n.data("$$animationRunner",k);var M=Ea(n.attr("class"),Ea(t.addClass,t.removeClass)),L=t.tempClasses;L&&(M+=" "+L,t.tempClasses=null);var z;ka&&(z="ng-"+Q+"-prepare",a.addClass(n,z));u.push({element:n,classes:M,event:Q,structural:ka,options:t,beforeStart:function(){n.addClass("ng-animate");
L&&a.addClass(n,L);z&&(a.removeClass(n,z),z=null)},close:K});n.on("$destroy",p);if(1<u.length)return k;d.$$postDigest(function(){var a=[];s(u,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});u.length=0;var b=T(a),c=[];s(b,function(a){c.push({domNode:y(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=x(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):
c()}})});I(g(c))});return k}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ja(),c=Ja();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,n,I,g,u,C){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++O))+"-"+a.getAttribute("class")+"-"+b}function Q(r,p,g,n){var k;0<b.count(g)&&(k=c.get(g),k||(p=Y(p,"-stagger"),e.addClass(r,p),k=Ha(a,r,n),k.animationDuration=
Math.max(k.animationDuration,0),k.transitionDuration=Math.max(k.transitionDuration,0),e.removeClass(r,p),c.put(g,k)));return k||{}}function t(a){x.push(a);u.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<x.length;d++)x[d](a);x.length=0})}function H(c,e,g){e=b.get(g);e||(e=Ha(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(g,e);c=e;g=c.animationDelay;e=c.transitionDelay;c.maxDelay=g&&e?Math.max(g,e):g||e;c.maxDuration=Math.max(c.animationDuration*
c.animationIterationCount,c.transitionDuration);return c}var T=Z(e),O=0,x=[];return function(a,c){function d(){k()}function u(){k(!0)}function k(b){if(!(w||F&&O)){w=!0;O=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);va(h,!1);pa(h,!1);s(x,function(a){h.style[a[0]]=""});T(a,f);ha(a,f);Object.keys(A).length&&s(A,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),z);var c=a.data("$$animateCss");c&&(n.cancel(c[0].timer),
a.removeData("$$animateCss"));G&&G.complete(!b)}}function M(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&va(h,!!a)}function L(){G=new l({end:d,cancel:u});t(P);k();return{$$willAnimate:!1,start:function(){return G},end:d}}function z(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-Z,0)>=R&&b>=m&&(F=!0,k())}function N(){function b(){if(!w){M(!1);s(x,function(a){h.style[a[0]]=a[1]});T(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=
h.className+" "+ga;ia=B(h,na);D=H(h,na,ia);ca=D.maxDelay;J=Math.max(ca,0);m=D.maxDuration;if(0===m){k();return}q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(ca="boolean"!==typeof f.delay&&wa(f.delay)?parseFloat(f.delay):ca,J=Math.max(ca,0),D.animationDelay=ca,da=[qa,ca+"s"],x.push(da),h.style[da[0]]=da[1]);R=1E3*J;V=1E3*m;if(f.easing){var d,g=f.easing;q.hasTransitions&&(d=S+"TimingFunction",x.push([d,g]),h.style[d]=g);q.hasAnimations&&(d=aa+
"TimingFunction",x.push([d,g]),h.style[d]=g)}D.transitionDuration&&fa.push(ya);D.animationDuration&&fa.push(za);Z=Date.now();var p=R+1.5*V;d=Z+p;var g=a.data("$$animateCss")||[],N=!0;if(g.length){var l=g[0];(N=d>l.expectedEndTime)?n.cancel(l.timer):g.push(k)}N&&(p=n(c,p,!1),g[0]={timer:p,expectedEndTime:d},g.push(k),a.data("$$animateCss",g));if(fa.length)a.on(fa.join(" "),z);f.to&&(f.cleanupStyles&&Ka(A,h,Object.keys(f.to)),Ga(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();
a.removeData("$$animateCss")}}if(!w)if(h.parentNode){var d=function(a){if(F)O&&a&&(O=!1,k());else if(O=!a,D.animationDuration)if(a=va(h,O),O)x.push(a);else{var b=x,c=b.indexOf(a);0<=a&&b.splice(c,1)}},g=0<ba&&(D.transitionDuration&&0===W.transitionDuration||D.animationDuration&&0===W.animationDuration)&&Math.max(W.animationDelay,W.transitionDelay);g?n(b,Math.floor(g*ba*1E3),!1):b();v.resume=function(){d(!0)};v.pause=function(){d(!1)}}else k()}var f=c||{};f.$$prepared||(f=oa(Ba(f)));var A={},h=y(a);
if(!h||!h.parentNode||!C.enabled())return L();var x=[],I=a.attr("class"),E=Na(f),w,O,F,G,v,J,R,m,V,Z,fa=[];if(0===f.duration||!g.animations&&!g.transitions)return L();var ja=f.event&&X(f.event)?f.event.join(" "):f.event,$="",U="";ja&&f.structural?$=Y(ja,"ng-",!0):ja&&($=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&T(a,f);var ga=[$,U].join(" ").trim(),na=I+" "+ga,ea=Y(ga,"-active"),I=E.to&&0<Object.keys(E.to).length;
if(!(0<(f.keyframeStyle||"").length||I||ga))return L();var ia,W;0<f.stagger?(E=parseFloat(f.stagger),W={transitionDelay:E,animationDelay:E,transitionDuration:0,animationDuration:0}):(ia=B(h,na),W=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(E=[S,f.transitionStyle],la(h,E),x.push(E));0<=f.duration&&(E=0<h.style[S].length,E=Ia(f.duration,E),la(h,E),x.push(E));f.keyframeStyle&&(E=[aa,f.keyframeStyle],la(h,E),x.push(E));var ba=W?0<=f.staggerIndex?f.staggerIndex:b.count(ia):
0;(ja=0===ba)&&!f.skipBlocking&&pa(h,9999);var D=H(h,na,ia),ca=D.maxDelay;J=Math.max(ca,0);m=D.maxDuration;var q={};q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"===D.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=wa(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=
wa(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)m=f.duration?parseFloat(f.duration):m,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=m,E=0<h.style[S+"Property"].length,x.push(Ia(m,E))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=m,x.push([Aa,m+"s"]));if(0===m&&!q.recalculateTimingStyles)return L();if(null!=f.delay){var da;"boolean"!==typeof f.delay&&(da=parseFloat(f.delay),J=Math.max(da,
0));q.applyTransitionDelay&&x.push([ma,da+"s"]);q.applyAnimationDelay&&x.push([qa,da+"s"])}null==f.duration&&0<D.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);R=1E3*J;V=1E3*m;f.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<W.animationDelay&&0===W.animationDuration);f.from&&(f.cleanupStyles&&Ka(A,h,Object.keys(f.from)),Fa(a,f));q.blockTransition||q.blockKeyframeAnimation?M(m):f.skipBlocking||pa(h,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!w)return v={end:d,cancel:u,resume:null,pause:null},G=new l(v),t(N),G}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,n,I){function g(a){return a.replace(/\bng-\S+\b/g,"")}function u(a,b){G(a)&&(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
function C(c,e,n){function l(a){var b={},c=y(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=t.scrollTop;break;case "left":d+=t.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function p(){var c=g(n.attr("class")||""),d=u(c,k),c=u(k,c),d=a(C,{to:l(n),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){C.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim")}var C=
F(y(e).cloneNode(!0)),k=g(C.attr("class")||"");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");C.addClass("ng-anchor");H.append(C);var M;c=function(){var c=a(C,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(M=p(),!M))return I();var L=c||M;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!M&&(M=p()))return c=M.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,
cancel:a})}}}function B(a,b,c,e){var g=Q(a,P),n=Q(b,P),l=[];s(e,function(a){(a=C(c,a.out,a["in"]))&&l.push(a)});if(g||n||0!==l.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];g&&b.push(g.start());n&&b.push(n.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=$(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return P;var t=I[0].body;c=y(e);var H=F(c.parentNode&&11===c.parentNode.nodeType||t.contains(c)?c:t);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=X(c)?c:c.split(" ");for(var d=
[],e={},l=0;l<c.length;l++){var s=c[l],B=a.$$registeredAnimations[s];B&&!e[s]&&(d.push(b.get(B)),e[s]=!0)}return d}var l=Z(d);return function(a,b,d,u){function C(){u.domOperation();l(a,u)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,F,G,f];break;case "addClass":b=[b,F,f];break;case "removeClass":b=[b,G,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ca(a))return a;return P}function y(a,
b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=B(k,a,b,d,function(a){h(!1===a)});return e})});return g}function t(a,b,d,e,f){var g=y(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=y(a,"removeClass",d,e,"beforeRemoveClass"),k=y(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=y(a,"removeClass",d,e,"removeClass"),k=y(a,"addClass",d,e,"addClass"));
h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&ba(d)&&(u=d,d=null);u=oa(u);d||(d=a.attr("class")||"",u.addClass&&(d+=" "+u.addClass),u.removeClass&&(d+=" "+u.removeClass));var F=u.addClass,G=u.removeClass,x=e(d),r,p;if(x.length){var K,J;"leave"===b?(J="leave",K="afterLeave"):(J="before"+b.charAt(0).toUpperCase()+
b.substr(1),K=b);"enter"!==b&&"move"!==b&&(r=t(a,b,u,x,J));p=t(a,b,u,x,K)}if(r||p){var k;return{$$willAnimate:!0,end:function(){k?k.end():(H=!0,C(),ha(a,u),k=new c,k.complete(!0));return k},start:function(){function b(c){H=!0;C();ha(a,u);k.complete(c)}if(k)return k;k=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){C();a(!0)}):C();p&&e.push(function(a){d=p(a)});k.setHost({end:function(){H||((d||P)(void 0),b(void 0))},cancel:function(){H||((d||P)(!0),b(!0))}});c.chain(e,
b);return k}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});
return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;
/*
 AngularJS v1.5.9
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/

(function(t,p){'use strict';var b="BUTTON A INPUT TEXTAREA SELECT DETAILS SUMMARY".split(" "),l=function(a,c){if(-1!==c.indexOf(a[0].nodeName))return!0};p.module("ngAria",["ng"]).provider("$aria",function(){function a(a,b,m,h){return function(d,f,e){var q=e.$normalize(b);!c[q]||l(f,m)||e[q]||d.$watch(e[a],function(a){a=h?!a:!!a;f.attr(b,a)})}}var c={ariaHidden:!0,ariaChecked:!0,ariaReadonly:!0,ariaDisabled:!0,ariaRequired:!0,ariaInvalid:!0,ariaValue:!0,tabindex:!0,bindKeypress:!0,bindRoleForClick:!0};
this.config=function(a){c=p.extend(c,a)};this.$get=function(){return{config:function(a){return c[a]},$$watchExpr:a}}}).directive("ngShow",["$aria",function(a){return a.$$watchExpr("ngShow","aria-hidden",[],!0)}]).directive("ngHide",["$aria",function(a){return a.$$watchExpr("ngHide","aria-hidden",[],!1)}]).directive("ngValue",["$aria",function(a){return a.$$watchExpr("ngValue","aria-checked",b,!1)}]).directive("ngChecked",["$aria",function(a){return a.$$watchExpr("ngChecked","aria-checked",b,!1)}]).directive("ngReadonly",
["$aria",function(a){return a.$$watchExpr("ngReadonly","aria-readonly",b,!1)}]).directive("ngRequired",["$aria",function(a){return a.$$watchExpr("ngRequired","aria-required",b,!1)}]).directive("ngModel",["$aria",function(a){function c(c,h,d,f){return a.config(h)&&!d.attr(c)&&(f||!l(d,b))}function g(a,c){return!c.attr("role")&&c.attr("type")===a&&"INPUT"!==c[0].nodeName}function k(a,c){var d=a.type,f=a.role;return"checkbox"===(d||f)||"menuitemcheckbox"===f?"checkbox":"radio"===(d||f)||"menuitemradio"===
f?"radio":"range"===d||"progressbar"===f||"slider"===f?"range":""}return{restrict:"A",require:"ngModel",priority:200,compile:function(b,h){var d=k(h,b);return{pre:function(a,e,c,b){"checkbox"===d&&(b.$isEmpty=function(a){return!1===a})},post:function(f,e,b,n){function h(){return n.$modelValue}function k(a){e.attr("aria-checked",b.value==n.$viewValue)}function l(){e.attr("aria-checked",!n.$isEmpty(n.$viewValue))}var m=c("tabindex","tabindex",e,!1);switch(d){case "radio":case "checkbox":g(d,e)&&e.attr("role",
d);c("aria-checked","ariaChecked",e,!1)&&f.$watch(h,"radio"===d?k:l);m&&e.attr("tabindex",0);break;case "range":g(d,e)&&e.attr("role","slider");if(a.config("ariaValue")){var p=!e.attr("aria-valuemin")&&(b.hasOwnProperty("min")||b.hasOwnProperty("ngMin")),r=!e.attr("aria-valuemax")&&(b.hasOwnProperty("max")||b.hasOwnProperty("ngMax")),s=!e.attr("aria-valuenow");p&&b.$observe("min",function(a){e.attr("aria-valuemin",a)});r&&b.$observe("max",function(a){e.attr("aria-valuemax",a)});s&&f.$watch(h,function(a){e.attr("aria-valuenow",
a)})}m&&e.attr("tabindex",0)}!b.hasOwnProperty("ngRequired")&&n.$validators.required&&c("aria-required","ariaRequired",e,!1)&&b.$observe("required",function(){e.attr("aria-required",!!b.required)});c("aria-invalid","ariaInvalid",e,!0)&&f.$watch(function(){return n.$invalid},function(a){e.attr("aria-invalid",!!a)})}}}}}]).directive("ngDisabled",["$aria",function(a){return a.$$watchExpr("ngDisabled","aria-disabled",b,!1)}]).directive("ngMessages",function(){return{restrict:"A",require:"?ngMessages",
link:function(a,b,g,k){b.attr("aria-live")||b.attr("aria-live","assertive")}}}).directive("ngClick",["$aria","$parse",function(a,c){return{restrict:"A",compile:function(g,k){var m=c(k.ngClick,null,!0);return function(c,d,f){if(!l(d,b)&&(a.config("bindRoleForClick")&&!d.attr("role")&&d.attr("role","button"),a.config("tabindex")&&!d.attr("tabindex")&&d.attr("tabindex",0),a.config("bindKeypress")&&!f.ngKeypress))d.on("keypress",function(a){function b(){m(c,{$event:a})}var d=a.which||a.keyCode;32!==d&&
13!==d||c.$apply(b)})}}}}]).directive("ngDblclick",["$aria",function(a){return function(c,g,k){!a.config("tabindex")||g.attr("tabindex")||l(g,b)||g.attr("tabindex",0)}}])})(window,window.angular);
//# sourceMappingURL=angular-aria.min.js.map
;
/*!
 * AngularJS Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.4
 */

!function(e,t,n){"use strict";!function(){t.module("ngMaterial",["ng","ngAnimate","ngAria","material.core","material.core.interaction","material.core.gestures","material.core.layout","material.core.meta","material.core.theming.palette","material.core.theming","material.core.animate","material.components.autocomplete","material.components.backdrop","material.components.bottomSheet","material.components.button","material.components.card","material.components.checkbox","material.components.chips","material.components.colors","material.components.content","material.components.datepicker","material.components.dialog","material.components.divider","material.components.fabActions","material.components.fabShared","material.components.fabSpeedDial","material.components.fabToolbar","material.components.gridList","material.components.icon","material.components.input","material.components.list","material.components.menu","material.components.menuBar","material.components.navBar","material.components.progressCircular","material.components.panel","material.components.progressLinear","material.components.radioButton","material.components.showHide","material.components.sidenav","material.components.select","material.components.slider","material.components.sticky","material.components.subheader","material.components.switch","material.components.swipe","material.components.tabs","material.components.toast","material.components.toolbar","material.components.tooltip","material.components.truncate","material.components.virtualRepeat","material.components.whiteframe"])}(),function(){function e(e,t){if(t.has("$swipe")){var n="You are using the ngTouch module. \nAngularJS Material already has mobile click, tap, and swipe support... \nngTouch is not supported with AngularJS Material!";e.warn(n)}}function n(e,t){e.decorator("$$rAF",["$delegate",o]),e.decorator("$q",["$delegate",i]),t.theme("default").primaryPalette("indigo").accentPalette("pink").warnPalette("deep-orange").backgroundPalette("grey")}function o(e){return e.throttle=function(t){var n,o,i,r;return function(){n=arguments,r=this,i=t,o||(o=!0,e(function(){i.apply(r,Array.prototype.slice.call(n)),o=!1}))}},e}function i(e){return e.resolve||(e.resolve=e.when),e}e.$inject=["$log","$injector"],n.$inject=["$provide","$mdThemingProvider"],o.$inject=["$delegate"],i.$inject=["$delegate"],t.module("material.core",["ngAnimate","material.core.animate","material.core.layout","material.core.interaction","material.core.gestures","material.core.theming"]).config(n).run(e)}(),function(){function e(e){function n(n,o,i){function r(e){t.isUndefined(e)&&(e=!0),o.toggleClass("md-autofocus",!!e)}var a=i.mdAutoFocus||i.mdAutofocus||i.mdSidenavFocus;r(e(a)(n)),a&&n.$watch(a,r)}return{restrict:"A",link:{pre:n}}}e.$inject=["$parse"],t.module("material.core").directive("mdAutofocus",e).directive("mdAutoFocus",e).directive("mdSidenavFocus",e)}(),function(){function e(){function e(e){var t="#"===e[0]?e.substr(1):e,n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),"rgba("+parseInt(o,16)+","+parseInt(i,16)+","+parseInt(r,16)+",0.1)"}function t(e){e=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);var t=e&&4===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):"";return t.toUpperCase()}function n(e){return e.replace(")",", 0.1)").replace("(","a(")}function o(e){return e?e.replace("rgba","rgb").replace(/,[^\),]+\)/,")"):"rgb(0,0,0)"}return{rgbaToHex:t,hexToRgba:e,rgbToRgba:n,rgbaToRgb:o}}t.module("material.core").factory("$mdColorUtil",e)}(),function(){function e(){function e(e){var t=a+"-"+e,i=o(t),d=i.charAt(0).toLowerCase()+i.substring(1);return n(r,e)?e:n(r,i)?i:n(r,d)?d:e}function n(e,n){return t.isDefined(e.style[n])}function o(e){return e.replace(s,function(e,t,n,o){return o?n.toUpperCase():n})}function i(e){var t,n,o=/^(Moz|webkit|ms)(?=[A-Z])/;for(t in e.style)if(n=o.exec(t))return n[0]}var r=document.createElement("div"),a=i(r),d=/webkit/i.test(a),s=/([:\-_]+(.))/g,c={isInputKey:function(e){return e.keyCode>=31&&e.keyCode<=90},isNumPadKey:function(e){return 3===e.location&&e.keyCode>=97&&e.keyCode<=105},isMetaKey:function(e){return e.keyCode>=91&&e.keyCode<=93},isFnLockKey:function(e){return e.keyCode>=112&&e.keyCode<=145},isNavigationKey:function(e){var t=c.KEY_CODE,n=[t.SPACE,t.ENTER,t.UP_ARROW,t.DOWN_ARROW];return n.indexOf(e.keyCode)!=-1},hasModifierKey:function(e){return e.ctrlKey||e.metaKey||e.altKey},ELEMENT_MAX_PIXELS:1533917,BEFORE_NG_ARIA:210,KEY_CODE:{COMMA:188,SEMICOLON:186,ENTER:13,ESCAPE:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40,TAB:9,BACKSPACE:8,DELETE:46},CSS:{TRANSITIONEND:"transitionend"+(d?" webkitTransitionEnd":""),ANIMATIONEND:"animationend"+(d?" webkitAnimationEnd":""),TRANSFORM:e("transform"),TRANSFORM_ORIGIN:e("transformOrigin"),TRANSITION:e("transition"),TRANSITION_DURATION:e("transitionDuration"),ANIMATION_PLAY_STATE:e("animationPlayState"),ANIMATION_DURATION:e("animationDuration"),ANIMATION_NAME:e("animationName"),ANIMATION_TIMING:e("animationTimingFunction"),ANIMATION_DIRECTION:e("animationDirection")},MEDIA:{xs:"(max-width: 599px)","gt-xs":"(min-width: 600px)",sm:"(min-width: 600px) and (max-width: 959px)","gt-sm":"(min-width: 960px)",md:"(min-width: 960px) and (max-width: 1279px)","gt-md":"(min-width: 1280px)",lg:"(min-width: 1280px) and (max-width: 1919px)","gt-lg":"(min-width: 1920px)",xl:"(min-width: 1920px)",landscape:"(orientation: landscape)",portrait:"(orientation: portrait)",print:"print"},MEDIA_PRIORITY:["xl","gt-lg","lg","gt-md","md","gt-sm","sm","gt-xs","xs","landscape","portrait","print"]};return c}t.module("material.core").factory("$mdConstant",e)}(),function(){function e(e,n){function o(){return[].concat(v)}function i(){return v.length}function r(e){return v.length&&e>-1&&e<v.length}function a(e){return!!e&&r(u(e)+1)}function d(e){return!!e&&r(u(e)-1)}function s(e){return r(e)?v[e]:null}function c(e,t){return v.filter(function(n){return n[e]===t})}function l(e,n){return e?(t.isNumber(n)||(n=v.length),v.splice(n,0,e),u(e)):-1}function m(e){p(e)&&v.splice(u(e),1)}function u(e){return v.indexOf(e)}function p(e){return e&&u(e)>-1}function h(){return v.length?v[0]:null}function f(){return v.length?v[v.length-1]:null}function g(e,o,i,a){i=i||b;for(var d=u(o);;){if(!r(d))return null;var s=d+(e?-1:1),c=null;if(r(s)?c=v[s]:n&&(c=e?f():h(),s=u(c)),null===c||s===a)return null;if(i(c))return c;t.isUndefined(a)&&(a=s),d=s}}var b=function(){return!0};e&&!t.isArray(e)&&(e=Array.prototype.slice.call(e)),n=!!n;var v=e||[];return{items:o,count:i,inRange:r,contains:p,indexOf:u,itemAt:s,findBy:c,add:l,remove:m,first:h,last:f,next:t.bind(null,g,!1),previous:t.bind(null,g,!0),hasPrevious:d,hasNext:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.iterator=e,t}])}])}(),function(){function e(e,n,o){function i(e){var n=u[e];t.isUndefined(n)&&(n=u[e]=r(e));var o=h[n];return t.isUndefined(o)&&(o=a(n)),o}function r(t){return e.MEDIA[t]||("("!==t.charAt(0)?"("+t+")":t)}function a(e){var t=p[e];return t||(t=p[e]=o.matchMedia(e)),t.addListener(d),h[t.media]=!!t.matches}function d(e){n.$evalAsync(function(){h[e.media]=!!e.matches})}function s(e){return p[e]}function c(t,n){for(var o=0;o<e.MEDIA_PRIORITY.length;o++){var i=e.MEDIA_PRIORITY[o];if(p[u[i]].matches){var r=m(t,n+"-"+i);if(t[r])return t[r]}}return t[m(t,n)]}function l(n,o,i){var r=[];return n.forEach(function(n){var a=m(o,n);t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,null)));for(var d in e.MEDIA)a=m(o,n+"-"+d),t.isDefined(o[a])&&r.push(o.$observe(a,t.bind(void 0,i,d)))}),function(){r.forEach(function(e){e()})}}function m(e,t){return f[t]||(f[t]=e.$normalize(t))}var u={},p={},h={},f={};return i.getResponsiveAttribute=c,i.getQuery=s,i.watchResponsiveAttributes=l,i}e.$inject=["$mdConstant","$rootScope","$window"],t.module("material.core").factory("$mdMedia",e)}(),function(){function e(e,n){function o(e){return e=t.isArray(e)?e:[e],e.forEach(function(t){s.forEach(function(n){e.push(n+"-"+t)})}),e}function i(e){return e=t.isArray(e)?e:[e],o(e).map(function(e){return"["+e+"]"}).join(",")}function r(e,t){if(e=d(e),!e)return!1;for(var n=o(t),i=0;i<n.length;i++)if(e.hasAttribute(n[i]))return!0;return!1}function a(e,t){e=d(e),e&&o(t).forEach(function(t){e.removeAttribute(t)})}function d(e){if(e=e[0]||e,e.nodeType)return e}var s=["data","x"];return e?n?i(e):o(e):{buildList:o,buildSelector:i,hasAttribute:r,removeAttribute:a}}t.module("material.core").config(["$provide",function(t){t.decorator("$mdUtil",["$delegate",function(t){return t.prefixer=e,t}])}])}(),function(){function o(o,r,a,d,s,c,l,m,u,p){function h(e){return e?f(e)||g(e)?e:e+"px":"0"}function f(e){return String(e).indexOf("px")>-1}function g(e){return String(e).indexOf("%")>-1}function b(e){return e[0]||e}var v=c.startSymbol(),E=c.endSymbol(),$="{{"===v&&"}}"===E,C=function(e,n,o){var i=!1;if(e&&e.length){var r=u.getComputedStyle(e[0]);i=t.isDefined(r[n])&&(!o||r[n]==o)}return i},y={dom:{},now:e.performance&&e.performance.now?t.bind(e.performance,e.performance.now):Date.now||function(){return(new Date).getTime()},getModelOption:function(e,t){if(e.$options){var n=e.$options;return n.getOption?n.getOption(t):n[t]}},bidi:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir);if(0==arguments.length)return a?"ltr":"rtl";var d=t.element(e);a&&t.isDefined(i)?d.css(n,h(i)):!a&&t.isDefined(r)&&d.css(n,h(r))},bidiProperty:function(e,n,i,r){var a=!("rtl"==o[0].dir||"rtl"==o[0].body.dir),d=t.element(e);a&&t.isDefined(n)?(d.css(n,h(r)),d.css(i,"")):!a&&t.isDefined(i)&&(d.css(i,h(r)),d.css(n,""))},clientRect:function(e,t,n){var o=b(e);t=b(t||o.offsetParent||document.body);var i=o.getBoundingClientRect(),r=n?t.getBoundingClientRect():{left:0,top:0,width:0,height:0};return{left:i.left-r.left,top:i.top-r.top,width:i.width,height:i.height}},offsetRect:function(e,t){return y.clientRect(e,t,!0)},nodesToArray:function(e){e=e||[];for(var t=[],n=0;n<e.length;++n)t.push(e.item(n));return t},getViewportTop:function(){return e.scrollY||e.pageYOffset||0},findFocusTarget:function(e,n){function o(e,n){var o,i=e[0].querySelectorAll(n);return i&&i.length&&i.length&&t.forEach(i,function(e){e=t.element(e);var n=e.hasClass("md-autofocus");n&&(o=e)}),o}var i,r=this.prefixer("md-autofocus",!0);return i=o(e,n||r),i||n==r||(i=o(e,this.prefixer("md-auto-focus",!0)),i||(i=o(e,r))),i},disableScrollAround:function(e,n,i){function r(e){function n(e){e.preventDefault()}e=t.element(e||d);var o;return i.disableScrollMask?o=e:(o=t.element('<div class="md-scroll-mask">  <div class="md-scroll-mask-bar"></div></div>'),e.append(o)),o.on("wheel",n),o.on("touchmove",n),function(){o.off("wheel"),o.off("touchmove"),i.disableScrollMask||o[0].parentNode.removeChild(o[0])}}function a(){var e=o[0].documentElement,n=e.style.cssText||"",i=d.style.cssText||"",r=y.getViewportTop(),a=d.clientWidth,s=d.scrollHeight>d.clientHeight+1;return s&&t.element(d).css({position:"fixed",width:"100%",top:-r+"px"}),d.clientWidth<a&&(d.style.overflow="hidden"),s&&(e.style.overflowY="scroll"),function(){d.style.cssText=i,e.style.cssText=n,d.scrollTop=r}}if(i=i||{},y.disableScrollAround._count=Math.max(0,y.disableScrollAround._count||0),y.disableScrollAround._count++,y.disableScrollAround._restoreScroll)return y.disableScrollAround._restoreScroll;var d=o[0].body,s=a(),c=r(n);return y.disableScrollAround._restoreScroll=function(){--y.disableScrollAround._count<=0&&(s(),c(),delete y.disableScrollAround._restoreScroll)}},enableScrolling:function(){var e=this.disableScrollAround._restoreScroll;e&&e()},floatingScrollbars:function(){if(this.floatingScrollbars.cached===n){var e=t.element("<div><div></div></div>").css({width:"100%","z-index":-1,position:"absolute",height:"35px","overflow-y":"scroll"});e.children().css("height","60px"),o[0].body.appendChild(e[0]),this.floatingScrollbars.cached=e[0].offsetWidth==e[0].childNodes[0].offsetWidth,e.remove()}return this.floatingScrollbars.cached},forceFocus:function(t){var n=t[0]||t;document.addEventListener("click",function i(e){e.target===n&&e.$focus&&(n.focus(),e.stopImmediatePropagation(),e.preventDefault(),n.removeEventListener("click",i))},!0);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!1,!0,e,{},0,0,0,0,!1,!1,!1,!1,0,null),o.$material=!0,o.$focus=!0,n.dispatchEvent(o)},createBackdrop:function(e,t){return a(y.supplant('<md-backdrop class="{0}">',[t]))(e)},supplant:function(e,t,n){return n=n||/\{([^\{\}]*)\}/g,e.replace(n,function(e,n){var o=n.split("."),i=t;try{for(var r in o)o.hasOwnProperty(r)&&(i=i[o[r]])}catch(a){i=e}return"string"==typeof i||"number"==typeof i?i:e})},fakeNgModel:function(){return{$fake:!0,$setTouched:t.noop,$setViewValue:function(e){this.$viewValue=e,this.$render(e),this.$viewChangeListeners.forEach(function(e){e()})},$isEmpty:function(e){return 0===(""+e).length},$parsers:[],$formatters:[],$viewChangeListeners:[],$render:t.noop}},debounce:function(e,t,o,i){var a;return function(){var d=o,s=Array.prototype.slice.call(arguments);r.cancel(a),a=r(function(){a=n,e.apply(d,s)},t||10,i)}},throttle:function(e,t){var n;return function(){var o=this,i=arguments,r=y.now();(!n||r-n>t)&&(e.apply(o,i),n=r)}},time:function(e){var t=y.now();return e(),y.now()-t},valueOnUse:function(e,t,n){var o=null,i=Array.prototype.slice.call(arguments),r=i.length>3?i.slice(3):[];Object.defineProperty(e,t,{get:function(){return null===o&&(o=n.apply(e,r)),o}})},nextUid:function(){return""+i++},disconnectScope:function(e){if(e&&e.$root!==e&&!e.$$destroyed){var t=e.$parent;e.$$disconnected=!0,t.$$childHead===e&&(t.$$childHead=e.$$nextSibling),t.$$childTail===e&&(t.$$childTail=e.$$prevSibling),e.$$prevSibling&&(e.$$prevSibling.$$nextSibling=e.$$nextSibling),e.$$nextSibling&&(e.$$nextSibling.$$prevSibling=e.$$prevSibling),e.$$nextSibling=e.$$prevSibling=null}},reconnectScope:function(e){if(e&&e.$root!==e&&e.$$disconnected){var t=e,n=t.$parent;t.$$disconnected=!1,t.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=t,n.$$childTail=t):n.$$childHead=n.$$childTail=t}},getClosest:function(e,n,o){if(t.isString(n)){var i=n.toUpperCase();n=function(e){return e.nodeName.toUpperCase()===i}}if(e instanceof t.element&&(e=e[0]),o&&(e=e.parentNode),!e)return null;do if(n(e))return e;while(e=e.parentNode);return null},elementContains:function(n,o){var i=e.Node&&e.Node.prototype&&Node.prototype.contains,r=i?t.bind(n,n.contains):t.bind(n,function(e){return n===o||!!(16&this.compareDocumentPosition(e))});return r(o)},extractElementByName:function(e,n,o,i){function r(e){return a(e)||(o?d(e):null)}function a(e){if(e)for(var t=0,o=e.length;t<o;t++)if(e[t].nodeName.toLowerCase()===n)return e[t];return null}function d(e){var t;if(e)for(var n=0,o=e.length;n<o;n++){var i=e[n];if(!t)for(var a=0,d=i.childNodes.length;a<d;a++)t=t||r([i.childNodes[a]])}return t}var s=r(e);return!s&&i&&l.warn(y.supplant("Unable to find node '{0}' in element '{1}'.",[n,e[0].outerHTML])),t.element(s||e)},initOptionalProperties:function(e,n,o){o=o||{},t.forEach(e.$$isolateBindings,function(i,r){if(i.optional&&t.isUndefined(e[r])){var a=t.isDefined(n[i.attrName]);e[r]=t.isDefined(o[r])?o[r]:a}})},nextTick:function(e,t,n){function o(){var e=i.queue,t=i.digest;i.queue=[],i.timeout=null,i.digest=!1,e.forEach(function(e){var t=e.scope&&e.scope.$$destroyed;t||e.callback()}),t&&d.$digest()}var i=y.nextTick,a=i.timeout,s=i.queue||[];return s.push({scope:n,callback:e}),null==t&&(t=!0),i.digest=i.digest||t,i.queue=s,a||(i.timeout=r(o,0,!1))},processTemplate:function(e){return $?e:e&&t.isString(e)?e.replace(/\{\{/g,v).replace(/}}/g,E):e},getParentWithPointerEvents:function(e){for(var t=e.parent();C(t,"pointer-events","none");)t=t.parent();return t},getNearestContentElement:function(e){for(var t=e.parent()[0];t&&t!==m[0]&&t!==document.body&&"MD-CONTENT"!==t.nodeName.toUpperCase();)t=t.parentNode;return t},checkStickySupport:function(){var e,n=t.element("<div>");o[0].body.appendChild(n[0]);for(var i=["sticky","-webkit-sticky"],r=0;r<i.length;++r)if(n.css({position:i[r],top:0,"z-index":2}),n.css("position")==i[r]){e=i[r];break}return n.remove(),e},parseAttributeBoolean:function(e,t){return""===e||!!e&&(t===!1||"false"!==e&&"0"!==e)},hasComputedStyle:C,isParentFormSubmitted:function(e){var n=y.getClosest(e,"form"),o=n?t.element(n).controller("form"):null;return!!o&&o.$submitted},animateScrollTo:function(e,t,n){function o(){var n=i();e.scrollTop=n,(s?n<t:n>t)&&p(o)}function i(){var e=n||1e3,t=y.now()-c;return r(t,a,d,e)}function r(e,t,n,o){if(e>o)return t+n;var i=(e/=o)*e,r=i*e;return t+n*(-2*r+3*i)}var a=e.scrollTop,d=t-a,s=a<t,c=y.now();p(o)},uniq:function(e){if(e)return e.filter(function(e,t,n){return n.indexOf(e)===t})}};return y.dom.animator=s(y),y}o.$inject=["$document","$timeout","$compile","$rootScope","$$mdAnimate","$interpolate","$log","$rootElement","$window","$$rAF"];var i=0;t.module("material.core").factory("$mdUtil",o),t.element.prototype.focus=t.element.prototype.focus||function(){return this.length&&this[0].focus(),this},t.element.prototype.blur=t.element.prototype.blur||function(){return this.length&&this[0].blur(),this}}(),function(){function e(e,t,n,o,i){this.$q=e,this.$templateRequest=t,this.$injector=n,this.$compile=o,this.$controller=i}e.$inject=["$q","$templateRequest","$injector","$compile","$controller"],t.module("material.core").service("$mdCompiler",e),e.prototype.compile=function(e){return e.contentElement?this._prepareContentElement(e):this._compileTemplate(e)},e.prototype._prepareContentElement=function(e){var t=this._fetchContentElement(e);return this.$q.resolve({element:t.element,cleanup:t.restore,locals:{},link:function(){return t.element}})},e.prototype._compileTemplate=function(e){var n=this,o=e.templateUrl,i=e.template||"",r=t.extend({},e.resolve),a=t.extend({},e.locals),d=e.transformTemplate||t.identity;return t.forEach(r,function(e,o){t.isString(e)?r[o]=n.$injector.get(e):r[o]=n.$injector.invoke(e)}),t.extend(r,a),o?r.$$ngTemplate=this.$templateRequest(o):r.$$ngTemplate=this.$q.when(i),this.$q.all(r).then(function(o){var i=d(o.$$ngTemplate,e),r=e.element||t.element("<div>").html(i.trim()).contents();return n._compileElement(o,r,e)})},e.prototype._compileElement=function(e,n,o){function i(i){if(e.$scope=i,o.controller){var s=t.extend(e,{$element:n}),c=r.$controller(o.controller,s,!0,o.controllerAs);o.bindToController&&t.extend(c.instance,e);var l=c();n.data("$ngControllerController",l),n.children().data("$ngControllerController",l),d.controller=l}return a(i)}var r=this,a=this.$compile(n),d={element:n,cleanup:n.remove.bind(n),locals:e,link:i};return d},e.prototype._fetchContentElement=function(e){function n(e){var t=e.parentNode,n=e.nextElementSibling;return function(){n?t.insertBefore(e,n):t.appendChild(e)}}var o=e.contentElement,i=null;return t.isString(o)?(o=document.querySelector(o),i=n(o)):(o=o[0]||o,i=document.contains(o)?n(o):function(){o.parentNode&&o.parentNode.removeChild(o)}),{element:t.element(o),restore:i}}}(),function(){function e(){function e(){t.showWarnings=!1}var t={showWarnings:!0};return{disableWarnings:e,$get:["$$rAF","$log","$window","$interpolate",function(e,o,i,r){return n.apply(t,arguments)}]}}function n(e,n,o,i){function r(e,o,i){var r=t.element(e)[0]||e;!r||r.hasAttribute(o)&&0!==r.getAttribute(o).length||l(r,o)||(i=t.isString(i)?i.trim():"",i.length?e.attr(o,i):p&&n.warn('ARIA: Attribute "',o,'", required for accessibility, is missing on node:',r))}function a(t,n,o){e(function(){r(t,n,o())})}function d(e,t){var n=c(e)||"",o=n.indexOf(i.startSymbol())>-1;o?a(e,t,function(){return c(e)}):r(e,t,n)}function s(e,t){var n=c(e),o=n.indexOf(i.startSymbol())>-1;o||n||r(e,t,n)}function c(e){function t(t){for(;t.parentNode&&(t=t.parentNode)!==e;)if(t.getAttribute&&"true"===t.getAttribute("aria-hidden"))return!0}e=e[0]||e;for(var n,o=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,null,!1),i="";n=o.nextNode();)t(n)||(i+=n.textContent);return i.trim()||""}function l(e,t){function n(e){var t=e.currentStyle?e.currentStyle:o.getComputedStyle(e);return"none"===t.display}var i=e.hasChildNodes(),r=!1;if(i)for(var a=e.childNodes,d=0;d<a.length;d++){var s=a[d];1===s.nodeType&&s.hasAttribute(t)&&(n(s)||(r=!0))}return r}function m(e){var n=t.element(e)[0]||e;return!!n.hasAttribute&&(n.hasAttribute("aria-label")||n.hasAttribute("aria-labelledby")||n.hasAttribute("aria-describedby"))}function u(e,n){function o(e){if(!m(e))return!1;if(e.hasAttribute("role"))switch(e.getAttribute("role").toLowerCase()){case"command":case"definition":case"directory":case"grid":case"list":case"listitem":case"log":case"marquee":case"menu":case"menubar":case"note":case"presentation":case"separator":case"scrollbar":case"status":case"tablist":return!1}switch(e.tagName.toLowerCase()){case"abbr":case"acronym":case"address":case"applet":case"audio":case"b":case"bdi":case"bdo":case"big":case"blockquote":case"br":case"canvas":case"caption":case"center":case"cite":case"code":case"col":case"data":case"dd":case"del":case"dfn":case"dir":case"div":case"dl":case"em":case"embed":case"fieldset":case"figcaption":case"font":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":case"hgroup":case"html":case"i":case"ins":case"isindex":case"kbd":case"keygen":case"label":case"legend":case"li":case"map":case"mark":case"menu":case"object":case"ol":case"output":case"pre":case"presentation":case"q":case"rt":case"ruby":case"samp":case"small":case"source":case"span":case"status":case"strike":case"strong":case"sub":case"sup":case"svg":case"tbody":case"td":case"th":case"thead":case"time":case"tr":case"track":case"tt":case"ul":case"var":return!1}return!0}n=n||1;var i=t.element(e)[0]||e;return!!i.parentNode&&(!!o(i.parentNode)||(n--,!!n&&u(i.parentNode,n)))}var p=this.showWarnings;return{expect:r,expectAsync:a,expectWithText:d,expectWithoutText:s,getText:c,hasAriaLabel:m,parentHasAriaLabel:u}}n.$inject=["$$rAF","$log","$window","$interpolate"],t.module("material.core").provider("$mdAria",e)}(),function(){function n(e,n){this.$timeout=e,this.$mdUtil=n,this.bodyElement=t.element(document.body),this.isBuffering=!1,this.bufferTimeout=null,this.lastInteractionType=null,this.lastInteractionTime=null,this.inputEventMap={keydown:"keyboard",mousedown:"mouse",mouseenter:"mouse",touchstart:"touch",pointerdown:"pointer",MSPointerDown:"pointer"},this.iePointerMap={2:"touch",3:"touch",4:"mouse"},this.initializeEvents()}n.$inject=["$timeout","$mdUtil"],t.module("material.core.interaction",[]).service("$mdInteraction",n),n.prototype.initializeEvents=function(){var t="MSPointerEvent"in e?"MSPointerDown":"PointerEvent"in e?"pointerdown":null;this.bodyElement.on("keydown mousedown",this.onInputEvent.bind(this)),"ontouchstart"in document.documentElement&&this.bodyElement.on("touchstart",this.onBufferInputEvent.bind(this)),t&&this.bodyElement.on(t,this.onInputEvent.bind(this))},n.prototype.onInputEvent=function(e){if(!this.isBuffering){var t=this.inputEventMap[e.type];"pointer"===t&&(t=this.iePointerMap[e.pointerType]||e.pointerType),this.lastInteractionType=t,this.lastInteractionTime=this.$mdUtil.now()}},n.prototype.onBufferInputEvent=function(e){this.$timeout.cancel(this.bufferTimeout),this.onInputEvent(e),this.isBuffering=!0,this.bufferTimeout=this.$timeout(function(){this.isBuffering=!1}.bind(this),650,!1)},n.prototype.getLastInteractionType=function(){return this.lastInteractionType},n.prototype.isUserInvoked=function(e){var n=t.isNumber(e)?e:15;return this.lastInteractionTime>=this.$mdUtil.now()-n}}(),function(){function n(){}function o(n,o,i){function r(e){return function(t,n){n.distance<this.state.options.maxDistance&&this.dispatchEvent(t,e,n)}}function a(e,t,n){var o=h[t.replace(/^\$md./,"")];if(!o)throw new Error("Failed to register element with handler "+t+". Available handlers: "+Object.keys(h).join(", "));return o.registerElement(e,n)}function s(e,o){var i=new n(e);return t.extend(i,o),h[e]=i,v}function c(){for(var e=document.createElement("div"),n=["","webkit","Moz","MS","ms","o"],o=0;o<n.length;o++){var i=n[o],r=i?i+"TouchAction":"touchAction";if(t.isDefined(e.style[r]))return r}}var m=navigator.userAgent||navigator.vendor||e.opera,u=m.match(/ipad|iphone|ipod/i),p=m.match(/android/i),g=c(),b="undefined"!=typeof e.jQuery&&t.element===e.jQuery,v={handler:s,register:a,isHijackingClicks:(u||p)&&!b&&!f};if(v.isHijackingClicks){var E=6;v.handler("click",{options:{maxDistance:E},onEnd:r("click")}),v.handler("focus",{options:{maxDistance:E},onEnd:function(e,t){function n(e){var t=["INPUT","SELECT","BUTTON","TEXTAREA","VIDEO","AUDIO"];return"-1"!=e.getAttribute("tabindex")&&!e.hasAttribute("DISABLED")&&(e.hasAttribute("tabindex")||e.hasAttribute("href")||e.isContentEditable||t.indexOf(e.nodeName)!=-1)}t.distance<this.state.options.maxDistance&&n(e.target)&&(this.dispatchEvent(e,"focus",t),e.target.focus())}}),v.handler("mouseup",{options:{maxDistance:E},onEnd:r("mouseup")}),v.handler("mousedown",{onStart:function(e){this.dispatchEvent(e,"mousedown")}})}return v.handler("press",{onStart:function(e,t){this.dispatchEvent(e,"$md.pressdown")},onEnd:function(e,t){this.dispatchEvent(e,"$md.pressup")}}).handler("hold",{options:{maxDistance:6,delay:500},onCancel:function(){i.cancel(this.state.timeout)},onStart:function(e,n){return this.state.registeredParent?(this.state.pos={x:n.x,y:n.y},void(this.state.timeout=i(t.bind(this,function(){this.dispatchEvent(e,"$md.hold"),this.cancel()}),this.state.options.delay,!1))):this.cancel()},onMove:function(e,t){g||"touchmove"!==e.type||e.preventDefault();var n=this.state.pos.x-t.x,o=this.state.pos.y-t.y;Math.sqrt(n*n+o*o)>this.options.maxDistance&&this.cancel()},onEnd:function(){this.onCancel()}}).handler("drag",{options:{minDistance:6,horizontal:!0,cancelMultiplier:1.5},onSetup:function(e,t){g&&(this.oldTouchAction=e[0].style[g],e[0].style[g]=t.horizontal?"pan-y":"pan-x")},onCleanup:function(e){this.oldTouchAction&&(e[0].style[g]=this.oldTouchAction)},onStart:function(e){this.state.registeredParent||this.cancel()},onMove:function(e,t){var n,o;g||"touchmove"!==e.type||e.preventDefault(),this.state.dragPointer?this.dispatchDragMove(e):(this.state.options.horizontal?(n=Math.abs(t.distanceX)>this.state.options.minDistance,o=Math.abs(t.distanceY)>this.state.options.minDistance*this.state.options.cancelMultiplier):(n=Math.abs(t.distanceY)>this.state.options.minDistance,o=Math.abs(t.distanceX)>this.state.options.minDistance*this.state.options.cancelMultiplier),n?(this.state.dragPointer=d(e),l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragstart",this.state.dragPointer)):o&&this.cancel())},dispatchDragMove:o.throttle(function(e){this.state.isRunning&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.drag",this.state.dragPointer))}),onEnd:function(e,t){this.state.dragPointer&&(l(e,this.state.dragPointer),this.dispatchEvent(e,"$md.dragend",this.state.dragPointer))}}).handler("swipe",{options:{minVelocity:.65,minDistance:10},onEnd:function(e,t){var n;Math.abs(t.velocityX)>this.state.options.minVelocity&&Math.abs(t.distanceX)>this.state.options.minDistance?(n="left"==t.directionX?"$md.swipeleft":"$md.swiperight",this.dispatchEvent(e,n)):Math.abs(t.velocityY)>this.state.options.minVelocity&&Math.abs(t.distanceY)>this.state.options.minDistance&&(n="up"==t.directionY?"$md.swipeup":"$md.swipedown",this.dispatchEvent(e,n))}})}function i(e){this.name=e,this.state={}}function r(){function n(e,n,o){o=o||u;var i=new t.element.Event(n);i.$material=!0,i.pointer=o,i.srcEvent=e,t.extend(i,{clientX:o.x,clientY:o.y,screenX:o.x,screenY:o.y,pageX:o.x,pageY:o.y,ctrlKey:e.ctrlKey,altKey:e.altKey,shiftKey:e.shiftKey,metaKey:e.metaKey}),t.element(o.target).trigger(i)}function o(t,n,o){o=o||u;var i;"click"===n||"mouseup"==n||"mousedown"==n?(i=document.createEvent("MouseEvents"),i.initMouseEvent(n,!0,!0,e,t.detail,o.x,o.y,o.x,o.y,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget||null)):(i=document.createEvent("CustomEvent"),i.initCustomEvent(n,!0,!0,{})),i.$material=!0,i.pointer=o,i.srcEvent=t,o.target.dispatchEvent(i)}var r="undefined"!=typeof e.jQuery&&t.element===e.jQuery;return i.prototype={options:{},dispatchEvent:r?n:o,onSetup:t.noop,onCleanup:t.noop,onStart:t.noop,onMove:t.noop,onEnd:t.noop,onCancel:t.noop,start:function(e,n){if(!this.state.isRunning){var o=this.getNearestParent(e.target),i=o&&o.$mdGesture[this.name]||{};this.state={isRunning:!0,options:t.extend({},this.options,i),registeredParent:o},this.onStart(e,n)}},move:function(e,t){this.state.isRunning&&this.onMove(e,t)},end:function(e,t){this.state.isRunning&&(this.onEnd(e,t),this.state.isRunning=!1)},cancel:function(e,t){this.onCancel(e,t),this.state={}},getNearestParent:function(e){for(var t=e;t;){if((t.$mdGesture||{})[this.name])return t;t=t.parentNode}return null},registerElement:function(e,t){function n(){delete e[0].$mdGesture[o.name],e.off("$destroy",n),o.onCleanup(e,t||{})}var o=this;return e[0].$mdGesture=e[0].$mdGesture||{},e[0].$mdGesture[this.name]=t||{},e.on("$destroy",n),o.onSetup(e,t||{}),n}},i}function a(e,n){function o(e){var t=!e.clientX&&!e.clientY;t||e.$material||e.isIonicTap||c(e)||(e.preventDefault(),e.stopPropagation())}function i(e){var t=0===e.clientX&&0===e.clientY,n=e.target&&"submit"===e.target.type;t||e.$material||e.isIonicTap||c(e)||n?(g=null,"label"==e.target.tagName.toLowerCase()&&(g={x:e.x,y:e.y})):(e.preventDefault(),e.stopPropagation(),g=null)}function r(e,t){var o;for(var i in h)o=h[i],o instanceof n&&("start"===e&&o.cancel(),o[e](t,u))}function a(e){if(!u){var t=+Date.now();p&&!s(e,p)&&t-p.endTime<1500||(u=d(e),r("start",e))}}function m(e){u&&s(e,u)&&(l(e,u),r("move",e))}function f(e){u&&s(e,u)&&(l(e,u),u.endTime=+Date.now(),r("end",e),p=u,u=null)}document.contains||(document.contains=function(e){return document.body.contains(e)}),!b&&e.isHijackingClicks&&(document.addEventListener("click",i,!0),document.addEventListener("mouseup",o,!0),document.addEventListener("mousedown",o,!0),document.addEventListener("focus",o,!0),b=!0);var v="mousedown touchstart pointerdown",E="mousemove touchmove pointermove",$="mouseup mouseleave touchend touchcancel pointerup pointercancel";t.element(document).on(v,a).on(E,m).on($,f).on("$$mdGestureReset",function(){p=u=null})}function d(e){var t=m(e),n={startTime:+Date.now(),target:e.target,type:e.type.charAt(0)};return n.startX=n.x=t.pageX,n.startY=n.y=t.pageY,n}function s(e,t){return e&&t&&e.type.charAt(0)===t.type}function c(e){return g&&g.x==e.x&&g.y==e.y}function l(e,t){var n=m(e),o=t.x=n.pageX,i=t.y=n.pageY;t.distanceX=o-t.startX,t.distanceY=i-t.startY,t.distance=Math.sqrt(t.distanceX*t.distanceX+t.distanceY*t.distanceY),t.directionX=t.distanceX>0?"right":t.distanceX<0?"left":"",t.directionY=t.distanceY>0?"down":t.distanceY<0?"up":"",t.duration=+Date.now()-t.startTime,t.velocityX=t.distanceX/t.duration,t.velocityY=t.distanceY/t.duration}function m(e){return e=e.originalEvent||e,e.touches&&e.touches[0]||e.changedTouches&&e.changedTouches[0]||e}o.$inject=["$$MdGestureHandler","$$rAF","$timeout"],a.$inject=["$mdGesture","$$MdGestureHandler"];var u,p,h={},f=!1,g=null,b=!1;t.module("material.core.gestures",[]).provider("$mdGesture",n).factory("$$MdGestureHandler",r).run(a),n.prototype={skipClickHijack:function(){return f=!0},$get:["$$MdGestureHandler","$$rAF","$timeout",function(e,t,n){return new o(e,t,n)}]}}(),function(){function e(){function e(e){function n(e){return s.optionsFactory=e.options,s.methods=(e.methods||[]).concat(a),c}function o(e,t){return d[e]=t,c}function i(t,n){if(n=n||{},n.methods=n.methods||[],n.options=n.options||function(){return{}},/^cancel|hide|show$/.test(t))throw new Error("Preset '"+t+"' in "+e+" is reserved!");if(n.methods.indexOf("_options")>-1)throw new Error("Method '_options' in "+e+" is reserved!");return s.presets[t]={methods:n.methods.concat(a),
optionsFactory:n.options,argOption:n.argOption},c}function r(n,o){function i(e){return e=e||{},e._options&&(e=e._options),m.show(t.extend({},l,e))}function r(e){return m.destroy(e)}function a(t,n){var i={};return i[e]=u,o.invoke(t||function(){return n},{},i)}var c,l,m=n(),u={hide:m.hide,cancel:m.cancel,show:i,destroy:r};return c=s.methods||[],l=a(s.optionsFactory,{}),t.forEach(d,function(e,t){u[t]=e}),t.forEach(s.presets,function(e,n){function o(e){this._options=t.extend({},i,e)}var i=a(e.optionsFactory,{}),r=(e.methods||[]).concat(c);if(t.extend(i,{$type:n}),t.forEach(r,function(e){o.prototype[e]=function(t){return this._options[e]=t,this}}),e.argOption){var d="show"+n.charAt(0).toUpperCase()+n.slice(1);u[d]=function(e){var t=u[n](e);return u.show(t)}}u[n]=function(n){return arguments.length&&e.argOption&&!t.isObject(n)&&!t.isArray(n)?(new o)[e.argOption](n):new o(n)}}),u}r.$inject=["$$interimElement","$injector"];var a=["onHide","onShow","onRemove"],d={},s={presets:{}},c={setDefaults:n,addPreset:i,addMethod:o,$get:r};return c.addPreset("build",{methods:["controller","controllerAs","resolve","multiple","template","templateUrl","themable","transformTemplate","parent","contentElement"]}),c}function o(e,o,i,r,a,d,s,c,l,m,u){return function(){function p(e){e=e||{};var t=new v(e||{}),n=e.multiple?o.resolve():o.all(C);e.multiple||(n=n.then(function(){var e=y.concat(M.map(E.cancel));return o.all(e)}));var i=n.then(function(){return t.show()["catch"](function(e){return e})["finally"](function(){C.splice(C.indexOf(i),1),M.push(t)})});return C.push(i),t.deferred.promise["catch"](function(e){return e instanceof Error&&u(e),e}),t.deferred.promise}function h(e,t){function i(n){var o=n.remove(e,!1,t||{})["catch"](function(e){return e})["finally"](function(){y.splice(y.indexOf(o),1)});return M.splice(M.indexOf(n),1),y.push(o),n.deferred.promise}return t=t||{},t.closeAll?o.all(M.slice().reverse().map(i)):t.closeTo!==n?o.all(M.slice(t.closeTo).map(i)):i(M[M.length-1])}function f(e,n){var i=M.pop();if(!i)return o.when(e);var r=i.remove(e,!0,n||{})["catch"](function(e){return e})["finally"](function(){y.splice(y.indexOf(r),1)});return y.push(r),i.deferred.promise["catch"](t.noop)}function g(e){return function(){var t=arguments;return M.length?e.apply(E,t):C.length?C[0]["finally"](function(){return e.apply(E,t)}):o.when("No interim elements currently showing up.")}}function b(e){var n=e?null:M.shift(),i=t.element(e).length&&t.element(e)[0].parentNode;if(i){var r=M.filter(function(e){return e.options.element[0]===i});r.length&&(n=r[0],M.splice(M.indexOf(n),1))}return n?n.remove($,!1,{$destroy:!0}):o.when($)}function v(m){function u(){return o(function(e,t){function n(e){y.deferred.reject(e),t(e)}m.onCompiling&&m.onCompiling(m),f(m).then(function(t){M=g(t,m),m.cleanupElement=t.cleanup,T=$(M,m,t.controller).then(e,n)})["catch"](n)})}function p(e,n,i){function r(e){y.deferred.resolve(e)}function a(e){y.deferred.reject(e)}return M?(m=t.extend(m||{},i||{}),m.cancelAutoHide&&m.cancelAutoHide(),m.element.triggerHandler("$mdInterimElementRemove"),m.$destroy===!0?C(m.element,m).then(function(){n&&a(e)||r(e)}):(o.when(T)["finally"](function(){C(m.element,m).then(function(){n?a(e):r(e)},a)}),y.deferred.promise)):o.when(!1)}function h(e){return e=e||{},e.template&&(e.template=s.processTemplate(e.template)),t.extend({preserveScope:!1,cancelAutoHide:t.noop,scope:e.scope||i.$new(e.isolateScope),onShow:function(e,t,n){return d.enter(t,n.parent)},onRemove:function(e,t){return t&&d.leave(t)||o.when()}},e)}function f(e){var t=e.skipCompile?null:c.compile(e);return t||o(function(t){t({locals:{},link:function(){return e.element}})})}function g(e,n){t.extend(e.locals,n);var o=e.link(n.scope);return n.element=o,n.parent=b(o,n),n.themable&&l(o),o}function b(n,o){var i=o.parent;if(i=t.isFunction(i)?i(o.scope,n,o):t.isString(i)?t.element(e[0].querySelector(i)):t.element(i),!(i||{}).length){var r;return a[0]&&a[0].querySelector&&(r=a[0].querySelector(":not(svg) > body")),r||(r=a[0]),"#comment"==r.nodeName&&(r=e[0].body),t.element(r)}return i}function v(){var e,o=t.noop;m.hideDelay&&(e=r(E.hide,m.hideDelay),o=function(){r.cancel(e)}),m.cancelAutoHide=function(){o(),m.cancelAutoHide=n}}function $(e,n,i){var r=n.onShowing||t.noop,a=n.onComplete||t.noop;try{r(n.scope,e,n,i)}catch(d){return o.reject(d)}return o(function(t,r){try{o.when(n.onShow(n.scope,e,n,i)).then(function(){a(n.scope,e,n),v(),t(e)},r)}catch(d){r(d.message)}})}function C(e,n){var i=n.onRemoving||t.noop;return o(function(t,r){try{var a=o.when(n.onRemove(n.scope,e,n)||!0);i(e,a),n.$destroy?(t(e),!n.preserveScope&&n.scope&&a.then(function(){n.scope.$destroy()})):a.then(function(){!n.preserveScope&&n.scope&&n.scope.$destroy(),t(e)},r)}catch(d){r(d.message)}})}var y,M,T=o.when(!0);return m=h(m),y={options:m,deferred:o.defer(),show:u,remove:p}}var E,$=!1,C=[],y=[],M=[];return E={show:p,hide:g(h),cancel:g(f),destroy:b,$injector_:m}}}return o.$inject=["$document","$q","$rootScope","$timeout","$rootElement","$animate","$mdUtil","$mdCompiler","$mdTheming","$injector","$exceptionHandler"],e.$get=o,e}t.module("material.core").provider("$$interimElement",e)}(),function(){!function(){function e(e){function d(e){return e.replace(m,"").replace(u,function(e,t,n,o){return o?n.toUpperCase():n})}var m=/^((?:x|data)[\:\-_])/i,u=/([\:\-\_]+(.))/g,p=["","xs","gt-xs","sm","gt-sm","md","gt-md","lg","gt-lg","xl","print"],h=["layout","flex","flex-order","flex-offset","layout-align"],f=["show","hide","layout-padding","layout-margin"];t.forEach(p,function(n){t.forEach(h,function(t){var o=n?t+"-"+n:t;e.directive(d(o),r(o))}),t.forEach(f,function(t){var o=n?t+"-"+n:t;e.directive(d(o),a(o))})}),e.provider("$$mdLayout",function(){return{$get:t.noop,validateAttributeValue:l,validateAttributeUsage:c,disableLayouts:function(e){A.enabled=e!==!0}}}).directive("mdLayoutCss",o).directive("ngCloak",i("ng-cloak")).directive("layoutWrap",a("layout-wrap")).directive("layoutNowrap",a("layout-nowrap")).directive("layoutNoWrap",a("layout-no-wrap")).directive("layoutFill",a("layout-fill")).directive("layoutLtMd",s("layout-lt-md",!0)).directive("layoutLtLg",s("layout-lt-lg",!0)).directive("flexLtMd",s("flex-lt-md",!0)).directive("flexLtLg",s("flex-lt-lg",!0)).directive("layoutAlignLtMd",s("layout-align-lt-md")).directive("layoutAlignLtLg",s("layout-align-lt-lg")).directive("flexOrderLtMd",s("flex-order-lt-md")).directive("flexOrderLtLg",s("flex-order-lt-lg")).directive("offsetLtMd",s("flex-offset-lt-md")).directive("offsetLtLg",s("flex-offset-lt-lg")).directive("hideLtMd",s("hide-lt-md")).directive("hideLtLg",s("hide-lt-lg")).directive("showLtMd",s("show-lt-md")).directive("showLtLg",s("show-lt-lg")).config(n)}function n(){var e=!!document.querySelector("[md-layouts-disabled]");A.enabled=!e}function o(){return A.enabled=!1,{restrict:"A",priority:"900"}}function i(e){return["$timeout",function(n){return{restrict:"A",priority:-10,compile:function(o){return A.enabled?(o.addClass(e),function(t,o){n(function(){o.removeClass(e)},10,!1)}):t.noop}}}]}function r(e){function n(t,n,o){var i=d(n,e,o),r=o.$observe(o.$normalize(e),i);i(p(e,o,"")),t.$on("$destroy",function(){r()})}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(c(e,i,o,v),l(e,p(e,i,""),m(o,e,i)),r=n),r||t.noop}}}]}function a(e){function n(t,n){n.addClass(e)}return["$mdUtil","$interpolate","$log",function(o,i,r){return g=o,b=i,v=r,{restrict:"A",compile:function(o,i){var r;return A.enabled&&(l(e,p(e,i,""),m(o,e,i)),n(null,o),r=n),r||t.noop}}}]}function d(e,n){var o;return function(i){var r=l(n,i||"");t.isDefined(r)&&(o&&e.removeClass(o),o=r?n+"-"+r.trim().replace($,"-"):n,e.addClass(o))}}function s(e){var n=e.split("-");return["$log",function(o){return o.warn(e+"has been deprecated. Please use a `"+n[0]+"-gt-<xxx>` variant."),t.noop}]}function c(e,t,n,o){var i,r,a,d=n[0].nodeName.toLowerCase();switch(e.replace(E,"")){case"flex":"md-button"!=d&&"fieldset"!=d||(r="<"+d+" "+e+"></"+d+">",a="https://github.com/philipwalton/flexbugs#9-some-html-elements-cant-be-flex-containers",i="Markup '{0}' may not work as expected in IE Browsers. Consult '{1}' for details.",o.warn(g.supplant(i,[r,a])))}}function l(e,n,o){var i;if(!u(n)){switch(e.replace(E,"")){case"layout":h(n,y)||(n=y[0]);break;case"flex":h(n,C)||isNaN(n)&&(n="");break;case"flex-offset":case"flex-order":n&&!isNaN(+n)||(n="0");break;case"layout-align":var r=f(n);n=g.supplant("{main}-{cross}",r);break;case"layout-padding":case"layout-margin":case"layout-fill":case"layout-wrap":case"layout-nowrap":case"layout-nowrap":n=""}n!=i&&(o||t.noop)(n)}return n?n.trim():""}function m(e,t,n){return function(e){u(e)||(n[n.$normalize(t)]=e)}}function u(e){return(e||"").indexOf(b.startSymbol())>-1}function p(e,t,n){var o=t.$normalize(e);return t[o]?t[o].trim().replace($,"-"):n||null}function h(e,t,n){e=n&&e?e.replace($,n):e;var o=!1;return e&&t.forEach(function(t){t=n?t.replace($,n):t,o=o||t===e}),o}function f(e){var t,n={main:"start",cross:"stretch"};return e=e||"",0!==e.indexOf("-")&&0!==e.indexOf(" ")||(e="none"+e),t=e.toLowerCase().trim().replace($,"-").split("-"),t.length&&"space"===t[0]&&(t=[t[0]+"-"+t[1],t[2]]),t.length>0&&(n.main=t[0]||n.main),t.length>1&&(n.cross=t[1]||n.cross),M.indexOf(n.main)<0&&(n.main="start"),T.indexOf(n.cross)<0&&(n.cross="stretch"),n}var g,b,v,E=/(-gt)?-(sm|md|lg|print)/g,$=/\s+/g,C=["grow","initial","auto","none","noshrink","nogrow"],y=["row","column"],M=["","start","center","end","stretch","space-around","space-between"],T=["","start","center","end","stretch"],A={enabled:!0,breakpoints:[]};e(t.module("material.core.layout",["ng"]))}()}(),function(){function e(e){this._$timeout=e,this._liveElement=this._createLiveElement(),this._announceTimeout=100}e.$inject=["$timeout"],t.module("material.core").service("$mdLiveAnnouncer",e),e.prototype.announce=function(e,t){t||(t="polite");var n=this;n._liveElement.textContent="",n._liveElement.setAttribute("aria-live",t),n._$timeout(function(){n._liveElement.textContent=e},n._announceTimeout,!1)},e.prototype._createLiveElement=function(){var e=document.createElement("div");return e.classList.add("md-visually-hidden"),e.setAttribute("role","status"),e.setAttribute("aria-atomic","true"),e.setAttribute("aria-live","polite"),document.body.appendChild(e),e}}(),function(){t.module("material.core.meta",[]).provider("$$mdMeta",function(){function e(e){if(r[e])return!0;var n=document.getElementsByName(e)[0];return!!n&&(r[e]=t.element(n),!0)}function n(n,o){if(e(n),r[n])r[n].attr("content",o);else{var a=t.element('<meta name="'+n+'" content="'+o+'"/>');i.append(a),r[n]=a}return function(){r[n].attr("content",""),r[n].remove(),delete r[n]}}function o(t){if(!e(t))throw Error("$$mdMeta: could not find a meta tag with the name '"+t+"'");return r[t].attr("content")}var i=t.element(document.head),r={},a={setMeta:n,getMeta:o};return t.extend({},a,{$get:function(){return a}})})}(),function(){function e(e,o){function i(e){return e&&""!==e}var r,a=[],d={};return r={notFoundError:function(t,n){e.error((n||"")+"No instance found for handle",t)},getInstances:function(){return a},get:function(e){if(!i(e))return null;var t,n,o;for(t=0,n=a.length;t<n;t++)if(o=a[t],o.$$mdHandle===e)return o;return null},register:function(e,n){function o(){var t=a.indexOf(e);t!==-1&&a.splice(t,1)}function i(){var t=d[n];t&&(t.forEach(function(t){t.resolve(e)}),delete d[n])}return n?(e.$$mdHandle=n,a.push(e),i(),o):t.noop},when:function(e){if(i(e)){var t=o.defer(),a=r.get(e);return a?t.resolve(a):(d[e]===n&&(d[e]=[]),d[e].push(t)),t.promise}return o.reject("Invalid `md-component-id` value.")}}}e.$inject=["$log","$q"],t.module("material.core").factory("$mdComponentRegistry",e)}(),function(){!function(){function e(e){function n(e){return e.hasClass("md-icon-button")?{isMenuItem:e.hasClass("md-menu-item"),fitRipple:!0,center:!0}:{isMenuItem:e.hasClass("md-menu-item"),dimBackground:!0}}return{attach:function(o,i,r){return r=t.extend(n(i),r),e.attach(o,i,r)}}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdButtonInkRipple",e)}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!0,dimBackground:!1,fitRipple:!0},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdCheckboxInkRipple",e)}()}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdListInkRipple",e)}()}(),function(){function e(e,n){return{controller:t.noop,link:function(t,o,i){i.hasOwnProperty("mdInkRippleCheckbox")?n.attach(t,o):e.attach(t,o)}}}function n(){function e(){n=!0}var n=!1;return{disableInkRipple:e,$get:["$injector",function(e){function i(i,r,a){return n||r.controller("mdNoInk")?t.noop:e.instantiate(o,{$scope:i,$element:r,rippleOptions:a})}return{attach:i}}]}}function o(e,n,o,i,r,a,d){this.$window=i,this.$timeout=r,this.$mdUtil=a,this.$mdColorUtil=d,this.$scope=e,this.$element=n,this.options=o,this.mousedown=!1,this.ripples=[],this.timeout=null,this.lastRipple=null,a.valueOnUse(this,"container",this.createContainer),this.$element.addClass("md-ink-ripple"),(n.controller("mdInkRipple")||{}).createRipple=t.bind(this,this.createRipple),(n.controller("mdInkRipple")||{}).setColor=t.bind(this,this.color),this.bindEvents()}function i(e,n){(e.mousedown||e.lastRipple)&&(e.mousedown=!1,e.$mdUtil.nextTick(t.bind(e,n),!1))}function r(){return{controller:t.noop}}o.$inject=["$scope","$element","rippleOptions","$window","$timeout","$mdUtil","$mdColorUtil"],e.$inject=["$mdButtonInkRipple","$mdCheckboxInkRipple"],t.module("material.core").provider("$mdInkRipple",n).directive("mdInkRipple",e).directive("mdNoInk",r).directive("mdNoBar",r).directive("mdNoStretch",r);var a=450;o.prototype.color=function(e){function n(){var e=o.options&&o.options.colorElement?o.options.colorElement:[],t=e.length?e[0]:o.$element[0];return t?o.$window.getComputedStyle(t).color:"rgb(0,0,0)"}var o=this;return t.isDefined(e)&&(o._color=o._parseColor(e)),o._color||o._parseColor(o.inkRipple())||o._parseColor(n())},o.prototype.calculateColor=function(){return this.color()},o.prototype._parseColor=function(e,t){t=t||1;var n=this.$mdColorUtil;if(e)return 0===e.indexOf("rgba")?e.replace(/\d?\.?\d*\s*\)\s*$/,(.1*t).toString()+")"):0===e.indexOf("rgb")?n.rgbToRgba(e):0===e.indexOf("#")?n.hexToRgba(e):void 0},o.prototype.bindEvents=function(){this.$element.on("mousedown",t.bind(this,this.handleMousedown)),this.$element.on("mouseup touchend",t.bind(this,this.handleMouseup)),this.$element.on("mouseleave",t.bind(this,this.handleMouseup)),this.$element.on("touchmove",t.bind(this,this.handleTouchmove))},o.prototype.handleMousedown=function(e){if(!this.mousedown)if(e.hasOwnProperty("originalEvent")&&(e=e.originalEvent),this.mousedown=!0,this.options.center)this.createRipple(this.container.prop("clientWidth")/2,this.container.prop("clientWidth")/2);else if(e.srcElement!==this.$element[0]){var t=this.$element[0].getBoundingClientRect(),n=e.clientX-t.left,o=e.clientY-t.top;this.createRipple(n,o)}else this.createRipple(e.offsetX,e.offsetY)},o.prototype.handleMouseup=function(){i(this,this.clearRipples)},o.prototype.handleTouchmove=function(){i(this,this.deleteRipples)},o.prototype.deleteRipples=function(){for(var e=0;e<this.ripples.length;e++)this.ripples[e].remove()},o.prototype.clearRipples=function(){for(var e=0;e<this.ripples.length;e++)this.fadeInComplete(this.ripples[e])},o.prototype.createContainer=function(){var e=t.element('<div class="md-ripple-container"></div>');return this.$element.append(e),e},o.prototype.clearTimeout=function(){this.timeout&&(this.$timeout.cancel(this.timeout),this.timeout=null)},o.prototype.isRippleAllowed=function(){var e=this.$element[0];do{if(!e.tagName||"BODY"===e.tagName)break;if(e&&t.isFunction(e.hasAttribute)){if(e.hasAttribute("disabled"))return!1;if("false"===this.inkRipple()||"0"===this.inkRipple())return!1}}while(e=e.parentNode);return!0},o.prototype.inkRipple=function(){return this.$element.attr("md-ink-ripple")},o.prototype.createRipple=function(e,n){function o(e,t,n){return e?Math.max(t,n):Math.sqrt(Math.pow(t,2)+Math.pow(n,2))}if(this.isRippleAllowed()){var i=this,r=i.$mdColorUtil,d=t.element('<div class="md-ripple"></div>'),s=this.$element.prop("clientWidth"),c=this.$element.prop("clientHeight"),l=2*Math.max(Math.abs(s-e),e),m=2*Math.max(Math.abs(c-n),n),u=o(this.options.fitRipple,l,m),p=this.calculateColor();d.css({left:e+"px",top:n+"px",background:"black",width:u+"px",height:u+"px",backgroundColor:r.rgbaToRgb(p),borderColor:r.rgbaToRgb(p)}),this.lastRipple=d,this.clearTimeout(),this.timeout=this.$timeout(function(){i.clearTimeout(),i.mousedown||i.fadeInComplete(d)},.35*a,!1),this.options.dimBackground&&this.container.css({backgroundColor:p}),this.container.append(d),this.ripples.push(d),d.addClass("md-ripple-placed"),this.$mdUtil.nextTick(function(){d.addClass("md-ripple-scaled md-ripple-active"),i.$timeout(function(){i.clearRipples()},a,!1)},!1)}},o.prototype.fadeInComplete=function(e){this.lastRipple===e?this.timeout||this.mousedown||this.removeRipple(e):this.removeRipple(e)},o.prototype.removeRipple=function(e){var t=this,n=this.ripples.indexOf(e);n<0||(this.ripples.splice(this.ripples.indexOf(e),1),e.removeClass("md-ripple-active"),e.addClass("md-ripple-remove"),0===this.ripples.length&&this.container.css({backgroundColor:""}),this.$timeout(function(){t.fadeOutComplete(e)},a,!1))},o.prototype.fadeOutComplete=function(e){e.remove(),this.lastRipple=null}}(),function(){!function(){function e(e){function n(n,o,i){return e.attach(n,o,t.extend({center:!1,dimBackground:!0,outline:!1,rippleSize:"full"},i))}return{attach:n}}e.$inject=["$mdInkRipple"],t.module("material.core").factory("$mdTabInkRipple",e)}()}(),function(){t.module("material.core.theming.palette",[]).constant("$mdColorPalette",{red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100",contrastStrongLightColors:"400 500 600 700 A200 A400 A700"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",A100:"#ff80ab",A200:"#ff4081",A400:"#f50057",A700:"#c51162",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"500 600 A200 A400 A700"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400 A700"},"deep-purple":{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",A100:"#b388ff",A200:"#7c4dff",A400:"#651fff",A700:"#6200ea",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",A100:"#8c9eff",A200:"#536dfe",A400:"#3d5afe",A700:"#304ffe",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100",contrastStrongLightColors:"300 400 A200 A400"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100",contrastStrongLightColors:"500 600 700 A200 A400 A700"},"light-blue":{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A700",contrastStrongLightColors:"600 700 800 A700"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",A100:"#84ffff",A200:"#18ffff",A400:"#00e5ff",A700:"#00b8d4",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",A100:"#a7ffeb",A200:"#64ffda",A400:"#1de9b6",A700:"#00bfa5",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853",contrastDefaultColor:"dark",contrastLightColors:"500 600 700 800 900",contrastStrongLightColors:"500 600 700"},"light-green":{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17",contrastDefaultColor:"dark",contrastLightColors:"700 800 900",contrastStrongLightColors:"700 800 900"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",A100:"#f4ff81",A200:"#eeff41",A400:"#c6ff00",A700:"#aeea00",contrastDefaultColor:"dark",contrastLightColors:"900",contrastStrongLightColors:"900"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",A100:"#ffff8d",A200:"#ffff00",A400:"#ffea00",A700:"#ffd600",contrastDefaultColor:"dark"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00",contrastDefaultColor:"dark"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00",contrastDefaultColor:"dark",contrastLightColors:"800 900",contrastStrongLightColors:"800 900"},"deep-orange":{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",A100:"#ff9e80",A200:"#ff6e40",A400:"#ff3d00",A700:"#dd2c00",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 400 A100 A200",contrastStrongLightColors:"500 600 700 800 900 A400 A700"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",A100:"#d7ccc8",A200:"#bcaaa4",A400:"#8d6e63",A700:"#5d4037",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 A100 A200",contrastStrongLightColors:"300 400"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#ffffff",A200:"#000000",A400:"#303030",A700:"#616161",contrastDefaultColor:"dark",contrastLightColors:"600 700 800 900 A200 A400 A700"},"blue-grey":{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",A100:"#cfd8dc",A200:"#b0bec5",A400:"#78909c",A700:"#455a64",contrastDefaultColor:"light",contrastDarkColors:"50 100 200 300 A100 A200",contrastStrongLightColors:"400 500 700"}})}(),function(){!function(e){function t(e){var t=!!document.querySelector("[md-themes-disabled]");e.disableTheming(t)}function o(t,o){function i(e,t){return t=t||{},p[e]=a(e,t),h}function r(t,n){return a(t,e.extend({},p[t]||{},n))}function a(e,t){var n=w.filter(function(e){return!t[e]});if(n.length)throw new Error("Missing colors %1 in palette %2!".replace("%1",n.join(", ")).replace("%2",e));return t}function s(t,n){if(E[t])return E[t];n=n||"default";var o="string"==typeof n?E[n]:n,i=new l(t);return o&&e.forEach(o.colors,function(t,n){i.colors[n]={name:t.name,hues:e.extend({},t.hues)}}),E[t]=i,i}function l(t){function n(t){if(t=0===arguments.length||!!t,t!==o.isDark){o.isDark=t,o.foregroundPalette=o.isDark?g:f,o.foregroundShadow=o.isDark?b:v;var n=o.isDark?A:T,i=o.isDark?T:A;return e.forEach(n,function(e,t){var n=o.colors[t],r=i[t];if(n)for(var a in n.hues)n.hues[a]===r[a]&&(n.hues[a]=e[a])}),o}}var o=this;o.name=t,o.colors={},o.dark=n,n(!1),y.forEach(function(t){var n=(o.isDark?A:T)[t];o[t+"Palette"]=function(i,r){var a=o.colors[t]={name:i,hues:e.extend({},n,r)};return Object.keys(a.hues).forEach(function(e){if(!n[e])throw new Error("Invalid hue name '%1' in theme %2's %3 color %4. Available hue names: %4".replace("%1",e).replace("%2",o.name).replace("%3",i).replace("%4",Object.keys(n).join(", ")))}),Object.keys(a.hues).map(function(e){return a.hues[e]}).forEach(function(e){if(w.indexOf(e)==-1)throw new Error("Invalid hue value '%1' in theme %2's %3 color %4. Available hue values: %5".replace("%1",e).replace("%2",o.name).replace("%3",t).replace("%4",i).replace("%5",w.join(", ")))}),o},o[t+"Color"]=function(){var e=Array.prototype.slice.call(arguments);return console.warn("$mdThemingProviderTheme."+t+"Color() has been deprecated. Use $mdThemingProviderTheme."+t+"Palette() instead."),o[t+"Palette"].apply(o,e)}})}function m(t,o,i,r){function a(e){return e===n||""===e||l.THEMES[e]!==n}function d(e,t){function n(){return d&&d.$mdTheme||("default"==C?"":C)}function i(t){if(t){a(t)||r.warn("Attempted to use unregistered theme '"+t+"'. Register it with $mdThemingProvider.theme().");var n=e.data("$mdThemeName");n&&e.removeClass("md-"+n+"-theme"),e.addClass("md-"+t+"-theme"),e.data("$mdThemeName",t),d&&e.data("$mdThemeController",d)}}var d=t.controller("mdTheme")||e.data("$mdThemeController");if(i(n()),d)var s=$||d.$shouldWatch||o.parseAttributeBoolean(e.attr("md-theme-watch")),c=d.registerChanges(function(t){i(t),s?e.on("$destroy",c):c()})}var l=function(e,o){o===n&&(o=e,e=n),e===n&&(e=t),l.inherit(o,o)};return Object.defineProperty(l,"THEMES",{get:function(){return e.extend({},E)}}),Object.defineProperty(l,"PALETTES",{get:function(){return e.extend({},p)}}),Object.defineProperty(l,"ALWAYS_WATCH",{get:function(){return $}}),l.inherit=d,l.registered=a,l.defaultTheme=function(){return C},l.generateTheme=function(e){c(E[e],e,k.nonce)},l.defineTheme=function(e,t){t=t||{};var n=s(e);return t.primary&&n.primaryPalette(t.primary),t.accent&&n.accentPalette(t.accent),t.warn&&n.warnPalette(t.warn),t.background&&n.backgroundPalette(t.background),t.dark&&n.dark(),this.generateTheme(e),i.resolve(e)},l.setBrowserColor=_,l}m.$inject=["$rootScope","$mdUtil","$q","$log"],p={};var h,E={},$=!1,C="default";e.extend(p,t);var M=function(e){var t=o.setMeta("theme-color",e),n=o.setMeta("msapplication-navbutton-color",e);return function(){t(),n()}},_=function(t){t=e.isObject(t)?t:{};var n=t.theme||"default",o=t.hue||"800",i=p[t.palette]||p[E[n].colors[t.palette||"primary"].name],r=e.isObject(i[o])?i[o].hex:i[o];return M(r)};return h={definePalette:i,extendPalette:r,theme:s,configuration:function(){return e.extend({},k,{defaultTheme:C,alwaysWatchTheme:$,registeredStyles:[].concat(k.registeredStyles)})},disableTheming:function(t){k.disableTheming=e.isUndefined(t)||!!t},registerStyles:function(e){k.registeredStyles.push(e)},setNonce:function(e){k.nonce=e},generateThemesOnDemand:function(e){k.generateOnDemand=e},setDefaultTheme:function(e){C=e},alwaysWatchTheme:function(e){$=e},enableBrowserColor:_,$get:m,_LIGHT_DEFAULT_HUES:T,_DARK_DEFAULT_HUES:A,_PALETTES:p,_THEMES:E,_parseRules:d,_rgba:u}}function i(t,n,o,i,r,a){return{priority:101,link:{pre:function(d,s,c){var l=[],m=n.startSymbol(),u=n.endSymbol(),p=c.mdTheme.trim(),h=p.substr(0,m.length)===m&&p.lastIndexOf(u)===p.length-u.length,f="::",g=c.mdTheme.split(m).join("").split(u).join("").trim().substr(0,f.length)===f,b={registerChanges:function(t,n){return n&&(t=e.bind(n,t)),l.push(t),function(){var e=l.indexOf(t);e>-1&&l.splice(e,1)}},$setTheme:function(e){t.registered(e)||a.warn("attempted to use unregistered theme '"+e+"'"),b.$mdTheme=e;for(var n=l.length;n--;)l[n](e)},$shouldWatch:i.parseAttributeBoolean(s.attr("md-theme-watch"))||t.ALWAYS_WATCH||h&&!g};s.data("$mdThemeController",b);var v=function(){var e=n(c.mdTheme)(d);return o(e)(d)||e},E=function(t){return"string"==typeof t?b.$setTheme(t):void r.when(e.isFunction(t)?t():t).then(function(e){b.$setTheme(e)})};E(v());var $=d.$watch(v,function(e){e&&(E(e),b.$shouldWatch||$())})}}}}function r(){return k.disableTheming=!0,{restrict:"A",priority:"900"}}function a(e){return e}function d(t,n,o){l(t,n),o=o.replace(/THEME_NAME/g,t.name);var i=[],r=t.colors[n],a=new RegExp("\\.md-"+t.name+"-theme","g"),d=new RegExp("('|\")?{{\\s*("+n+")-(color|contrast)-?(\\d\\.?\\d*)?\\s*}}(\"|')?","g"),s=/'?"?\{\{\s*([a-zA-Z]+)-(A?\d+|hue\-[0-3]|shadow|default)-?(\d\.?\d*)?(contrast)?\s*\}\}'?"?/g,c=p[r.name];return o=o.replace(s,function(e,n,o,i,r){return"foreground"===n?"shadow"==o?t.foregroundShadow:t.foregroundPalette[o]||t.foregroundPalette[1]:(0!==o.indexOf("hue")&&"default"!==o||(o=t.colors[n].hues[o]),u((p[t.colors[n].name][o]||"")[r?"contrast":"value"],i))}),e.forEach(r.hues,function(e,n){var r=o.replace(d,function(t,n,o,i,r){return u(c[e]["color"===i?"value":"contrast"],r)});if("default"!==n&&(r=r.replace(a,".md-"+t.name+"-theme.md-"+n)),"default"==t.name){var s=/((?:\s|>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)\.md-default-theme((?:\s|>|\.|\w|-|:|\(|\)|\[|\]|"|'|=)*)/g;r=r.replace(s,function(e,t,n){return e+", "+t+n})}i.push(r)}),i}function s(t,n){function o(t,n){var o=t.contrastDefaultColor,i=t.contrastLightColors||[],r=t.contrastStrongLightColors||[],a=t.contrastDarkColors||[];"string"==typeof i&&(i=i.split(" ")),"string"==typeof r&&(r=r.split(" ")),"string"==typeof a&&(a=a.split(" ")),delete t.contrastDefaultColor,delete t.contrastLightColors,delete t.contrastStrongLightColors,delete t.contrastDarkColors,e.forEach(t,function(n,d){function s(){return"light"===o?a.indexOf(d)>-1?E:r.indexOf(d)>-1?C:$:i.indexOf(d)>-1?r.indexOf(d)>-1?C:$:E}if(!e.isObject(n)){var c=m(n);if(!c)throw new Error("Color %1, in palette %2's hue %3, is invalid. Hex or rgb(a) color expected.".replace("%1",n).replace("%2",t.name).replace("%3",d));t[d]={hex:t[d],value:c,contrast:s()}}})}var i=document.head,r=i?i.firstElementChild:null,a=!k.disableTheming&&t.has("$MD_THEME_CSS")?t.get("$MD_THEME_CSS"):"";if(a+=k.registeredStyles.join(""),r&&0!==a.length){e.forEach(p,o);var d=a.split(/\}(?!(\}|'|"|;))/).filter(function(e){return e&&e.trim().length}).map(function(e){return e.trim()+"}"}),s=new RegExp("md-("+y.join("|")+")","g");y.forEach(function(e){_[e]=""}),d.forEach(function(e){for(var t,n=(e.match(s),0);t=y[n];n++)if(e.indexOf(".md-"+t)>-1)return _[t]+=e;for(n=0;t=y[n];n++)if(e.indexOf(t)>-1)return _[t]+=e;return _[M]+=e}),k.generateOnDemand||e.forEach(n.THEMES,function(e){h[e.name]||"default"!==n.defaultTheme()&&"default"===e.name||c(e,e.name,k.nonce)})}}function c(e,t,n){var o=document.head,i=o?o.firstElementChild:null;h[t]||(y.forEach(function(t){for(var r=d(e,t,_[t]);r.length;){var a=r.shift();if(a){var s=document.createElement("style");s.setAttribute("md-theme-style",""),n&&s.setAttribute("nonce",n),s.appendChild(document.createTextNode(a)),o.insertBefore(s,i)}}}),h[e.name]=!0)}function l(e,t){if(!p[(e.colors[t]||{}).name])throw new Error("You supplied an invalid color palette for theme %1's %2 palette. Available palettes: %3".replace("%1",e.name).replace("%2",t).replace("%3",Object.keys(p).join(", ")))}function m(t){
if(e.isArray(t)&&3==t.length)return t;if(/^rgb/.test(t))return t.replace(/(^\s*rgba?\(|\)\s*$)/g,"").split(",").map(function(e,t){return 3==t?parseFloat(e,10):parseInt(e,10)});if("#"==t.charAt(0)&&(t=t.substring(1)),/^([a-fA-F0-9]{3}){1,2}$/g.test(t)){var n=t.length/3,o=t.substr(0,n),i=t.substr(n,n),r=t.substr(2*n);return 1===n&&(o+=o,i+=i,r+=r),[parseInt(o,16),parseInt(i,16),parseInt(r,16)]}}function u(t,n){return t?(4==t.length&&(t=e.copy(t),n?t.pop():n=t.pop()),n&&("number"==typeof n||"string"==typeof n&&n.length)?"rgba("+t.join(",")+","+n+")":"rgb("+t.join(",")+")"):"rgb('0,0,0')"}t.$inject=["$mdThemingProvider"],i.$inject=["$mdTheming","$interpolate","$parse","$mdUtil","$q","$log"],a.$inject=["$mdTheming"],o.$inject=["$mdColorPalette","$$mdMetaProvider"],s.$inject=["$injector","$mdTheming"],e.module("material.core.theming",["material.core.theming.palette","material.core.meta"]).directive("mdTheme",i).directive("mdThemable",a).directive("mdThemesDisabled",r).provider("$mdTheming",o).config(t).run(s);var p,h={},f={name:"dark",1:"rgba(0,0,0,0.87)",2:"rgba(0,0,0,0.54)",3:"rgba(0,0,0,0.38)",4:"rgba(0,0,0,0.12)"},g={name:"light",1:"rgba(255,255,255,1.0)",2:"rgba(255,255,255,0.7)",3:"rgba(255,255,255,0.5)",4:"rgba(255,255,255,0.12)"},b="1px 1px 0px rgba(0,0,0,0.4), -1px -1px 0px rgba(0,0,0,0.4)",v="",E=m("rgba(0,0,0,0.87)"),$=m("rgba(255,255,255,0.87)"),C=m("rgb(255,255,255)"),y=["primary","accent","warn","background"],M="primary",T={accent:{"default":"A200","hue-1":"A100","hue-2":"A400","hue-3":"A700"},background:{"default":"50","hue-1":"A100","hue-2":"100","hue-3":"300"}},A={background:{"default":"A400","hue-1":"800","hue-2":"900","hue-3":"A200"}};y.forEach(function(e){var t={"default":"500","hue-1":"300","hue-2":"800","hue-3":"A100"};T[e]||(T[e]=t),A[e]||(A[e]=t)});var w=["50","100","200","300","400","500","600","700","800","900","A100","A200","A400","A700"],k={disableTheming:!1,generateOnDemand:!1,registeredStyles:[],nonce:null},_={}}(e.angular)}(),function(){function n(n,o,i,r,a){var d;return d={translate3d:function(e,t,n,o){function i(n){return a(e,{to:n||t,addClass:o.transitionOutClass,removeClass:o.transitionInClass,duration:o.duration}).start()}return a(e,{from:t,to:n,addClass:o.transitionInClass,removeClass:o.transitionOutClass,duration:o.duration}).start().then(function(){return i})},waitTransitionEnd:function(t,n){var a=3e3;return o(function(o,d){function s(e){e&&e.target!==t[0]||(e&&i.cancel(l),t.off(r.CSS.TRANSITIONEND,s),o())}function c(n){return n=n||e.getComputedStyle(t[0]),"0s"==n.transitionDuration||!n.transition&&!n.transitionProperty}n=n||{},c(n.cachedTransitionStyles)&&(a=0);var l=i(s,n.timeout||a);t.on(r.CSS.TRANSITIONEND,s)})},calculateTransformValues:function(e,t){function n(){var t=e?e.parent():null,n=t?t.parent():null;return n?d.clientRect(n):null}var o=t.element,i=t.bounds;if(o||i){var r=o?d.clientRect(o)||n():d.copyRect(i),a=d.copyRect(e[0].getBoundingClientRect()),s=d.centerPointFor(a),c=d.centerPointFor(r);return{centerX:c.x-s.x,centerY:c.y-s.y,scaleX:Math.round(100*Math.min(.5,r.width/a.width))/100,scaleY:Math.round(100*Math.min(.5,r.height/a.height))/100}}return{centerX:0,centerY:0,scaleX:.5,scaleY:.5}},calculateZoomToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 ) scale( {scaleX}, {scaleY} )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},calculateSlideToOrigin:function(e,o){var i="translate3d( {centerX}px, {centerY}px, 0 )",r=t.bind(null,n.supplant,i);return r(d.calculateTransformValues(e,o))},toCss:function(e){function n(e,n,i){t.forEach(n.split(" "),function(e){o[e]=i})}var o={},i="left top right bottom width height x y min-width min-height max-width max-height";return t.forEach(e,function(e,a){if(!t.isUndefined(e))if(i.indexOf(a)>=0)o[a]=e+"px";else switch(a){case"transition":n(a,r.CSS.TRANSITION,e);break;case"transform":n(a,r.CSS.TRANSFORM,e);break;case"transformOrigin":n(a,r.CSS.TRANSFORM_ORIGIN,e);break;case"font-size":o["font-size"]=e}}),o},toTransformCss:function(e,n,o){var i={};return t.forEach(r.CSS.TRANSFORM.split(" "),function(t){i[t]=e}),n&&(o=o||"all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important",i.transition=o),i},copyRect:function(e,n){return e?(n=n||{},t.forEach("left top right bottom width height".split(" "),function(t){n[t]=Math.round(e[t])}),n.width=n.width||n.right-n.left,n.height=n.height||n.bottom-n.top,n):null},clientRect:function(e){var n=t.element(e)[0].getBoundingClientRect(),o=function(e){return e&&e.width>0&&e.height>0};return o(n)?d.copyRect(n):null},centerPointFor:function(e){return e?{x:Math.round(e.left+e.width/2),y:Math.round(e.top+e.height/2)}:{x:0,y:0}}}}t.module("material.core").factory("$$mdAnimate",["$q","$timeout","$mdConstant","$animateCss",function(e,t,o,i){return function(r){return n(r,e,t,o,i)}}])}(),function(){t.version.minor>=4?t.module("material.core.animate",[]):!function(){function e(e){return e.replace(/-[a-z]/g,function(e){return e.charAt(1).toUpperCase()})}var n=t.forEach,o=t.isDefined(document.documentElement.style.WebkitAppearance),i=o?"-webkit-":"",r=(o?"webkitTransitionEnd ":"")+"transitionend",a=(o?"webkitAnimationEnd ":"")+"animationend",d=["$document",function(e){return function(){return e[0].body.clientWidth+1}}],s=["$$rAF",function(e){return function(){var t=!1;return e(function(){t=!0}),function(n){t?n():e(n)}}}],c=["$q","$$rAFMutex",function(e,o){function i(e){this.setHost(e),this._doneCallbacks=[],this._runInAnimationFrame=o(),this._state=0}var r=0,a=1,d=2;return i.prototype={setHost:function(e){this.host=e||{}},done:function(e){this._state===d?e():this._doneCallbacks.push(e)},progress:t.noop,getPromise:function(){if(!this.promise){var t=this;this.promise=e(function(e,n){t.done(function(t){t===!1?n():e()})})}return this.promise},then:function(e,t){return this.getPromise().then(e,t)},"catch":function(e){return this.getPromise()["catch"](e)},"finally":function(e){return this.getPromise()["finally"](e)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end(),this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel(),this._resolve(!1)},complete:function(e){var t=this;t._state===r&&(t._state=a,t._runInAnimationFrame(function(){t._resolve(e)}))},_resolve:function(e){this._state!==d&&(n(this._doneCallbacks,function(t){t(e)}),this._doneCallbacks.length=0,this._state=d)}},i.all=function(e,t){function o(n){r=r&&n,++i===e.length&&t(r)}var i=0,r=!0;n(e,function(e){e.done(o)})},i}];t.module("material.core.animate",[]).factory("$$forceReflow",d).factory("$$AnimateRunner",c).factory("$$rAFMutex",s).factory("$animateCss",["$window","$$rAF","$$AnimateRunner","$$forceReflow","$$jqLite","$timeout","$animate",function(t,d,s,c,l,m,u){function p(o,d){var c=[],l=C(o),p=l&&u.enabled(),g=!1,M=!1;p&&(d.transitionStyle&&c.push([i+"transition",d.transitionStyle]),d.keyframeStyle&&c.push([i+"animation",d.keyframeStyle]),d.delay&&c.push([i+"transition-delay",d.delay+"s"]),d.duration&&c.push([i+"transition-duration",d.duration+"s"]),g=d.keyframeStyle||d.to&&(d.duration>0||d.transitionStyle),M=!!d.addClass||!!d.removeClass,y(o,!0));var T=p&&(g||M);E(o,d);var A,w,k=!1;return{close:t.close,start:function(){function t(){if(!k)return k=!0,A&&w&&o.off(A,w),h(o,d),v(o,d),n(c,function(t){l.style[e(t[0])]=""}),u.complete(!0),u}var u=new s;return b(function(){if(y(o,!1),!T)return t();n(c,function(t){var n=t[0],o=t[1];l.style[e(n)]=o}),h(o,d);var s=f(o);if(0===s.duration)return t();var u=[];d.easing&&(s.transitionDuration&&u.push([i+"transition-timing-function",d.easing]),s.animationDuration&&u.push([i+"animation-timing-function",d.easing])),d.delay&&s.animationDelay&&u.push([i+"animation-delay",d.delay+"s"]),d.duration&&s.animationDuration&&u.push([i+"animation-duration",d.duration+"s"]),n(u,function(t){var n=t[0],o=t[1];l.style[e(n)]=o,c.push(t)});var p=s.delay,g=1e3*p,b=s.duration,v=1e3*b,E=Date.now();A=[],s.transitionDuration&&A.push(r),s.animationDuration&&A.push(a),A=A.join(" "),w=function(e){e.stopPropagation();var n=e.originalEvent||e,o=n.timeStamp||Date.now(),i=parseFloat(n.elapsedTime.toFixed(3));Math.max(o-E,0)>=g&&i>=b&&t()},o.on(A,w),$(o,d),m(t,g+1.5*v,!1)}),u}}}function h(e,t){t.addClass&&(l.addClass(e,t.addClass),t.addClass=null),t.removeClass&&(l.removeClass(e,t.removeClass),t.removeClass=null)}function f(e){function n(e){return o?"Webkit"+e.charAt(0).toUpperCase()+e.substr(1):e}var i=C(e),r=t.getComputedStyle(i),a=g(r[n("transitionDuration")]),d=g(r[n("animationDuration")]),s=g(r[n("transitionDelay")]),c=g(r[n("animationDelay")]);d*=parseInt(r[n("animationIterationCount")],10)||1;var l=Math.max(d,a),m=Math.max(c,s);return{duration:l,delay:m,animationDuration:d,transitionDuration:a,animationDelay:c,transitionDelay:s}}function g(e){var t=0,o=(e||"").split(/\s*,\s*/);return n(o,function(e){"s"==e.charAt(e.length-1)&&(e=e.substring(0,e.length-1)),e=parseFloat(e)||0,t=t?Math.max(e,t):e}),t}function b(e){M&&M(),T.push(e),M=d(function(){M=null;for(var e=c(),t=0;t<T.length;t++)T[t](e);T.length=0})}function v(e,t){E(e,t),$(e,t)}function E(e,t){t.from&&(e.css(t.from),t.from=null)}function $(e,t){t.to&&(e.css(t.to),t.to=null)}function C(e){for(var t=0;t<e.length;t++)if(1===e[t].nodeType)return e[t]}function y(t,n){var o=C(t),r=e(i+"transition-delay");o.style[r]=n?"-9999s":""}var M,T=[];return p}])}()}(),function(){t.module("material.components.autocomplete",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){t.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$mdUtil","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,n,o,i,r,a,d,s){function c(c,m,u){function p(){var e=parseInt(h.height,10)+Math.abs(parseInt(h.top,10));m.css("height",e+"px")}o.pin&&o.pin(m,i);var h;d(function(){if(h=r.getComputedStyle(s[0].body),"fixed"===h.position){var o=n.debounce(function(){h=r.getComputedStyle(s[0].body),p()},60,null,!1);p(),t.element(r).on("resize",o),c.$on("$destroy",function(){t.element(r).off("resize",o)})}var i=m.parent();if(i.length){"BODY"===i[0].nodeName&&m.css("position","fixed");var d=r.getComputedStyle(i[0]);"static"===d.position&&a.warn(l),e.inherit(m,i)}})}var l="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:c}}])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e,n,r,a,d,s,c,l){function m(o,i,c,m){if(i=r.extractElementByName(i,"md-bottom-sheet"),i.attr("tabindex","-1"),i.hasClass("ng-cloak")){var u="$mdBottomSheet: using `<md-bottom-sheet ng-cloak >` will affect the bottom-sheet opening animations.";l.warn(u,i[0])}c.disableBackdrop||(h=r.createBackdrop(o,"md-bottom-sheet-backdrop md-opaque"),h[0].tabIndex=-1,c.clickOutsideToClose&&h.on("click",function(){r.nextTick(d.cancel,!0)}),a.inherit(h,c.parent),e.enter(h,c.parent,null));var f=new p(i,c.parent);return c.bottomSheet=f,a.inherit(f.element,c.parent),c.disableParentScroll&&(c.restoreScroll=r.disableScrollAround(f.element,c.parent)),e.enter(f.element,c.parent,h).then(function(){var e=r.findFocusTarget(i)||t.element(i[0].querySelector("button")||i[0].querySelector("a")||i[0].querySelector(r.prefixer("ng-click",!0)))||h;c.escapeToClose&&(c.rootElementKeyupCallback=function(e){e.keyCode===n.KEY_CODE.ESCAPE&&r.nextTick(d.cancel,!0)},s.on("keyup",c.rootElementKeyupCallback),e&&e.focus())})}function u(t,n,o){var i=o.bottomSheet;return o.disableBackdrop||e.leave(h),e.leave(i.element).then(function(){o.disableParentScroll&&(o.restoreScroll(),delete o.restoreScroll),i.cleanup()})}function p(e,t){function a(t){e.css(n.CSS.TRANSITION_DURATION,"0ms")}function s(t){var o=t.pointer.distanceY;o<5&&(o=Math.max(-i,o/2)),e.css(n.CSS.TRANSFORM,"translate3d(0,"+(i+o)+"px,0)")}function l(t){if(t.pointer.distanceY>0&&(t.pointer.distanceY>20||Math.abs(t.pointer.velocityY)>o)){var i=e.prop("offsetHeight")-t.pointer.distanceY,a=Math.min(i/t.pointer.velocityY*.75,500);e.css(n.CSS.TRANSITION_DURATION,a+"ms"),r.nextTick(d.cancel,!0)}else e.css(n.CSS.TRANSITION_DURATION,""),e.css(n.CSS.TRANSFORM,"")}var m=c.register(t,"drag",{horizontal:!1});return t.on("$md.dragstart",a).on("$md.drag",s).on("$md.dragend",l),{element:e,cleanup:function(){m(),t.off("$md.dragstart",a),t.off("$md.drag",s),t.off("$md.dragend",l)}}}var h;return{themable:!0,onShow:m,onRemove:u,disableBackdrop:!1,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}n.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture","$log"];var o=.5,i=80;return e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:n})}e.$inject=["$mdBottomSheet"],n.$inject=["$$interimElementProvider"],t.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",e).provider("$mdBottomSheet",n)}(),function(){function e(e){return{restrict:"E",link:function(t,n){e(n)}}}function n(e,n,o,i){function r(e){return t.isDefined(e.href)||t.isDefined(e.ngHref)||t.isDefined(e.ngLink)||t.isDefined(e.uiSref)}function a(e,t){if(r(t))return'<a class="md-button" ng-transclude></a>';var n="undefined"==typeof t.type?"button":t.type;return'<button class="md-button" type="'+n+'" ng-transclude></button>'}function d(a,d,s){n(d),e.attach(a,d),o.expectWithoutText(d,"aria-label"),r(s)&&t.isDefined(s.ngDisabled)&&a.$watch(s.ngDisabled,function(e){d.attr("tabindex",e?-1:0)}),d.on("click",function(e){s.disabled===!0&&(e.preventDefault(),e.stopImmediatePropagation())}),d.hasClass("md-no-focus")||(d.on("focus",function(){i.isUserInvoked()&&"keyboard"!==i.getLastInteractionType()||d.addClass("md-focused")}),d.on("blur",function(){d.removeClass("md-focused")}))}return{restrict:"EA",replace:!0,transclude:!0,template:a,link:d}}n.$inject=["$mdButtonInkRipple","$mdTheming","$mdAria","$mdInteraction"],e.$inject=["$mdTheming"],t.module("material.components.button",["material.core"]).directive("mdButton",n).directive("a",e)}(),function(){function e(e){return{restrict:"E",link:function(t,n,o){n.addClass("_md"),e(n)}}}e.$inject=["$mdTheming"],t.module("material.components.card",["material.core"]).directive("mdCard",e)}(),function(){function e(e,n,o,i,r,a){function d(d,s){function c(d,s,c,l){function m(e,t,n){c[e]&&d.$watch(c[e],function(e){n[e]&&s.attr(t,n[e])})}function u(e){var t=e.which||e.keyCode;t!==o.KEY_CODE.SPACE&&t!==o.KEY_CODE.ENTER||(e.preventDefault(),s.addClass("md-focused"),p(e))}function p(e){s[0].hasAttribute("disabled")||d.skipToggle||d.$apply(function(){var t=c.ngChecked&&c.ngClick?c.checked:!v.$viewValue;v.$setViewValue(t,e&&e.type),v.$render()})}function h(){s.toggleClass("md-checked",!!v.$viewValue&&!g)}function f(e){g=e!==!1,g&&s.attr("aria-checked","mixed"),s.toggleClass("md-indeterminate",g)}var g,b=l[0],v=l[1]||r.fakeNgModel(),E=l[2];if(b){var $=b.isErrorGetter||function(){return v.$invalid&&(v.$touched||E&&E.$submitted)};b.input=s,d.$watch($,b.setInvalid)}i(s),s.children().on("focus",function(){s.focus()}),r.parseAttributeBoolean(c.mdIndeterminate)&&(f(),d.$watch(c.mdIndeterminate,f)),c.ngChecked&&d.$watch(d.$eval.bind(d,c.ngChecked),function(e){v.$setViewValue(e),v.$render()}),m("ngDisabled","tabindex",{"true":"-1","false":c.tabindex}),n.expectWithText(s,"aria-label"),e.link.pre(d,{on:t.noop,0:{}},c,[v]),s.on("click",p).on("keypress",u).on("focus",function(){"keyboard"===a.getLastInteractionType()&&s.addClass("md-focused")}).on("blur",function(){s.removeClass("md-focused")}),v.$render=h}return s.$set("tabindex",s.tabindex||"0"),s.$set("type","checkbox"),s.$set("role",s.type),{pre:function(e,t){t.on("click",function(e){this.hasAttribute("disabled")&&e.stopImmediatePropagation()})},post:c}}return e=e[0],{restrict:"E",transclude:!0,require:["^?mdInputContainer","?ngModel","?^form"],priority:o.BEFORE_NG_ARIA,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-icon"></div></div><div ng-transclude class="md-label"></div>',compile:d}}e.$inject=["inputDirective","$mdAria","$mdConstant","$mdTheming","$mdUtil","$mdInteraction"],t.module("material.components.checkbox",["material.core"]).directive("mdCheckbox",e)}(),function(){t.module("material.components.chips",["material.core","material.components.autocomplete"])}(),function(){!function(){function e(e,n,o){function r(e,t){try{t&&e.css(s(t))}catch(n){o.error(n.message)}}function a(e){var t=l(e);return d(t)}function d(t,o){o=o||!1;var i=e.PALETTES[t.palette][t.hue];return i=o?i.contrast:i.value,n.supplant("rgba({0}, {1}, {2}, {3})",[i[0],i[1],i[2],i[3]||t.opacity])}function s(e){var n={},o=e.hasOwnProperty("color");return t.forEach(e,function(e,t){var i=l(e),r=t.indexOf("background")>-1;n[t]=d(i),r&&!o&&(n.color=d(i,!0))}),n}function c(n){return t.isDefined(e.THEMES[n.split("-")[0]])}function l(n){var o=n.split("-"),i=t.isDefined(e.THEMES[o[0]]),r=i?o.splice(0,1)[0]:e.defaultTheme();return{theme:r,palette:m(o,r),hue:u(o,r),opacity:o[2]||1}}function m(t,o){var r=t.length>1&&i.indexOf(t[1])!==-1,a=t[0].replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();if(r&&(a=t[0]+"-"+t.splice(1,1)),i.indexOf(a)===-1){var d=e.THEMES[o].colors[a];if(!d)throw new Error(n.supplant("mdColors: couldn't find '{palette}' in the palettes.",{palette:a}));a=d.name}return a}function u(t,o){var i=e.THEMES[o].colors;if("hue"===t[1]){var r=parseInt(t.splice(2,1)[0],10);if(r<1||r>3)throw new Error(n.supplant("mdColors: 'hue-{hueNumber}' is not a valid hue, can be only 'hue-1', 'hue-2' and 'hue-3'",{hueNumber:r}));if(t[1]="hue-"+r,!(t[0]in i))throw new Error(n.supplant("mdColors: 'hue-x' can only be used with [{availableThemes}], but was used with '{usedTheme}'",{availableThemes:Object.keys(i).join(", "),usedTheme:t[0]}));return i[t[0]].hues[t[1]]}return t[1]||i[t[0]in i?t[0]:"primary"].hues["default"]}return i=i||Object.keys(e.PALETTES),{applyThemeColors:r,getThemeColor:a,hasTheme:c}}function n(e,n,i,r){return{restrict:"A",require:["^?mdTheme"],compile:function(a,d){function s(){var e=d.mdColors,i=e.indexOf("::")>-1,r=!!i||o.test(d.mdColors);d.mdColors=e.replace("::","");var a=t.isDefined(d.mdColorsWatch);return!i&&!r&&(!a||n.parseAttributeBoolean(d.mdColorsWatch))}var c=s();return function(n,o,a,d){var s=d[0],l={},m=function(t){"string"!=typeof t&&(t=""),a.mdColors||(a.mdColors="{}");var o=r(a.mdColors)(n);return s&&Object.keys(o).forEach(function(n){var i=o[n];e.hasTheme(i)||(o[n]=(t||s.$mdTheme)+"-"+i)}),u(o),o},u=function(e){if(!t.equals(e,l)){var n=Object.keys(l);l.background&&!n.color&&n.push("color"),n.forEach(function(e){o.css(e,"")})}l=e},p=t.noop;s&&(p=s.registerChanges(function(t){e.applyThemeColors(o,m(t))})),n.$on("$destroy",function(){p()});try{c?n.$watch(m,t.bind(this,e.applyThemeColors,o),!0):e.applyThemeColors(o,m())}catch(h){i.error(h.message)}}}}}n.$inject=["$mdColors","$mdUtil","$log","$parse"],e.$inject=["$mdTheming","$mdUtil","$log"];var o=/^{((\s|,)*?["'a-zA-Z-]+?\s*?:\s*?('|")[a-zA-Z0-9-.]*('|"))+\s*}$/,i=null;t.module("material.components.colors",["material.core"]).directive("mdColors",n).service("$mdColors",e)}()}(),function(){function e(e){function t(e,t){this.$scope=e,this.$element=t}return{restrict:"E",controller:["$scope","$element",t],link:function(t,o){o.addClass("_md"),e(o),t.$broadcast("$mdContentLoaded",o),n(o[0])}}}function n(e){t.element(e).on("$md.pressdown",function(t){"t"===t.pointer.type&&(t.$materialScrollFixed||(t.$materialScrollFixed=!0,0===e.scrollTop?e.scrollTop=1:e.scrollHeight===e.scrollTop+e.offsetHeight&&(e.scrollTop-=1)))})}e.$inject=["$mdTheming"],t.module("material.components.content",["material.core"]).directive("mdContent",e)}(),function(){t.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"])}(),function(){function e(e,n,o){return{restrict:"E",link:function(i,r){r.addClass("_md"),n(r),e(function(){function e(){r.toggleClass("md-content-overflow",a.scrollHeight>a.clientHeight)}var n,a=r[0].querySelector("md-dialog-content");a&&(n=a.getElementsByTagName("img"),e(),t.element(n).on("load",e)),i.$on("$destroy",function(){o.destroy(r)})})}}}function o(e){function o(e,t){return{template:['<md-dialog md-theme="{{ dialog.theme || dialog.defaultTheme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>",'    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">','      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result"              placeholder="{{::dialog.placeholder}}">',"    </md-input-container>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary md-cancel-button">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary md-confirm-button" md-autofocus="dialog.$type===\'alert\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function(){var n="prompt"==this.$type;n&&this.initialValue&&(this.result=this.initialValue),this.hide=function(){e.hide(!n||this.result)},this.abort=function(){e.cancel()},this.keypress=function(n){n.keyCode===t.KEY_CODE.ENTER&&e.hide(this.result)}},controllerAs:"dialog",bindToController:!0}}function i(e,o,i,d,s,c,l,m,u,p,h,f,g){function b(e){e.defaultTheme=h.defaultTheme(),C(e)}function v(e,t,n,o){if(o){var i=o.htmlContent||n.htmlContent||"",r=o.textContent||n.textContent||o.content||n.content||"";if(i&&!p.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(i&&r)throw Error("md-dialog cannot have both `htmlContent` and `textContent`");o.mdHtmlContent=i,o.mdTextContent=r}}function E(e,n,o,r){function a(){n[0].querySelector(".md-actions")&&u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.")}function d(){function e(){return n[0].querySelector(".dialog-close, md-dialog-actions button:last-child")}if(o.focusOnOpen){var t=i.findFocusTarget(n)||e()||s;t.focus()}}t.element(c[0].body).addClass("md-dialog-is-showing");var s=n.find("md-dialog");if(s.hasClass("ng-cloak")){var l="$mdDialog: using `<md-dialog ng-cloak>` will affect the dialog opening animations.";u.warn(l,n[0])}return y(o),A(s,o),T(e,n,o),M(n,o),_(n,o).then(function(){w(n,o),a(),d()})}function $(e,n,o){function i(){return x(n,o)}function d(){t.element(c[0].body).removeClass("md-dialog-is-showing"),o.contentElement&&o.reverseContainerStretch(),o.cleanupElement(),o.$destroy||"keyboard"!==o.originInteraction||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),r&&r.parentNode&&r.parentNode.removeChild(r),a&&a.parentNode&&a.parentNode.removeChild(a),o.$destroy?d():i().then(d)}function C(e){var n;e.targetEvent&&e.targetEvent.target&&(n=t.element(e.targetEvent.target));var o=n&&n.controller("mdTheme");if(o){e.themeWatch=o.$shouldWatch;var i=e.theme||o.$mdTheme;i&&(e.scope.theme=i);var r=o.registerChanges(function(t){e.scope.theme=t,e.themeWatch||r()})}}function y(e){function o(e,o){var i=t.element(e||{});if(i&&i.length){var r={top:0,left:0,height:0,width:0},a=t.isFunction(i[0].getBoundingClientRect);return t.extend(o||{},{element:a?i:n,bounds:a?i[0].getBoundingClientRect():t.extend({},r,i[0]),focus:t.bind(i,i.focus)})}}function i(e,n){return t.isString(e)&&(e=c[0].querySelector(e)),t.element(e||n)}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=i(e.parent,m),e.closeTo=o(i(e.closeTo)),e.openFrom=o(i(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin),e.originInteraction=g.getLastInteractionType())}function M(n,o){var r=t.element(l),a=i.debounce(function(){k(n,o)},60),s=[],c=function(){var t="alert"==o.$type?e.hide:e.cancel;i.nextTick(t,!0)};if(o.escapeToClose){var m=o.parent,u=function(e){e.keyCode===d.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),c())};n.on("keydown",u),m.on("keydown",u),s.push(function(){n.off("keydown",u),m.off("keydown",u)})}if(r.on("resize",a),s.push(function(){r.off("resize",a)}),o.clickOutsideToClose){var p,h=n,f=function(e){p=e.target},g=function(e){p===h[0]&&e.target===h[0]&&(e.stopPropagation(),e.preventDefault(),c())};h.on("mousedown",f),h.on("mouseup",g),s.push(function(){h.off("mousedown",f),h.off("mouseup",g)})}o.deactivateListeners=function(){s.forEach(function(e){e()}),o.deactivateListeners=null}}function T(e,t,n){n.disableParentScroll&&(n.restoreScroll=i.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=i.createBackdrop(e,"md-dialog-backdrop md-opaque"),s.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():s.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll&&n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function A(e,t){var n="alert"===t.$type?"alertdialog":"dialog",d=e.find("md-dialog-content"),s=e.attr("id"),c="dialogContent_"+(s||i.nextUid());e.attr({role:n,tabIndex:"-1"}),0===d.length&&(d=e,s&&(c=s)),d.attr("id",c),e.attr("aria-describedby",c),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=d.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")}),r=document.createElement("div"),r.classList.add("md-dialog-focus-trap"),r.tabIndex=0,a=r.cloneNode(!1);var l=function(){e.focus()};r.addEventListener("focus",l),a.addEventListener("focus",l),e[0].parentNode.insertBefore(r,e[0]),e.after(a)}function w(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,i=0;i<t.length;i++)e===t[i]||N(t[i],["SCRIPT","STYLE"])||t[i].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function k(e,t){var n="fixed"==l.getComputedStyle(c[0].body).position,o=t.backdrop?l.getComputedStyle(t.backdrop[0]):null,i=o?Math.min(c[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0,r={top:e.css("top"),height:e.css("height")},a=Math.abs(t.parent[0].getBoundingClientRect().top);return e.css({top:(n?a:0)+"px",height:i?i+"px":"100%"}),function(){e.css(r)}}function _(e,t){t.parent.append(e),t.reverseContainerStretch=k(e,t);var n=e.find("md-dialog"),o=i.dom.animator,r=o.calculateZoomToOrigin,a={transitionInClass:"md-transition-in",transitionOutClass:"md-transition-out"},d=o.toTransformCss(r(n,t.openFrom||t.origin)),s=o.toTransformCss("");return n.toggleClass("md-dialog-fullscreen",!!t.fullscreen),o.translate3d(n,d,s,a).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(a={transitionInClass:"md-transition-out",transitionOutClass:"md-transition-in"},d=s,s=o.toTransformCss(r(n,t.closeTo)),o.translate3d(n,d,s,a)):e(s=o.toTransformCss(r(n,t.origin)))},t.clearAnimate=function(){return delete t.clearAnimate,n.removeClass([a.transitionOutClass,a.transitionInClass].join(" ")),o.translate3d(n,s,o.toTransformCss(""),{})},!0})}function x(e,t){return t.reverseAnimate().then(function(){t.contentElement&&t.clearAnimate()})}function N(e,t){if(t.indexOf(e.nodeName)!==-1)return!0}return{hasBackdrop:!0,isolateScope:!0,onCompiling:b,onShow:E,onShowing:v,onRemove:$,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||""}var o=f.startSymbol(),i=f.endSymbol(),r=o+(t.themeWatch?"":"::")+"theme"+i;return'<div class="md-dialog-container" tabindex="-1" md-theme="'+r+'">'+n(e)+"</div>"}}}o.$inject=["$mdDialog","$mdConstant"],i.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector","$mdTheming","$interpolate","$mdInteraction"];var r,a;return e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen","multiple"],options:i}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o}).addPreset("prompt",{methods:["title","htmlContent","textContent","initialValue","content","placeholder","ariaLabel","ok","cancel","theme","css"],options:o})}e.$inject=["$$rAF","$mdTheming","$mdDialog"],o.$inject=["$$interimElementProvider"],t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",e).provider("$mdDialog",o)}(),function(){function e(e){return{restrict:"E",link:e}}e.$inject=["$mdTheming"],t.module("material.components.divider",["material.core"]).directive("mdDivider",e)}(),function(){!function(){function e(e){return{restrict:"E",require:["^?mdFabSpeedDial","^?mdFabToolbar"],compile:function(t,n){var o=t.children(),i=e.prefixer().hasAttribute(o,"ng-repeat");i?o.addClass("md-fab-action-item"):o.wrap('<div class="md-fab-action-item">')}}}e.$inject=["$mdUtil"],t.module("material.components.fabActions",["material.core"]).directive("mdFabActions",e)}()}(),function(){!function(){function e(e,n,o,i,r,a){function d(){N.direction=N.direction||"down",N.isOpen=N.isOpen||!1,l(),n.addClass("md-animations-waiting")}function s(){var o=["click","focusin","focusout"];t.forEach(o,function(e){n.on(e,c)}),e.$on("$destroy",function(){t.forEach(o,function(e){n.off(e,c)}),h()})}function c(e){"click"==e.type&&k(e),"focusout"!=e.type||D||(D=a(function(){N.close()},100,!1)),"focusin"==e.type&&D&&(a.cancel(D),D=null)}function l(){N.currentActionIndex=-1}function m(){e.$watch("vm.direction",function(e,t){o.removeClass(n,"md-"+t),o.addClass(n,"md-"+e),l()});var t,i;e.$watch("vm.isOpen",function(e){l(),t&&i||(t=_(),i=x()),e?p():h();var r=e?"md-is-open":"",a=e?"":"md-is-open";t.attr("aria-haspopup",!0),t.attr("aria-expanded",e),i.attr("aria-hidden",!e),o.setClass(n,r,a)})}function u(){n[0].scrollHeight>0?o.addClass(n,"_md-animations-ready").then(function(){n.removeClass("md-animations-waiting")}):S<10&&(a(u,100),S+=1)}function p(){n.on("keydown",g),i.nextTick(function(){t.element(document).on("click touchend",f)})}function h(){n.off("keydown",g),t.element(document).off("click touchend",f)}function f(e){if(e.target){var t=i.getClosest(e.target,"md-fab-trigger"),n=i.getClosest(e.target,"md-fab-actions");t||n||N.close()}}function g(e){switch(e.which){case r.KEY_CODE.ESCAPE:return N.close(),e.preventDefault(),!1;case r.KEY_CODE.LEFT_ARROW:return C(e),!1;case r.KEY_CODE.UP_ARROW:return y(e),!1;case r.KEY_CODE.RIGHT_ARROW:return M(e),!1;case r.KEY_CODE.DOWN_ARROW:return T(e),!1}}function b(e){E(e,-1)}function v(e){E(e,1)}function E(e,n){var o=$();N.currentActionIndex=N.currentActionIndex+n,N.currentActionIndex=Math.min(o.length-1,N.currentActionIndex),N.currentActionIndex=Math.max(0,N.currentActionIndex);var i=t.element(o[N.currentActionIndex]).children()[0];t.element(i).attr("tabindex",0),i.focus(),e.preventDefault(),e.stopImmediatePropagation()}function $(){var e=x()[0].querySelectorAll(".md-fab-action-item");return t.forEach(e,function(e){t.element(t.element(e).children()[0]).attr("tabindex",-1)}),e}function C(e){"left"===N.direction?v(e):b(e);
}function y(e){"down"===N.direction?b(e):v(e)}function M(e){"left"===N.direction?b(e):v(e)}function T(e){"up"===N.direction?b(e):v(e)}function A(e){return i.getClosest(e,"md-fab-trigger")}function w(e){return i.getClosest(e,"md-fab-actions")}function k(e){A(e.target)&&N.toggle(),w(e.target)&&N.close()}function _(){return n.find("md-fab-trigger")}function x(){return n.find("md-fab-actions")}var N=this,S=0;N.open=function(){e.$evalAsync("vm.isOpen = true")},N.close=function(){e.$evalAsync("vm.isOpen = false"),n.find("md-fab-trigger")[0].focus()},N.toggle=function(){e.$evalAsync("vm.isOpen = !vm.isOpen")},N.$onInit=function(){d(),s(),m(),u()},1===t.version.major&&t.version.minor<=4&&this.$onInit();var D}e.$inject=["$scope","$element","$animate","$mdUtil","$mdConstant","$timeout"],t.module("material.components.fabShared",["material.core"]).controller("MdFabController",e)}()}(),function(){!function(){function n(){function e(e,t){t.prepend('<div class="_md-css-variables"></div>')}return{restrict:"E",scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(n){function o(e){n(e,r,!1)}function i(n){if(!n.hasClass("md-animations-waiting")||n.hasClass("_md-animations-ready")){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),a=o.querySelector("md-fab-trigger"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style;n.transform=n.webkitTransform="",n.transitionDelay="",n.opacity=1,n.zIndex=r.length-t+s}),a.style.zIndex=s+r.length+1,i.isOpen||t.forEach(r,function(e,t){var n,o,r=e.style,d=(a.clientHeight-e.clientHeight)/2,s=(a.clientWidth-e.clientWidth)/2;switch(i.direction){case"up":n=e.scrollHeight*(t+1)+d,o="Y";break;case"down":n=-(e.scrollHeight*(t+1)+d),o="Y";break;case"left":n=e.scrollWidth*(t+1)+s,o="X";break;case"right":n=-(e.scrollWidth*(t+1)+s),o="X"}var c="translate"+o+"("+n+"px)";r.transform=r.webkitTransform=c})}}return{addClass:function(e,t,n){e.hasClass("md-fling")?(i(e),o(n)):n()},removeClass:function(e,t,n){i(e),o(n)}}}function i(n){function o(e){n(e,r,!1)}function i(n){var o=n[0],i=n.controller("mdFabSpeedDial"),r=o.querySelectorAll(".md-fab-action-item"),d=o.querySelector("._md-css-variables"),s=parseInt(e.getComputedStyle(d).zIndex);t.forEach(r,function(e,t){var n=e.style,o=t*a;n.opacity=i.isOpen?1:0,n.transform=n.webkitTransform=i.isOpen?"scale(1)":"scale(0)",n.transitionDelay=(i.isOpen?o:r.length-o)+"ms",n.zIndex=r.length-t+s})}var a=65;return{addClass:function(e,t,n){i(e),o(n)},removeClass:function(e,t,n){i(e),o(n)}}}o.$inject=["$timeout"],i.$inject=["$timeout"];var r=300;t.module("material.components.fabSpeedDial",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabSpeedDial",n).animation(".md-fling",o).animation(".md-scale",i).service("mdFabSpeedDialFlingAnimation",o).service("mdFabSpeedDialScaleAnimation",i)}()}(),function(){!function(){function n(){function e(e,t,n){t.addClass("md-fab-toolbar"),t.find("md-fab-trigger").find("button").prepend('<div class="md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="md-fab-toolbar-wrapper">  <div class="md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:e}}function o(){function n(n,o,i){if(o){var r=n[0],a=n.controller("mdFabToolbar"),d=r.querySelector(".md-fab-toolbar-background"),s=r.querySelector("md-fab-trigger button"),c=r.querySelector("md-toolbar"),l=r.querySelector("md-fab-trigger button md-icon"),m=n.find("md-fab-actions").children();if(s&&d){var u=e.getComputedStyle(s).getPropertyValue("background-color"),p=r.offsetWidth,h=(r.offsetHeight,2*(p/s.offsetWidth));d.style.backgroundColor=u,d.style.borderRadius=p+"px",a.isOpen?(c.style.pointerEvents="inherit",d.style.width=s.offsetWidth+"px",d.style.height=s.offsetHeight+"px",d.style.transform="scale("+h+")",d.style.transitionDelay="0ms",l&&(l.style.transitionDelay=".3s"),t.forEach(m,function(e,t){e.style.transitionDelay=25*(m.length-t)+"ms"})):(c.style.pointerEvents="none",d.style.transform="scale(1)",d.style.top="0",n.hasClass("md-right")&&(d.style.left="0",d.style.right=null),n.hasClass("md-left")&&(d.style.right="0",d.style.left=null),d.style.transitionDelay="200ms",l&&(l.style.transitionDelay="0ms"),t.forEach(m,function(e,t){e.style.transitionDelay=200+25*t+"ms"}))}}}return{addClass:function(e,t,o){n(e,t,o),o()},removeClass:function(e,t,o){n(e,t,o),o()}}}t.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabActions"]).directive("mdFabToolbar",n).animation(".md-fab-toolbar",o).service("mdFabToolbarAnimation",o)}()}(),function(){function e(e,o,i,r){function a(n,a,d,s){function c(){for(var e in o.MEDIA)r(e),r.getQuery(o.MEDIA[e]).addListener(M);return r.watchResponsiveAttributes(["md-cols","md-row-height","md-gutter"],d,m)}function l(){s.layoutDelegate=t.noop,T();for(var e in o.MEDIA)r.getQuery(o.MEDIA[e]).removeListener(M)}function m(e){null==e?s.invalidateLayout():r(e)&&s.invalidateLayout()}function u(e){var o=g(),r={tileSpans:b(o),colCount:v(),rowMode:C(),rowHeight:$(),gutter:E()};if(e||!t.equals(r,A)){var d=i(r.colCount,r.tileSpans,o).map(function(e,n){return{grid:{element:a,style:f(r.colCount,n,r.gutter,r.rowMode,r.rowHeight)},tiles:e.map(function(e,i){return{element:t.element(o[i]),style:h(e.position,e.spans,r.colCount,n,r.gutter,r.rowMode,r.rowHeight)}})}}).reflow().performance();n.mdOnLayout({$event:{performance:d}}),A=r}}function p(e){return w+e+k}function h(e,t,n,o,i,r,a){var d=1/n*100,s=(n-1)/n,c=_({share:d,gutterShare:s,gutter:i}),l="rtl"!=document.dir&&"rtl"!=document.body.dir,m=l?{left:x({unit:c,offset:e.col,gutter:i}),width:N({unit:c,span:t.col,gutter:i}),paddingTop:"",marginTop:"",top:"",height:""}:{right:x({unit:c,offset:e.col,gutter:i}),width:N({unit:c,span:t.col,gutter:i}),paddingTop:"",marginTop:"",top:"",height:""};switch(r){case"fixed":m.top=x({unit:a,offset:e.row,gutter:i}),m.height=N({unit:a,span:t.row,gutter:i});break;case"ratio":var u=d/a,p=_({share:u,gutterShare:s,gutter:i});m.paddingTop=N({unit:p,span:t.row,gutter:i}),m.marginTop=x({unit:p,offset:e.row,gutter:i});break;case"fit":var h=(o-1)/o,u=1/o*100,p=_({share:u,gutterShare:h,gutter:i});m.top=x({unit:p,offset:e.row,gutter:i}),m.height=N({unit:p,span:t.row,gutter:i})}return m}function f(e,t,n,o,i){var r={};switch(o){case"fixed":r.height=N({unit:i,span:t,gutter:n}),r.paddingBottom="";break;case"ratio":var a=1===e?0:(e-1)/e,d=1/e*100,s=d*(1/i),c=_({share:s,gutterShare:a,gutter:n});r.height="",r.paddingBottom=N({unit:c,span:t,gutter:n});break;case"fit":}return r}function g(){return[].filter.call(a.children(),function(e){return"MD-GRID-TILE"==e.tagName&&!e.$$mdDestroyed})}function b(e){return[].map.call(e,function(e){var n=t.element(e).controller("mdGridTile");return{row:parseInt(r.getResponsiveAttribute(n.$attrs,"md-rowspan"),10)||1,col:parseInt(r.getResponsiveAttribute(n.$attrs,"md-colspan"),10)||1}})}function v(){var e=parseInt(r.getResponsiveAttribute(d,"md-cols"),10);if(isNaN(e))throw"md-grid-list: md-cols attribute was not found, or contained a non-numeric value";return e}function E(){return y(r.getResponsiveAttribute(d,"md-gutter")||1)}function $(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";switch(C()){case"fixed":return y(e);case"ratio":var t=e.split(":");return parseFloat(t[0])/parseFloat(t[1]);case"fit":return 0}}function C(){var e=r.getResponsiveAttribute(d,"md-row-height");if(!e)throw"md-grid-list: md-row-height attribute was not found";return"fit"==e?"fit":e.indexOf(":")!==-1?"ratio":"fixed"}function y(e){return/\D$/.test(e)?e:e+"px"}a.addClass("_md"),a.attr("role","list"),s.layoutDelegate=u;var M=t.bind(s,s.invalidateLayout),T=c();n.$on("$destroy",l);var A,w=e.startSymbol(),k=e.endSymbol(),_=e(p("share")+"% - ("+p("gutter")+" * "+p("gutterShare")+")"),x=e("calc(("+p("unit")+" + "+p("gutter")+") * "+p("offset")+")"),N=e("calc(("+p("unit")+") * "+p("span")+" + ("+p("span")+" - 1) * "+p("gutter")+")")}return{restrict:"E",controller:n,scope:{mdOnLayout:"&"},link:a}}function n(e){this.layoutInvalidated=!1,this.tilesInvalidated=!1,this.$timeout_=e.nextTick,this.layoutDelegate=t.noop}function o(e){function n(t,n){var o,a,d,s,c,l;return s=e.time(function(){a=i(t,n)}),o={layoutInfo:function(){return a},map:function(t){return c=e.time(function(){var e=o.layoutInfo();d=t(e.positioning,e.rowCount)}),o},reflow:function(t){return l=e.time(function(){var e=t||r;e(d.grid,d.tiles)}),o},performance:function(){return{tileCount:n.length,layoutTime:s,mapTime:c,reflowTime:l,totalTime:s+c+l}}}}function o(e,t){e.element.css(e.style),t.forEach(function(e){e.element.css(e.style)})}function i(e,t){function n(t,n){if(t.col>e)throw"md-grid-list: Tile at position "+n+" has a colspan ("+t.col+") that exceeds the column count ("+e+")";for(var a=0,l=0;l-a<t.col;)d>=e?o():(a=c.indexOf(0,d),a!==-1&&(l=r(a+1))!==-1?d=l+1:(a=l=0,o()));return i(a,t.col,t.row),d=a+t.col,{col:a,row:s}}function o(){d=0,s++,i(0,e,-1)}function i(e,t,n){for(var o=e;o<e+t;o++)c[o]=Math.max(c[o]+n,0)}function r(e){var t;for(t=e;t<c.length;t++)if(0!==c[t])return t;if(t===c.length)return t}function a(){for(var t=[],n=0;n<e;n++)t.push(0);return t}var d=0,s=0,c=a();return{positioning:t.map(function(e,t){return{spans:e,position:n(e,t)}}),rowCount:s+Math.max.apply(Math,c)}}var r=o;return n.animateWith=function(e){r=t.isFunction(e)?e:o},n}function i(e){function n(n,o,i,r){o.attr("role","listitem");var a=e.watchResponsiveAttributes(["md-colspan","md-rowspan"],i,t.bind(r,r.invalidateLayout));r.invalidateTiles(),n.$on("$destroy",function(){o[0].$$mdDestroyed=!0,a(),r.invalidateLayout()}),t.isDefined(n.$parent.$index)&&n.$watch(function(){return n.$parent.$index},function(e,t){e!==t&&r.invalidateTiles()})}return{restrict:"E",require:"^mdGridList",template:"<figure ng-transclude></figure>",transclude:!0,scope:{},controller:["$attrs",function(e){this.$attrs=e}],link:n}}function r(){return{template:"<figcaption ng-transclude></figcaption>",transclude:!0}}n.$inject=["$mdUtil"],o.$inject=["$mdUtil"],e.$inject=["$interpolate","$mdConstant","$mdGridLayout","$mdMedia"],i.$inject=["$mdMedia"],t.module("material.components.gridList",["material.core"]).directive("mdGridList",e).directive("mdGridTile",i).directive("mdGridTileFooter",r).directive("mdGridTileHeader",r).factory("$mdGridLayout",o),n.prototype={invalidateTiles:function(){this.tilesInvalidated=!0,this.invalidateLayout()},invalidateLayout:function(){this.layoutInvalidated||(this.layoutInvalidated=!0,this.$timeout_(t.bind(this,this.layout)))},layout:function(){try{this.layoutDelegate(this.tilesInvalidated)}finally{this.layoutInvalidated=!1,this.tilesInvalidated=!1}}}}(),function(){t.module("material.components.icon",["material.core"])}(),function(){function n(e,t){function n(t){var n=t[0].querySelector(r),o=t[0].querySelector(a);return n&&t.addClass("md-icon-left"),o&&t.addClass("md-icon-right"),function(t,n){e(n)}}function o(e,n,o,i){var r=this;r.isErrorGetter=o.mdIsError&&t(o.mdIsError),r.delegateClick=function(){r.input.focus()},r.element=n,r.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},r.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},r.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},r.setInvalid=function(e){e?i.addClass(n,"md-input-invalid"):i.removeClass(n,"md-input-invalid")},e.$watch(function(){return r.label&&r.input},function(e){e&&!r.label.attr("for")&&r.label.attr("for",r.input.attr("id"))})}o.$inject=["$scope","$element","$attrs","$animate"];var i=["INPUT","TEXTAREA","SELECT","MD-SELECT"],r=i.reduce(function(e,t){return e.concat(["md-icon ~ "+t,".md-icon ~ "+t])},[]).join(","),a=i.reduce(function(e,t){return e.concat([t+" ~ md-icon",t+" ~ .md-icon"])},[]).join(",");return{restrict:"E",compile:n,controller:o}}function o(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,o){!o||n.mdNoFloat||t.hasClass("md-container-ignore")||(o.label=t,e.$on("$destroy",function(){o.label=null}))}}}function i(e,n,o,i,r){function a(a,d,s,c){function l(e){return h.setHasValue(!g.$isEmpty(e)),e}function m(){h.label&&s.$observe("required",function(e){h.label.toggleClass("md-required",e&&!E)})}function u(){h.setHasValue(d.val().length>0||(d[0].validity||{}).badInput)}function p(){function o(){d.attr("rows",1).css("height","auto").addClass("md-no-flex");var e=c();if(!$){var t=d[0].style.padding||"";$=d.css("padding",0).prop("offsetHeight"),d[0].style.padding=t}if(b&&$&&(e=Math.max(e,$*b)),v&&$){var n=$*v;n<e?(d.attr("md-no-autogrow",""),e=n):d.removeAttr("md-no-autogrow")}$&&d.attr("rows",Math.round(e/$)),d.css("height",e+"px").removeClass("md-no-flex")}function c(){var e=C.offsetHeight,t=C.scrollHeight-e;return e+Math.max(t,0)}function l(t){return e.nextTick(o),t}function m(){if(p&&(p=!1,t.element(n).off("resize",o),E&&E(),d.attr("md-no-autogrow","").off("input",o),f)){var e=g.$formatters.indexOf(l);e>-1&&g.$formatters.splice(e,1)}}function u(){function e(e){e.preventDefault(),l=!0,u=e.clientY,p=parseFloat(d.css("height"))||d.prop("offsetHeight")}function n(e){l&&(e.preventDefault(),m(),f.addClass("md-input-resized"))}function o(e){l&&d.css("height",p+e.pointer.distanceY+"px")}function i(e){l&&(l=!1,f.removeClass("md-input-resized"))}if(!s.hasOwnProperty("mdNoResize")){var c=t.element('<div class="md-resize-handle"></div>'),l=!1,u=null,p=0,f=h.element,g=r.register(c,"drag",{horizontal:!1});d.wrap('<div class="md-resize-wrapper">').after(c),c.on("mousedown",e),f.on("$md.dragstart",n).on("$md.drag",o).on("$md.dragend",i),a.$on("$destroy",function(){c.off("mousedown",e).remove(),f.off("$md.dragstart",n).off("$md.drag",o).off("$md.dragend",i),g(),c=null,f=null,g=null})}}var p=!s.hasOwnProperty("mdNoAutogrow");if(u(),p){var b=s.hasOwnProperty("rows")?parseInt(s.rows):NaN,v=s.hasOwnProperty("maxRows")?parseInt(s.maxRows):NaN,E=a.$on("md-resize-textarea",o),$=null,C=d[0];if(i(function(){e.nextTick(o)},10,!1),d.on("input",o),f&&g.$formatters.push(l),b||d.attr("rows",1),t.element(n).on("resize",o),a.$on("$destroy",m),s.hasOwnProperty("mdDetectHidden")){var y=function(){var e=!1;return function(){var t=0===C.offsetHeight;t===!1&&e===!0&&o(),e=t}}();a.$watch(function(){return e.nextTick(y,!1),!0})}}}var h=c[0],f=!!c[1],g=c[1]||e.fakeNgModel(),b=c[2],v=t.isDefined(s.readonly),E=e.parseAttributeBoolean(s.mdNoAsterisk),$=d[0].tagName.toLowerCase();if(h){if("hidden"===s.type)return void d.attr("aria-hidden","true");if(h.input){if(h.input[0].contains(d[0]))return;throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!")}h.input=d,m();var C=t.element('<div class="md-errors-spacer">');d.after(C),h.label||o.expect(d,"aria-label",s.placeholder),d.addClass("md-input"),d.attr("id")||d.attr("id","input_"+e.nextUid()),"input"===$&&"number"===s.type&&s.min&&s.max&&!s.step?d.attr("step","any"):"textarea"===$&&p(),f||u();var y=h.isErrorGetter||function(){return g.$invalid&&(g.$touched||b&&b.$submitted)};a.$watch(y,h.setInvalid),s.ngValue&&s.$observe("value",u),g.$parsers.push(l),g.$formatters.push(l),d.on("input",u),v||d.on("focus",function(t){e.nextTick(function(){h.setFocused(!0)})}).on("blur",function(t){e.nextTick(function(){h.setFocused(!1),u()})}),a.$on("$destroy",function(){h.setFocused(!1),h.setHasValue(!1),h.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel","?^form"],link:a}}function r(e,n){function o(o,i,r,a){function d(e){return c.parent?(c.text(String(i.val()||e||"").length+" / "+s),e):e}var s,c,l,m=a[0],u=a[1];n.nextTick(function(){l=t.element(u.element[0].querySelector(".md-errors-spacer")),c=t.element('<div class="md-char-counter">'),l.append(c),r.$set("ngTrim","false"),o.$watch(r.mdMaxlength,function(n){s=n,t.isNumber(n)&&n>0?(c.parent().length||e.enter(c,l),d()):e.leave(c)}),m.$validators["md-maxlength"]=function(e,n){return!t.isNumber(s)||s<0||(d(),(e||i.val()||n||"").length<=s)}})}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:o}}function a(e){function n(n,o,i,r){if(r){var a=r.element.find("label"),d=r.element.attr("md-no-float");if(a&&a.length||""===d||n.$eval(d))return void r.setHasPlaceholder(!0);if("MD-SELECT"!=o[0].nodeName){var s=t.element('<label ng-click="delegateClick()" tabindex="-1">'+i.placeholder+"</label>");i.$set("placeholder",null),r.element.addClass("md-icon-float").prepend(s),e(s)(n)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:{pre:n}}}function d(e){function t(t,n,o){function i(){a=!0,e(function(){n[0].select(),a=!1},1,!1)}function r(e){a&&e.preventDefault()}if("INPUT"===n[0].nodeName||"TEXTAREA"===n[0].nodeName){var a=!1;n.on("focus",i).on("mouseup",r),t.$on("$destroy",function(){n.off("focus",i).off("mouseup",r)})}}return{restrict:"A",link:t}}function s(){function e(e,n,o,i){i&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==o.mdAutoHide||t(o))&&n.toggleClass("md-auto-hide",!1))}function t(e){return A.some(function(t){return e[t]})}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}function c(e){function t(t){function n(){for(var e=t[0];e=e.parentNode;)if(e.nodeType===Node.DOCUMENT_FRAGMENT_NODE)return!0;return!1}function o(t){return!!e.getClosest(t,"md-input-container")}function i(e){e.toggleClass("md-input-message-animation",!0)}if(o(t))i(t);else if(n())return function(e,n){o(n)&&i(t)}}return{restrict:"EA",compile:t,priority:100}}function l(e,t,n,o){return E(e,t,n,o),{addClass:function(e,t,n){p(e,n)}}}function m(e,t,n,o){return E(e,t,n,o),{enter:function(e,t){p(e,t)},leave:function(e,t){h(e,t)},addClass:function(e,t,n){"ng-hide"==t?h(e,n):n()},removeClass:function(e,t,n){"ng-hide"==t?p(e,n):n()}}}function u(e,t,n,o){return E(e,t,n,o),{enter:function(e,t){var n=f(e);n.start().done(t)},leave:function(e,t){var n=g(e);n.start().done(t)}}}function p(e,n){var o,i=[],r=v(e),a=r.children();return 0==r.length||0==a.length?(T.warn("mdInput messages show animation called on invalid messages element: ",e),void n()):(t.forEach(a,function(e){o=f(t.element(e)),i.push(o.start())}),void C.all(i,n))}function h(e,n){var o,i=[],r=v(e),a=r.children();return 0==r.length||0==a.length?(T.warn("mdInput messages hide animation called on invalid messages element: ",e),void n()):(t.forEach(a,function(e){o=g(t.element(e)),i.push(o.start())}),void C.all(i,n))}function f(t){var n=parseInt(e.getComputedStyle(t[0]).height),o=parseInt(e.getComputedStyle(t[0]).marginTop),i=v(t),r=b(t),a=o>-n;return a||i.hasClass("md-auto-hide")&&!r.hasClass("md-input-invalid")?y(t,{}):y(t,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3})}function g(t){var n=t[0].offsetHeight,o=e.getComputedStyle(t[0]);return 0===parseInt(o.opacity)?y(t,{}):y(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-n+"px"},duration:.3})}function b(e){var t=e.controller("mdInputContainer");return t.element}function v(e){return e.hasClass("md-input-messages-animation")?e:e.hasClass("md-input-message-animation")?t.element(M.getClosest(e,function(e){return e.classList.contains("md-input-messages-animation")})):t.element(e[0].querySelector(".md-input-messages-animation"))}function E(e,t,n,o){C=e,y=t,M=n,T=o}n.$inject=["$mdTheming","$parse"],i.$inject=["$mdUtil","$window","$mdAria","$timeout","$mdGesture"],r.$inject=["$animate","$mdUtil"],a.$inject=["$compile"],c.$inject=["$mdUtil"],d.$inject=["$timeout"],l.$inject=["$$AnimateRunner","$animateCss","$mdUtil","$log"],m.$inject=["$$AnimateRunner","$animateCss","$mdUtil","$log"],u.$inject=["$$AnimateRunner","$animateCss","$mdUtil","$log"];var $=t.module("material.components.input",["material.core"]).directive("mdInputContainer",n).directive("label",o).directive("input",i).directive("textarea",i).directive("mdMaxlength",r).directive("placeholder",a).directive("ngMessages",s).directive("ngMessage",c).directive("ngMessageExp",c).directive("mdSelectOnFocus",d).animation(".md-input-invalid",l).animation(".md-input-messages-animation",m).animation(".md-input-message-animation",u);e._mdMocksIncluded&&$.service("$$mdInput",function(){return{messages:{show:p,hide:h,getElement:v}}}).service("mdInputInvalidAnimation",l).service("mdInputMessagesAnimation",m).service("mdInputMessageAnimation",u);var C,y,M,T,A=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"]}(),function(){function e(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function n(e,n,o,i){var r=["md-checkbox","md-switch","md-menu"];return{restrict:"E",controller:"MdListController",compile:function(a,d){function s(){for(var e,t,n=["md-switch","md-checkbox"],o=0;t=n[o];++o)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var i=a.find("p")[0];if(!i)return;e.setAttribute("aria-label","Toggle "+i.textContent)}}function c(){var e=t.element(E),n=e.parent().hasClass("md-secondary-container")||E.parentNode.firstElementChild!==E,o="left";n&&(o="right"),e.attr("md-position-mode")||e.attr("md-position-mode",o+" target");var i=e.children().eq(0);g(i[0])||i.attr("ng-click","$mdMenu.open($event)"),i.attr("aria-label")||i.attr("aria-label","Open List Menu")}function l(n){if("div"==n)C=t.element('<div class="md-no-style md-list-item-inner">'),C.append(a.contents()),a.addClass("md-proxy-focus");else{C=t.element('<div class="md-button md-no-style">   <div class="md-list-item-inner"></div></div>');var o=t.element('<md-button class="md-no-style"></md-button>');p(a[0],o[0]),o.attr("aria-label")||o.attr("aria-label",e.getText(a)),a.hasClass("md-no-focus")&&o.addClass("md-no-focus"),C.prepend(o),C.children().eq(1).append(a.contents()),a.addClass("_md-button-wrap")}a[0].setAttribute("tabindex","-1"),a.append(C)}function m(){var e=t.element('<div class="md-secondary-container">');t.forEach($,function(t){u(t,e)}),C.append(e)}function u(n,o){if(n&&!f(n)&&n.hasAttribute("ng-click")){e.expect(n,"aria-label");var i=t.element('<md-button class="md-secondary md-icon-button">');p(n,i[0],["ng-if","ng-hide","ng-show"]),n.setAttribute("tabindex","-1"),i.append(n),n=i[0]}n&&(!g(n)||!d.ngClick&&h(n))&&t.element(n).removeClass("md-secondary"),a.addClass("md-with-secondary"),o.append(n)}function p(e,n,i){var r=o.prefixer(["ng-if","ng-click","ng-dblclick","aria-label","ng-disabled","ui-sref","href","ng-href","target","ng-attr-ui-sref","ui-sref-opts"]);i&&(r=r.concat(o.prefixer(i))),t.forEach(r,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t))})}function h(e){return r.indexOf(e.nodeName.toLowerCase())!=-1}function f(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t}function g(e){for(var t=e.attributes,n=0;n<t.length;n++)if("ngClick"===d.$normalize(t[n].name))return!0;return!1}function b(e,a,d,s){function c(){p&&p.children&&!b&&!v&&t.forEach(r,function(e){t.forEach(p.querySelectorAll(e+":not(.md-secondary)"),function(e){u.push(e)})})}function l(){(1==u.length||b)&&(a.addClass("md-clickable"),b||s.attachRipple(e,t.element(a[0].querySelector(".md-no-style"))))}function m(e){var t=["md-slider"];if(!e.path)return t.indexOf(e.target.tagName.toLowerCase())!==-1;for(var n=e.path.indexOf(a.children()[0]),o=0;o<n;o++)if(t.indexOf(e.path[o].tagName.toLowerCase())!==-1)return!0}a.addClass("_md");var u=[],p=a[0].firstElementChild,h=a.hasClass("_md-button-wrap"),f=h?p.firstElementChild:p,b=f&&g(f),v=a.hasClass("md-no-proxy");c(),l(),u.length&&t.forEach(u,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,i(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})});var E=function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName&&!e.target.isContentEditable){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&f&&(f.click(),e.preventDefault(),e.stopPropagation())}};b||u.length||f&&f.addEventListener("keypress",E),a.off("click"),a.off("keypress"),1==u.length&&f&&a.children().eq(0).on("click",function(e){if(!m(e)){var n=o.getClosest(e.target,"BUTTON");!n&&f.contains(e.target)&&t.forEach(u,function(n){e.target===n||n.contains(e.target)||("MD-MENU"===n.nodeName&&(n=n.children[0]),t.element(n).triggerHandler("click"))})}}),e.$on("$destroy",function(){f&&f.removeEventListener("keypress",E)})}var v,E,$=a[0].querySelectorAll(".md-secondary"),C=a;if(a[0].setAttribute("role","listitem"),d.ngClick||d.ngDblclick||d.ngHref||d.href||d.uiSref||d.ngAttrUiSref)l("button");else if(!a.hasClass("md-no-proxy")){for(var y,M=0;y=r[M];++M)if(E=a[0].querySelector(y)){v=!0;break}v?l("div"):a.addClass("md-no-proxy")}return m(),s(),v&&"MD-MENU"===E.nodeName&&c(),b}}}function o(e,t,n){function o(e,t){var o={};n.attach(e,t,o)}var i=this;i.attachRipple=o}o.$inject=["$scope","$element","$mdListInkRipple"],e.$inject=["$mdTheming"],n.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",e).directive("mdListItem",n)}(),function(){t.module("material.components.menu",["material.core","material.components.backdrop"])}(),function(){t.module("material.components.menuBar",["material.core","material.components.icon","material.components.menu"])}(),function(){function e(e,n){return{restrict:"E",transclude:!0,controller:o,controllerAs:"ctrl",bindToController:!0,scope:{mdSelectedNavItem:"=?",mdNoInkBar:"=?",navBarAriaLabel:"@?"},template:'<div class="md-nav-bar"><nav role="navigation"><ul class="_md-nav-bar-list" ng-transclude role="listbox"tabindex="0"ng-focus="ctrl.onFocus()"ng-keydown="ctrl.onKeydown($event)"aria-label="{{ctrl.navBarAriaLabel}}"></ul></nav><md-nav-ink-bar ng-hide="ctrl.mdNoInkBar"></md-nav-ink-bar></div>',link:function(o,i,r,a){n(i),a.navBarAriaLabel||e.expectAsync(i,"aria-label",t.noop)}}}function o(e,t,n,o){this._$timeout=n,this._$scope=t,this._$mdConstant=o,this.mdSelectedNavItem,this.navBarAriaLabel,this._navBarEl=e[0],this._inkbar;var i=this,r=this._$scope.$watch(function(){return i._navBarEl.querySelectorAll("._md-nav-button").length},function(e){e>0&&(i._initTabs(),r())})}function i(e,n){return{restrict:"E",require:["mdNavItem","^mdNavBar"],controller:r,bindToController:!0,controllerAs:"ctrl",replace:!0,transclude:!0,template:function(e,t){var n,o,i,r=t.mdNavClick,a=t.mdNavHref,d=t.mdNavSref,s=t.srefOpts;if((r?1:0)+(a?1:0)+(d?1:0)>1)throw Error("Must not specify more than one of the md-nav-click, md-nav-href, or md-nav-sref attributes per nav-item directive.");return r?n='ng-click="ctrl.mdNavClick()"':a?n='ng-href="{{ctrl.mdNavHref}}"':d&&(n='ui-sref="{{ctrl.mdNavSref}}"'),o=s?'ui-sref-opts="{{ctrl.srefOpts}}" ':"",n&&(i='<md-button class="_md-nav-button md-accent" ng-class="ctrl.getNgClassMap()" ng-blur="ctrl.setFocused(false)" tabindex="-1" '+o+n+'><span ng-transclude class="_md-nav-button-text"></span></md-button>'),'<li class="md-nav-item" role="option" aria-selected="{{ctrl.isSelected()}}">'+(i||"")+"</li>"},scope:{mdNavClick:"&?",mdNavHref:"@?",mdNavSref:"@?",srefOpts:"=?",name:"@"},link:function(o,i,r,a){n(function(){var n=a[0],r=a[1],d=t.element(i[0].querySelector("._md-nav-button"));n.name||(n.name=t.element(i[0].querySelector("._md-nav-button-text")).text().trim()),d.on("click",function(){r.mdSelectedNavItem=n.name,o.$apply()}),e.expectWithText(i,"aria-label")})}}}function r(e){this._$element=e,this.mdNavClick,this.mdNavHref,this.mdNavSref,this.srefOpts,this.name,this._selected=!1,this._focused=!1}o.$inject=["$element","$scope","$timeout","$mdConstant"],i.$inject=["$mdAria","$$rAF"],r.$inject=["$element"],e.$inject=["$mdAria","$mdTheming"],t.module("material.components.navBar",["material.core"]).controller("MdNavBarController",o).directive("mdNavBar",e).controller("MdNavItemController",r).directive("mdNavItem",i),o.prototype._initTabs=function(){this._inkbar=t.element(this._navBarEl.querySelector("md-nav-ink-bar"));var e=this;this._$timeout(function(){e._updateTabs(e.mdSelectedNavItem,n)}),this._$scope.$watch("ctrl.mdSelectedNavItem",function(t,n){e._$timeout(function(){e._updateTabs(t,n)})})},o.prototype._updateTabs=function(e,t){var n=this,o=this._getTabs();if(o){var i=-1,r=-1,a=this._getTabByName(e),d=this._getTabByName(t);d&&(d.setSelected(!1),i=o.indexOf(d)),a&&(a.setSelected(!0),r=o.indexOf(a)),this._$timeout(function(){n._updateInkBarStyles(a,r,i)})}},o.prototype._updateInkBarStyles=function(e,t,n){if(this._inkbar.toggleClass("_md-left",t<n).toggleClass("_md-right",t>n),this._inkbar.css({display:t<0?"none":""}),e){var o=e.getButtonEl(),i=o.offsetLeft;this._inkbar.css({left:i+"px",width:o.offsetWidth+"px"})}},o.prototype._getTabs=function(){var e=Array.prototype.slice.call(this._navBarEl.querySelectorAll(".md-nav-item")).map(function(e){return t.element(e).controller("mdNavItem")});return e.indexOf(n)?e:null},o.prototype._getTabByName=function(e){return this._findTab(function(t){return t.getName()==e})},o.prototype._getSelectedTab=function(){return this._findTab(function(e){return e.isSelected()})},o.prototype.getFocusedTab=function(){return this._findTab(function(e){return e.hasFocus()})},o.prototype._findTab=function(e){for(var t=this._getTabs(),n=0;n<t.length;n++)if(e(t[n]))return t[n];return null},o.prototype.onFocus=function(){var e=this._getSelectedTab();e&&e.setFocused(!0)},o.prototype._moveFocus=function(e,t){e.setFocused(!1),t.setFocused(!0)},o.prototype.onKeydown=function(e){var t=this._$mdConstant.KEY_CODE,n=this._getTabs(),o=this.getFocusedTab();if(o){var i=n.indexOf(o);switch(e.keyCode){case t.UP_ARROW:case t.LEFT_ARROW:i>0&&this._moveFocus(o,n[i-1]);break;case t.DOWN_ARROW:case t.RIGHT_ARROW:i<n.length-1&&this._moveFocus(o,n[i+1]);break;case t.SPACE:case t.ENTER:this._$timeout(function(){o.getButtonEl().click()})}}},r.prototype.getNgClassMap=function(){return{"md-active":this._selected,"md-primary":this._selected,"md-unselected":!this._selected,"md-focused":this._focused}},r.prototype.getName=function(){return this.name},r.prototype.getButtonEl=function(){return this._$element[0].querySelector("._md-nav-button")},r.prototype.setSelected=function(e){this._selected=e},r.prototype.isSelected=function(){return this._selected},r.prototype.setFocused=function(e){this._focused=e,e&&this.getButtonEl().focus()},r.prototype.hasFocus=function(){return this._focused}}(),function(){t.module("material.components.progressCircular",["material.core"])}(),function(){function e(){return{definePreset:o,getAllPresets:i,clearPresets:r,$get:a()}}function o(e,t){if(!e||!t)throw new Error("mdPanelProvider: The panel preset definition is malformed. The name and preset object are required.");if(g.hasOwnProperty(e))throw new Error("mdPanelProvider: The panel preset you have requested has already been defined.");delete t.id,delete t.position,delete t.animation,g[e]=t}function i(){return t.copy(g)}function r(){g={}}function a(){return["$rootElement","$rootScope","$injector","$window",function(e,t,n,o){return new d(g,e,t,n,o)}]}function d(e,n,o,i,r){this._defaultConfigOptions={bindToController:!0,clickOutsideToClose:!1,disableParentScroll:!1,escapeToClose:!1,focusOnOpen:!0,fullscreen:!1,hasBackdrop:!1,propagateContainerEvents:!1,transformTemplate:t.bind(this,this._wrapTemplate),trapFocus:!1,zIndex:p},this._config={},this._presets=e,this._$rootElement=n,this._$rootScope=o,this._$injector=i,this._$window=r,this._$mdUtil=this._$injector.get("$mdUtil"),this._trackedPanels={},this._groups=Object.create(null),this.animation=l.animation,this.xPosition=c.xPosition,this.yPosition=c.yPosition,this.interceptorTypes=s.interceptorTypes,this.closeReasons=s.closeReasons,this.absPosition=c.absPosition}function s(e,t){this._$q=t.get("$q"),
this._$mdCompiler=t.get("$mdCompiler"),this._$mdConstant=t.get("$mdConstant"),this._$mdUtil=t.get("$mdUtil"),this._$mdTheming=t.get("$mdTheming"),this._$rootScope=t.get("$rootScope"),this._$animate=t.get("$animate"),this._$mdPanel=t.get("$mdPanel"),this._$log=t.get("$log"),this._$window=t.get("$window"),this._$$rAF=t.get("$$rAF"),this.id=e.id,this.config=e,this.panelContainer,this.panelEl,this.isAttached=!1,this._removeListeners=[],this._topFocusTrap,this._bottomFocusTrap,this._backdropRef,this._restoreScroll=null,this._interceptors=Object.create(null),this._compilerCleanup=null,this._restoreCache={styles:"",classes:""}}function c(e){this._$window=e.get("$window"),this._isRTL="rtl"===e.get("$mdUtil").bidi(),this._$mdConstant=e.get("$mdConstant"),this._absolute=!1,this._relativeToEl,this._top="",this._bottom="",this._left="",this._right="",this._translateX=[],this._translateY=[],this._positions=[],this._actualPosition}function l(e){this._$mdUtil=e.get("$mdUtil"),this._openFrom,this._closeTo,this._animationClass="",this._openDuration,this._closeDuration,this._rawDuration}function m(e){var n=t.isString(e)?document.querySelector(e):e;return t.element(n)}function u(e,t){var n=getComputedStyle(e[0]||e)[t],o=n.indexOf("("),i=n.lastIndexOf(")"),r={x:0,y:0};if(o>-1&&i>-1){var a=n.substring(o+1,i).split(", ").slice(-2);r.x=parseInt(a[0]),r.y=parseInt(a[1])}return r}d.$inject=["presets","$rootElement","$rootScope","$injector","$window"],t.module("material.components.panel",["material.core","material.components.backdrop"]).provider("$mdPanel",e);var p=80,h="_md-panel-hidden",f=t.element('<div class="_md-panel-focus-trap" tabindex="0"></div>'),g={};d.prototype.create=function(e,n){if("string"==typeof e?e=this._getPresetByName(e):"object"!=typeof e||!t.isUndefined(n)&&n||(n=e,e={}),e=e||{},n=n||{},t.isDefined(n.id)&&this._trackedPanels[n.id]){var o=this._trackedPanels[n.id];return t.extend(o.config,n),o}this._config=t.extend({id:n.id||"panel_"+this._$mdUtil.nextUid(),scope:this._$rootScope.$new(!0),attachTo:this._$rootElement},this._defaultConfigOptions,n,e);var i=new s(this._config,this._$injector);return this._trackedPanels[n.id]=i,this._config.groupName&&(t.isString(this._config.groupName)&&(this._config.groupName=[this._config.groupName]),t.forEach(this._config.groupName,function(e){i.addToGroup(e)})),this._config.scope.$on("$destroy",t.bind(i,i.detach)),i},d.prototype.open=function(e,t){var n=this.create(e,t);return n.open().then(function(){return n})},d.prototype._getPresetByName=function(e){if(!this._presets[e])throw new Error("mdPanel: The panel preset configuration that you requested does not exist. Use the $mdPanelProvider to create a preset before requesting one.");return this._presets[e]},d.prototype.newPanelPosition=function(){return new c(this._$injector)},d.prototype.newPanelAnimation=function(){return new l(this._$injector)},d.prototype.newPanelGroup=function(e,t){if(!this._groups[e]){t=t||{};var n={panels:[],openPanels:[],maxOpen:t.maxOpen>0?t.maxOpen:1/0};this._groups[e]=n}return this._groups[e]},d.prototype.setGroupMaxOpen=function(e,t){if(!this._groups[e])throw new Error("mdPanel: Group does not exist yet. Call newPanelGroup().");this._groups[e].maxOpen=t},d.prototype._openCountExceedsMaxOpen=function(e){if(this._groups[e]){var t=this._groups[e];return t.maxOpen>0&&t.openPanels.length>t.maxOpen}return!1},d.prototype._closeFirstOpenedPanel=function(e){this._groups[e].openPanels[0].close()},d.prototype._wrapTemplate=function(e){var t=e||"";return'<div class="md-panel-outer-wrapper">  <div class="md-panel _md-panel-offscreen">'+t+"</div></div>"},d.prototype._wrapContentElement=function(e){var n=t.element('<div class="md-panel-outer-wrapper">');return e.addClass("md-panel _md-panel-offscreen"),n.append(e),n},s.interceptorTypes={CLOSE:"onClose"},s.prototype.open=function(){var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e._simpleBind(e.show,e),a=function(){e.config.groupName&&t.forEach(e.config.groupName,function(t){e._$mdPanel._openCountExceedsMaxOpen(t)&&e._$mdPanel._closeFirstOpenedPanel(t)})};e.attach().then(r).then(a).then(i)["catch"](o)})},s.prototype.close=function(e){var n=this;return this._$q(function(o,i){n._callInterceptors(s.interceptorTypes.CLOSE).then(function(){var r=n._done(o,n),a=n._simpleBind(n.detach,n),d=n.config.onCloseSuccess||t.noop;d=t.bind(n,d,n,e),n.hide().then(a).then(r).then(d)["catch"](i)},i)})},s.prototype.attach=function(){if(this.isAttached&&this.panelEl)return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onDomAdded||t.noop,a=function(t){return e.isAttached=!0,e._addEventListeners(),t};e._$q.all([e._createBackdrop(),e._createPanel().then(a)["catch"](o)]).then(r).then(i)["catch"](o)})},s.prototype.detach=function(){if(!this.isAttached)return this._$q.when(this);var e=this,n=e.config.onDomRemoved||t.noop,o=function(){return e._removeEventListeners(),e._topFocusTrap&&e._topFocusTrap.parentNode&&e._topFocusTrap.parentNode.removeChild(e._topFocusTrap),e._bottomFocusTrap&&e._bottomFocusTrap.parentNode&&e._bottomFocusTrap.parentNode.removeChild(e._bottomFocusTrap),e._restoreCache.classes&&(e.panelEl[0].className=e._restoreCache.classes),e.panelEl[0].style.cssText=e._restoreCache.styles||"",e._compilerCleanup(),e.panelContainer.remove(),e.isAttached=!1,e._$q.when(e)};return this._restoreScroll&&(this._restoreScroll(),this._restoreScroll=null),this._$q(function(t,i){var r=e._done(t,e);e._$q.all([o(),!e._backdropRef||e._backdropRef.detach()]).then(n).then(r)["catch"](i)})},s.prototype.destroy=function(){var e=this;this.config.groupName&&t.forEach(this.config.groupName,function(t){e.removeFromGroup(t)}),this.config.scope.$destroy(),this.config.locals=null,this._interceptors=null},s.prototype.show=function(){if(!this.panelContainer)return this._$q(function(e,t){t("mdPanel: Panel does not exist yet. Call open() or attach().")});if(!this.panelContainer.hasClass(h))return this._$q.when(this);var e=this,n=function(){return e.panelContainer.removeClass(h),e._animateOpen()};return this._$q(function(o,i){var r=e._done(o,e),a=e.config.onOpenComplete||t.noop,d=function(){e.config.groupName&&t.forEach(e.config.groupName,function(t){e._$mdPanel._groups[t].openPanels.push(e)})};e._$q.all([e._backdropRef?e._backdropRef.show():e,n().then(function(){e._focusOnOpen()},i)]).then(a).then(d).then(r)["catch"](i)})},s.prototype.hide=function(){if(!this.panelContainer)return this._$q(function(e,t){t("mdPanel: Panel does not exist yet. Call open() or attach().")});if(this.panelContainer.hasClass(h))return this._$q.when(this);var e=this;return this._$q(function(n,o){var i=e._done(n,e),r=e.config.onRemoving||t.noop,a=function(){e.panelContainer.addClass(h)},d=function(){if(e.config.groupName){var n;t.forEach(e.config.groupName,function(t){t=e._$mdPanel._groups[t],n=t.openPanels.indexOf(e),n>-1&&t.openPanels.splice(n,1)})}},s=function(){var t=e.config.origin;t&&m(t).focus()};e._$q.all([e._backdropRef?e._backdropRef.hide():e,e._animateClose().then(r).then(a).then(d).then(s)["catch"](o)]).then(i,o)})},s.prototype.addClass=function(e,t){if(this._$log.warn("mdPanel: The addClass method is in the process of being deprecated. Full deprecation is scheduled for the AngularJS Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");t||this.panelContainer.hasClass(e)?t&&!this.panelEl.hasClass(e)&&this.panelEl.addClass(e):this.panelContainer.addClass(e)},s.prototype.removeClass=function(e,t){if(this._$log.warn("mdPanel: The removeClass method is in the process of being deprecated. Full deprecation is scheduled for the AngularJS Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");!t&&this.panelContainer.hasClass(e)?this.panelContainer.removeClass(e):t&&this.panelEl.hasClass(e)&&this.panelEl.removeClass(e)},s.prototype.toggleClass=function(e,t){if(this._$log.warn("mdPanel: The toggleClass method is in the process of being deprecated. Full deprecation is scheduled for the AngularJS Material 1.2 release. To achieve the same results, use the panelContainer or panelEl JQLite elements that are referenced in MdPanelRef."),!this.panelContainer)throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");t?this.panelEl.toggleClass(e):this.panelContainer.toggleClass(e)},s.prototype._compile=function(){var e=this;return e._$mdCompiler.compile(e.config).then(function(n){var o=e.config;if(o.contentElement){var i=n.element;e._restoreCache.styles=i[0].style.cssText,e._restoreCache.classes=i[0].className,e.panelContainer=e._$mdPanel._wrapContentElement(i),e.panelEl=i}else e.panelContainer=n.link(o.scope),e.panelEl=t.element(e.panelContainer[0].querySelector(".md-panel"));return e._compilerCleanup=n.cleanup,m(e.config.attachTo).append(e.panelContainer),e})},s.prototype._createPanel=function(){var e=this;return this._$q(function(t,n){e.config.locals||(e.config.locals={}),e.config.locals.mdPanelRef=e,e._compile().then(function(){e.config.disableParentScroll&&(e._restoreScroll=e._$mdUtil.disableScrollAround(null,e.panelContainer,{disableScrollMask:!0})),e.config.panelClass&&e.panelEl.addClass(e.config.panelClass),e.config.propagateContainerEvents&&e.panelContainer.css("pointer-events","none"),e._$animate.pin&&e._$animate.pin(e.panelContainer,m(e.config.attachTo)),e._configureTrapFocus(),e._addStyles().then(function(){t(e)},n)},n)})},s.prototype._addStyles=function(){var e=this;return this._$q(function(t){e.panelContainer.css("z-index",e.config.zIndex),e.panelEl.css("z-index",e.config.zIndex+1);var n=function(){e._setTheming(),e.panelEl.removeClass("_md-panel-offscreen"),e.panelContainer.addClass(h),t(e)};if(e.config.fullscreen)return e.panelEl.addClass("_md-panel-fullscreen"),void n();var o=e.config.position;return o?void e._$rootScope.$$postDigest(function(){e._updatePosition(!0),e._setTheming(),t(e)}):void n()})},s.prototype._setTheming=function(){this._$mdTheming(this.panelEl),this._$mdTheming(this.panelContainer)},s.prototype.updatePosition=function(e){if(!this.panelContainer)throw new Error("mdPanel: Panel does not exist yet. Call open() or attach().");this.config.position=e,this._updatePosition()},s.prototype._updatePosition=function(e){var t=this.config.position;t&&(t._setPanelPosition(this.panelEl),e&&(this.panelEl.removeClass("_md-panel-offscreen"),this.panelContainer.addClass(h)),this.panelEl.css(c.absPosition.TOP,t.getTop()),this.panelEl.css(c.absPosition.BOTTOM,t.getBottom()),this.panelEl.css(c.absPosition.LEFT,t.getLeft()),this.panelEl.css(c.absPosition.RIGHT,t.getRight()))},s.prototype._focusOnOpen=function(){if(this.config.focusOnOpen){var e=this;this._$rootScope.$$postDigest(function(){var t=e._$mdUtil.findFocusTarget(e.panelEl)||e.panelEl;t.focus()})}},s.prototype._createBackdrop=function(){if(this.config.hasBackdrop){if(!this._backdropRef){var e=this._$mdPanel.newPanelAnimation().openFrom(this.config.attachTo).withAnimation({open:"_md-opaque-enter",close:"_md-opaque-leave"});this.config.animation&&e.duration(this.config.animation._rawDuration);var t={animation:e,attachTo:this.config.attachTo,focusOnOpen:!1,panelClass:"_md-panel-backdrop",zIndex:this.config.zIndex-1};this._backdropRef=this._$mdPanel.create(t)}if(!this._backdropRef.isAttached)return this._backdropRef.attach()}},s.prototype._addEventListeners=function(){this._configureEscapeToClose(),this._configureClickOutsideToClose(),this._configureScrollListener()},s.prototype._removeEventListeners=function(){this._removeListeners&&this._removeListeners.forEach(function(e){e()}),this._removeListeners=[]},s.prototype._configureEscapeToClose=function(){if(this.config.escapeToClose){var e=m(this.config.attachTo),t=this,n=function(e){e.keyCode===t._$mdConstant.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),t.close(s.closeReasons.ESCAPE))};this.panelContainer.on("keydown",n),e.on("keydown",n),this._removeListeners.push(function(){t.panelContainer.off("keydown",n),e.off("keydown",n)})}},s.prototype._configureClickOutsideToClose=function(){if(this.config.clickOutsideToClose){var e,n=this.config.propagateContainerEvents?t.element(document.body):this.panelContainer,o=function(t){e=t.target},i=this,r=function(t){i.config.propagateContainerEvents?e===i.panelEl[0]||i.panelEl[0].contains(e)||i.close():e===n[0]&&t.target===n[0]&&(t.stopPropagation(),t.preventDefault(),i.close(s.closeReasons.CLICK_OUTSIDE))};n.on("mousedown",o),n.on("mouseup",r),this._removeListeners.push(function(){n.off("mousedown",o),n.off("mouseup",r)})}},s.prototype._configureScrollListener=function(){if(!this.config.disableParentScroll){var e=t.bind(this,this._updatePosition),n=this._$$rAF.throttle(e),o=this,i=function(){n()};this._$window.addEventListener("scroll",i,!0),this._removeListeners.push(function(){o._$window.removeEventListener("scroll",i,!0)})}},s.prototype._configureTrapFocus=function(){if(this.panelEl.attr("tabIndex","-1"),this.config.trapFocus){var e=this.panelEl;this._topFocusTrap=f.clone()[0],this._bottomFocusTrap=f.clone()[0];var t=function(){e.focus()};this._topFocusTrap.addEventListener("focus",t),this._bottomFocusTrap.addEventListener("focus",t),this._removeListeners.push(this._simpleBind(function(){this._topFocusTrap.removeEventListener("focus",t),this._bottomFocusTrap.removeEventListener("focus",t)},this)),e[0].parentNode.insertBefore(this._topFocusTrap,e[0]),e.after(this._bottomFocusTrap)}},s.prototype.updateAnimation=function(e){this.config.animation=e,this._backdropRef&&this._backdropRef.config.animation.duration(e._rawDuration)},s.prototype._animateOpen=function(){this.panelContainer.addClass("md-panel-is-showing");var e=this.config.animation;if(!e)return this.panelContainer.addClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=t._done(n,t),i=function(){t._$log.warn("mdPanel: MdPanel Animations failed. Showing panel without animating."),o()};e.animateOpen(t.panelEl).then(o,i)})},s.prototype._animateClose=function(){var e=this.config.animation;if(!e)return this.panelContainer.removeClass("md-panel-is-showing"),this.panelContainer.removeClass("_md-panel-shown"),this._$q.when(this);var t=this;return this._$q(function(n){var o=function(){t.panelContainer.removeClass("md-panel-is-showing"),n(t)},i=function(){t._$log.warn("mdPanel: MdPanel Animations failed. Hiding panel without animating."),o()};e.animateClose(t.panelEl).then(o,i)})},s.prototype.registerInterceptor=function(e,n){var o=null;if(t.isString(e)?t.isFunction(n)||(o="Interceptor callback must be a function, instead got "+typeof n):o="Interceptor type must be a string, instead got "+typeof e,o)throw new Error("MdPanel: "+o);var i=this._interceptors[e]=this._interceptors[e]||[];return i.indexOf(n)===-1&&i.push(n),this},s.prototype.removeInterceptor=function(e,t){var n=this._interceptors[e]?this._interceptors[e].indexOf(t):-1;return n>-1&&this._interceptors[e].splice(n,1),this},s.prototype.removeAllInterceptors=function(e){return e?this._interceptors[e]=[]:this._interceptors=Object.create(null),this},s.prototype._callInterceptors=function(e){var n=this,o=n._$q,i=n._interceptors&&n._interceptors[e]||[];return i.reduceRight(function(e,i){var r=i&&t.isFunction(i.then),a=r?i:null;return e.then(function(){if(!a)try{a=i(n)}catch(e){a=o.reject(e)}return a})},o.resolve(n))},s.prototype._simpleBind=function(e,t){return function(n){return e.apply(t,n)}},s.prototype._done=function(e,t){return function(){e(t)}},s.prototype.addToGroup=function(e){this._$mdPanel._groups[e]||this._$mdPanel.newPanelGroup(e);var t=this._$mdPanel._groups[e],n=t.panels.indexOf(this);n<0&&t.panels.push(this)},s.prototype.removeFromGroup=function(e){if(!this._$mdPanel._groups[e])throw new Error("mdPanel: The group "+e+" does not exist.");var t=this._$mdPanel._groups[e],n=t.panels.indexOf(this);n>-1&&t.panels.splice(n,1)},s.closeReasons={CLICK_OUTSIDE:"clickOutsideToClose",ESCAPE:"escapeToClose"},c.xPosition={CENTER:"center",ALIGN_START:"align-start",ALIGN_END:"align-end",OFFSET_START:"offset-start",OFFSET_END:"offset-end"},c.yPosition={CENTER:"center",ALIGN_TOPS:"align-tops",ALIGN_BOTTOMS:"align-bottoms",ABOVE:"above",BELOW:"below"},c.absPosition={TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},c.viewportMargin=8,c.prototype.absolute=function(){return this._absolute=!0,this},c.prototype._setPosition=function(e,n){if(e===c.absPosition.RIGHT||e===c.absPosition.LEFT)this._left=this._right="";else{if(e!==c.absPosition.BOTTOM&&e!==c.absPosition.TOP){var o=Object.keys(c.absPosition).join().toLowerCase();throw new Error("mdPanel: Position must be one of "+o+".")}this._top=this._bottom=""}return this["_"+e]=t.isString(n)?n:"0",this},c.prototype.top=function(e){return this._setPosition(c.absPosition.TOP,e)},c.prototype.bottom=function(e){return this._setPosition(c.absPosition.BOTTOM,e)},c.prototype.start=function(e){var t=this._isRTL?c.absPosition.RIGHT:c.absPosition.LEFT;return this._setPosition(t,e)},c.prototype.end=function(e){var t=this._isRTL?c.absPosition.LEFT:c.absPosition.RIGHT;return this._setPosition(t,e)},c.prototype.left=function(e){return this._setPosition(c.absPosition.LEFT,e)},c.prototype.right=function(e){return this._setPosition(c.absPosition.RIGHT,e)},c.prototype.centerHorizontally=function(){return this._left="50%",this._right="",this._translateX=["-50%"],this},c.prototype.centerVertically=function(){return this._top="50%",this._bottom="",this._translateY=["-50%"],this},c.prototype.center=function(){return this.centerHorizontally().centerVertically()},c.prototype.relativeTo=function(e){return this._absolute=!1,this._relativeToEl=m(e),this},c.prototype.addPanelPosition=function(e,t){if(!this._relativeToEl)throw new Error("mdPanel: addPanelPosition can only be used with relative positioning. Set relativeTo first.");return this._validateXPosition(e),this._validateYPosition(t),this._positions.push({x:e,y:t}),this},c.prototype._validateYPosition=function(e){if(null!=e){for(var t,n=Object.keys(c.yPosition),o=[],i=0;t=n[i];i++){var r=c.yPosition[t];if(o.push(r),r===e)return}throw new Error("mdPanel: Panel y position only accepts the following values:\n"+o.join(" | "))}},c.prototype._validateXPosition=function(e){if(null!=e){for(var t,n=Object.keys(c.xPosition),o=[],i=0;t=n[i];i++){var r=c.xPosition[t];if(o.push(r),r===e)return}throw new Error("mdPanel: Panel x Position only accepts the following values:\n"+o.join(" | "))}},c.prototype.withOffsetX=function(e){return this._translateX.push(e),this},c.prototype.withOffsetY=function(e){return this._translateY.push(e),this},c.prototype.getTop=function(){return this._top},c.prototype.getBottom=function(){return this._bottom},c.prototype.getLeft=function(){return this._left},c.prototype.getRight=function(){return this._right},c.prototype.getTransform=function(){var e=this._reduceTranslateValues("translateX",this._translateX),t=this._reduceTranslateValues("translateY",this._translateY);return(e+" "+t).trim()},c.prototype._setTransform=function(e){return e.css(this._$mdConstant.CSS.TRANSFORM,this.getTransform())},c.prototype._isOnscreen=function(e){var t=parseInt(this.getLeft()),n=parseInt(this.getTop());if(this._translateX.length||this._translateY.length){var o=this._$mdConstant.CSS.TRANSFORM,i=u(e,o);t+=i.x,n+=i.y}var r=t+e[0].offsetWidth,a=n+e[0].offsetHeight;return t>=0&&n>=0&&a<=this._$window.innerHeight&&r<=this._$window.innerWidth},c.prototype.getActualPosition=function(){return this._actualPosition},c.prototype._reduceTranslateValues=function(e,n){return n.map(function(n){var o=t.isFunction(n)?n(this):n;return e+"("+o+")"},this).join(" ")},c.prototype._setPanelPosition=function(e){if(e.removeClass("_md-panel-position-adjusted"),this._absolute)return void this._setTransform(e);if(this._actualPosition)return this._calculatePanelPosition(e,this._actualPosition),this._setTransform(e),void this._constrainToViewport(e);for(var t=0;t<this._positions.length;t++)if(this._actualPosition=this._positions[t],this._calculatePanelPosition(e,this._actualPosition),this._setTransform(e),this._isOnscreen(e))return;this._constrainToViewport(e)},c.prototype._constrainToViewport=function(e){var t=c.viewportMargin,n=this._top,o=this._left;if(this.getTop()){var i=parseInt(this.getTop()),r=e[0].offsetHeight+i,a=this._$window.innerHeight;i<t?this._top=t+"px":r>a&&(this._top=i-(r-a+t)+"px")}if(this.getLeft()){var d=parseInt(this.getLeft()),s=e[0].offsetWidth+d,l=this._$window.innerWidth;d<t?this._left=t+"px":s>l&&(this._left=d-(s-l+t)+"px")}e.toggleClass("_md-panel-position-adjusted",this._top!==n||this._left!==o)},c.prototype._reverseXPosition=function(e){if(e!==c.xPosition.CENTER){var t="start",n="end";return e.indexOf(t)>-1?e.replace(t,n):e.replace(n,t)}},c.prototype._bidi=function(e){return this._isRTL?this._reverseXPosition(e):e},c.prototype._calculatePanelPosition=function(e,t){var n=e[0].getBoundingClientRect(),o=n.width,i=n.height,r=this._relativeToEl[0].getBoundingClientRect(),a=r.left,d=r.right,s=r.width;switch(this._bidi(t.x)){case c.xPosition.OFFSET_START:this._left=a-o+"px";break;case c.xPosition.ALIGN_END:this._left=d-o+"px";break;case c.xPosition.CENTER:var l=a+.5*s-.5*o;this._left=l+"px";break;case c.xPosition.ALIGN_START:this._left=a+"px";break;case c.xPosition.OFFSET_END:this._left=d+"px"}var m=r.top,u=r.bottom,p=r.height;switch(t.y){case c.yPosition.ABOVE:this._top=m-i+"px";break;case c.yPosition.ALIGN_BOTTOMS:this._top=u-i+"px";break;case c.yPosition.CENTER:var h=m+.5*p-.5*i;this._top=h+"px";break;case c.yPosition.ALIGN_TOPS:this._top=m+"px";break;case c.yPosition.BELOW:this._top=u+"px"}},l.animation={SLIDE:"md-panel-animate-slide",SCALE:"md-panel-animate-scale",FADE:"md-panel-animate-fade"},l.prototype.openFrom=function(e){return e=e.target?e.target:e,this._openFrom=this._getPanelAnimationTarget(e),this._closeTo||(this._closeTo=this._openFrom),this},l.prototype.closeTo=function(e){return this._closeTo=this._getPanelAnimationTarget(e),this},l.prototype.duration=function(e){function n(e){if(t.isNumber(e))return e/1e3}return e&&(t.isNumber(e)?this._openDuration=this._closeDuration=n(e):t.isObject(e)&&(this._openDuration=n(e.open),this._closeDuration=n(e.close))),this._rawDuration=e,this},l.prototype._getPanelAnimationTarget=function(e){return t.isDefined(e.top)||t.isDefined(e.left)?{element:n,bounds:{top:e.top||0,left:e.left||0}}:this._getBoundingClientRect(m(e))},l.prototype.withAnimation=function(e){return this._animationClass=e,this},l.prototype.animateOpen=function(e){var n=this._$mdUtil.dom.animator;this._fixBounds(e);var o={},i=e[0].style.transform||"",r=n.toTransformCss(i),a=n.toTransformCss(i);switch(this._animationClass){case l.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-enter"};var d=n.calculateSlideToOrigin(e,this._openFrom)||"";r=n.toTransformCss(d+" "+i);break;case l.animation.SCALE:o={transitionInClass:"_md-panel-animate-enter"};var s=n.calculateZoomToOrigin(e,this._openFrom)||"";r=n.toTransformCss(s+" "+i);break;case l.animation.FADE:o={transitionInClass:"_md-panel-animate-enter"};break;default:o=t.isString(this._animationClass)?{transitionInClass:this._animationClass}:{transitionInClass:this._animationClass.open,transitionOutClass:this._animationClass.close}}return o.duration=this._openDuration,n.translate3d(e,r,a,o)},l.prototype.animateClose=function(e){var n=this._$mdUtil.dom.animator,o={},i=e[0].style.transform||"",r=n.toTransformCss(i),a=n.toTransformCss(i);switch(this._animationClass){case l.animation.SLIDE:e.css("opacity","1"),o={transitionInClass:"_md-panel-animate-leave"};var d=n.calculateSlideToOrigin(e,this._closeTo)||"";a=n.toTransformCss(d+" "+i);break;case l.animation.SCALE:o={transitionInClass:"_md-panel-animate-scale-out _md-panel-animate-leave"};var s=n.calculateZoomToOrigin(e,this._closeTo)||"";a=n.toTransformCss(s+" "+i);break;case l.animation.FADE:o={transitionInClass:"_md-panel-animate-fade-out _md-panel-animate-leave"};break;default:o=t.isString(this._animationClass)?{transitionOutClass:this._animationClass}:{transitionInClass:this._animationClass.close,transitionOutClass:this._animationClass.open}}return o.duration=this._closeDuration,n.translate3d(e,r,a,o)},l.prototype._fixBounds=function(e){var t=e[0].offsetWidth,n=e[0].offsetHeight;this._openFrom&&null==this._openFrom.bounds.height&&(this._openFrom.bounds.height=n),this._openFrom&&null==this._openFrom.bounds.width&&(this._openFrom.bounds.width=t),this._closeTo&&null==this._closeTo.bounds.height&&(this._closeTo.bounds.height=n),this._closeTo&&null==this._closeTo.bounds.width&&(this._closeTo.bounds.width=t)},l.prototype._getBoundingClientRect=function(e){if(e instanceof t.element)return{element:e,bounds:e[0].getBoundingClientRect()}}}(),function(){function e(e,n,o){function i(e,t,n){return e.attr("aria-valuemin",0),e.attr("aria-valuemax",100),e.attr("role","progressbar"),r}function r(o,i,r){function u(){r.$observe("value",function(e){var t=a(e);i.attr("aria-valuenow",t),h()!=l&&f($,t)}),r.$observe("mdBufferValue",function(e){f(E,a(e))}),r.$observe("disabled",function(e){b=e===!0||e===!1?!!e:t.isDefined(e),i.toggleClass(m,b),C.toggleClass(g,!b)}),r.$observe("mdMode",function(e){switch(g&&C.removeClass(g),e){case l:case c:case d:case s:C.addClass(g="md-mode-"+e);break;default:C.addClass(g="md-mode-"+s)}})}function p(){if(t.isUndefined(r.mdMode)){var e=t.isDefined(r.value),n=e?d:s;i.attr("md-mode",n),r.mdMode=n}}function h(){var e=(r.mdMode||"").trim();if(e)switch(e){case d:case s:case c:case l:break;default:e=s}return e}function f(e,o){if(!b&&h()){var i=n.supplant("translateX({0}%) scale({1},1)",[(o-100)/2,o/100]),r=v({transform:i});t.element(e).css(r)}}e(i);var g,b=r.hasOwnProperty("disabled"),v=n.dom.animator.toCss,E=t.element(i[0].querySelector(".md-bar1")),$=t.element(i[0].querySelector(".md-bar2")),C=t.element(i[0].querySelector(".md-container"));i.attr("md-mode",h()).toggleClass(m,b),p(),u()}function a(e){return Math.max(0,Math.min(e||0,100))}var d="determinate",s="indeterminate",c="buffer",l="query",m="_md-progress-linear-disabled";return{restrict:"E",template:'<div class="md-container"><div class="md-dashed"></div><div class="md-bar md-bar1"></div><div class="md-bar md-bar2"></div></div>',compile:i}}e.$inject=["$mdTheming","$mdUtil","$log"],t.module("material.components.progressLinear",["material.core"]).directive("mdProgressLinear",e)}(),function(){function e(e,n,o,i){function r(r,a,d,s){function c(){a.hasClass("md-focused")||a.addClass("md-focused")}function l(o){var i=o.which||o.keyCode;if(i==n.KEY_CODE.ENTER||o.currentTarget==o.target)switch(i){case n.KEY_CODE.LEFT_ARROW:case n.KEY_CODE.UP_ARROW:o.preventDefault(),m.selectPrevious(),c();break;case n.KEY_CODE.RIGHT_ARROW:case n.KEY_CODE.DOWN_ARROW:o.preventDefault(),m.selectNext(),c();break;case n.KEY_CODE.ENTER:var r=t.element(e.getClosest(a[0],"form"));r.length>0&&r.triggerHandler("submit")}}a.addClass("_md"),o(a);var m=s[0],u=s[1]||e.fakeNgModel();m.init(u),r.mouseActive=!1,a.attr({role:"radiogroup",tabIndex:a.attr("tabindex")||"0"}).on("keydown",l).on("mousedown",function(e){r.mouseActive=!0,i(function(){r.mouseActive=!1},100)}).on("focus",function(){r.mouseActive===!1&&m.$element.addClass("md-focused")}).on("blur",function(){m.$element.removeClass("md-focused")})}function a(e){this._radioButtonRenderFns=[],this.$element=e}function d(){return{init:function(e){this._ngModelCtrl=e,this._ngModelCtrl.$render=t.bind(this,this.render)},add:function(e){this._radioButtonRenderFns.push(e)},remove:function(e){var t=this._radioButtonRenderFns.indexOf(e);t!==-1&&this._radioButtonRenderFns.splice(t,1)},render:function(){this._radioButtonRenderFns.forEach(function(e){e()})},setViewValue:function(e,t){this._ngModelCtrl.$setViewValue(e,t),this.render()},getViewValue:function(){return this._ngModelCtrl.$viewValue},selectNext:function(){return s(this.$element,1)},selectPrevious:function(){return s(this.$element,-1)},setActiveDescendant:function(e){this.$element.attr("aria-activedescendant",e)},isDisabled:function(){return this.$element[0].hasAttribute("disabled")}}}function s(n,o){var i=e.iterator(n[0].querySelectorAll("md-radio-button"),!0);if(i.count()){var r=function(e){return!t.element(e).attr("disabled")},a=n[0].querySelector("md-radio-button.md-checked"),d=i[o<0?"previous":"next"](a,r)||i.first();t.element(d).triggerHandler("click")}}return a.prototype=d(),{restrict:"E",controller:["$element",a],require:["mdRadioGroup","?ngModel"],link:{pre:r}}}function n(e,t,n){function o(o,r,a,d){function s(){if(!d)throw"RadioButton: No RadioGroupController could be found.";d.add(l),a.$observe("value",l),r.on("click",c).on("$destroy",function(){d.remove(l)})}function c(e){r[0].hasAttribute("disabled")||d.isDisabled()||o.$apply(function(){d.setViewValue(a.value,e&&e.type)})}function l(){var e=d.getViewValue()==a.value;e!==u&&("md-radio-group"!==r[0].parentNode.nodeName.toLowerCase()&&r.parent().toggleClass(i,e),e&&d.setActiveDescendant(r.attr("id")),u=e,r.attr("aria-checked",e).toggleClass(i,e))}function m(n,o){n.attr({id:a.id||"radio_"+t.nextUid(),role:"radio","aria-checked":"false"}),e.expectWithText(n,"aria-label")}var u;n(r),m(r,o),a.ngValue?t.nextTick(s,!1):s()}var i="md-checked";return{restrict:"E",require:"^mdRadioGroup",transclude:!0,template:'<div class="md-container" md-ink-ripple md-ink-ripple-checkbox><div class="md-off"></div><div class="md-on"></div></div><div ng-transclude class="md-label"></div>',link:o}}e.$inject=["$mdUtil","$mdConstant","$mdTheming","$timeout"],n.$inject=["$mdAria","$mdUtil","$mdTheming"],t.module("material.components.radioButton",["material.core"]).directive("mdRadioGroup",e).directive("mdRadioButton",n)}(),function(){function e(e,t){return["$mdUtil","$window",function(n,o){return{restrict:"A",multiElement:!0,link:function(i,r,a){var d=i.$on("$md-resize-enable",function(){d();var s=r[0],c=s.nodeType===o.Node.ELEMENT_NODE?o.getComputedStyle(s):{};i.$watch(a[e],function(e){if(!!e===t){n.nextTick(function(){i.$broadcast("$md-resize")});var o={cachedTransitionStyles:c};n.dom.animator.waitTransitionEnd(r,o).then(function(){i.$broadcast("$md-resize")})}})})}}}]}t.module("material.components.showHide",["material.core"]).directive("ngShow",e("ngShow",!0)).directive("ngHide",e("ngHide",!1))}(),function(){function e(e,o,i,r){function a(e,n){var r=function(){return!1},a=function(){return i.when(o.supplant(c,[n||""]))};return t.extend({isLockedOpen:r,isOpen:r,toggle:a,open:a,close:a,onClose:t.noop,then:function(e){return s(n).then(e||t.noop)}},e)}function d(t,i){var a=e.get(t);return a||i?a:(r.error(o.supplant(c,[t||""])),n)}function s(t){return e.when(t)["catch"](r.error)}var c="SideNav '{0}' is not available! Did you use md-component-id='{0}'?",l={find:d,waitFor:s};return function(e,n){if(t.isUndefined(e))return l;var o=n===!0,i=l.find(e,o);return!i&&o?l.waitFor(e):!i&&t.isUndefined(n)?a(l,e):i}}function o(){return{restrict:"A",require:"^mdSidenav",link:function(e,t,n,o){}}}function i(e,o,i,r,a,d,s,c,l,m,u,p,h){function f(s,f,g,b){function v(e,t){s.isLockedOpen=e,e===t?f.toggleClass("md-locked-open",!!e):d[e?"addClass":"removeClass"](f,"md-locked-open"),w&&w.toggleClass("md-locked-open",!!e)}function E(e){var t=o.findFocusTarget(f)||o.findFocusTarget(f,"[md-sidenav-focus]")||f,n=f.parent();n[e?"on":"off"]("keydown",M),w&&w[e?"on":"off"]("click",T);var i=$(n,e);return e&&(N=u[0].activeElement,k=a.getLastInteractionType()),C(e),S=m.all([e&&w?d.enter(w,n):w?d.leave(w):m.when(!0),d[e?"removeClass":"addClass"](f,"md-closed")]).then(function(){s.isOpen&&(h(function(){I.triggerHandler("resize")}),t&&t.focus()),i&&i()})}function $(e,t){var n=f[0],o=e[0].scrollTop;if(t&&o){_={top:n.style.top,bottom:n.style.bottom,height:n.style.height};var i={
top:o+"px",bottom:"auto",height:e[0].clientHeight+"px"};f.css(i),w.css(i)}if(!t&&_)return function(){n.style.top=_.top,n.style.bottom=_.bottom,n.style.height=_.height,w[0].style.top=null,w[0].style.bottom=null,w[0].style.height=null,_=null}}function C(e){e&&!A?(A=x.css("overflow"),x.css("overflow","hidden")):t.isDefined(A)&&(x.css("overflow",A),A=n)}function y(e){return s.isOpen==e?m.when(!0):(s.isOpen&&b.onCloseCb&&b.onCloseCb(),m(function(t){s.isOpen=e,o.nextTick(function(){S.then(function(e){!s.isOpen&&N&&"keyboard"===k&&(N.focus(),N=null),t(e)})})}))}function M(e){var t=e.keyCode===i.KEY_CODE.ESCAPE;return t?T(e):m.when(!0)}function T(e){return e.preventDefault(),b.close()}var A,w,k,_,x=null,N=null,S=m.when(!0),D=c(g.mdIsLockedOpen),I=t.element(p),H=function(){return D(s.$parent,{$media:function(t){return l.warn("$media is deprecated for is-locked-open. Use $mdMedia instead."),e(t)},$mdMedia:e})};g.mdDisableScrollTarget&&(x=u[0].querySelector(g.mdDisableScrollTarget),x?x=t.element(x):l.warn(o.supplant('mdSidenav: couldn\'t find element matching selector "{selector}". Falling back to parent.',{selector:g.mdDisableScrollTarget}))),x||(x=f.parent()),g.hasOwnProperty("mdDisableBackdrop")||(w=o.createBackdrop(s,"md-sidenav-backdrop md-opaque ng-enter")),f.addClass("_md"),r(f),w&&r.inherit(w,f),f.on("$destroy",function(){w&&w.remove(),b.destroy()}),s.$on("$destroy",function(){w&&w.remove()}),s.$watch(H,v),s.$watch("isOpen",E),b.$toggleOpen=y}return{restrict:"E",scope:{isOpen:"=?mdIsOpen"},controller:"$mdSidenavController",compile:function(e){return e.addClass("md-closed").attr("tabIndex","-1"),f}}}function r(e,t,n,o,i){var r=this;r.isOpen=function(){return!!e.isOpen},r.isLockedOpen=function(){return!!e.isLockedOpen},r.onClose=function(e){return r.onCloseCb=e,r},r.open=function(){return r.$toggleOpen(!0)},r.close=function(){return r.$toggleOpen(!1)},r.toggle=function(){return r.$toggleOpen(!e.isOpen)},r.$toggleOpen=function(t){return o.when(e.isOpen=t)};var a=t.mdComponentId,d=a&&a.indexOf(i.startSymbol())>-1,s=d?i(a)(e.$parent):a;r.destroy=n.register(r,s),d&&t.$observe("mdComponentId",function(e){e&&e!==r.$$mdHandle&&(r.destroy(),r.destroy=n.register(r,e))})}e.$inject=["$mdComponentRegistry","$mdUtil","$q","$log"],i.$inject=["$mdMedia","$mdUtil","$mdConstant","$mdTheming","$mdInteraction","$animate","$compile","$parse","$log","$q","$document","$window","$$rAF"],r.$inject=["$scope","$attrs","$mdComponentRegistry","$q","$interpolate"],t.module("material.components.sidenav",["material.core","material.components.backdrop"]).factory("$mdSidenav",e).directive("mdSidenav",i).directive("mdSidenavFocus",o).controller("$mdSidenavController",r)}(),function(){function o(e,o,i,r,a,d,s,l){function m(l,m){var u=t.element("<md-select-value><span></span></md-select-value>");if(u.append('<span class="md-select-icon" aria-hidden="true"></span>'),u.addClass("md-select-value"),u[0].hasAttribute("id")||u.attr("id","select_value_label_"+o.nextUid()),l.find("md-content").length||l.append(t.element("<md-content>").append(l.contents())),m.mdOnOpen&&(l.find("md-content").prepend(t.element('<div> <md-progress-circular md-mode="indeterminate" ng-if="$$loadingAsyncDone === false" md-diameter="25px"></md-progress-circular></div>')),l.find("md-option").attr("ng-show","$$loadingAsyncDone")),m.name){var p=t.element('<select class="md-visually-hidden">');p.attr({name:m.name,"aria-hidden":"true",tabindex:"-1"});var h=l.find("md-option");t.forEach(h,function(e){var n=t.element("<option>"+e.innerHTML+"</option>");e.hasAttribute("ng-value")?n.attr("ng-value",e.getAttribute("ng-value")):e.hasAttribute("value")&&n.attr("value",e.getAttribute("value")),p.append(n)}),p.append('<option ng-value="'+m.ngModel+'" selected></option>'),l.parent().append(p)}var f=o.parseAttributeBoolean(m.multiple),g=f?"multiple":"",b='<div class="md-select-menu-container" aria-hidden="true"><md-select-menu {0}>{1}</md-select-menu></div>';return b=o.supplant(b,[g,l.html()]),l.empty().append(u),l.append(b),m.tabindex||m.$set("tabindex",0),function(l,m,u,p){function h(){var e=m.attr("aria-label")||m.attr("placeholder");!e&&A&&A.label&&(e=A.label.text()),M=e,a.expect(m,"aria-label",e)}function g(){I&&(O=O||I.find("md-select-menu").controller("mdSelectMenu"),w.setLabelText(O.selectedLabels()))}function b(){if(M){var e=O.selectedLabels({mode:"aria"});m.attr("aria-label",e.length?M+": "+e:M)}}function v(){A&&A.setHasValue(O.selectedLabels().length>0||(m[0].validity||{}).badInput)}function E(){if(I=t.element(m[0].querySelector(".md-select-menu-container")),H=l,u.mdContainerClass){var e=I[0].getAttribute("class")+" "+u.mdContainerClass;I[0].setAttribute("class",e)}O=I.find("md-select-menu").controller("mdSelectMenu"),O.init(k,u.ngModel),m.on("$destroy",function(){I.remove()})}function $(e){if(i.isNavigationKey(e))e.preventDefault(),C(e);else if(c(e,i)){e.preventDefault();var n=O.optNodeForKeyboardSearch(e);if(!n||n.hasAttribute("disabled"))return;var o=t.element(n).controller("mdOption");O.isMultiple||O.deselect(Object.keys(O.selected)[0]),O.select(o.hashKey,o.value),O.refreshViewValue()}}function C(){H._mdSelectIsOpen=!0,m.attr("aria-expanded","true"),e.show({scope:H,preserveScope:!0,skipCompile:!0,element:I,target:m[0],selectCtrl:w,preserveElement:!0,hasBackdrop:!0,loadingAsync:!!u.mdOnOpen&&(l.$eval(u.mdOnOpen)||!0)})["finally"](function(){H._mdSelectIsOpen=!1,m.focus(),m.attr("aria-expanded","false"),k.$setTouched()})}var y,M,T=!0,A=p[0],w=p[1],k=p[2],_=p[3],x=m.find("md-select-value"),N=t.isDefined(u.readonly),S=o.parseAttributeBoolean(u.mdNoAsterisk);if(S&&m.addClass("md-no-asterisk"),A){var D=A.isErrorGetter||function(){return k.$invalid&&(k.$touched||_&&_.$submitted)};if(A.input&&m.find("md-select-header").find("input")[0]!==A.input[0])throw new Error("<md-input-container> can only have *one* child <input>, <textarea> or <select> element!");A.input=m,A.label||a.expect(m,"aria-label",m.attr("placeholder")),l.$watch(D,A.setInvalid)}var I,H,O;E(),r(m),_&&t.isDefined(u.multiple)&&o.nextTick(function(){var e=k.$modelValue||k.$viewValue;e&&_.$setPristine()});var P=k.$render;k.$render=function(){P(),g(),b(),v()},u.$observe("placeholder",k.$render),A&&A.label&&u.$observe("required",function(e){A.label.toggleClass("md-required",e&&!S)}),w.setLabelText=function(e){w.setIsPlaceholder(!e);var t=!1;if(u.mdSelectedText&&u.mdSelectedHtml)throw Error("md-select cannot have both `md-selected-text` and `md-selected-html`");if(u.mdSelectedText||u.mdSelectedHtml)e=d(u.mdSelectedText||u.mdSelectedHtml)(l),t=!0;else if(!e){var n=u.placeholder||(A&&A.label?A.label.text():"");e=n||"",t=!0}var o=x.children().eq(0);u.mdSelectedHtml?o.html(s.getTrustedHtml(e)):t?o.text(e):o.html(e)},w.setIsPlaceholder=function(e){e?(x.addClass("md-select-placeholder"),A&&A.label&&A.label.addClass("md-placeholder")):(x.removeClass("md-select-placeholder"),A&&A.label&&A.label.removeClass("md-placeholder"))},N||(m.on("focus",function(e){A&&A.setFocused(!0)}),m.on("blur",function(e){T&&(T=!1,H._mdSelectIsOpen&&e.stopImmediatePropagation()),H._mdSelectIsOpen||(A&&A.setFocused(!1),v())})),w.triggerClose=function(){d(u.mdOnClose)(l)},l.$$postDigest(function(){h(),g(),b()}),l.$watch(function(){return O.selectedLabels()},g);var L;u.$observe("ngMultiple",function(e){L&&L();var t=d(e);L=l.$watch(function(){return t(l)},function(e,t){e===n&&t===n||(e?m.attr("multiple","multiple"):m.removeAttr("multiple"),m.attr("aria-multiselectable",e?"true":"false"),I&&(O.setMultiple(e),P=k.$render,k.$render=function(){P(),g(),b(),v()},k.$render()))})}),u.$observe("disabled",function(e){t.isString(e)&&(e=!0),y!==n&&y===e||(y=e,e?m.attr({"aria-disabled":"true"}).removeAttr("tabindex").off("click",C).off("keydown",$):m.attr({tabindex:u.tabindex,"aria-disabled":"false"}).on("click",C).on("keydown",$))}),u.hasOwnProperty("disabled")||u.hasOwnProperty("ngDisabled")||(m.attr({"aria-disabled":"false"}),m.on("click",C),m.on("keydown",$));var R={role:"listbox","aria-expanded":"false","aria-multiselectable":f&&!u.ngMultiple?"true":"false"};m[0].hasAttribute("id")||(R.id="select_"+o.nextUid());var F="select_container_"+o.nextUid();I.attr("id",F),R["aria-owns"]=F,m.attr(R),l.$on("$destroy",function(){e.destroy()["finally"](function(){A&&(A.setFocused(!1),A.setHasValue(!1),A.input=null),k.$setTouched()})})}}var u=i.KEY_CODE;[u.SPACE,u.ENTER,u.UP_ARROW,u.DOWN_ARROW];return{restrict:"E",require:["^?mdInputContainer","mdSelect","ngModel","?^form"],compile:m,controller:function(){}}}function i(e,o,i,r){function a(e,n,i,a){function d(e){13!=e.keyCode&&32!=e.keyCode||s(e)}function s(n){var i=o.getClosest(n.target,"md-option"),r=i&&t.element(i).data("$mdOptionController");if(i&&r){if(i.hasAttribute("disabled"))return n.stopImmediatePropagation(),!1;var a=c.hashGetter(r.value),d=t.isDefined(c.selected[a]);e.$apply(function(){c.isMultiple?d?c.deselect(a):c.select(a,r.value):d||(c.deselect(Object.keys(c.selected)[0]),c.select(a,r.value)),c.refreshViewValue()})}}var c=a[0];n.addClass("_md"),r(n),n.on("click",s),n.on("keypress",d)}function d(r,a,d){function s(){var e=l.ngModel.$modelValue||l.ngModel.$viewValue||[];if(t.isArray(e)){var n=Object.keys(l.selected),o=e.map(l.hashGetter),i=n.filter(function(e){return o.indexOf(e)===-1});i.forEach(l.deselect),o.forEach(function(t,n){l.select(t,e[n])})}}function c(){var e=l.ngModel.$viewValue||l.ngModel.$modelValue;Object.keys(l.selected).forEach(l.deselect),l.select(l.hashGetter(e),e)}var l=this;l.isMultiple=t.isDefined(a.multiple),l.selected={},l.options={},r.$watchCollection(function(){return l.options},function(){l.ngModel.$render()});var u,p;l.setMultiple=function(e){function n(e,n){return t.isArray(e||n||[])}var o=l.ngModel;p=p||o.$isEmpty,l.isMultiple=e,u&&u(),l.isMultiple?(o.$validators["md-multiple"]=n,o.$render=s,r.$watchCollection(l.modelBinding,function(e){n(e)&&s(e),l.ngModel.$setPristine()}),o.$isEmpty=function(e){return!e||0===e.length}):(delete o.$validators["md-multiple"],o.$render=c)};var h,f,g,b="",v=300;l.optNodeForKeyboardSearch=function(e){h&&clearTimeout(h),h=setTimeout(function(){h=n,b="",g=n,f=n},v);var o=e.keyCode-(i.isNumPadKey(e)?48:0);b+=String.fromCharCode(o);var r=new RegExp("^"+b,"i");f||(f=d.find("md-option"),g=new Array(f.length),t.forEach(f,function(e,t){g[t]=e.textContent.trim()}));for(var a=0;a<g.length;++a)if(r.test(g[a]))return f[a]},l.init=function(n,i){l.ngModel=n,l.modelBinding=i,l.ngModel.$isEmpty=function(e){return!l.options[l.hashGetter(e)]};var a=o.getModelOption(n,"trackBy");if(a){var d={},s=e(a);l.hashGetter=function(e,t){return d.$value=e,s(t||r,d)}}else l.hashGetter=function(e){return t.isObject(e)?"object_"+(e.$$mdSelectId||(e.$$mdSelectId=++m)):e};l.setMultiple(l.isMultiple)},l.selectedLabels=function(e){e=e||{};var t=e.mode||"html",n=o.nodesToArray(d[0].querySelectorAll("md-option[selected]"));if(n.length){var i;return"html"==t?i=function(e){if(e.hasAttribute("md-option-empty"))return"";var t=e.innerHTML,n=e.querySelector(".md-ripple-container");n&&(t=t.replace(n.outerHTML,""));var o=e.querySelector(".md-container");return o&&(t=t.replace(o.outerHTML,"")),t}:"aria"==t&&(i=function(e){return e.hasAttribute("aria-label")?e.getAttribute("aria-label"):e.textContent}),o.uniq(n.map(i)).join(", ")}return""},l.select=function(e,t){var n=l.options[e];n&&n.setSelected(!0),l.selected[e]=t},l.deselect=function(e){var t=l.options[e];t&&t.setSelected(!1),delete l.selected[e]},l.addOption=function(e,n){if(t.isDefined(l.options[e]))throw new Error('Duplicate md-option values are not allowed in a select. Duplicate value "'+n.value+'" found.');l.options[e]=n,t.isDefined(l.selected[e])&&(l.select(e,n.value),t.isDefined(l.ngModel.$modelValue)&&l.hashGetter(l.ngModel.$modelValue)===e&&l.ngModel.$validate(),l.refreshViewValue())},l.removeOption=function(e){delete l.options[e]},l.refreshViewValue=function(){var e,n=[];for(var i in l.selected)(e=l.options[i])?n.push(e.value):n.push(l.selected[i]);var r=o.getModelOption(l.ngModel,"trackBy"),a=l.isMultiple?n:n[0],d=l.ngModel.$modelValue;(r?t.equals(d,a):d+""===a)||(l.ngModel.$setViewValue(a),l.ngModel.$render())}}return d.$inject=["$scope","$attrs","$element"],{restrict:"E",require:["mdSelectMenu"],scope:!1,controller:d,link:{pre:a}}}function r(e,n,o){function i(e,n){return e.append(t.element('<div class="md-text">').append(e.contents())),e.attr("tabindex",n.tabindex||"0"),r(n)||e.attr("md-option-empty",""),a}function r(e){var t=e.value,n=e.ngValue;return t||n}function a(i,r,a,d){function s(e,t,n){if(!m.hashGetter)return void(n||i.$$postDigest(function(){s(e,t,!0)}));var o=m.hashGetter(t,i),r=m.hashGetter(e,i);l.hashKey=r,l.value=e,m.removeOption(o,l),m.addOption(r,l)}function c(){var e={role:"option","aria-selected":"false"};r[0].hasAttribute("id")||(e.id="select_option_"+n.nextUid()),r.attr(e)}var l=d[0],m=d[1];o(r),m.isMultiple&&(r.addClass("md-checkbox-enabled"),r.prepend(u.clone())),t.isDefined(a.ngValue)?i.$watch(a.ngValue,s):t.isDefined(a.value)?s(a.value):i.$watch(function(){return r.text().trim()},s),a.$observe("disabled",function(e){e?r.attr("tabindex","-1"):r.attr("tabindex","0")}),i.$$postDigest(function(){a.$observe("selected",function(e){t.isDefined(e)&&("string"==typeof e&&(e=!0),e?(m.isMultiple||m.deselect(Object.keys(m.selected)[0]),m.select(l.hashKey,l.value)):m.deselect(l.hashKey),m.refreshViewValue())})}),e.attach(i,r),c(),i.$on("$destroy",function(){m.removeOption(l.hashKey,l)})}function d(e){this.selected=!1,this.setSelected=function(t){t&&!this.selected?e.attr({selected:"selected","aria-selected":"true"}):!t&&this.selected&&(e.removeAttr("selected"),e.attr("aria-selected","false")),this.selected=t}}return d.$inject=["$element"],{restrict:"E",require:["mdOption","^^mdSelectMenu"],controller:d,compile:i}}function a(){function e(e,n){function o(){return e.parent().find("md-select-header").length}function i(){var o=e.find("label");o.length||(o=t.element("<label>"),e.prepend(o)),o.addClass("md-container-ignore"),n.label&&o.text(n.label)}o()||i()}return{restrict:"E",compile:e}}function d(){return{restrict:"E"}}function s(o){function i(o,i,m,u,p,h,f,g,b){function v(e,t,n){function o(){return f(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),t.attr("aria-hidden","true"),t[0].style.display="none",$(n),!n.$destroy&&n.restoreFocus&&n.target.focus()}return n=n||{},n.cleanupInteraction(),n.cleanupResizing(),n.hideBackdrop(),n.$destroy===!0?i():o().then(i)}function E(e,r,a){function d(e,t,n){return n.parent.append(t),p(function(e,n){try{f(t,{removeClass:"md-leave",duration:0}).start().then(s).then(e)}catch(o){n(o)}})}function s(){return p(function(t){if(a.isRemoved)return p.reject(!1);var n=C(e,r,a);n.container.element.css(M.toCss(n.container.styles)),n.dropDown.element.css(M.toCss(n.dropDown.styles)),h(function(){r.addClass("md-active"),n.dropDown.element.css(M.toCss({transform:""})),v(a.focusedNode),t()})})}function l(e,t,n){return n.disableParentScroll&&!m.getClosest(n.target,"MD-DIALOG")?n.restoreScroll=m.disableScrollAround(n.element,n.parent):n.disableParentScroll=!1,n.hasBackdrop&&(n.backdrop=m.createBackdrop(e,"md-select-backdrop md-click-catcher"),g.enter(n.backdrop,b[0].body,null,{duration:0})),function(){n.backdrop&&n.backdrop.remove(),n.disableParentScroll&&n.restoreScroll(),delete n.restoreScroll}}function v(e){e&&!e.hasAttribute("disabled")&&e.focus()}function E(e,n){var o=r.find("md-select-menu");if(!n.target)throw new Error(m.supplant(y,[n.target]));t.extend(n,{isRemoved:!1,target:t.element(n.target),parent:t.element(n.parent),selectEl:o,contentEl:r.find("md-content"),optionNodes:o[0].getElementsByTagName("md-option")})}function $(){var n=function(e,t,n){return function(){if(!n.isRemoved){var o=C(e,t,n),i=o.container,r=o.dropDown;i.element.css(M.toCss(i.styles)),r.element.css(M.toCss(r.styles))}}}(e,r,a),o=t.element(u);return o.on("resize",n),o.on("orientationchange",n),function(){o.off("resize",n),o.off("orientationchange",n)}}function A(){a.loadingAsync&&!a.isRemoved&&(e.$$loadingAsyncDone=!1,p.when(a.loadingAsync).then(function(){e.$$loadingAsyncDone=!0,delete a.loadingAsync}).then(function(){h(s)}))}function w(){function e(e){e.preventDefault(),e.stopPropagation(),a.restoreFocus=!1,m.nextTick(o.hide,!0)}function t(e){switch(e.preventDefault(),e.stopPropagation(),e.keyCode){case T.UP_ARROW:return l();case T.DOWN_ARROW:return s();case T.SPACE:case T.ENTER:var t=m.getClosest(e.target,"md-option");t&&(p.triggerHandler({type:"click",target:t}),e.preventDefault()),u(e);break;case T.TAB:case T.ESCAPE:e.stopPropagation(),e.preventDefault(),a.restoreFocus=!0,m.nextTick(o.hide,!0);break;default:if(c(e,i)){var n=p.controller("mdSelectMenu").optNodeForKeyboardSearch(e);a.focusedNode=n||a.focusedNode,n&&n.focus()}}}function d(e){var t,o=m.nodesToArray(a.optionNodes),i=o.indexOf(a.focusedNode);do i===-1?i=0:"next"===e&&i<o.length-1?i++:"prev"===e&&i>0&&i--,t=o[i],t.hasAttribute("disabled")&&(t=n);while(!t&&i<o.length-1&&i>0);t&&t.focus(),a.focusedNode=t}function s(){d("next")}function l(){d("prev")}function u(e){function t(){var t=!1;if(e&&e.currentTarget.children.length>0){var n=e.currentTarget.children[0],o=n.scrollHeight>n.clientHeight;if(o&&n.children.length>0){var i=e.pageX-e.currentTarget.getBoundingClientRect().left;i>n.querySelector("md-option").offsetWidth&&(t=!0)}}return t}if(!(e&&"click"==e.type&&e.currentTarget!=p[0]||t())){var n=m.getClosest(e.target,"md-option");n&&n.hasAttribute&&!n.hasAttribute("disabled")&&(e.preventDefault(),e.stopPropagation(),h.isMultiple||(a.restoreFocus=!0,m.nextTick(function(){o.hide(h.ngModel.$viewValue)},!0)))}}if(!a.isRemoved){var p=a.selectEl,h=p.controller("mdSelectMenu")||{};return r.addClass("md-clickable"),a.backdrop&&a.backdrop.on("click",e),p.on("keydown",t),p.on("click",u),function(){a.backdrop&&a.backdrop.off("click",e),p.off("keydown",t),p.off("click",u),r.removeClass("md-clickable"),a.isRemoved=!0}}}return A(),E(e,a),a.hideBackdrop=l(e,r,a),d(e,r,a).then(function(e){return r.attr("aria-hidden","false"),a.alreadyOpen=!0,a.cleanupInteraction=w(),a.cleanupResizing=$(),e},a.hideBackdrop)}function $(e){var t=e.selectCtrl;if(t){var n=e.selectEl.controller("mdSelectMenu");t.setLabelText(n?n.selectedLabels():""),t.triggerClose()}}function C(n,o,i){var c,p=o[0],h=i.target[0].children[0],f=b[0].body,g=i.selectEl[0],v=i.contentEl[0],E=f.getBoundingClientRect(),$=h.getBoundingClientRect(),C=!1,y={left:E.left+l,top:l,bottom:E.height-l,right:E.width-l-(m.floatingScrollbars()?16:0)},M={top:$.top-y.top,left:$.left-y.left,right:y.right-($.left+$.width),bottom:y.bottom-($.top+$.height)},T=E.width-2*l,A=g.querySelector("md-option[selected]"),w=g.getElementsByTagName("md-option"),k=g.getElementsByTagName("md-optgroup"),_=s(o,v),x=r(i.loadingAsync);c=x?v.firstElementChild||v:A?A:k.length?k[0]:w.length?w[0]:v.firstElementChild||v,v.offsetWidth>T?v.style["max-width"]=T+"px":v.style.maxWidth=null,C&&(v.style["min-width"]=$.width+"px"),_&&g.classList.add("md-overflow");var N=c;"MD-OPTGROUP"===(N.tagName||"").toUpperCase()&&(N=w[0]||v.firstElementChild||v,c=N),i.focusedNode=N,p.style.display="block";var S=g.getBoundingClientRect(),D=d(c);if(c){var I=u.getComputedStyle(c);D.paddingLeft=parseInt(I.paddingLeft,10)||0,D.paddingRight=parseInt(I.paddingRight,10)||0}if(_){var H=v.offsetHeight/2;v.scrollTop=D.top+D.height/2-H,M.top<H?v.scrollTop=Math.min(D.top,v.scrollTop+H-M.top):M.bottom<H&&(v.scrollTop=Math.max(D.top+D.height-S.height,v.scrollTop-H+M.bottom))}var O,P,L,R,F;C?(O=$.left,P=$.top+$.height,L="50% 0",P+S.height>y.bottom&&(P=$.top-S.height,L="50% 100%")):(O=$.left+D.left-D.paddingLeft+2,P=Math.floor($.top+$.height/2-D.height/2-D.top+v.scrollTop)+2,L=D.left+$.width/2+"px "+(D.top+D.height/2-v.scrollTop)+"px 0px",R=Math.min($.width+D.paddingLeft+D.paddingRight,T),F=e.getComputedStyle(h)["font-size"]);var B=p.getBoundingClientRect(),j=Math.round(100*Math.min($.width/S.width,1))/100,U=Math.round(100*Math.min($.height/S.height,1))/100;return{container:{element:t.element(p),styles:{left:Math.floor(a(y.left,O,y.right-B.width)),top:Math.floor(a(y.top,P,y.bottom-B.height)),"min-width":R,"font-size":F}},dropDown:{element:t.element(g),styles:{transformOrigin:L,transform:i.alreadyOpen?"":m.supplant("scale({0},{1})",[j,U])}}}}var y="$mdSelect.show() expected a target element in options.target but got '{0}'!",M=m.dom.animator,T=i.KEY_CODE;return{parent:"body",themable:!0,onShow:E,onRemove:v,hasBackdrop:!0,disableParentScroll:!0}}function r(e){return e&&t.isFunction(e.then)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function d(e){return e?{left:e.offsetLeft,top:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}:{left:0,top:0,width:0,height:0}}function s(e,t){var n=!1;try{var o=e[0].style.display;e[0].style.display="block",n=t.scrollHeight>t.offsetHeight,e[0].style.display=o}finally{}return n}return i.$inject=["$mdSelect","$mdConstant","$mdUtil","$window","$q","$$rAF","$animateCss","$animate","$document"],o("$mdSelect").setDefaults({methods:["target"],options:i})}function c(e,t){var n=String.fromCharCode(e.keyCode),o=e.keyCode<=31;return n&&n.length&&!o&&!t.isMetaKey(e)&&!t.isFnLockKey(e)&&!t.hasModifierKey(e)}o.$inject=["$mdSelect","$mdUtil","$mdConstant","$mdTheming","$mdAria","$parse","$sce","$injector"],i.$inject=["$parse","$mdUtil","$mdConstant","$mdTheming"],r.$inject=["$mdButtonInkRipple","$mdUtil","$mdTheming"],s.$inject=["$$interimElementProvider"];var l=8,m=0,u=t.element('<div class="md-container"><div class="md-icon"></div></div>');t.module("material.components.select",["material.core","material.components.backdrop"]).directive("mdSelect",o).directive("mdSelectMenu",i).directive("mdOption",r).directive("mdOptgroup",a).directive("mdSelectHeader",d).provider("$mdSelect",s)}(),function(){function e(){return{controller:function(){},compile:function(e){var o=e.find("md-slider");if(o){var i=o.attr("md-vertical");return i!==n&&e.attr("md-vertical",""),o.attr("flex")||o.attr("flex",""),function(e,n,o,i){function r(e){n.children().attr("disabled",e),n.find("input").attr("disabled",e)}n.addClass("_md");var a=t.noop;o.disabled?r(!0):o.ngDisabled&&(a=e.$watch(o.ngDisabled,function(e){r(e)})),e.$on("$destroy",function(){a()});var d;i.fitInputWidthToTextLength=function(e){var t=n[0].querySelector("md-input-container");if(t){var o=getComputedStyle(t),i=parseInt(o.minWidth),r=2*parseInt(o.padding);d=d||parseInt(o.maxWidth);var a=Math.max(d,i+r+i/2*e);t.style.maxWidth=a+"px"}}}}}}}function o(e,n,o,i,r,a,d,s,c,l){function m(e,n){var i=t.element(e[0].getElementsByClassName("md-slider-wrapper")),r=n.tabindex||0;return i.attr("tabindex",r),(n.disabled||n.ngDisabled)&&i.attr("tabindex",-1),i.attr("role","slider"),o.expect(e,"aria-label"),u}function u(o,m,u,p){function h(){y(),x()}function f(e){se=parseFloat(e),m.attr("aria-valuemin",e),h()}function g(e){ce=parseFloat(e),m.attr("aria-valuemax",e),h()}function b(e){le=parseFloat(e)}function v(e){me=N(parseInt(e),0,6)}function E(){m.attr("aria-disabled",!!Y())}function $(){if(ie&&!Y()&&!t.isUndefined(le)){if(le<=0){var e="Slider step value must be greater than zero when in discrete mode";throw c.error(e),new Error(e)}var o=Math.floor((ce-se)/le);ue||(ue=t.element("<canvas>").css("position","absolute"),J.append(ue),pe=ue[0].getContext("2d"));var i=M();!i||i.height||i.width||(y(),i=he),ue[0].width=i.width,ue[0].height=i.height;for(var r,a=0;a<=o;a++){var d=n.getComputedStyle(J[0]);pe.fillStyle=d.color||"black",r=Math.floor((oe?i.height:i.width)*(a/o)),pe.fillRect(oe?0:r-1,oe?r-1:0,oe?i.width:2,oe?2:i.height)}}}function C(){if(ue&&pe){var e=M();pe.clearRect(0,0,e.width,e.height)}}function y(){he=Q[0].getBoundingClientRect()}function M(){return te(),he}function T(e){if(!Y()){var t;(oe?e.keyCode===r.KEY_CODE.DOWN_ARROW:e.keyCode===r.KEY_CODE.LEFT_ARROW)?t=-le:(oe?e.keyCode===r.KEY_CODE.UP_ARROW:e.keyCode===r.KEY_CODE.RIGHT_ARROW)&&(t=le),t=re?-t:t,t&&((e.metaKey||e.ctrlKey||e.altKey)&&(t*=4),e.preventDefault(),e.stopPropagation(),o.$evalAsync(function(){_(W.$viewValue+t)}))}}function A(){$(),o.mouseActive=!0,ee.removeClass("md-focused"),l(function(){o.mouseActive=!1},100)}function w(){o.mouseActive===!1&&ee.addClass("md-focused")}function k(){ee.removeClass("md-focused"),m.removeClass("md-active"),C()}function _(e){W.$setViewValue(N(S(e)))}function x(){isNaN(W.$viewValue)&&(W.$viewValue=W.$modelValue),W.$viewValue=N(W.$viewValue);var e=z(W.$viewValue);o.modelValue=W.$viewValue,m.attr("aria-valuenow",W.$viewValue),D(e),G.text(W.$viewValue)}function N(e,n,o){if(t.isNumber(e))return n=t.isNumber(n)?n:se,o=t.isNumber(o)?o:ce,Math.max(n,Math.min(o,e))}function S(e){if(t.isNumber(e)){var n=Math.round((e-se)/le)*le+se;return n=Math.round(n*Math.pow(10,me))/Math.pow(10,me),V&&V.fitInputWidthToTextLength&&i.debounce(function(){V.fitInputWidthToTextLength(n.toString().length)},100)(),n}}function D(e){e=j(e);var t=100*e+"%",n=re?100*(1-e)+"%":t;oe?X.css("bottom",t):i.bidiProperty(X,"left","right",t),Z.css(oe?"height":"width",n),m.toggleClass(re?"md-max":"md-min",0===e),m.toggleClass(re?"md-min":"md-max",1===e)}function I(e){if(!Y()){m.addClass("md-active"),m[0].focus(),y();var t=q(U(oe?e.pointer.y:e.pointer.x)),n=N(S(t));o.$apply(function(){_(n),D(z(n))})}}function H(e){if(!Y()){m.removeClass("md-dragging");var t=q(U(oe?e.pointer.y:e.pointer.x)),n=N(S(t));o.$apply(function(){_(n),x()})}}function O(e){Y()||(fe=!0,e.stopPropagation(),m.addClass("md-dragging"),R(e))}function P(e){fe&&(e.stopPropagation(),R(e))}function L(e){fe&&(e.stopPropagation(),fe=!1)}function R(e){ie?B(oe?e.pointer.y:e.pointer.x):F(oe?e.pointer.y:e.pointer.x)}function F(e){o.$evalAsync(function(){_(q(U(e)))})}function B(e){var t=q(U(e)),n=N(S(t));D(U(e)),G.text(n)}function j(e){return Math.max(0,Math.min(e||0,1))}function U(e){var t=oe?he.top:he.left,n=oe?he.height:he.width,o=(e-t)/n;return oe||"rtl"!==i.bidi()||(o=1-o),Math.max(0,Math.min(1,oe?1-o:o))}function q(e){var t=re?1-e:e;return se+t*(ce-se)}function z(e){var t=(e-se)/(ce-se);return re?1-t:t}a(m);var W=p[0]||{$setViewValue:function(e){this.$viewValue=e,this.$viewChangeListeners.forEach(function(e){e()})},$parsers:[],$formatters:[],$viewChangeListeners:[]},V=p[1],Y=(t.element(i.getClosest(m,"_md-slider-container",!0)),u.ngDisabled?t.bind(null,s(u.ngDisabled),o.$parent):function(){return m[0].hasAttribute("disabled")}),K=t.element(m[0].querySelector(".md-thumb")),G=t.element(m[0].querySelector(".md-thumb-text")),X=K.parent(),Q=t.element(m[0].querySelector(".md-track-container")),Z=t.element(m[0].querySelector(".md-track-fill")),J=t.element(m[0].querySelector(".md-track-ticks")),ee=t.element(m[0].getElementsByClassName("md-slider-wrapper")),te=(t.element(m[0].getElementsByClassName("md-slider-content")),i.throttle(y,5e3)),ne=3,oe=t.isDefined(u.mdVertical),ie=t.isDefined(u.mdDiscrete),re=t.isDefined(u.mdInvert);t.isDefined(u.min)?u.$observe("min",f):f(0),t.isDefined(u.max)?u.$observe("max",g):g(100),t.isDefined(u.step)?u.$observe("step",b):b(1),t.isDefined(u.round)?u.$observe("round",v):v(ne);var ae=t.noop;u.ngDisabled&&(ae=o.$parent.$watch(u.ngDisabled,E)),d.register(ee,"drag",{horizontal:!oe}),o.mouseActive=!1,ee.on("keydown",T).on("mousedown",A).on("focus",w).on("blur",k).on("$md.pressdown",I).on("$md.pressup",H).on("$md.dragstart",O).on("$md.drag",P).on("$md.dragend",L),setTimeout(h,0);var de=e.throttle(h);t.element(n).on("resize",de),o.$on("$destroy",function(){t.element(n).off("resize",de)}),W.$render=x,W.$viewChangeListeners.push(x),W.$formatters.push(N),W.$formatters.push(S);var se,ce,le,me,ue,pe,he={};y();var fe=!1}return{scope:{},require:["?ngModel","?^mdSliderContainer"],template:'<div class="md-slider-wrapper"><div class="md-slider-content"><div class="md-track-container"><div class="md-track"></div><div class="md-track md-track-fill"></div><div class="md-track-ticks"></div></div><div class="md-thumb-container"><div class="md-thumb"></div><div class="md-focus-thumb"></div><div class="md-focus-ring"></div><div class="md-sign"><span class="md-thumb-text"></span></div><div class="md-disabled-thumb"></div></div></div></div>',compile:m}}o.$inject=["$$rAF","$window","$mdAria","$mdUtil","$mdConstant","$mdTheming","$mdGesture","$parse","$log","$timeout"],t.module("material.components.slider",["material.core"]).directive("mdSlider",o).directive("mdSliderContainer",e)}(),function(){function e(e,t,o,i){function r(i){function r(e,t){t.addClass("md-sticky-clone");var n={element:e,clone:t};return f.items.push(n),o.nextTick(function(){p.prepend(n.clone)}),h(),function(){f.items.forEach(function(t,n){t.element[0]===e[0]&&(f.items.splice(n,1),t.clone.remove())}),h()}}function d(){f.items.forEach(s),f.items=f.items.sort(function(e,t){return e.top<t.top?-1:1});for(var e,t=p.prop("scrollTop"),n=f.items.length-1;n>=0;n--)if(t>f.items[n].top){e=f.items[n];break}l(e)}function s(e){var t=e.element[0];for(e.top=0,e.left=0,e.right=0;t&&t!==p[0];)e.top+=t.offsetTop,e.left+=t.offsetLeft,t.offsetParent&&(e.right+=t.offsetParent.offsetWidth-t.offsetWidth-t.offsetLeft),t=t.offsetParent;e.height=e.element.prop("offsetHeight");var i=o.floatingScrollbars()?"0":n;o.bidi(e.clone,"margin-left",e.left,i),o.bidi(e.clone,"margin-right",i,e.right)}function c(){var e=p.prop("scrollTop"),t=e>(c.prevScrollTop||0);if(c.prevScrollTop=e,0===e)return void l(null);if(t){if(f.next&&f.next.top<=e)return void l(f.next);if(f.current&&f.next&&f.next.top-e<=f.next.height)return void u(f.current,e+(f.next.top-f.next.height-e))}if(!t){if(f.current&&f.prev&&e<f.current.top)return void l(f.prev);if(f.next&&f.current&&e>=f.next.top-f.current.height)return void u(f.current,e+(f.next.top-e-f.current.height))}f.current&&u(f.current,e)}function l(e){if(f.current!==e){f.current&&(u(f.current,null),m(f.current,null)),e&&m(e,"active"),f.current=e;var t=f.items.indexOf(e);f.next=f.items[t+1],f.prev=f.items[t-1],m(f.next,"next"),m(f.prev,"prev")}}function m(e,t){e&&e.state!==t&&(e.state&&(e.clone.attr("sticky-prev-state",e.state),e.element.attr("sticky-prev-state",e.state)),e.clone.attr("sticky-state",t),e.element.attr("sticky-state",t),e.state=t)}function u(t,i){t&&(null===i||i===n?t.translateY&&(t.translateY=null,t.clone.css(e.CSS.TRANSFORM,"")):(t.translateY=i,o.bidi(t.clone,e.CSS.TRANSFORM,"translate3d("+t.left+"px,"+i+"px,0)","translateY("+i+"px)")))}var p=i.$element,h=t.throttle(d);a(p),p.on("$scrollstart",h),p.on("$scroll",c);var f;return f={prev:null,current:null,next:null,items:[],add:r,refreshElements:d}}function a(e){function n(){+o.now()-r>a?(i=!1,e.triggerHandler("$scrollend")):(e.triggerHandler("$scroll"),t.throttle(n))}var i,r,a=200;e.on("scroll touchmove",function(){i||(i=!0,t.throttle(n),e.triggerHandler("$scrollstart")),e.triggerHandler("$scroll"),r=+o.now()})}var d=o.checkStickySupport();return function(e,t,n){var o=t.controller("mdContent");if(o)if(d)t.css({position:d,top:0,"z-index":2});else{var a=o.$element.data("$$sticky");a||(a=r(o),o.$element.data("$$sticky",a));var s=n||i(t.clone())(e),c=a.add(t,s);e.$on("$destroy",c)}}}e.$inject=["$mdConstant","$$rAF","$mdUtil","$compile"],t.module("material.components.sticky",["material.core","material.components.content"]).factory("$mdSticky",e)}(),function(){function e(e,n,o,i,r){return{restrict:"E",replace:!0,transclude:!0,template:'<div class="md-subheader _md">  <div class="md-subheader-inner">    <div class="md-subheader-content"></div>  </div></div>',link:function(a,d,s,c,l){function m(e){return t.element(e[0].querySelector(".md-subheader-content"))}o(d),d.addClass("_md"),i.prefixer().removeAttribute(d,"ng-repeat");var u=d[0].outerHTML;s.$set("role","heading"),r.expect(d,"aria-level","2"),l(a,function(e){m(d).append(e)}),d.hasClass("md-no-sticky")||l(a,function(t){var o=n('<div class="md-subheader-wrapper" aria-hidden="true">'+u+"</div>")(a);i.nextTick(function(){m(o).append(t)}),e(a,d,o)})}}}e.$inject=["$mdSticky","$compile","$mdTheming","$mdUtil","$mdAria"],t.module("material.components.subheader",["material.core","material.components.sticky"]).directive("mdSubheader",e)}(),function(){function e(e,n,o,i,r,a,d){
function s(e,s){var l=c.compile(e,s).post;return e.addClass("md-dragging"),function(e,s,c,m){function u(t){b&&b(e)||(t.stopPropagation(),s.addClass("md-dragging"),C={width:v.prop("offsetWidth")})}function p(e){if(C){e.stopPropagation(),e.srcEvent&&e.srcEvent.preventDefault();var t=e.pointer.distanceX/C.width,n=g.$viewValue?1+t:t;n=Math.max(0,Math.min(1,n)),v.css(o.CSS.TRANSFORM,"translate3d("+100*n+"%,0,0)"),C.translate=n}}function h(t){if(C){t.stopPropagation(),s.removeClass("md-dragging"),v.css(o.CSS.TRANSFORM,"");var n=g.$viewValue?C.translate<.5:C.translate>.5;n&&f(!g.$viewValue),C=null,e.skipToggle=!0,d(function(){e.skipToggle=!1},1)}}function f(t){e.$apply(function(){g.$setViewValue(t),g.$render()})}var g=(m[0],m[1]||n.fakeNgModel()),b=(m[2],null);null!=c.disabled?b=function(){return!0}:c.ngDisabled&&(b=i(c.ngDisabled));var v=t.element(s[0].querySelector(".md-thumb-container")),E=t.element(s[0].querySelector(".md-container")),$=t.element(s[0].querySelector(".md-label"));r(function(){s.removeClass("md-dragging")}),l(e,s,c,m),b&&e.$watch(b,function(e){s.attr("tabindex",e?-1:0)}),c.$observe("mdInvert",function(e){var t=n.parseAttributeBoolean(e);t?s.prepend($):s.prepend(E),s.toggleClass("md-inverted",t)}),a.register(E,"drag"),E.on("$md.dragstart",u).on("$md.drag",p).on("$md.dragend",h);var C}}var c=e[0];return{restrict:"E",priority:o.BEFORE_NG_ARIA,transclude:!0,template:'<div class="md-container"><div class="md-bar"></div><div class="md-thumb-container"><div class="md-thumb" md-ink-ripple md-ink-ripple-checkbox></div></div></div><div ng-transclude class="md-label"></div>',require:["^?mdInputContainer","?ngModel","?^form"],compile:s}}e.$inject=["mdCheckboxDirective","$mdUtil","$mdConstant","$parse","$$rAF","$mdGesture","$timeout"],t.module("material.components.switch",["material.core","material.components.checkbox"]).directive("mdSwitch",e)}(),function(){function e(e){function t(e){function t(t,i,r){i.css("touch-action",r.mdSwipeTouchAction||"none");var a=e(r[n]);i.on(o,function(e){t.$applyAsync(function(){a(t,{$event:e})})})}return{restrict:"A",link:t}}t.$inject=["$parse"];var n="md"+e,o="$md."+e.toLowerCase();return t}t.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",e("SwipeLeft")).directive("mdSwipeRight",e("SwipeRight")).directive("mdSwipeUp",e("SwipeUp")).directive("mdSwipeDown",e("SwipeDown"))}(),function(){t.module("material.components.tabs",["material.core","material.components.icon"])}(),function(){function e(e){return{restrict:"E",link:function(t,n){n.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function n(e){function n(e){i=e}function o(e,n,o,r){function a(t,a,d){i=d.textContent||d.content;var l=!r("gt-sm");return a=o.extractElementByName(a,"md-toast",!0),d.element=a,d.onSwipe=function(e,t){var i=e.type.replace("$md.",""),r=i.replace("swipe","");"down"===r&&d.position.indexOf("top")!=-1&&!l||"up"===r&&(d.position.indexOf("bottom")!=-1||l)||("left"!==r&&"right"!==r||!l)&&(a.addClass("md-"+i),o.nextTick(n.cancel))},d.openClass=s(d.position),a.addClass(d.toastClass),d.parent.addClass(d.openClass),o.hasComputedStyle(d.parent,"position","static")&&d.parent.css("position","relative"),a.on(c,d.onSwipe),a.addClass(l?"md-bottom":d.position.split(" ").map(function(e){return"md-"+e}).join(" ")),d.parent&&d.parent.addClass("md-toast-animating"),e.enter(a,d.parent).then(function(){d.parent&&d.parent.removeClass("md-toast-animating")})}function d(t,n,i){return n.off(c,i.onSwipe),i.parent&&i.parent.addClass("md-toast-animating"),i.openClass&&i.parent.removeClass(i.openClass),(1==i.$destroy?n.remove():e.leave(n)).then(function(){i.parent&&i.parent.removeClass("md-toast-animating"),o.hasComputedStyle(i.parent,"position","static")&&i.parent.css("position","")})}function s(e){return r("gt-xs")?"md-toast-open-"+(e.indexOf("top")>-1?"top":"bottom"):"md-toast-open-bottom"}var c="$md.swipeleft $md.swiperight $md.swipeup $md.swipedown";return{onShow:a,onRemove:d,toastClass:"",position:"bottom left",themable:!0,hideDelay:3e3,autoWrap:!0,transformTemplate:function(e,n){var o=n.autoWrap&&e&&!/md-toast-content/g.test(e);if(o){var i=document.createElement("md-template");i.innerHTML=e;for(var r=0;r<i.children.length;r++)if("MD-TOAST"===i.children[r].nodeName){var a=t.element('<div class="md-toast-content">');a.append(t.element(i.children[r].childNodes)),i.children[r].appendChild(a[0])}return i.innerHTML}return e||""}}}o.$inject=["$animate","$mdToast","$mdUtil","$mdMedia"];var i,r="ok",a=e("$mdToast").setDefaults({methods:["position","hideDelay","capsule","parent","position","toastClass"],options:o}).addPreset("simple",{argOption:"textContent",methods:["textContent","content","action","highlightAction","highlightClass","theme","parent"],options:["$mdToast","$mdTheming",function(e,t){return{template:'<md-toast md-theme="{{ toast.theme }}" ng-class="{\'md-capsule\': toast.capsule}">  <div class="md-toast-content">    <span class="md-toast-text" role="alert" aria-relevant="all" aria-atomic="true">      {{ toast.content }}    </span>    <md-button class="md-action" ng-if="toast.action" ng-click="toast.resolve()"         ng-class="highlightClasses">      {{ toast.action }}    </md-button>  </div></md-toast>',controller:["$scope",function(t){var n=this;n.highlightAction&&(t.highlightClasses=["md-highlight",n.highlightClass]),t.$watch(function(){return i},function(){n.content=i}),this.resolve=function(){e.hide(r)}}],theme:t.defaultTheme(),controllerAs:"toast",bindToController:!0}}]}).addMethod("updateTextContent",n).addMethod("updateContent",n);return a}e.$inject=["$mdToast"],n.$inject=["$$interimElementProvider"],t.module("material.components.toast",["material.core","material.components.button"]).directive("mdToast",e).provider("$mdToast",n)}(),function(){function e(e,n,o,i,r){var a=t.bind(null,o.supplant,"translate3d(0,{0}px,0)");return{template:"",restrict:"E",link:function(d,s,c){function l(){function i(e){var t=s.parent().find("md-content");!f&&t.length&&l(null,t),e=d.$eval(e),e===!1?g():g=u()}function l(e,t){t&&s.parent()[0]===t.parent()[0]&&(f&&f.off("scroll",$),f=t,g=u())}function m(e){var t=e?e.target.scrollTop:v;C(),b=Math.min(h/E,Math.max(0,b+t-v)),s.css(n.CSS.TRANSFORM,a([-b*E])),f.css(n.CSS.TRANSFORM,a([(h-b)*E])),v=t,o.nextTick(function(){var e=s.hasClass("md-whiteframe-z1");e&&!b?r.removeClass(s,"md-whiteframe-z1"):!e&&b&&r.addClass(s,"md-whiteframe-z1")})}function u(){return f?(f.on("scroll",$),f.attr("scroll-shrink","true"),o.nextTick(p,!1),function(){f.off("scroll",$),f.attr("scroll-shrink","false"),p()}):t.noop}function p(){h=s.prop("offsetHeight");var e=-h*E+"px";f.css({"margin-top":e,"margin-bottom":e}),m()}var h,f,g=t.noop,b=0,v=0,E=c.mdShrinkSpeedFactor||.5,$=e.throttle(m),C=o.debounce(p,5e3);d.$on("$mdContentLoaded",l),c.$observe("mdScrollShrink",i),c.ngShow&&d.$watch(c.ngShow,p),c.ngHide&&d.$watch(c.ngHide,p),d.$on("$destroy",g)}s.addClass("_md"),i(s),o.nextTick(function(){s.addClass("_md-toolbar-transitions")},!1),t.isDefined(c.mdScrollShrink)&&l()}}}e.$inject=["$$rAF","$mdConstant","$mdUtil","$mdTheming","$animate"],t.module("material.components.toolbar",["material.core","material.components.content"]).directive("mdToolbar",e)}(),function(){function n(e,n,o,i,r,a,d,s){function c(c,g,b){function v(){c.mdZIndex=c.mdZIndex||u,c.mdDelay=c.mdDelay||p,f[c.mdDirection]||(c.mdDirection=h)}function E(e){var t=e||r(g.text().trim())(c.$parent);(!H.attr("aria-label")&&!H.attr("aria-labelledby")||H.attr("md-labeled-by-tooltip"))&&(H.attr("aria-label",t),H.attr("md-labeled-by-tooltip")||H.attr("md-labeled-by-tooltip",I))}function $(){v(),N&&N.panelEl&&N.panelEl.removeClass(k),k="md-origin-"+c.mdDirection,_=f[c.mdDirection],x=d.newPanelPosition().relativeTo(H).addPanelPosition(_.x,_.y),N&&N.panelEl&&(N.panelEl.addClass(k),N.updatePosition(x))}function C(){function t(e){return e.some(function(e){return"disabled"===e.attributeName&&H[0].disabled}),!1}function o(){M(!1)}function r(){L=document.activeElement===H[0]}function d(e){"focus"===e.type&&L?L=!1:c.mdVisible||(H.on(m,u),M(!0),"touchstart"===e.type&&H.one("touchend",function(){a.nextTick(function(){i.one("touchend",u)},!1)}))}function u(){S=c.hasOwnProperty("mdAutohide")?c.mdAutohide:b.hasOwnProperty("mdAutohide"),(S||P||i[0].activeElement!==H[0])&&(D&&(e.cancel(D),M.queued=!1,D=null),H.off(m,u),H.triggerHandler("blur"),M(!1)),P=!1}function p(){P=!0}function h(){s.deregister("scroll",o,!0),s.deregister("blur",r),s.deregister("resize",O),H.off(l,d).off(m,u).off("mousedown",p),u(),f&&f.disconnect()}if(H[0]&&"MutationObserver"in n){var f=new MutationObserver(function(e){t(e)&&a.nextTick(function(){M(!1)})});f.observe(H[0],{attributes:!0})}L=!1,s.register("scroll",o,!0),s.register("blur",r),s.register("resize",O),c.$on("$destroy",h),H.on("mousedown",p),H.on(l,d)}function y(){function e(){c.$destroy()}if(g[0]&&"MutationObserver"in n){var t=new MutationObserver(function(e){e.forEach(function(e){"md-visible"!==e.attributeName||c.visibleWatcher||(c.visibleWatcher=c.$watch("mdVisible",T))})});t.observe(g[0],{attributes:!0}),b.hasOwnProperty("mdVisible")&&(c.visibleWatcher=c.$watch("mdVisible",T))}else c.visibleWatcher=c.$watch("mdVisible",T);c.$watch("mdDirection",$),g.one("$destroy",e),H.one("$destroy",e),c.$on("$destroy",function(){M(!1),N&&N.destroy(),t&&t.disconnect(),g.remove()}),g.text().indexOf(r.startSymbol())>-1&&c.$watch(function(){return g.text().trim()},E)}function M(t){M.queued&&M.value===!!t||!M.queued&&c.mdVisible===!!t||(M.value=!!t,M.queued||(t?(M.queued=!0,D=e(function(){c.mdVisible=M.value,M.queued=!1,D=null,c.visibleWatcher||T(c.mdVisible)},c.mdDelay)):a.nextTick(function(){c.mdVisible=!1,c.visibleWatcher||T(!1)})))}function T(e){e?A():w()}function A(){if(!g[0].textContent.trim())throw new Error("Text for the tooltip has not been provided. Please include text within the mdTooltip element.");if(!N){var e=t.element(document.body),n=d.newPanelAnimation().openFrom(H).closeTo(H).withAnimation({open:"md-show",close:"md-hide"}),o={id:I,attachTo:e,contentElement:g,propagateContainerEvents:!0,panelClass:"md-tooltip "+k,animation:n,position:x,zIndex:c.mdZIndex,focusOnOpen:!1};N=d.create(o)}N.open().then(function(){N.panelEl.attr("role","tooltip")})}function w(){N&&N.close()}var k,_,x,N,S,D,I="md-tooltip-"+a.nextUid(),H=a.getParentWithPointerEvents(g),O=o.throttle($),P=!1,L=null;v(),E(),g.detach(),$(),C(),y()}var l="focus touchstart mouseenter",m="blur touchcancel mouseleave",u=100,p=0,h="bottom",f={top:{x:d.xPosition.CENTER,y:d.yPosition.ABOVE},right:{x:d.xPosition.OFFSET_END,y:d.yPosition.CENTER},bottom:{x:d.xPosition.CENTER,y:d.yPosition.BELOW},left:{x:d.xPosition.OFFSET_START,y:d.yPosition.CENTER}};return{restrict:"E",priority:210,scope:{mdZIndex:"=?mdZIndex",mdDelay:"=?mdDelay",mdVisible:"=?mdVisible",mdAutohide:"=?mdAutohide",mdDirection:"@?mdDirection"},link:c}}function o(){function n(e){r[e.type]&&r[e.type].forEach(function(t){t.call(this,e)},this)}function o(t,o,i){var d=r[t]=r[t]||[];d.length||(i?e.addEventListener(t,n,!0):a.on(t,n)),d.indexOf(o)===-1&&d.push(o)}function i(t,o,i){var d=r[t],s=d?d.indexOf(o):-1;s>-1&&(d.splice(s,1),0===d.length&&(i?e.removeEventListener(t,n,!0):a.off(t,n)))}var r={},a=t.element(e);return{register:o,deregister:i}}n.$inject=["$timeout","$window","$$rAF","$document","$interpolate","$mdUtil","$mdPanel","$$mdTooltipRegistry"],t.module("material.components.tooltip",["material.core","material.components.panel"]).directive("mdTooltip",n).service("$$mdTooltipRegistry",o)}(),function(){function e(){return{restrict:"AE",controller:n,controllerAs:"$ctrl",bindToController:!0}}function n(e){e.addClass("md-truncate")}n.$inject=["$element"],t.module("material.components.truncate",["material.core"]).directive("mdTruncate",e)}(),function(){function e(){return{controller:o,template:n,compile:function(e,t){e.addClass("md-virtual-repeat-container").addClass(t.hasOwnProperty("mdOrientHorizontal")?"md-orient-horizontal":"md-orient-vertical")}}}function n(e){return'<div class="md-virtual-repeat-scroller"><div class="md-virtual-repeat-sizer"></div><div class="md-virtual-repeat-offsetter">'+e[0].innerHTML+"</div></div>"}function o(e,n,o,i,r,a,d,s,c){this.$rootScope=r,this.$scope=d,this.$element=s,this.$attrs=c,this.size=0,this.scrollSize=0,this.scrollOffset=0,this.horizontal=this.$attrs.hasOwnProperty("mdOrientHorizontal"),this.repeater=null,this.autoShrink=this.$attrs.hasOwnProperty("mdAutoShrink"),this.autoShrinkMin=parseInt(this.$attrs.mdAutoShrinkMin,10)||0,this.originalSize=null,this.offsetSize=parseInt(this.$attrs.mdOffsetSize,10)||0,this.oldElementSize=null,this.maxElementPixels=o.ELEMENT_MAX_PIXELS,this.$attrs.mdTopIndex?(this.bindTopIndex=i(this.$attrs.mdTopIndex),this.topIndex=this.bindTopIndex(this.$scope),t.isDefined(this.topIndex)||(this.topIndex=0,this.bindTopIndex.assign(this.$scope,0)),this.$scope.$watch(this.bindTopIndex,t.bind(this,function(e){e!==this.topIndex&&this.scrollToIndex(e)}))):this.topIndex=0,this.scroller=s[0].querySelector(".md-virtual-repeat-scroller"),this.sizer=this.scroller.querySelector(".md-virtual-repeat-sizer"),this.offsetter=this.scroller.querySelector(".md-virtual-repeat-offsetter");var l=t.bind(this,this.updateSize);e(t.bind(this,function(){l();var e=n.debounce(l,10,null,!1),o=t.element(a);this.size||e(),o.on("resize",e),d.$on("$destroy",function(){o.off("resize",e)}),d.$emit("$md-resize-enable"),d.$on("$md-resize",l)}))}function i(e){return{controller:r,priority:1e3,require:["mdVirtualRepeat","^^mdVirtualRepeatContainer"],restrict:"A",terminal:!0,transclude:"element",compile:function(t,n){var o=n.mdVirtualRepeat,i=o.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)\s*$/),r=i[1],a=e(i[2]),d=n.mdExtraName&&e(n.mdExtraName);return function(e,t,n,o,i){o[0].link_(o[1],i,r,a,d)}}}}function r(e,n,o,i,r,a,d,s){this.$scope=e,this.$element=n,this.$attrs=o,this.$browser=i,this.$document=r,this.$rootScope=a,this.$$rAF=d,this.onDemand=s.parseAttributeBoolean(o.mdOnDemand),this.browserCheckUrlChange=i.$$checkUrlChange,this.newStartIndex=0,this.newEndIndex=0,this.newVisibleEnd=0,this.startIndex=0,this.endIndex=0,this.itemSize=e.$eval(o.mdItemSize)||null,this.isFirstRender=!0,this.isVirtualRepeatUpdating_=!1,this.itemsLength=0,this.unwatchItemSize_=t.noop,this.blocks={},this.pooledBlocks=[],e.$on("$destroy",t.bind(this,this.cleanupBlocks_))}function a(e){if(!t.isFunction(e.getItemAtIndex)||!t.isFunction(e.getLength))throw Error("When md-on-demand is enabled, the Object passed to md-virtual-repeat must implement functions getItemAtIndex() and getLength() ");this.model=e}o.$inject=["$$rAF","$mdUtil","$mdConstant","$parse","$rootScope","$window","$scope","$element","$attrs"],r.$inject=["$scope","$element","$attrs","$browser","$document","$rootScope","$$rAF","$mdUtil"],i.$inject=["$parse"],t.module("material.components.virtualRepeat",["material.core","material.components.showHide"]).directive("mdVirtualRepeatContainer",e).directive("mdVirtualRepeat",i);var d=3;o.prototype.register=function(e){this.repeater=e,t.element(this.scroller).on("scroll wheel touchmove touchend",t.bind(this,this.handleScroll_))},o.prototype.isHorizontal=function(){return this.horizontal},o.prototype.getSize=function(){return this.size},o.prototype.setSize_=function(e){var t=this.getDimensionName_();this.size=e,this.$element[0].style[t]=e+"px"},o.prototype.unsetSize_=function(){this.$element[0].style[this.getDimensionName_()]=this.oldElementSize,this.oldElementSize=null},o.prototype.updateSize=function(){this.originalSize||(this.size=this.isHorizontal()?this.$element[0].clientWidth:this.$element[0].clientHeight,this.handleScroll_(),this.repeater&&this.repeater.containerUpdated())},o.prototype.getScrollSize=function(){return this.scrollSize},o.prototype.getDimensionName_=function(){return this.isHorizontal()?"width":"height"},o.prototype.sizeScroller_=function(e){var t=this.getDimensionName_(),n=this.isHorizontal()?"height":"width";if(this.sizer.innerHTML="",e<this.maxElementPixels)this.sizer.style[t]=e+"px";else{this.sizer.style[t]="auto",this.sizer.style[n]="auto";var o=Math.floor(e/this.maxElementPixels),i=document.createElement("div");i.style[t]=this.maxElementPixels+"px",i.style[n]="1px";for(var r=0;r<o;r++)this.sizer.appendChild(i.cloneNode(!1));i.style[t]=e-o*this.maxElementPixels+"px",this.sizer.appendChild(i)}},o.prototype.autoShrink_=function(e){var t=Math.max(e,this.autoShrinkMin*this.repeater.getItemSize());if(this.autoShrink&&t!==this.size){null===this.oldElementSize&&(this.oldElementSize=this.$element[0].style[this.getDimensionName_()]);var n=this.originalSize||this.size;if(!n||t<n)this.originalSize||(this.originalSize=this.size),this.setSize_(t);else if(null!==this.originalSize){this.unsetSize_();var o=this.originalSize;this.originalSize=null,o||this.updateSize(),this.setSize_(o||this.size)}this.repeater.containerUpdated()}},o.prototype.setScrollSize=function(e){var t=e+this.offsetSize;this.scrollSize!==t&&(this.sizeScroller_(t),this.autoShrink_(t),this.scrollSize=t)},o.prototype.getScrollOffset=function(){return this.scrollOffset},o.prototype.scrollTo=function(e){this.scroller[this.isHorizontal()?"scrollLeft":"scrollTop"]=e,this.handleScroll_()},o.prototype.scrollToIndex=function(e){var t=this.repeater.getItemSize(),n=this.repeater.itemsLength;e>n&&(e=n-1),this.scrollTo(t*e)},o.prototype.resetScroll=function(){this.scrollTo(0)},o.prototype.handleScroll_=function(){var e="rtl"!=document.dir&&"rtl"!=document.body.dir;e||this.maxSize||(this.scroller.scrollLeft=this.scrollSize,this.maxSize=this.scroller.scrollLeft);var t=this.isHorizontal()?e?this.scroller.scrollLeft:this.maxSize-this.scroller.scrollLeft:this.scroller.scrollTop;if(!(t===this.scrollOffset||t>this.scrollSize-this.size)){var n=this.repeater.getItemSize();if(n){var o=Math.max(0,Math.floor(t/n)-d),i=(this.isHorizontal()?"translateX(":"translateY(")+(!this.isHorizontal()||e?o*n:-(o*n))+"px)";if(this.scrollOffset=t,this.offsetter.style.webkitTransform=i,this.offsetter.style.transform=i,this.bindTopIndex){var r=Math.floor(t/n);r!==this.topIndex&&r<this.repeater.getItemCount()&&(this.topIndex=r,this.bindTopIndex.assign(this.$scope,r),this.$rootScope.$$phase||this.$scope.$digest())}this.repeater.containerUpdated()}}},r.Block,r.prototype.link_=function(e,n,o,i,r){this.container=e,this.transclude=n,this.repeatName=o,this.rawRepeatListExpression=i,this.extraName=r,this.sized=!1,this.repeatListExpression=t.bind(this,this.repeatListExpression_),this.container.register(this)},r.prototype.cleanupBlocks_=function(){t.forEach(this.pooledBlocks,function(e){e.element.remove()})},r.prototype.readItemSize_=function(){if(!this.itemSize){this.items=this.repeatListExpression(this.$scope),this.parentNode=this.$element[0].parentNode;var e=this.getBlock_(0);e.element[0].parentNode||this.parentNode.appendChild(e.element[0]),this.itemSize=e.element[0][this.container.isHorizontal()?"offsetWidth":"offsetHeight"]||null,this.blocks[0]=e,this.poolBlock_(0),this.itemSize&&this.containerUpdated()}},r.prototype.repeatListExpression_=function(e){var t=this.rawRepeatListExpression(e);if(this.onDemand&&t){var n=new a(t);return n.$$includeIndexes(this.newStartIndex,this.newVisibleEnd),n}return t},r.prototype.containerUpdated=function(){return this.itemSize?(this.sized||(this.items=this.repeatListExpression(this.$scope)),this.sized||(this.unwatchItemSize_(),this.sized=!0,this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e,t){this.isVirtualRepeatUpdating_||this.virtualRepeatUpdate_(e,t)}))),this.updateIndexes_(),void((this.newStartIndex!==this.startIndex||this.newEndIndex!==this.endIndex||this.container.getScrollOffset()>this.container.getScrollSize())&&(this.items instanceof a&&this.items.$$includeIndexes(this.newStartIndex,this.newEndIndex),this.virtualRepeatUpdate_(this.items,this.items)))):(this.unwatchItemSize_&&this.unwatchItemSize_!==t.noop&&this.unwatchItemSize_(),this.unwatchItemSize_=this.$scope.$watchCollection(this.repeatListExpression,t.bind(this,function(e){e&&e.length&&this.readItemSize_()})),void(this.$rootScope.$$phase||this.$scope.$digest()))},r.prototype.getItemSize=function(){return this.itemSize},r.prototype.getItemCount=function(){return this.itemsLength},r.prototype.virtualRepeatUpdate_=function(e,n){this.isVirtualRepeatUpdating_=!0;var o=e&&e.length||0,i=!1;if(this.items&&o<this.items.length&&0!==this.container.getScrollOffset()){this.items=e;var r=this.container.getScrollOffset();this.container.resetScroll(),this.container.scrollTo(r)}o!==this.itemsLength&&(i=!0,this.itemsLength=o),this.items=e,(e!==n||i)&&this.updateIndexes_(),this.parentNode=this.$element[0].parentNode,i&&this.container.setScrollSize(o*this.itemSize);var a,d=!1;this.isFirstRender&&(d=!0,this.isFirstRender=!1,a=this.$attrs.mdStartIndex?this.$scope.$eval(this.$attrs.mdStartIndex):this.container.topIndex,this.container.scrollToIndex(a)),Object.keys(this.blocks).forEach(function(e){var t=parseInt(e,10);(t<this.newStartIndex||t>=this.newEndIndex)&&this.poolBlock_(t)},this),this.$browser.$$checkUrlChange=t.noop;var s,c,l=[],m=[];for(s=this.newStartIndex;s<this.newEndIndex&&null==this.blocks[s];s++)c=this.getBlock_(s),this.updateBlock_(c,s),l.push(c);for(;null!=this.blocks[s];s++)this.updateBlock_(this.blocks[s],s);for(var u=s-1;s<this.newEndIndex;s++)c=this.getBlock_(s),this.updateBlock_(c,s),m.push(c);l.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(l),this.$element[0].nextSibling),m.length&&this.parentNode.insertBefore(this.domFragmentFromBlocks_(m),this.blocks[u]&&this.blocks[u].element[0].nextSibling),d&&this.container.scrollToIndex(a),this.$browser.$$checkUrlChange=this.browserCheckUrlChange,this.startIndex=this.newStartIndex,this.endIndex=this.newEndIndex,this.isVirtualRepeatUpdating_=!1},r.prototype.getBlock_=function(e){if(this.pooledBlocks.length)return this.pooledBlocks.pop();var n;return this.transclude(t.bind(this,function(t,o){n={element:t,"new":!0,scope:o},this.updateScope_(o,e),this.parentNode.appendChild(t[0])})),n},r.prototype.updateBlock_=function(e,t){this.blocks[t]=e,(e["new"]||e.scope.$index!==t||e.scope[this.repeatName]!==this.items[t])&&(e["new"]=!1,this.updateScope_(e.scope,t),this.$rootScope.$$phase||e.scope.$digest())},r.prototype.updateScope_=function(e,t){e.$index=t,e[this.repeatName]=this.items&&this.items[t],this.extraName&&(e[this.extraName(this.$scope)]=this.items[t])},r.prototype.poolBlock_=function(e){this.pooledBlocks.push(this.blocks[e]),this.parentNode.removeChild(this.blocks[e].element[0]),delete this.blocks[e]},r.prototype.domFragmentFromBlocks_=function(e){var t=this.$document[0].createDocumentFragment();return e.forEach(function(e){t.appendChild(e.element[0])}),t},r.prototype.updateIndexes_=function(){var e=this.items?this.items.length:0,t=Math.ceil(this.container.getSize()/this.itemSize);this.newStartIndex=Math.max(0,Math.min(e-t,Math.floor(this.container.getScrollOffset()/this.itemSize))),this.newVisibleEnd=this.newStartIndex+t+d,this.newEndIndex=Math.min(e,this.newVisibleEnd),this.newStartIndex=Math.max(0,this.newStartIndex-d)},a.prototype.$$includeIndexes=function(e,t){for(var n=e;n<t;n++)this.hasOwnProperty(n)||(this[n]=this.model.getItemAtIndex(n));this.length=this.model.getLength()}}(),function(){function e(e){function t(t,a,d){var s="";d.$observe("mdWhiteframe",function(t){t=parseInt(t,10)||r,t!=n&&(t>i||t<o)&&(e.warn("md-whiteframe attribute value is invalid. It should be a number between "+o+" and "+i,a[0]),t=r);var c=t==n?"":"md-whiteframe-"+t+"dp";d.$updateClass(c,s),s=c})}var n=-1,o=1,i=24,r=4;return{link:t}}e.$inject=["$log"],t.module("material.components.whiteframe",["material.core"]).directive("mdWhiteframe",e)}(),function(){function e(e,d,s,c,l,m,u,p,h,f,g,b){function v(){s.initOptionalProperties(e,h,{searchText:"",selectedItem:null,clearButton:!1}),l(d),M(),s.nextTick(function(){w(),C(),e.autofocus&&d.on("focus",y)})}function E(){e.requireMatch&&De&&De.$setValidity("md-require-match",!!e.selectedItem||!e.searchText)}function $(){function t(){var e=0,t=d.find("md-input-container");if(t.length){var n=t.find("input");e=t.prop("offsetHeight"),e-=n.prop("offsetTop"),e-=n.prop("offsetHeight"),e+=t.prop("offsetTop")}return e}function n(){var e=Ae.scrollContainer.getBoundingClientRect(),t={};e.right>p.right-r&&(t.left=m.right-e.width+"px"),Ae.$.scrollContainer.css(t)}if(!Ae)return s.nextTick($,!1,e);var c,l=(e.dropdownItems||i)*o,m=Ae.wrap.getBoundingClientRect(),u=Ae.snap.getBoundingClientRect(),p=Ae.root.getBoundingClientRect(),f=u.bottom-p.top,g=p.bottom-u.top,b=m.left-p.left,v=m.width,E=t(),C=e.dropdownPosition;if(C||(C=f>g&&p.height-f-r<l?"top":"bottom"),h.mdFloatingLabel&&(b+=a,v-=2*a),c={left:b+"px",minWidth:v+"px",maxWidth:Math.max(m.right-p.left,p.right-m.left)-r+"px"},"top"===C)c.top="auto",c.bottom=g+"px",c.maxHeight=Math.min(l,m.top-p.top-r)+"px";else{var y=p.bottom-m.bottom-r+s.getViewportTop();c.top=f-E+"px",c.bottom="auto",c.maxHeight=Math.min(l,y)+"px"}Ae.$.scrollContainer.css(c),s.nextTick(n,!1)}function C(){Ae.$.root.length&&(l(Ae.$.scrollContainer),Ae.$.scrollContainer.detach(),Ae.$.root.append(Ae.$.scrollContainer),u.pin&&u.pin(Ae.$.scrollContainer,p))}function y(){Ae.input.focus()}function M(){var n=parseInt(e.delay,10)||0;h.$observe("disabled",function(e){ye.isDisabled=s.parseAttributeBoolean(e,!1)}),h.$observe("required",function(e){ye.isRequired=s.parseAttributeBoolean(e,!1)}),h.$observe("readonly",function(e){ye.isReadonly=s.parseAttributeBoolean(e,!1)}),e.$watch("searchText",n?s.debounce(B,n):B),e.$watch("selectedItem",H),t.element(m).on("resize",Ie),e.$on("$destroy",T)}function T(){if(ye.hidden||s.enableScrolling(),t.element(m).off("resize",Ie),Ae){var e=["ul","scroller","scrollContainer","input"];t.forEach(e,function(e){Ae.$[e].remove()})}}function A(){ye.hidden||$()}function w(){var e=k();Ae={main:d[0],scrollContainer:d[0].querySelector(".md-virtual-repeat-container"),scroller:d[0].querySelector(".md-virtual-repeat-scroller"),ul:d.find("ul")[0],input:d.find("input")[0],wrap:e.wrap,snap:e.snap,root:document.body},Ae.li=Ae.ul.getElementsByTagName("li"),Ae.$=_(Ae),De=Ae.$.input.controller("ngModel")}function k(){var e,n;for(e=d;e.length&&(n=e.attr("md-autocomplete-snap"),!t.isDefined(n));e=e.parent());if(e.length)return{snap:e[0],wrap:"width"===n.toLowerCase()?e[0]:d.find("md-autocomplete-wrap")[0]};var o=d.find("md-autocomplete-wrap")[0];return{snap:o,wrap:o}}function _(e){var n={};for(var o in e)e.hasOwnProperty(o)&&(n[o]=t.element(e[o]));return n}function x(e,n){!e&&n?($(),ue(!0,He.Count|He.Selected),Ae&&(s.disableScrollAround(Ae.ul),Se=N(t.element(Ae.wrap)))):e&&!n&&(s.enableScrolling(),Se&&(Se(),Se=null))}function N(e){function t(e){e.preventDefault()}return e.on("wheel",t),e.on("touchmove",t),function(){e.off("wheel",t),e.off("touchmove",t)}}function S(){ke=!0}function D(){xe||ye.hidden||Ae.input.focus(),ke=!1,ye.hidden=X()}function I(){Ae.input.focus()}function H(n,o){E(),n?V(n).then(function(t){e.searchText=t,L(n,o)}):o&&e.searchText&&V(o).then(function(n){t.isString(e.searchText)&&n.toString().toLowerCase()===e.searchText.toLowerCase()&&(e.searchText="")}),n!==o&&O()}function O(){t.isFunction(e.itemChange)&&e.itemChange(Y(e.selectedItem))}function P(){t.isFunction(e.textChange)&&e.textChange()}function L(e,t){_e.forEach(function(n){n(e,t)})}function R(e){_e.indexOf(e)==-1&&_e.push(e)}function F(e){var t=_e.indexOf(e);t!=-1&&_e.splice(t,1)}function B(t,n){ye.index=K(),t!==n&&(E(),V(e.selectedItem).then(function(o){t!==o&&(e.selectedItem=null,t!==n&&P(),re()?ve():(ye.matches=[],G(!1),ue(!1,He.Count)))}))}function j(e){xe=!1,ke||(ye.hidden=X(),Ce("ngBlur",{$event:e}))}function U(e){e&&(ke=!1,xe=!1),Ae.input.blur()}function q(e){xe=!0,Q()&&re()&&ve(),ye.hidden=X(),Ce("ngFocus",{$event:e})}function z(t){switch(t.keyCode){case c.KEY_CODE.DOWN_ARROW:if(ye.loading)return;t.stopPropagation(),t.preventDefault(),ye.index=Math.min(ye.index+1,ye.matches.length-1),he(),ue(!1,He.Selected);break;case c.KEY_CODE.UP_ARROW:if(ye.loading)return;t.stopPropagation(),t.preventDefault(),ye.index=ye.index<0?ye.matches.length-1:Math.max(0,ye.index-1),he(),ue(!1,He.Selected);break;case c.KEY_CODE.TAB:if(D(),ye.hidden||ye.loading||ye.index<0||ye.matches.length<1)return;de(ye.index);break;case c.KEY_CODE.ENTER:if(ye.hidden||ye.loading||ye.index<0||ye.matches.length<1)return;if(ne())return;t.stopPropagation(),t.preventDefault(),de(ye.index);break;case c.KEY_CODE.ESCAPE:if(t.preventDefault(),!Z())return;t.stopPropagation(),ce(),e.searchText&&J("clear")&&le(),ye.hidden=!0,J("blur")&&U(!0)}}function W(){return t.isNumber(e.minLength)?e.minLength:1}function V(n){function o(t){return t&&e.itemText?e.itemText(Y(t)):null}return f.when(o(n)||n).then(function(e){return e&&!t.isString(e)&&g.warn("md-autocomplete: Could not resolve display value to a string. Please check the `md-item-text` attribute."),e})}function Y(e){if(!e)return n;var t={};return ye.itemName&&(t[ye.itemName]=e),t}function K(){return e.autoselect?0:-1}function G(e){ye.loading!=e&&(ye.loading=e),ye.hidden=X()}function X(){return!Q()||!ee()}function Q(){return!(ye.loading&&!te())&&(!ne()&&!!xe)}function Z(){return J("blur")||!ye.hidden||ye.loading||J("clear")&&e.searchText}function J(t){return!e.escapeOptions||e.escapeOptions.toLowerCase().indexOf(t)!==-1}function ee(){return re()&&te()||be()}function te(){return!!ye.matches.length}function ne(){return!!ye.scope.selectedItem}function oe(){return ye.loading&&!ne()}function ie(){return V(ye.matches[ye.index])}function re(){return(e.searchText||"").length>=W()}function ae(e,t,n){Object.defineProperty(ye,e,{get:function(){return n},set:function(e){var o=n;n=e,t(e,o)}})}function de(t){s.nextTick(function(){V(ye.matches[t]).then(function(e){var t=Ae.$.input.controller("ngModel");t.$setViewValue(e),t.$render()})["finally"](function(){e.selectedItem=ye.matches[t],G(!1)})},!1)}function se(){ce(),le()}function ce(){ye.index=0,ye.matches=[]}function le(){G(!0),e.searchText="";var t=document.createEvent("CustomEvent");t.initCustomEvent("change",!0,!0,{value:""}),Ae.input.dispatchEvent(t),Ae.input.blur(),e.searchText="",Ae.input.focus()}function me(n){function o(t){t&&(t=f.when(t),Ne++,G(!0),s.nextTick(function(){t.then(i)["finally"](function(){0===--Ne&&G(!1)})},!0,e))}function i(t){we[a]=t,(n||"")===(e.searchText||"")&&Ee(t)}var r=e.$parent.$eval(Te),a=n.toLowerCase(),d=t.isArray(r),c=!!r.then;d?i(r):c&&o(r)}function ue(e,t){var n=e?"polite":"assertive",o=[];t&He.Selected&&ye.index!==-1&&o.push(ie()),t&He.Count&&o.push(f.resolve(pe())),f.all(o).then(function(e){b.announce(e.join(" "),n)})}function pe(){switch(ye.matches.length){case 0:return"There are no matches available.";case 1:return"There is 1 match available.";default:return"There are "+ye.matches.length+" matches available."}}function he(){if(Ae.li[0]){var e=Ae.li[0].offsetHeight,t=e*ye.index,n=t+e,o=Ae.scroller.clientHeight,i=Ae.scroller.scrollTop;t<i?ge(t):n>i+o&&ge(n-o)}}function fe(){return 0!==Ne}function ge(e){Ae.$.scrollContainer.controller("mdVirtualRepeatContainer").scrollTo(e)}function be(){var e=(ye.scope.searchText||"").length;return ye.hasNotFound&&!te()&&(!ye.loading||fe())&&e>=W()&&(xe||ke)&&!ne()}function ve(){var t=e.searchText||"",n=t.toLowerCase();!e.noCache&&we[n]?Ee(we[n]):me(t),ye.hidden=X()}function Ee(t){ye.matches=t,ye.hidden=X(),ye.loading&&G(!1),e.selectOnMatch&&$e(),$(),ue(!0,He.Count)}function $e(){var t=e.searchText,n=ye.matches,o=n[0];1===n.length&&V(o).then(function(n){var o=t==n;e.matchInsensitive&&!o&&(o=t.toLowerCase()==n.toLowerCase()),o&&de(0)})}function Ce(t,n){h[t]&&e.$parent.$eval(h[t],n||{})}var ye=this,Me=e.itemsExpr.split(/ in /i),Te=Me[1],Ae=null,we={},ke=!1,_e=[],xe=!1,Ne=0,Se=null,De=null,Ie=s.debounce(A);ae("hidden",x,!0),ye.scope=e,ye.parent=e.$parent,ye.itemName=Me[0],ye.matches=[],ye.loading=!1,ye.hidden=!0,ye.index=null,ye.id=s.nextUid(),ye.isDisabled=null,ye.isRequired=null,ye.isReadonly=null,ye.hasNotFound=!1,ye.keydown=z,ye.blur=j,ye.focus=q,ye.clear=se,ye.select=de,
ye.listEnter=S,ye.listLeave=D,ye.mouseUp=I,ye.getCurrentDisplayValue=ie,ye.registerSelectedItemWatcher=R,ye.unregisterSelectedItemWatcher=F,ye.notFoundVisible=be,ye.loadingIsVisible=oe,ye.positionDropdown=$;var He={Count:1,Selected:2};return v()}e.$inject=["$scope","$element","$mdUtil","$mdConstant","$mdTheming","$window","$animate","$rootElement","$attrs","$q","$log","$mdLiveAnnouncer"],t.module("material.components.autocomplete").controller("MdAutocompleteCtrl",e);var o=48,i=5,r=8,a=2}(),function(){function e(e){return{controller:"MdAutocompleteCtrl",controllerAs:"$mdAutocompleteCtrl",scope:{inputName:"@mdInputName",inputMinlength:"@mdInputMinlength",inputMaxlength:"@mdInputMaxlength",searchText:"=?mdSearchText",selectedItem:"=?mdSelectedItem",itemsExpr:"@mdItems",itemText:"&mdItemText",placeholder:"@placeholder",noCache:"=?mdNoCache",requireMatch:"=?mdRequireMatch",selectOnMatch:"=?mdSelectOnMatch",matchInsensitive:"=?mdMatchCaseInsensitive",itemChange:"&?mdSelectedItemChange",textChange:"&?mdSearchTextChange",minLength:"=?mdMinLength",delay:"=?mdDelay",autofocus:"=?mdAutofocus",floatingLabel:"@?mdFloatingLabel",autoselect:"=?mdAutoselect",menuClass:"@?mdMenuClass",inputId:"@?mdInputId",escapeOptions:"@?mdEscapeOptions",dropdownItems:"=?mdDropdownItems",dropdownPosition:"@?mdDropdownPosition",clearButton:"=?mdClearButton"},compile:function(e,n){var o=["md-select-on-focus","md-no-asterisk","ng-trim","ng-pattern"],i=e.find("input");return o.forEach(function(e){var t=n[n.$normalize(e)];null!==t&&i.attr(e,t)}),function(e,n,o,i){i.hasNotFound=!!n.attr("md-has-not-found"),t.isDefined(o.mdClearButton)||e.floatingLabel||(e.clearButton=!0)}},template:function(t,n){function o(){var e=t.find("md-item-template").detach(),n=e.length?e.html():t.html();return e.length||t.empty(),"<md-autocomplete-parent-scope md-autocomplete-replace>"+n+"</md-autocomplete-parent-scope>"}function i(){var e=t.find("md-not-found").detach(),n=e.length?e.html():"";return n?'<li ng-if="$mdAutocompleteCtrl.notFoundVisible()"                         md-autocomplete-parent-scope>'+n+"</li>":""}function r(){return n.mdFloatingLabel?'            <md-input-container ng-if="floatingLabel">              <label>{{floatingLabel}}</label>              <input type="search"                  '+(null!=l?'tabindex="'+l+'"':"")+'                  id="{{ inputId || \'fl-input-\' + $mdAutocompleteCtrl.id }}"                  name="{{inputName}}"                  autocomplete="off"                  ng-required="$mdAutocompleteCtrl.isRequired"                  ng-readonly="$mdAutocompleteCtrl.isReadonly"                  ng-minlength="inputMinlength"                  ng-maxlength="inputMaxlength"                  ng-disabled="$mdAutocompleteCtrl.isDisabled"                  ng-model="$mdAutocompleteCtrl.scope.searchText"                  ng-model-options="{ allowInvalid: true }"                  ng-keydown="$mdAutocompleteCtrl.keydown($event)"                  ng-blur="$mdAutocompleteCtrl.blur($event)"                  ng-focus="$mdAutocompleteCtrl.focus($event)"                  aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                  aria-label="{{floatingLabel}}"                  aria-autocomplete="list"                  role="combobox"                  aria-haspopup="true"                  aria-activedescendant=""                  aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>              <div md-autocomplete-parent-scope md-autocomplete-replace>'+c+"</div>            </md-input-container>":'            <input type="search"                '+(null!=l?'tabindex="'+l+'"':"")+'                id="{{ inputId || \'input-\' + $mdAutocompleteCtrl.id }}"                name="{{inputName}}"                ng-if="!floatingLabel"                autocomplete="off"                ng-required="$mdAutocompleteCtrl.isRequired"                ng-disabled="$mdAutocompleteCtrl.isDisabled"                ng-readonly="$mdAutocompleteCtrl.isReadonly"                ng-minlength="inputMinlength"                ng-maxlength="inputMaxlength"                ng-model="$mdAutocompleteCtrl.scope.searchText"                ng-keydown="$mdAutocompleteCtrl.keydown($event)"                ng-blur="$mdAutocompleteCtrl.blur($event)"                ng-focus="$mdAutocompleteCtrl.focus($event)"                placeholder="{{placeholder}}"                aria-owns="ul-{{$mdAutocompleteCtrl.id}}"                aria-label="{{placeholder}}"                aria-autocomplete="list"                role="combobox"                aria-haspopup="true"                aria-activedescendant=""                aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"/>'}function a(){return'<button type="button" aria-label="Clear Input" tabindex="-1" ng-if="clearButton && $mdAutocompleteCtrl.scope.searchText && !$mdAutocompleteCtrl.isDisabled" ng-click="$mdAutocompleteCtrl.clear($event)"><md-icon md-svg-src="'+e.mdClose+'"></md-icon></button>'}var d=i(),s=o(),c=t.html(),l=n.tabindex;return d&&t.attr("md-has-not-found",!0),t.attr("tabindex","-1"),"        <md-autocomplete-wrap            ng-class=\"{ 'md-whiteframe-z1': !floatingLabel,                         'md-menu-showing': !$mdAutocompleteCtrl.hidden,                         'md-show-clear-button': !!clearButton }\">          "+r()+"          "+a()+'          <md-progress-linear              class="'+(n.mdFloatingLabel?"md-inline":"")+'"              ng-if="$mdAutocompleteCtrl.loadingIsVisible()"              md-mode="indeterminate"></md-progress-linear>          <md-virtual-repeat-container              md-auto-shrink              md-auto-shrink-min="1"              ng-mouseenter="$mdAutocompleteCtrl.listEnter()"              ng-mouseleave="$mdAutocompleteCtrl.listLeave()"              ng-mouseup="$mdAutocompleteCtrl.mouseUp()"              ng-hide="$mdAutocompleteCtrl.hidden"              class="md-autocomplete-suggestions-container md-whiteframe-z1"              ng-class="{ \'md-not-found\': $mdAutocompleteCtrl.notFoundVisible() }"              role="presentation">            <ul class="md-autocomplete-suggestions"                ng-class="::menuClass"                id="ul-{{$mdAutocompleteCtrl.id}}">              <li md-virtual-repeat="item in $mdAutocompleteCtrl.matches"                  ng-class="{ selected: $index === $mdAutocompleteCtrl.index }"                  ng-click="$mdAutocompleteCtrl.select($index)"                  md-extra-name="$mdAutocompleteCtrl.itemName">                  '+s+"                  </li>"+d+"            </ul>          </md-virtual-repeat-container>        </md-autocomplete-wrap>"}}}e.$inject=["$$mdSvgRegistry"],t.module("material.components.autocomplete").directive("mdAutocomplete",e)}(),function(){function e(e,t){function n(e,n,o){return function(e,n,i){function r(n,o){s[o]=e[n],e.$watch(n,function(e){t.nextTick(function(){s[o]=e})})}function a(){var t=!1,n=!1;e.$watch(function(){n||t||(t=!0,e.$$postDigest(function(){n||s.$digest(),t=n=!1}))}),s.$watch(function(){n=!0})}var d=e.$mdAutocompleteCtrl,s=d.parent.$new(),c=d.itemName;r("$index","$index"),r("item",c),a(),o(s,function(e){n.after(e)})}}return{restrict:"AE",compile:n,terminal:!0,transclude:"element"}}e.$inject=["$compile","$mdUtil"],t.module("material.components.autocomplete").directive("mdAutocompleteParentScope",e)}(),function(){function e(e,t,n){this.$scope=e,this.$element=t,this.$attrs=n,this.regex=null}e.$inject=["$scope","$element","$attrs"],t.module("material.components.autocomplete").controller("MdHighlightCtrl",e),e.prototype.init=function(e,t){this.flags=this.$attrs.mdHighlightFlags||"",this.unregisterFn=this.$scope.$watch(function(n){return{term:e(n),contentText:t(n)}}.bind(this),this.onRender.bind(this),!0),this.$element.on("$destroy",this.unregisterFn)},e.prototype.onRender=function(e,t){var n=e.contentText;null!==this.regex&&e.term===t.term||(this.regex=this.createRegex(e.term,this.flags)),e.term?this.applyRegex(n):this.$element.text(n)},e.prototype.applyRegex=function(e){var n=this.resolveTokens(e);this.$element.empty(),n.forEach(function(e){if(e.isMatch){var n=t.element('<span class="highlight">').text(e.text);this.$element.append(n)}else this.$element.append(document.createTextNode(e))}.bind(this))},e.prototype.resolveTokens=function(e){function t(t,o){var i=e.slice(t,o);i&&n.push(i)}var n=[],o=0;return e.replace(this.regex,function(e,i){t(o,i),n.push({text:e,isMatch:!0}),o=i+e.length}),t(o),n},e.prototype.createRegex=function(e,t){var n="",o="",i=this.sanitizeRegex(e);return t.indexOf("^")>=0&&(n="^"),t.indexOf("$")>=0&&(o="$"),new RegExp(n+i+o,t.replace(/[$\^]/g,""))},e.prototype.sanitizeRegex=function(e){return e&&e.toString().replace(/[\\\^\$\*\+\?\.\(\)\|\{}\[\]]/g,"\\$&")}}(),function(){function e(e,t){return{terminal:!0,controller:"MdHighlightCtrl",compile:function(n,o){var i=t(o.mdHighlightText),r=e(n.html());return function(e,t,n,o){o.init(i,r)}}}}e.$inject=["$interpolate","$parse"],t.module("material.components.autocomplete").directive("mdHighlightText",e)}(),function(){function o(e,t,o,i,r){this.$scope=e,this.$element=t,this.$mdConstant=o,this.$timeout=i,this.$mdUtil=r,this.isEditting=!1,this.parentController=n,this.enableChipEdit=!1}o.$inject=["$scope","$element","$mdConstant","$timeout","$mdUtil"],t.module("material.components.chips").controller("MdChipCtrl",o),o.prototype.init=function(e){this.parentController=e,this.enableChipEdit=this.parentController.enableChipEdit,this.enableChipEdit&&(this.$element.on("keydown",this.chipKeyDown.bind(this)),this.$element.on("mousedown",this.chipMouseDown.bind(this)),this.getChipContent().addClass("_md-chip-content-edit-is-enabled"))},o.prototype.getChipContent=function(){var e=this.$element[0].getElementsByClassName("md-chip-content");return t.element(e[0])},o.prototype.getContentElement=function(){return t.element(this.getChipContent().children()[0])},o.prototype.getChipIndex=function(){return parseInt(this.$element.attr("index"))},o.prototype.goOutOfEditMode=function(){if(this.isEditting){this.isEditting=!1,this.$element.removeClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="false";var e=this.getChipIndex(),t=this.getContentElement().text();t?(this.parentController.updateChipContents(e,this.getContentElement().text()),this.$mdUtil.nextTick(function(){this.parentController.selectedChip===e&&this.parentController.focusChip(e)}.bind(this))):this.parentController.removeChipAndFocusInput(e)}},o.prototype.selectNodeContents=function(t){var n,o;document.body.createTextRange?(n=document.body.createTextRange(),n.moveToElementText(t),n.select()):e.getSelection&&(o=e.getSelection(),n=document.createRange(),n.selectNodeContents(t),o.removeAllRanges(),o.addRange(n))},o.prototype.goInEditMode=function(){this.isEditting=!0,this.$element.addClass("_md-chip-editing"),this.getChipContent()[0].contentEditable="true",this.getChipContent().on("blur",function(){this.goOutOfEditMode()}.bind(this)),this.selectNodeContents(this.getChipContent()[0])},o.prototype.chipKeyDown=function(e){this.isEditting||e.keyCode!==this.$mdConstant.KEY_CODE.ENTER&&e.keyCode!==this.$mdConstant.KEY_CODE.SPACE?this.isEditting&&e.keyCode===this.$mdConstant.KEY_CODE.ENTER&&(e.preventDefault(),this.goOutOfEditMode()):(e.preventDefault(),this.goInEditMode())},o.prototype.chipMouseDown=function(){this.getChipIndex()==this.parentController.selectedChip&&this.enableChipEdit&&!this.isEditting&&this.goInEditMode()}}(),function(){function e(e,o,i,r){function a(n,o,a,s){var c=s.shift(),l=s.shift(),m=t.element(o[0].querySelector(".md-chip-content"));e(o),c&&(l.init(c),m.append(i(d)(n)),m.on("blur",function(){c.resetSelectedChip(),c.$scope.$applyAsync()})),r(function(){c&&c.shouldFocusLastChip&&c.focusLastChipThenInput()})}var d=o.processTemplate(n);return{restrict:"E",require:["^?mdChips","mdChip"],link:a,controller:"MdChipCtrl"}}e.$inject=["$mdTheming","$mdUtil","$compile","$timeout"],t.module("material.components.chips").directive("mdChip",e);var n='    <span ng-if="!$mdChipsCtrl.readonly" class="md-visually-hidden">      {{$mdChipsCtrl.deleteHint}}    </span>'}(),function(){function e(e){function t(t,n,o,i){n.on("click",function(e){t.$apply(function(){i.removeChip(t.$$replacedScope.$index)})}),e(function(){n.attr({tabindex:-1,"aria-hidden":!0}),n.find("button").attr("tabindex","-1")})}return{restrict:"A",require:"^mdChips",scope:!1,link:t}}e.$inject=["$timeout"],t.module("material.components.chips").directive("mdChipRemove",e)}(),function(){function e(e){function t(t,n,o){var i=t.$parent.$mdChipsCtrl,r=i.parent.$new(!1,i.parent);r.$$replacedScope=t,r.$chip=t.$chip,r.$index=t.$index,r.$mdChipsCtrl=i;var a=i.$scope.$eval(o.mdChipTransclude);n.html(a),e(n.contents())(r)}return{restrict:"EA",terminal:!0,link:t,scope:!1}}e.$inject=["$compile"],t.module("material.components.chips").directive("mdChipTransclude",e)}(),function(){function e(e,t,o,i,r,a,d){this.$timeout=a,this.$mdConstant=o,this.$scope=e,this.parent=e.$parent,this.$mdUtil=d,this.$log=i,this.$element=r,this.$attrs=t,this.ngModelCtrl=null,this.userInputNgModelCtrl=null,this.autocompleteCtrl=null,this.userInputElement=null,this.items=[],this.selectedChip=-1,this.enableChipEdit=d.parseAttributeBoolean(t.mdEnableChipEdit),this.addOnBlur=d.parseAttributeBoolean(t.mdAddOnBlur),this.inputAriaLabel="Chips input.",this.containerHint="Chips container. Use arrow keys to select chips.",this.deleteHint="Press delete to remove this chip.",this.deleteButtonLabel="Remove",this.chipBuffer="",this.useTransformChip=!1,this.useOnAdd=!1,this.useOnRemove=!1,this.wrapperId="",this.contentIds=[],this.ariaTabIndex=null,this.chipAppendDelay=n,this.init()}e.$inject=["$scope","$attrs","$mdConstant","$log","$element","$timeout","$mdUtil"];var n=300;t.module("material.components.chips").controller("MdChipsCtrl",e),e.prototype.init=function(){var e=this;e.wrapperId="_md-chips-wrapper-"+e.$mdUtil.nextUid(),e.$scope.$watchCollection("$mdChipsCtrl.items",function(){e.setupInputAria(),e.setupWrapperAria()}),e.$attrs.$observe("mdChipAppendDelay",function(t){e.chipAppendDelay=parseInt(t)||n})},e.prototype.setupInputAria=function(){var e=this.$element.find("input");e&&(e.attr("role","textbox"),e.attr("aria-multiline",!0))},e.prototype.setupWrapperAria=function(){var e=this,t=this.$element.find("md-chips-wrap");this.items&&this.items.length?(t.attr("role","listbox"),this.contentIds=this.items.map(function(){return e.wrapperId+"-chip-"+e.$mdUtil.nextUid()}),t.attr("aria-owns",this.contentIds.join(" "))):(t.removeAttr("role"),t.removeAttr("aria-owns"))},e.prototype.inputKeydown=function(e){var t=this.getChipBuffer();if(!(this.autocompleteCtrl&&e.isDefaultPrevented&&e.isDefaultPrevented())){if(e.keyCode===this.$mdConstant.KEY_CODE.BACKSPACE){if(0!==this.getCursorPosition(e.target))return;return e.preventDefault(),e.stopPropagation(),void(this.items.length&&this.selectAndFocusChipSafe(this.items.length-1))}if((!this.separatorKeys||this.separatorKeys.length<1)&&(this.separatorKeys=[this.$mdConstant.KEY_CODE.ENTER]),this.separatorKeys.indexOf(e.keyCode)!==-1){if(this.autocompleteCtrl&&this.requireMatch||!t)return;if(e.preventDefault(),this.hasMaxChipsReached())return;return this.appendChip(t.trim()),this.resetChipBuffer(),!1}}},e.prototype.getCursorPosition=function(e){try{if(e.selectionStart===e.selectionEnd)return e.selectionStart}catch(t){if(!e.value)return 0}},e.prototype.updateChipContents=function(e,t){e>=0&&e<this.items.length&&(this.items[e]=t,this.ngModelCtrl.$setDirty())},e.prototype.isEditingChip=function(){return!!this.$element[0].querySelector("._md-chip-editing")},e.prototype.isRemovable=function(){return!!this.ngModelCtrl&&(this.readonly?this.removable:!t.isDefined(this.removable)||this.removable)},e.prototype.chipKeydown=function(e){if(!this.getChipBuffer()&&!this.isEditingChip())switch(e.keyCode){case this.$mdConstant.KEY_CODE.BACKSPACE:case this.$mdConstant.KEY_CODE.DELETE:if(this.selectedChip<0)return;if(e.preventDefault(),!this.isRemovable())return;this.removeAndSelectAdjacentChip(this.selectedChip);break;case this.$mdConstant.KEY_CODE.LEFT_ARROW:e.preventDefault(),(this.selectedChip<0||this.readonly&&0==this.selectedChip)&&(this.selectedChip=this.items.length),this.items.length&&this.selectAndFocusChipSafe(this.selectedChip-1);break;case this.$mdConstant.KEY_CODE.RIGHT_ARROW:e.preventDefault(),this.selectAndFocusChipSafe(this.selectedChip+1);break;case this.$mdConstant.KEY_CODE.ESCAPE:case this.$mdConstant.KEY_CODE.TAB:if(this.selectedChip<0)return;e.preventDefault(),this.onFocus()}},e.prototype.getPlaceholder=function(){var e=this.items&&this.items.length&&(""==this.secondaryPlaceholder||this.secondaryPlaceholder);return e?this.secondaryPlaceholder:this.placeholder},e.prototype.removeAndSelectAdjacentChip=function(e){var t=this,n=t.getAdjacentChipIndex(e);this.$element[0].querySelector("md-chips-wrap"),this.$element[0].querySelector('md-chip[index="'+e+'"]');t.removeChip(e),t.$timeout(function(){t.$timeout(function(){t.selectAndFocusChipSafe(n)})})},e.prototype.resetSelectedChip=function(){this.selectedChip=-1,this.ariaTabIndex=null},e.prototype.getAdjacentChipIndex=function(e){var t=this.items.length-1;return 0==t?-1:e==t?e-1:e},e.prototype.appendChip=function(e){if(this.shouldFocusLastChip=!0,this.useTransformChip&&this.transformChip){var n=this.transformChip({$chip:e});t.isDefined(n)&&(e=n)}if(t.isObject(e)){var o=this.items.some(function(n){return t.equals(e,n)});if(o)return}if(!(null==e||this.items.indexOf(e)+1)){var i=this.items.push(e),r=i-1;this.ngModelCtrl.$setDirty(),this.validateModel(),this.useOnAdd&&this.onAdd&&this.onAdd({$chip:e,$index:r})}},e.prototype.useTransformChipExpression=function(){this.useTransformChip=!0},e.prototype.useOnAddExpression=function(){this.useOnAdd=!0},e.prototype.useOnRemoveExpression=function(){this.useOnRemove=!0},e.prototype.useOnSelectExpression=function(){this.useOnSelect=!0},e.prototype.getChipBuffer=function(){var e=this.userInputElement?this.userInputNgModelCtrl?this.userInputNgModelCtrl.$viewValue:this.userInputElement[0].value:this.chipBuffer;return t.isString(e)?e:""},e.prototype.resetChipBuffer=function(){this.userInputElement?this.userInputNgModelCtrl?(this.userInputNgModelCtrl.$setViewValue(""),this.userInputNgModelCtrl.$render()):this.userInputElement[0].value="":this.chipBuffer=""},e.prototype.hasMaxChipsReached=function(){return t.isString(this.maxChips)&&(this.maxChips=parseInt(this.maxChips,10)||0),this.maxChips>0&&this.items.length>=this.maxChips},e.prototype.validateModel=function(){this.ngModelCtrl.$setValidity("md-max-chips",!this.hasMaxChipsReached())},e.prototype.removeChip=function(e){var t=this.items.splice(e,1);this.ngModelCtrl.$setDirty(),this.validateModel(),t&&t.length&&this.useOnRemove&&this.onRemove&&this.onRemove({$chip:t[0],$index:e})},e.prototype.removeChipAndFocusInput=function(e){this.removeChip(e),this.autocompleteCtrl?(this.autocompleteCtrl.hidden=!0,this.$mdUtil.nextTick(this.onFocus.bind(this))):this.onFocus()},e.prototype.selectAndFocusChipSafe=function(e){if(!this.items.length||e===-1)return this.focusInput();if(e>=this.items.length){if(!this.readonly)return this.onFocus();e=0}e=Math.max(e,0),e=Math.min(e,this.items.length-1),this.selectChip(e),this.focusChip(e)},e.prototype.focusLastChipThenInput=function(){var e=this;e.shouldFocusLastChip=!1,e.focusChip(this.items.length-1),e.$timeout(function(){e.focusInput()},e.chipAppendDelay)},e.prototype.focusInput=function(){this.selectChip(-1),this.onFocus()},e.prototype.selectChip=function(e){e>=-1&&e<=this.items.length?(this.selectedChip=e,this.useOnSelect&&this.onSelect&&this.onSelect({$chip:this.items[e]})):this.$log.warn("Selected Chip index out of bounds; ignoring.")},e.prototype.selectAndFocusChip=function(e){this.selectChip(e),e!=-1&&this.focusChip(e)},e.prototype.focusChip=function(e){var t=this.$element[0].querySelector('md-chip[index="'+e+'"] .md-chip-content');this.ariaTabIndex=e,t.focus()},e.prototype.configureNgModel=function(e){this.ngModelCtrl=e;var t=this;e.$render=function(){t.items=t.ngModelCtrl.$viewValue}},e.prototype.onFocus=function(){var e=this.$element[0].querySelector("input");e&&e.focus(),this.resetSelectedChip()},e.prototype.onInputFocus=function(){this.inputHasFocus=!0,this.setupInputAria(),this.resetSelectedChip()},e.prototype.onInputBlur=function(){this.inputHasFocus=!1,this.shouldAddOnBlur()&&(this.appendChip(this.getChipBuffer().trim()),this.resetChipBuffer())},e.prototype.configureUserInput=function(e){this.userInputElement=e;var n=e.controller("ngModel");n!=this.ngModelCtrl&&(this.userInputNgModelCtrl=n);var o=this.$scope,i=this,r=function(e,n){o.$evalAsync(t.bind(i,n,e))};e.attr({tabindex:0}).on("keydown",function(e){r(e,i.inputKeydown)}).on("focus",function(e){r(e,i.onInputFocus)}).on("blur",function(e){r(e,i.onInputBlur)})},e.prototype.configureAutocomplete=function(e){e&&(this.autocompleteCtrl=e,e.registerSelectedItemWatcher(t.bind(this,function(e){if(e){if(this.hasMaxChipsReached())return;this.appendChip(e),this.resetChipBuffer()}})),this.$element.find("input").on("focus",t.bind(this,this.onInputFocus)).on("blur",t.bind(this,this.onInputBlur)))},e.prototype.shouldAddOnBlur=function(){this.validateModel();var e=this.getChipBuffer().trim(),t=this.ngModelCtrl.$valid,n=this.autocompleteCtrl&&!this.autocompleteCtrl.hidden;return this.userInputNgModelCtrl&&(t=t&&this.userInputNgModelCtrl.$valid),this.addOnBlur&&!this.requireMatch&&e&&t&&!n},e.prototype.hasFocus=function(){return this.inputHasFocus||this.selectedChip>=0},e.prototype.contentIdFor=function(e){return this.contentIds[e]}}(),function(){function e(e,t,a,d,s,c){function l(n,o){function i(e){if(o.ngModel){var t=r[0].querySelector(e);return t&&t.outerHTML}}var r=o.$mdUserTemplate;o.$mdUserTemplate=null;var l=i("md-chips>md-chip-template"),m=t.prefixer().buildList("md-chip-remove").map(function(e){return"md-chips>*["+e+"]"}).join(","),p=i(m)||u.remove,h=l||u["default"],f=i("md-chips>md-autocomplete")||i("md-chips>input")||u.input,g=r.find("md-chip");return r[0].querySelector("md-chip-template>*[md-chip-remove]")&&d.warn("invalid placement of md-chip-remove within md-chip-template."),function(n,i,r,d){t.initOptionalProperties(n,o),e(i);var m=d[0];if(l&&(m.enableChipEdit=!1),m.chipContentsTemplate=h,m.chipRemoveTemplate=p,m.chipInputTemplate=f,m.mdCloseIcon=c.mdClose,i.attr({tabindex:-1}).on("focus",function(){m.onFocus()}),o.ngModel&&(m.configureNgModel(i.controller("ngModel")),r.mdTransformChip&&m.useTransformChipExpression(),r.mdOnAppend&&m.useOnAppendExpression(),r.mdOnAdd&&m.useOnAddExpression(),r.mdOnRemove&&m.useOnRemoveExpression(),r.mdOnSelect&&m.useOnSelectExpression(),f!=u.input&&n.$watch("$mdChipsCtrl.readonly",function(e){e||t.nextTick(function(){if(0===f.indexOf("<md-autocomplete")){var e=i.find("md-autocomplete");m.configureAutocomplete(e.controller("mdAutocomplete"))}m.configureUserInput(i.find("input"))})}),t.nextTick(function(){var e=i.find("input");e&&e.toggleClass("md-input",!0)})),g.length>0){var b=a(g.clone())(n.$parent);s(function(){i.find("md-chips-wrap").prepend(b)})}}}function m(){return{chips:t.processTemplate(n),input:t.processTemplate(o),"default":t.processTemplate(i),remove:t.processTemplate(r)}}var u=m();return{template:function(e,t){return t.$mdUserTemplate=e.clone(),u.chips},require:["mdChips"],restrict:"E",controller:"MdChipsCtrl",controllerAs:"$mdChipsCtrl",bindToController:!0,compile:l,scope:{readonly:"=readonly",removable:"=mdRemovable",placeholder:"@",secondaryPlaceholder:"@",maxChips:"@mdMaxChips",transformChip:"&mdTransformChip",onAppend:"&mdOnAppend",onAdd:"&mdOnAdd",onRemove:"&mdOnRemove",onSelect:"&mdOnSelect",inputAriaLabel:"@",containerHint:"@",deleteHint:"@",deleteButtonLabel:"@",separatorKeys:"=?mdSeparatorKeys",requireMatch:"=?mdRequireMatch",chipAppendDelayString:"@?mdChipAppendDelay"}}}e.$inject=["$mdTheming","$mdUtil","$compile","$log","$timeout","$$mdSvgRegistry"],t.module("material.components.chips").directive("mdChips",e);var n='      <md-chips-wrap          id="{{$mdChipsCtrl.wrapperId}}"          tabindex="{{$mdChipsCtrl.readonly ? 0 : -1}}"          ng-keydown="$mdChipsCtrl.chipKeydown($event)"          ng-class="{ \'md-focused\': $mdChipsCtrl.hasFocus(),                       \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly,                      \'md-removable\': $mdChipsCtrl.isRemovable() }"          aria-setsize="{{$mdChipsCtrl.items.length}}"          class="md-chips">        <span ng-if="$mdChipsCtrl.readonly" class="md-visually-hidden">          {{$mdChipsCtrl.containerHint}}        </span>        <md-chip ng-repeat="$chip in $mdChipsCtrl.items"            index="{{$index}}"            ng-class="{\'md-focused\': $mdChipsCtrl.selectedChip == $index, \'md-readonly\': !$mdChipsCtrl.ngModelCtrl || $mdChipsCtrl.readonly}">          <div class="md-chip-content"              tabindex="{{$mdChipsCtrl.ariaTabIndex == $index ? 0 : -1}}"              id="{{$mdChipsCtrl.contentIdFor($index)}}"              role="option"              aria-selected="{{$mdChipsCtrl.selectedChip == $index}}"               aria-posinset="{{$index}}"              ng-click="!$mdChipsCtrl.readonly && $mdChipsCtrl.focusChip($index)"              ng-focus="!$mdChipsCtrl.readonly && $mdChipsCtrl.selectChip($index)"              md-chip-transclude="$mdChipsCtrl.chipContentsTemplate"></div>          <div ng-if="$mdChipsCtrl.isRemovable()"               class="md-chip-remove-container"               tabindex="-1"               md-chip-transclude="$mdChipsCtrl.chipRemoveTemplate"></div>        </md-chip>        <div class="md-chip-input-container" ng-if="!$mdChipsCtrl.readonly && $mdChipsCtrl.ngModelCtrl">          <div md-chip-transclude="$mdChipsCtrl.chipInputTemplate"></div>        </div>      </md-chips-wrap>',o='        <input            class="md-input"            tabindex="0"            aria-label="{{$mdChipsCtrl.inputAriaLabel}}"             placeholder="{{$mdChipsCtrl.getPlaceholder()}}"            ng-model="$mdChipsCtrl.chipBuffer"            ng-focus="$mdChipsCtrl.onInputFocus()"            ng-blur="$mdChipsCtrl.onInputBlur()"            ng-keydown="$mdChipsCtrl.inputKeydown($event)">',i="      <span>{{$chip}}</span>",r='      <button          class="md-chip-remove"          ng-if="$mdChipsCtrl.isRemovable()"          ng-click="$mdChipsCtrl.removeChipAndFocusInput($$replacedScope.$index)"          type="button"          tabindex="-1">        <md-icon md-svg-src="{{ $mdChipsCtrl.mdCloseIcon }}"></md-icon>        <span class="md-visually-hidden">          {{$mdChipsCtrl.deleteButtonLabel}}        </span>      </button>'}(),function(){function e(){this.selectedItem=null,this.searchText=""}t.module("material.components.chips").controller("MdContactChipsCtrl",e),e.prototype.queryContact=function(e){return this.contactQuery({$query:e})},e.prototype.itemName=function(e){return e[this.contactName]}}(),function(){function e(e,t){function o(n,o){return function(n,i,r,a){var d=a;t.initOptionalProperties(n,o),e(i),i.attr("tabindex","-1"),r.$observe("mdChipAppendDelay",function(e){d.chipAppendDelay=e})}}return{template:function(e,t){return n},restrict:"E",controller:"MdContactChipsCtrl",controllerAs:"$mdContactChipsCtrl",bindToController:!0,compile:o,scope:{contactQuery:"&mdContacts",placeholder:"@",secondaryPlaceholder:"@",contactName:"@mdContactName",contactImage:"@mdContactImage",contactEmail:"@mdContactEmail",contacts:"=ngModel",requireMatch:"=?mdRequireMatch",minLength:"=?mdMinLength",highlightFlags:"@?mdHighlightFlags",chipAppendDelay:"@?mdChipAppendDelay"}}}e.$inject=["$mdTheming","$mdUtil"],t.module("material.components.chips").directive("mdContactChips",e);var n='      <md-chips class="md-contact-chips"          ng-model="$mdContactChipsCtrl.contacts"          md-require-match="$mdContactChipsCtrl.requireMatch"          md-chip-append-delay="{{$mdContactChipsCtrl.chipAppendDelay}}"           md-autocomplete-snap>          <md-autocomplete              md-menu-class="md-contact-chips-suggestions"              md-selected-item="$mdContactChipsCtrl.selectedItem"              md-search-text="$mdContactChipsCtrl.searchText"              md-items="item in $mdContactChipsCtrl.queryContact($mdContactChipsCtrl.searchText)"              md-item-text="$mdContactChipsCtrl.itemName(item)"              md-no-cache="true"              md-min-length="$mdContactChipsCtrl.minLength"              md-autoselect              placeholder="{{$mdContactChipsCtrl.contacts.length == 0 ?                  $mdContactChipsCtrl.placeholder : $mdContactChipsCtrl.secondaryPlaceholder}}">            <div class="md-contact-suggestion">              <img                   ng-src="{{item[$mdContactChipsCtrl.contactImage]}}"                  alt="{{item[$mdContactChipsCtrl.contactName]}}"                  ng-if="item[$mdContactChipsCtrl.contactImage]" />              <span class="md-contact-name" md-highlight-text="$mdContactChipsCtrl.searchText"                    md-highlight-flags="{{$mdContactChipsCtrl.highlightFlags}}">                {{item[$mdContactChipsCtrl.contactName]}}              </span>              <span class="md-contact-email" >{{item[$mdContactChipsCtrl.contactEmail]}}</span>            </div>          </md-autocomplete>          <md-chip-template>            <div class="md-contact-avatar">              <img                   ng-src="{{$chip[$mdContactChipsCtrl.contactImage]}}"                  alt="{{$chip[$mdContactChipsCtrl.contactName]}}"                  ng-if="$chip[$mdContactChipsCtrl.contactImage]" />            </div>            <div class="md-contact-name">              {{$chip[$mdContactChipsCtrl.contactName]}}            </div>          </md-chip-template>      </md-chips>'}(),function(){!function(){function e(){return{template:function(e,t){var n=t.hasOwnProperty("ngIf")?"":'ng-if="calendarCtrl.isInitialized"',o='<div ng-switch="calendarCtrl.currentView" '+n+'><md-calendar-year ng-switch-when="year"></md-calendar-year><md-calendar-month ng-switch-default></md-calendar-month></div>';return o},scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter",_currentView:"@mdCurrentView"},require:["ngModel","mdCalendar"],controller:n,controllerAs:"calendarCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.configureNgModel(i)}}}function n(e,n,o,r,a,d,s,c,l){d(e),this.$element=e,this.$scope=n,this.dateUtil=o,this.$mdUtil=r,this.keyCode=a.KEY_CODE,this.$$rAF=s,this.$mdDateLocale=l,this.today=this.dateUtil.createDateAtMidnight(),this.ngModelCtrl=null,this.SELECTED_DATE_CLASS="md-calendar-selected-date",this.TODAY_CLASS="md-calendar-date-today",this.FOCUSED_DATE_CLASS="md-focus",this.id=i++,this.displayDate=null,this.selectedDate=null,this.firstRenderableDate=null,this.lastRenderableDate=null,this.isInitialized=!1,this.width=0,this.scrollbarWidth=0,c.tabindex||e.attr("tabindex","-1");var m,u=t.bind(this,this.handleKeyEvent);m=e.parent().hasClass("md-datepicker-calendar")?t.element(document.body):e,m.on("keydown",u),n.$on("$destroy",function(){m.off("keydown",u)}),1===t.version.major&&t.version.minor<=4&&this.$onInit()}n.$inject=["$element","$scope","$$mdDateUtil","$mdUtil","$mdConstant","$mdTheming","$$rAF","$attrs","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendar",e);var o=340,i=0;n.prototype.$onInit=function(){this.currentView=this._currentView||"month";var e=this.$mdDateLocale;this.minDate&&this.minDate>e.firstRenderableDate?this.firstRenderableDate=this.minDate:this.firstRenderableDate=e.firstRenderableDate,this.maxDate&&this.maxDate<e.lastRenderableDate?this.lastRenderableDate=this.maxDate:this.lastRenderableDate=e.lastRenderableDate},n.prototype.configureNgModel=function(e){var t=this;t.ngModelCtrl=e,t.$mdUtil.nextTick(function(){t.isInitialized=!0}),e.$render=function(){var e=this.$viewValue;t.$scope.$broadcast("md-calendar-parent-changed",e),t.selectedDate||(t.selectedDate=e),t.displayDate||(t.displayDate=t.selectedDate||t.today)}},n.prototype.setNgModelValue=function(e){
var t=this.dateUtil.createDateAtMidnight(e);return this.focus(t),this.$scope.$emit("md-calendar-change",t),this.ngModelCtrl.$setViewValue(t),this.ngModelCtrl.$render(),t},n.prototype.setCurrentView=function(e,n){var o=this;o.$mdUtil.nextTick(function(){o.currentView=e,n&&(o.displayDate=t.isDate(n)?n:new Date(n))})},n.prototype.focus=function(e){if(this.dateUtil.isValidDate(e)){var t=this.$element[0].querySelector(".md-focus");t&&t.classList.remove(this.FOCUSED_DATE_CLASS);var n=this.getDateId(e,this.currentView),o=document.getElementById(n);o&&(o.classList.add(this.FOCUSED_DATE_CLASS),o.focus(),this.displayDate=e)}else{var i=this.$element[0].querySelector("[ng-switch]");i&&i.focus()}},n.prototype.getActionFromKeyEvent=function(e){var t=this.keyCode;switch(e.which){case t.ENTER:return"select";case t.RIGHT_ARROW:return"move-right";case t.LEFT_ARROW:return"move-left";case t.DOWN_ARROW:return e.metaKey?"move-page-down":"move-row-down";case t.UP_ARROW:return e.metaKey?"move-page-up":"move-row-up";case t.PAGE_DOWN:return"move-page-down";case t.PAGE_UP:return"move-page-up";case t.HOME:return"start";case t.END:return"end";default:return null}},n.prototype.handleKeyEvent=function(e){var t=this;this.$scope.$apply(function(){if(e.which==t.keyCode.ESCAPE||e.which==t.keyCode.TAB)return t.$scope.$emit("md-calendar-close"),void(e.which==t.keyCode.TAB&&e.preventDefault());var n=t.getActionFromKeyEvent(e);n&&(e.preventDefault(),e.stopPropagation(),t.$scope.$broadcast("md-calendar-parent-action",n))})},n.prototype.hideVerticalScrollbar=function(e){function t(){var t=n.width||o,i=n.scrollbarWidth,a=e.calendarScroller;r.style.width=t+"px",a.style.width=t+i+"px",a.style.paddingRight=i+"px"}var n=this,i=e.$element[0],r=i.querySelector(".md-calendar-scroll-mask");n.width>0?t():n.$$rAF(function(){var o=e.calendarScroller;n.scrollbarWidth=o.offsetWidth-o.clientWidth,n.width=i.querySelector("table").offsetWidth,t()})},n.prototype.getDateId=function(e,t){if(!t)throw new Error("A namespace for the date id has to be specified.");return["md",this.id,t,e.getFullYear(),e.getMonth(),e.getDate()].join("-")},n.prototype.updateVirtualRepeat=function(){var e=this.$scope,t=e.$on("$md-resize-enable",function(){e.$$phase||e.$apply(),t()})}}()}(),function(){!function(){function e(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(i-o)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-month-body role="rowgroup" md-virtual-repeat="i in monthCtrl.items" md-month-offset="$index" class="md-calendar-month" md-start-index="monthCtrl.getSelectedMonthIndex()" md-item-size="'+o+'"><tr aria-hidden="true" style="height:'+o+'px;"></tr></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarMonth"],controller:n,controllerAs:"monthCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i,r){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.dateLocale=r,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var a=this;this.cellClickHandler=function(){var e=i.getTimestampFromNode(this);a.$scope.$apply(function(){a.calendarCtrl.setNgModelValue(e)})},this.headerClickHandler=function(){a.calendarCtrl.setCurrentView("year",i.getTimestampFromNode(this))}}n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarMonth",e);var o=265,i=45;n.prototype.initialize=function(e){this.items={length:this.dateUtil.getMonthDistance(e.firstRenderableDate,e.lastRenderableDate)+2},this.calendarCtrl=e,this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getSelectedMonthIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getMonthDistance(e.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeSelectedDate=function(e){var t=this,n=t.calendarCtrl,o=n.selectedDate;n.selectedDate=e,this.changeDisplayDate(e).then(function(){var t=n.SELECTED_DATE_CLASS,i="month";if(o){var r=document.getElementById(n.getDateId(o,i));r&&(r.classList.remove(t),r.setAttribute("aria-selected","false"))}if(e){var a=document.getElementById(n.getDateId(e,i));a&&(a.classList.add(t),a.setAttribute("aria-selected","true"))}})},n.prototype.changeDisplayDate=function(e){if(!this.isInitialized)return this.buildWeekHeader(),this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(!this.dateUtil.isValidDate(e)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var t=this.animateDateChange(e);this.calendarCtrl.displayDate=e;var n=this;return t.then(function(){n.isMonthTransitionInProgress=!1}),t},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getMonthDistance(this.calendarCtrl.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.buildWeekHeader=function(){for(var e=this.dateLocale.firstDayOfWeek,t=this.dateLocale.shortDays,n=document.createElement("tr"),o=0;o<7;o++){var i=document.createElement("th");i.textContent=t[(o+e)%7],n.appendChild(i)}this.$element.find("thead").append(n)},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeSelectedDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(this,this.handleKeyEvent))},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)n.setNgModelValue(o);else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementDays(o,1);break;case"move-left":i=r.incrementDays(o,-1);break;case"move-page-down":i=r.incrementMonths(o,1);break;case"move-page-up":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementDays(o,7);break;case"move-row-up":i=r.incrementDays(o,-7);break;case"start":i=r.getFirstDateOfMonth(o);break;case"end":i=r.getLastDateOfMonth(o)}i&&(i=this.dateUtil.clampDate(i,n.minDate,n.maxDate),this.changeDisplayDate(i).then(function(){n.focus(i)}))}}}()}(),function(){!function(){function e(e,o){var i=e('<md-icon md-svg-src="'+o.mdTabsArrow+'"></md-icon>')({})[0];return{require:["^^mdCalendar","^^mdCalendarMonth","mdCalendarMonthBody"],scope:{offset:"=mdMonthOffset"},controller:n,controllerAs:"mdMonthBodyCtrl",bindToController:!0,link:function(e,n,o,r){var a=r[0],d=r[1],s=r[2];s.calendarCtrl=a,s.monthCtrl=d,s.arrowIcon=i.cloneNode(!0),e.$watch(function(){return s.offset},function(e){t.isNumber(e)&&s.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.monthCtrl=null,this.calendarCtrl=null,this.offset=null,this.focusAfterAppend=null}e.$inject=["$compile","$$mdSvgRegistry"],n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarMonthBody",e),n.prototype.generateContent=function(){var e=this.dateUtil.incrementMonths(this.calendarCtrl.firstRenderableDate,this.offset);this.$element.empty().append(this.buildCalendarForMonth(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildDateCell=function(e){var t=this.monthCtrl,n=this.calendarCtrl,o=document.createElement("td");if(o.tabIndex=-1,o.classList.add("md-calendar-date"),o.setAttribute("role","gridcell"),e){o.setAttribute("tabindex","-1"),o.setAttribute("aria-label",this.dateLocale.longDateFormatter(e)),o.id=n.getDateId(e,"month"),o.setAttribute("data-timestamp",e.getTime()),this.dateUtil.isSameDay(e,n.today)&&o.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameDay(e,n.selectedDate)&&(o.classList.add(n.SELECTED_DATE_CLASS),o.setAttribute("aria-selected","true"));var i=this.dateLocale.dates[e.getDate()];if(this.isDateEnabled(e)){var r=document.createElement("span");r.classList.add("md-calendar-date-selection-indicator"),r.textContent=i,o.appendChild(r),o.addEventListener("click",t.cellClickHandler),n.displayDate&&this.dateUtil.isSameDay(e,n.displayDate)&&(this.focusAfterAppend=o)}else o.classList.add("md-calendar-date-disabled"),o.textContent=i}return o},n.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!t.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(e))},n.prototype.buildDateRow=function(e){var t=document.createElement("tr");return t.setAttribute("role","row"),t.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(e)),t},n.prototype.buildCalendarForMonth=function(e){var t=this.dateUtil.isValidDate(e)?e:new Date,n=this.dateUtil.getFirstDateOfMonth(t),o=this.getLocaleDay_(n),i=this.dateUtil.getNumberOfDaysInMonth(t),r=document.createDocumentFragment(),a=1,d=this.buildDateRow(a);r.appendChild(d);var s=this.offset===this.monthCtrl.items.length-1,c=0,l=document.createElement("td"),m=document.createElement("span");if(m.textContent=this.dateLocale.monthHeaderFormatter(t),l.appendChild(m),l.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&n>this.calendarCtrl.maxDate?l.classList.add("md-calendar-month-label-disabled"):(l.addEventListener("click",this.monthCtrl.headerClickHandler),l.setAttribute("data-timestamp",n.getTime()),l.setAttribute("aria-label",this.dateLocale.monthFormatter(t)),l.appendChild(this.arrowIcon.cloneNode(!0))),o<=2){l.setAttribute("colspan","7");var u=this.buildDateRow();if(u.appendChild(l),r.insertBefore(u,d),s)return r}else c=3,l.setAttribute("colspan","3"),d.appendChild(l);for(var p=c;p<o;p++)d.appendChild(this.buildDateCell());for(var h=o,f=n,g=1;g<=i;g++){if(7===h){if(s)return r;h=0,a++,d=this.buildDateRow(a),r.appendChild(d)}f.setDate(g);var b=this.buildDateCell(f);d.appendChild(b),h++}for(;d.childNodes.length<7;)d.appendChild(this.buildDateCell());for(;r.childNodes.length<6;){for(var v=this.buildDateRow(),E=0;E<7;E++)v.appendChild(this.buildDateCell());r.appendChild(v)}return r},n.prototype.getLocaleDay_=function(e){return(e.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}()}(),function(){!function(){function e(){return{template:'<div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody md-calendar-year-body role="rowgroup" md-virtual-repeat="i in yearCtrl.items" md-year-offset="$index" class="md-calendar-year" md-start-index="yearCtrl.getFocusedYearIndex()" md-item-size="'+o+'"><tr aria-hidden="true" style="height:'+o+'px;"></tr></tbody></table></md-virtual-repeat-container></div>',require:["^^mdCalendar","mdCalendarYear"],controller:n,controllerAs:"yearCtrl",bindToController:!0,link:function(e,t,n,o){var i=o[0],r=o[1];r.initialize(i)}}}function n(e,t,n,o,i){this.$element=e,this.$scope=t,this.$animate=n,this.$q=o,this.dateUtil=i,this.calendarScroller=e[0].querySelector(".md-virtual-repeat-scroller"),this.isInitialized=!1,this.isMonthTransitionInProgress=!1;var r=this;this.cellClickHandler=function(){r.calendarCtrl.setCurrentView("month",i.getTimestampFromNode(this))}}n.$inject=["$element","$scope","$animate","$q","$$mdDateUtil"],t.module("material.components.datepicker").directive("mdCalendarYear",e);var o=88;n.prototype.initialize=function(e){this.items={length:this.dateUtil.getYearDistance(e.firstRenderableDate,e.lastRenderableDate)+1},this.calendarCtrl=e,this.attachScopeListeners(),e.updateVirtualRepeat(),e.ngModelCtrl&&e.ngModelCtrl.$render()},n.prototype.getFocusedYearIndex=function(){var e=this.calendarCtrl;return this.dateUtil.getYearDistance(e.firstRenderableDate,e.displayDate||e.selectedDate||e.today)},n.prototype.changeDate=function(e){if(!this.isInitialized)return this.calendarCtrl.hideVerticalScrollbar(this),this.isInitialized=!0,this.$q.when();if(this.dateUtil.isValidDate(e)&&!this.isMonthTransitionInProgress){var t=this,n=this.animateDateChange(e);return t.isMonthTransitionInProgress=!0,t.calendarCtrl.displayDate=e,n.then(function(){t.isMonthTransitionInProgress=!1})}},n.prototype.animateDateChange=function(e){if(this.dateUtil.isValidDate(e)){var t=this.dateUtil.getYearDistance(this.calendarCtrl.firstRenderableDate,e);this.calendarScroller.scrollTop=t*o}return this.$q.when()},n.prototype.handleKeyEvent=function(e,t){var n=this.calendarCtrl,o=n.displayDate;if("select"===t)this.changeDate(o).then(function(){n.setCurrentView("month",o),n.focus(o)});else{var i=null,r=this.dateUtil;switch(t){case"move-right":i=r.incrementMonths(o,1);break;case"move-left":i=r.incrementMonths(o,-1);break;case"move-row-down":i=r.incrementMonths(o,6);break;case"move-row-up":i=r.incrementMonths(o,-6)}if(i){var a=n.minDate?r.getFirstDateOfMonth(n.minDate):null,d=n.maxDate?r.getFirstDateOfMonth(n.maxDate):null;i=r.getFirstDateOfMonth(this.dateUtil.clampDate(i,a,d)),this.changeDate(i).then(function(){n.focus(i)})}}},n.prototype.attachScopeListeners=function(){var e=this;e.$scope.$on("md-calendar-parent-changed",function(t,n){e.changeDate(n)}),e.$scope.$on("md-calendar-parent-action",t.bind(e,e.handleKeyEvent))}}()}(),function(){!function(){function e(){return{require:["^^mdCalendar","^^mdCalendarYear","mdCalendarYearBody"],scope:{offset:"=mdYearOffset"},controller:n,controllerAs:"mdYearBodyCtrl",bindToController:!0,link:function(e,n,o,i){var r=i[0],a=i[1],d=i[2];d.calendarCtrl=r,d.yearCtrl=a,e.$watch(function(){return d.offset},function(e){t.isNumber(e)&&d.generateContent()})}}}function n(e,t,n){this.$element=e,this.dateUtil=t,this.dateLocale=n,this.calendarCtrl=null,this.yearCtrl=null,this.offset=null,this.focusAfterAppend=null}n.$inject=["$element","$$mdDateUtil","$mdDateLocale"],t.module("material.components.datepicker").directive("mdCalendarYearBody",e),n.prototype.generateContent=function(){var e=this.dateUtil.incrementYears(this.calendarCtrl.firstRenderableDate,this.offset);this.$element.empty().append(this.buildCalendarForYear(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(this.calendarCtrl.FOCUSED_DATE_CLASS),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},n.prototype.buildMonthCell=function(e,t){var n=this.calendarCtrl,o=this.yearCtrl,i=this.buildBlankCell(),r=new Date(e,t,1);i.setAttribute("aria-label",this.dateLocale.monthFormatter(r)),i.id=n.getDateId(r,"year"),i.setAttribute("data-timestamp",r.getTime()),this.dateUtil.isSameMonthAndYear(r,n.today)&&i.classList.add(n.TODAY_CLASS),this.dateUtil.isValidDate(n.selectedDate)&&this.dateUtil.isSameMonthAndYear(r,n.selectedDate)&&(i.classList.add(n.SELECTED_DATE_CLASS),i.setAttribute("aria-selected","true"));var a=this.dateLocale.shortMonths[t];if(this.dateUtil.isMonthWithinRange(r,n.minDate,n.maxDate)){var d=document.createElement("span");d.classList.add("md-calendar-date-selection-indicator"),d.textContent=a,i.appendChild(d),i.addEventListener("click",o.cellClickHandler),n.displayDate&&this.dateUtil.isSameMonthAndYear(r,n.displayDate)&&(this.focusAfterAppend=i)}else i.classList.add("md-calendar-date-disabled"),i.textContent=a;return i},n.prototype.buildBlankCell=function(){var e=document.createElement("td");return e.tabIndex=-1,e.classList.add("md-calendar-date"),e.setAttribute("role","gridcell"),e.setAttribute("tabindex","-1"),e},n.prototype.buildCalendarForYear=function(e){var t,n=e.getFullYear(),o=document.createDocumentFragment(),i=document.createElement("tr"),r=document.createElement("td");for(r.className="md-calendar-month-label",r.textContent=n,i.appendChild(r),t=0;t<6;t++)i.appendChild(this.buildMonthCell(n,t));o.appendChild(i);var a=document.createElement("tr");for(a.appendChild(this.buildBlankCell()),t=6;t<12;t++)a.appendChild(this.buildMonthCell(n,t));return o.appendChild(a),o}}()}(),function(){!function(){t.module("material.components.datepicker").config(["$provide",function(e){function t(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}t.prototype.$get=function(e,t){function n(e,n){if(!e)return"";var o=e.toLocaleTimeString(),i=e;return 0!==e.getHours()||o.indexOf("11:")===-1&&o.indexOf("23:")===-1||(i=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1,0,0)),t("date")(i,"M/d/yyyy",n)}function o(e){return new Date(e)}function i(e){e=e.trim();var t=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return t.test(e)}function r(e){return g.shortMonths[e.getMonth()]+" "+e.getFullYear()}function a(e){return g.months[e.getMonth()]+" "+e.getFullYear()}function d(e){return"Week "+e}function s(e){return[g.days[e.getDay()],g.months[e.getMonth()],g.dates[e.getDate()],e.getFullYear()].join(" ")}for(var c=e.DATETIME_FORMATS.SHORTDAY.map(function(e){return e.substring(0,1)}),l=Array(32),m=1;m<=31;m++)l[m]=m;var u="Calendar",p="Open calendar",h=new Date(1880,0,1),f=new Date(h.getFullYear()+250,0,1),g={months:this.months||e.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||e.DATETIME_FORMATS.SHORTMONTH,days:this.days||e.DATETIME_FORMATS.DAY,shortDays:this.shortDays||c,dates:this.dates||l,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||n,parseDate:this.parseDate||o,isDateComplete:this.isDateComplete||i,monthHeaderFormatter:this.monthHeaderFormatter||r,monthFormatter:this.monthFormatter||a,weekNumberFormatter:this.weekNumberFormatter||d,longDateFormatter:this.longDateFormatter||s,msgCalendar:this.msgCalendar||u,msgOpenCalendar:this.msgOpenCalendar||p,firstRenderableDate:this.firstRenderableDate||h,lastRenderableDate:this.lastRenderableDate||f};return g},t.prototype.$get.$inject=["$locale","$filter"],e.provider("$mdDateLocale",new t)}])}()}(),function(){!function(){t.module("material.components.datepicker").factory("$$mdDateUtil",function(){function e(e){return new Date(e.getFullYear(),e.getMonth(),1)}function n(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function i(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function r(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function a(e,t){return e.getDate()==t.getDate()&&r(e,t)}function d(e,t){var n=o(e);return r(n,t)}function s(e,t){var n=i(e);return r(t,n)}function c(e,t){return b((e.getTime()+t.getTime())/2)}function l(t){var n=e(t);return Math.floor((n.getDay()+t.getDate()-1)/7)}function m(e,t){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+t)}function u(e,t){var o=new Date(e.getFullYear(),e.getMonth()+t,1),i=n(o);return i<e.getDate()?o.setDate(i):o.setDate(e.getDate()),o}function p(e,t){return 12*(t.getFullYear()-e.getFullYear())+(t.getMonth()-e.getMonth())}function h(e){return new Date(e.getFullYear(),e.getMonth(),n(e))}function f(e){return e&&e.getTime&&!isNaN(e.getTime())}function g(e){f(e)&&e.setHours(0,0,0,0)}function b(e){var n;return n=t.isUndefined(e)?new Date:new Date(e),g(n),n}function v(e,t,n){var o=b(e),i=f(t)?b(t):null,r=f(n)?b(n):null;return(!i||i<=o)&&(!r||r>=o)}function E(e,t){return u(e,12*t)}function $(e,t){return t.getFullYear()-e.getFullYear()}function C(e,t,n){var o=e;return t&&e<t&&(o=new Date(t.getTime())),n&&e>n&&(o=new Date(n.getTime())),o}function y(e){if(e&&e.hasAttribute("data-timestamp"))return Number(e.getAttribute("data-timestamp"))}function M(e,t,n){var o=e.getMonth(),i=e.getFullYear();return(!t||t.getFullYear()<i||t.getMonth()<=o)&&(!n||n.getFullYear()>i||n.getMonth()>=o)}return{getFirstDateOfMonth:e,getNumberOfDaysInMonth:n,getDateInNextMonth:o,getDateInPreviousMonth:i,isInNextMonth:d,isInPreviousMonth:s,getDateMidpoint:c,isSameMonthAndYear:r,getWeekOfMonth:l,incrementDays:m,incrementMonths:u,getLastDateOfMonth:h,isSameDay:a,getMonthDistance:p,isValidDate:f,setDateTimeToMidnight:g,createDateAtMidnight:b,isDateWithinRange:v,incrementYears:E,getYearDistance:$,clampDate:C,getTimestampFromNode:y,isMonthWithinRange:M}})}()}(),function(){!function(){function n(e,n,i,r){return{template:function(t,n){var o=n.mdHideIcons,i=n.ariaLabel||n.mdPlaceholder,r="all"===o||"calendar"===o?"":'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" aria-label="md-calendar" md-svg-src="'+e.mdCalendar+'"></md-icon></md-button>',a="";return"all"!==o&&"triangle"!==o&&(a='<md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.locale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button>',t.addClass(c)),r+'<div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input '+(i?'aria-label="'+i+'" ':"")+'class="md-datepicker-input" aria-haspopup="true" aria-expanded="{{ctrl.isCalendarOpen}}" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"> '+a+'</div><div class="md-datepicker-calendar-pane md-whiteframe-z1" id="{{::ctrl.calendarPaneId}}"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.locale.msgCalendar}}" md-current-view="{{::ctrl.currentView}}"md-min-date="ctrl.minDate"md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>'},require:["ngModel","mdDatepicker","?^mdInputContainer","?^form"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",currentView:"@mdCurrentView",dateFilter:"=mdDateFilter",isOpen:"=?mdIsOpen",debounceInterval:"=mdDebounceInterval",dateLocale:"=mdDateLocale"},controller:o,controllerAs:"ctrl",bindToController:!0,link:function(e,o,a,c){var l=c[0],m=c[1],u=c[2],p=c[3],h=n.parseAttributeBoolean(a.mdNoAsterisk);if(m.configureNgModel(l,u,r),u){var f=o[0].querySelector(".md-errors-spacer");f&&o.after(t.element("<div>").append(f)),u.setHasPlaceholder(a.mdPlaceholder),u.input=o,u.element.addClass(d).toggleClass(s,"calendar"!==a.mdHideIcons&&"all"!==a.mdHideIcons),u.label?h||a.$observe("required",function(e){u.label.toggleClass("md-required",!!e)}):i.expect(o,"aria-label",a.mdPlaceholder),e.$watch(u.isErrorGetter||function(){return l.$invalid&&(l.$touched||p&&p.$submitted)},u.setInvalid)}else if(p)var g=e.$watch(function(){return p.$submitted},function(e){e&&(m.updateErrorState(),g())})}}}function o(n,o,i,r,a,d,s,c,l,m,u){this.$window=r,this.dateUtil=l,this.$mdConstant=a,this.$mdUtil=s,this.$$rAF=m,this.$mdDateLocale=c,this.documentElement=t.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=o[0].querySelector("input"),this.ngInputElement=t.element(this.inputElement),this.inputContainer=o[0].querySelector(".md-datepicker-input-container"),this.calendarPane=o[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=o[0].querySelector(".md-datepicker-button"),this.inputMask=t.element(o[0].querySelector(".md-datepicker-input-mask-opaque")),this.$element=o,this.$attrs=i,this.$scope=n,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(o[0].disabled||t.isString(i.disabled)),this.isCalendarOpen=!1,this.openOnFocus=i.hasOwnProperty("mdOpenOnFocus"),this.mdInputContainer=null,this.calendarPaneOpenedFrom=null,this.calendarPaneId="md-date-pane-"+s.nextUid(),this.bodyClickHandler=t.bind(this,this.handleBodyClick),this.windowEventName=p.test(navigator.userAgent||navigator.vendor||e.opera)?"orientationchange":"resize",this.windowEventHandler=s.debounce(t.bind(this,this.closeCalendarPane),100),this.windowBlurHandler=t.bind(this,this.handleWindowBlur),this.ngDateFilter=u("date"),this.leftMargin=20,this.topMargin=null,i.tabindex?(this.ngInputElement.attr("tabindex",i.tabindex),i.$set("tabindex",null)):i.$set("tabindex","-1"),i.$set("aria-owns",this.calendarPaneId),d(o),d(t.element(this.calendarPane));var h=this;n.$on("$destroy",function(){h.detachCalendarPane()}),i.mdIsOpen&&n.$watch("ctrl.isOpen",function(e){e?h.openCalendarPane({target:h.inputElement}):h.closeCalendarPane()}),1===t.version.major&&t.version.minor<=4&&this.$onInit()}o.$inject=["$scope","$element","$attrs","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF","$filter"],n.$inject=["$$mdSvgRegistry","$mdUtil","$mdAria","inputDirective"],t.module("material.components.datepicker").directive("mdDatepicker",n);var i=3,r="md-datepicker-invalid",a="md-datepicker-open",d="_md-datepicker-floating-label",s="_md-datepicker-has-calendar-icon",c="_md-datepicker-has-triangle-icon",l=500,m=368,u=360,p=/ipad|iphone|ipod|android/i;o.prototype.$onInit=function(){this.locale=this.dateLocale?t.extend({},this.$mdDateLocale,this.dateLocale):this.$mdDateLocale,this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners()},o.prototype.configureNgModel=function(e,n,o){this.ngModelCtrl=e,this.mdInputContainer=n,this.$attrs.$set("type","date"),o[0].link.pre(this.$scope,{on:t.noop,val:t.noop,0:{}},this.$attrs,[e]);var i=this;i.ngModelCtrl.$formatters.push(function(e){var n=t.isDefined(e)?Date.parse(e):null;if(!isNaN(n)&&t.isNumber(n)&&(e=new Date(n)),e&&!(e instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance or a value that can be parsed into a date. Currently the model is of type: "+typeof e);return i.onExternalChange(e),e}),e.$viewChangeListeners.unshift(t.bind(this,this.updateErrorState));var r=i.$mdUtil.getModelOption(e,"updateOn");r&&this.ngInputElement.on(r,t.bind(this.$element,this.$element.triggerHandler,r))},o.prototype.attachChangeListeners=function(){var e=this;e.$scope.$on("md-calendar-change",function(t,n){e.setModelValue(n),e.onExternalChange(n),e.closeCalendarPane()}),e.ngInputElement.on("input",t.bind(e,e.resizeInputElement));var n=t.isDefined(this.debounceInterval)?this.debounceInterval:l;e.ngInputElement.on("input",e.$mdUtil.debounce(e.handleInputEvent,n,e))},o.prototype.attachInteractionListeners=function(){var e=this,n=this.$scope,o=this.$mdConstant.KEY_CODE;e.ngInputElement.on("keydown",function(t){t.altKey&&t.keyCode==o.DOWN_ARROW&&(e.openCalendarPane(t),n.$digest())}),e.openOnFocus&&(e.ngInputElement.on("focus",t.bind(e,e.openCalendarPane)),t.element(e.$window).on("blur",e.windowBlurHandler),n.$on("$destroy",function(){t.element(e.$window).off("blur",e.windowBlurHandler)})),n.$on("md-calendar-close",function(){e.closeCalendarPane()})},o.prototype.installPropertyInterceptors=function(){var e=this;if(this.$attrs.ngDisabled){var t=this.$scope.$parent;t&&t.$watch(this.$attrs.ngDisabled,function(t){e.setDisabled(t)})}Object.defineProperty(this,"placeholder",{get:function(){return e.inputElement.placeholder},set:function(t){e.inputElement.placeholder=t||""}})},o.prototype.setDisabled=function(e){this.isDisabled=e,this.inputElement.disabled=e,this.calendarButton&&(this.calendarButton.disabled=e)},o.prototype.updateErrorState=function(e){var n=e||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(n)){if(n=this.dateUtil.createDateAtMidnight(n),this.dateUtil.isValidDate(this.minDate)){var o=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",n>=o)}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",n<=i)}t.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(n))}else this.ngModelCtrl.$setValidity("valid",null==n);t.element(this.inputContainer).toggleClass(r,!this.ngModelCtrl.$valid)},o.prototype.clearErrorState=function(){this.inputContainer.classList.remove(r),["mindate","maxdate","filtered","valid"].forEach(function(e){this.ngModelCtrl.$setValidity(e,!0)},this)},o.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+i},o.prototype.handleInputEvent=function(){var e=this.inputElement.value,t=e?this.locale.parseDate(e):null;this.dateUtil.setDateTimeToMidnight(t);var n=""==e||this.dateUtil.isValidDate(t)&&this.locale.isDateComplete(e)&&this.isDateEnabled(t);n&&(this.setModelValue(t),this.date=t),this.updateErrorState(t)},o.prototype.isDateEnabled=function(e){return this.dateUtil.isDateWithinRange(e,this.minDate,this.maxDate)&&(!t.isFunction(this.dateFilter)||this.dateFilter(e))},o.prototype.attachCalendarPane=function(){var e=this.calendarPane,n=document.body;e.style.transform="",this.$element.addClass(a),this.mdInputContainer&&this.mdInputContainer.element.addClass(a),t.element(n).addClass("md-datepicker-is-showing");var o=this.inputContainer.getBoundingClientRect(),i=n.getBoundingClientRect();(!this.topMargin||this.topMargin<0)&&(this.topMargin=(this.inputMask.parent().prop("clientHeight")-this.ngInputElement.prop("clientHeight"))/2);var r=o.top-i.top-this.topMargin,d=o.left-i.left-this.leftMargin,s=i.top<0&&0==document.body.scrollTop?-i.top:document.body.scrollTop,c=i.left<0&&0==document.body.scrollLeft?-i.left:document.body.scrollLeft,l=s+this.$window.innerHeight,p=c+this.$window.innerWidth;if(this.inputMask.css({position:"absolute",left:this.leftMargin+"px",top:this.topMargin+"px",width:o.width-1+"px",height:o.height-2+"px"}),d+u>p){if(p-u>0)d=p-u;else{d=c;var h=this.$window.innerWidth/u;e.style.transform="scale("+h+")"}e.classList.add("md-datepicker-pos-adjusted")}r+m>l&&l-m>s&&(r=l-m,e.classList.add("md-datepicker-pos-adjusted")),e.style.left=d+"px",e.style.top=r+"px",document.body.appendChild(e),this.$$rAF(function(){e.classList.add("md-pane-open")})},o.prototype.detachCalendarPane=function(){this.$element.removeClass(a),this.mdInputContainer&&this.mdInputContainer.element.removeClass(a),t.element(document.body).removeClass("md-datepicker-is-showing"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},o.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled&&!this.inputFocusedOnWindowBlur){this.isCalendarOpen=this.isOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar(),this.evalAttr("ngFocus");var n=this;this.$mdUtil.nextTick(function(){n.documentElement.on("click touchstart",n.bodyClickHandler)},!1),e.addEventListener(this.windowEventName,this.windowEventHandler)}},o.prototype.closeCalendarPane=function(){function t(){n.isCalendarOpen=n.isOpen=!1}if(this.isCalendarOpen){var n=this;n.detachCalendarPane(),n.ngModelCtrl.$setTouched(),n.evalAttr("ngBlur"),n.documentElement.off("click touchstart",n.bodyClickHandler),e.removeEventListener(n.windowEventName,n.windowEventHandler),n.calendarPaneOpenedFrom.focus(),n.calendarPaneOpenedFrom=null,n.openOnFocus?n.$mdUtil.nextTick(t):t()}},o.prototype.getCalendarCtrl=function(){return t.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},o.prototype.focusCalendar=function(){var e=this;this.$mdUtil.nextTick(function(){e.getCalendarCtrl().focus()},!1)},o.prototype.setFocused=function(e){e||this.ngModelCtrl.$setTouched(),this.openOnFocus||this.evalAttr(e?"ngFocus":"ngBlur"),this.isFocused=e},o.prototype.handleBodyClick=function(e){if(this.isCalendarOpen){var t=this.$mdUtil.getClosest(e.target,"md-calendar");t||this.closeCalendarPane(),this.$scope.$digest()}},o.prototype.handleWindowBlur=function(){this.inputFocusedOnWindowBlur=document.activeElement===this.inputElement},o.prototype.evalAttr=function(e){
this.$attrs[e]&&this.$scope.$parent.$eval(this.$attrs[e])},o.prototype.setModelValue=function(e){var t=this.$mdUtil.getModelOption(this.ngModelCtrl,"timezone");this.ngModelCtrl.$setViewValue(this.ngDateFilter(e,"yyyy-MM-dd",t))},o.prototype.onExternalChange=function(e){var t=this.$mdUtil.getModelOption(this.ngModelCtrl,"timezone");this.date=e,this.inputElement.value=this.locale.formatDate(e,t),this.mdInputContainer&&this.mdInputContainer.setHasValue(!!e),this.resizeInputElement(),this.updateErrorState()}}()}(),function(){function e(e,t,n,o){function i(o,i,r){function a(){r.mdSvgIcon||r.mdSvgSrc||(r.mdFontIcon&&i.addClass("md-font "+r.mdFontIcon),i.addClass(c))}function d(){if(!r.mdSvgIcon&&!r.mdSvgSrc){r.mdFontIcon&&(i.removeClass(s),i.addClass(r.mdFontIcon),s=r.mdFontIcon);var t=e.fontSet(r.mdFontSet);c!==t&&(i.removeClass(c),i.addClass(t),c=t)}}t(i);var s=r.mdFontIcon,c=e.fontSet(r.mdFontSet);a(),r.$observe("mdFontIcon",d),r.$observe("mdFontSet",d);var l=(i[0].getAttribute(r.$attr.mdSvgSrc),r.$normalize(r.$attr.mdSvgIcon||r.$attr.mdSvgSrc||""));if(r.role||(n.expect(i,"role","img"),r.role="img"),"img"===r.role&&!r.ariaHidden&&!n.hasAriaLabel(i)){var m;r.alt?n.expect(i,"aria-label",r.alt):n.parentHasAriaLabel(i,2)?n.expect(i,"aria-hidden","true"):(m=r.mdFontIcon||r.mdSvgIcon||i.text())?n.expect(i,"aria-label",m):n.expect(i,"aria-hidden","true")}l&&r.$observe(l,function(t){i.empty(),t&&e(t).then(function(e){i.empty(),i.append(e)})})}return{restrict:"E",link:i}}t.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria","$sce",e])}(),function(){function n(){}function o(e,t){this.url=e,this.viewBoxSize=t||r.defaultViewBoxSize}function i(n,o,i,r,a,d){function s(e){if(e=e||"",t.isString(e)||(e=d.getTrustedUrl(e)),E[e])return i.when(l(E[e]));if(C.test(e)||y.test(e))return h(e).then(m(e));e.indexOf(":")==-1&&(e="$default:"+e);var o=n[e]?u:p;return o(e).then(m(e))}function c(e){var o=t.isUndefined(e)||!(e&&e.length);if(o)return n.defaultFontSet;var i=e;return t.forEach(n.fontSets,function(t){t.alias==e&&(i=t.fontSet||i)}),i}function l(e){var n=e.clone(),o="_cache"+a.nextUid();return n.id&&(n.id+=o),t.forEach(n.querySelectorAll("[id]"),function(e){e.id+=o}),n}function m(e){return function(t){return E[e]=f(t)?t:new g(t,n[e]),E[e].clone()}}function u(e){var t=n[e];return h(t.url).then(function(e){return new g(e,t)})}function p(e){function t(t){var n=e.slice(e.lastIndexOf(":")+1),i=t.querySelector("#"+n);return i?new g(i,d):o(e)}function o(e){var t="icon "+e+" not found";return r.warn(t),i.reject(t||e)}var a=e.substring(0,e.lastIndexOf(":"))||"$default",d=n[a];return d?h(d.url).then(t):o(e)}function h(n){function a(n){var o=y.exec(n),r=/base64/i.test(n),a=r?e.atob(o[2]):o[2];return i.when(t.element(a)[0])}function d(e){return i(function(n,i){var a=function(e){var n=t.isString(e)?e:e.message||e.data||e.statusText;r.warn(n),i(e)},d=function(o){$[e]||($[e]=t.element("<div>").append(o)[0].querySelector("svg")),n($[e])};o(e,!0).then(d,a)})}return y.test(n)?a(n):d(n)}function f(e){return t.isDefined(e.element)&&t.isDefined(e.config)}function g(e,n){e&&"svg"!=e.tagName&&(e=t.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e.cloneNode(!0))[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=n,this.prepare()}function b(){var e=this.config?this.config.viewBoxSize:n.defaultViewBoxSize;t.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+e+" "+e,focusable:!1},function(e,t){this.element.setAttribute(t,e)},this)}function v(){return this.element.cloneNode(!0)}var E={},$={},C=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,y=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return g.prototype={clone:v,prepare:b},s.fontSet=c,s}i.$inject=["config","$templateRequest","$q","$log","$mdUtil","$sce"],t.module("material.components.icon").constant("$$mdSvgRegistry",{mdTabsArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTUuNCw3LjQgMTQsNiA4LDEyIDE0LDE4IDE1LjQsMTYuNiAxMC44LDEyICIvPjwvZz48L3N2Zz4=",mdClose:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xOSA2LjQxbC0xLjQxLTEuNDEtNS41OSA1LjU5LTUuNTktNS41OS0xLjQxIDEuNDEgNS41OSA1LjU5LTUuNTkgNS41OSAxLjQxIDEuNDEgNS41OS01LjU5IDUuNTkgNS41OSAxLjQxLTEuNDEtNS41OS01LjU5eiIvPjwvZz48L3N2Zz4=",mdCancel:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik0xMiAyYy01LjUzIDAtMTAgNC40Ny0xMCAxMHM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTAtNC40Ny0xMC0xMC0xMHptNSAxMy41OWwtMS40MSAxLjQxLTMuNTktMy41OS0zLjU5IDMuNTktMS40MS0xLjQxIDMuNTktMy41OS0zLjU5LTMuNTkgMS40MS0xLjQxIDMuNTkgMy41OSAzLjU5LTMuNTkgMS40MSAxLjQxLTMuNTkgMy41OSAzLjU5IDMuNTl6Ii8+PC9nPjwvc3ZnPg==",mdMenu:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0zLDZIMjFWOEgzVjZNMywxMUgyMVYxM0gzVjExTTMsMTZIMjFWMThIM1YxNloiIC8+PC9zdmc+",mdToggleArrow:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiPjxwYXRoIGQ9Ik0yNCAxNmwtMTIgMTIgMi44MyAyLjgzIDkuMTctOS4xNyA5LjE3IDkuMTcgMi44My0yLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoNDh2NDhoLTQ4eiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==",mdCalendar:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgM2gtMVYxaC0ydjJIOFYxSDZ2Mkg1Yy0xLjExIDAtMS45OS45LTEuOTkgMkwzIDE5YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY4aDE0djExek03IDEwaDV2NUg3eiIvPjwvc3ZnPg==",mdChecked:"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxnPjxwYXRoIGQ9Ik05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXoiLz48L2c+PC9zdmc+"}).provider("$mdIcon",n);var r={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};n.prototype={icon:function(e,t,n){return e.indexOf(":")==-1&&(e="$default:"+e),r[e]=new o(t,n),this},iconSet:function(e,t,n){return r[e]=new o(t,n),this},defaultIconSet:function(e,t){var n="$default";return r[n]||(r[n]=new o(e,t)),r[n].viewBoxSize=t||r.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return r.defaultViewBoxSize=e,this},fontSet:function(e,t){return r.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return r.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return r.defaultIconSize=e,this},$get:["$templateRequest","$q","$log","$mdUtil","$sce",function(e,t,n,o,a){return i(r,e,t,n,o,a)}]}}(),function(){function e(e,o,i,r,a,d,s,c,l){var m,u,p=a.prefixer(),h=this;this.nestLevel=parseInt(o.mdNestLevel,10)||0,this.init=function(n,o){o=o||{},m=n,u=i[0].querySelector(p.buildSelector(["ng-click","ng-mouseenter"])),u.setAttribute("aria-expanded","false"),this.isInMenuBar=o.isInMenuBar,this.nestedMenus=a.nodesToArray(m[0].querySelectorAll(".md-nested-menu")),m.on("$mdInterimElementRemove",function(){h.isOpen=!1,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)})}),a.nextTick(function(){h.onIsOpenChanged(h.isOpen)});var d="menu_container_"+a.nextUid();m.attr("id",d),t.element(u).attr({"aria-owns":d,"aria-haspopup":"true"}),r.$on("$destroy",t.bind(this,function(){this.disableHoverListener(),e.destroy()})),m.on("$destroy",function(){e.destroy()})};var f,g,b=[];this.enableHoverListener=function(){b.push(s.$on("$mdMenuOpen",function(e,t){m[0].contains(t[0])&&(h.currentlyOpenMenu=t.controller("mdMenu"),h.isAlreadyOpening=!1,h.currentlyOpenMenu.registerContainerProxy(h.triggerContainerProxy.bind(h)))})),b.push(s.$on("$mdMenuClose",function(e,t){m[0].contains(t[0])&&(h.currentlyOpenMenu=n)})),g=t.element(a.nodesToArray(m[0].children[0].children)),g.on("mouseenter",h.handleMenuItemHover),g.on("mouseleave",h.handleMenuItemMouseLeave)},this.disableHoverListener=function(){for(;b.length;)b.shift()();g&&g.off("mouseenter",h.handleMenuItemHover),g&&g.off("mouseleave",h.handleMenuItemMouseLeave)},this.handleMenuItemHover=function(e){if(!h.isAlreadyOpening){var n=e.target.querySelector("md-menu")||a.getClosest(e.target,"MD-MENU");f=d(function(){if(n&&(n=t.element(n).controller("mdMenu")),h.currentlyOpenMenu&&h.currentlyOpenMenu!=n){var e=h.nestLevel+1;h.currentlyOpenMenu.close(!0,{closeTo:e}),h.isAlreadyOpening=!!n,n&&n.open()}else n&&!n.isOpen&&n.open&&(h.isAlreadyOpening=!!n,n&&n.open())},n?100:250);var o=e.currentTarget.querySelector(".md-button:not([disabled])");o&&o.focus()}},this.handleMenuItemMouseLeave=function(){f&&(d.cancel(f),f=n)},this.open=function(t){t&&t.stopPropagation(),t&&t.preventDefault(),h.isOpen||(h.enableHoverListener(),h.isOpen=!0,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)}),u=u||(t?t.target:i[0]),u.setAttribute("aria-expanded","true"),r.$emit("$mdMenuOpen",i),e.show({scope:r,mdMenuCtrl:h,nestLevel:h.nestLevel,element:m,target:u,preserveElement:!0,parent:"body"})["finally"](function(){u.setAttribute("aria-expanded","false"),h.disableHoverListener()}))},this.onIsOpenChanged=function(e){e?(m.attr("aria-hidden","false"),i[0].classList.add("md-open"),t.forEach(h.nestedMenus,function(e){e.classList.remove("md-open")})):(m.attr("aria-hidden","true"),i[0].classList.remove("md-open")),r.$mdMenuIsOpen=h.isOpen},this.focusMenuContainer=function(){var e=m[0].querySelector(p.buildSelector(["md-menu-focus-target","md-autofocus"]));e||(e=m[0].querySelector(".md-button:not([disabled])")),e.focus()},this.registerContainerProxy=function(e){this.containerProxy=e},this.triggerContainerProxy=function(e){this.containerProxy&&this.containerProxy(e)},this.destroy=function(){return h.isOpen?e.destroy():c.when(!1)},this.close=function(n,o){if(h.isOpen){h.isOpen=!1,a.nextTick(function(){h.onIsOpenChanged(h.isOpen)});var d=t.extend({},o,{skipFocus:n});if(r.$emit("$mdMenuClose",i,d),e.hide(null,o),!n){var s=h.restoreFocusTo||i.find("button")[0];s instanceof t.element&&(s=s[0]),s&&s.focus()}}},this.positionMode=function(){var e=(o.mdPositionMode||"target").split(" ");return 1==e.length&&e.push(e[0]),{left:e[0],top:e[1]}},this.offsets=function(){var e=(o.mdOffset||"0 0").split(" ").map(parseFloat);if(2==e.length)return{left:e[0],top:e[1]};if(1==e.length)return{top:e[0],left:e[0]};throw Error("Invalid offsets specified. Please follow format <x, y> or <n>")},r.$mdMenu={open:this.open,close:this.close},r.$mdOpenMenu=t.bind(this,function(){return l.warn("mdMenu: The $mdOpenMenu method is deprecated. Please use `$mdMenu.open`."),this.open.apply(this,arguments)})}e.$inject=["$mdMenu","$attrs","$element","$scope","$mdUtil","$timeout","$rootScope","$q","$log"],t.module("material.components.menu").controller("mdMenuCtrl",e)}(),function(){function e(e){function n(n){n.addClass("md-menu");var r=n.children()[0],a=n.children()[1],d=e.prefixer();d.hasAttribute(r,"ng-click")||(r=r.querySelector(d.buildSelector(["ng-click","ng-mouseenter"]))||r);var s="MD-BUTTON"===r.nodeName||"BUTTON"===r.nodeName;if(r&&s&&!r.hasAttribute("type")&&r.setAttribute("type","button"),!r)throw Error(i+"Expected the menu to have a trigger element.");if(!a||"MD-MENU-CONTENT"!==a.nodeName)throw Error(i+"Expected the menu to contain a `md-menu-content` element.");r&&r.setAttribute("aria-haspopup","true");var c=n[0].querySelectorAll("md-menu"),l=parseInt(n[0].getAttribute("md-nest-level"),10)||0;return c&&t.forEach(e.nodesToArray(c),function(e){e.hasAttribute("md-position-mode")||e.setAttribute("md-position-mode","cascade"),e.classList.add("_md-nested-menu"),e.setAttribute("md-nest-level",l+1)}),o}function o(e,n,o,i){var r=i[0],a=!!i[1],d=t.element('<div class="_md md-open-menu-container md-whiteframe-z2"></div>'),s=n.children()[1];n.addClass("_md"),s.hasAttribute("role")||s.setAttribute("role","menu"),d.append(s),n.on("$destroy",function(){d.remove()}),n.append(d),d[0].style.display="none",r.init(d,{isInMenuBar:a})}var i="Invalid HTML for md-menu: ";return{restrict:"E",require:["mdMenu","?^mdMenuBar"],controller:"mdMenuCtrl",scope:!0,compile:n}}e.$inject=["$mdUtil"],t.module("material.components.menu").directive("mdMenu",e)}(),function(){function e(e){function o(e,o,a,d,s,c,l,m,u,p){function h(n,o,i){return i.nestLevel?t.noop:(i.disableParentScroll&&!e.getClosest(i.target,"MD-DIALOG")?i.restoreScroll=e.disableScrollAround(i.element,i.parent):i.disableParentScroll=!1,i.hasBackdrop&&(i.backdrop=e.createBackdrop(n,"md-menu-backdrop md-click-catcher"),u.enter(i.backdrop,d[0].body)),function(){i.backdrop&&i.backdrop.remove(),i.disableParentScroll&&i.restoreScroll()})}function f(e,t,n){function o(){return m(t,{addClass:"md-leave"}).start()}function i(){t.removeClass("md-active"),E(t,n),n.alreadyOpen=!1}return n.cleanupInteraction(),n.cleanupBackdrop(),n.cleanupResizing(),n.hideBackdrop(),t.removeClass("md-clickable"),n.$destroy===!0?i():o().then(i)}function g(n,i,r){function d(){return r.parent.append(i),i[0].style.display="",c(function(e){var t=$(i,r);i.removeClass("md-leave"),m(i,{addClass:"md-active",from:y.toCss(t),to:y.toCss({transform:""})}).start().then(e)})}function u(){if(!r.target)throw Error("$mdMenu.show() expected a target to animate from in options.target");t.extend(r,{alreadyOpen:!1,isRemoved:!1,target:t.element(r.target),parent:t.element(r.parent),menuContentEl:t.element(i[0].querySelector("md-menu-content"))})}function f(){var e=function(e,t){return l.throttle(function(){if(!r.isRemoved){var n=$(e,t);e.css(y.toCss(n))}})}(i,r);return s.addEventListener("resize",e),s.addEventListener("orientationchange",e),function(){s.removeEventListener("resize",e),s.removeEventListener("orientationchange",e)}}function g(){return r.backdrop?(r.backdrop.on("click",v),function(){r.backdrop.off("click",v)}):t.noop}function v(e){e.preventDefault(),e.stopPropagation(),n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function E(){function o(t){var n;switch(t.keyCode){case a.KEY_CODE.ESCAPE:r.mdMenuCtrl.close(!1,{closeAll:!0}),n=!0;break;case a.KEY_CODE.UP_ARROW:b(t,r.menuContentEl,r,-1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.DOWN_ARROW:b(t,r.menuContentEl,r,1)||r.nestLevel||r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.LEFT_ARROW:r.nestLevel?r.mdMenuCtrl.close():r.mdMenuCtrl.triggerContainerProxy(t),n=!0;break;case a.KEY_CODE.RIGHT_ARROW:var o=e.getClosest(t.target,"MD-MENU");o&&o!=r.parent[0]?t.target.click():r.mdMenuCtrl.triggerContainerProxy(t),n=!0}n&&(t.preventDefault(),t.stopImmediatePropagation())}function i(t){function o(){n.$apply(function(){r.mdMenuCtrl.close(!0,{closeAll:!0})})}function i(e,t){if(!e)return!1;for(var n,o=0;n=t[o];++o)if(C.hasAttribute(e,n))return!0;return!1}var a=t.target;do{if(a==r.menuContentEl[0])return;if((i(a,["ng-click","ng-href","ui-sref"])||"BUTTON"==a.nodeName||"MD-BUTTON"==a.nodeName)&&!i(a,["md-prevent-menu-close"])){var d=e.getClosest(a,"MD-MENU");a.hasAttribute("disabled")||d&&d!=r.parent[0]||o();break}}while(a=a.parentNode)}if(!r.menuContentEl[0])return t.noop;r.menuContentEl.on("keydown",o),r.menuContentEl[0].addEventListener("click",i,!0);var d=r.menuContentEl[0].querySelector(C.buildSelector(["md-menu-focus-target","md-autofocus"]));if(!d)for(var s=r.menuContentEl[0].children.length,c=0;c<s;c++){var l=r.menuContentEl[0].children[c];if(d=l.querySelector(".md-button:not([disabled])"))break;if(l.firstElementChild&&!l.firstElementChild.disabled){d=l.firstElementChild;break}}return d&&d.focus(),function(){r.menuContentEl.off("keydown",o),r.menuContentEl[0].removeEventListener("click",i,!0)}}return u(r),r.menuContentEl[0]?o.inherit(r.menuContentEl,r.target):p.warn("$mdMenu: Menu elements should always contain a `md-menu-content` element,otherwise interactivity features will not work properly.",i),r.cleanupResizing=f(),r.hideBackdrop=h(n,i,r),d().then(function(e){return r.alreadyOpen=!0,r.cleanupInteraction=E(),r.cleanupBackdrop=g(),i.addClass("md-clickable"),e})}function b(t,n,o,i){for(var r,a=e.getClosest(t.target,"MD-MENU-ITEM"),d=e.nodesToArray(n[0].children),s=d.indexOf(a),c=s+i;c>=0&&c<d.length;c+=i){var l=d[c].querySelector(".md-button");if(r=v(l))break}return r}function v(e){if(e&&e.getAttribute("tabindex")!=-1)return e.focus(),d[0].activeElement==e}function E(e,t){t.preserveElement?i(e).style.display="none":i(e).parentNode===i(t.parent)&&i(t.parent).removeChild(i(e))}function $(t,o){function i(e){e.top=Math.max(Math.min(e.top,v.bottom-l.offsetHeight),v.top),e.left=Math.max(Math.min(e.left,v.right-l.offsetWidth),v.left)}function a(){for(var e=0;e<m.children.length;++e)if("none"!=s.getComputedStyle(m.children[e]).display)return m.children[e]}var c,l=t[0],m=t[0].firstElementChild,u=m.getBoundingClientRect(),p=d[0].body,h=p.getBoundingClientRect(),f=s.getComputedStyle(m),g=o.target[0].querySelector(C.buildSelector("md-menu-origin"))||o.target[0],b=g.getBoundingClientRect(),v={left:h.left+r,top:Math.max(h.top,0)+r,bottom:Math.max(h.bottom,Math.max(h.top,0)+h.height)-r,right:h.right-r},E={top:0,left:0,right:0,bottom:0},$={top:0,left:0,right:0,bottom:0},y=o.mdMenuCtrl.positionMode();"target"!=y.top&&"target"!=y.left&&"target-right"!=y.left||(c=a(),c&&(c=c.firstElementChild||c,c=c.querySelector(C.buildSelector("md-menu-align-target"))||c,E=c.getBoundingClientRect(),$={top:parseFloat(l.style.top||0),left:parseFloat(l.style.left||0)}));var M={},T="top ";switch(y.top){case"target":M.top=$.top+b.top-E.top;break;case"cascade":M.top=b.top-parseFloat(f.paddingTop)-g.style.top;break;case"bottom":M.top=b.top+b.height;break;default:throw new Error('Invalid target mode "'+y.top+'" specified for md-menu on Y axis.')}var A="rtl"==e.bidi();switch(y.left){case"target":M.left=$.left+b.left-E.left,T+=A?"right":"left";break;case"target-left":M.left=b.left,T+="left";break;case"target-right":M.left=b.right-u.width+(u.right-E.right),T+="right";break;case"cascade":var w=A?b.left-u.width<v.left:b.right+u.width<v.right;M.left=w?b.right-g.style.left:b.left-g.style.left-u.width,T+=w?"left":"right";break;case"right":A?(M.left=b.right-b.width,T+="left"):(M.left=b.right-u.width,T+="right");break;case"left":A?(M.left=b.right-u.width,T+="right"):(M.left=b.left,T+="left");break;default:throw new Error('Invalid target mode "'+y.left+'" specified for md-menu on X axis.')}var k=o.mdMenuCtrl.offsets();M.top+=k.top,M.left+=k.left,i(M);var _=Math.round(100*Math.min(b.width/l.offsetWidth,1))/100,x=Math.round(100*Math.min(b.height/l.offsetHeight,1))/100;return{top:Math.round(M.top),left:Math.round(M.left),transform:o.alreadyOpen?n:e.supplant("scale({0},{1})",[_,x]),transformOrigin:T}}var C=e.prefixer(),y=e.dom.animator;return{parent:"body",onShow:g,onRemove:f,hasBackdrop:!0,disableParentScroll:!0,skipCompile:!0,preserveScope:!0,multiple:!0,themable:!0}}function i(e){return e instanceof t.element&&(e=e[0]),e}o.$inject=["$mdUtil","$mdTheming","$mdConstant","$document","$window","$q","$$rAF","$animateCss","$animate","$log"];var r=8;return e("$mdMenu").setDefaults({methods:["target"],options:o})}e.$inject=["$$interimElementProvider"],t.module("material.components.menu").provider("$mdMenu",e)}(),function(){function e(e,n,i,r,a,d,s,c){this.$element=i,this.$attrs=r,this.$mdConstant=a,this.$mdUtil=s,this.$document=d,this.$scope=e,this.$rootScope=n,this.$timeout=c;var l=this;t.forEach(o,function(e){l[e]=t.bind(l,l[e])})}e.$inject=["$scope","$rootScope","$element","$attrs","$mdConstant","$document","$mdUtil","$timeout"],t.module("material.components.menuBar").controller("MenuBarController",e);var o=["handleKeyDown","handleMenuHover","scheduleOpenHoveredMenu","cancelScheduledOpen"];e.prototype.init=function(){var e=this.$element,t=this.$mdUtil,o=this.$scope,i=this,r=[];e.on("keydown",this.handleKeyDown),this.parentToolbar=t.getClosest(e,"MD-TOOLBAR"),r.push(this.$rootScope.$on("$mdMenuOpen",function(t,n){i.getMenus().indexOf(n[0])!=-1&&(e[0].classList.add("md-open"),n[0].classList.add("md-open"),i.currentlyOpenMenu=n.controller("mdMenu"),i.currentlyOpenMenu.registerContainerProxy(i.handleKeyDown),i.enableOpenOnHover())})),r.push(this.$rootScope.$on("$mdMenuClose",function(o,r,a){var d=i.getMenus();if(d.indexOf(r[0])!=-1&&(e[0].classList.remove("md-open"),r[0].classList.remove("md-open")),e[0].contains(r[0])){for(var s=r[0];s&&d.indexOf(s)==-1;)s=t.getClosest(s,"MD-MENU",!0);s&&(a.skipFocus||s.querySelector("button:not([disabled])").focus(),i.currentlyOpenMenu=n,i.disableOpenOnHover(),i.setKeyboardMode(!0))}})),o.$on("$destroy",function(){for(i.disableOpenOnHover();r.length;)r.shift()()}),this.setKeyboardMode(!0)},e.prototype.setKeyboardMode=function(e){e?this.$element[0].classList.add("md-keyboard-mode"):this.$element[0].classList.remove("md-keyboard-mode")},e.prototype.enableOpenOnHover=function(){if(!this.openOnHoverEnabled){var e=this;e.openOnHoverEnabled=!0,e.parentToolbar&&(e.parentToolbar.classList.add("md-has-open-menu"),e.$mdUtil.nextTick(function(){t.element(e.parentToolbar).on("click",e.handleParentClick)},!1)),t.element(e.getMenus()).on("mouseenter",e.handleMenuHover)}},e.prototype.handleMenuHover=function(e){this.setKeyboardMode(!1),this.openOnHoverEnabled&&this.scheduleOpenHoveredMenu(e)},e.prototype.disableOpenOnHover=function(){this.openOnHoverEnabled&&(this.openOnHoverEnabled=!1,this.parentToolbar&&(this.parentToolbar.classList.remove("md-has-open-menu"),t.element(this.parentToolbar).off("click",this.handleParentClick)),t.element(this.getMenus()).off("mouseenter",this.handleMenuHover))},e.prototype.scheduleOpenHoveredMenu=function(e){var n=t.element(e.currentTarget),o=n.controller("mdMenu");this.setKeyboardMode(!1),this.scheduleOpenMenu(o)},e.prototype.scheduleOpenMenu=function(e){var t=this,o=this.$timeout;e!=t.currentlyOpenMenu&&(o.cancel(t.pendingMenuOpen),t.pendingMenuOpen=o(function(){t.pendingMenuOpen=n,t.currentlyOpenMenu&&t.currentlyOpenMenu.close(!0,{closeAll:!0}),e.open()},200,!1))},e.prototype.handleKeyDown=function(e){var n=this.$mdConstant.KEY_CODE,o=this.currentlyOpenMenu,i=o&&o.isOpen;this.setKeyboardMode(!0);var r,a,d;switch(e.keyCode){case n.DOWN_ARROW:o?o.focusMenuContainer():this.openFocusedMenu(),r=!0;break;case n.UP_ARROW:o&&o.close(),r=!0;break;case n.LEFT_ARROW:a=this.focusMenu(-1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0;break;case n.RIGHT_ARROW:a=this.focusMenu(1),i&&(d=t.element(a).controller("mdMenu"),this.scheduleOpenMenu(d)),r=!0}r&&(e&&e.preventDefault&&e.preventDefault(),e&&e.stopImmediatePropagation&&e.stopImmediatePropagation())},e.prototype.focusMenu=function(e){var t=this.getMenus(),n=this.getFocusedMenuIndex();n==-1&&(n=this.getOpenMenuIndex());var o=!1;if(n==-1?(n=0,o=!0):(e<0&&n>0||e>0&&n<t.length-e)&&(n+=e,o=!0),o)return t[n].querySelector("button").focus(),t[n]},e.prototype.openFocusedMenu=function(){var e=this.getFocusedMenu();e&&t.element(e).controller("mdMenu").open()},e.prototype.getMenus=function(){var e=this.$element;return this.$mdUtil.nodesToArray(e[0].children).filter(function(e){return"MD-MENU"==e.nodeName})},e.prototype.getFocusedMenu=function(){return this.getMenus()[this.getFocusedMenuIndex()]},e.prototype.getFocusedMenuIndex=function(){var e=this.$mdUtil,t=e.getClosest(this.$document[0].activeElement,"MD-MENU");if(!t)return-1;var n=this.getMenus().indexOf(t);return n},e.prototype.getOpenMenuIndex=function(){for(var e=this.getMenus(),t=0;t<e.length;++t)if(e[t].classList.contains("md-open"))return t;return-1},e.prototype.handleParentClick=function(e){var n=this.querySelector("md-menu.md-open");n&&!n.contains(e.target)&&t.element(n).controller("mdMenu").close(!0,{closeAll:!0})}}(),function(){function e(e,n){return{restrict:"E",require:"mdMenuBar",controller:"MenuBarController",compile:function(o,i){return i.ariaRole||o[0].setAttribute("role","menubar"),t.forEach(o[0].children,function(n){if("MD-MENU"==n.nodeName){n.hasAttribute("md-position-mode")||(n.setAttribute("md-position-mode","left bottom"),n.querySelector("button, a, md-button").setAttribute("role","menuitem"));var o=e.nodesToArray(n.querySelectorAll("md-menu-content"));t.forEach(o,function(e){e.classList.add("md-menu-bar-menu"),e.classList.add("md-dense"),e.hasAttribute("width")||e.setAttribute("width",5)})}}),o.find("md-menu-item").addClass("md-in-menu-bar"),function(e,t,o,i){t.addClass("_md"),n(e,t),i.init()}}}}e.$inject=["$mdUtil","$mdTheming"],t.module("material.components.menuBar").directive("mdMenuBar",e)}(),function(){function e(){return{restrict:"E",compile:function(e,t){t.role||e[0].setAttribute("role","separator")}}}t.module("material.components.menuBar").directive("mdMenuDivider",e)}(),function(){function e(e,t,n){this.$element=t,this.$attrs=n,this.$scope=e}e.$inject=["$scope","$element","$attrs"],t.module("material.components.menuBar").controller("MenuItemController",e),e.prototype.init=function(e){var t=this.$element,n=this.$attrs;this.ngModel=e,"checkbox"!=n.type&&"radio"!=n.type||(this.mode=n.type,this.iconEl=t[0].children[0],this.buttonEl=t[0].children[1],e&&this.initClickListeners())},e.prototype.clearNgAria=function(){var e=this.$element[0],n=["role","tabindex","aria-invalid","aria-checked"];t.forEach(n,function(t){e.removeAttribute(t)})},e.prototype.initClickListeners=function(){function e(){if("radio"==d){var e=a.ngValue?r.$eval(a.ngValue):a.value;return i.$modelValue==e}return i.$modelValue}function n(e){e?c.off("click",l):c.on("click",l)}var o=this,i=this.ngModel,r=this.$scope,a=this.$attrs,d=(this.$element,this.mode);this.handleClick=t.bind(this,this.handleClick);var s=this.iconEl,c=t.element(this.buttonEl),l=this.handleClick;a.$observe("disabled",n),n(a.disabled),i.$render=function(){o.clearNgAria(),e()?(s.style.display="",c.attr("aria-checked","true")):(s.style.display="none",c.attr("aria-checked","false"))},r.$$postDigest(i.$render)},e.prototype.handleClick=function(e){var t,n=this.mode,o=this.ngModel,i=this.$attrs;"checkbox"==n?t=!o.$modelValue:"radio"==n&&(t=i.ngValue?this.$scope.$eval(i.ngValue):i.value),o.$setViewValue(t),o.$render()}}(),function(){function e(e,n,o){return{controller:"MenuItemController",require:["mdMenuItem","?ngModel"],priority:n.BEFORE_NG_ARIA,compile:function(n,i){function r(e,o,i){i=i||n,i instanceof t.element&&(i=i[0]),i.hasAttribute(e)||i.setAttribute(e,o)}function a(o){var i=e.prefixer(o);t.forEach(i,function(e){if(n[0].hasAttribute(e)){var t=n[0].getAttribute(e);l[0].setAttribute(e,t),n[0].removeAttribute(e)}})}var d=i.type,s="md-in-menu-bar";if("checkbox"!=d&&"radio"!=d||!n.hasClass(s))r("role","menuitem",n[0].querySelector("md-button, button, a"));else{var c=n[0].textContent,l=t.element('<md-button type="button"></md-button>'),m='<md-icon md-svg-src="'+o.mdChecked+'"></md-icon>';l.html(c),l.attr("tabindex","0"),n.html(""),n.append(t.element(m)),n.append(l),n.addClass("md-indent").removeClass(s),r("role","checkbox"==d?"menuitemcheckbox":"menuitemradio",l),a("ng-disabled")}return function(e,t,n,o){var i=o[0],r=o[1];i.init(r)}}}}e.$inject=["$mdUtil","$mdConstant","$$mdSvgRegistry"],t.module("material.components.menuBar").directive("mdMenuItem",e)}(),function(){function e(e,n,o,i,r,a){function d(a,d,E){function $(t,o,r,d,s,l){function h(e){_.attr("stroke-dashoffset",c(v,E,e,M)),_.attr("transform","rotate("+y+" "+v/2+" "+v/2+")")}var f=++D,g=i.now(),b=o-t,v=m(a.mdDiameter),E=u(v),$=r||n.easeFn,C=d||n.duration,y=-90*(s||0),M=l||100;o===t?h(o):T=p(function A(){var n=e.Math.max(0,e.Math.min(i.now()-g,C));h($(n,t,b,C)),f===D&&n<C&&(T=p(A))})}function C(){$(x,N,n.easeFnIndeterminate,n.durationIndeterminate,S,75),S=++S%4}function y(){A||(A=r(C,n.durationIndeterminate,0,!1),C(),d.addClass(v).removeAttr("aria-valuenow"))}function M(){A&&(r.cancel(A),A=null,d.removeClass(v))}var T,A,w=d[0],k=t.element(w.querySelector("svg")),_=t.element(w.querySelector("path")),x=n.startIndeterminate,N=n.endIndeterminate,S=0,D=0;o(d),d.toggleClass(b,E.hasOwnProperty("disabled")),a.mdMode===g&&y(),a.$on("$destroy",function(){M(),T&&h(T)}),a.$watchGroup(["value","mdMode",function(){var e=w.disabled;return e===!0||e===!1?e:t.isDefined(d.attr("disabled"))}],function(e,t){var n=e[1],o=e[2],i=t[2];if(o!==i&&d.toggleClass(b,!!o),o)M();else if(n!==f&&n!==g&&(n=g,E.$set("mdMode",n)),n===g)y();else{var r=l(e[0]);M(),d.attr("aria-valuenow",r),$(l(t[0]),r)}}),a.$watch("mdDiameter",function(t){var n=m(t),o=u(n),i=l(a.value),r=n/2+"px",p={width:n+"px",height:n+"px"};k[0].setAttribute("viewBox","0 0 "+n+" "+n),k.css(p).css("transform-origin",r+" "+r+" "+r),d.css(p),_.attr("stroke-width",o),_.attr("stroke-linecap","square"),a.mdMode==g?(_.attr("d",s(n,o,!0)),_.attr("stroke-dasharray",(n-o)*e.Math.PI*.75),_.attr("stroke-dashoffset",c(n,o,1,75))):(_.attr("d",s(n,o,!1)),_.attr("stroke-dasharray",(n-o)*e.Math.PI),_.attr("stroke-dashoffset",c(n,o,0,100)),$(i,i))})}function s(e,t,n){var o=e/2,i=t/2,r=o+","+i,a=i+","+o,d=o-i;return"M"+r+"A"+d+","+d+" 0 1 1 "+a+(n?"":"A"+d+","+d+" 0 0 1 "+r)}function c(t,n,o,i){return(t-n)*e.Math.PI*(3*(i||100)/100-o/100)}function l(t){return e.Math.max(0,e.Math.min(t||0,100))}function m(e){var t=n.progressSize;if(e){var o=parseFloat(e);return e.lastIndexOf("%")===e.length-1&&(o=o/100*t),o}return t}function u(e){return n.strokeWidth/100*e}var p=e.requestAnimationFrame||e.webkitRequestAnimationFrame||t.noop,h=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame||t.noop,f="determinate",g="indeterminate",b="_md-progress-circular-disabled",v="md-mode-indeterminate";return{restrict:"E",scope:{value:"@",mdDiameter:"@",mdMode:"@"},template:'<svg xmlns="http://www.w3.org/2000/svg"><path fill="none"/></svg>',compile:function(e,n){if(e.attr({"aria-valuemin":0,"aria-valuemax":100,role:"progressbar"}),t.isUndefined(n.mdMode)){var o=n.hasOwnProperty("value")?f:g;n.$set("mdMode",o)}else n.$set("mdMode",n.mdMode.trim());return d}}}e.$inject=["$window","$mdProgressCircular","$mdTheming","$mdUtil","$interval","$log"],t.module("material.components.progressCircular").directive("mdProgressCircular",e)}(),function(){function e(){function e(e,t,n,o){return n*e/o+t}function n(e,t,n,o){var i=(e/=o)*e,r=i*e;return t+n*(6*r*i+-15*i*i+10*r)}var o={progressSize:50,strokeWidth:10,duration:100,easeFn:e,durationIndeterminate:1333,startIndeterminate:1,endIndeterminate:149,easeFnIndeterminate:n,easingPresets:{linearEase:e,materialEase:n}};return{configure:function(e){return o=t.extend(o,e||{})},$get:function(){return o}}}t.module("material.components.progressCircular").provider("$mdProgressCircular",e)}(),function(){function e(){function e(e,o,i,r){if(r){var a=r.getTabElementIndex(o),d=n(o,"md-tab-body").remove(),s=n(o,"md-tab-label").remove(),c=r.insertTab({scope:e,parent:e.$parent,index:a,element:o,template:d.html(),label:s.html()},a);e.select=e.select||t.noop,e.deselect=e.deselect||t.noop,e.$watch("active",function(e){e&&r.select(c.getIndex(),!0)}),e.$watch("disabled",function(){r.refreshIndex()}),e.$watch(function(){return r.getTabElementIndex(o)},function(e){c.index=e,r.updateTabOrder()}),e.$on("$destroy",function(){r.removeTab(c)})}}function n(e,n){for(var o=e[0].children,i=0,r=o.length;i<r;i++){var a=o[i];if(a.tagName===n.toUpperCase())return t.element(a)}return t.element()}return{require:"^?mdTabs",terminal:!0,compile:function(o,i){var r=n(o,"md-tab-label"),a=n(o,"md-tab-body");if(0===r.length&&(r=t.element("<md-tab-label></md-tab-label>"),i.label?r.text(i.label):r.append(o.contents()),0===a.length)){var d=o.contents().detach();a=t.element("<md-tab-body></md-tab-body>"),a.append(d)}return o.append(r),a.html()&&o.append(a),e},scope:{active:"=?mdActive",disabled:"=?ngDisabled",select:"&?mdOnSelect",deselect:"&?mdOnDeselect"}}}t.module("material.components.tabs").directive("mdTab",e)}(),function(){function e(){return{require:"^?mdTabs",link:function(e,t,n,o){o&&o.attachRipple(e,t)}}}t.module("material.components.tabs").directive("mdTabItem",e)}(),function(){function e(){return{terminal:!0}}t.module("material.components.tabs").directive("mdTabLabel",e)}(),function(){function e(e){return{restrict:"A",compile:function(t,n){
var o=e(n.mdTabScroll,null,!0);return function(e,t){t.on("mousewheel",function(t){e.$apply(function(){o(e,{$event:t})})})}}}}e.$inject=["$parse"],t.module("material.components.tabs").directive("mdTabScroll",e)}(),function(){function e(e,o,i,r,a,d,s,c,l,m,u){function p(){v("stretchTabs",C),G("focusIndex",k,ue.selectedIndex||0),G("offsetLeft",w,0),G("hasContent",A,!1),G("maxTabWidth",M,Z()),G("shouldPaginate",T,!1),E("noInkBar",L),E("dynamicHeight",R),E("noPagination"),E("swipeContent"),E("noDisconnect"),E("autoselect"),E("noSelectClick"),E("centerTabs",y,!1),E("enableDisconnect"),ue.scope=e,ue.parent=e.$parent,ue.tabs=[],ue.lastSelectedIndex=null,ue.hasFocus=!1,ue.styleTabItemFocus=!1,ue.shouldCenterTabs=V(),ue.tabContentPrefix="tab-content-",h()}function h(){ue.selectedIndex=ue.selectedIndex||0,f(),b(),g(),m(o),d.nextTick(function(){he=j(),ae(),ne(),de(),ue.tabs[ue.selectedIndex]&&ue.tabs[ue.selectedIndex].scope.select(),be=!0,X()})}function f(){var e=c.$mdTabsTemplate,n=t.element(o[0].querySelector("md-tab-data"));n.html(e),l(n.contents())(ue.parent),delete c.$mdTabsTemplate}function g(){t.element(i).on("resize",P),e.$on("$destroy",$)}function b(){e.$watch("$mdTabsCtrl.selectedIndex",_)}function v(e,t){var n=c.$normalize("md-"+e);t&&G(e,t),c.$observe(n,function(t){ue[e]=t})}function E(e,t){function n(t){ue[e]="false"!==t}var o=c.$normalize("md-"+e);t&&G(e,t),c.hasOwnProperty(o)&&n(c[o]),c.$observe(o,n)}function $(){ge=!0,t.element(i).off("resize",P)}function C(e){var n=j();t.element(n.wrapper).toggleClass("md-stretch-tabs",W()),de()}function y(e){ue.shouldCenterTabs=V()}function M(e,n){if(e!==n){var o=j();t.forEach(o.tabs,function(t){t.style.maxWidth=e+"px"}),d.nextTick(ue.updateInkBarStyles)}}function T(e,t){e!==t&&(ue.maxTabWidth=Z(),ue.shouldCenterTabs=V(),d.nextTick(function(){ue.maxTabWidth=Z(),ne(ue.selectedIndex)}))}function A(e){o[e?"removeClass":"addClass"]("md-no-tab-content")}function w(n){var o=j(),i=ue.shouldCenterTabs?"":"-"+n+"px";t.element(o.paging).css(r.CSS.TRANSFORM,"translate3d("+i+", 0, 0)"),e.$broadcast("$mdTabsPaginationChanged")}function k(e,t){e!==t&&j().tabs[e]&&(ne(),te())}function _(t,n){t!==n&&(ue.selectedIndex=K(t),ue.lastSelectedIndex=n,ue.updateInkBarStyles(),ae(),ne(t),e.$broadcast("$mdTabsChanged"),ue.tabs[n]&&ue.tabs[n].scope.deselect(),ue.tabs[t]&&ue.tabs[t].scope.select())}function x(e){var t=o[0].getElementsByTagName("md-tab");return Array.prototype.indexOf.call(t,e[0])}function N(){N.watcher||(N.watcher=e.$watch(function(){d.nextTick(function(){N.watcher&&o.prop("offsetParent")&&(N.watcher(),N.watcher=null,P())},!1)}))}function S(e){switch(e.keyCode){case r.KEY_CODE.LEFT_ARROW:e.preventDefault(),ee(-1,!0);break;case r.KEY_CODE.RIGHT_ARROW:e.preventDefault(),ee(1,!0);break;case r.KEY_CODE.SPACE:case r.KEY_CODE.ENTER:e.preventDefault(),pe||D(ue.focusIndex)}}function D(e,t){pe||(ue.focusIndex=ue.selectedIndex=e),t&&ue.noSelectClick||d.nextTick(function(){ue.tabs[e].element.triggerHandler("click")},!1)}function I(e){ue.shouldPaginate&&(e.preventDefault(),ue.offsetLeft=ce(ue.offsetLeft-e.wheelDelta))}function H(){var e,t,n=j(),o=n.canvas.clientWidth,i=o+ue.offsetLeft;for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>i));e++);o>t.offsetWidth?ue.offsetLeft=ce(t.offsetLeft):ue.offsetLeft=ce(t.offsetLeft+(t.offsetWidth-o+1))}function O(){var e,t,n=j();for(e=0;e<n.tabs.length&&(t=n.tabs[e],!(t.offsetLeft+t.offsetWidth>=ue.offsetLeft));e++);n.canvas.clientWidth>t.offsetWidth?ue.offsetLeft=ce(t.offsetLeft+t.offsetWidth-n.canvas.clientWidth):ue.offsetLeft=ce(t.offsetLeft)}function P(){ue.lastSelectedIndex=ue.selectedIndex,ue.offsetLeft=ce(ue.offsetLeft),d.nextTick(function(){ue.updateInkBarStyles(),X()})}function L(e){t.element(j().inkBar).toggleClass("ng-hide",e)}function R(e){o.toggleClass("md-dynamic-height",e)}function F(e){if(!ge){var t=ue.selectedIndex,n=ue.tabs.splice(e.getIndex(),1)[0];re(),ue.selectedIndex===t&&(n.scope.deselect(),ue.tabs[ue.selectedIndex]&&ue.tabs[ue.selectedIndex].scope.select()),d.nextTick(function(){X(),ue.offsetLeft=ce(ue.offsetLeft)})}}function B(e,n){var o=be,i={getIndex:function(){return ue.tabs.indexOf(r)},isActive:function(){return this.getIndex()===ue.selectedIndex},isLeft:function(){return this.getIndex()<ue.selectedIndex},isRight:function(){return this.getIndex()>ue.selectedIndex},shouldRender:function(){return!ue.noDisconnect||this.isActive()},hasFocus:function(){return ue.styleTabItemFocus&&ue.hasFocus&&this.getIndex()===ue.focusIndex},id:d.nextUid(),hasContent:!(!e.template||!e.template.trim())},r=t.extend(i,e);return t.isDefined(n)?ue.tabs.splice(n,0,r):ue.tabs.push(r),oe(),ie(),d.nextTick(function(){X(),me(r),o&&ue.autoselect&&d.nextTick(function(){d.nextTick(function(){D(ue.tabs.indexOf(r))})})}),r}function j(){var e={},t=o[0];return e.wrapper=t.querySelector("md-tabs-wrapper"),e.canvas=e.wrapper.querySelector("md-tabs-canvas"),e.paging=e.canvas.querySelector("md-pagination-wrapper"),e.inkBar=e.paging.querySelector("md-ink-bar"),e.contents=t.querySelectorAll("md-tabs-content-wrapper > md-tab-content"),e.tabs=e.paging.querySelectorAll("md-tab-item"),e.dummies=e.canvas.querySelectorAll("md-dummy-tab"),e}function U(){return ue.offsetLeft>0}function q(){var e=j(),t=e.tabs[e.tabs.length-1];return t&&t.offsetLeft+t.offsetWidth>e.canvas.clientWidth+ue.offsetLeft}function z(){var e=ue.tabs[ue.focusIndex];return e&&e.id?"tab-item-"+e.id:null}function W(){switch(ue.stretchTabs){case"always":return!0;case"never":return!1;default:return!ue.shouldPaginate&&i.matchMedia("(max-width: 600px)").matches}}function V(){return ue.centerTabs&&!ue.shouldPaginate}function Y(){if(ue.noPagination||!be)return!1;var e=o.prop("clientWidth");return t.forEach(j().dummies,function(t){e-=t.offsetWidth}),e<0}function K(e){if(e===-1)return-1;var t,n,o=Math.max(ue.tabs.length-e,e);for(t=0;t<=o;t++){if(n=ue.tabs[e+t],n&&n.scope.disabled!==!0)return n.getIndex();if(n=ue.tabs[e-t],n&&n.scope.disabled!==!0)return n.getIndex()}return e}function G(e,t,n){Object.defineProperty(ue,e,{get:function(){return n},set:function(e){var o=n;n=e,t&&t(e,o)}})}function X(){ue.maxTabWidth=Z(),ue.shouldPaginate=Y()}function Q(e){var n=0;return t.forEach(e,function(e){n+=Math.max(e.offsetWidth,e.getBoundingClientRect().width)}),Math.ceil(n)}function Z(){return o.prop("clientWidth")}function J(){var e=ue.tabs[ue.selectedIndex],t=ue.tabs[ue.focusIndex];ue.tabs=ue.tabs.sort(function(e,t){return e.index-t.index}),ue.selectedIndex=ue.tabs.indexOf(e),ue.focusIndex=ue.tabs.indexOf(t)}function ee(e,t){var n,o=t?"focusIndex":"selectedIndex",i=ue[o];for(n=i+e;ue.tabs[n]&&ue.tabs[n].scope.disabled;n+=e);ue.tabs[n]&&(ue[o]=n)}function te(){ue.styleTabItemFocus="keyboard"===u.getLastInteractionType(),j().dummies[ue.focusIndex].focus()}function ne(e){var n=j();if(t.isNumber(e)||(e=ue.focusIndex),n.tabs[e]&&!ue.shouldCenterTabs){var o=n.tabs[e],i=o.offsetLeft,r=o.offsetWidth+i;ue.offsetLeft=Math.max(ue.offsetLeft,ce(r-n.canvas.clientWidth+64)),ue.offsetLeft=Math.min(ue.offsetLeft,ce(i))}}function oe(){fe.forEach(function(e){d.nextTick(e)}),fe=[]}function ie(){for(var e=!1,t=0;t<ue.tabs.length;t++)if(ue.tabs[t].hasContent){e=!0;break}ue.hasContent=e}function re(){ue.selectedIndex=K(ue.selectedIndex),ue.focusIndex=K(ue.focusIndex)}function ae(){if(!ue.dynamicHeight)return o.css("height","");if(!ue.tabs.length)return fe.push(ae);var e=j(),t=e.contents[ue.selectedIndex],i=t?t.offsetHeight:0,r=e.wrapper.offsetHeight,a=i+r,c=o.prop("clientHeight");if(c!==a){"bottom"===o.attr("md-align-tabs")&&(c-=r,a-=r,o.attr("md-border-bottom")!==n&&++c),pe=!0;var l={height:c+"px"},m={height:a+"px"};o.css(l),s(o,{from:l,to:m,easing:"cubic-bezier(0.35, 0, 0.25, 1)",duration:.5}).start().done(function(){o.css({transition:"none",height:""}),d.nextTick(function(){o.css("transition","")}),pe=!1})}}function de(){var e=j();if(!e.tabs[ue.selectedIndex])return void t.element(e.inkBar).css({left:"auto",right:"auto"});if(!ue.tabs.length)return fe.push(ue.updateInkBarStyles);if(!o.prop("offsetParent"))return N();var n=ue.selectedIndex,i=e.paging.offsetWidth,r=e.tabs[n],a=r.offsetLeft,s=i-a-r.offsetWidth;if(ue.shouldCenterTabs){var c=Q(e.tabs);i>c&&d.nextTick(de,!1)}se(),t.element(e.inkBar).css({left:a+"px",right:s+"px"})}function se(){var e=j(),n=ue.selectedIndex,o=ue.lastSelectedIndex,i=t.element(e.inkBar);t.isNumber(o)&&i.toggleClass("md-left",n<o).toggleClass("md-right",n>o)}function ce(e){var t=j();if(!t.tabs.length||!ue.shouldPaginate)return 0;var n=t.tabs[t.tabs.length-1],o=n.offsetLeft+n.offsetWidth;return e=Math.max(0,e),e=Math.min(o-t.canvas.clientWidth,e)}function le(e,n){var o=j(),i={colorElement:t.element(o.inkBar)};a.attach(e,n,i)}function me(e){if(e.hasContent){var n=o[0].querySelectorAll('[md-tab-id="'+e.id+'"]');t.element(n).attr("aria-controls",ue.tabContentPrefix+e.id)}}var ue=this,pe=!1,he=j(),fe=[],ge=!1,be=!1;ue.$onInit=p,ue.updatePagination=d.debounce(X,100),ue.redirectFocus=te,ue.attachRipple=le,ue.insertTab=B,ue.removeTab=F,ue.select=D,ue.scroll=I,ue.nextPage=H,ue.previousPage=O,ue.keydown=S,ue.canPageForward=q,ue.canPageBack=U,ue.refreshIndex=re,ue.incrementIndex=ee,ue.getTabElementIndex=x,ue.updateInkBarStyles=d.debounce(de,100),ue.updateTabOrder=d.debounce(J,100),ue.getFocusedTabId=z,1===t.version.major&&t.version.minor<=4&&this.$onInit()}e.$inject=["$scope","$element","$window","$mdConstant","$mdTabInkRipple","$mdUtil","$animateCss","$attrs","$compile","$mdTheming","$mdInteraction"],t.module("material.components.tabs").controller("MdTabsController",e)}(),function(){function e(e){return{scope:{selectedIndex:"=?mdSelected"},template:function(t,n){return n.$mdTabsTemplate=t.html(),'<md-tabs-wrapper> <md-tab-data></md-tab-data> <md-prev-button tabindex="-1" role="button" aria-label="Previous Page" aria-disabled="{{!$mdTabsCtrl.canPageBack()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageBack() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.previousPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-prev-button> <md-next-button tabindex="-1" role="button" aria-label="Next Page" aria-disabled="{{!$mdTabsCtrl.canPageForward()}}" ng-class="{ \'md-disabled\': !$mdTabsCtrl.canPageForward() }" ng-if="$mdTabsCtrl.shouldPaginate" ng-click="$mdTabsCtrl.nextPage()"> <md-icon md-svg-src="'+e.mdTabsArrow+'"></md-icon> </md-next-button> <md-tabs-canvas tabindex="{{ $mdTabsCtrl.hasFocus ? -1 : 0 }}" aria-activedescendant="{{$mdTabsCtrl.getFocusedTabId()}}" ng-focus="$mdTabsCtrl.redirectFocus()" ng-class="{ \'md-paginated\': $mdTabsCtrl.shouldPaginate, \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" ng-keydown="$mdTabsCtrl.keydown($event)" role="tablist"> <md-pagination-wrapper ng-class="{ \'md-center-tabs\': $mdTabsCtrl.shouldCenterTabs }" md-tab-scroll="$mdTabsCtrl.scroll($event)"> <md-tab-item tabindex="-1" class="md-tab" ng-repeat="tab in $mdTabsCtrl.tabs" role="tab" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-click="$mdTabsCtrl.select(tab.getIndex())" ng-class="{ \'md-active\':    tab.isActive(), \'md-focused\':   tab.hasFocus(), \'md-disabled\':  tab.scope.disabled }" ng-disabled="tab.scope.disabled" md-swipe-left="$mdTabsCtrl.nextPage()" md-swipe-touch-action="pan-y" md-swipe-right="$mdTabsCtrl.previousPage()" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-tab-item> <md-ink-bar></md-ink-bar> </md-pagination-wrapper> <md-tabs-dummy-wrapper class="md-visually-hidden md-dummy-wrapper"> <md-dummy-tab class="md-tab" tabindex="-1" id="tab-item-{{::tab.id}}" md-tab-id="{{::tab.id}}"aria-selected="{{tab.isActive()}}" aria-disabled="{{tab.scope.disabled || \'false\'}}" ng-focus="$mdTabsCtrl.hasFocus = true" ng-blur="$mdTabsCtrl.hasFocus = false" ng-repeat="tab in $mdTabsCtrl.tabs" md-tabs-template="::tab.label" md-scope="::tab.parent"></md-dummy-tab> </md-tabs-dummy-wrapper> </md-tabs-canvas> </md-tabs-wrapper> <md-tabs-content-wrapper ng-show="$mdTabsCtrl.hasContent && $mdTabsCtrl.selectedIndex >= 0" class="_md"> <md-tab-content id="{{:: $mdTabsCtrl.tabContentPrefix + tab.id}}" class="_md" role="tabpanel" aria-labelledby="tab-item-{{::tab.id}}" md-swipe-left="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(1)" md-swipe-right="$mdTabsCtrl.swipeContent && $mdTabsCtrl.incrementIndex(-1)" md-swipe-touch-action="pan-y" ng-if="tab.hasContent" ng-repeat="(index, tab) in $mdTabsCtrl.tabs" ng-class="{ \'md-no-transition\': $mdTabsCtrl.lastSelectedIndex == null, \'md-active\':        tab.isActive(), \'md-left\':          tab.isLeft(), \'md-right\':         tab.isRight(), \'md-no-scroll\':     $mdTabsCtrl.dynamicHeight }"> <div md-tabs-template="::tab.template" md-connected-if="tab.isActive()" md-scope="::tab.parent" ng-if="$mdTabsCtrl.enableDisconnect || tab.shouldRender()"></div> </md-tab-content> </md-tabs-content-wrapper>'},controller:"MdTabsController",controllerAs:"$mdTabsCtrl",bindToController:!0}}e.$inject=["$$mdSvgRegistry"],t.module("material.components.tabs").directive("mdTabs",e)}(),function(){function e(e,t){return{require:"^?mdTabs",link:function(n,o,i,r){if(r){var a,d,s=function(){r.updatePagination(),r.updateInkBarStyles()};if("MutationObserver"in t){var c={childList:!0,subtree:!0,characterData:!0};a=new MutationObserver(s),a.observe(o[0],c),d=a.disconnect.bind(a)}else{var l=e.debounce(s,15,null,!1);o.on("DOMSubtreeModified",l),d=o.off.bind(o,"DOMSubtreeModified",l)}n.$on("$destroy",function(){d()})}}}}e.$inject=["$mdUtil","$window"],t.module("material.components.tabs").directive("mdTabsDummyWrapper",e)}(),function(){function e(e,t){function n(n,o,i,r){function a(){n.$watch("connected",function(e){e===!1?d():s()}),n.$on("$destroy",s)}function d(){r.enableDisconnect&&t.disconnectScope(c)}function s(){r.enableDisconnect&&t.reconnectScope(c)}if(r){var c=r.enableDisconnect?n.compileScope.$new():n.compileScope;return o.html(n.template),e(o.contents())(c),t.nextTick(a)}}return{restrict:"A",link:n,scope:{template:"=mdTabsTemplate",connected:"=?mdConnectedIf",compileScope:"=mdScope"},require:"^?mdTabs"}}e.$inject=["$compile","$mdUtil"],t.module("material.components.tabs").directive("mdTabsTemplate",e)}(),function(){t.module("material.core").constant("$MD_THEME_CSS",'md-autocomplete.md-THEME_NAME-theme{background:"{{background-A100}}"}md-autocomplete.md-THEME_NAME-theme[disabled]:not([md-floating-label]){background:"{{background-100}}"}md-autocomplete.md-THEME_NAME-theme button md-icon path{fill:"{{background-600}}"}md-autocomplete.md-THEME_NAME-theme button:after{background:"{{background-600-0.3}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme{background:"{{background-A100}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li{color:"{{background-900}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li .highlight{color:"{{background-600}}"}.md-autocomplete-suggestions-container.md-THEME_NAME-theme li.selected,.md-autocomplete-suggestions-container.md-THEME_NAME-theme li:hover{background:"{{background-200}}"}md-backdrop{background-color:"{{background-900-0.0}}"}md-backdrop.md-opaque.md-THEME_NAME-theme{background-color:"{{background-900-1.0}}"}md-bottom-sheet.md-THEME_NAME-theme{background-color:"{{background-50}}";border-top-color:"{{background-300}}"}md-bottom-sheet.md-THEME_NAME-theme.md-list md-list-item{color:"{{foreground-1}}"}md-bottom-sheet.md-THEME_NAME-theme .md-subheader{background-color:"{{background-50}}";color:"{{foreground-1}}"}.md-button.md-THEME_NAME-theme:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme:not([disabled]):hover{background-color:"{{background-500-0.2}}"}.md-button.md-THEME_NAME-theme:not([disabled]).md-icon-button:hover{background-color:transparent}.md-button.md-THEME_NAME-theme.md-fab md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab,.md-button.md-THEME_NAME-theme.md-primary.md-raised{color:"{{primary-contrast}}";background-color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]) md-icon{color:"{{primary-contrast}}"}.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-primary.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-primary.md-raised:not([disabled]):hover{background-color:"{{primary-600}}"}.md-button.md-THEME_NAME-theme.md-primary:not([disabled]) md-icon{color:"{{primary-color}}"}.md-button.md-THEME_NAME-theme.md-fab{background-color:"{{accent-color}}";color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-fab:not([disabled]) .md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-fab:not([disabled]):hover{background-color:"{{accent-A700}}"}.md-button.md-THEME_NAME-theme.md-raised{color:"{{background-900}}";background-color:"{{background-50}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]) md-icon{color:"{{background-900}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]):hover{background-color:"{{background-50}}"}.md-button.md-THEME_NAME-theme.md-raised:not([disabled]).md-focused{background-color:"{{background-200}}"}.md-button.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab,.md-button.md-THEME_NAME-theme.md-warn.md-raised{color:"{{warn-contrast}}";background-color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]) md-icon{color:"{{warn-contrast}}"}.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-warn.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-warn.md-raised:not([disabled]):hover{background-color:"{{warn-600}}"}.md-button.md-THEME_NAME-theme.md-warn:not([disabled]) md-icon{color:"{{warn-color}}"}.md-button.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab,.md-button.md-THEME_NAME-theme.md-accent.md-raised{color:"{{accent-contrast}}";background-color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]) md-icon,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]) md-icon{color:"{{accent-contrast}}"}.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-accent.md-fab:not([disabled]):hover,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]).md-focused,.md-button.md-THEME_NAME-theme.md-accent.md-raised:not([disabled]):hover{background-color:"{{accent-A700}}"}.md-button.md-THEME_NAME-theme.md-accent:not([disabled]) md-icon{color:"{{accent-color}}"}.md-button.md-THEME_NAME-theme.md-accent[disabled],.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled],.md-button.md-THEME_NAME-theme.md-warn[disabled],.md-button.md-THEME_NAME-theme[disabled]{color:"{{foreground-3}}";cursor:default}.md-button.md-THEME_NAME-theme.md-accent[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-fab[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-raised[disabled] md-icon,.md-button.md-THEME_NAME-theme.md-warn[disabled] md-icon,.md-button.md-THEME_NAME-theme[disabled] md-icon{color:"{{foreground-3}}"}.md-button.md-THEME_NAME-theme.md-fab[disabled],.md-button.md-THEME_NAME-theme.md-raised[disabled]{background-color:"{{foreground-4}}"}.md-button.md-THEME_NAME-theme[disabled]{background-color:transparent}._md a.md-THEME_NAME-theme:not(.md-button).md-primary{color:"{{primary-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-primary:hover{color:"{{primary-700}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-accent{color:"{{accent-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-accent:hover{color:"{{accent-A700}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-warn{color:"{{warn-color}}"}._md a.md-THEME_NAME-theme:not(.md-button).md-warn:hover{color:"{{warn-700}}"}md-card.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-hue-1}}";border-radius:2px}md-card.md-THEME_NAME-theme .md-card-image{border-radius:2px 2px 0 0}md-card.md-THEME_NAME-theme md-card-header md-card-avatar md-icon{color:"{{background-color}}";background-color:"{{foreground-3}}"}md-card.md-THEME_NAME-theme md-card-header md-card-header-text .md-subhead,md-card.md-THEME_NAME-theme md-card-title md-card-title-text:not(:only-child) .md-subhead{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme .md-ripple{color:"{{accent-A700}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-ripple{color:"{{background-600}}"}md-checkbox.md-THEME_NAME-theme.md-checked.md-focused .md-container:before{background-color:"{{accent-color-0.26}}"}md-checkbox.md-THEME_NAME-theme .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-icon{background-color:"{{accent-color-0.87}}"}md-checkbox.md-THEME_NAME-theme.md-checked .md-icon:after{border-color:"{{accent-contrast-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ripple{color:"{{primary-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ripple{color:"{{background-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple{color:"{{primary-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon{background-color:"{{primary-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked.md-focused .md-container:before{background-color:"{{primary-color-0.26}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-icon:after{border-color:"{{primary-contrast-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-primary .md-indeterminate[disabled] .md-container{color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ripple{color:"{{warn-600}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn .md-ink-ripple{color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple{color:"{{warn-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon{background-color:"{{warn-color-0.87}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked.md-focused:not([disabled]) .md-container:before{background-color:"{{warn-color-0.26}}"}md-checkbox.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-icon:after{border-color:"{{background-200}}"}md-checkbox.md-THEME_NAME-theme[disabled]:not(.md-checked) .md-icon{border-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon{background-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled].md-checked .md-icon:after{border-color:"{{background-200}}"}md-checkbox.md-THEME_NAME-theme[disabled] .md-icon:after{border-color:"{{foreground-3}}"}md-checkbox.md-THEME_NAME-theme[disabled] .md-label{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips{box-shadow:0 1px "{{foreground-4}}"}md-chips.md-THEME_NAME-theme .md-chips.md-focused{box-shadow:0 2px "{{primary-color}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input{color:"{{foreground-1}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-moz-placeholder,md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-moz-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input:-ms-input-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme .md-chips .md-chip-input-container input::-webkit-input-placeholder{color:"{{foreground-3}}"}md-chips.md-THEME_NAME-theme md-chip{background:"{{background-300}}";color:"{{background-800}}"}md-chips.md-THEME_NAME-theme md-chip md-icon{color:"{{background-700}}"}md-chips.md-THEME_NAME-theme md-chip.md-focused{background:"{{primary-color}}";color:"{{primary-contrast}}"}md-chips.md-THEME_NAME-theme md-chip.md-focused md-icon{color:"{{primary-contrast}}"}md-chips.md-THEME_NAME-theme md-chip._md-chip-editing{background:transparent;color:"{{background-800}}"}md-chips.md-THEME_NAME-theme md-chip-remove .md-button md-icon path{fill:"{{background-500}}"}.md-contact-suggestion span.md-contact-email{color:"{{background-400}}"}md-content.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-default}}"}.md-calendar.md-THEME_NAME-theme{background:"{{background-A100}}";color:"{{background-A200-0.87}}"}.md-calendar.md-THEME_NAME-theme tr:last-child td{border-bottom-color:"{{background-200}}"}.md-THEME_NAME-theme .md-calendar-day-header{background:"{{background-300}}";color:"{{background-A200-0.87}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today .md-calendar-date-selection-indicator{border:1px solid "{{primary-500}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-date-today.md-calendar-date-disabled{color:"{{primary-500-0.6}}"}.md-calendar-date.md-focus .md-THEME_NAME-theme .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date-selection-indicator:hover{background:"{{background-300}}"}.md-THEME_NAME-theme .md-calendar-date.md-calendar-selected-date .md-calendar-date-selection-indicator,.md-THEME_NAME-theme .md-calendar-date.md-focus.md-calendar-selected-date .md-calendar-date-selection-indicator{background:"{{primary-500}}";color:"{{primary-500-contrast}}";border-color:transparent}.md-THEME_NAME-theme .md-calendar-date-disabled,.md-THEME_NAME-theme .md-calendar-month-label-disabled{color:"{{background-A200-0.435}}"}.md-THEME_NAME-theme .md-datepicker-input{color:"{{foreground-1}}"}.md-THEME_NAME-theme .md-datepicker-input:-moz-placeholder,.md-THEME_NAME-theme .md-datepicker-input::-moz-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input:-ms-input-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input::-webkit-input-placeholder{color:"{{foreground-3}}"}.md-THEME_NAME-theme .md-datepicker-input-container{border-bottom-color:"{{foreground-4}}"}.md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{primary-color}}"}.md-accent .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{accent-color}}"}.md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-invalid,.md-warn .md-THEME_NAME-theme .md-datepicker-input-container.md-datepicker-focused{border-bottom-color:"{{warn-A700}}"}.md-THEME_NAME-theme .md-datepicker-calendar-pane{border-color:"{{background-hue-1}}"}.md-THEME_NAME-theme .md-datepicker-triangle-button .md-datepicker-expand-triangle{border-top-color:"{{foreground-2}}"}.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon{color:"{{primary-color}}"}.md-accent .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon,.md-THEME_NAME-theme .md-datepicker-open.md-accent .md-datepicker-calendar-icon{color:"{{accent-color}}"}.md-THEME_NAME-theme .md-datepicker-open.md-warn .md-datepicker-calendar-icon,.md-warn .md-THEME_NAME-theme .md-datepicker-open .md-datepicker-calendar-icon{color:"{{warn-A700}}"}.md-THEME_NAME-theme .md-datepicker-calendar{background:"{{background-A100}}"}.md-THEME_NAME-theme .md-datepicker-input-mask-opaque{box-shadow:0 0 0 9999px "{{background-hue-1}}"}.md-THEME_NAME-theme .md-datepicker-open .md-datepicker-input-container{background:"{{background-hue-1}}"}md-dialog.md-THEME_NAME-theme{border-radius:4px;background-color:"{{background-hue-1}}";color:"{{foreground-1}}"}md-dialog.md-THEME_NAME-theme.md-content-overflow .md-actions,md-dialog.md-THEME_NAME-theme.md-content-overflow md-dialog-actions,md-divider.md-THEME_NAME-theme{border-top-color:"{{foreground-4}}"}.layout-gt-lg-row>md-divider.md-THEME_NAME-theme,.layout-gt-md-row>md-divider.md-THEME_NAME-theme,.layout-gt-sm-row>md-divider.md-THEME_NAME-theme,.layout-gt-xs-row>md-divider.md-THEME_NAME-theme,.layout-lg-row>md-divider.md-THEME_NAME-theme,.layout-md-row>md-divider.md-THEME_NAME-theme,.layout-row>md-divider.md-THEME_NAME-theme,.layout-sm-row>md-divider.md-THEME_NAME-theme,.layout-xl-row>md-divider.md-THEME_NAME-theme,.layout-xs-row>md-divider.md-THEME_NAME-theme{border-right-color:"{{foreground-4}}"}md-icon.md-THEME_NAME-theme{color:"{{foreground-2}}"}md-icon.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}md-icon.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}md-icon.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}md-input-container.md-THEME_NAME-theme .md-input{color:"{{foreground-1}}";border-color:"{{foreground-4}}"}md-input-container.md-THEME_NAME-theme .md-input:-moz-placeholder,md-input-container.md-THEME_NAME-theme .md-input::-moz-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme .md-input:-ms-input-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme .md-input::-webkit-input-placeholder{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme>md-icon{color:"{{foreground-1}}"}md-input-container.md-THEME_NAME-theme .md-placeholder,md-input-container.md-THEME_NAME-theme label{color:"{{foreground-3}}"}md-input-container.md-THEME_NAME-theme label.md-required:after{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-focused):not(.md-input-invalid) label.md-required:after{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme .md-input-message-animation,md-input-container.md-THEME_NAME-theme .md-input-messages-animation{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme .md-input-message-animation .md-char-counter,md-input-container.md-THEME_NAME-theme .md-input-messages-animation .md-char-counter{color:"{{foreground-1}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input:-moz-placeholder,md-input-container.md-THEME_NAME-theme.md-input-focused .md-input::-moz-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input:-ms-input-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme.md-input-focused .md-input::-webkit-input-placeholder{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-has-value label{color:"{{foreground-2}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused .md-input,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-resized .md-input{border-color:"{{primary-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused md-icon{color:"{{primary-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent .md-input{border-color:"{{accent-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-accent md-icon{color:"{{accent-color}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn .md-input{border-color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn label,md-input-container.md-THEME_NAME-theme:not(.md-input-invalid).md-input-focused.md-warn md-icon{color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input{border-color:"{{warn-A700}}"}md-input-container.md-THEME_NAME-theme.md-input-invalid .md-char-counter,md-input-container.md-THEME_NAME-theme.md-input-invalid .md-input-message-animation,md-input-container.md-THEME_NAME-theme.md-input-invalid label{color:"{{warn-A700}}"}[disabled] md-input-container.md-THEME_NAME-theme .md-input,md-input-container.md-THEME_NAME-theme .md-input[disabled]{border-bottom-color:transparent;color:"{{foreground-3}}";background-image:linear-gradient(90deg,"{{foreground-3}}" 0,"{{foreground-3}}" 33%,transparent 0);background-image:-ms-linear-gradient(left,transparent 0,"{{foreground-3}}" 100%)}md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text h4,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h3,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text h4{color:"{{foreground-1}}"}md-list.md-THEME_NAME-theme md-list-item.md-2-line .md-list-item-text p,md-list.md-THEME_NAME-theme md-list-item.md-3-line .md-list-item-text p{color:"{{foreground-2}}"}md-list.md-THEME_NAME-theme .md-proxy-focus.md-focused div.md-no-style{background-color:"{{background-100}}"}md-list.md-THEME_NAME-theme md-list-item .md-avatar-icon{background-color:"{{foreground-3}}";color:"{{background-color}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon{color:"{{foreground-2}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon.md-highlight{color:"{{primary-color}}"}md-list.md-THEME_NAME-theme md-list-item>md-icon.md-highlight.md-accent{color:"{{accent-color}}"}md-menu-content.md-THEME_NAME-theme{background-color:"{{background-A100}}"}md-menu-content.md-THEME_NAME-theme md-menu-item{color:"{{background-A200-0.87}}"}md-menu-content.md-THEME_NAME-theme md-menu-item md-icon{color:"{{background-A200-0.54}}"}md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled],md-menu-content.md-THEME_NAME-theme md-menu-item .md-button[disabled] md-icon{color:"{{background-A200-0.25}}"}md-menu-content.md-THEME_NAME-theme md-menu-divider{background-color:"{{background-A200-0.11}}"}md-menu-bar.md-THEME_NAME-theme>button.md-button{color:"{{foreground-2}}";border-radius:2px}md-menu-bar.md-THEME_NAME-theme md-menu.md-open>button,md-menu-bar.md-THEME_NAME-theme md-menu>button:focus{outline:none;background:"{{background-200}}"}md-menu-bar.md-THEME_NAME-theme.md-open:not(.md-keyboard-mode) md-menu:hover>button{background-color:"{{ background-500-0.2}}"}md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:focus,md-menu-bar.md-THEME_NAME-theme:not(.md-keyboard-mode):not(.md-open) md-menu button:hover{background:transparent}md-menu-content.md-THEME_NAME-theme .md-menu>.md-button:after{color:"{{background-A200-0.54}}"}md-menu-content.md-THEME_NAME-theme .md-menu.md-open>.md-button{background-color:"{{ background-500-0.2}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar{background-color:"{{background-A100}}";color:"{{background-A200}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler{background-color:"{{primary-color}}";color:"{{background-A100-0.87}}"}md-toolbar.md-THEME_NAME-theme.md-menu-toolbar md-toolbar-filler md-icon{color:"{{background-A100-0.87}}"}md-nav-bar.md-THEME_NAME-theme .md-nav-bar{background-color:transparent;border-color:"{{foreground-4}}"}md-nav-bar.md-THEME_NAME-theme .md-button._md-nav-button.md-unselected{color:"{{foreground-2}}"}md-nav-bar.md-THEME_NAME-theme md-nav-ink-bar{color:"{{accent-color}}";background:"{{accent-color}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar{background-color:"{{accent-color}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar .md-button._md-nav-button{color:"{{accent-A100}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-active,md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{accent-contrast}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{accent-contrast-0.1}}"}md-nav-bar.md-THEME_NAME-theme.md-accent>.md-nav-bar md-nav-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar{background-color:"{{warn-color}}"}md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar .md-button._md-nav-button{color:"{{warn-100}}"}md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-active,md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{warn-contrast}}"}md-nav-bar.md-THEME_NAME-theme.md-warn>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{warn-contrast-0.1}}"}md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar{background-color:"{{primary-color}}"}md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar .md-button._md-nav-button{color:"{{primary-100}}"}md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-active,md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{primary-contrast}}"}md-nav-bar.md-THEME_NAME-theme.md-primary>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{primary-contrast-0.1}}"}md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar{background-color:"{{primary-color}}"}md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button{color:"{{primary-100}}"}md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-active,md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{primary-contrast}}"}md-toolbar>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{primary-contrast-0.1}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar{background-color:"{{accent-color}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button{color:"{{accent-A100}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-active,md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{accent-contrast}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{accent-contrast-0.1}}"}md-toolbar.md-accent>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar md-nav-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar{background-color:"{{warn-color}}"}md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button{color:"{{warn-100}}"}md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-active,md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{color:"{{warn-contrast}}"}md-toolbar.md-warn>md-nav-bar.md-THEME_NAME-theme>.md-nav-bar .md-button._md-nav-button.md-focused{background:"{{warn-contrast-0.1}}"}md-progress-circular.md-THEME_NAME-theme path{stroke:"{{primary-color}}"}md-progress-circular.md-THEME_NAME-theme.md-warn path{stroke:"{{warn-color}}"}md-progress-circular.md-THEME_NAME-theme.md-accent path{stroke:"{{accent-color}}"}._md-panel-backdrop.md-THEME_NAME-theme{background-color:"{{background-900-1.0}}"}md-progress-linear.md-THEME_NAME-theme .md-container{background-color:"{{primary-100}}"}md-progress-linear.md-THEME_NAME-theme .md-bar{background-color:"{{primary-color}}"}md-progress-linear.md-THEME_NAME-theme.md-warn .md-container{background-color:"{{warn-100}}"}md-progress-linear.md-THEME_NAME-theme.md-warn .md-bar{background-color:"{{warn-color}}"}md-progress-linear.md-THEME_NAME-theme.md-accent .md-container{background-color:"{{accent-100}}"}md-progress-linear.md-THEME_NAME-theme.md-accent .md-bar{background-color:"{{accent-color}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-bar1{background-color:"{{warn-100}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-warn .md-dashed:before{background:radial-gradient("{{warn-100}}" 0,"{{warn-100}}" 16%,transparent 42%)}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-bar1{background-color:"{{accent-100}}"}md-progress-linear.md-THEME_NAME-theme[md-mode=buffer].md-accent .md-dashed:before{background:radial-gradient("{{accent-100}}" 0,"{{accent-100}}" 16%,transparent 42%)}md-radio-button.md-THEME_NAME-theme .md-off{border-color:"{{foreground-2}}"}md-radio-button.md-THEME_NAME-theme .md-on{background-color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme.md-checked .md-off{border-color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color-0.87}}"}md-radio-button.md-THEME_NAME-theme .md-container .md-ripple{color:"{{accent-A700}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-on{background-color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-off{border-color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-checked .md-ink-ripple{color:"{{primary-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-primary .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-primary .md-container .md-ripple{color:"{{primary-600}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-on,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-on{background-color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-off,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-off{border-color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn.md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-checked .md-ink-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-checked .md-ink-ripple{color:"{{warn-color-0.87}}"}md-radio-button.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-button.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]).md-warn .md-container .md-ripple,md-radio-group.md-THEME_NAME-theme:not([disabled]) .md-warn .md-container .md-ripple{color:"{{warn-600}}"}md-radio-button.md-THEME_NAME-theme[disabled],md-radio-group.md-THEME_NAME-theme[disabled]{color:"{{foreground-3}}"}md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-off,md-radio-button.md-THEME_NAME-theme[disabled] .md-container .md-on,md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-off,md-radio-group.md-THEME_NAME-theme[disabled] .md-container .md-on{border-color:"{{foreground-3}}"}md-radio-group.md-THEME_NAME-theme .md-checked .md-ink-ripple{color:"{{accent-color-0.26}}"}md-radio-group.md-THEME_NAME-theme .md-checked:not([disabled]).md-primary .md-ink-ripple,md-radio-group.md-THEME_NAME-theme.md-primary .md-checked:not([disabled]) .md-ink-ripple{color:"{{primary-color-0.26}}"}md-radio-group.md-THEME_NAME-theme .md-checked.md-primary .md-ink-ripple{color:"{{warn-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked .md-container:before{background-color:"{{accent-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-primary .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-primary .md-checked .md-container:before{background-color:"{{primary-color-0.26}}"}md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty) .md-checked.md-warn .md-container:before,md-radio-group.md-THEME_NAME-theme.md-focused:not(:empty).md-warn .md-checked .md-container:before{background-color:"{{warn-color-0.26}}"}md-sidenav.md-THEME_NAME-theme,md-sidenav.md-THEME_NAME-theme md-content{background-color:"{{background-hue-1}}"}md-input-container md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{warn-A700}}"}md-input-container:not(.md-input-focused):not(.md-input-invalid) md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{foreground-3}}"}md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value,md-input-container.md-input-focused:not(.md-input-has-value) md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder{color:"{{primary-color}}"}md-input-container.md-input-invalid md-select.md-THEME_NAME-theme .md-select-value{color:"{{warn-A700}}"!important;border-bottom-color:"{{warn-A700}}"!important}md-input-container.md-input-invalid md-select.md-THEME_NAME-theme.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme[disabled] .md-select-value{border-bottom-color:transparent;background-image:linear-gradient(90deg,"{{foreground-3}}" 0,"{{foreground-3}}" 33%,transparent 0);background-image:-ms-linear-gradient(left,transparent 0,"{{foreground-3}}" 100%)}md-select.md-THEME_NAME-theme .md-select-value{border-bottom-color:"{{foreground-4}}"}md-select.md-THEME_NAME-theme .md-select-value.md-select-placeholder{color:"{{foreground-3}}"}md-select.md-THEME_NAME-theme .md-select-value span:first-child:after{color:"{{warn-A700}}"}md-select.md-THEME_NAME-theme.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme.ng-invalid.ng-touched .md-select-value{color:"{{warn-A700}}"!important;border-bottom-color:"{{warn-A700}}"!important}md-select.md-THEME_NAME-theme.ng-invalid.ng-touched.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value{border-bottom-color:"{{primary-color}}";color:"{{ foreground-1 }}"}md-select.md-THEME_NAME-theme:not([disabled]):focus .md-select-value.md-select-placeholder{color:"{{ foreground-1 }}"}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-no-underline .md-select-value{border-bottom-color:transparent!important}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-accent .md-select-value{border-bottom-color:"{{accent-color}}"}md-select.md-THEME_NAME-theme:not([disabled]):focus.md-warn .md-select-value{border-bottom-color:"{{warn-color}}"}md-select.md-THEME_NAME-theme[disabled] .md-select-icon,md-select.md-THEME_NAME-theme[disabled] .md-select-value,md-select.md-THEME_NAME-theme[disabled] .md-select-value.md-select-placeholder{color:"{{foreground-3}}"}md-select.md-THEME_NAME-theme .md-select-icon{color:"{{foreground-2}}"}md-select-menu.md-THEME_NAME-theme md-content{background:"{{background-A100}}"}md-select-menu.md-THEME_NAME-theme md-content md-optgroup{color:"{{background-600-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option{color:"{{background-900-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[disabled] .md-text{color:"{{background-400-0.87}}"}md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):focus,md-select-menu.md-THEME_NAME-theme md-content md-option:not([disabled]):hover{background:"{{background-200}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected]{color:"{{primary-500}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected]:focus{color:"{{primary-600}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent{color:"{{accent-color}}"}md-select-menu.md-THEME_NAME-theme md-content md-option[selected].md-accent:focus{color:"{{accent-A700}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-ripple{color:"{{primary-600}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ripple{color:"{{background-600}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-ink-ripple{color:"{{foreground-2}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-ink-ripple{color:"{{primary-color-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme:not(.md-checked) .md-icon{border-color:"{{foreground-2}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon{background-color:"{{primary-color-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected].md-focused .md-container:before{background-color:"{{primary-color-0.26}}"}.md-checkbox-enabled.md-THEME_NAME-theme[selected] .md-icon:after{border-color:"{{primary-contrast-0.87}}"}.md-checkbox-enabled.md-THEME_NAME-theme .md-indeterminate[disabled] .md-container{color:"{{foreground-3}}"}.md-checkbox-enabled.md-THEME_NAME-theme md-option .md-text{color:"{{background-900-0.87}}"}md-slider.md-THEME_NAME-theme .md-track{background-color:"{{foreground-3}}"}md-slider.md-THEME_NAME-theme .md-track-ticks{color:"{{background-contrast}}"}md-slider.md-THEME_NAME-theme .md-focus-ring{background-color:"{{accent-A200-0.2}}"}md-slider.md-THEME_NAME-theme .md-disabled-thumb{border-color:"{{background-color}}";background-color:"{{background-color}}"}md-slider.md-THEME_NAME-theme.md-min .md-thumb:after{background-color:"{{background-color}}";border-color:"{{foreground-3}}"}md-slider.md-THEME_NAME-theme.md-min .md-focus-ring{background-color:"{{foreground-3-0.38}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-thumb:after{background-color:"{{background-contrast}}";border-color:transparent}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign{background-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete] .md-sign:after{border-top-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme.md-min[md-discrete][md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme .md-track.md-track-fill{background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-thumb:after{border-color:"{{accent-color}}";background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-sign{background-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-sign:after{border-top-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{accent-color}}"}md-slider.md-THEME_NAME-theme .md-thumb-text{color:"{{accent-contrast}}"}md-slider.md-THEME_NAME-theme.md-warn .md-focus-ring{background-color:"{{warn-200-0.38}}"}md-slider.md-THEME_NAME-theme.md-warn .md-track.md-track-fill{background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-thumb:after{border-color:"{{warn-color}}";background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-sign{background-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-sign:after{border-top-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{warn-color}}"}md-slider.md-THEME_NAME-theme.md-warn .md-thumb-text{color:"{{warn-contrast}}"}md-slider.md-THEME_NAME-theme.md-primary .md-focus-ring{background-color:"{{primary-200-0.38}}"}md-slider.md-THEME_NAME-theme.md-primary .md-track.md-track-fill{background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-thumb:after{border-color:"{{primary-color}}";background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-sign{background-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-sign:after{border-top-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary[md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{primary-color}}"}md-slider.md-THEME_NAME-theme.md-primary .md-thumb-text{color:"{{primary-contrast}}"}md-slider.md-THEME_NAME-theme[disabled] .md-thumb:after{border-color:transparent}md-slider.md-THEME_NAME-theme[disabled]:not(.md-min) .md-thumb:after,md-slider.md-THEME_NAME-theme[disabled][md-discrete] .md-thumb:after{background-color:"{{foreground-3}}";border-color:transparent}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign{background-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-sign:after{border-top-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly][md-vertical] .md-sign:after{border-top-color:transparent;border-left-color:"{{background-400}}"}md-slider.md-THEME_NAME-theme[disabled][readonly] .md-disabled-thumb{border-color:transparent;background-color:transparent}md-slider-container[disabled]>:first-child:not(md-slider),md-slider-container[disabled]>:last-child:not(md-slider){color:"{{foreground-3}}"}.md-subheader.md-THEME_NAME-theme{color:"{{ foreground-2-0.23 }}";background-color:"{{background-default}}"}.md-subheader.md-THEME_NAME-theme.md-primary{color:"{{primary-color}}"}.md-subheader.md-THEME_NAME-theme.md-accent{color:"{{accent-color}}"}.md-subheader.md-THEME_NAME-theme.md-warn{color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme .md-ink-ripple{color:"{{background-500}}"}md-switch.md-THEME_NAME-theme .md-thumb{background-color:"{{background-50}}"}md-switch.md-THEME_NAME-theme .md-bar{background-color:"{{background-500}}"}md-switch.md-THEME_NAME-theme.md-checked .md-ink-ripple{color:"{{accent-color}}"}md-switch.md-THEME_NAME-theme.md-checked .md-thumb{background-color:"{{accent-color}}"}md-switch.md-THEME_NAME-theme.md-checked .md-bar{background-color:"{{accent-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-focused .md-thumb:before{background-color:"{{accent-color-0.26}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-ink-ripple{color:"{{primary-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-thumb{background-color:"{{primary-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary .md-bar{background-color:"{{primary-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-primary.md-focused .md-thumb:before{background-color:"{{primary-color-0.26}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-ink-ripple{color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-thumb{background-color:"{{warn-color}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn .md-bar{background-color:"{{warn-color-0.5}}"}md-switch.md-THEME_NAME-theme.md-checked.md-warn.md-focused .md-thumb:before{background-color:"{{warn-color-0.26}}"}md-switch.md-THEME_NAME-theme[disabled] .md-thumb{background-color:"{{background-400}}"}md-switch.md-THEME_NAME-theme[disabled] .md-bar{background-color:"{{foreground-4}}"}md-tabs.md-THEME_NAME-theme md-tabs-wrapper{background-color:transparent;border-color:"{{foreground-4}}"}md-tabs.md-THEME_NAME-theme .md-paginator md-icon{color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme md-ink-bar{color:"{{accent-color}}";background:"{{accent-color}}"}md-tabs.md-THEME_NAME-theme .md-tab{color:"{{foreground-2}}"}md-tabs.md-THEME_NAME-theme .md-tab[disabled],md-tabs.md-THEME_NAME-theme .md-tab[disabled] md-icon{color:"{{foreground-3}}"}md-tabs.md-THEME_NAME-theme .md-tab.md-active,md-tabs.md-THEME_NAME-theme .md-tab.md-active md-icon,md-tabs.md-THEME_NAME-theme .md-tab.md-focused,md-tabs.md-THEME_NAME-theme .md-tab.md-focused md-icon{color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme .md-tab.md-focused{background:"{{primary-color-0.1}}"}md-tabs.md-THEME_NAME-theme .md-tab .md-ripple-container{color:"{{accent-A100}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper{background-color:"{{accent-color}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{accent-A100}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{accent-contrast}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{accent-contrast-0.1}}"}md-tabs.md-THEME_NAME-theme.md-accent>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper{background-color:"{{primary-color}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{primary-100}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{primary-contrast}}"}md-tabs.md-THEME_NAME-theme.md-primary>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{primary-contrast-0.1}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper{background-color:"{{warn-color}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{warn-100}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{warn-contrast}}"}md-tabs.md-THEME_NAME-theme.md-warn>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{warn-contrast-0.1}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{primary-color}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{primary-100}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{primary-contrast}}"}md-toolbar>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{primary-contrast-0.1}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{accent-color}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{accent-A100}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{accent-contrast}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{accent-contrast-0.1}}"}md-toolbar.md-accent>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-ink-bar{color:"{{primary-600-1}}";background:"{{primary-600-1}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper{background-color:"{{warn-color}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]),md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]) md-icon{color:"{{warn-100}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-active md-icon,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused,md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused md-icon{color:"{{warn-contrast}}"}md-toolbar.md-warn>md-tabs.md-THEME_NAME-theme>md-tabs-wrapper>md-tabs-canvas>md-pagination-wrapper>md-tab-item:not([disabled]).md-focused{background:"{{warn-contrast-0.1}}"}md-toast.md-THEME_NAME-theme .md-toast-content{background-color:#323232;color:"{{background-50}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button{color:"{{background-50}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight{color:"{{accent-color}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-primary{color:"{{primary-color}}"}md-toast.md-THEME_NAME-theme .md-toast-content .md-button.md-highlight.md-warn{color:"{{warn-color}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar){background-color:"{{primary-color}}";color:"{{primary-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) md-icon{color:"{{primary-contrast}}";fill:"{{primary-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar) .md-button[disabled] md-icon{color:"{{primary-contrast-0.26}}";fill:"{{primary-contrast-0.26}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent{background-color:"{{accent-color}}";color:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-ink-ripple{color:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent md-icon{color:"{{accent-contrast}}";fill:"{{accent-contrast}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-accent .md-button[disabled] md-icon{color:"{{accent-contrast-0.26}}";fill:"{{accent-contrast-0.26}}"}md-toolbar.md-THEME_NAME-theme:not(.md-menu-toolbar).md-warn{background-color:"{{warn-color}}";color:"{{warn-contrast}}"}.md-panel.md-tooltip.md-THEME_NAME-theme{color:"{{background-700-contrast}}";background-color:"{{background-700}}"}body.md-THEME_NAME-theme,html.md-THEME_NAME-theme{color:"{{foreground-1}}";background-color:"{{background-color}}"}');
}()}(window,window.angular),window.ngMaterial={version:{full:"1.1.4"}};
// Angular Rails Templates 1.0.2
//
// angular_templates.ignore_prefix: ["templates/"]
// angular_templates.markups: ["erb", "str"]
// angular_templates.htmlcompressor: 

angular.module("templates", []);

/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see http://ui-router.github.io/blog/angular-ui-router-umd-bundles
 * @version v1.0.3
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("angular")):"function"==typeof define&&define.amd?define(["exports","angular"],e):e(t["@uirouter/angularjs"]=t["@uirouter/angularjs"]||{},t.angular)}(this,function(t,e){"use strict";function r(t){function e(r){return r.length>=n?t.apply(null,r):function(){return e(r.concat([].slice.apply(arguments)))}}var r=[].slice.apply(arguments,[1]),n=t.length;return e(r)}function n(){var t=arguments,e=t.length-1;return function(){for(var r=e,n=t[e].apply(this,arguments);r--;)n=t[r].call(this,n);return n}}function i(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.apply(null,[].slice.call(arguments).reverse())}function o(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)&&e.apply(null,r)}}function a(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)||e.apply(null,r)}}function u(t,e){return function(r){return r[t].apply(r,e)}}function s(t){return function(e){for(var r=0;r<t.length;r++)if(t[r][0](e))return t[r][1](e)}}function c(t){if(te(t)&&t.length){var e=t.slice(0,-1),r=t.slice(-1);return!(e.filter(Ht(Zt)).length||r.filter(Ht(Kt)).length)}return Kt(t)}function f(t){return t}function l(){}function h(t,e,r,n,i){void 0===i&&(i=!1);var o=function(e){return t()[e].bind(r())},a=function(t){return function(){return e[t]=o(t),e[t].apply(null,arguments)}};return n=n||Object.keys(t()),n.reduce(function(t,e){return t[e]=i?a(e):o(e),t},e)}function p(t,e){return-1!==t.indexOf(e)}function d(t,e){var r=t.indexOf(e);return r>=0&&t.splice(r,1),t}function v(t,e){return t.push(e),e}function m(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=e.concat({}).reverse(),i=pe.apply(null,n);return pe({},i,g(t||{},Object.keys(i)))}function y(t,e){var r=[];for(var n in t.path){if(t.path[n]!==e.path[n])break;r.push(t.path[n])}return r}function g(t,e){var r={};for(var n in t)-1!==e.indexOf(n)&&(r[n]=t[n]);return r}function w(t,e){return Object.keys(t).filter(Ht(me(e))).reduce(function(e,r){return e[r]=t[r],e},{})}function _(t,e){return b(t,It(e))}function $(t,e){var r=te(t),n=r?[]:{},i=r?function(t){return n.push(t)}:function(t,e){return n[e]=t};return he(t,function(t,r){e(t,r)&&i(t,r)}),n}function S(t,e){var r;return he(t,function(t,n){r||e(t,n)&&(r=t)}),r}function b(t,e){var r=te(t)?[]:{};return he(t,function(t,n){return r[n]=e(t,n)}),r}function R(t,e){return t.push(e),t}function E(t,e){return void 0===e&&(e="assert failure"),function(r){var n=t(r);if(!n)throw new Error(Kt(e)?e(r):e);return n}}function T(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(0===t.length)return[];var r,n=t.reduce(function(t,e){return Math.min(e.length,t)},9007199254740991),i=[];for(r=0;r<n;r++)switch(t.length){case 1:i.push([t[0][r]]);break;case 2:i.push([t[0][r],t[1][r]]);break;case 3:i.push([t[0][r],t[1][r],t[2][r]]);break;case 4:i.push([t[0][r],t[1][r],t[2][r],t[3][r]]);break;default:i.push(t.map(function(t){return t[r]}))}return i}function C(t,e){var r,n;if(te(e)&&(r=e[0],n=e[1]),!Zt(r))throw new Error("invalid parameters to applyPairs");return t[r]=n,t}function P(t){return t.length&&t[t.length-1]||void 0}function k(t,e){return e&&Object.keys(e).forEach(function(t){return delete e[t]}),e||(e={}),pe(e,t)}function O(t,e,r){if(te(t))return t.forEach(e,r);Object.keys(t).forEach(function(r){return e(t[r],r)})}function x(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var n=Object.keys(r),i=0;i<n.length;i++)t[n[i]]=r[n[i]]}return t}function j(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!==t&&e!==e)return!0;var r=typeof t;if(r!==typeof e||"object"!==r)return!1;var n=[t,e];if(qt(te)(n))return I(t,e);if(qt(ee)(n))return t.getTime()===e.getTime();if(qt(re)(n))return t.toString()===e.toString();if(qt(Kt)(n))return!0;if([Kt,te,ee,re].map(Dt).reduce(function(t,e){return t||!!e(n)},!1))return!1;var i,o={};for(i in t){if(!j(t[i],e[i]))return!1;o[i]=!0}for(i in e)if(!o[i])return!1;return!0}function I(t,e){return t.length===e.length&&T(t,e).reduce(function(t,e){return t&&j(e[0],e[1])},!0)}function V(t){return t?"[ui-view#"+t.id+" tag in template from '"+(t.creationContext&&t.creationContext.name||"(root)")+"' state]: fqn: '"+t.fqn+"', name: '"+t.name+"@"+t.creationContext+"')":"ui-view (defunct)"}function A(e){return Yt(e)?t.Category[e]:t.Category[t.Category[e]]}function H(t,e){function r(t){for(var e=n,r=0;r<e.length;r++){var i=new Lt(e[r]);if(i&&i.matches(t.name)||!i&&e[r]===t.name)return!0}return!1}var n=Zt(e)?[e]:e;return!!(Kt(n)?n:r)(t)}function q(t,e,r){function n(t,n,i){void 0===i&&(i={});var a=new Qe(e,r,n,t,i);return o.push(a),function(){a._deregistered=!0,ye(o)(a)}}var i=t._registeredHooks=t._registeredHooks||{},o=i[r.name]=[];return t[r.name]=n,n}function D(t){return void 0===t&&(t=!1),function(e,r){var n=t?-1:1,i=(e.node.state.path.length-r.node.state.path.length)*n;return 0!==i?i:r.hook.priority-e.hook.priority}}function N(t,e){function r(t){return te(t)?t:zt(t)?[t]:[]}function n(t){switch(t.length){case 0:return;case 1:return"auto"===e?t[0]:t;default:return t}}function i(t,e){return function(i){if(te(i)&&0===i.length)return i;var o=r(i),a=b(o,t);return!0===e?0===$(a,function(t){return!t}).length:n(a)}}function o(t){return function(e,n){var i=r(e),o=r(n);if(i.length!==o.length)return!1;for(var a=0;a<i.length;a++)if(!t(i[a],o[a]))return!1;return!0}}var a=this;["encode","decode","equals","$normalize"].forEach(function(e){var r=t[e].bind(t),n="equals"===e?o:i;a[e]=n(r)}),pe(this,{dynamic:t.dynamic,name:t.name,pattern:t.pattern,inherit:t.inherit,is:i(t.is.bind(t),!0),$arrayMode:e})}function F(t){function e(){return t.value}return t=Xe(t)&&{value:t}||t,e.__cacheable=!0,pe(t,{$$fn:c(t.value)?t.value:e})}function U(e,r,n,i,o){if(e.type&&r&&"string"!==r.name)throw new Error("Param '"+i+"' has two type configurations.");if(e.type&&r&&"string"===r.name&&o.type(e.type))return o.type(e.type);if(r)return r;if(!e.type){var a=n===t.DefType.CONFIG?"any":n===t.DefType.PATH?"path":n===t.DefType.SEARCH?"query":"string";return o.type(a)}return e.type instanceof Ye?e.type:o.type(e.type)}function L(t,e,r){var n=t.squash;if(!e||!1===n)return!1;if(!zt(n)||null==n)return r;if(!0===n||Zt(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}function M(t,e,r,n){var i,o,a=[{from:"",to:r||e?void 0:""},{from:null,to:r||e?void 0:""}];return i=te(t.replace)?t.replace:[],Zt(n)&&i.push({from:n,to:void 0}),o=b(i,It("from")),$(a,function(t){return-1===o.indexOf(t.from)}).concat(i)}function B(t,e){return e.length<=t?e:e.substr(0,t-3)+"..."}function G(t,e){for(;e.length<t;)e+=" ";return e}function W(t){return t.replace(/^([A-Z])/,function(t){return t.toLowerCase()}).replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function z(t){var e=J(t),r=e.match(/^(function [^ ]+\([^)]*\))/),n=r?r[1]:e,i=t.name||"";return i&&n.match(/function \(/)?"function "+i+n.substr(9):n}function J(t){var e=te(t)?t.slice(-1)[0]:t;return e&&e.toString()||"undefined"}function Q(t){function e(t){if(Xt(t)){if(-1!==r.indexOf(t))return"[circular ref]";r.push(t)}return vr(t)}var r=[];return JSON.stringify(t,function(t,r){return e(r)}).replace(/\\"/g,'"')}function K(t){var e=new RegExp("("+t+")","g");return function(t){return t.split(e).filter(f)}}function Y(t,e){return Zt(P(t))&&Zt(e)?t.slice(0,-1).concat(P(t)+e):R(t,e)}function Z(t){return t.name}function X(t){return t.self.$$state=function(){return t},t.self}function tt(t){return t.parent&&t.parent.data&&(t.data=t.self.data=ve(t.parent.data,t.data)),t.data}function et(t){return t.parent?t.parent.path.concat(t):[t]}function rt(t){var e=t.parent?pe({},t.parent.includes):{};return e[t.name]=!0,e}function nt(t){var e=function(t){var e=ae.$injector;return t.$inject||e&&e.annotate(t,e.strictDi)||"deferred"},r=function(t){return!(!t.token||!t.resolveFn)},n=function(t){return!(!t.provide&&!t.token||!(t.useValue||t.useFactory||t.useExisting||t.useClass))},o=function(t){return!!(t&&t.val&&(Zt(t.val)||te(t.val)||Kt(t.val)))},a=function(t){return t.provide||t.token},u=s([[It("resolveFn"),function(t){return new ir(a(t),t.resolveFn,t.deps,t.policy)}],[It("useFactory"),function(t){return new ir(a(t),t.useFactory,t.deps||t.dependencies,t.policy)}],[It("useClass"),function(t){return new ir(a(t),function(){return new t.useClass},[],t.policy)}],[It("useValue"),function(t){return new ir(a(t),function(){return t.useValue},[],t.policy,t.useValue)}],[It("useExisting"),function(t){return new ir(a(t),f,[t.useExisting],t.policy)}]]),c=s([[i(It("val"),Zt),function(t){return new ir(t.token,f,[t.val],t.policy)}],[i(It("val"),te),function(t){return new ir(t.token,P(t.val),t.val.slice(0,-1),t.policy)}],[i(It("val"),Kt),function(t){return new ir(t.token,t.val,e(t.val),t.policy)}]]),l=s([[Nt(ir),function(t){return t}],[r,u],[n,u],[o,c],[Ut(!0),function(t){throw new Error("Invalid resolve value: "+Q(t))}]]),h=t.resolve;return(te(h)?h:function(t,e){return Object.keys(t||{}).map(function(r){return{token:r,val:t[r],deps:void 0,policy:e[r]}})}(h,t.resolvePolicy||{})).map(l)}function it(t,e){var r=["",""],n=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return n;switch(e.squash){case!1:r=["(",")"+(e.isOptional?"?":"")];break;case!0:n=n.replace(/\/$/,""),r=["(?:/(",")|/)?"];break;default:r=["("+e.squash+"|",")?"]}return n+r[0]+e.type.pattern.source+r[1]}function ot(t,e,r,n){return"/"===n?t:e?n.slice(0,-1)+t:r?n.slice(1)+t:t}function at(t){if(!(Kt(t)||Zt(t)||Nt(We)(t)||We.isDef(t)))throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");return Kt(t)?t:Ut(t)}function ut(t){t.addResolvable({token:Wr,deps:[],resolveFn:function(){return t.router},data:t.router},""),t.addResolvable({token:pr,deps:[],resolveFn:function(){return t},data:t},""),t.addResolvable({token:"$transition$",deps:[],resolveFn:function(){return t},data:t},""),t.addResolvable({token:"$stateParams",deps:[],resolveFn:function(){return t.params()},data:t.params()},""),t.entering().forEach(function(e){t.addResolvable({token:"$state$",deps:[],resolveFn:function(){return e},data:e},e)})}function st(t){return function(e,r){return(0,r.$$state()[t])(e,r)}}function ct(t,e){function r(e){return e&&Array.isArray(e.states)&&e.states.forEach(function(e){return t.router.stateRegistry.register(e)}),e}var n=e.$$state().lazyLoad,i=n._promise;if(!i){var o=function(t){return delete e.lazyLoad,delete e.$$state().lazyLoad,delete n._promise,t},a=function(t){return delete n._promise,ae.$q.reject(t)};i=n._promise=ae.$q.when(n(t,e)).then(r).then(o,a)}return i}function ft(t){var e=t._ignoredReason();if(e){Ge.traceTransitionIgnored(t);var r=t.router.globals.transition;return"SameAsCurrent"===e&&r&&r.abort(),Ne.ignored().toPromise()}}function lt(t){if(!t.valid())throw new Error(t.error())}function ht(t){var e=function(t){return t||""},r=Cn(t).map(e),n=r[0],i=r[1],o=Pn(n).map(e);return{path:o[0],search:o[1],hash:i,url:t}}function pt(t,e,r,n){return function(i){function o(t){t.dispose(a),t.dispose(u)}var a=i.locationService=new r(i),u=i.locationConfig=new n(i,e);return{name:t,service:a,configuration:u,dispose:o}}}function dt(t){return ae.$injector=En,ae.$q=bn,{name:"vanilla.services",$q:bn,$injector:En,dispose:function(){return null}}}function vt(){var t=null;return function(e,r){return t=t||ae.$injector.get("$templateFactory"),[new Zn(e,r,t)]}}function mt(t){if(!t.parent)return{};var e=["templateProvider","templateUrl","template","notify","async"],r=["controller","controllerProvider","controllerAs","resolveAs"],n=["component","bindings","componentProvider"],i=e.concat(r),o=n.concat(i);if(zt(t.views)&&Kn(o,t))throw new Error("State '"+t.name+"' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  "+o.filter(function(e){return zt(t[e])}).join(", "));var a={},u=t.views||{$default:g(t,o)};return he(u,function(e,r){if(r=r||"$default",Zt(e)&&(e={component:e}),e=pe({},e),Kn(n,e)&&Kn(i,e))throw new Error("Cannot combine: "+n.join("|")+" with: "+i.join("|")+" in stateview: '"+r+"@"+t.name+"'");e.resolveAs=e.resolveAs||"$resolve",e.$type="ng1",e.$context=t,e.$name=r;var o=Hr.normalizeUIViewTarget(e.$context,e.$name);e.$uiViewName=o.uiViewName,e.$uiViewContextAnchor=o.uiViewContextAnchor,a[r]=e}),a}function yt(t){var e=ae.$injector.get(t+"Directive");if(!e||!e.length)throw new Error("Unable to find component named '"+t+"'");return e.map(ti).reduce(Ee,[])}function gt(t){function e(t,e,n,i,o,a){return r._runtimeServices(i,t,n,e),delete li.router,delete li.$get,li}li=this.router=new Wr,li.stateProvider=new ri(li.stateRegistry,li.stateService),li.stateRegistry.decorator("views",mt),li.stateRegistry.decorator("onExit",ni("onExit")),li.stateRegistry.decorator("onRetain",ni("onRetain")),li.stateRegistry.decorator("onEnter",ni("onEnter")),li.viewService._pluginapi._viewConfigFactory("ng1",vt());var r=li.locationService=li.locationConfig=new ii(t);return ii.monkeyPatchPathParameterType(li),li.router=li,li.$get=e,e.$inject=["$location","$browser","$sniffer","$rootScope","$http","$templateCache"],li}function wt(t,e,r){ae.$injector=t,ae.$q=e,r.stateRegistry.get().map(function(t){return t.$$state().resolvables}).reduce(Ee,[]).filter(function(t){return"deferred"===t.deps}).forEach(function(e){return e.deps=t.annotate(e.resolveFn)})}function _t(t){t.$watch(function(){Ge.approximateDigests++})}function $t(t){var e,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t="("+r[1]+")"),!(e=t.replace(/\n/g," ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/))||4!==e.length)throw new Error("Invalid state ref '"+t+"'");return{state:e[1]||null,paramExpr:e[3]||null}}function St(t){var e=t.parent().inheritedData("$uiView"),r=At("$cfg.path")(e);return r?P(r).state.name:void 0}function bt(t,e,r){var n=r.uiState||t.current.name,i=pe(Tt(e,t),r.uiStateOpts||{}),o=t.href(n,r.uiStateParams,i);return{uiState:n,uiStateParams:r.uiStateParams,uiStateOpts:i,href:o}}function Rt(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),r="FORM"===t[0].nodeName;return{attr:r?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!r}}function Et(t,e,r,n,i){return function(o){var a=o.which||o.button,u=i();if(!(a>1||o.ctrlKey||o.metaKey||o.shiftKey||t.attr("target"))){var s=r(function(){e.go(u.uiState,u.uiStateParams,u.uiStateOpts)});o.preventDefault();var c=n.isAnchor&&!u.href?1:0;o.preventDefault=function(){c--<=0&&r.cancel(s)}}}}function Tt(t,e){return{relative:St(t)||e.$current,inherit:!0,source:"sref"}}function Ct(t,e,r,n){var i;n&&(i=n.events),te(i)||(i=["click"]);for(var o=t.on?"on":"bind",a=0,u=i;a<u.length;a++){var s=u[a];t[o](s,r)}e.$on("$destroy",function(){for(var e=t.off?"off":"unbind",n=0,o=i;n<o.length;n++){var a=o[n];t[e](a,r)}})}function Pt(t){var e=function(e,r,n){return t.is(e,r,n)};return e.$stateful=!0,e}function kt(t){var e=function(e,r,n){return t.includes(e,r,n)};return e.$stateful=!0,e}function Ot(t,r,n,i,o,a){var u=At("viewDecl.controllerAs"),s=At("viewDecl.resolveAs");return{restrict:"ECA",priority:-400,compile:function(i){var a=i.html();return i.empty(),function(i,c){var f=c.data("$uiView");if(!f)return c.html(a),void t(c.contents())(i);var l=f.$cfg||{viewDecl:{},getTemplate:e.noop},h=l.path&&new fr(l.path);c.html(l.getTemplate(c,h)||a),Ge.traceUIViewFill(f.$uiView,c.html());var p=t(c.contents()),d=l.controller,v=u(l),m=s(l),y=h&&mi(h);if(i[m]=y,d){var g=r(d,pe({},y,{$scope:i,$element:c}));v&&(i[v]=g,i[v][m]=y),c.data("$ngControllerController",g),c.children().data("$ngControllerController",g),xt(o,n,g,i,l)}if(Zt(l.viewDecl.component))var w=l.viewDecl.component,_=W(w),$=new RegExp("^(x-|data-)?"+_+"$","i"),S=function(){var t=[].slice.call(c[0].children).filter(function(t){return t&&t.tagName&&$.exec(t.tagName)});return t&&Qn.element(t).data("$"+w+"Controller")},b=i.$watch(S,function(t){t&&(xt(o,n,t,i,l),b())});p(i)}}}}function xt(t,e,r,n,i){!Kt(r.$onInit)||i.viewDecl.component&&_i||r.$onInit();var o=P(i.path).state.self,a={bind:r};if(Kt(r.uiOnParamsChanged)){var u=new fr(i.path),s=u.getResolvable("$transition$").data,c=function(t){if(t!==s&&-1===t.exiting().indexOf(o)){var e=t.params("to"),n=t.params("from"),i=t.treeChanges().to.map(function(t){return t.paramSchema}).reduce(Ee,[]),a=t.treeChanges().from.map(function(t){return t.paramSchema}).reduce(Ee,[]),u=i.filter(function(t){var r=a.indexOf(t);return-1===r||!a[r].type.equals(e[t.id],n[t.id])});if(u.length){var c=u.map(function(t){return t.id}),f=$(e,function(t,e){return-1!==c.indexOf(e)});r.uiOnParamsChanged(f,t)}}};n.$on("$destroy",e.onSuccess({},c,a))}if(Kt(r.uiCanExit)){var f=$i++,l=function(t){return!!t&&(t._uiCanExitIds&&!0===t._uiCanExitIds[f]||l(t.redirectedFrom()))},h=function(e){var n,i=e._uiCanExitIds=e._uiCanExitIds||{};return l(e)||(n=t.when(r.uiCanExit(e)),n.then(function(t){return i[f]=!1!==t})),n},p={exiting:o.name};n.$on("$destroy",e.onBefore(p,h,a))}}function jt(){var t=!1;this.useAnchorScroll=function(){t=!0},this.$get=["$anchorScroll","$timeout",function(e,r){return t?e:function(t){return r(function(){t[0].scrollIntoView()},0,!1)}}]}var It=function(t){return function(e){return e&&e[t]}},Vt=r(function(t,e,r){return r&&r[t]===e}),At=function(t){return i.apply(null,t.split(".").map(It))},Ht=function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return!t.apply(null,e)}},qt=function(t){return function(e){return e.reduce(function(e,r){return e&&!!t(r)},!0)}},Dt=function(t){return function(e){return e.reduce(function(e,r){return e||!!t(r)},!1)}},Nt=function(t){return function(e){return null!=e&&e.constructor===t||e instanceof t}},Ft=function(t){return function(e){return t===e}},Ut=function(t){return function(){return t}},Lt=function(){function t(t){this.text=t,this.glob=t.split(".");var e=this.text.split(".").map(function(t){return"**"===t?"(?:|(?:\\.[^.]*)*)":"*"===t?"\\.[^.]*":"\\."+t}).join("");this.regexp=new RegExp("^"+e+"$")}return t.prototype.matches=function(t){return this.regexp.test("."+t)},t.is=function(t){return!!/[!,*]+/.exec(t)},t.fromString=function(e){return t.is(e)?new t(e):null},t}(),Mt=function(){function t(e){return t.create(e||{})}return t.create=function(e){e=t.isStateClass(e)?new e:e;var r=ve(ve(e,t.prototype));return e.$$state=function(){return r},r.self=e,r.__stateObjectCache={nameGlob:Lt.fromString(r.name)},r},t.prototype.is=function(t){return this===t||this.self===t||this.fqn()===t},t.prototype.fqn=function(){if(!(this.parent&&this.parent instanceof this.constructor))return this.name;var t=this.parent.fqn();return t?t+"."+this.name:this.name},t.prototype.root=function(){return this.parent&&this.parent.root()||this},t.prototype.parameters=function(t){return t=m(t,{inherit:!0,matchingKeys:null}),(t.inherit&&this.parent&&this.parent.parameters()||[]).concat(Se(this.params)).filter(function(e){return!t.matchingKeys||t.matchingKeys.hasOwnProperty(e.id)})},t.prototype.parameter=function(t,e){return void 0===e&&(e={}),this.url&&this.url.parameter(t,e)||S(Se(this.params),Vt("id",t))||e.inherit&&this.parent&&this.parent.parameter(t)},t.prototype.toString=function(){return this.fqn()},t}();Mt.isStateClass=function(t){return Kt(t)&&!0===t.__uiRouterState},Mt.isState=function(t){return Xt(t.__stateObjectCache)};var Bt=Object.prototype.toString,Gt=function(t){return function(e){return typeof e===t}},Wt=Gt("undefined"),zt=Ht(Wt),Jt=function(t){return null===t},Qt=a(Jt,Wt),Kt=Gt("function"),Yt=Gt("number"),Zt=Gt("string"),Xt=function(t){return null!==t&&"object"==typeof t},te=Array.isArray,ee=function(t){return"[object Date]"===Bt.call(t)},re=function(t){return"[object RegExp]"===Bt.call(t)},ne=Mt.isState,ie=o(Xt,i(It("then"),Kt)),oe=function(t){return function(){throw new Error(t+"(): No coreservices implementation for UI-Router is loaded.")}},ae={$q:void 0,$injector:void 0},ue="undefined"==typeof window?{}:window,se=ue.angular||{},ce=se.fromJson||JSON.parse.bind(JSON),fe=se.toJson||JSON.stringify.bind(JSON),le=se.copy||k,he=se.forEach||O,pe=Object.assign||x,de=se.equals||j,ve=function(t,e){return pe(Object.create(t),e)},me=r(p),ye=r(d),ge=r(v),we=function(t){return t.slice().forEach(function(e){"function"==typeof e&&e(),ye(t,e)})},_e=function(t,e){return pe(t,e)},$e=b,Se=function(t){return Object.keys(t).map(function(e){return t[e]})},be=function(t,e){return t&&e},Re=function(t,e){return t||e},Ee=function(t,e){return t.concat(e)},Te=function(t,e){return te(e)?t.concat(e.reduce(Te,[])):R(t,e)},Ce=function(t,e){return me(t,e)?t:R(t,e)},Pe=function(t){return t.reduce(Ee,[])},ke=function(t){return t.reduce(Te,[])},Oe=E,xe=E,je=function(t){return Object.keys(t).map(function(e){return[e,t[e]]})},Ie=function(t,e){return void 0===e&&(e=Ut(!0)),function(r,n){return e(r)&&e(n)?t(r)-t(n):0}},Ve=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return function(e,r){return t.reduce(function(t,n){return t||n(e,r)},0)}},Ae=function(t){return t.catch(function(t){return 0})&&t},He=function(t){return Ae(ae.$q.reject(t))},qe=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=null),this._items=t,this._limit=e}return t.prototype.enqueue=function(t){var e=this._items;return e.push(t),this._limit&&e.length>this._limit&&e.shift(),t},t.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},t.prototype.clear=function(){var t=this._items;return this._items=[],t},t.prototype.size=function(){return this._items.length},t.prototype.remove=function(t){var e=this._items.indexOf(t);return e>-1&&this._items.splice(e,1)[0]},t.prototype.peekTail=function(){return this._items[this._items.length-1]},t.prototype.peekHead=function(){if(this.size())return this._items[0]},t}();!function(t){t[t.SUPERSEDED=2]="SUPERSEDED",t[t.ABORTED=3]="ABORTED",t[t.INVALID=4]="INVALID",t[t.IGNORED=5]="IGNORED",t[t.ERROR=6]="ERROR"}(t.RejectType||(t.RejectType={}));var De=0,Ne=function(){function e(t,e,r){this.$id=De++,this.type=t,this.message=e,this.detail=r}return e.prototype.toString=function(){var t=function(t){return t&&t.toString!==Object.prototype.toString?t.toString():Q(t)}(this.detail),e=this;return"Transition Rejection($id: "+e.$id+" type: "+e.type+", message: "+e.message+", detail: "+t+")"},e.prototype.toPromise=function(){return pe(He(this),{_transitionRejection:this})},e.isRejectionPromise=function(t){return t&&"function"==typeof t.then&&Nt(e)(t._transitionRejection)},e.superseded=function(r,n){var i=new e(t.RejectType.SUPERSEDED,"The transition has been superseded by a different transition",r);return n&&n.redirected&&(i.redirected=!0),i},e.redirected=function(t){return e.superseded(t,{redirected:!0})},e.invalid=function(r){return new e(t.RejectType.INVALID,"This transition is invalid",r)},e.ignored=function(r){return new e(t.RejectType.IGNORED,"The transition was ignored",r)},e.aborted=function(r){return new e(t.RejectType.ABORTED,"The transition has been aborted",r)},e.errored=function(r){return new e(t.RejectType.ERROR,"The transition errored",r)},e.normalize=function(t){return Nt(e)(t)?t:e.errored(t)},e}(),Fe=function(t){return"[ViewConfig#"+t.$id+" from '"+(t.viewDecl.$context.name||"(root)")+"' state]: target ui-view: '"+t.viewDecl.$uiViewName+"@"+t.viewDecl.$uiViewContextAnchor+"'"};!function(t){t[t.RESOLVE=0]="RESOLVE",t[t.TRANSITION=1]="TRANSITION",t[t.HOOK=2]="HOOK",t[t.UIVIEW=3]="UIVIEW",t[t.VIEWCONFIG=4]="VIEWCONFIG"}(t.Category||(t.Category={}));var Ue=At("$id"),Le=At("router.$id"),Me=function(t){return"Transition #"+Ue(t)+"-"+Le(t)},Be=function(){function e(){this._enabled={},this.approximateDigests=0}return e.prototype._set=function(e,r){var n=this;r.length||(r=Object.keys(t.Category).map(function(t){return parseInt(t,10)}).filter(function(t){return!isNaN(t)}).map(function(e){return t.Category[e]})),r.map(A).forEach(function(t){return n._enabled[t]=e})},e.prototype.enable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!0,t)},e.prototype.disable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!1,t)},e.prototype.enabled=function(t){return!!this._enabled[A(t)]},e.prototype.traceTransitionStart=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Me(e)+": Started  -> "+Q(e))},e.prototype.traceTransitionIgnored=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Me(e)+": Ignored  <> "+Q(e))},e.prototype.traceHookInvocation=function(e,r,n){if(this.enabled(t.Category.HOOK)){var i=At("traceData.hookType")(n)||"internal",o=At("traceData.context.state.name")(n)||At("traceData.context")(n)||"unknown",a=z(e.registeredHook.callback);console.log(Me(r)+":   Hook -> "+i+" context: "+o+", "+B(200,a))}},e.prototype.traceHookResult=function(e,r,n){this.enabled(t.Category.HOOK)&&console.log(Me(r)+":   <- Hook returned: "+B(200,Q(e)))},e.prototype.traceResolvePath=function(e,r,n){this.enabled(t.Category.RESOLVE)&&console.log(Me(n)+":         Resolving "+e+" ("+r+")")},e.prototype.traceResolvableResolved=function(e,r){this.enabled(t.Category.RESOLVE)&&console.log(Me(r)+":               <- Resolved  "+e+" to: "+B(200,Q(e.data)))},e.prototype.traceError=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Me(r)+": <- Rejected "+Q(r)+", reason: "+e)},e.prototype.traceSuccess=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Me(r)+": <- Success  "+Q(r)+", final state: "+e.name)},e.prototype.traceUIViewEvent=function(e,r,n){void 0===n&&(n=""),this.enabled(t.Category.UIVIEW)&&console.log("ui-view: "+G(30,e)+" "+V(r)+n)},e.prototype.traceUIViewConfigUpdated=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Updating",e," with ViewConfig from context='"+r+"'")},e.prototype.traceUIViewFill=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Fill",e," with: "+B(200,r))},e.prototype.traceViewServiceEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+Fe(r))},e.prototype.traceViewServiceUIViewEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+V(r))},e}(),Ge=new Be;!function(t){t[t.CREATE=0]="CREATE",t[t.BEFORE=1]="BEFORE",t[t.RUN=2]="RUN",t[t.SUCCESS=3]="SUCCESS",t[t.ERROR=4]="ERROR"}(t.TransitionHookPhase||(t.TransitionHookPhase={})),function(t){t[t.TRANSITION=0]="TRANSITION",t[t.STATE=1]="STATE"}(t.TransitionHookScope||(t.TransitionHookScope={}));var We=function(){function t(t,e,r,n){void 0===n&&(n={}),this._identifier=t,this._definition=e,this._options=n,this._params=r||{}}return t.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},t.prototype.identifier=function(){return this._identifier},t.prototype.params=function(){return this._params},t.prototype.$state=function(){return this._definition},t.prototype.state=function(){return this._definition&&this._definition.self},t.prototype.options=function(){return this._options},t.prototype.exists=function(){return!(!this._definition||!this._definition.self)},t.prototype.valid=function(){return!this.error()},t.prototype.error=function(){var t=this.options().relative;if(!this._definition&&t){var e=t.name?t.name:t;return"Could not resolve '"+this.name()+"' from state '"+e+"'"}return this._definition?this._definition.self?void 0:"State '"+this.name()+"' has an invalid definition":"No such state '"+this.name()+"'"},t.prototype.toString=function(){return"'"+this.name()+"'"+fe(this.params())},t}();We.isDef=function(t){return t&&t.state&&(Zt(t.state)||Zt(t.state.name))};var ze={current:l,transition:null,traceData:{},bind:null},Je=function(){function e(e,r,n,i){var o=this;this.transition=e,this.stateContext=r,this.registeredHook=n,this.options=i,this.isSuperseded=function(){return o.type.hookPhase===t.TransitionHookPhase.RUN&&!o.options.transition.isActive()},this.options=m(i,ze),this.type=n.eventType}return e.prototype.logError=function(t){this.transition.router.stateService.defaultErrorHandler()(t)},e.prototype.invokeHook=function(){var t=this,e=this.registeredHook;if(!e._deregistered){var r=this.getNotCurrentRejection();if(r)return r;var n=this.options;Ge.traceHookInvocation(this,this.transition,n);var i=function(t){return Ne.normalize(t).toPromise()},o=function(r){return e.eventType.getErrorHandler(t)(r)},a=function(r){return e.eventType.getResultHandler(t)(r)};try{var u=function(){return e.callback.call(n.bind,t.transition,t.stateContext)}();return!this.type.synchronous&&ie(u)?u.catch(i).then(a,o):a(u)}catch(t){return o(Ne.normalize(t))}}},e.prototype.handleHookResult=function(t){var e=this,r=this.getNotCurrentRejection();return r||(ie(t)?t.then(function(t){return e.handleHookResult(t)}):(Ge.traceHookResult(t,this.transition,this.options),!1===t?Ne.aborted("Hook aborted transition").toPromise():Nt(We)(t)?Ne.redirected(t).toPromise():void 0))},e.prototype.getNotCurrentRejection=function(){var t=this.transition.router;return t._disposed?Ne.aborted("UIRouter instance #"+t.$id+" has been stopped (disposed)").toPromise():this.transition._aborted?Ne.aborted().toPromise():this.isSuperseded()?Ne.superseded(this.options.current()).toPromise():void 0},e.prototype.toString=function(){var t=this,e=t.options,r=t.registeredHook;return(At("traceData.hookType")(e)||"internal")+" context: "+(At("traceData.context.state.name")(e)||At("traceData.context")(e)||"unknown")+", "+B(200,J(r.callback))},e.chain=function(t,e){var r=function(t,e){return t.then(function(){return e.invokeHook()})};return t.reduce(r,e||ae.$q.when())},e.invokeHooks=function(t,r){for(var n=0;n<t.length;n++){var i=t[n].invokeHook();if(ie(i)){var o=t.slice(n+1);return e.chain(o,i).then(r)}}return r()},e.runAllHooks=function(t){t.forEach(function(t){return t.invokeHook()})},e}();Je.HANDLE_RESULT=function(t){return function(e){return t.handleHookResult(e)}},Je.LOG_REJECTED_RESULT=function(t){return function(e){ie(e)&&e.catch(function(e){return t.logError(Ne.normalize(e))})}},Je.LOG_ERROR=function(t){return function(e){return t.logError(e)}},Je.REJECT_ERROR=function(t){return function(t){return He(t)}},Je.THROW_ERROR=function(t){return function(t){throw t}};var Qe=function(){function e(t,e,r,n,i){void 0===i&&(i={}),this.tranSvc=t,this.eventType=e,this.callback=r,this.matchCriteria=n,this.priority=i.priority||0,this.bind=i.bind||null,this._deregistered=!1}return e.prototype._matchingNodes=function(t,e){if(!0===e)return t;var r=t.filter(function(t){return H(t.state,e)});return r.length?r:null},e.prototype._getDefaultMatchCriteria=function(){return b(this.tranSvc._pluginapi._getPathTypes(),function(){return!0})},e.prototype._getMatchingNodes=function(e){var r=this,n=pe(this._getDefaultMatchCriteria(),this.matchCriteria);return Se(this.tranSvc._pluginapi._getPathTypes()).reduce(function(i,o){var a=o.scope===t.TransitionHookScope.STATE,u=e[o.name]||[],s=a?u:[P(u)];return i[o.name]=r._matchingNodes(s,n[o.name]),i},{})},e.prototype.matches=function(t){var e=this._getMatchingNodes(t);return Se(e).every(f)?e:null},e}(),Ke=function(){function e(t){this.transition=t}return e.prototype.buildHooksForPhase=function(t){var e=this;return this.transition.router.transitionService._pluginapi._getEvents(t).map(function(t){return e.buildHooks(t)}).reduce(Ee,[]).filter(f)},e.prototype.buildHooks=function(e){var r=this.transition,n=r.treeChanges(),i=this.getMatchingHooks(e,n);if(!i)return[];var o={transition:r,current:r.options().current},a=function(i){return i.matches(n)[e.criteriaMatchPath.name].map(function(n){var a=pe({bind:i.bind,traceData:{hookType:e.name,context:n}},o),u=e.criteriaMatchPath.scope===t.TransitionHookScope.STATE?n.state.self:null,s=new Je(r,u,i,a);return{hook:i,node:n,transitionHook:s}})};return i.map(a).reduce(Ee,[]).sort(D(e.reverseSort)).map(function(t){return t.transitionHook})},e.prototype.getMatchingHooks=function(e,r){var n=e.hookPhase===t.TransitionHookPhase.CREATE,i=this.transition.router.transitionService
;return(n?[i]:[this.transition,i]).map(function(t){return t.getHooks(e.name)}).filter(Oe(te,"broken event named: "+e.name)).reduce(Ee,[]).filter(function(t){return t.matches(r)})},e}(),Ye=function(){function t(t){this.pattern=/.*/,this.inherit=!0,pe(this,t)}return t.prototype.is=function(t,e){return!0},t.prototype.encode=function(t,e){return t},t.prototype.decode=function(t,e){return t},t.prototype.equals=function(t,e){return t==e},t.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},t.prototype.toString=function(){return"{ParamType:"+this.name+"}"},t.prototype.$normalize=function(t){return this.is(t)?t:this.decode(t)},t.prototype.$asArray=function(t,e){if(!t)return this;if("auto"===t&&!e)throw new Error("'auto' array mode is for query parameters only");return new N(this,t)},t}(),Ze=Object.prototype.hasOwnProperty,Xe=function(t){return 0===["value","type","squash","array","dynamic"].filter(Ze.bind(t||{})).length};!function(t){t[t.PATH=0]="PATH",t[t.SEARCH=1]="SEARCH",t[t.CONFIG=2]="CONFIG"}(t.DefType||(t.DefType={}));var tr=function(){function e(e,r,n,i,o){n=F(n),r=U(n,r,i,e,o.paramTypes);var a=function(){var r={array:i===t.DefType.SEARCH&&"auto"},o=e.match(/\[\]$/)?{array:!0}:{};return pe(r,o,n).array}();r=a?r.$asArray(a,i===t.DefType.SEARCH):r;var u=void 0!==n.value||i===t.DefType.SEARCH,s=zt(n.dynamic)?!!n.dynamic:!!r.dynamic,c=zt(n.raw)?!!n.raw:!!r.raw,f=L(n,u,o.defaultSquashPolicy()),l=M(n,a,u,f),h=zt(n.inherit)?!!n.inherit:!!r.inherit;pe(this,{id:e,type:r,location:i,isOptional:u,dynamic:s,raw:c,squash:f,replace:l,inherit:h,array:a,config:n})}return e.prototype.isDefaultValue=function(t){return this.isOptional&&this.type.equals(this.value(),t)},e.prototype.value=function(t){var e=this;return t=function(t){for(var r=0,n=e.replace;r<n.length;r++){var i=n[r];if(i.from===t)return i.to}return t}(t),Wt(t)?function(){if(e._defaultValueCache)return e._defaultValueCache.defaultValue;if(!ae.$injector)throw new Error("Injectable functions cannot be called at configuration time");var t=ae.$injector.invoke(e.config.$$fn);if(null!==t&&void 0!==t&&!e.type.is(t))throw new Error("Default value ("+t+") for parameter '"+e.id+"' is not an instance of ParamType ("+e.type.name+")");return e.config.$$fn.__cacheable&&(e._defaultValueCache={defaultValue:t}),t}():this.type.$normalize(t)},e.prototype.isSearch=function(){return this.location===t.DefType.SEARCH},e.prototype.validates=function(t){if((Wt(t)||null===t)&&this.isOptional)return!0;var e=this.type.$normalize(t);if(!this.type.is(e))return!1;var r=this.type.encode(e);return!(Zt(r)&&!this.type.pattern.exec(r))},e.prototype.toString=function(){return"{Param:"+this.id+" "+this.type+" squash: '"+this.squash+"' optional: "+this.isOptional+"}"},e.values=function(t,e){void 0===e&&(e={});for(var r={},n=0,i=t;n<i.length;n++){var o=i[n];r[o.id]=o.value(e[o.id])}return r},e.changed=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),t.filter(function(t){return!t.type.equals(e[t.id],r[t.id])})},e.equals=function(t,r,n){return void 0===r&&(r={}),void 0===n&&(n={}),0===e.changed(t,r,n).length},e.validates=function(t,e){return void 0===e&&(e={}),t.map(function(t){return t.validates(e[t.id])}).reduce(be,!0)},e}(),er=function(){function t(e){if(e instanceof t){var r=e;this.state=r.state,this.paramSchema=r.paramSchema.slice(),this.paramValues=pe({},r.paramValues),this.resolvables=r.resolvables.slice(),this.views=r.views&&r.views.slice()}else{var n=e;this.state=n,this.paramSchema=n.parameters({inherit:!1}),this.paramValues={},this.resolvables=n.resolvables.map(function(t){return t.clone()})}}return t.prototype.applyRawParams=function(t){var e=function(e){return[e.id,e.value(t[e.id])]};return this.paramValues=this.paramSchema.reduce(function(t,r){return C(t,e(r))},{}),this},t.prototype.parameter=function(t){return S(this.paramSchema,Vt("id",t))},t.prototype.equals=function(t,e){var r=this.diff(t,e);return r&&0===r.length},t.prototype.diff=function(t,e){if(this.state!==t.state)return!1;var r=e?e(this):this.paramSchema;return tr.changed(r,this.paramValues,t.paramValues)},t.clone=function(e){return new t(e)},t}(),rr=function(){function t(){}return t.makeTargetState=function(t){var e=P(t).state;return new We(e,e,t.map(It("paramValues")).reduce(_e,{}))},t.buildPath=function(t){var e=t.params();return t.$state().path.map(function(t){return new er(t).applyRawParams(e)})},t.buildToPath=function(e,r){var n=t.buildPath(r);return r.options().inherit?t.inheritParams(e,n,Object.keys(r.params())):n},t.applyViewConfigs=function(e,r,n){r.filter(function(t){return me(n,t.state)}).forEach(function(n){var i=Se(n.state.views||{}),o=t.subPath(r,function(t){return t===n}),a=i.map(function(t){return e.createViewConfig(o,t)});n.views=a.reduce(Ee,[])})},t.inheritParams=function(t,e,r){function n(t,e){var r=S(t,Vt("state",e));return pe({},r&&r.paramValues)}function i(e){var i=pe({},e&&e.paramValues),a=g(i,r);i=w(i,r);var u=w(n(t,e.state)||{},o),s=pe(i,u,a);return new er(e.state).applyRawParams(s)}void 0===r&&(r=[]);var o=t.map(function(t){return t.paramSchema}).reduce(Ee,[]).filter(function(t){return!t.inherit}).map(It("id"));return e.map(i)},t.treeChanges=function(e,r,n){function i(t,e){var n=er.clone(t);return n.paramValues=r[e].paramValues,n}for(var o=0,a=Math.min(e.length,r.length);o<a&&e[o].state!==n&&function(e,r){return e.equals(r,t.nonDynamicParams)}(e[o],r[o]);)o++;var u,s,c,f,l;u=e,s=u.slice(0,o),c=u.slice(o);var h=s.map(i);return f=r.slice(o),l=h.concat(f),{from:u,to:l,retained:s,exiting:c,entering:f}},t.matching=function(t,e,r){var n=!1;return T(t,e).reduce(function(t,e){var i=e[0],o=e[1];return n=n||!i.equals(o,r),n?t:t.concat(i)},[])},t.equals=function(e,r,n){return e.length===r.length&&t.matching(e,r,n).length===e.length},t.subPath=function(t,e){var r=S(t,e),n=t.indexOf(r);return-1===n?void 0:t.slice(0,n+1)},t}();rr.nonDynamicParams=function(t){return t.state.parameters({inherit:!1}).filter(function(t){return!t.dynamic})},rr.paramValues=function(t){return t.reduce(function(t,e){return pe(t,e.paramValues)},{})};var nr={when:"LAZY",async:"WAIT"},ir=function(){function t(e,r,n,i,o){if(this.resolved=!1,this.promise=void 0,e instanceof t)pe(this,e);else if(Kt(r)){if(null==e||void 0==e)throw new Error("new Resolvable(): token argument is required");if(!Kt(r))throw new Error("new Resolvable(): resolveFn argument must be a function");this.token=e,this.policy=i,this.resolveFn=r,this.deps=n||[],this.data=o,this.resolved=void 0!==o,this.promise=this.resolved?ae.$q.when(this.data):void 0}else if(Xt(e)&&e.token&&Kt(e.resolveFn)){var a=e;return new t(a.token,a.resolveFn,a.deps,a.policy,a.data)}}return t.prototype.getPolicy=function(t){var e=this.policy||{},r=t&&t.resolvePolicy||{};return{when:e.when||r.when||nr.when,async:e.async||r.async||nr.async}},t.prototype.resolve=function(t,e){var r=this,n=ae.$q,i=function(){return n.all(t.getDependencies(r).map(function(r){return r.get(t,e)}))},o=function(t){return r.resolveFn.apply(null,t)},a=function(t){var e=t.cache(1);return e.take(1).toPromise().then(function(){return e})},u=t.findNode(this),s=u&&u.state,c="RXWAIT"===this.getPolicy(s).async?a:f,l=function(t){return r.data=t,r.resolved=!0,Ge.traceResolvableResolved(r,e),r.data};return this.promise=n.when().then(i).then(o).then(c).then(l)},t.prototype.get=function(t,e){return this.promise||this.resolve(t,e)},t.prototype.toString=function(){return"Resolvable(token: "+Q(this.token)+", requires: ["+this.deps.map(Q)+"])"},t.prototype.clone=function(){return new t(this)},t}();ir.fromData=function(t,e){return new ir(t,function(){return e},null,null,e)};var or={when:{LAZY:"LAZY",EAGER:"EAGER"},async:{WAIT:"WAIT",NOWAIT:"NOWAIT",RXWAIT:"RXWAIT"}},ar=or.when,ur=[ar.EAGER,ar.LAZY],sr=[ar.EAGER],cr="Native Injector",fr=function(){function t(t){this._path=t}return t.prototype.getTokens=function(){return this._path.reduce(function(t,e){return t.concat(e.resolvables.map(function(t){return t.token}))},[]).reduce(Ce,[])},t.prototype.getResolvable=function(t){return P(this._path.map(function(t){return t.resolvables}).reduce(Ee,[]).filter(function(e){return e.token===t}))},t.prototype.getPolicy=function(t){var e=this.findNode(t);return t.getPolicy(e.state)},t.prototype.subContext=function(e){return new t(rr.subPath(this._path,function(t){return t.state===e}))},t.prototype.addResolvables=function(t,e){var r=S(this._path,Vt("state",e)),n=t.map(function(t){return t.token});r.resolvables=r.resolvables.filter(function(t){return-1===n.indexOf(t.token)}).concat(t)},t.prototype.resolvePath=function(t,e){var r=this;void 0===t&&(t="LAZY");var n=me(ur,t)?t:"LAZY",i=n===or.when.EAGER?sr:ur;Ge.traceResolvePath(this._path,t,e);var o=function(t,e){return function(n){return me(t,r.getPolicy(n)[e])}},a=this._path.reduce(function(t,n){var a=n.resolvables.filter(o(i,"when")),u=a.filter(o(["NOWAIT"],"async")),s=a.filter(Ht(o(["NOWAIT"],"async"))),c=r.subContext(n.state),f=function(t){return t.get(c,e).then(function(e){return{token:t.token,value:e}})};return u.forEach(f),t.concat(s.map(f))},[]);return ae.$q.all(a)},t.prototype.injector=function(){return this._injector||(this._injector=new lr(this))},t.prototype.findNode=function(t){return S(this._path,function(e){return me(e.resolvables,t)})},t.prototype.getDependencies=function(t){var e=this,r=this.findNode(t),n=rr.subPath(this._path,function(t){return t===r})||this._path,i=n.reduce(function(t,e){return t.concat(e.resolvables)},[]).filter(function(e){return e!==t}),o=function(t){var r=i.filter(function(e){return e.token===t});if(r.length)return P(r);var n=e.injector().getNative(t);if(!n)throw new Error("Could not find Dependency Injection token: "+Q(t));return new ir(t,function(){return n},[],n)};return t.deps.map(o)},t}(),lr=function(){function t(t){this.context=t,this.native=this.get(cr)||ae.$injector}return t.prototype.get=function(t){var e=this.context.getResolvable(t);if(e){if("NOWAIT"===this.context.getPolicy(e).async)return e.get(this.context);if(!e.resolved)throw new Error("Resolvable async .get() not complete:"+Q(e.token));return e.data}return this.native&&this.native.get(t)},t.prototype.getAsync=function(t){var e=this.context.getResolvable(t);return e?e.get(this.context):ae.$q.when(this.native.get(t))},t.prototype.getNative=function(t){return this.native&&this.native.get(t)},t}(),hr=It("self"),pr=function(){function e(e,r,n){var i=this;if(this._deferred=ae.$q.defer(),this.promise=this._deferred.promise,this._registeredHooks={},this._hookBuilder=new Ke(this),this.isActive=function(){return i.router.globals.transition===i},this.router=n,this._targetState=r,!r.valid())throw new Error(r.error());this._options=pe({current:Ut(this)},r.options()),this.$id=n.transitionService._transitionCount++;var o=rr.buildToPath(e,r);this._treeChanges=rr.treeChanges(e,o,this._options.reloadState),this.createTransitionHookRegFns();var a=this._hookBuilder.buildHooksForPhase(t.TransitionHookPhase.CREATE);Je.invokeHooks(a,function(){return null}),this.applyViewConfigs(n)}return e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.createTransitionHookRegFns=function(){var e=this;this.router.transitionService._pluginapi._getEvents().filter(function(e){return e.hookPhase!==t.TransitionHookPhase.CREATE}).forEach(function(t){return q(e,e.router.transitionService,t)})},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype.applyViewConfigs=function(t){var e=this._treeChanges.entering.map(function(t){return t.state});rr.applyViewConfigs(t.transitionService.$view,this._treeChanges.to,e)},e.prototype.$from=function(){return P(this._treeChanges.from).state},e.prototype.$to=function(){return P(this._treeChanges.to).state},e.prototype.from=function(){return this.$from().self},e.prototype.to=function(){return this.$to().self},e.prototype.targetState=function(){return this._targetState},e.prototype.is=function(t){return t instanceof e?this.is({to:t.$to().name,from:t.$from().name}):!(t.to&&!H(this.$to(),t.to)||t.from&&!H(this.$from(),t.from))},e.prototype.params=function(t){return void 0===t&&(t="to"),Object.freeze(this._treeChanges[t].map(It("paramValues")).reduce(_e,{}))},e.prototype.injector=function(t,e){void 0===e&&(e="to");var r=this._treeChanges[e];return t&&(r=rr.subPath(r,function(e){return e.state===t||e.state.name===t})),new fr(r).injector()},e.prototype.getResolveTokens=function(t){return void 0===t&&(t="to"),new fr(this._treeChanges[t]).getTokens()},e.prototype.addResolvable=function(t,e){void 0===e&&(e=""),t=Nt(ir)(t)?t:new ir(t);var r="string"==typeof e?e:e.name,n=this._treeChanges.to,i=S(n,function(t){return t.state.name===r});new fr(n).addResolvables([t],i.state)},e.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},e.prototype.originalTransition=function(){var t=this.redirectedFrom();return t&&t.originalTransition()||this},e.prototype.options=function(){return this._options},e.prototype.entering=function(){return b(this._treeChanges.entering,It("state")).map(hr)},e.prototype.exiting=function(){return b(this._treeChanges.exiting,It("state")).map(hr).reverse()},e.prototype.retained=function(){return b(this._treeChanges.retained,It("state")).map(hr)},e.prototype.views=function(t,e){void 0===t&&(t="entering");var r=this._treeChanges[t];return r=e?r.filter(Vt("state",e)):r,r.map(It("views")).filter(f).reduce(Ee,[])},e.prototype.treeChanges=function(t){return t?this._treeChanges[t]:this._treeChanges},e.prototype.redirect=function(t){for(var e=1,r=this;null!=(r=r.redirectedFrom());)if(++e>20)throw new Error("Too many consecutive Transition redirects (20+)");var n={redirectedFrom:this,source:"redirect"};"url"===this.options().source&&!1!==t.options().location&&(n.location="replace");var i=pe({},this.options(),t.options(),n);t=new We(t.identifier(),t.$state(),t.params(),i);var o=this.router.transitionService.create(this._treeChanges.from,t),a=this._treeChanges.entering,u=o._treeChanges.entering;return rr.matching(u,a,rr.nonDynamicParams).filter(Ht(function(t){return function(e){return t&&e.state.includes[t.name]}}(t.options().reloadState))).forEach(function(t,e){t.resolvables=a[e].resolvables}),o},e.prototype._changedParams=function(){var t=this._treeChanges;if(!this._options.reload&&!t.exiting.length&&!t.entering.length&&t.to.length===t.from.length){if(!T(t.to,t.from).map(function(t){return t[0].state!==t[1].state}).reduce(Re,!1)){var e=t.to.map(function(t){return t.paramSchema}),r=[t.to,t.from].map(function(t){return t.map(function(t){return t.paramValues})});return T(e,r[0],r[1]).map(function(t){var e=t[0],r=t[1],n=t[2];return tr.changed(e,r,n)}).reduce(Ee,[])}}},e.prototype.dynamic=function(){var t=this._changedParams();return!!t&&t.map(function(t){return t.dynamic}).reduce(Re,!1)},e.prototype.ignored=function(){return!!this._ignoredReason()},e.prototype._ignoredReason=function(){var t=this.router.globals.transition,e=this._options.reloadState,r=function(t,r){if(t.length!==r.length)return!1;var n=rr.matching(t,r);return t.length===n.filter(function(t){return!e||!t.state.includes[e.name]}).length},n=this.treeChanges(),i=t&&t.treeChanges();return i&&r(i.to,n.to)&&r(i.exiting,n.exiting)?"SameAsPending":0===n.exiting.length&&0===n.entering.length&&r(n.from,n.to)?"SameAsCurrent":void 0},e.prototype.run=function(){var e=this,r=Je.runAllHooks,n=function(t){return e._hookBuilder.buildHooksForPhase(t)},i=function(){Ge.traceSuccess(e.$to(),e),e.success=!0,e._deferred.resolve(e.to()),r(n(t.TransitionHookPhase.SUCCESS))},o=function(i){Ge.traceError(i,e),e.success=!1,e._deferred.reject(i),e._error=i,r(n(t.TransitionHookPhase.ERROR))},a=function(){var e=n(t.TransitionHookPhase.RUN),r=function(){return ae.$q.when(void 0)};return Je.invokeHooks(e,r)},u=function(){var t=e.router.globals;return t.lastStartedTransitionId=e.$id,t.transition=e,t.transitionHistory.enqueue(e),Ge.traceTransitionStart(e),ae.$q.when(void 0)},s=n(t.TransitionHookPhase.BEFORE);return Je.invokeHooks(s,u).then(a).then(i,o),this.promise},e.prototype.valid=function(){return!this.error()||void 0!==this.success},e.prototype.abort=function(){Wt(this.success)&&(this._aborted=!0)},e.prototype.error=function(){var t=this.$to();return t.self.abstract?"Cannot transition to abstract state '"+t.name+"'":tr.validates(t.parameters(),this.params())?!1===this.success?this._error:void 0:"Param values not valid for state '"+t.name+"'"},e.prototype.toString=function(){var t=this.from(),e=this.to(),r=function(t){return null!==t["#"]&&void 0!==t["#"]?t:w(t,["#"])};return"Transition#"+this.$id+"( '"+(Xt(t)?t.name:t)+"'"+fe(r(this._treeChanges.from.map(It("paramValues")).reduce(_e,{})))+" -> "+(this.valid()?"":"(X) ")+"'"+(Xt(e)?e.name:e)+"'"+fe(r(this.params()))+" )"},e}();pr.diToken=pr;var dr=null,vr=function(t){var e=Ne.isRejectionPromise;return(dr=dr||s([[Ht(zt),Ut("undefined")],[Jt,Ut("null")],[ie,Ut("[Promise]")],[e,function(t){return t._transitionRejection.toString()}],[Nt(Ne),u("toString")],[Nt(pr),u("toString")],[Nt(ir),u("toString")],[c,z],[Ut(!0),f]]))(t)},mr=function(t){return function(e){if(!e)return["",""];var r=e.indexOf(t);return-1===r?[e,""]:[e.substr(0,r),e.substr(r+1)]}},yr=function(){function t(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes=g(t.prototype,["hash","string","query","path","int","bool","date","json","any"]);var e=function(t,e){return new Ye(pe({name:e},t))};this.types=ve(b(this.defaultTypes,e),{})}return t.prototype.dispose=function(){this.types={}},t.prototype.type=function(t,e,r){if(!zt(e))return this.types[t];if(this.types.hasOwnProperty(t))throw new Error("A type named '"+t+"' has already been defined.");return this.types[t]=new Ye(pe({name:t},e)),r&&(this.typeQueue.push({name:t,def:r}),this.enqueue||this._flushTypeQueue()),this},t.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var t=this.typeQueue.shift();if(t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");pe(this.types[t.name],ae.$injector.invoke(t.def))}},t}();!function(){var t=function(t){var e=function(t){return null!=t?t.toString():t},r={encode:e,decode:e,is:Nt(String),pattern:/.*/,equals:function(t,e){return t==e}};return pe({},r,t)};pe(yr.prototype,{string:t({}),path:t({pattern:/[^\/]*/}),query:t({}),hash:t({inherit:!1}),int:t({decode:function(t){return parseInt(t,10)},is:function(t){return!Qt(t)&&this.decode(t.toString())===t},pattern:/-?\d+/}),bool:t({encode:function(t){return t&&1||0},decode:function(t){return 0!==parseInt(t,10)},is:Nt(Boolean),pattern:/0|1/}),date:t({encode:function(t){return this.is(t)?[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"):void 0},decode:function(t){if(this.is(t))return t;var e=this.capture.exec(t);return e?new Date(e[1],e[2]-1,e[3]):void 0},is:function(t){return t instanceof Date&&!isNaN(t.valueOf())},equals:function(t,e){return["getFullYear","getMonth","getDate"].reduce(function(r,n){return r&&t[n]()===e[n]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}),json:t({encode:fe,decode:ce,is:Nt(Object),equals:de,pattern:/[^\/]*/}),any:t({encode:f,decode:f,is:function(){return!0},equals:de})})}();var gr=function(){function t(t){void 0===t&&(t={}),pe(this,t)}return t.prototype.$inherit=function(t,e,r){var n,i=y(e,r),o={},a=[];for(var u in i)if(i[u]&&i[u].params&&(n=Object.keys(i[u].params),n.length))for(var s in n)a.indexOf(n[s])>=0||(a.push(n[s]),o[n[s]]=this[n[s]]);return pe({},o,t)},t}(),wr=function(t){if(!Zt(t))return!1;var e="^"===t.charAt(0);return{val:e?t.substring(1):t,root:e}},_r=function(t,e){return function(r){var n=r;n&&n.url&&n.name&&n.name.match(/\.\*\*$/)&&(n.url+="{remainder:any}");var i=wr(n.url),o=r.parent,a=i?t.compile(i.val,{params:r.params||{},paramMap:function(t,e){return!1===n.reloadOnSearch&&e&&(t=pe(t||{},{dynamic:!0})),t}}):n.url;if(!a)return null;if(!t.isMatcher(a))throw new Error("Invalid url '"+a+"' in state '"+r+"'");return i&&i.root?a:(o&&o.navigable||e()).url.append(a)}},$r=function(t){return function(e){return!t(e)&&e.url?e:e.parent?e.parent.navigable:null}},Sr=function(t){return function(e){var r=function(e,r){return t.fromConfig(r,null,e)},n=e.url&&e.url.parameters({inherit:!1})||[],i=Se($e(w(e.params||{},n.map(It("id"))),r));return n.concat(i).map(function(t){return[t.id,t]}).reduce(C,{})}},br=function(){function t(t,e){function r(e){return o(e)?null:t.find(n.parentName(e))||i()}this.matcher=t;var n=this,i=function(){return t.find("")},o=function(t){return""===t.name};this.builders={name:[Z],self:[X],parent:[r],data:[tt],url:[_r(e,i)],navigable:[$r(o)],params:[Sr(e.paramFactory)],views:[],path:[et],includes:[rt],resolvables:[nt]}}return t.prototype.builder=function(t,e){var r=this.builders,n=r[t]||[];return Zt(t)&&!zt(e)?n.length>1?n:n[0]:Zt(t)&&Kt(e)?(r[t]=n,r[t].push(e),function(){return r[t].splice(r[t].indexOf(e,1))&&null}):void 0},t.prototype.build=function(t){var e=this,r=e.matcher,n=e.builders,i=this.parentName(t);if(i&&!r.find(i,void 0,!1))return null;for(var o in n)if(n.hasOwnProperty(o)){var a=n[o].reduce(function(t,e){return function(r){return e(r,t)}},l);t[o]=a(t)}return t},t.prototype.parentName=function(t){var e=t.name||"",r=e.split(".");if(r.length>1){if(t.parent)throw new Error("States that specify the 'parent:' property should not have a '.' in their name ("+e+")");return"**"===r.pop()&&r.pop(),r.join(".")}return t.parent?Zt(t.parent)?t.parent:t.parent.name:""},t.prototype.name=function(t){var e=t.name;if(-1!==e.indexOf(".")||!t.parent)return e;var r=Zt(t.parent)?t.parent:t.parent.name;return r?r+"."+e:e},t}(),Rr=function(){function t(t){this._states=t}return t.prototype.isRelative=function(t){return t=t||"",0===t.indexOf(".")||0===t.indexOf("^")},t.prototype.find=function(t,e,r){if(void 0===r&&(r=!0),t||""===t){var n=Zt(t),i=n?t:t.name;this.isRelative(i)&&(i=this.resolvePath(i,e));var o=this._states[i];if(o&&(n||!(n||o!==t&&o.self!==t)))return o;if(n&&r){var a=Se(this._states),u=a.filter(function(t){return t.__stateObjectCache.nameGlob&&t.__stateObjectCache.nameGlob.matches(i)});return u.length>1&&console.log("stateMatcher.find: Found multiple matches for "+i+" using glob: ",u.map(function(t){return t.name})),u[0]}}},t.prototype.resolvePath=function(t,e){if(!e)throw new Error("No reference point given for path '"+t+"'");for(var r=this.find(e),n=t.split("."),i=0,o=n.length,a=r;i<o;i++)if(""!==n[i]||0!==i){if("^"!==n[i])break;if(!a.parent)throw new Error("Path '"+t+"' not valid for state '"+r.name+"'");a=a.parent}else a=r;var u=n.slice(i).join(".");return a.name+(a.name&&u?".":"")+u},t}(),Er=function(){function t(t,e,r,n,i){this.$registry=t,this.$urlRouter=e,this.states=r,this.builder=n,this.listeners=i,this.queue=[],this.matcher=t.matcher}return t.prototype.dispose=function(){this.queue=[]},t.prototype.register=function(t){var e=this.queue,r=Mt.create(t),n=r.name;if(!Zt(n))throw new Error("State must have a valid name");if(this.states.hasOwnProperty(n)||me(e.map(It("name")),n))throw new Error("State '"+n+"' is already defined");return e.push(r),this.flush(),r},t.prototype.flush=function(){for(var t=this,e=this,r=e.queue,n=e.states,i=e.builder,o=[],a=[],u={},s=function(e){return t.states.hasOwnProperty(e)&&t.states[e]};r.length>0;){var c=r.shift(),f=c.name,l=i.build(c),h=a.indexOf(c);if(l){var p=s(f);if(p&&p.name===f)throw new Error("State '"+f+"' is already defined");var d=s(f+".**");d&&this.$registry.deregister(d),n[f]=c,this.attachRoute(c),h>=0&&a.splice(h,1),o.push(c)}else{var v=u[f];if(u[f]=r.length,h>=0&&v===r.length)return r.push(c),n;h<0&&a.push(c),r.push(c)}}return o.length&&this.listeners.forEach(function(t){return t("registered",o.map(function(t){return t.self}))}),n},t.prototype.attachRoute=function(t){!t.abstract&&t.url&&this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t))},t}(),Tr=function(){function t(t){this._router=t,this.states={},this.listeners=[],this.matcher=new Rr(this.states),this.builder=new br(this.matcher,t.urlMatcherFactory),this.stateQueue=new Er(this,t.urlRouter,this.states,this.builder,this.listeners),this._registerRoot()}return t.prototype._registerRoot=function(){var t={name:"",url:"^",views:null,params:{"#":{value:null,type:"hash",dynamic:!0}},abstract:!0};(this._root=this.stateQueue.register(t)).navigable=null},t.prototype.dispose=function(){var t=this;this.stateQueue.dispose(),this.listeners=[],this.get().forEach(function(e){return t.get(e)&&t.deregister(e)})},t.prototype.onStatesChanged=function(t){return this.listeners.push(t),function(){ye(this.listeners)(t)}.bind(this)},t.prototype.root=function(){return this._root},t.prototype.register=function(t){return this.stateQueue.register(t)},t.prototype._deregisterTree=function(t){var e=this,r=this.get().map(function(t){return t.$$state()}),n=function(t){var e=r.filter(function(e){return-1!==t.indexOf(e.parent)});return 0===e.length?e:e.concat(n(e))},i=n([t]),o=[t].concat(i).reverse();return o.forEach(function(t){var r=e._router.urlRouter;r.rules().filter(Vt("state",t)).forEach(r.removeRule.bind(r)),delete e.states[t.name]}),o},t.prototype.deregister=function(t){var e=this.get(t);if(!e)throw new Error("Can't deregister state; not found: "+t);var r=this._deregisterTree(e.$$state());return this.listeners.forEach(function(t){return t("deregistered",r.map(function(t){return t.self}))}),r},t.prototype.get=function(t,e){var r=this;if(0===arguments.length)return Object.keys(this.states).map(function(t){return r.states[t].self});var n=this.matcher.find(t,e);return n&&n.self||null},t.prototype.decorator=function(t,e){return this.builder.builder(t,e)},t}(),Cr=function(t,e,r){return t[e]=t[e]||r()},Pr=K("/"),kr=function(){function e(t,r,n,i){var o=this;this.config=i,this._cache={path:[this]},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.pattern=t,this.config=m(this.config,{params:{},strict:!0,caseInsensitive:!1,paramMap:f});for(var a,u,s,c=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,h=0,p=[],d=function(r){if(!e.nameValidator.test(r))throw new Error("Invalid parameter name '"+r+"' in pattern '"+t+"'");if(S(o._params,Vt("id",r)))throw new Error("Duplicate parameter name '"+r+"' in pattern '"+t+"'")},v=function(e,n){var i=e[2]||e[3],a=n?e[4]:e[4]||("*"===e[1]?".*":null);return{id:i,regexp:a,cfg:o.config.params[i],segment:t.substring(h,e.index),type:a?r.type(a)||function(t){return ve(r.type(n?"query":"path"),{pattern:new RegExp(t,o.config.caseInsensitive?"i":void 0)})}(a):null}};(a=c.exec(t))&&(u=v(a,!1),!(u.segment.indexOf("?")>=0));)d(u.id),this._params.push(n.fromPath(u.id,u.type,this.config.paramMap(u.cfg,!1))),this._segments.push(u.segment),p.push([u.segment,P(this._params)]),h=c.lastIndex;s=t.substring(h);var y=s.indexOf("?");if(y>=0){var g=s.substring(y);if(s=s.substring(0,y),g.length>0)for(h=0;a=l.exec(g);)u=v(a,!0),d(u.id),this._params.push(n.fromSearch(u.id,u.type,this.config.paramMap(u.cfg,!0))),h=c.lastIndex}this._segments.push(s),this._compiled=p.map(function(t){return it.apply(null,t)}).concat(it(s))}return e.prototype.append=function(t){return this._children.push(t),t._cache={path:this._cache.path.concat(t),parent:this,pattern:null},t},e.prototype.isRoot=function(){return this._cache.path[0]===this},e.prototype.toString=function(){return this.pattern},e.prototype.exec=function(t,e,r,n){var i=this;void 0===e&&(e={}),void 0===n&&(n={});var o=Cr(this._cache,"pattern",function(){return new RegExp(["^",Pe(i._cache.path.map(It("_compiled"))).join(""),!1===i.config.strict?"/?":"","$"].join(""),i.config.caseInsensitive?"i":void 0)}).exec(t);if(!o)return null;var a=this.parameters(),u=a.filter(function(t){return!t.isSearch()}),s=a.filter(function(t){return t.isSearch()}),c=this._cache.path.map(function(t){return t._segments.length-1}).reduce(function(t,e){return t+e}),f={};if(c!==o.length-1)throw new Error("Unbalanced capture group in route '"+this.pattern+"'");for(var l=0;l<c;l++){for(var h=u[l],p=o[l+1],d=0;d<h.replace.length;d++)h.replace[d].from===p&&(p=h.replace[d].to);p&&!0===h.array&&(p=function(t){var e=function(t){return t.split("").reverse().join("")},r=function(t){return t.replace(/\\-/g,"-")};return b(b(e(t).split(/-(?!\\)/),e),r).reverse()}(p)),zt(p)&&(p=h.type.decode(p)),f[h.id]=h.value(p)}return s.forEach(function(t){for(var r=e[t.id],n=0;n<t.replace.length;n++)t.replace[n].from===r&&(r=t.replace[n].to);zt(r)&&(r=t.type.decode(r)),f[t.id]=t.value(r)}),r&&(f["#"]=r),f},e.prototype.parameters=function(t){return void 0===t&&(t={}),!1===t.inherit?this._params:Pe(this._cache.path.map(function(t){return t._params}))},e.prototype.parameter=function(t,e){var r=this;void 0===e&&(e={});var n=this._cache.parent;return function(){for(var e=0,n=r._params;e<n.length;e++){var i=n[e];if(i.id===t)return i}}()||!1!==e.inherit&&n&&n.parameter(t,e)||null},e.prototype.validates=function(t){var e=function(t,e){return!t||t.validates(e)};return t=t||{},this.parameters().filter(function(e){return t.hasOwnProperty(e.id)}).map(function(r){return e(r,t[r.id])}).reduce(be,!0)},e.prototype.format=function(t){function r(e){var r=e.value(t[e.id]),n=e.validates(r),i=e.isDefaultValue(r);return{param:e,value:r,isValid:n,isDefaultValue:i,squash:!!i&&e.squash,encoded:e.type.encode(r)}}void 0===t&&(t={});var n=this._cache.path,i=n.map(e.pathSegmentsAndParams).reduce(Ee,[]).map(function(t){return Zt(t)?t:r(t)}),o=n.map(e.queryParams).reduce(Ee,[]).map(r),a=function(t){return!1===t.isValid};if(i.concat(o).filter(a).length)return null;var u=i.reduce(function(t,r){if(Zt(r))return t+r;var n=r.squash,i=r.encoded,o=r.param;return!0===n?t.match(/\/$/)?t.slice(0,-1):t:Zt(n)?t+n:!1!==n?t:null==i?t:te(i)?t+b(i,e.encodeDashes).join("-"):o.raw?t+i:t+encodeURIComponent(i)},""),s=o.map(function(t){var e=t.param,r=t.squash,n=t.encoded,i=t.isDefaultValue;if(!(null==n||i&&!1!==r)&&(te(n)||(n=[n]),0!==n.length))return e.raw||(n=b(n,encodeURIComponent)),n.map(function(t){return e.id+"="+t})}).filter(f).reduce(Ee,[]).join("&");return u+(s?"?"+s:"")+(t["#"]?"#"+t["#"]:"")},e.encodeDashes=function(t){return encodeURIComponent(t).replace(/-/g,function(t){return"%5C%"+t.charCodeAt(0).toString(16).toUpperCase()})},e.pathSegmentsAndParams=function(e){return T(e._segments,e._params.filter(function(e){return e.location===t.DefType.PATH}).concat(void 0)).reduce(Ee,[]).filter(function(t){return""!==t&&zt(t)})},e.queryParams=function(e){return e._params.filter(function(e){return e.location===t.DefType.SEARCH})},e.compare=function(t,r){var n,i,o=function(t){return t._cache.segments=t._cache.segments||t._cache.path.map(e.pathSegmentsAndParams).reduce(Ee,[]).reduce(Y,[]).map(function(t){return Zt(t)?Pr(t):t}).reduce(Ee,[])},a=function(t){return t._cache.weights=t._cache.weights||o(t).map(function(t){return"/"===t?1:Zt(t)?2:t instanceof tr?3:void 0})},u=T(a(t),a(r));for(i=0;i<u.length;i++)if(0!==(n=u[i][0]-u[i][1]))return n;return 0},e}();kr.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/;var Or=function(){function e(){var e=this;this.paramTypes=new yr,this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1,this._getConfig=function(t){return pe({strict:e._isStrictMode,caseInsensitive:e._isCaseInsensitive},t)},this.paramFactory={fromConfig:function(r,n,i){return new tr(r,n,i,t.DefType.CONFIG,e)},fromPath:function(r,n,i){return new tr(r,n,i,t.DefType.PATH,e)},fromSearch:function(r,n,i){return new tr(r,n,i,t.DefType.SEARCH,e)}},pe(this,{UrlMatcher:kr,Param:tr})}return e.prototype.caseInsensitive=function(t){return this._isCaseInsensitive=zt(t)?t:this._isCaseInsensitive},e.prototype.strictMode=function(t){
return this._isStrictMode=zt(t)?t:this._isStrictMode},e.prototype.defaultSquashPolicy=function(t){if(zt(t)&&!0!==t&&!1!==t&&!Zt(t))throw new Error("Invalid squash policy: "+t+". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy=zt(t)?t:this._defaultSquashPolicy},e.prototype.compile=function(t,e){return new kr(t,this.paramTypes,this.paramFactory,this._getConfig(e))},e.prototype.isMatcher=function(t){if(!Xt(t))return!1;var e=!0;return he(kr.prototype,function(r,n){Kt(r)&&(e=e&&zt(t[n])&&Kt(t[n]))}),e},e.prototype.type=function(t,e,r){var n=this.paramTypes.type(t,e,r);return zt(e)?this:n},e.prototype.$get=function(){return this.paramTypes.enqueue=!1,this.paramTypes._flushTypeQueue(),this},e.prototype.dispose=function(){this.paramTypes.dispose()},e}(),xr=function(){function t(t){this.router=t}return t.prototype.compile=function(t){return this.router.urlMatcherFactory.compile(t)},t.prototype.create=function(t,e){var r=this,n=s([[Zt,function(t){return n(r.compile(t))}],[Nt(kr),function(t){return r.fromUrlMatcher(t,e)}],[ne,function(t){return r.fromState(t,r.router)}],[Nt(RegExp),function(t){return r.fromRegExp(t,e)}],[Kt,function(t){return new Ir(t,e)}]]),i=n(t);if(!i)throw new Error("invalid 'what' in when()");return i},t.prototype.fromUrlMatcher=function(t,e){function r(e){var r=t.exec(e.path,e.search,e.hash);return t.validates(r)&&r}function n(e){var r=t.parameters().filter(function(t){return t.isOptional});return r.length?r.filter(function(t){return e[t.id]}).length/r.length:1e-6}var i=e;Zt(e)&&(e=this.router.urlMatcherFactory.compile(e)),Nt(kr)(e)&&(i=function(t){return e.format(t)});var o={urlMatcher:t,matchPriority:n,type:"URLMATCHER"};return pe(new Ir(r,i),o)},t.prototype.fromState=function(t,e){var r=function(r){var n=e.stateService,i=e.globals;n.href(t,r)!==n.href(i.current,i.params)&&n.transitionTo(t,r,{inherit:!0,source:"url"})},n={state:t,type:"STATE"};return pe(this.fromUrlMatcher(t.url,r),n)},t.prototype.fromRegExp=function(t,e){if(t.global||t.sticky)throw new Error("Rule RegExp must not be global or sticky");var r=function(t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})},n=Zt(e)?r:e,i=function(e){return t.exec(e.path)},o={regexp:t,type:"REGEXP"};return pe(new Ir(i,n),o)},t}();xr.isUrlRule=function(t){return t&&["type","match","handler"].every(function(e){return zt(t[e])})};var jr,Ir=function(){function t(t,e){var r=this;this.match=t,this.type="RAW",this.matchPriority=function(t){return 0-r.$id},this.handler=e||f}return t}(),Vr=It("urlMatcher");jr=Ve(Ie(i(It("priority"),function(t){return-t})),Ie(i(It("type"),function(t){return{STATE:4,URLMATCHER:4,REGEXP:3,RAW:2,OTHER:1}[t]})),function(t,e){return Vr(t)&&Vr(e)?kr.compare(Vr(t),Vr(e)):0},Ie(It("$id"),me(["REGEXP","RAW","OTHER"])));var Ar=function(){function t(e){this._sortFn=jr,this._rules=[],this.interceptDeferred=!1,this._id=0,this._sorted=!1,this._router=e,this.urlRuleFactory=new xr(e),h(Ut(t.prototype),this,Ut(this))}return t.prototype.dispose=function(){this.listen(!1),this._rules=[],delete this._otherwiseFn},t.prototype.sort=function(t){this._rules.sort(this._sortFn=t||this._sortFn),this._sorted=!0},t.prototype.ensureSorted=function(){this._sorted||this.sort()},t.prototype.match=function(t){var e=this;this.ensureSorted(),t=pe({path:"",search:{},hash:""},t);var r=this.rules();this._otherwiseFn&&r.push(this._otherwiseFn);for(var n,i=0;i<r.length&&(!n||0===this._sortFn(r[i],n.rule));i++){var o=function(r){var n=r.match(t,e._router);return n&&{match:n,rule:r,weight:r.matchPriority(n)}}(r[i]);n=!n||o&&o.weight>n.weight?o:n}return n},t.prototype.sync=function(t){if(!t||!t.defaultPrevented){var e=this._router,r=e.urlService,n=e.stateService,i={path:r.path(),search:r.search(),hash:r.hash()},o=this.match(i);s([[Zt,function(t){return r.url(t,!0)}],[We.isDef,function(t){return n.go(t.state,t.params,t.options)}],[Nt(We),function(t){return n.go(t.state(),t.params(),t.options())}]])(o&&o.rule.handler(o.match,i,e))}},t.prototype.listen=function(t){var e=this;if(!1!==t)return this._stopFn=this._stopFn||this._router.urlService.onChange(function(t){return e.sync(t)});this._stopFn&&this._stopFn(),delete this._stopFn},t.prototype.update=function(t){var e=this._router.locationService;if(t)return void(this.location=e.path());e.path()!==this.location&&e.url(this.location,!0)},t.prototype.push=function(t,e,r){var n=r&&!!r.replace;this._router.urlService.url(t.format(e||{}),n)},t.prototype.href=function(t,e,r){var n=t.format(e);if(null==n)return null;r=r||{absolute:!1};var i=this._router.urlService.config,o=i.html5Mode();if(o||null===n||(n="#"+i.hashPrefix()+n),n=ot(n,o,r.absolute,i.baseHref()),!r.absolute||!n)return n;var a=!o&&n?"/":"",u=i.port();return u=80===u||443===u?"":":"+u,[i.protocol(),"://",i.host(),u,a,n].join("")},t.prototype.rule=function(t){var e=this;if(!xr.isUrlRule(t))throw new Error("invalid rule");return t.$id=this._id++,t.priority=t.priority||0,this._rules.push(t),this._sorted=!1,function(){return e.removeRule(t)}},t.prototype.removeRule=function(t){ye(this._rules,t)},t.prototype.rules=function(){return this.ensureSorted(),this._rules.slice()},t.prototype.otherwise=function(t){var e=at(t);this._otherwiseFn=this.urlRuleFactory.create(Ut(!0),e),this._sorted=!1},t.prototype.initial=function(t){var e=at(t),r=function(t,e){return 0===e.globals.transitionHistory.size()&&!!/^\/?$/.exec(t.path)};this.rule(this.urlRuleFactory.create(r,e))},t.prototype.when=function(t,e,r){var n=this.urlRuleFactory.create(t,e);return zt(r&&r.priority)&&(n.priority=r.priority),this.rule(n),n},t.prototype.deferIntercept=function(t){void 0===t&&(t=!0),this.interceptDeferred=t},t}(),Hr=function(){function t(){var t=this;this._uiViews=[],this._viewConfigs=[],this._viewConfigFactories={},this._pluginapi={_rootViewContext:this._rootViewContext.bind(this),_viewConfigFactory:this._viewConfigFactory.bind(this),_registeredUIViews:function(){return t._uiViews},_activeViewConfigs:function(){return t._viewConfigs}}}return t.prototype._rootViewContext=function(t){return this._rootContext=t||this._rootContext},t.prototype._viewConfigFactory=function(t,e){this._viewConfigFactories[t]=e},t.prototype.createViewConfig=function(t,e){var r=this._viewConfigFactories[e.$type];if(!r)throw new Error("ViewService: No view config factory registered for type "+e.$type);var n=r(t,e);return te(n)?n:[n]},t.prototype.deactivateViewConfig=function(t){Ge.traceViewServiceEvent("<- Removing",t),ye(this._viewConfigs,t)},t.prototype.activateViewConfig=function(t){Ge.traceViewServiceEvent("-> Registering",t),this._viewConfigs.push(t)},t.prototype.sync=function(){function e(t){var e=function(t){return t&&t.parent?e(t.parent)+1:1};return 1e4*t.fqn.split(".").length+e(t.creationContext)}function n(t){for(var e=t.viewDecl.$context,r=0;++r&&e.parent;)e=e.parent;return r}var i=this,o=this._uiViews.map(function(t){return[t.fqn,t]}).reduce(C,{}),a=r(function(t,e,r,n){return e*(t(r)-t(n))}),u=function(e){var r=i._viewConfigs.filter(t.matches(o,e));return r.length>1&&r.sort(a(n,-1)),[e,r[0]]},s=function(t){var e=t[0],r=t[1];-1!==i._uiViews.indexOf(e)&&e.configUpdated(r)};this._uiViews.sort(a(e,1)).map(u).forEach(s)},t.prototype.registerUIView=function(t){Ge.traceViewServiceUIViewEvent("-> Registering",t);var e=this._uiViews,r=function(e){return e.fqn===t.fqn};return e.filter(r).length&&Ge.traceViewServiceUIViewEvent("!!!! duplicate uiView named:",t),e.push(t),this.sync(),function(){if(-1===e.indexOf(t))return void Ge.traceViewServiceUIViewEvent("Tried removing non-registered uiView",t);Ge.traceViewServiceUIViewEvent("<- Deregistering",t),ye(e)(t)}},t.prototype.available=function(){return this._uiViews.map(It("fqn"))},t.prototype.active=function(){return this._uiViews.filter(It("$config")).map(It("name"))},t.normalizeUIViewTarget=function(t,e){void 0===e&&(e="");var r=e.split("@"),n=r[0]||"$default",i=Zt(r[1])?r[1]:"^",o=/^(\^(?:\.\^)*)\.(.*$)/.exec(n);(o&&(i=o[1],n=o[2]),"!"===n.charAt(0)&&(n=n.substr(1),i=""),/^(\^(?:\.\^)*)$/.exec(i))?i=i.split(".").reduce(function(t,e){return t.parent},t).name:"."===i&&(i=t.name);return{uiViewName:n,uiViewContextAnchor:i}},t}();Hr.matches=function(t,e){return function(r){if(e.$type!==r.viewDecl.$type)return!1;var n=r.viewDecl,i=n.$uiViewName.split("."),o=e.fqn.split(".");if(!de(i,o.slice(0-i.length)))return!1;var a=1-i.length||void 0,u=o.slice(0,a).join("."),s=t[u].creationContext;return n.$uiViewContextAnchor===(s&&s.name)}};var qr=function(){function t(){this.params=new gr,this.lastStartedTransitionId=-1,this.transitionHistory=new qe([],1),this.successfulTransitions=new qe([],1)}return t.prototype.dispose=function(){this.transitionHistory.clear(),this.successfulTransitions.clear(),this.transition=null},t}(),Dr=function(t){return t.reduce(function(t,e){return t[e]=oe(e),t},{dispose:l})},Nr=["url","path","search","hash","onChange"],Fr=["port","protocol","host","baseHref","html5Mode","hashPrefix"],Ur=["type","caseInsensitive","strictMode","defaultSquashPolicy"],Lr=["sort","when","initial","otherwise","rules","rule","removeRule"],Mr=["deferIntercept","listen","sync","match"],Br=function(){function t(t,e){void 0===e&&(e=!0),this.router=t,this.rules={},this.config={};var r=function(){return t.locationService};h(r,this,r,Nr,e);var n=function(){return t.locationConfig};h(n,this.config,n,Fr,e);var i=function(){return t.urlMatcherFactory};h(i,this.config,i,Ur);var o=function(){return t.urlRouter};h(o,this.rules,o,Lr),h(o,this,o,Mr)}return t.prototype.url=function(t,e,r){},t.prototype.path=function(){},t.prototype.search=function(){},t.prototype.hash=function(){},t.prototype.onChange=function(t){},t.prototype.parts=function(){return{path:this.path(),search:this.search(),hash:this.hash()}},t.prototype.dispose=function(){},t.prototype.sync=function(t){},t.prototype.listen=function(t){},t.prototype.deferIntercept=function(t){},t.prototype.match=function(t){},t}();Br.locationServiceStub=Dr(Nr),Br.locationConfigStub=Dr(Fr);var Gr=0,Wr=function(){function t(t,e){void 0===t&&(t=Br.locationServiceStub),void 0===e&&(e=Br.locationConfigStub),this.locationService=t,this.locationConfig=e,this.$id=Gr++,this._disposed=!1,this._disposables=[],this.trace=Ge,this.viewService=new Hr,this.transitionService=new $n(this),this.globals=new qr,this.urlMatcherFactory=new Or,this.urlRouter=new Ar(this),this.stateRegistry=new Tr(this),this.stateService=new Sn(this),this.urlService=new Br(this),this._plugins={},this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self,this.disposable(this.globals),this.disposable(this.stateService),this.disposable(this.stateRegistry),this.disposable(this.transitionService),this.disposable(this.urlRouter),this.disposable(t),this.disposable(e)}return t.prototype.disposable=function(t){this._disposables.push(t)},t.prototype.dispose=function(t){var e=this;if(t&&Kt(t.dispose))return void t.dispose(this);this._disposed=!0,this._disposables.slice().forEach(function(t){try{"function"==typeof t.dispose&&t.dispose(e),ye(e._disposables,t)}catch(t){}})},t.prototype.plugin=function(t,e){void 0===e&&(e={});var r=new t(this,e);if(!r.name)throw new Error("Required property `name` missing on plugin: "+r);return this._disposables.push(r),this._plugins[r.name]=r},t.prototype.getPlugin=function(t){return t?this._plugins[t]:Se(this._plugins)},t}(),zr=function(t){return t.onCreate({},ut)},Jr=function(t){function e(e){if(e)return e instanceof We?e:Zt(e)?n.target(e,t.params(),t.options()):e.state||e.params?n.target(e.state||t.to(),e.params||t.params(),t.options()):void 0}var r=t.to().redirectTo;if(r){var n=t.router.stateService;return Kt(r)?ae.$q.when(r(t)).then(e):e(r)}},Qr=function(t){return t.onStart({to:function(t){return!!t.redirectTo}},Jr)},Kr=st("onExit"),Yr=function(t){return t.onExit({exiting:function(t){return!!t.onExit}},Kr)},Zr=st("onRetain"),Xr=function(t){return t.onRetain({retained:function(t){return!!t.onRetain}},Zr)},tn=st("onEnter"),en=function(t){return t.onEnter({entering:function(t){return!!t.onEnter}},tn)},rn=function(t){return new fr(t.treeChanges().to).resolvePath("EAGER",t).then(l)},nn=function(t){return t.onStart({},rn,{priority:1e3})},on=function(t,e){return new fr(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY",t).then(l)},an=function(t){return t.onEnter({entering:Ut(!0)},on,{priority:1e3})},un=function(t){var e=ae.$q,r=t.views("entering");if(r.length)return e.all(r.map(function(t){return e.when(t.load())})).then(l)},sn=function(t){return t.onFinish({},un)},cn=function(t){var e=t.views("entering"),r=t.views("exiting");if(e.length||r.length){var n=t.router.viewService;r.forEach(function(t){return n.deactivateViewConfig(t)}),e.forEach(function(t){return n.activateViewConfig(t)}),n.sync()}},fn=function(t){return t.onSuccess({},cn)},ln=function(t){var e=t.router.globals,r=function(){e.successfulTransitions.enqueue(t),e.$current=t.$to(),e.current=e.$current.self,le(t.params(),e.params)},n=function(){e.transition===t&&(e.transition=null)};t.onSuccess({},r,{priority:1e4}),t.promise.then(n,n)},hn=function(t){return t.onCreate({},ln)},pn=function(t){var e=t.options(),r=t.router.stateService,n=t.router.urlRouter;if("url"!==e.source&&e.location&&r.$current.navigable){var i={replace:"replace"===e.location};n.push(r.$current.navigable.url,r.params,i)}n.update(!0)},dn=function(t){return t.onSuccess({},pn,{priority:9999})},vn=function(t){function e(){if("url"!==t.originalTransition().options().source){var e=t.targetState();return r.stateService.target(e.identifier(),e.params(),e.options())}var n=r.urlService,i=n.match(n.parts()),o=i&&i.rule;if(o&&"STATE"===o.type){var a=o.state,u=i.match;return r.stateService.target(a,u,t.options())}r.urlService.sync()}var r=t.router,n=t.entering().filter(function(t){return!!t.$$state().lazyLoad}).map(function(e){return ct(t,e)});return ae.$q.all(n).then(e)},mn=function(t){return t.onBefore({entering:function(t){return!!t.lazyLoad}},vn)},yn=function(){function t(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=Je.HANDLE_RESULT),void 0===a&&(a=Je.REJECT_ERROR),void 0===u&&(u=!1),this.name=t,this.hookPhase=e,this.hookOrder=r,this.criteriaMatchPath=n,this.reverseSort=i,this.getResultHandler=o,this.getErrorHandler=a,this.synchronous=u}return t}(),gn=function(t){return t.onBefore({},ft,{priority:-9999})},wn=function(t){return t.onBefore({},lt,{priority:-1e4})},_n={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,custom:{},current:function(){return null},source:"unknown"},$n=function(){function e(t){this._transitionCount=0,this._eventTypes=[],this._registeredHooks={},this._criteriaPaths={},this._router=t,this.$view=t.viewService,this._deregisterHookFns={},this._pluginapi=h(Ut(this),{},Ut(this),["_definePathType","_defineEvent","_getPathTypes","_getEvents","getHooks"]),this._defineCorePaths(),this._defineCoreEvents(),this._registerCoreTransitionHooks()}return e.prototype.onCreate=function(t,e,r){},e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.dispose=function(t){Se(this._registeredHooks).forEach(function(t){return t.forEach(function(e){e._deregistered=!0,ye(t,e)})})},e.prototype.create=function(t,e){return new pr(t,e,this._router)},e.prototype._defineCoreEvents=function(){var e=t.TransitionHookPhase,r=Je,n=this._criteriaPaths;this._defineEvent("onCreate",e.CREATE,0,n.to,!1,r.LOG_REJECTED_RESULT,r.THROW_ERROR,!0),this._defineEvent("onBefore",e.BEFORE,0,n.to),this._defineEvent("onStart",e.RUN,0,n.to),this._defineEvent("onExit",e.RUN,100,n.exiting,!0),this._defineEvent("onRetain",e.RUN,200,n.retained),this._defineEvent("onEnter",e.RUN,300,n.entering),this._defineEvent("onFinish",e.RUN,400,n.to),this._defineEvent("onSuccess",e.SUCCESS,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0),this._defineEvent("onError",e.ERROR,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0)},e.prototype._defineCorePaths=function(){var e=t.TransitionHookScope.STATE,r=t.TransitionHookScope.TRANSITION;this._definePathType("to",r),this._definePathType("from",r),this._definePathType("exiting",e),this._definePathType("retained",e),this._definePathType("entering",e)},e.prototype._defineEvent=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=Je.HANDLE_RESULT),void 0===a&&(a=Je.REJECT_ERROR),void 0===u&&(u=!1);var s=new yn(t,e,r,n,i,o,a,u);this._eventTypes.push(s),q(this,this,s)},e.prototype._getEvents=function(t){return(zt(t)?this._eventTypes.filter(function(e){return e.hookPhase===t}):this._eventTypes.slice()).sort(function(t,e){var r=t.hookPhase-e.hookPhase;return 0===r?t.hookOrder-e.hookOrder:r})},e.prototype._definePathType=function(t,e){this._criteriaPaths[t]={name:t,scope:e}},e.prototype._getPathTypes=function(){return this._criteriaPaths},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype._registerCoreTransitionHooks=function(){var t=this._deregisterHookFns;t.addCoreResolves=zr(this),t.ignored=gn(this),t.invalid=wn(this),t.redirectTo=Qr(this),t.onExit=Yr(this),t.onRetain=Xr(this),t.onEnter=en(this),t.eagerResolve=nn(this),t.lazyResolve=an(this),t.loadViews=sn(this),t.activateViews=fn(this),t.updateGlobals=hn(this),t.updateUrl=dn(this),t.lazyLoad=mn(this)},e}(),Sn=function(){function e(t){this.router=t,this.invalidCallbacks=[],this._defaultErrorHandler=function(t){t instanceof Error&&t.stack?(console.error(t),console.error(t.stack)):t instanceof Ne?(console.error(t.toString()),t.detail&&t.detail.stack&&console.error(t.detail.stack)):console.error(t)};var r=["current","$current","params","transition"],n=Object.keys(e.prototype).filter(Ht(me(r)));h(Ut(e.prototype),this,Ut(this),n)}return Object.defineProperty(e.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this.defaultErrorHandler(l),this.invalidCallbacks=[]},e.prototype._handleInvalidTargetState=function(t,e){function r(){var t=s.dequeue();return void 0===t?Ne.invalid(e.error()).toPromise():ae.$q.when(t(e,i,c)).then(f).then(function(t){return t||r()})}var n=this,i=rr.makeTargetState(t),o=this.router.globals,a=function(){return o.transitionHistory.peekTail()},u=a(),s=new qe(this.invalidCallbacks.slice()),c=new fr(t).injector(),f=function(t){if(t instanceof We){var e=t;return e=n.target(e.identifier(),e.params(),e.options()),e.valid()?a()!==u?Ne.superseded().toPromise():n.transitionTo(e.identifier(),e.params(),e.options()):Ne.invalid(e.error()).toPromise()}};return r()},e.prototype.onInvalid=function(t){return this.invalidCallbacks.push(t),function(){ye(this.invalidCallbacks)(t)}.bind(this)},e.prototype.reload=function(t){return this.transitionTo(this.current,this.params,{reload:!zt(t)||t,inherit:!1,notify:!1})},e.prototype.go=function(t,e,r){var n={relative:this.$current,inherit:!0},i=m(r,n,_n);return this.transitionTo(t,e,i)},e.prototype.target=function(t,e,r){if(void 0===r&&(r={}),Xt(r.reload)&&!r.reload.name)throw new Error("Invalid reload state object");var n=this.router.stateRegistry;if(r.reloadState=!0===r.reload?n.root():n.matcher.find(r.reload,r.relative),r.reload&&!r.reloadState)throw new Error("No such reload state '"+(Zt(r.reload)?r.reload:r.reload.name)+"'");var i=n.matcher.find(t,r.relative);return new We(t,i,e,r)},e.prototype.getCurrentPath=function(){var t=this,e=this.router.globals,r=e.successfulTransitions.peekTail();return r?r.treeChanges().to:function(){return[new er(t.router.stateRegistry.root())]}()},e.prototype.transitionTo=function(e,r,n){var i=this;void 0===r&&(r={}),void 0===n&&(n={});var o=this.router,a=o.globals;n=m(n,_n),n=pe(n,{current:function(){return a.transition}});var u=this.target(e,r,n),s=this.getCurrentPath();if(!u.exists())return this._handleInvalidTargetState(s,u);if(!u.valid())return He(u.error());var c=function(e){return function(r){if(r instanceof Ne){var n=o.globals.lastStartedTransitionId===e.$id;if(r.type===t.RejectType.IGNORED)return n&&o.urlRouter.update(),ae.$q.when(a.current);var u=r.detail;if(r.type===t.RejectType.SUPERSEDED&&r.redirected&&u instanceof We){var s=e.redirect(u);return s.run().catch(c(s))}if(r.type===t.RejectType.ABORTED)return n&&o.urlRouter.update(),ae.$q.reject(r)}return i.defaultErrorHandler()(r),ae.$q.reject(r)}},f=this.router.transitionService.create(s,u),l=f.run().catch(c(f));return Ae(l),pe(l,{transition:f})},e.prototype.is=function(t,e,r){r=m(r,{relative:this.$current});var n=this.router.stateRegistry.matcher.find(t,r.relative);if(zt(n)){if(this.$current!==n)return!1;if(!e)return!0;var i=n.parameters({inherit:!0,matchingKeys:e});return tr.equals(i,tr.values(i,e),this.params)}},e.prototype.includes=function(t,e,r){r=m(r,{relative:this.$current});var n=Zt(t)&&Lt.fromString(t);if(n){if(!n.matches(this.$current.name))return!1;t=this.$current.name}var i=this.router.stateRegistry.matcher.find(t,r.relative),o=this.$current.includes;if(zt(i)){if(!zt(o[i.name]))return!1;if(!e)return!0;var a=i.parameters({inherit:!0,matchingKeys:e});return tr.equals(a,tr.values(a,e),this.params)}},e.prototype.href=function(t,e,r){r=m(r,{lossy:!0,inherit:!0,absolute:!1,relative:this.$current}),e=e||{};var n=this.router.stateRegistry.matcher.find(t,r.relative);if(!zt(n))return null;r.inherit&&(e=this.params.$inherit(e,this.$current,n));var i=n&&r.lossy?n.navigable:n;return i&&void 0!==i.url&&null!==i.url?this.router.urlRouter.href(i.url,e,{absolute:r.absolute}):null},e.prototype.defaultErrorHandler=function(t){return this._defaultErrorHandler=t||this._defaultErrorHandler},e.prototype.get=function(t,e){var r=this.router.stateRegistry;return 0===arguments.length?r.get():r.get(t,e||this.$current)},e.prototype.lazyLoad=function(t,e){var r=this.get(t);if(!r||!r.lazyLoad)throw new Error("Can not lazy load "+t);var n=this.getCurrentPath(),i=rr.makeTargetState(n);return e=e||this.router.transitionService.create(n,i),ct(e,r)},e}(),bn={when:function(t){return new Promise(function(e,r){return e(t)})},reject:function(t){return new Promise(function(e,r){r(t)})},defer:function(){var t={};return t.promise=new Promise(function(e,r){t.resolve=e,t.reject=r}),t},all:function(t){if(te(t))return Promise.all(t);if(Xt(t)){var e=Object.keys(t).map(function(e){return t[e].then(function(t){return{key:e,val:t}})});return bn.all(e).then(function(t){return t.reduce(function(t,e){return t[e.key]=e.val,t},{})})}}},Rn={},En={get:function(t){return Rn[t]},has:function(t){return null!=En.get(t)},invoke:function(t,e,r){var n=pe({},Rn,r||{}),i=En.annotate(t),o=Oe(function(t){return n.hasOwnProperty(t)},function(t){return"DI can't find injectable: '"+t+"'"}),a=i.filter(o).map(function(t){return n[t]});return Kt(t)?t.apply(e,a):t.slice(-1)[0].apply(e,a)},annotate:function(t){if(!c(t))throw new Error("Not an injectable function: "+t);if(t&&t.$inject)return t.$inject;if(te(t))return t.slice(0,-1);var e=t.toString().replace(/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,"");return e.slice(e.indexOf("(")+1,e.indexOf(")")).match(/([^\s,]+)/g)||[]}},Tn=function(t){return function(e){if(!e)return["",""];var r=e.indexOf(t);return-1===r?[e,""]:[e.substr(0,r),e.substr(r+1)]}},Cn=Tn("#"),Pn=Tn("?"),kn=Tn("="),On=function(t){return t?t.replace(/^#/,""):""},xn=function(t,e){var r=e[0],n=e[1];return t.hasOwnProperty(r)?te(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n,t},jn=function(t){return t.split("&").filter(f).map(kn).reduce(xn,{})},In=function(t){var e=t.path(),r=t.search(),n=t.hash(),i=Object.keys(r).map(function(t){var e=r[t];return(te(e)?e:[e]).map(function(e){return t+"="+e})}).reduce(Ee,[]).join("&");return e+(i?"?"+i:"")+(n?"#"+n:"")},Vn=function(){function t(t,e){var r=this;this.fireAfterUpdate=e,this._listener=function(t){return r._listeners.forEach(function(e){return e(t)})},this._listeners=[],this.hash=function(){return ht(r._get()).hash},this.path=function(){return ht(r._get()).path},this.search=function(){return jn(ht(r._get()).search)},this._location=window&&window.location,this._history=window&&window.history}return t.prototype.url=function(t,e){if(void 0===e&&(e=!0),zt(t)&&t!==this._get()&&(this._set(null,null,t,e),this.fireAfterUpdate)){var r=pe(new Event("locationchange"),{url:t});this._listeners.forEach(function(t){return t(r)})}return In(this)},t.prototype.onChange=function(t){var e=this;return this._listeners.push(t),function(){return ye(e._listeners,t)}},t.prototype.dispose=function(t){we(this._listeners)},t}(),An=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Hn=function(t){function e(e){var r=t.call(this,e,!1)||this;return window.addEventListener("hashchange",r._listener,!1),r}return An(e,t),e.prototype._get=function(){return On(this._location.hash)},e.prototype._set=function(t,e,r,n){this._location.hash=r},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),window.removeEventListener("hashchange",this._listener)},e}(Vn),qn=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Dn=function(t){function e(e){return t.call(this,e,!0)||this}return qn(e,t),e.prototype._get=function(){return this._url},e.prototype._set=function(t,e,r,n){this._url=r},e}(Vn),Nn=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),Fn=function(t){function e(e){var r=t.call(this,e,!0)||this;return r._config=e.urlService.config,window.addEventListener("popstate",r._listener,!1),r}return Nn(e,t),e.prototype._get=function(){var t=this._location,e=t.pathname,r=t.hash,n=t.search;return n=Pn(n)[1],r=Cn(r)[1],e+(n?"?"+n:"")+(r?"$"+n:"")},e.prototype._set=function(t,e,r,n){var i=this,o=i._config,a=i._history,u=o.baseHref()+r;n?a.replaceState(t,e,u):a.pushState(t,e,u)},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),window.removeEventListener("popstate",this._listener)},e}(Vn),Un=function(){function t(){var t=this;this._baseHref="",this._port=80,this._protocol="http",this._host="localhost",this._hashPrefix="",this.port=function(){return t._port},this.protocol=function(){return t._protocol},this.host=function(){return t._host},this.baseHref=function(){return t._baseHref},this.html5Mode=function(){return!1},this.hashPrefix=function(e){return zt(e)?t._hashPrefix=e:t._hashPrefix},this.dispose=l}return t}(),Ln=function(){function t(t,e){void 0===e&&(e=!1),this._isHtml5=e,this._baseHref=void 0,this._hashPrefix=""}return t.prototype.port=function(){return location.port?Number(location.port):"https"===this.protocol()?443:80},t.prototype.protocol=function(){return location.protocol.replace(/:/g,"")},t.prototype.host=function(){return location.host},t.prototype.html5Mode=function(){return this._isHtml5},t.prototype.hashPrefix=function(t){return zt(t)?this._hashPrefix=t:this._hashPrefix},t.prototype.baseHref=function(t){return zt(t)?this._baseHref=t:this._baseHref||this.applyDocumentBaseHref()},t.prototype.applyDocumentBaseHref=function(){var t=document.getElementsByTagName("base");return this._baseHref=t.length?t[0].href.substr(location.origin.length):""},t.prototype.dispose=function(){},t}(),Mn=pt("vanilla.hashBangLocation",!1,Hn,Ln),Bn=pt("vanilla.pushStateLocation",!0,Fn,Ln),Gn=pt("vanilla.memoryLocation",!1,Dn,Un),Wn=function(){function t(){}return t.prototype.dispose=function(t){},t}(),zn=Object.freeze({fromJson:ce,toJson:fe,copy:le,forEach:he,extend:pe,equals:de,identity:f,noop:l,createProxyFunctions:h,inherit:ve,inArray:me,_inArray:p,removeFrom:ye,_removeFrom:d,pushTo:ge,_pushTo:v,deregAll:we,defaults:m,mergeR:_e,ancestors:y,pick:g,omit:w,pluck:_,filter:$,find:S,mapObj:$e,map:b,values:Se,allTrueR:be,anyTrueR:Re,unnestR:Ee,flattenR:Te,pushR:R,uniqR:Ce,unnest:Pe,flatten:ke,assertPredicate:Oe,assertMap:xe,assertFn:E,pairs:je,arrayTuples:T,applyPairs:C,tail:P,_extend:x,sortBy:Ie,composeSort:Ve,silenceUncaughtInPromise:Ae,silentRejection:He,notImplemented:oe,services:ae,Glob:Lt,curry:r,compose:n,pipe:i,prop:It,propEq:Vt,parse:At,not:Ht,and:o,or:a,all:qt,any:Dt,is:Nt,eq:Ft,val:Ut,invoke:u,pattern:s,isUndefined:Wt,isDefined:zt,isNull:Jt,isNullOrUndefined:Qt,isFunction:Kt,isNumber:Yt,isString:Zt,isObject:Xt,isArray:te,isDate:ee,isRegExp:re,isState:ne,isInjectable:c,isPromise:ie,Queue:qe,maxLength:B,padString:G,kebobString:W,functionToString:z,fnToString:J,stringify:Q,beforeAfterSubstr:mr,splitOnDelim:K,joinNeighborsR:Y,get Category(){return t.Category},Trace:Be,trace:Ge,get DefType(){return t.DefType},Param:tr,ParamTypes:yr,StateParams:gr,ParamType:Ye,PathNode:er,PathUtils:rr,resolvePolicies:or,defaultResolvePolicy:nr,Resolvable:ir,NATIVE_INJECTOR_TOKEN:cr,ResolveContext:fr,resolvablesBuilder:nt,StateBuilder:br,StateObject:Mt,StateMatcher:Rr,StateQueueManager:Er,StateRegistry:Tr,StateService:Sn,TargetState:We,get TransitionHookPhase(){return t.TransitionHookPhase},get TransitionHookScope(){return t.TransitionHookScope},HookBuilder:Ke,matchState:H,RegisteredHook:Qe,makeEvent:q,get RejectType(){return t.RejectType},Rejection:Ne,Transition:pr,TransitionHook:Je,TransitionEventType:yn,defaultTransOpts:_n,TransitionService:$n,UrlMatcher:kr,UrlMatcherFactory:Or,UrlRouter:Ar,UrlRuleFactory:xr,BaseUrlRule:Ir,UrlService:Br,ViewService:Hr,UIRouterGlobals:qr,UIRouter:Wr,$q:bn,$injector:En,BaseLocationServices:Vn,HashLocationService:Hn,MemoryLocationService:Dn,PushStateLocationService:Fn,MemoryLocationConfig:Un,BrowserLocationConfig:Ln,splitHash:Cn,splitQuery:Pn,splitEqual:kn,trimHashVal:On,keyValsToObjectR:xn,getParams:jn,parseUrl:ht,buildUrl:In,locationPluginFactory:pt,servicesPlugin:dt,hashLocationPlugin:Mn,pushStateLocationPlugin:Bn,memoryLocationPlugin:Gn,UIRouterPluginBase:Wn}),Jn=angular,Qn=e&&e.module?e:Jn,Kn=function(t,e){return t.reduce(function(t,r){return t||zt(e[r])},!1)},Yn=0,Zn=function(){function t(t,e,r){var n=this;this.path=t,this.viewDecl=e,this.factory=r,this.$id=Yn++,this.loaded=!1,this.getTemplate=function(t,e){return n.component?n.factory.makeComponentTemplate(t,e,n.component,n.viewDecl.bindings):n.template}}return t.prototype.load=function(){var t=this,e=ae.$q,r=new fr(this.path),n=this.path.reduce(function(t,e){return pe(t,e.paramValues)},{}),i={template:e.when(this.factory.fromConfig(this.viewDecl,n,r)),controller:e.when(this.getController(r))};return e.all(i).then(function(e){return Ge.traceViewServiceEvent("Loaded",t),t.controller=e.controller,pe(t,e.template),t})},t.prototype.getController=function(t){var e=this.viewDecl.controllerProvider;if(!c(e))return this.viewDecl.controller;var r=ae.$injector.annotate(e),n=te(e)?P(e):e;return new ir("",n,r).get(t)},t}(),Xn=function(){function t(){var t=this;this._useHttp=Qn.version.minor<3,this.$get=["$http","$templateCache","$injector",function(e,r,n){return t.$templateRequest=n.has&&n.has("$templateRequest")&&n.get("$templateRequest"),t.$http=e,t.$templateCache=r,t}]}
return t.prototype.useHttpService=function(t){this._useHttp=t},t.prototype.fromConfig=function(t,e,r){var n=function(t){return ae.$q.when(t).then(function(t){return{template:t}})},i=function(t){return ae.$q.when(t).then(function(t){return{component:t}})};return zt(t.template)?n(this.fromString(t.template,e)):zt(t.templateUrl)?n(this.fromUrl(t.templateUrl,e)):zt(t.templateProvider)?n(this.fromProvider(t.templateProvider,e,r)):zt(t.component)?i(t.component):zt(t.componentProvider)?i(this.fromComponentProvider(t.componentProvider,e,r)):n("<ui-view></ui-view>")},t.prototype.fromString=function(t,e){return Kt(t)?t(e):t},t.prototype.fromUrl=function(t,e){return Kt(t)&&(t=t(e)),null==t?null:this._useHttp?this.$http.get(t,{cache:this.$templateCache,headers:{Accept:"text/html"}}).then(function(t){return t.data}):this.$templateRequest(t)},t.prototype.fromProvider=function(t,e,r){var n=ae.$injector.annotate(t),i=te(t)?P(t):t;return new ir("",i,n).get(r)},t.prototype.fromComponentProvider=function(t,e,r){var n=ae.$injector.annotate(t),i=te(t)?P(t):t;return new ir("",i,n).get(r)},t.prototype.makeComponentTemplate=function(t,e,r,n){n=n||{};var i=Qn.version.minor>=3?"::":"",o=function(t){var e=W(t);return/^(x|data)-/.exec(e)?"x-"+e:e},a=function(r){var a=r.name,u=r.type,s=o(a);if(t.attr(s)&&!n[a])return s+"='"+t.attr(s)+"'";var c=n[a]||a;if("@"===u)return s+"='{{"+i+"$resolve."+c+"}}'";if("&"===u){var f=e.getResolvable(c),l=f&&f.data,h=l&&ae.$injector.annotate(l)||[];return s+"='$resolve."+c+(te(l)?"["+(l.length-1)+"]":"")+"("+h.join(",")+")'"}return s+"='"+i+"$resolve."+c+"'"},u=yt(r).map(a).join(" "),s=o(r);return"<"+s+" "+u+"></"+s+">"},t}(),ti=function(t){return ei(Xt(t.bindToController)?t.bindToController:t.scope)},ei=function(t){return Object.keys(t||{}).map(function(e){return[e,/^([=<@&])[?]?(.*)/.exec(t[e])]}).filter(function(t){return zt(t)&&te(t[1])}).map(function(t){return{name:t[1][2]||t[0],type:t[1][1]}})},ri=function(){function t(e,r){this.stateRegistry=e,this.stateService=r,h(Ut(t.prototype),this,Ut(this))}return t.prototype.decorator=function(t,e){return this.stateRegistry.decorator(t,e)||this},t.prototype.state=function(t,e){return Xt(t)?e=t:e.name=t,this.stateRegistry.register(e),this},t.prototype.onInvalid=function(t){return this.stateService.onInvalid(t)},t}(),ni=function(t){return function(e,r){function n(t,e){var r=new fr(t.treeChanges(o)),n=pe(mi(r),{$state$:e,$transition$:t});return ae.$injector.invoke(i,this,n)}var i=e[t],o="onExit"===t?"from":"to";return i?n:void 0}},ii=function(){function t(t){this._urlListeners=[],this.$locationProvider=t;var e=Ut(t);h(e,this,e,["hashPrefix"])}return t.prototype.dispose=function(){},t.prototype.onChange=function(t){var e=this;return this._urlListeners.push(t),function(){return ye(e._urlListeners)(t)}},t.prototype.html5Mode=function(){var t=this.$locationProvider.html5Mode();return(t=Xt(t)?t.enabled:t)&&this.$sniffer.history},t.prototype.url=function(t,e,r){return void 0===e&&(e=!1),t&&this.$location.url(t),e&&this.$location.replace(),r&&this.$location.state(r),this.$location.url()},t.prototype._runtimeServices=function(t,e,r,n){var i=this;this.$location=e,this.$sniffer=r,t.$on("$locationChangeSuccess",function(t){return i._urlListeners.forEach(function(e){return e(t)})});var o=Ut(e),a=Ut(n);h(o,this,o,["replace","path","search","hash"]),h(o,this,o,["port","protocol","host"]),h(a,this,a,["baseHref"])},t.monkeyPatchPathParameterType=function(t){var e=t.urlMatcherFactory.type("path");e.encode=function(t){return null!=t?t.toString().replace(/(~|\/)/g,function(t){return{"~":"~~","/":"~2F"}[t]}):t},e.decode=function(t){return null!=t?t.toString().replace(/(~~|~2F)/g,function(t){return{"~~":"~","~2F":"/"}[t]}):t}},t}(),oi=function(){function t(t){this._router=t,this._urlRouter=t.urlRouter}return t.prototype.$get=function(){var t=this._urlRouter;return t.update(!0),t.interceptDeferred||t.listen(),t},t.prototype.rule=function(t){var e=this;if(!Kt(t))throw new Error("'rule' must be a function");var r=function(){return t(ae.$injector,e._router.locationService)},n=new Ir(r,f);return this._urlRouter.rule(n),this},t.prototype.otherwise=function(t){var e=this,r=this._urlRouter;if(Zt(t))r.otherwise(t);else{if(!Kt(t))throw new Error("'rule' must be a string or function");r.otherwise(function(){return t(ae.$injector,e._router.locationService)})}return this},t.prototype.when=function(e,r){return(te(r)||Kt(r))&&(r=t.injectableHandler(this._router,r)),this._urlRouter.when(e,r),this},t.injectableHandler=function(t,e){return function(r){return ae.$injector.invoke(e,null,{$match:r,$stateParams:t.globals.params})}},t.prototype.deferIntercept=function(t){this._urlRouter.deferIntercept(t)},t}();Qn.module("ui.router.angular1",[]);var ai=Qn.module("ui.router.init",[]),ui=Qn.module("ui.router.util",["ng","ui.router.init"]),si=Qn.module("ui.router.router",["ui.router.util"]),ci=Qn.module("ui.router.state",["ui.router.router","ui.router.util","ui.router.angular1"]),fi=Qn.module("ui.router",["ui.router.init","ui.router.state","ui.router.angular1"]),li=(Qn.module("ui.router.compat",["ui.router"]),null);gt.$inject=["$locationProvider"];var hi=function(t){return["$uiRouterProvider",function(e){var r=e.router[t];return r.$get=function(){return r},r}]};wt.$inject=["$injector","$q","$uiRouter"];var pi=function(t){return t.urlRouterProvider=new oi(t)},di=function(){return pe(li.stateProvider,{$get:function(){return li.stateService}})};_t.$inject=["$rootScope"],ai.provider("$uiRouter",gt),si.provider("$urlRouter",["$uiRouterProvider",pi]),ui.provider("$urlService",hi("urlService")),ui.provider("$urlMatcherFactory",["$uiRouterProvider",function(){return li.urlMatcherFactory}]),ui.provider("$templateFactory",function(){return new Xn}),ci.provider("$stateRegistry",hi("stateRegistry")),ci.provider("$uiRouterGlobals",hi("globals")),ci.provider("$transitions",hi("transitionService")),ci.provider("$state",["$uiRouterProvider",di]),ci.factory("$stateParams",["$uiRouter",function(t){return t.globals.params}]),fi.factory("$view",function(){return li.viewService}),fi.service("$trace",function(){return Ge}),fi.run(_t),ui.run(["$urlMatcherFactory",function(t){}]),ci.run(["$state",function(t){}]),si.run(["$urlRouter",function(t){}]),ai.run(wt);var vi,mi=function(t){return t.getTokens().filter(Zt).map(function(e){var r=t.getResolvable(e);return[e,"NOWAIT"===t.getPolicy(r).async?r.promise:r.data]}).reduce(C,{})};vi=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){function u(){var t=p();l&&l(),f&&(l=f.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(c.attr,t.href)}var s,c=Rt(i),f=a[1]||a[0],l=null,h={},p=function(){return bt(r,i,h)},d=$t(o.uiSref);h.uiState=d.state,h.uiStateOpts=o.uiSrefOpts?n.$eval(o.uiSrefOpts):{},d.paramExpr&&(n.$watch(d.paramExpr,function(t){h.uiStateParams=pe({},t),u()},!0),h.uiStateParams=pe({},n.$eval(d.paramExpr))),u(),n.$on("$destroy",t.stateRegistry.onStatesChanged(u)),n.$on("$destroy",t.transitionService.onSuccess({},u)),c.clickable&&(s=Et(i,r,e,c,p),Ct(i,n,s,h.uiStateOpts))}}}];var yi;yi=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){function u(){var t=d();h&&h(),f&&(h=f.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(c.attr,t.href)}var s,c=Rt(i),f=a[1]||a[0],h=null,p={},d=function(){return bt(r,i,p)},v=["uiState","uiStateParams","uiStateOpts"],m=v.reduce(function(t,e){return t[e]=l,t},{});v.forEach(function(t){p[t]=o[t]?n.$eval(o[t]):null,o.$observe(t,function(e){m[t](),m[t]=n.$watch(e,function(e){p[t]=e,u()},!0)})}),u(),n.$on("$destroy",t.stateRegistry.onStatesChanged(u)),n.$on("$destroy",t.transitionService.onSuccess({},u)),c.clickable&&(s=Et(i,r,e,c,d),Ct(i,n,s,p.uiStateOpts))}}}];var gi;gi=["$state","$stateParams","$interpolate","$uiRouter",function(t,e,r,n){return{restrict:"A",controller:["$scope","$element","$attrs",function(e,i,o){function a(t){t.promise.then(s)}function u(e,r,n){var o=t.get(e,St(i)),a={state:o||{name:e},params:r,activeClass:n};return h.push(a),function(){ye(h)(a)}}function s(){var r=function(t){return t.split(/\s/).filter(f)},n=function(t){return t.map(function(t){return t.activeClass}).map(r).reduce(Ee,[])},o=n(h).concat(r(c)).reduce(Ce,[]),a=n(h.filter(function(e){return t.includes(e.state.name,e.params)})),u=!!h.filter(function(e){return t.is(e.state.name,e.params)}).length,s=u?r(c):[],l=a.concat(s).reduce(Ce,[]),p=o.filter(function(t){return!me(l,t)});e.$evalAsync(function(){l.forEach(function(t){return i.addClass(t)}),p.forEach(function(t){return i.removeClass(t)})})}var c,l,h=[];c=r(o.uiSrefActiveEq||"",!1)(e);try{l=e.$eval(o.uiSrefActive)}catch(t){}l=l||r(o.uiSrefActive||"",!1)(e),Xt(l)&&he(l,function(t,r){if(Zt(t)){var n=$t(t);u(n.state,e.$eval(n.paramExpr),r)}}),this.$$addStateInfo=function(t,e){if(!(Xt(l)&&h.length>0)){var r=u(t,e,l);return s(),r}},e.$on("$stateChangeSuccess",s),e.$on("$destroy",n.transitionService.onStart({},a)),n.globals.transition&&a(n.globals.transition),s()}]}}],Qn.module("ui.router.state").directive("uiSref",vi).directive("uiSrefActive",gi).directive("uiSrefActiveEq",gi).directive("uiState",yi),Pt.$inject=["$state"],kt.$inject=["$state"],Qn.module("ui.router.state").filter("isState",Pt).filter("includedByState",kt);var wi;wi=["$view","$animate","$uiViewScroll","$interpolate","$q",function(t,e,r,n,i){function o(t,r){return{enter:function(t,r,n){Qn.version.minor>2?e.enter(t,null,r).then(n):e.enter(t,null,r,n)},leave:function(t,r){Qn.version.minor>2?e.leave(t).then(r):e.leave(t,r)}}}function a(t,e){return t===e}var u={$cfg:{viewDecl:{$context:t._pluginapi._rootViewContext()}},$uiView:{}},s={count:0,restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(e,c,f){return function(e,c,l){function h(t){(!t||t instanceof Zn)&&(a(S,t)||(Ge.traceUIViewConfigUpdated(E,t&&t.viewDecl&&t.viewDecl.$context),S=t,d(t)))}function p(){if(v&&(Ge.traceUIViewEvent("Removing (previous) el",v.data("$uiView")),v.remove(),v=null),y&&(Ge.traceUIViewEvent("Destroying scope",E),y.$destroy(),y=null),m){var t=m.data("$uiViewAnim");Ge.traceUIViewEvent("Animate out",t),$.leave(m,function(){t.$$animLeave.resolve(),v=null}),v=m,m=null}}function d(t){var n=e.$new(),o=i.defer(),a=i.defer(),u={$cfg:t,$uiView:E},s={$animEnter:o.promise,$animLeave:a.promise,$$animLeave:a};n.$emit("$viewContentLoading",R);var l=f(n,function(t){t.data("$uiViewAnim",s),t.data("$uiView",u),$.enter(t,c,function(){o.resolve(),y&&y.$emit("$viewContentAnimationEnded"),(zt(_)&&!_||e.$eval(_))&&r(t)}),p()});m=l,y=n,y.$emit("$viewContentLoaded",t||S),y.$eval(w)}var v,m,y,g,w=l.onload||"",_=l.autoscroll,$=o(l,e),S=void 0,b=c.inheritedData("$uiView")||u,R=n(l.uiView||l.name||"")(e)||"$default",E={$type:"ng1",id:s.count++,name:R,fqn:b.$uiView.fqn?b.$uiView.fqn+"."+R:R,config:null,configUpdated:h,get creationContext(){var t=At("$cfg.viewDecl.$context")(b),e=At("$uiView.creationContext")(b);return t||e}};Ge.traceUIViewEvent("Linking",E),c.data("$uiView",{$uiView:E}),d(),g=t.registerUIView(E),e.$on("$destroy",function(){Ge.traceUIViewEvent("Destroying/Unregistering",E),g()})}}};return s}],Ot.$inject=["$compile","$controller","$transitions","$view","$q","$timeout"];var _i="function"==typeof Qn.module("ui.router").component,$i=0;Qn.module("ui.router.state").directive("uiView",wi),Qn.module("ui.router.state").directive("uiView",Ot),Qn.module("ui.router.state").provider("$uiViewScroll",jt);t.core=zn,t.default="ui.router",t.fromJson=ce,t.toJson=fe,t.copy=le,t.forEach=he,t.extend=pe,t.equals=de,t.identity=f,t.noop=l,t.createProxyFunctions=h,t.inherit=ve,t.inArray=me,t._inArray=p,t.removeFrom=ye,t._removeFrom=d,t.pushTo=ge,t._pushTo=v,t.deregAll=we,t.defaults=m,t.mergeR=_e,t.ancestors=y,t.pick=g,t.omit=w,t.pluck=_,t.filter=$,t.find=S,t.mapObj=$e,t.map=b,t.values=Se,t.allTrueR=be,t.anyTrueR=Re,t.unnestR=Ee,t.flattenR=Te,t.pushR=R,t.uniqR=Ce,t.unnest=Pe,t.flatten=ke,t.assertPredicate=Oe,t.assertMap=xe,t.assertFn=E,t.pairs=je,t.arrayTuples=T,t.applyPairs=C,t.tail=P,t._extend=x,t.sortBy=Ie,t.composeSort=Ve,t.silenceUncaughtInPromise=Ae,t.silentRejection=He,t.notImplemented=oe,t.services=ae,t.Glob=Lt,t.curry=r,t.compose=n,t.pipe=i,t.prop=It,t.propEq=Vt,t.parse=At,t.not=Ht,t.and=o,t.or=a,t.all=qt,t.any=Dt,t.is=Nt,t.eq=Ft,t.val=Ut,t.invoke=u,t.pattern=s,t.isUndefined=Wt,t.isDefined=zt,t.isNull=Jt,t.isNullOrUndefined=Qt,t.isFunction=Kt,t.isNumber=Yt,t.isString=Zt,t.isObject=Xt,t.isArray=te,t.isDate=ee,t.isRegExp=re,t.isState=ne,t.isInjectable=c,t.isPromise=ie,t.Queue=qe,t.maxLength=B,t.padString=G,t.kebobString=W,t.functionToString=z,t.fnToString=J,t.stringify=Q,t.beforeAfterSubstr=mr,t.splitOnDelim=K,t.joinNeighborsR=Y,t.Trace=Be,t.trace=Ge,t.Param=tr,t.ParamTypes=yr,t.StateParams=gr,t.ParamType=Ye,t.PathNode=er,t.PathUtils=rr,t.resolvePolicies=or,t.defaultResolvePolicy=nr,t.Resolvable=ir,t.NATIVE_INJECTOR_TOKEN=cr,t.ResolveContext=fr,t.resolvablesBuilder=nt,t.StateBuilder=br,t.StateObject=Mt,t.StateMatcher=Rr,t.StateQueueManager=Er,t.StateRegistry=Tr,t.StateService=Sn,t.TargetState=We,t.HookBuilder=Ke,t.matchState=H,t.RegisteredHook=Qe,t.makeEvent=q,t.Rejection=Ne,t.Transition=pr,t.TransitionHook=Je,t.TransitionEventType=yn,t.defaultTransOpts=_n,t.TransitionService=$n,t.UrlMatcher=kr,t.UrlMatcherFactory=Or,t.UrlRouter=Ar,t.UrlRuleFactory=xr,t.BaseUrlRule=Ir,t.UrlService=Br,t.ViewService=Hr,t.UIRouterGlobals=qr,t.UIRouter=Wr,t.$q=bn,t.$injector=En,t.BaseLocationServices=Vn,t.HashLocationService=Hn,t.MemoryLocationService=Dn,t.PushStateLocationService=Fn,t.MemoryLocationConfig=Un,t.BrowserLocationConfig=Ln,t.splitHash=Cn,t.splitQuery=Pn,t.splitEqual=kn,t.trimHashVal=On,t.keyValsToObjectR=xn,t.getParams=jn,t.parseUrl=ht,t.buildUrl=In,t.locationPluginFactory=pt,t.servicesPlugin=dt,t.hashLocationPlugin=Mn,t.pushStateLocationPlugin=Bn,t.memoryLocationPlugin=Gn,t.UIRouterPluginBase=Wn,t.watchDigests=_t,t.getLocals=mi,t.getNg1ViewConfigFactory=vt,t.ng1ViewsBuilder=mt,t.Ng1ViewConfig=Zn,t.StateProvider=ri,t.UrlRouterProvider=oi,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=angular-ui-router.min.js.map
;
angular.module('projectManagement', [
  'ngResource',
  'ngAnimate',
  'templates', // Angular rails templates module
  'ui.router',
  'ngMaterial',
  'valdr',
  'vAccordion',
  'ng-mfb',
  'angular-loading-bar',
  'Devise',
  'googlechart'
]);

angular.module('projectManagement')
  .run(['$rootScope', function($rootScope) {

  }]);

angular.module('projectManagement')
  .controller('RootController', ['$scope',function($scope) {
    
  }]);
;(function(window, angular, undefined) {

  'use strict';

  var mfb = angular.module('ng-mfb', []);

  mfb.run(['$templateCache', function($templateCache) {
    $templateCache.put('ng-mfb-menu-default.tpl.html',
      '<ul class="mfb-component--{{position}} mfb-{{effect}}"' +
      '    data-mfb-toggle="{{togglingMethod}}" data-mfb-state="{{menuState}}">' +
      '  <li class="mfb-component__wrap">' +
      '    <a ng-click="clicked()" ng-mouseenter="hovered()" ng-mouseleave="hovered()"' +
      '       ng-attr-data-mfb-label="{{label}}" class="mfb-component__button--main">' +
      '     <i class="mfb-component__main-icon--resting {{resting}}"></i>' +
      '     <i class="mfb-component__main-icon--active {{active}}"></i>' +
      '    </a>' +
      '    <ul class="mfb-component__list" ng-transclude>' +
      '    </ul>' +
      '</li>' +
      '</ul>'
    );

    $templateCache.put('ng-mfb-menu-md.tpl.html',
      '<ul class="mfb-component--{{position}} mfb-{{effect}}"' +
      '    data-mfb-toggle="{{togglingMethod}}" data-mfb-state="{{menuState}}">' +
      '  <li class="mfb-component__wrap">' +
      '    <a ng-click="clicked()" ng-mouseenter="hovered()" ng-mouseleave="hovered()"' +
      '       style="background: transparent; box-shadow: none;outline: none"' +
      '       ng-attr-data-mfb-label="{{label}}" class="mfb-component__button--main">' +
      '     <md-button class="md-fab md-accent" aria-label={{label}} style="position:relative; margin: 0; padding:0;">' +
      '       <md-icon style="left: 0;" md-svg-icon="{{resting}}"' +
      '         class="mfb-component__main-icon--resting"></md-icon>' +
      '       <md-icon style="position:relative;" md-svg-icon="{{active}}"' +
      '         class="mfb-component__main-icon--active"></md-icon>' +
      '     </md-button>' +
      '    </a>' +
      '    <ul class="mfb-component__list" ng-transclude>' +
      '    </ul>' +
      '</li>' +
      '</ul>'
    );

    $templateCache.put('ng-mfb-button-default.tpl.html',
      '<li>' +
      '  <a data-mfb-label="{{label}}" class="mfb-component__button--child">' +
      '    <i class="mfb-component__child-icon {{icon}}">' +
      '    </i>' +
      '  </a>' +
      '</li>'
    );

    $templateCache.put('ng-mfb-button-md.tpl.html',
      '<li>' +
      '  <a href="" data-mfb-label="{{label}}" class="mfb-component__button--child" ' +
      '     style="background: transparent; box-shadow: none;">' +
      '     <md-button style="margin: 0;" class="md-fab md-accent" aria-label={{label}}>' +
      //'       <md-icon md-svg-src="img/icons/android.svg"></md-icon>' +
      '       <md-icon md-svg-icon="{{icon}}"></md-icon>' +
      '     </md-button>' +
      '  </a>' +
      '</li>'
    );
  }]);

  mfb.directive('mfbButtonClose', function() {
    return {
      restrict: 'A',
      require: '^mfbMenu',
      link: function($scope, $element, $attrs, mfbMenuController) {
        $element.bind('click', function() {
          mfbMenuController.close();
        });
      },
    };

  });

  mfb.directive('mfbMenu', ['$timeout', function($timeout) {
    return {
      restrict: 'EA',
      transclude: true,
      replace: true,
      scope: {
        position: '@',
        effect: '@',
        label: '@',
        resting: '@restingIcon',
        active: '@activeIcon',
        mainAction: '&',
        menuState: '=?',
        togglingMethod: '@'
      },
      templateUrl: function(elem, attrs) {
        return attrs.templateUrl || 'ng-mfb-menu-md.tpl.html';
      },
      controller: ['$scope', '$attrs', function($scope, $attrs) {
        var openState = 'open',
          closedState = 'closed';

        // Attached toggle, open and close to the controller to give other
        // directive access
        this.toggle = toggle;
        this.close = close;
        this.open = open;

        $scope.clicked = clicked;
        $scope.hovered = hovered;

        /**
         * Set the state to user-defined value. Fallback to closed if no
         * value is passed from the outside.
         */
        if (!$scope.menuState) {
          $scope.menuState = closedState;
        }

        /**
         * If on touch device AND 'hover' method is selected:
         * wait for the digest to perform and then change hover to click.
         */
        if (_isTouchDevice() && _isHoverActive()) {
          $timeout(useClick);
        }

        $attrs.$observe('menuState', function() {
          $scope.currentState = $scope.menuState;
        });

        function clicked() {
          // If there is a main action, let's fire it
          if ($scope.mainAction) {
            $scope.mainAction();
          }

          if (!_isHoverActive()) {
            toggle();
          }
        };

        function hovered() {
          if (_isHoverActive()) {
            //toggle();
          }
        };

        /**
         * Invert the current state of the menu.
         */
        function toggle() {
          if ($scope.menuState === openState) {
            close();
          } else {
            open();
          }
        }

        function open() {
          $scope.menuState = openState;
        }

        function close() {
          $scope.menuState = closedState;
        }

        /**
         * Check if we're on a touch-enabled device.
         * Requires Modernizr to run, otherwise simply returns false
         */
        function _isTouchDevice() {
          return window.Modernizr && Modernizr.touch;
        }

        function _isHoverActive() {
          return $scope.togglingMethod === 'hover';
        }

        /**
         * Convert the toggling method to 'click'.
         * This is used when 'hover' is selected by the user
         * but a touch device is enabled.
         */
        function useClick() {
          $scope.$apply(function() {
            $scope.togglingMethod = 'click';
          });
        }
      }]
    };
  }]);

  mfb.directive('mfbButton', [function() {
    return {
      require: '^mfbMenu',
      restrict: 'EA',
      transclude: true,
      replace: true,
      scope: {
        icon: '@',
        label: '@'
      },
      templateUrl: function(elem, attrs) {
        return attrs.templateUrl || 'ng-mfb-button-md.tpl.html';
      }
    };
  }]);

})(window, angular);
/**
 * valdr - v1.1.5 - 2015-09-22
 * https://github.com/netceteragroup/valdr
 * Copyright (c) 2015 Netcetera AG
 * License: MIT
 */

(function (window, document) {
'use strict';

angular.module('valdr', ['ng'])
  .constant('valdrEvents', {
    'revalidate': 'valdr-revalidate'
  })
  .value('valdrConfig', {
    addFormGroupClass: true
  })
  .value('valdrClasses', {
    formGroup: 'form-group',
    valid: 'ng-valid',
    invalid: 'ng-invalid',
    dirty: 'ng-dirty',
    pristine: 'ng-pristine',
    touched: 'ng-touched',
    untouched: 'ng-untouched',
    invalidDirtyTouchedGroup: 'valdr-invalid-dirty-touched-group'
  });
angular.module('valdr')

/**
 * Exposes utility functions used in validators and valdr core.
 */
  .factory('valdrUtil', [function () {

    var substringAfterDot = function (string) {
      if (string.lastIndexOf('.') === -1) {
        return string;
      } else {
        return string.substring(string.lastIndexOf('.') + 1, string.length);
      }
    };

    var SLUG_CASE_REGEXP = /[A-Z]/g;
    var slugCase = function (string) {
      return string.replace(SLUG_CASE_REGEXP, function(letter, pos) {
        return (pos ? '-' : '') + letter.toLowerCase();
      });
    };

    /**
     * Converts the given validator name to a validation token. Uses the last part of the validator name after the
     * dot (if present) and converts camel case to slug case (fooBar -> foo-bar).
     * @param validatorName the validator name
     * @returns {string} the validation token
     */
    var validatorNameToToken = function (validatorName) {
      if (angular.isString(validatorName)) {
        var name = substringAfterDot(validatorName);
        name = slugCase(name);
        return 'valdr-' + name;
      } else {
        return validatorName;
      }
    };

    return {
      validatorNameToToken: validatorNameToToken,

      isNaN: function (value) {
        // `NaN` as a primitive is the only value that is not equal to itself
        // (perform the [[Class]] check first to avoid errors with some host objects in IE)
        return this.isNumber(value) && value !== +value;
      },

      isNumber: function (value) {
        var type = typeof value;
        return type === 'number' ||
          value && type === 'object' && Object.prototype.toString.call(value) === '[object Number]' || false;
      },

      has: function (object, key) {
        return object ? Object.prototype.hasOwnProperty.call(object, key) : false;
      },

      /**
       * @param value the value
       * @returns {boolean} true if the given value is not null, not undefined, not an empty string, NaN returns false
       */
      notEmpty: function (value) {
        if (this.isNaN(value)) {
          return false;
        }
        return angular.isDefined(value) && value !== '' && value !== null;
      },

      /**
       * @param value the value to validate
       * @returns {boolean} true if the given value is null, undefined, an empty string, NaN returns false
       */
      isEmpty: function (value) {
        if (this.isNaN(value)) {
          return false;
        }
        return !this.notEmpty(value);
      },

      /**
       * Checks if a string value starts with a given prefix.
       *
       * @param value the value
       * @param prefix the prefix
       * @returns {boolean} true if the given value starts with the given prefix.
       */
      startsWith: function (value, prefix) {
        return angular.isString(value)  &&
          angular.isString(prefix) &&
          value.lastIndexOf(prefix, 0) === 0;
      }
    };
  }])
;

angular.module('valdr')

  .factory('valdrRequiredValidator', ['valdrUtil', function (valdrUtil) {
    return {
      name: 'required',

      /**
       * Checks if the value is not empty.
       *
       * @param value the value to validate
       * @returns {boolean} true if the value is not empty
       */
      validate: function (value) {
        return valdrUtil.notEmpty(value);
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrMinValidator', ['valdrUtil', function (valdrUtil) {

    return {
      name: 'min',

      /**
       * Checks if the value is a number and higher or equal as the value specified in the constraint.
       *
       * @param value the value to validate
       * @param constraint the validation constraint
       * @returns {boolean} true if valid
       */
      validate: function (value, constraint) {
        var minValue = Number(constraint.value),
          valueAsNumber = Number(value);


        if (valdrUtil.isNaN(value)) {
          return false;
        }

        return valdrUtil.isEmpty(value) || valueAsNumber >= minValue;
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrMaxValidator', ['valdrUtil', function (valdrUtil) {

    return {
      name: 'max',

      /**
       * Checks if the value is a number and lower or equal as the value specified in the constraint.
       *
       * @param value the value to validate
       * @param constraint the validation constraint
       * @returns {boolean} true if valid
       */
      validate: function (value, constraint) {
        var maxValue = Number(constraint.value),
          valueAsNumber = Number(value);

        if (valdrUtil.isNaN(value)) {
          return false;
        }

        return valdrUtil.isEmpty(value) || valueAsNumber <= maxValue;
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrSizeValidator', function () {
    return {
      name: 'size',

      /**
       * Checks if the values length is in the range specified by the constraints min and max properties.
       *
       * @param value the value to validate
       * @param constraint with optional values: min, max
       * @returns {boolean} true if valid
       */
      validate: function (value, constraint) {
        var minLength = constraint.min || 0,
          maxLength = constraint.max;

        value = value || '';
        return value.length >= minLength &&
          (maxLength === undefined || value.length <= maxLength);
      }
    };
  });

angular.module('valdr')

  .factory('valdrEmailValidator', ['valdrUtil', function (valdrUtil) {

    // the e-mail pattern used in angular.js
    var EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return {
      name: 'email',

      /**
       * Checks if the value is a valid email address.
       *
       * @param value the value to validate
       * @returns {boolean} true if valid
       */
      validate: function (value) {
        return valdrUtil.isEmpty(value) || EMAIL_REGEXP.test(value);
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrUrlValidator', ['valdrUtil', function (valdrUtil) {

    // the url pattern used in angular.js
    var URL_REGEXP = /^.*\.([a-zA-Z]{2,})$/;

    return {
      name: 'url',

      /**
       * Checks if the value is a valid url.
       *
       * @param value the value to validate
       * @returns {boolean} true if valid
       */
      validate: function (value) {
        return valdrUtil.isEmpty(value) || URL_REGEXP.test(value);
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrDigitsValidator', ['valdrUtil', function (valdrUtil) {

    // matches everything except digits and '.' as decimal separator
    var regexp = new RegExp('[^.\\d]', 'g');

    /**
     * By converting to number and back to string using toString(), we make sure that '.' is used as decimal separator
     * and not the locale specific decimal separator.
     * As we already checked for NaN at this point, we can do this safely.
     */
    var toStringWithoutThousandSeparators = function (value) {
      return Number(value).toString().replace(regexp, '');
    };

    var isNotLongerThan = function (valueAsString, maxLengthConstraint) {
      return !valueAsString ? true : valueAsString.length <= maxLengthConstraint;
    };

    var doValidate = function (value, constraint) {
      var integerConstraint = constraint.integer,
        fractionConstraint = constraint.fraction,
        cleanValueAsString, integerAndFraction;

      cleanValueAsString = toStringWithoutThousandSeparators(value);
      integerAndFraction = cleanValueAsString.split('.');

      return isNotLongerThan(integerAndFraction[0], integerConstraint) &&
        isNotLongerThan(integerAndFraction[1], fractionConstraint);
    };

    return {
      name: 'digits',

      /**
       * Checks if the value is a number within accepted range.
       *
       * @param value the value to validate
       * @param constraint the validation constraint, it is expected to have integer and fraction properties (maximum
       *                   number of integral/fractional digits accepted for this number)
       * @returns {boolean} true if valid
       */
      validate: function (value, constraint) {

        if (valdrUtil.isEmpty(value)) {
          return true;
        }
        if (valdrUtil.isNaN(Number(value))) {
          return false;
        }

        return doValidate(value, constraint);
      }
    };
  }]);

angular.module('valdr')

  .factory('futureAndPastSharedValidator', ['valdrUtil', function (valdrUtil) {

    var someAlternativeDateFormats = ['D-M-YYYY', 'D.M.YYYY', 'D/M/YYYY', 'D. M. YYYY', 'YYYY.M.D'];

    return {
      validate: function (value, comparison) {
        var now = moment(), valueAsMoment;

        if (valdrUtil.isEmpty(value)) {
          return true;
        }

        valueAsMoment = moment(value);

        for (var i = 0; i < someAlternativeDateFormats.length && !valueAsMoment.isValid(); i++) {
          valueAsMoment = moment(value, someAlternativeDateFormats[i], true);
        }

        return valueAsMoment.isValid() && comparison(valueAsMoment, now);
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrPastValidator', ['futureAndPastSharedValidator', function (futureAndPastSharedValidator) {

    return {
      name: 'past',

      /**
       * Checks if the value is a date in the past.
       *
       * @param value the value to validate
       * @returns {boolean} true if empty, null, undefined or a date in the past, false otherwise
       */
      validate: function (value) {
        return futureAndPastSharedValidator.validate(value, function (valueAsMoment, now) {
          return valueAsMoment.isBefore(now);
        });
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrFutureValidator', ['futureAndPastSharedValidator', function (futureAndPastSharedValidator) {

    return {
      name: 'future',

      /**
       * Checks if the value is a date in the future.
       *
       * @param value the value to validate
       * @returns {boolean} true if empty, null, undefined or a date in the future, false otherwise
       */
      validate: function (value) {

        return futureAndPastSharedValidator.validate(value, function (valueAsMoment, now) {
          return valueAsMoment.isAfter(now);
        });
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrPatternValidator', ['valdrUtil', function (valdrUtil) {

    var REGEXP_PATTERN = /^\/(.*)\/([gim]*)$/;

    /**
     * Converts the given pattern to a RegExp.
     * The pattern can either be a RegExp object or a string containing a regular expression (`/regexp/`).
     * This implementation is based on the AngularJS ngPattern validator.
     * @param pattern the pattern
     * @returns {RegExp} the RegExp
     */
    var asRegExp = function (pattern) {
      var match;

      if (pattern.test) {
        return pattern;
      } else {
        match = pattern.match(REGEXP_PATTERN);
        if (match) {
          return new RegExp(match[1], match[2]);
        } else {
          throw ('Expected ' + pattern + ' to be a RegExp');
        }
      }
    };

    return {
      name: 'pattern',

      /**
       * Checks if the value matches the pattern defined in the constraint.
       *
       * @param value the value to validate
       * @param constraint the constraint with the regexp as value
       * @returns {boolean} true if valid
       */
      validate: function (value, constraint) {
        var pattern = asRegExp(constraint.value);
        return valdrUtil.isEmpty(value) || pattern.test(value);
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrMinLengthValidator', ['valdrUtil', function (valdrUtil) {
    return {
      name: 'minLength',

      /**
       * Checks if the value is a string and if it's at least 'constraint.number' of characters long.
       *
       * @param value the value to validate
       * @param constraint with property 'number'
       * @returns {boolean} true if valid
       */
      validate: function (value, constraint) {
        var minLength = constraint.number;

        if (valdrUtil.isEmpty(value)) {
          return minLength === 0;
        }

        if (typeof value === 'string') {
          return value.length >= minLength;
        } else {
          return false;
        }
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrMaxLengthValidator', ['valdrUtil', function (valdrUtil) {
    return {
      name: 'maxLength',

      /**
       * Checks if the value is a string and if it's at most 'constraint.number' of characters long.
       *
       * @param value the value to validate
       * @param constraint with property 'number'
       * @returns {boolean} true if valid
       */
      validate: function (value, constraint) {
        var maxLength = constraint.number;

        if (valdrUtil.isEmpty(value)) {
          return true;
        }

        if (typeof value === 'string') {
          return value.length <= maxLength;
        } else {
          return false;
        }
      }
    };
  }]);

angular.module('valdr')

  .factory('valdrHibernateEmailValidator', ['valdrUtil', function (valdrUtil) {
    var ATOM = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]';
    var DOMAIN = '^' + ATOM + '+(\\.' + ATOM + '+)*$';
    var IP_DOMAIN = '^\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\]$';

    var localPattern = new RegExp('^' + ATOM + '+(\\.' + ATOM + '+)*$', 'i');
    var domainPattern = new RegExp(DOMAIN + '|' + IP_DOMAIN, 'i');

    return {
      name: 'hibernateEmail',

      /**
       * Checks if the value is a valid email address using the same patterns as Hibernate uses in its bean validation
       * implementation.
       *
       * @param value the value to validate
       * @returns {boolean} true if valid
       */
      validate: function (value) {
        if (valdrUtil.isEmpty(value)) {
          return true;
        }

        // split email at '@' and consider local and domain part separately
        var emailParts = value.split('@');
        if (emailParts.length !== 2) {
          return false;
        }

        if (!localPattern.test(emailParts[0])) {
          return false;
        }

        return domainPattern.test(emailParts[1]);
      }
    };
  }]);

angular.module('valdr')

  .provider('valdr', function () {

    var constraints = {}, validators = {}, constraintUrl, constraintsLoading, constraintAliases = {},
      validatorNames = [
        'valdrRequiredValidator',
        'valdrSizeValidator',
        'valdrMinLengthValidator',
        'valdrMaxLengthValidator',
        'valdrMinValidator',
        'valdrMaxValidator',
        'valdrEmailValidator',
        'valdrUrlValidator',
        'valdrDigitsValidator',
        'valdrFutureValidator',
        'valdrPastValidator',
        'valdrPatternValidator',
        'valdrHibernateEmailValidator'
      ];

    var addConstraints = function (newConstraints) {
      angular.extend(constraints, newConstraints);
    };

    this.addConstraints = addConstraints;

    var removeConstraints = function (constraintNames) {
      if (angular.isArray(constraintNames)) {
        angular.forEach(constraintNames, function (name) {
          delete constraints[name];
        });
      } else if (angular.isString(constraintNames)) {
        delete constraints[constraintNames];
      }
    };

    this.removeConstraints = removeConstraints;

    this.setConstraintUrl = function (url) {
      constraintUrl = url;
    };

    this.addValidator = function (validatorName) {
      validatorNames.push(validatorName);
    };

    this.addConstraintAlias = function (valdrName, alias) {
      if(!angular.isArray(constraintAliases[valdrName])) {
        constraintAliases[valdrName] = [];
      }
      constraintAliases[valdrName].push(alias);
    };

    this.$get =
      ['$log', '$injector', '$rootScope', '$http', 'valdrEvents', 'valdrUtil', 'valdrClasses',
        function ($log, $injector, $rootScope, $http, valdrEvents, valdrUtil, valdrClasses) {

          // inject all validators
          angular.forEach(validatorNames, function (validatorName) {
            var validator = $injector.get(validatorName);
            validators[validator.name] = validator;

            // register validator with aliases
            if(angular.isArray(constraintAliases[validator.name])) {
              angular.forEach(constraintAliases[validator.name], function (alias) {
                validators[alias] = validator;
              });
            }

          });

          // load constraints via $http if constraintUrl is configured
          if (constraintUrl) {
            constraintsLoading = true;
            $http.get(constraintUrl).then(function (response) {
              constraintsLoading = false;
              addConstraints(response.data);
              $rootScope.$broadcast(valdrEvents.revalidate);
            })['finally'](function () {
              constraintsLoading = false;
            });
          }

          var constraintsForType = function (type) {
            if (valdrUtil.has(constraints, type)) {
              return constraints[type];
            } else if (!constraintsLoading) {
              $log.warn('No constraints for type \'' + type + '\' available.');
            }
          };

          return {
            /**
             * Validates the value of the given type with the constraints for the given field name.
             *
             * @param typeName the type name
             * @param fieldName the field name
             * @param value the value to validate
             * @returns {*}
             */
            validate: function (typeName, fieldName, value) {

              var validResult = { valid: true },
                typeConstraints = constraintsForType(typeName);

              if (valdrUtil.has(typeConstraints, fieldName)) {
                var fieldConstraints = typeConstraints[fieldName],
                  fieldIsValid = true,
                  validationResults = [],
                  violations = [];

                angular.forEach(fieldConstraints, function (constraint, validatorName) {
                  var validator = validators[validatorName];

                  if (angular.isUndefined(validator)) {
                    $log.warn('No validator defined for \'' + validatorName +
                      '\'. Can not validate field \'' + fieldName + '\'');
                    return validResult;
                  }

                  var valid = validator.validate(value, constraint);
                  var validationResult = {
                    valid: valid,
                    value: value,
                    field: fieldName,
                    type: typeName,
                    validator: validatorName
                  };
                  angular.extend(validationResult, constraint);

                  validationResults.push(validationResult);
                  if (!valid) {
                    violations.push(validationResult);
                  }
                  fieldIsValid = fieldIsValid && valid;
                });

                return {
                  valid: fieldIsValid,
                  violations: violations.length === 0 ? undefined : violations,
                  validationResults: validationResults.length === 0 ? undefined : validationResults
                };
              } else {
                return validResult;
              }
            },
            addConstraints: function (newConstraints) {
              addConstraints(newConstraints);
              $rootScope.$broadcast(valdrEvents.revalidate);
            },
            removeConstraints: function (constraintNames) {
              removeConstraints(constraintNames);
              $rootScope.$broadcast(valdrEvents.revalidate);
            },
            getConstraints: function () {
              return constraints;
            },
            setClasses: function (newClasses) {
              angular.extend(valdrClasses, newClasses);
              $rootScope.$broadcast(valdrEvents.revalidate);
            }
          };
        }];
  });
/**
 * This directive adds the validity state to a form group element surrounding valdr validated input fields.
 * If valdr-messages is loaded, it also adds the validation messages as last element to the element this this
 * directive is applied on.
 */
var valdrFormGroupDirectiveDefinition =
  ['valdrClasses', 'valdrConfig', function (valdrClasses, valdrConfig) {
    return  {
      restrict: 'EA',
      link: function (scope, element) {
        if (valdrConfig.addFormGroupClass) {
          element.addClass(valdrClasses.formGroup);
        }
      },
      controller: ['$scope', '$element', function ($scope, $element) {

        var formItems = [],
          messageElements = {};

        /**
         * Checks the state of all valdr validated form items below this element.
         * @returns {Object} an object containing the states of all form items in this form group
         */
        var getFormGroupState = function () {

          var formGroupState = {
            // true if an item in this form group is currently dirty, touched and invalid
            invalidDirtyTouchedGroup: false,
            // true if all form items in this group are currently valid
            valid: true,
            // contains the validity states of all form items in this group
            itemStates: []
          };

          angular.forEach(formItems, function (formItem) {
            if (formItem.$touched && formItem.$dirty && formItem.$invalid) {
              formGroupState.invalidDirtyTouchedGroup = true;
            }

            if (formItem.$invalid) {
              formGroupState.valid = false;
            }

            var itemState = {
              name: formItem.$name,
              touched: formItem.$touched,
              dirty: formItem.$dirty,
              valid: formItem.$valid
            };

            formGroupState.itemStates.push(itemState);
          });

          return formGroupState;
        };

        /**
         * Updates the classes on this element and the valdr message elements based on the validity states
         * of the items in this form group.
         * @param formGroupState the current state of this form group and its items
         */
        var updateClasses = function (formGroupState) {
          // form group state
          $element.toggleClass(valdrClasses.invalidDirtyTouchedGroup, formGroupState.invalidDirtyTouchedGroup);
          $element.toggleClass(valdrClasses.valid, formGroupState.valid);
          $element.toggleClass(valdrClasses.invalid, !formGroupState.valid);

          // valdr message states
          angular.forEach(formGroupState.itemStates, function (itemState) {
            var messageElement = messageElements[itemState.name];
            if (messageElement) {
              messageElement.toggleClass(valdrClasses.valid, itemState.valid);
              messageElement.toggleClass(valdrClasses.invalid, !itemState.valid);
              messageElement.toggleClass(valdrClasses.dirty, itemState.dirty);
              messageElement.toggleClass(valdrClasses.pristine, !itemState.dirty);
              messageElement.toggleClass(valdrClasses.touched, itemState.touched);
              messageElement.toggleClass(valdrClasses.untouched, !itemState.touched);
            }
          });
        };

        $scope.$watch(getFormGroupState, updateClasses, true);

        this.addFormItem = function (ngModelController) {
          formItems.push(ngModelController);
        };

        this.removeFormItem = function (ngModelController) {
          var index = formItems.indexOf(ngModelController);
          if (index >= 0) {
            formItems.splice(index, 1);
          }
        };

        this.addMessageElement = function (ngModelController, messageElement) {
          $element.append(messageElement);
          messageElements[ngModelController.$name] = messageElement;
        };

        this.removeMessageElement = function (ngModelController) {
          messageElements[ngModelController.$name].remove();
        };

      }]
    };
  }];

angular.module('valdr')
  .directive('valdrFormGroup', valdrFormGroupDirectiveDefinition);
angular.module('valdr')

/**
 * The valdrType directive defines the type of the model to be validated.
 * The directive exposes the type through the controller to allow access to it by wrapped directives.
 */
  .directive('valdrType', function () {
    return  {
      priority: 1,
      controller: ['$attrs', function ($attrs) {

        this.getType = function () {
          return $attrs.valdrType;
        };

      }]
    };
  });

/**
 * This controller is used if no valdrEnabled parent directive is available.
 */
var nullValdrEnabledController = {
  isEnabled: function () {
    return true;
  }
};

/**
 * This controller is used if no valdrFormGroup parent directive is available.
 */
var nullValdrFormGroupController = {
  addFormItem: angular.noop,
  removeFormItem: angular.noop
};

/**
 * This directive adds validation to all input and select fields as well as to explicitly enabled elements which are
 * bound to an ngModel and are surrounded by a valdrType directive. To prevent adding validation to specific fields,
 * the attribute 'valdr-no-validate' can be added to those fields.
 */
var valdrFormItemDirectiveDefinitionFactory = function (restrict) {
    return ['valdrEvents', 'valdr', 'valdrUtil', function (valdrEvents, valdr, valdrUtil) {
      return {
        restrict: restrict,
        require: ['?^valdrType', '?^ngModel', '?^valdrFormGroup', '?^valdrEnabled'],
        link: function (scope, element, attrs, controllers) {

          var valdrTypeController = controllers[0],
            ngModelController = controllers[1],
            valdrFormGroupController = controllers[2] || nullValdrFormGroupController,
            valdrEnabled = controllers[3] || nullValdrEnabledController,
            valdrNoValidate = attrs.valdrNoValidate,
            fieldName = attrs.name;

          /**
           * Don't do anything if
           * - this is an <input> that's not inside of a valdr-type block
           * - there is no ng-model bound to input
           * - there is the 'valdr-no-validate' attribute present
           */
          if (!valdrTypeController || !ngModelController || angular.isDefined(valdrNoValidate)) {
            return;
          }

          valdrFormGroupController.addFormItem(ngModelController);

          if (valdrUtil.isEmpty(fieldName) && valdrEnabled.isEnabled()) {
            console.warn('Form element with ID "' + attrs.id + '" is not bound to a field name.');
          }

          var updateNgModelController = function (validationResult) {

            if (valdrEnabled.isEnabled()) {
              var validatorTokens = ['valdr'];

              // set validity state for individual valdr validators
              angular.forEach(validationResult.validationResults, function (result) {
                var validatorToken = valdrUtil.validatorNameToToken(result.validator);
                ngModelController.$setValidity(validatorToken, result.valid);
                validatorTokens.push(validatorToken);
              });

              // set overall validity state of this form item
              ngModelController.$setValidity('valdr', validationResult.valid);
              ngModelController.valdrViolations = validationResult.violations;

              // remove errors for valdr validators which no longer exist
              angular.forEach(ngModelController.$error, function (value, validatorToken) {
                if (validatorTokens.indexOf(validatorToken) === -1 && valdrUtil.startsWith(validatorToken, 'valdr')) {
                  ngModelController.$setValidity(validatorToken, true);
                }
              });
            } else {
              angular.forEach(ngModelController.$error, function (value, validatorToken) {
                if (valdrUtil.startsWith(validatorToken, 'valdr')) {
                  ngModelController.$setValidity(validatorToken, true);
                }
              });
              ngModelController.valdrViolations = undefined;
            }
          };

          var validate = function (modelValue) {
            var validationResult = valdr.validate(valdrTypeController.getType(), fieldName, modelValue);
            updateNgModelController(validationResult);
            return valdrEnabled.isEnabled() ? validationResult.valid : true;
          };

          ngModelController.$validators.valdr = validate;

          scope.$on(valdrEvents.revalidate, function () {
            validate(ngModelController.$modelValue);
          });

          scope.$on('$destroy', function () {
            valdrFormGroupController.removeFormItem(ngModelController);
          });

        }
      };
    }];
  },
  valdrFormItemElementDirectiveDefinition = valdrFormItemDirectiveDefinitionFactory('E'),
  valdrFormItemAttributeDirectiveDefinition = valdrFormItemDirectiveDefinitionFactory('A');

angular.module('valdr')
  .directive('input', valdrFormItemElementDirectiveDefinition)
  .directive('select', valdrFormItemElementDirectiveDefinition)
  .directive('textarea', valdrFormItemElementDirectiveDefinition)
  .directive('enableValdrValidation', valdrFormItemAttributeDirectiveDefinition);

angular.module('valdr')

/**
 * This directive allows to dynamically enable and disable the validation with valdr.
 * All form elements in a child node of an element with the 'valdr-enabled' directive will be affected by this.
 *
 * Usage:
 *
 * <div valdr-enabled="isValidationEnabled()">
 *   <input type="text" name="name" ng-model="mymodel.field">
 * </div>
 *
 * If multiple valdr-enabled directives are nested, the one nearest to the validated form element
 * will take precedence.
 */
  .directive('valdrEnabled', ['valdrEvents', function (valdrEvents) {
    return  {
      controller: ['$scope', '$attrs', function($scope, $attrs) {
        $scope.$watch($attrs.valdrEnabled, function () {
          $scope.$broadcast(valdrEvents.revalidate);
        });

        this.isEnabled = function () {
          var evaluatedExpression = $scope.$eval($attrs.valdrEnabled);
          return evaluatedExpression === undefined ? true : evaluatedExpression;
        };
      }]
    };
  }]);

})(window, document);
(function (window, document) {
'use strict';

angular.module('valdr')

/**
 * This service provides shared configuration between all valdr-message directive instances like the configured
 * template to render the violation messages and whether or not angular-translate is available.
 */
  .provider('valdrMessage', function () {

    var userDefinedTemplateUrl, userDefinedTemplate,
      messages = {},
      defaultTemplateUrl = 'valdr/default-message.html',
      defaultTemplate =   '<div class="valdr-message">' +
                            '{{ violation.message }}' +
                          '</div>',
      translateTemplate = '<div class="valdr-message" ng-show="violation">' +
                            '<span ' +
                            'translate="{{ violation.message }}" ' +
                            'translate-values="violation"></span>' +
                          '</div>';

    this.setTemplate = function (template) {
      userDefinedTemplate = template;
    };

    this.setTemplateUrl = function (templateUrl) {
      userDefinedTemplateUrl = templateUrl;
    };

    this.addMessages = function (newMessages) {
      angular.extend(messages, newMessages);
    };
    var addMessages = this.addMessages;

    this.getMessage = function (typeName, fieldName, validatorName) {
      var fullMessageKey = typeName + '.' + fieldName + '.' + validatorName;
      return messages[fullMessageKey] || messages[validatorName] || '[' + validatorName + ']';
    };
    var getMessage = this.getMessage;

    this.$get = ['$templateCache', '$injector', function ($templateCache, $injector) {

      var angularMessagesEnabled = false;

      function getTranslateService() {
        try {
          return $injector.get('$translate');
        } catch (error) {
          return undefined;
        }
      }

      function getFieldNameKeyGenerator() {
        try {
          return $injector.get('valdrFieldNameKeyGenerator');
        } catch (error) {
          return function(violation) {
            return violation.type + '.' + violation.field;
          };
        }
      }

      var $translate = getTranslateService(),
        translateAvailable = angular.isDefined($translate),
        fieldNameKeyGenerator = getFieldNameKeyGenerator();

      function determineTemplate() {
        if (angular.isDefined(userDefinedTemplate)) {
          return userDefinedTemplate;
        } else if (translateAvailable) {
          return translateTemplate;
        } else {
          return defaultTemplate;
        }
      }

      function updateTemplateCache() {
        $templateCache.put(defaultTemplateUrl, determineTemplate());
        if (userDefinedTemplateUrl && userDefinedTemplate) {
          $templateCache.put(userDefinedTemplateUrl, userDefinedTemplate);
        }
      }

      updateTemplateCache();

      return {
        templateUrl: userDefinedTemplateUrl || defaultTemplateUrl,
        setTemplate: function (newTemplate) {
          userDefinedTemplate = newTemplate;
          updateTemplateCache();
        },
        translateAvailable: translateAvailable,
        $translate: $translate,
        fieldNameKeyGenerator: fieldNameKeyGenerator,
        addMessages: addMessages,
        getMessage: getMessage,
        angularMessagesEnabled: angularMessagesEnabled
      };
    }];
  });

/**
 * This directive appends a validation message to the parent element of any input, select or textarea element, which
 * is nested in a valdr-type directive and has an ng-model bound to it.
 * If the form element is wrapped in an element marked with the class defined in valdrClasses.formGroup,
 * the messages is appended to this element instead of the direct parent.
 * To prevent adding messages to specific input fields, the attribute 'valdr-no-message' can be added to those input
 * or select fields. The valdr-message directive is used to do the actual rendering of the violation messages.
 */
var valdrMessageDirectiveDefinitionFactory = function (restrict) {
    return ['$compile', function ($compile) {
      return {
        restrict: restrict,
        require: ['?^valdrType', '?^ngModel', '?^valdrFormGroup'],
        link: function (scope, element, attrs, controllers) {

          var valdrTypeController = controllers[0],
            ngModelController = controllers[1],
            valdrFormGroupController = controllers[2],
            valdrNoValidate = attrs.valdrNoValidate,
            valdrNoMessage = attrs.valdrNoMessage,
            fieldName = attrs.name;

          /**
           * Don't do anything if
           * - this is an <input> that's not inside of a valdr-type or valdr-form-group block
           * - there is no ng-model bound to input
           * - there is a 'valdr-no-validate' or 'valdr-no-message' attribute present
           */
          if (!valdrTypeController || !valdrFormGroupController || !ngModelController ||
            angular.isDefined(valdrNoValidate) || angular.isDefined(valdrNoMessage)) {
            return;
          }

          var valdrMessageElement = angular.element('<span valdr-message="' + fieldName + '"></span>');
          $compile(valdrMessageElement)(scope);
          valdrFormGroupController.addMessageElement(ngModelController, valdrMessageElement);

          scope.$on('$destroy', function () {
            valdrFormGroupController.removeMessageElement(ngModelController);
          });

        }
      };
    }];
  },
  valdrMessageElementDirectiveDefinition = valdrMessageDirectiveDefinitionFactory('E'),
  valdrMessageAttributeDirectiveDefinition = valdrMessageDirectiveDefinitionFactory('A');


var nullValdrType = {
  getType: angular.noop
};

angular.module('valdr')
  .directive('input', valdrMessageElementDirectiveDefinition)
  .directive('select', valdrMessageElementDirectiveDefinition)
  .directive('textarea', valdrMessageElementDirectiveDefinition)
  .directive('enableValdrMessage', valdrMessageAttributeDirectiveDefinition)

/**
 * The valdr-message directive is responsible for the rendering of violation messages. The template used for rendering
 * is defined in the valdrMessage service where it can be overridden or a template URL can be configured.
 */
  .directive('valdrMessage',
  ['$rootScope', '$injector', 'valdrMessage', 'valdrUtil', function ($rootScope, $injector, valdrMessage, valdrUtil) {
    return {
      replace: true,
      restrict: 'A',
      scope: {
        formFieldName: '@valdrMessage'
      },
      templateUrl: function () {
        return valdrMessage.templateUrl;
      },
      require: ['^form', '?^valdrType'],
      link: function (scope, element, attrs, controllers) {
        var formController = controllers[0],
          valdrTypeController = controllers[1] || nullValdrType;

        var updateTranslations = function () {
          if (valdrMessage.translateAvailable && angular.isArray(scope.violations)) {
            angular.forEach(scope.violations, function (violation) {
              valdrMessage.$translate(valdrMessage.fieldNameKeyGenerator(violation)).then(function (translation) {
                violation.fieldName = translation;
              });
            });
          }
        };

        var createViolation = function (validatorName) {
          var typeName = valdrTypeController.getType(),
            fieldName = scope.formFieldName;

          return {
            type: typeName,
            field: fieldName,
            validator: validatorName,
            message: valdrMessage.getMessage(typeName, fieldName, validatorName)
          };
        };

        var addViolationsToScope = function () {
          scope.violations = [];

          angular.forEach(scope.formField.valdrViolations, function (violation) {
            scope.violations.push(violation);
          });

          if (valdrMessage.angularMessagesEnabled) {
            angular.forEach(scope.formField.$error, function (isValid, validatorName) {
              if (!valdrUtil.startsWith(validatorName, 'valdr')) {
                scope.violations.push(createViolation(validatorName));
              }
            });
          }

          scope.violation = scope.violations[0];
          updateTranslations();
        };
        var removeViolationsFromScope = function () {
          scope.violations = undefined;
          scope.violation = undefined;
        };

        var watchFormFieldErrors = function () {
          scope.formField = formController[scope.formFieldName];
          if (scope.formField) {
            return {
              valdr: scope.formField.valdrViolations,
              error: scope.formField.$error
            };
          }
        };


        scope.$watch(watchFormFieldErrors, function () {
          if (scope.formField && scope.formField.$invalid) {
            addViolationsToScope();
          } else {
            removeViolationsFromScope();
          }
        }, true);

        $rootScope.$on('$translateChangeSuccess', function () {
          updateTranslations();
        });
      }
    };
  }]);

})(window, document);
angular.module('projectManagement').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/login');

  var containerState = {
    name: 'container',
    abstract: true,
    controller: 'HomeCtrl as HomeCtrlVM',
    templateUrl: 'app/common/views/home.html'
  }

  var containerPublicState = {
    name: 'container.public',
    abstract: true,
    template: '<ui-view />',
  }

  var containerPublicHomeState = {
    name: 'login',
    url: '/login',
    controller: 'LoginCtrl as LoginVM',
    templateUrl: 'app/common/views/login.html',
    onEnter: function(Auth, $state){
         Auth.currentUser().then(function(){
           $state.go('container.user.dashboard')
         })
       }
  }
  var containerPublicRegistrationState = {
    name: 'signup',
    url: '/signup',
    controller: 'RegistrationCtrl as RegistrationVM',
    templateUrl: 'app/common/views/registration.html'
  }

  var containerUserState = {
    name: 'container.user',
    abstract: true,
    template: '<ui-view />',
  }

  $stateProvider.state(containerState);
  $stateProvider.state(containerPublicState);
  $stateProvider.state(containerPublicHomeState);
  $stateProvider.state(containerPublicRegistrationState);
  $stateProvider.state(containerUserState);



}]);
(function() {
  'use strict';
  angular.module('projectManagement').controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['$scope','$sce', '$state','Auth','$rootScope'];

  function HomeCtrl($scope, $sce, $state, Auth, $rootScope) {
    var HomeCtrlVM = this;
    HomeCtrlVM.goTo = goTo;
    HomeCtrlVM.logout = logout;
    HomeCtrlVM.menuItem = []

    if(!Auth.isAuthenticated()){
      $state.go("login",{});
    }


    function logout(){
      var config = {
            headers: {
                'X-HTTP-Method-Override': 'DELETE'
            }
        };
        Auth.logout(config).then(function(oldUser) {
          $state.go("login",{});
        }, function(error) {
            // An error occurred logging out.
        });

    }

    function setMenuList() {
        switch($rootScope.user.role) {
          case 'project_manager':
              HomeCtrlVM.menuItem = projectManagerMenuList;
              break;
          case 'developer':
              HomeCtrlVM.menuItem = developerMenuList;
              break;;
          default: HomeCtrlVM.menuItem = [];
              break;
        };

      }


    var projectManagerMenuList = [
      {name:"Dashboard", icon: $sce.trustAsHtml('<i class="fa fa-dashboard"></i>'), state: {name:'container.user.dashboard', args: {}}},
      // {name:"Developers", icon: $sce.trustAsHtml('<i class="fa fa-list "></i>'), state: {name:'container.user.developer', args: {}}},
      {name:"Projects", icon: $sce.trustAsHtml('<i class="fa  fa-wpforms"></i>'), state: {name:'container.user.project', args: {}}},
      // {name:"Todos", icon: $sce.trustAsHtml('<i class="fa  fa-archive"></i>'), state: {name:'container.user.todo', args: {}}},
      {name:"Charts", icon: $sce.trustAsHtml('<i class="fa  fa-pie-chart"></i>'), state: {name:'container.user.chart', args: {}}}
     ];


     var developerMenuList = [
       {name:"Projects", icon: $sce.trustAsHtml('<i class="fa  fa-wpforms"></i>'), state: {name:'container.user.project', args: {}}}
       // {name:"Todos", icon: $sce.trustAsHtml('<i class="fa  fa-archive"></i>'), state: {name:'container.user.todo', args: {}}}
     ];


     setMenuList();

    function goTo(state) {
      return $state.go(state.name,state.args);
    }

    Auth.currentUser().then(function (user){
      $rootScope.user = user
    });

    $scope.$on('devise:new-registration', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:login', function (e, user){
      $rootScope.user = user
    });

    $scope.$on('devise:logout', function (e, user){
      alert("You have been logged out.")
      $rootScope.user = undefined
    });
 }
})();
(function() {
  'use strict';
  angular.module('projectManagement').controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope','$sce', '$state','$rootScope', 'Auth'];

  function LoginCtrl($scope, $sce, $state, $rootScope, Auth) {
    var LoginVM = this;
    LoginVM.login = login;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}


    function login(){
      Auth.login(LoginVM.user, config).then(function(user){
        $rootScope.user = user
        $state.go('container.user.project');
      }, function(response){
        alert(response.data.error)
      });
    }

 }
})();
(function() {
  'use strict';
  angular.module('projectManagement').controller('RegistrationCtrl', RegistrationCtrl);

  RegistrationCtrl.$inject = ['$scope','$sce', '$state','$rootScope', 'Auth','$mdToast'];

  function RegistrationCtrl($scope, $sce, $state, $rootScope, Auth, $mdToast) {
    var RegistrationVM = this;
    RegistrationVM.signup = signup;
    var config = {headers: {'X-HTTP-Method-Override': 'POST'}}


    function signup(){
      Auth.register(RegistrationVM.user, config).then(function(registeredUser) {
          $rootScope.user = registeredUser
          $state.go('login');
       }, function(response) {
         console.log(response);
         $mdToast.show({
               template: '<md-toast class="md-toast ' + 'error' +'">' + response.data.errors.join(', ') + '</md-toast>',
               hideDelay: 3000,
               position: 'bottom left'
           });
       });

    }

 }
})();
// Angular Rails Template
// source: app/assets/javascripts/app/common/views/home.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/common/views/home.html", '<style>\n#left-sidenav md-list-item:before {\n  /*min-height: 0px;*/\n}\n#left-sidenav md-list-item{\n  /*color: #fff;*/\n-webkit-font-smoothing: antialiased;\nfont-weight: 500;\nline-height: 40px;\nfont-size: 14px;\nletter-spacing: .14px;\n}\n#left-sidenav md-list{\n  /*padding: 0px;*/\n}\n</style>\n<md-content layout="row" id="main-block-content">\n    <md-sidenav flex class="md-sidenav-left" id="left-sidenav" style="height: 100vh;max-width:18%;" md-is-locked-open="true" md-whiteframe="4">\n      <md-toolbar class="md-whiteframe-1dp">\n        <div class="md-toolbar-tools" layout="row" layout-align="center center">\n          <h4>Project Management</h4>\n        </div>\n      </md-toolbar>\n      <md-list style="width: 100%;">\n        <md-list-item ng-repeat="menu in HomeCtrlVM.menuItem" ng-click="HomeCtrlVM.goTo(menu.state)">\n            <div layout="row">\n              {{::menu.name}}\n            </div>\n        </md-list-item>\n        <md-list-item ng-click="HomeCtrlVM.logout()">\n          <div>\n            Logout\n          </div>\n        </md-list-item>\n      </md-list>\n    </md-sidenav>\n    <ui-view flex style="height:100vh;overflow:auto;max-height:1680px;" ></ui-view>\n</md-content>')
}]);

// Angular Rails Template
// source: app/assets/javascripts/app/common/views/login.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/common/views/login.html", '<style>\n.loginBox {\n  max-width:  90%;\n  width: 500px\n}\n</style>\n<div layout="column" layout-align="center center" layout-fill="layout-fill">\n    <div layout="column" class="loginBox md-whiteframe-z1">\n      <md-toolbar>\n        <h2 class="md-toolbar-tools"><span>Login</span></h2>\n      </md-toolbar>\n      <form name="loginForm">\n        <md-content layout="column" class="md-padding">\n          <md-input-container>\n            <label>Username</label>\n            <input required type="text" ng-model="LoginVM.user.email" name="email" />\n            <div ng-messages="loginForm.email.$error">\n              <div ng-message="required">This is required.</div>\n            </div>\n          </md-input-container>\n          <md-input-container>\n            <label>Password</label>\n            <input required type="password" ng-model="LoginVM.user.password" name="password" />\n            <div ng-messages="loginForm.password.$error" role="alert">\n              <div ng-message="required">This is required.</div>\n            </div>\n          </md-input-container>\n          <div layout="row" layout-align="center">\n            <md-button type="submit" class="md-raised md-primary" ng-click="LoginVM.login()">Login</md-button>\n            <md-button type="submit" class="md-raised md-primary" ng-href="/#/signup">Sign Up</md-button>\n          </div>\n      </form>\n    </div>\n</div>')
}]);

// Angular Rails Template
// source: app/assets/javascripts/app/common/views/registration.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/common/views/registration.html", '<style>\n.loginBox {\n  max-width:  90%;\n  width: 500px\n}\n</style>\n<div layout="column" layout-align="center center" layout-fill="layout-fill">\n    <div layout="column" class="loginBox md-whiteframe-z1">\n      <md-toolbar>\n        <h2 class="md-toolbar-tools"><span>Registration</span></h2>\n      </md-toolbar>\n      <form name="loginForm">\n        <md-content layout="column" class="md-padding">\n          <div layout="row">\n            <md-input-container flex="50">\n              <label>Name</label>\n              <input required type="text" ng-model="RegistrationVM.user.name" name="name" />\n              <div ng-messages="loginForm.name.$error">\n                <div ng-message="required">This is required.</div>\n              </div>\n            </md-input-container>\n\n            <md-input-container flex="50">\n              <label>Email</label>\n              <input required type="text" ng-model="RegistrationVM.user.email" name="email" />\n              <div ng-messages="loginForm.email.$error">\n                <div ng-message="required">This is required.</div>\n              </div>\n            </md-input-container>\n          </div>\n\n          <div layout="row">\n            <md-input-container flex="50">\n              <label>Password</label>\n              <input required type="password" ng-model="RegistrationVM.user.password" name="password" />\n              <div ng-messages="loginForm.password.$error" role="alert">\n                <div ng-message="required">This is required.</div>\n              </div>\n            </md-input-container>\n\n            <md-input-container flex="50">\n              <label>Password Confirmation</label>\n              <input required type="password" ng-model="RegistrationVM.user.password_confirmation" name="password_confirmation" />\n              <div ng-messages="loginForm.password_confirmation.$error" role="alert">\n                <div ng-message="required">This is required.</div>\n              </div>\n            </md-input-container>\n          </div>\n          <div layout="row" layout-align="center">\n            <md-button type="submit" class="md-raised md-primary" ng-click="RegistrationVM.signup()">Sign Up</md-button>\n          </div>\n      </form>\n    </div>\n</div>\n``')
}]);

(function() {
  'use strict';
  angular.module('projectManagement').controller('ChartCtrl', ChartCtrl);
  ChartCtrl.$inject = ['$scope', '$stateParams', '$state','tasks'];

  function ChartCtrl($scope, $stateParams, $state, tasks) {
    var ChartVM = this;
    ChartVM.myChartArray = []

    function initialize(){
      angular.forEach(tasks, function(value) {
        var myChartObject = {}

        myChartObject.type = "PieChart";


       myChartObject.data = {"cols": [
           {id: "t", label: "Status", type: "string"},
           {id: "s", label: "Count", type: "number"}
       ], "rows": [
           {c: [
               {v: "Open"},
               {v: value.status.open},
           ]},
           {c: [
               {v: "In Progress"},
               {v: value.status.in_progress}
           ]},
           {c: [
               {v: "Done"},
               {v: value.status.done},
           ]}
       ]};

       myChartObject.options = {
           'title': value.name
       };

       ChartVM.myChartArray.push(myChartObject)

      })
    }

initialize();







  };
})();
(function() {
  'use strict';
  angular.module('projectManagement').controller('DashboardCtrl', DashboardCtrl);
  DashboardCtrl.$inject = ['$scope', '$stateParams', '$state','tasks','TodoService'];

  function DashboardCtrl($scope, $stateParams, $state, tasks, TodoService) {
    var DashboardVM = this;
    DashboardVM.developer_tasks = tasks;
    DashboardVM.switchDashboard = switchDashboard;

    DashboardVM.dashboardType = [{name:"Developer",value:"developer"},{name:"Project",value:"project"}];
    DashboardVM.selectedType = "developer";

    function switchDashboard(){
      TodoService.dashboard({
        type: DashboardVM.selectedType
      }).$promise.then(function(value) {
        DashboardVM.developer_tasks = value
      }, function(response) {
          console.log(response);
      });

    }


  };
})();
angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.dashboard', {
              url: '/dashboard',
              controller: "DashboardCtrl as DashboardVM",
              templateUrl: 'app/dashboard/views/dashboard.html',
              resolve: {
                tasks: ['TodoService', function(TodoService) {
                  return TodoService.dashboard({type: 'developer'}).$promise;
                }]
              }
          }).state('container.user.chart', {
                url: '/charts',
                controller: "ChartCtrl as ChartVM",
                templateUrl: 'app/dashboard/views/chart.html',
                resolve: {
                  tasks: ['TodoService', function(TodoService) {
                    return TodoService.charts().$promise;
                  }]
                }
            })

}]);
// Angular Rails Template
// source: app/assets/javascripts/app/dashboard/views/chart.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/dashboard/views/chart.html", '<div layout="column" flex layout-fill ng-cloak>\n  <md-toolbar class="md-whiteframe-1dp">\n    <div layout="row">\n      <div class="md-toolbar-tools">Charts</div>\n    </div>\n  </md-toolbar>\n<md-content md-theme="altTheme">\n  <div ng-repeat="myChart in ChartVM.myChartArray">\n    <div google-chart chart="myChart" style="height:400px; width:100%;"></div>\n  </div>\n</md-content>\n\n</div>')
}]);

// Angular Rails Template
// source: app/assets/javascripts/app/dashboard/views/dashboard.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/dashboard/views/dashboard.html", '<div layout="column" flex layout-fill ng-cloak>\n\n  <md-toolbar class="md-whiteframe-1dp">\n    <div layout="row">\n      <div class="md-toolbar-tools">Dashboard</div>\n      <div>\n        <md-select ng-model="DashboardVM.selectedType" ng-change="DashboardVM.switchDashboard()">\n           <md-option ng-value="type.value" ng-repeat="type in DashboardVM.dashboardType">{{ type.name }}</md-option>\n        </md-select>\n      </div>\n    </div>\n  </md-toolbar>\n\n  <md-content style="height: calc(100vh - 64px);padding-bottom: 60px;" md-theme="altTheme">\n\n    <div layout="row" layout-align="space-around">\n      <md-card style="width: 10%">\n       <md-card-content>\n         <b>Status</b>\n       </md-card-content>\n     </md-card>\n     <md-card style="width: 30%">\n      <md-card-content>\n        <b>Open</b>\n      </md-card-content>\n    </md-card>\n    <md-card style="width: 30%">\n     <md-card-content>\n       <b>In Process</b>\n     </md-card-content>\n   </md-card>\n   <md-card style="width: 30%">\n    <md-card-content>\n      <b>Done</b>\n    </md-card-content>\n  </md-card>\n    </div>\n\n    <div layout="row" layout-align="space-around" ng-repeat="developer_task in DashboardVM.developer_tasks">\n      <md-card style="width: 10%">\n       <md-card-content>\n         {{developer_task.name}}\n       </md-card-content>\n      </md-card>\n      <md-card style="width: 30%" ng-repeat="status in developer_task.status">\n       <md-card-content>\n         <ul>\n         <li ng-repeat="task in status.tasks">\n           {{task.name}}\n         </li>\n         </ul>\n       </md-card-content>\n      </md-card>\n\n    </div>\n  </md-content>\n</div>')
}]);

(function() {
  'use strict';
  angular.module('projectManagement').controller('DeveloperCreateEditCtrl', DeveloperCreateEditCtrl);
  DeveloperCreateEditCtrl.$inject = ['$scope', '$stateParams', '$state','$mdToast' ,'$mdDialog','developer','developers','DeveloperService'];

  function DeveloperCreateEditCtrl($scope, $stateParams, $state, $mdToast, $mdDialog, developer, developers, DeveloperService) {
    var DeveloperCreateEditVM = this;

    $scope.formSubmitted = false;
    DeveloperCreateEditVM.cancel = cancel;

    function cancel() {
      $mdDialog.cancel();
    }

    DeveloperCreateEditVM.developer = developer;
    DeveloperCreateEditVM.isUpdate = angular.isDefined(DeveloperCreateEditVM.developer.id);

    DeveloperCreateEditVM.saveDeveloper = saveDeveloper
    DeveloperCreateEditVM.deleteDeveloper = deleteDeveloper;
    DeveloperCreateEditVM.developerErrors = []


    function saveDeveloper(form) {
      var returnBack = false;
      if(form.$invalid) {
        $scope.formSubmitted = true;
        returnBack = true;
      }
      if(returnBack)
      return;


      if (DeveloperCreateEditVM.isUpdate) {
        DeveloperService.update(DeveloperCreateEditVM.developer).$promise.then(function(value) {
          DeveloperCreateEditVM.developer = value
          DeveloperCreateEditVM.developerErrors = [];
          DeveloperCreateEditVM.developer.requestType = "update";
          $mdDialog.hide(DeveloperCreateEditVM.developer);
        }, function(badResponse) {
          DeveloperCreateEditVM.developerErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + DeveloperCreateEditVM.developerErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      } else {
        DeveloperService.save(DeveloperCreateEditVM.developer).$promise.then(function(value) {
          DeveloperCreateEditVM.developer = value
          DeveloperCreateEditVM.developerErrors = [];
          DeveloperCreateEditVM.developer.requestType = "save";
          $mdDialog.hide(DeveloperCreateEditVM.developer);
        }, function(badResponse) {
          DeveloperCreateEditVM.developerErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + DeveloperCreateEditVM.developerErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      }
    }

    function deleteDeveloper(ev) {
      DeveloperService.delete({
        id: DeveloperCreateEditVM.developer.id
      }).$promise.then(function(value) {
        DeveloperCreateEditVM.developer.requestType = "delete";
        $mdDialog.hide(DeveloperCreateEditVM.developer);
      }, function(response) {
        //  $scope.experienceErrors = response.data.errors;
      });

    }


  };
})();
(function() {
  'use strict';
  angular.module('projectManagement').controller('DeveloperHomeCtrl', DeveloperHomeCtrl);
  DeveloperHomeCtrl.$inject = ['$scope', '$stateParams', '$state', 'developers','$mdDialog','$mdToast'];

  function DeveloperHomeCtrl($scope, $stateParams, $state, developers, $mdDialog, $mdToast) {
    var DeveloperHomeVM = this;
    DeveloperHomeVM.developers = developers
    DeveloperHomeVM.createEditDeveloper = createEditDeveloper


    function createEditDeveloper(ev, developer, index) {
      $mdDialog.show({
        controller: 'DeveloperCreateEditCtrl as DeveloperCreateEditVM',
        templateUrl: 'app/developer/views/create-edit-developer.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: false,
        fullscreen: false,
        resolve: {
          developer: function() {
            return angular.copy(developer);
          },
          developers: ['DeveloperService', function(DeveloperService) {
            return DeveloperService.query({role:"developer"}).$promise;
          }]
        }
      }).then(function(developer) {
        switch (developer.requestType) {
          case "save":
            DeveloperHomeVM.developers.push(developer);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Developer created successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "update":
            DeveloperHomeVM.developers[index] = developer;
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Developer updated successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "delete":
            DeveloperHomeVM.developers.splice(index, 1);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Developer deleted successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          default:

        }
        delete developer.requestType;
      }, function(response) {
        console.log(response);
      });
    }

  };
})();
angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.developer', {
              url: '/developers',
              controller: "DeveloperHomeCtrl as DeveloperHomeVM",
              reloadOnSearch: false,
              templateUrl: 'app/developer/views/developer-home.html',
              resolve: {
                developers: ['DeveloperService', function(DeveloperService) {
                  return DeveloperService.query({role: "developer"
                  }).$promise;
                }]
            }
          })

}]);
angular.module('projectManagement').factory('DeveloperService', ['$resource', function($resource) {

  var DeveloperService = $resource('users/:id/:operation.json',{
    id: '@id',
    operation: '@operation'
  }, {
    update: {
      method: 'put'
    }
  });
  return DeveloperService;
}]);
// Angular Rails Template
// source: app/assets/javascripts/app/developer/views/create-edit-developer.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/developer/views/create-edit-developer.html", '<style>\n  .valdr-message {\n    display: none;\n  }\n\n  .valdr-message.ng-invalid.ng-touched.ng-dirty,\n  .form-submitted .valdr-message.ng-invalid,\n  .validationMessage {\n    display: inline;\n    color: red;\n    margin-top: -2px;\n  }\n</style>\n<md-dialog aria-label="Add Developer" style="width:800px;" id="addDeveloper">\n  <md-toolbar>\n    <div class="md-toolbar-tools">\n      <h3 ng-hide="DeveloperCreateEditVM.isUpdate">Create Developer</h3>\n      <h3 ng-show="DeveloperCreateEditVM.isUpdate">{{DeveloperCreateEditVM.developer.name}}</h3>\n\n      <span flex></span>\n      <md-button id="close" class="md-icon-button" ng-click="DeveloperCreateEditVM.cancel()">\n        <md-icon md-svg-src="images/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <md-dialog-content>\n\n    <div class="md-dialog-content" ng-class="{ \'form-submitted\': formSubmitted }">\n      <form name="developerForm" valdr-type="AddDeveloper" novalidate on-navigate-away-strategy=\'none\'>\n\n          <md-input-container  class="md-block"  valdr-form-group>\n            <label>Name *</label>\n            <input ng-model="DeveloperCreateEditVM.developer.name" name="name">\n          </md-input-container>\n\n          <md-input-container  class="md-block"  valdr-form-group>\n            <label>Email *</label>\n            <input ng-model="DeveloperCreateEditVM.developer.email" name="email">\n          </md-input-container>\n\n\n\n      </form>\n    </div>\n\n  </md-dialog-content>\n  <md-dialog-actions layout="row" layout-align="end center" layout-padding>\n    <div flex align="right">\n      <md-button class="md-raised md-primary" id="save" ng-click="DeveloperCreateEditVM.saveDeveloper(developerForm)">Save</md-button>\n      <md-button class="md-raised" id="cancel" ng-click="DeveloperCreateEditVM.cancel()">Cancel</md-button>\n    </div>\n  </md-dialog-actions>\n</md-dialog>')
}]);

// Angular Rails Template
// source: app/assets/javascripts/app/developer/views/developer-home.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/developer/views/developer-home.html", '<div layout="column" flex layout-fill ng-cloak>\n\n  <md-toolbar class="md-whiteframe-1dp">\n    <div layout="row">\n      <div class="md-toolbar-tools">Developers</div>\n    </div>\n  </md-toolbar>\n\n  <md-content style="height: calc(100vh - 64px);padding-bottom: 60px;" md-theme="altTheme">\n    <md-card ng-repeat="developer in DeveloperHomeVM.developers">\n     <md-card-content>\n       <div layout="row" layout-align="space-between">\n         <div>\n             <span style="font-weight:bold;">{{developer.name | uppercase}}</span>\n         </div>\n         <div layout="row">\n           <md-button id="close" class="md-icon-button" style="margin-top: -15px;" ng-click="DeveloperHomeVM.createEditDeveloper($event,developer,$index)">\n             <md-icon md-svg-src="images/pencil.svg" class="ng-scope" role="img" aria-hidden="true"></md-icon>\n             <md-tooltip>Edit</md-tooltip>\n           </md-button>\n         </div>\n       </div>\n       <div >{{developer.email}}</div>\n     </md-card-content>\n   </md-card>\n  </md-content>\n</div>\n\n<button class="md-fab md-fab-bottom-right docs-scroll-fab md-button md-ink-ripple scrolling" type="button" aria-label="Add" ng-click="DeveloperHomeVM.createEditDeveloper($event,{},null)">\n    <md-icon md-svg-src="images/plus.svg"  role="img" aria-hidden="true"></md-icon>\n    <md-tooltip md-direction="top">Add Developer</md-tooltip>\n</button>')
}]);

(function() {
  'use strict';
  angular.module('projectManagement').controller('ProjectCreateEditCtrl', ProjectCreateEditCtrl);
  ProjectCreateEditCtrl.$inject = ['$scope', '$stateParams', '$state','$mdToast' ,'$mdDialog','project','developers','ProjectService'];

  function ProjectCreateEditCtrl($scope, $stateParams, $state, $mdToast, $mdDialog, project, developers, ProjectService) {
    var ProjectCreateEditVM = this;

    $scope.formSubmitted = false;
    ProjectCreateEditVM.cancel = cancel;

    function cancel() {
      $mdDialog.cancel();
    }

    ProjectCreateEditVM.project = project;
    ProjectCreateEditVM.isUpdate = angular.isDefined(ProjectCreateEditVM.project.id);
    ProjectCreateEditVM.selectedGroupItem = null;
    ProjectCreateEditVM.searchGroupText = null;

    ProjectCreateEditVM.querySearch = querySearch;
    ProjectCreateEditVM.selectedHeadItem = null;
    ProjectCreateEditVM.searchHeadText = null;

    ProjectCreateEditVM.developers = loadItems(developers);
    ProjectCreateEditVM.selectedDevelopers = [];
    ProjectCreateEditVM.transformChip = transformChip;
    ProjectCreateEditVM.saveProject = saveProject
    ProjectCreateEditVM.deleteProject = deleteProject;
    ProjectCreateEditVM.projectErrors = []

    if (ProjectCreateEditVM.isUpdate) {
      ProjectCreateEditVM.selectedDevelopers = ProjectCreateEditVM.project.developers;
    }

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      return {
        name: chip
      }
    }

    function querySearch(query) {
      var results = query ? ProjectCreateEditVM.developers.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(item) {
        return (item._lowername.indexOf(lowercaseQuery) === 0);
      };

    }

    function loadItems(items) {
      return items.map(function (item) {
       item._lowername = item.name.toLowerCase();
       return item;
      });
    }

    function saveProject(form) {
      var returnBack = false;
      if(form.$invalid) {
        $scope.formSubmitted = true;
        returnBack = true;
      }
      if(returnBack)
      return;

      ProjectCreateEditVM.project.developer_ids = ProjectCreateEditVM.selectedDevelopers.map(function(head) {
        return head.id;
      })

      if (ProjectCreateEditVM.isUpdate) {
        ProjectService.update(ProjectCreateEditVM.project).$promise.then(function(value) {
          ProjectCreateEditVM.project = value
          ProjectCreateEditVM.projectErrors = [];
          ProjectCreateEditVM.project.requestType = "update";
          $mdDialog.hide(ProjectCreateEditVM.project);
        }, function(badResponse) {
          ProjectCreateEditVM.projectErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + ProjectCreateEditVM.projectErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      } else {
        ProjectService.save(ProjectCreateEditVM.project).$promise.then(function(value) {
          ProjectCreateEditVM.project = value
          ProjectCreateEditVM.projectErrors = [];
          ProjectCreateEditVM.project.requestType = "save";
          $mdDialog.hide(ProjectCreateEditVM.project);
        }, function(badResponse) {
          ProjectCreateEditVM.projectErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + ProjectCreateEditVM.projectErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      }
    }

    function deleteProject(ev) {
      ProjectService.delete({
        id: ProjectCreateEditVM.project.id
      }).$promise.then(function(value) {
        ProjectCreateEditVM.project.requestType = "delete";
        $mdDialog.hide(ProjectCreateEditVM.project);
      }, function(response) {
        //  $scope.experienceErrors = response.data.errors;
      });

    }


  };
})();
(function() {
  'use strict';
  angular.module('projectManagement').controller('ProjectCtrl', ProjectCtrl);
  ProjectCtrl.$inject = ['$scope', '$stateParams', '$state', '$mdDialog', 'project','$mdToast', '$rootScope'];

  function ProjectCtrl($scope, $stateParams, $state, $mdDialog, project,$mdToast,$rootScope) {
    var ProjectVM = this;
    ProjectVM.project = project



  };
})();
(function() {
  'use strict';
  angular.module('projectManagement').controller('ProjectHomeCtrl', ProjectHomeCtrl);
  ProjectHomeCtrl.$inject = ['$scope', '$stateParams', '$state', '$mdDialog', 'projects','$mdToast', '$rootScope'];

  function ProjectHomeCtrl($scope, $stateParams, $state, $mdDialog, projects,$mdToast,$rootScope) {
    var ProjectHomeVM = this;
    ProjectHomeVM.projects = projects
    ProjectHomeVM.createEditProject = createEditProject

    ProjectHomeVM.can_create = $rootScope.user.role == "project_manager" ? true : false


    function createEditProject(ev, project, index) {
      $mdDialog.show({
        controller: 'ProjectCreateEditCtrl as ProjectCreateEditVM',
        templateUrl: 'app/project/views/create-edit-project.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: false,
        fullscreen: false,
        resolve: {
          project: function() {
            return angular.copy(project);
          },
          developers: ['DeveloperService', function(DeveloperService) {
            return DeveloperService.query({role:"developer"}).$promise;
          }]
        }
      }).then(function(project) {
        switch (project.requestType) {
          case "save":
            ProjectHomeVM.projects.push(project);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Project created successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "update":
            ProjectHomeVM.projects[index] = project;
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Project updated successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "delete":
            ProjectHomeVM.projects.splice(index, 1);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Project deleted successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          default:

        }
        delete project.requestType;
      }, function(response) {
        console.log(response);
      });
    }

  };
})();
angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.project', {
              url: '/projects',
              controller: "ProjectHomeCtrl as ProjectHomeVM",
              reloadOnSearch: false,
              templateUrl: 'app/project/views/project-home.html',
              resolve: {
                projects: ['ProjectService', function(ProjectService) {
                  return ProjectService.query({
                  }).$promise;
                }]
            }
          }).state('container.user.project-detail', {
                url: '/projects/:id',
                controller: "ProjectCtrl as ProjectVM",
                reloadOnSearch: false,
                templateUrl: 'app/project/views/project-detail.html',
                resolve: {
                  project: ['ProjectService','$stateParams', function(ProjectService,$stateParams) {
                    return ProjectService.get({id: $stateParams.id}).$promise;
                  }]
              }
          })

}]);
angular.module('projectManagement').factory('ProjectService', ['$resource', function($resource) {

  var ProjectService = $resource('projects/:id/:operation.json',{
    id: '@id',
    operation: '@operation'
  }, {
    update: {
      method: 'put'
    },
    developers: {
      method: 'get',
      isArray: true,
      url: '/developers'
    }
  });
  return ProjectService;
}]);
// Angular Rails Template
// source: app/assets/javascripts/app/project/views/create-edit-project.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/project/views/create-edit-project.html", '<style>\n  .valdr-message {\n    display: none;\n  }\n\n  .valdr-message.ng-invalid.ng-touched.ng-dirty,\n  .form-submitted .valdr-message.ng-invalid,\n  .validationMessage {\n    display: inline;\n    color: red;\n    margin-top: -2px;\n  }\n</style>\n<md-dialog aria-label="Add Project" style="width:800px;" id="addProject">\n  <md-toolbar>\n    <div class="md-toolbar-tools">\n      <h3 ng-hide="ProjectCreateEditVM.isUpdate">Create Project</h3>\n      <h3 ng-show="ProjectCreateEditVM.isUpdate">{{ProjectCreateEditVM.project.name}}</h3>\n\n      <span flex></span>\n      <md-button id="close" class="md-icon-button" ng-click="ProjectCreateEditVM.cancel()">\n        <md-icon md-svg-src="images/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <md-dialog-content>\n\n    <div class="md-dialog-content" ng-class="{ \'form-submitted\': formSubmitted }">\n      <form name="projectForm" valdr-type="AddProject" novalidate on-navigate-away-strategy=\'none\'>\n\n          <md-input-container  class="md-block"  valdr-form-group>\n            <label>Name *</label>\n            <input ng-model="ProjectCreateEditVM.project.name" name="name">\n          </md-input-container>\n\n\n        <md-input-container class="md-block" valdr-form-group>\n          <label>Description *</label>\n          <textarea ng-model="ProjectCreateEditVM.project.description" md-maxlength="500" rows="3" md-select-on-focus></textarea>\n        </md-input-container>\n\n        <md-input-container class="md-block" valdr-form-group>\n          <label class="dpLabel">Developers</label>\n          <md-chips ng-model="ProjectCreateEditVM.selectedDevelopers" name = "developer" md-autocomplete-snap md-transform-chip="ProjectCreateEditVM.transformChip($chip)" md-require-match="true">\n            <md-autocomplete md-selected-item="ProjectCreateEditVM.selectedHeadItem" md-search-text="ProjectCreateEditVM.searchHeadText" md-items="item in ProjectCreateEditVM.querySearch(ProjectCreateEditVM.searchHeadText)" md-item-text="item.name">\n              <span md-highlight-text="ProjectCreateEditVM.searchHeadText">{{item.name}}</span>\n            </md-autocomplete>\n            <md-chip-template>\n              <span>\n            <strong>{{$chip.name}}</strong>\n          </span>\n            </md-chip-template>\n          </md-chips>\n        </md-input-container>\n\n      </form>\n    </div>\n\n  </md-dialog-content>\n  <md-dialog-actions layout="row" layout-align="end center" layout-padding>\n    <div flex align="right">\n      <md-button class="md-raised md-primary" id="save" ng-click="ProjectCreateEditVM.saveProject(projectForm)">Save</md-button>\n      <md-button class="md-raised" id="cancel" ng-click="ProjectCreateEditVM.cancel()">Cancel</md-button>\n    </div>\n  </md-dialog-actions>\n</md-dialog>')
}]);

// Angular Rails Template
// source: app/assets/javascripts/app/project/views/project-detail.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/project/views/project-detail.html", '<div layout="column" flex layout-fill ng-cloak>\n\n  <md-toolbar class="md-whiteframe-1dp">\n    <div layout="row">\n      <div class="md-toolbar-tools">{{ProjectVM.project.name}}</div>\n    </div>\n  </md-toolbar>\n\n  <md-content md-theme="altTheme">\n    <div class="md-padding">\n      <p>{{ProjectVM.project.description}}</p>\n    </div>\n    <md-tabs md-dynamic-height md-border-bottom>\n      <md-tab label="todos" ui-sref-active="active" ui-sref=".todo" >\n        <md-content class="md-padding">\n          <ui-view></ui-view>\n        </md-content>\n      </md-tab>\n      <md-tab label="developers">\n        <md-content>\n          <md-list layout-padding>\n            <md-list-item class="md-3-line" ng-repeat="developer in ProjectVM.project.developers">\n                <div class="md-list-item-text">\n                  <h3>{{developer.name}}</h3>\n                  <h4>{{developer.email}}</h4>\n                </div>\n                <md-divider ng-if="!$last"></md-divider>\n            </md-list-item>\n          </md-list>\n        </md-content>\n      </md-tab>\n    </md-tabs>\n  </md-content>\n</div>')
}]);

// Angular Rails Template
// source: app/assets/javascripts/app/project/views/project-home.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/project/views/project-home.html", '<div layout="column" flex layout-fill ng-cloak>\n\n  <md-toolbar class="md-whiteframe-1dp">\n    <div layout="row">\n      <div class="md-toolbar-tools">Projects</div>\n    </div>\n  </md-toolbar>\n\n  <md-content style="height: calc(100vh - 64px);padding-bottom: 60px;" md-theme="altTheme">\n    <md-card ng-repeat="project in ProjectHomeVM.projects">\n     <md-card-content>\n       <div layout="row" layout-align="space-between">\n         <div>\n             <a ng-href="/#/projects/{{project.id}}/todos" style="text-decoration: none;"><span style="font-weight:bold;">{{project.name | uppercase}}</span></a>\n         </div>\n         <div layout="row" ng-show="project.can_update">\n           <md-button id="close" class="md-icon-button" style="margin-top: -15px;" ng-click="ProjectHomeVM.createEditProject($event,project,$index)">\n             <md-icon md-svg-src="images/pencil.svg" class="ng-scope" role="img" aria-hidden="true"></md-icon>\n             <md-tooltip>Edit</md-tooltip>\n           </md-button>\n         </div>\n       </div>\n       <div style="color:gray;font-size:14px;text-align:justify">{{project.description}}</div>\n     </md-card-content>\n   </md-card>\n  </md-content>\n</div>\n\n<button ng-if="ProjectHomeVM.can_create" class="md-fab md-fab-bottom-right docs-scroll-fab md-button md-ink-ripple scrolling" type="button" aria-label="Add" ng-click="ProjectHomeVM.createEditProject($event,{},null)">\n    <md-icon md-svg-src="images/plus.svg"  role="img" aria-hidden="true"></md-icon>\n    <md-tooltip md-direction="top">Add Project</md-tooltip>\n</button>')
}]);

(function() {
  'use strict';
  angular.module('projectManagement').controller('TodoCreateEditCtrl', TodoCreateEditCtrl);
  TodoCreateEditCtrl.$inject = ['$scope', '$stateParams', '$state','$mdToast' ,'$mdDialog','todo','developers','projects','TodoService'];

  function TodoCreateEditCtrl($scope, $stateParams, $state, $mdToast, $mdDialog, todo, developers, projects, TodoService) {
    var TodoCreateEditVM = this;

    $scope.formSubmitted = false;
    TodoCreateEditVM.cancel = cancel;

    function cancel() {
      $mdDialog.cancel();
    }

    TodoCreateEditVM.todo = todo;
    TodoCreateEditVM.isUpdate = angular.isDefined(TodoCreateEditVM.todo.id);

    TodoCreateEditVM.developers = developers;
    TodoCreateEditVM.projects = projects;
    TodoCreateEditVM.saveTodo = saveTodo
    TodoCreateEditVM.deleteTodo = deleteTodo;
    TodoCreateEditVM.todoErrors = []
    TodoCreateEditVM.statuses = [{name:'Open',value:'open'},{name:'In Progress',value:'in_progress'},{name:'Done',value:'done'}]


    function saveTodo(form) {
      console.log(form);
      var returnBack = false;
      if(form.$invalid) {
        $scope.formSubmitted = true;
        returnBack = true;
      }
      if(returnBack)
      return;

      if (TodoCreateEditVM.isUpdate) {
        TodoService.update(TodoCreateEditVM.todo).$promise.then(function(value) {
          TodoCreateEditVM.todo = value
          TodoCreateEditVM.todoErrors = [];
          TodoCreateEditVM.todo.requestType = "update";
          $mdDialog.hide(TodoCreateEditVM.todo);
        }, function(badResponse) {
          TodoCreateEditVM.todoErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + TodoCreateEditVM.todoErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      } else {
        TodoService.save(TodoCreateEditVM.todo).$promise.then(function(value) {
          TodoCreateEditVM.todo = value
          TodoCreateEditVM.todoErrors = [];
          TodoCreateEditVM.todo.requestType = "save";
          $mdDialog.hide(TodoCreateEditVM.todo);
        }, function(badResponse) {
          TodoCreateEditVM.todoErrors = badResponse.data.errors;
          $mdToast.show({
                template: '<md-toast class="md-toast ' + 'error' +'">' + TodoCreateEditVM.todoErrors.join(', ') + '</md-toast>',
                hideDelay: 3000,
                position: 'bottom left'
            });
        });
      }
    }

    function deleteTodo(ev) {
      TodoService.delete({
        id: TodoCreateEditVM.todo.id
      }).$promise.then(function(value) {
        TodoCreateEditVM.feeGroup.requestType = "delete";
        $mdDialog.hide(TodoCreateEditVM.todo);
      }, function(response) {
        //  $scope.experienceErrors = response.data.errors;
      });

    }


  };
})();
(function() {
  'use strict';
  angular.module('projectManagement').controller('TodoHomeCtrl', TodoHomeCtrl);
  TodoHomeCtrl.$inject = ['$scope', '$stateParams', '$state', '$mdDialog', 'todos', '$mdToast', 'TodoService', '$location'];

  function TodoHomeCtrl($scope, $stateParams, $state, $mdDialog, todos, $mdToast, TodoService,$location) {
    var TodoHomeVM = this;
    TodoHomeVM.createEditTodo = createEditTodo;
    TodoHomeVM.todos = todos;
    TodoHomeVM.newTodo = {}
    TodoHomeVM.todo = {}
    
    ProjectVM.can_create = $rootScope.user.role == "project_manager" ? true : false


    function createEditTodo(ev, todo, index) {
      $mdDialog.show({
        controller: 'TodoCreateEditCtrl as TodoCreateEditVM',
        templateUrl: 'app/todo/views/todo-create-edit.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: false,
        fullscreen: false,
        resolve: {
          todo: function() {
            return angular.copy(todo);
          },
          projects: ['ProjectService', function(ProjectService) {
            return ProjectService.query().$promise;
          }],
          developers: ['ProjectService','$stateParams', function(ProjectService, $stateParams) {
            return ProjectService.developers({id: $stateParams.id}).$promise;
          }]
        }
      }).then(function(todo) {
        switch (todo.requestType) {
          case "save":
            TodoHomeVM.todos.push(todo);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Todo created successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "update":
            TodoHomeVM.todos[index] = todo;
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Todo updated successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          case "delete":
            TodoHomeVM.todos.splice(index, 1);
            $mdToast.show({
              template: '<md-toast class="md-toast ' + 'success' + '">' + "Todo deleted successfully" + '</md-toast>',
              hideDelay: 6000,
              position: 'bottom left'
            });
            break;
          default:

        }
        delete todo.requestType;
      }, function(response) {
        console.log(response)
      });
    }


  };
})();
angular.module('projectManagement').factory('TodoService', ['$resource', function($resource) {

  var TodoService = $resource('todos/:id/:operation.json',{
    id: '@id',
    operation: '@operation'
  }, {
    update: {
      method: 'put'
    },
    dashboard: {
      method: 'get',
      isArray: true,
      url: '/dashboard'
    },
    charts: {
      method: 'get',
      isArray: true,
      url: '/charts'
    }
  });
  return TodoService;
}]);
angular.module('projectManagement').config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('container.user.project-detail.todo', {
              url: '/todos',
              controller: "TodoHomeCtrl as TodoHomeVM",
              reloadOnSearch: false,
              templateUrl: 'app/todo/views/todo-home.html',
              resolve: {
                todos: ['TodoService','$stateParams', function(TodoService,$stateParams) {
                  return TodoService.query({project_id: $stateParams.id
                  }).$promise;
                }]
            }
          })

}]);
// Angular Rails Template
// source: app/assets/javascripts/app/todo/views/todo-create-edit.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/todo/views/todo-create-edit.html", '<style>\n  .valdr-message {\n    display: none;\n  }\n\n  .valdr-message.ng-invalid.ng-touched.ng-dirty,\n  .form-submitted .valdr-message.ng-invalid,\n  .validationMessage {\n    display: inline;\n    color: red;\n    margin-top: -2px;\n  }\n</style>\n<md-dialog aria-label="Add Todo" style="width:800px;" id="addTodo">\n  <md-toolbar>\n    <div class="md-toolbar-tools">\n      <h3 ng-hide="TodoCreateEditVM.isUpdate">Create Todo</h3>\n      <h3 ng-show="TodoCreateEditVM.isUpdate">{{TodoCreateEditVM.todo.name}}</h3>\n\n      <span flex></span>\n      <md-button id="close" class="md-icon-button" ng-click="TodoCreateEditVM.cancel()">\n        <md-icon md-svg-src="images/ic_close_24px.svg" aria-label="Close dialog"></md-icon>\n      </md-button>\n    </div>\n  </md-toolbar>\n  <md-dialog-content>\n\n    <div class="md-dialog-content" ng-class="{ \'form-submitted\': formSubmitted }">\n      <form name="todoForm" valdr-type="AddTodo" novalidate on-navigate-away-strategy=\'none\'>\n\n        <div layout="row">\n\n          <md-input-container  class="md-block"  valdr-form-group flex="80">\n            <label>Name *</label>\n            <input ng-model="TodoCreateEditVM.todo.name" name="name">\n          </md-input-container>\n\n          <md-input-container flex="20">\n            <label>Status</label>\n            <md-select name="type" ng-model="TodoCreateEditVM.todo.status">\n              <md-option ng-repeat="status in TodoCreateEditVM.statuses" ng-value="status.value">\n               {{status.name}}\n             </md-option>\n            </md-select>\n          </md-input-container>\n\n      </div>\n\n\n        <md-input-container class="md-block" valdr-form-group>\n          <label>Description *</label>\n          <textarea ng-model="TodoCreateEditVM.todo.description" md-maxlength="500" rows="3" md-select-on-focus></textarea>\n        </md-input-container>\n\n        <div layout="row">\n\n        <md-input-container flex="50">\n          <label>Developer</label>\n          <md-select name="type" ng-model="TodoCreateEditVM.todo.developer_id">\n            <md-option ng-repeat="developer in TodoCreateEditVM.developers" ng-value="developer.id">\n             {{developer.name}}\n           </md-option>\n          </md-select>\n        </md-input-container>\n      </div>\n\n\n      </form>\n    </div>\n\n  </md-dialog-content>\n  <md-dialog-actions layout="row" layout-align="end center" layout-padding>\n    <div flex align="right">\n      <md-button class="md-raised md-primary" id="save" ng-click="TodoCreateEditVM.saveTodo(todoForm)">Save</md-button>\n      <md-button class="md-raised" id="cancel" ng-click="TodoCreateEditVM.cancel()">Cancel</md-button>\n    </div>\n  </md-dialog-actions>\n</md-dialog>')
}]);

// Angular Rails Template
// source: app/assets/javascripts/app/todo/views/todo-home.html

angular.module("templates").run(["$templateCache", function($templateCache) {
  $templateCache.put("app/todo/views/todo-home.html", '<div layout="column" flex layout-fill ng-cloak>\n  <md-content style="padding-bottom: 60px;" md-theme="altTheme">\n    <md-card ng-repeat="todo in TodoHomeVM.todos">\n     <md-card-content>\n       <div layout="row" layout-align="space-between">\n         <div>\n             <span style="font-weight:bold;">{{todo.name | uppercase}}</span>\n         </div>\n         <div layout="row">\n           <md-button id="close" class="md-icon-button" style="margin-top: -15px;" ng-click="TodoHomeVM.createEditTodo($event,todo,$index)">\n             <md-icon md-svg-src="images/pencil.svg" class="ng-scope" role="img" aria-hidden="true"></md-icon>\n             <md-tooltip>Edit</md-tooltip>\n           </md-button>\n         </div>\n       </div>\n       <div style="color:gray;font-size:14px;text-align:justify">{{todo.description}}</div>\n       <div layout="row" layout-align="space-between">\n         <div>\n           <span>{{todo.status | uppercase}}</span>\n         </div>\n         <div>\n           <span>{{todo.developer.name}}</span>\n         </div>\n       </div>\n     </md-card-content>\n   </md-card>\n  </md-content>\n</div>\n\n<button ng-if="TodoHomeVM.can_create" class="md-fab md-fab-bottom-right docs-scroll-fab md-button md-ink-ripple scrolling" type="button" aria-label="Add" ng-click="TodoHomeVM.createEditTodo($event,{status: \'open\'},null)">\n    <md-icon md-svg-src="images/plus.svg"  role="img" aria-hidden="true"></md-icon>\n    <md-tooltip md-direction="top">Add Todo</md-tooltip>\n</button>')
}]);

(function() {
  var context = this;

  (function() {
    (function() {
      var slice = [].slice;

      this.ActionCable = {
        INTERNAL: {
          "message_types": {
            "welcome": "welcome",
            "ping": "ping",
            "confirmation": "confirm_subscription",
            "rejection": "reject_subscription"
          },
          "default_mount_path": "/cable",
          "protocols": ["actioncable-v1-json", "actioncable-unsupported"]
        },
        WebSocket: window.WebSocket,
        logger: window.console,
        createConsumer: function(url) {
          var ref;
          if (url == null) {
            url = (ref = this.getConfig("url")) != null ? ref : this.INTERNAL.default_mount_path;
          }
          return new ActionCable.Consumer(this.createWebSocketURL(url));
        },
        getConfig: function(name) {
          var element;
          element = document.head.querySelector("meta[name='action-cable-" + name + "']");
          return element != null ? element.getAttribute("content") : void 0;
        },
        createWebSocketURL: function(url) {
          var a;
          if (url && !/^wss?:/i.test(url)) {
            a = document.createElement("a");
            a.href = url;
            a.href = a.href;
            a.protocol = a.protocol.replace("http", "ws");
            return a.href;
          } else {
            return url;
          }
        },
        startDebugging: function() {
          return this.debugging = true;
        },
        stopDebugging: function() {
          return this.debugging = null;
        },
        log: function() {
          var messages, ref;
          messages = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (this.debugging) {
            messages.push(Date.now());
            return (ref = this.logger).log.apply(ref, ["[ActionCable]"].concat(slice.call(messages)));
          }
        }
      };

    }).call(this);
  }).call(context);

  var ActionCable = context.ActionCable;

  (function() {
    (function() {
      var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

      ActionCable.ConnectionMonitor = (function() {
        var clamp, now, secondsSince;

        ConnectionMonitor.pollInterval = {
          min: 3,
          max: 30
        };

        ConnectionMonitor.staleThreshold = 6;

        function ConnectionMonitor(connection) {
          this.connection = connection;
          this.visibilityDidChange = bind(this.visibilityDidChange, this);
          this.reconnectAttempts = 0;
        }

        ConnectionMonitor.prototype.start = function() {
          if (!this.isRunning()) {
            this.startedAt = now();
            delete this.stoppedAt;
            this.startPolling();
            document.addEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor started. pollInterval = " + (this.getPollInterval()) + " ms");
          }
        };

        ConnectionMonitor.prototype.stop = function() {
          if (this.isRunning()) {
            this.stoppedAt = now();
            this.stopPolling();
            document.removeEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor stopped");
          }
        };

        ConnectionMonitor.prototype.isRunning = function() {
          return (this.startedAt != null) && (this.stoppedAt == null);
        };

        ConnectionMonitor.prototype.recordPing = function() {
          return this.pingedAt = now();
        };

        ConnectionMonitor.prototype.recordConnect = function() {
          this.reconnectAttempts = 0;
          this.recordPing();
          delete this.disconnectedAt;
          return ActionCable.log("ConnectionMonitor recorded connect");
        };

        ConnectionMonitor.prototype.recordDisconnect = function() {
          this.disconnectedAt = now();
          return ActionCable.log("ConnectionMonitor recorded disconnect");
        };

        ConnectionMonitor.prototype.startPolling = function() {
          this.stopPolling();
          return this.poll();
        };

        ConnectionMonitor.prototype.stopPolling = function() {
          return clearTimeout(this.pollTimeout);
        };

        ConnectionMonitor.prototype.poll = function() {
          return this.pollTimeout = setTimeout((function(_this) {
            return function() {
              _this.reconnectIfStale();
              return _this.poll();
            };
          })(this), this.getPollInterval());
        };

        ConnectionMonitor.prototype.getPollInterval = function() {
          var interval, max, min, ref;
          ref = this.constructor.pollInterval, min = ref.min, max = ref.max;
          interval = 5 * Math.log(this.reconnectAttempts + 1);
          return Math.round(clamp(interval, min, max) * 1000);
        };

        ConnectionMonitor.prototype.reconnectIfStale = function() {
          if (this.connectionIsStale()) {
            ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + (this.getPollInterval()) + " ms, time disconnected = " + (secondsSince(this.disconnectedAt)) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
            this.reconnectAttempts++;
            if (this.disconnectedRecently()) {
              return ActionCable.log("ConnectionMonitor skipping reopening recent disconnect");
            } else {
              ActionCable.log("ConnectionMonitor reopening");
              return this.connection.reopen();
            }
          }
        };

        ConnectionMonitor.prototype.connectionIsStale = function() {
          var ref;
          return secondsSince((ref = this.pingedAt) != null ? ref : this.startedAt) > this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.disconnectedRecently = function() {
          return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.visibilityDidChange = function() {
          if (document.visibilityState === "visible") {
            return setTimeout((function(_this) {
              return function() {
                if (_this.connectionIsStale() || !_this.connection.isOpen()) {
                  ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);
                  return _this.connection.reopen();
                }
              };
            })(this), 200);
          }
        };

        now = function() {
          return new Date().getTime();
        };

        secondsSince = function(time) {
          return (now() - time) / 1000;
        };

        clamp = function(number, min, max) {
          return Math.max(min, Math.min(max, number));
        };

        return ConnectionMonitor;

      })();

    }).call(this);
    (function() {
      var i, message_types, protocols, ref, supportedProtocols, unsupportedProtocol,
        slice = [].slice,
        bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
        indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

      ref = ActionCable.INTERNAL, message_types = ref.message_types, protocols = ref.protocols;

      supportedProtocols = 2 <= protocols.length ? slice.call(protocols, 0, i = protocols.length - 1) : (i = 0, []), unsupportedProtocol = protocols[i++];

      ActionCable.Connection = (function() {
        Connection.reopenDelay = 500;

        function Connection(consumer) {
          this.consumer = consumer;
          this.open = bind(this.open, this);
          this.subscriptions = this.consumer.subscriptions;
          this.monitor = new ActionCable.ConnectionMonitor(this);
          this.disconnected = true;
        }

        Connection.prototype.send = function(data) {
          if (this.isOpen()) {
            this.webSocket.send(JSON.stringify(data));
            return true;
          } else {
            return false;
          }
        };

        Connection.prototype.open = function() {
          if (this.isActive()) {
            ActionCable.log("Attempted to open WebSocket, but existing socket is " + (this.getState()));
            return false;
          } else {
            ActionCable.log("Opening WebSocket, current state is " + (this.getState()) + ", subprotocols: " + protocols);
            if (this.webSocket != null) {
              this.uninstallEventHandlers();
            }
            this.webSocket = new ActionCable.WebSocket(this.consumer.url, protocols);
            this.installEventHandlers();
            this.monitor.start();
            return true;
          }
        };

        Connection.prototype.close = function(arg) {
          var allowReconnect, ref1;
          allowReconnect = (arg != null ? arg : {
            allowReconnect: true
          }).allowReconnect;
          if (!allowReconnect) {
            this.monitor.stop();
          }
          if (this.isActive()) {
            return (ref1 = this.webSocket) != null ? ref1.close() : void 0;
          }
        };

        Connection.prototype.reopen = function() {
          var error;
          ActionCable.log("Reopening WebSocket, current state is " + (this.getState()));
          if (this.isActive()) {
            try {
              return this.close();
            } catch (error1) {
              error = error1;
              return ActionCable.log("Failed to reopen WebSocket", error);
            } finally {
              ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
              setTimeout(this.open, this.constructor.reopenDelay);
            }
          } else {
            return this.open();
          }
        };

        Connection.prototype.getProtocol = function() {
          var ref1;
          return (ref1 = this.webSocket) != null ? ref1.protocol : void 0;
        };

        Connection.prototype.isOpen = function() {
          return this.isState("open");
        };

        Connection.prototype.isActive = function() {
          return this.isState("open", "connecting");
        };

        Connection.prototype.isProtocolSupported = function() {
          var ref1;
          return ref1 = this.getProtocol(), indexOf.call(supportedProtocols, ref1) >= 0;
        };

        Connection.prototype.isState = function() {
          var ref1, states;
          states = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return ref1 = this.getState(), indexOf.call(states, ref1) >= 0;
        };

        Connection.prototype.getState = function() {
          var ref1, state, value;
          for (state in WebSocket) {
            value = WebSocket[state];
            if (value === ((ref1 = this.webSocket) != null ? ref1.readyState : void 0)) {
              return state.toLowerCase();
            }
          }
          return null;
        };

        Connection.prototype.installEventHandlers = function() {
          var eventName, handler;
          for (eventName in this.events) {
            handler = this.events[eventName].bind(this);
            this.webSocket["on" + eventName] = handler;
          }
        };

        Connection.prototype.uninstallEventHandlers = function() {
          var eventName;
          for (eventName in this.events) {
            this.webSocket["on" + eventName] = function() {};
          }
        };

        Connection.prototype.events = {
          message: function(event) {
            var identifier, message, ref1, type;
            if (!this.isProtocolSupported()) {
              return;
            }
            ref1 = JSON.parse(event.data), identifier = ref1.identifier, message = ref1.message, type = ref1.type;
            switch (type) {
              case message_types.welcome:
                this.monitor.recordConnect();
                return this.subscriptions.reload();
              case message_types.ping:
                return this.monitor.recordPing();
              case message_types.confirmation:
                return this.subscriptions.notify(identifier, "connected");
              case message_types.rejection:
                return this.subscriptions.reject(identifier);
              default:
                return this.subscriptions.notify(identifier, "received", message);
            }
          },
          open: function() {
            ActionCable.log("WebSocket onopen event, using '" + (this.getProtocol()) + "' subprotocol");
            this.disconnected = false;
            if (!this.isProtocolSupported()) {
              ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting.");
              return this.close({
                allowReconnect: false
              });
            }
          },
          close: function(event) {
            ActionCable.log("WebSocket onclose event");
            if (this.disconnected) {
              return;
            }
            this.disconnected = true;
            this.monitor.recordDisconnect();
            return this.subscriptions.notifyAll("disconnected", {
              willAttemptReconnect: this.monitor.isRunning()
            });
          },
          error: function() {
            return ActionCable.log("WebSocket onerror event");
          }
        };

        return Connection;

      })();

    }).call(this);
    (function() {
      var slice = [].slice;

      ActionCable.Subscriptions = (function() {
        function Subscriptions(consumer) {
          this.consumer = consumer;
          this.subscriptions = [];
        }

        Subscriptions.prototype.create = function(channelName, mixin) {
          var channel, params, subscription;
          channel = channelName;
          params = typeof channel === "object" ? channel : {
            channel: channel
          };
          subscription = new ActionCable.Subscription(this.consumer, params, mixin);
          return this.add(subscription);
        };

        Subscriptions.prototype.add = function(subscription) {
          this.subscriptions.push(subscription);
          this.consumer.ensureActiveConnection();
          this.notify(subscription, "initialized");
          this.sendCommand(subscription, "subscribe");
          return subscription;
        };

        Subscriptions.prototype.remove = function(subscription) {
          this.forget(subscription);
          if (!this.findAll(subscription.identifier).length) {
            this.sendCommand(subscription, "unsubscribe");
          }
          return subscription;
        };

        Subscriptions.prototype.reject = function(identifier) {
          var i, len, ref, results, subscription;
          ref = this.findAll(identifier);
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            this.forget(subscription);
            this.notify(subscription, "rejected");
            results.push(subscription);
          }
          return results;
        };

        Subscriptions.prototype.forget = function(subscription) {
          var s;
          this.subscriptions = (function() {
            var i, len, ref, results;
            ref = this.subscriptions;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              s = ref[i];
              if (s !== subscription) {
                results.push(s);
              }
            }
            return results;
          }).call(this);
          return subscription;
        };

        Subscriptions.prototype.findAll = function(identifier) {
          var i, len, ref, results, s;
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            s = ref[i];
            if (s.identifier === identifier) {
              results.push(s);
            }
          }
          return results;
        };

        Subscriptions.prototype.reload = function() {
          var i, len, ref, results, subscription;
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.sendCommand(subscription, "subscribe"));
          }
          return results;
        };

        Subscriptions.prototype.notifyAll = function() {
          var args, callbackName, i, len, ref, results, subscription;
          callbackName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.notify.apply(this, [subscription, callbackName].concat(slice.call(args))));
          }
          return results;
        };

        Subscriptions.prototype.notify = function() {
          var args, callbackName, i, len, results, subscription, subscriptions;
          subscription = arguments[0], callbackName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
          if (typeof subscription === "string") {
            subscriptions = this.findAll(subscription);
          } else {
            subscriptions = [subscription];
          }
          results = [];
          for (i = 0, len = subscriptions.length; i < len; i++) {
            subscription = subscriptions[i];
            results.push(typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : void 0);
          }
          return results;
        };

        Subscriptions.prototype.sendCommand = function(subscription, command) {
          var identifier;
          identifier = subscription.identifier;
          return this.consumer.send({
            command: command,
            identifier: identifier
          });
        };

        return Subscriptions;

      })();

    }).call(this);
    (function() {
      ActionCable.Subscription = (function() {
        var extend;

        function Subscription(consumer, params, mixin) {
          this.consumer = consumer;
          if (params == null) {
            params = {};
          }
          this.identifier = JSON.stringify(params);
          extend(this, mixin);
        }

        Subscription.prototype.perform = function(action, data) {
          if (data == null) {
            data = {};
          }
          data.action = action;
          return this.send(data);
        };

        Subscription.prototype.send = function(data) {
          return this.consumer.send({
            command: "message",
            identifier: this.identifier,
            data: JSON.stringify(data)
          });
        };

        Subscription.prototype.unsubscribe = function() {
          return this.consumer.subscriptions.remove(this);
        };

        extend = function(object, properties) {
          var key, value;
          if (properties != null) {
            for (key in properties) {
              value = properties[key];
              object[key] = value;
            }
          }
          return object;
        };

        return Subscription;

      })();

    }).call(this);
    (function() {
      ActionCable.Consumer = (function() {
        function Consumer(url) {
          this.url = url;
          this.subscriptions = new ActionCable.Subscriptions(this);
          this.connection = new ActionCable.Connection(this);
        }

        Consumer.prototype.send = function(data) {
          return this.connection.send(data);
        };

        Consumer.prototype.connect = function() {
          return this.connection.open();
        };

        Consumer.prototype.disconnect = function() {
          return this.connection.close({
            allowReconnect: false
          });
        };

        Consumer.prototype.ensureActiveConnection = function() {
          if (!this.connection.isActive()) {
            return this.connection.open();
          }
        };

        return Consumer;

      })();

    }).call(this);
  }).call(this);

  if (typeof module === "object" && module.exports) {
    module.exports = ActionCable;
  } else if (typeof define === "function" && define.amd) {
    define(ActionCable);
  }
}).call(this);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//




(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
/**
 * vAccordion - AngularJS multi-level accordion component
 * @version v1.6.0
 * @link http://lukaszwatroba.github.io/v-accordion
 * @author Łukasz Wątroba <l@lukaszwatroba.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */


(function (angular) {
'use strict';

// Config
angular.module('vAccordion.config', [])
  .constant('accordionConfig', {
    states: {
      expanded: 'is-expanded'
    },
    expandAnimationDuration: 0.5
  })
  .animation('.is-expanded', [ '$animateCss', 'accordionConfig', function ($animateCss, accordionConfig) {
    return {
      addClass: function (element, className, done) {
        var paneContent = angular.element(element[0].querySelector('v-pane-content')),
            paneInner = angular.element(paneContent[0].querySelector('div'));

        var height = paneInner[0].offsetHeight;

        var expandAnimation = $animateCss(paneContent, {
          easing: 'ease',
          from: { maxHeight: '0px' },
          to: { maxHeight: height + 'px' },
          duration: accordionConfig.expandAnimationDuration
        });

        expandAnimation.start().done(function () {
          paneContent.css('max-height', 'none');
          done();
        });

        return function (isCancelled) {
          if (isCancelled) {
            paneContent.css('max-height', 'none');
          }
        };
      },
      removeClass: function (element, className, done) {
        var paneContent = angular.element(element[0].querySelector('v-pane-content')),
            paneInner = angular.element(paneContent[0].querySelector('div'));

        var height = paneInner[0].offsetHeight;

        var collapseAnimation = $animateCss(paneContent, {
          easing: 'ease',
          from: { maxHeight: height + 'px' },
          to: { maxHeight: '0px' },
          duration: accordionConfig.expandAnimationDuration
        });

        collapseAnimation.start().done(done);

        return function (isCancelled) {
          if (isCancelled) {
            paneContent.css('max-height', '0px');
          }
        };
      }
    };
  } ]);


// Modules
angular.module('vAccordion.directives', []);
angular.module('vAccordion',
  [
    'vAccordion.config',
    'vAccordion.directives'
  ]);



// vAccordion directive
angular.module('vAccordion.directives')
  .directive('vAccordion', vAccordionDirective);


function vAccordionDirective ($timeout) {
  return {
    restrict: 'E',
    transclude: true,
    controller: vAccordionController,
    scope: {
      control: '=?',
      expandCb: '&?onexpand',
      collapseCb: '&?oncollapse',
      id: '@?'
    },
    link: {
      pre: function (scope, iElement, iAttrs) {
        scope.allowMultiple = (angular.isDefined(iAttrs.multiple) && (iAttrs.multiple === '' || iAttrs.multiple === 'true'));
      },
      post: function (scope, iElement, iAttrs, ctrl, transclude) {
        transclude(scope.$parent.$new(), function (clone, transclusionScope) {
          transclusionScope.$accordion = scope.internalControl;
          if (scope.id) { transclusionScope.$accordion.id = scope.id; }
          iElement.append(clone);
        });

        iAttrs.$set('role', 'tablist');

        if (scope.allowMultiple) {
          iAttrs.$set('aria-multiselectable', 'true');
        }

        if (angular.isDefined(scope.control)) {
          checkCustomControlAPIMethods();

          var mergedControl = angular.extend({}, scope.internalControl, scope.control);
          scope.control = scope.internalControl = mergedControl;
        }
        else {
          scope.control = scope.internalControl;
        }

        function checkCustomControlAPIMethods () {
          var protectedApiMethods = ['toggle', 'expand', 'collapse', 'expandAll', 'collapseAll', 'hasExpandedPane'];

          angular.forEach(protectedApiMethods, function (iteratedMethodName) {
            if (scope.control[iteratedMethodName]) {
              throw new Error('The `' + iteratedMethodName + '` method can not be overwritten');
            }
          });
        }

        $timeout(function () {
          var eventName = (angular.isDefined(ctrl.getAccordionId())) ? ctrl.getAccordionId() + ':onReady' : 'vAccordion:onReady';
          scope.$emit(eventName);
        }, 0);
      }
    }
  };
}
vAccordionDirective.$inject = ['$timeout'];


// vAccordion directive controller
function vAccordionController ($scope) {
  var ctrl = this;
  var isDisabled = false;

  $scope.panes = [];

	$scope.expandCb = (angular.isFunction($scope.expandCb)) ? $scope.expandCb : angular.noop;
	$scope.collapseCb = (angular.isFunction($scope.collapseCb)) ? $scope.collapseCb : angular.noop;

  ctrl.hasExpandedPane = function hasExpandedPane () {
    var bool = false;

    for (var i = 0, length = $scope.panes.length; i < length; i++) {
      var iteratedPane = $scope.panes[i];

      if (iteratedPane.isExpanded) {
        bool = true;
        break;
      }
    }

    return bool;
  };

  ctrl.getPaneByIndex = function getPaneByIndex (index) {
    var thePane;

    angular.forEach($scope.panes, function (iteratedPane) {
      if (iteratedPane.$parent && angular.isDefined(iteratedPane.$parent.$index) && iteratedPane.$parent.$index === index) {
        thePane = iteratedPane;
      }
    });

    return (thePane) ? thePane : $scope.panes[index];
  };

  ctrl.getPaneIndex = function getPaneIndex (pane) {
    var theIndex;

    angular.forEach($scope.panes, function (iteratedPane) {
      if (iteratedPane.$parent && angular.isDefined(iteratedPane.$parent.$index) && iteratedPane === pane) {
        theIndex = iteratedPane.$parent.$index;
      }
    });

    return (angular.isDefined(theIndex)) ? theIndex : $scope.panes.indexOf(pane);
  };

  ctrl.getPaneById = function getPaneById (id) {
    var thePane;

    angular.forEach($scope.panes, function (iteratedPane) {
      if (iteratedPane.id && iteratedPane.id === id) {
        thePane = iteratedPane;
      }
    });

    return thePane;
  };

  ctrl.getPaneId = function getPaneId (pane) {
    return pane.id;
  };

  ctrl.getAccordionId = function getAccordionId () {
    return $scope.id;
  };


  ctrl.disable = function disable () {
    isDisabled = true;
  };

  ctrl.enable = function enable () {
    isDisabled = false;
  };

  ctrl.addPane = function addPane (paneToAdd) {
    if (!$scope.allowMultiple) {
      if (ctrl.hasExpandedPane() && paneToAdd.isExpanded) {
        throw new Error('The `multiple` attribute can\'t be found');
      }
    }

    $scope.panes.push(paneToAdd);

    if (paneToAdd.isExpanded) {
      $scope.expandCb({ index: ctrl.getPaneIndex(paneToAdd), id: paneToAdd.id, pane: paneToAdd });
    }
  };

  ctrl.focusNext = function focusNext () {
    var length = $scope.panes.length;

    for (var i = 0; i < length; i++) {
      var iteratedPane = $scope.panes[i];

      if (iteratedPane.isFocused) {
        var paneToFocusIndex = i + 1;

        if (paneToFocusIndex > $scope.panes.length - 1) {
          paneToFocusIndex = 0;
        }

        var paneToFocus = $scope.panes[paneToFocusIndex];
            paneToFocus.paneElement.find('v-pane-header')[0].focus();

        break;
      }
    }
  };

  ctrl.focusPrevious = function focusPrevious () {
    var length = $scope.panes.length;

    for (var i = 0; i < length; i++) {
      var iteratedPane = $scope.panes[i];

      if (iteratedPane.isFocused) {
        var paneToFocusIndex = i - 1;

        if (paneToFocusIndex < 0) {
          paneToFocusIndex = $scope.panes.length - 1;
        }

        var paneToFocus = $scope.panes[paneToFocusIndex];
            paneToFocus.paneElement.find('v-pane-header')[0].focus();

        break;
      }
    }
  };

  ctrl.toggle = function toggle (paneToToggle) {
    if (isDisabled || !paneToToggle) { return; }

    if (!$scope.allowMultiple) {
      ctrl.collapseAll(paneToToggle);
    }

    paneToToggle.isExpanded = !paneToToggle.isExpanded;

    if (paneToToggle.isExpanded) {
      $scope.expandCb({ index: ctrl.getPaneIndex(paneToToggle), id: paneToToggle.id, pane: paneToToggle });
    } else {
      $scope.collapseCb({ index: ctrl.getPaneIndex(paneToToggle), id: paneToToggle.id, pane: paneToToggle });
    }
  };

  ctrl.expand = function expand (paneToExpand) {
    if (isDisabled || !paneToExpand) { return; }

    if (!$scope.allowMultiple) {
      ctrl.collapseAll(paneToExpand);
    }

    if (!paneToExpand.isExpanded) {
      paneToExpand.isExpanded = true;
      $scope.expandCb({ index: ctrl.getPaneIndex(paneToExpand), id: paneToExpand.id, pane: paneToExpand });
    }
  };

  ctrl.collapse = function collapse (paneToCollapse) {
    if (isDisabled || !paneToCollapse) { return; }

    if (paneToCollapse.isExpanded) {
      paneToCollapse.isExpanded = false;
      $scope.collapseCb({ index: ctrl.getPaneIndex(paneToCollapse), id: paneToCollapse.id, pane: paneToCollapse });
    }
  };

  ctrl.expandAll = function expandAll () {
    if (isDisabled) { return; }

    if ($scope.allowMultiple) {
      angular.forEach($scope.panes, function (iteratedPane) {
        ctrl.expand(iteratedPane);
      });
    } else {
      throw new Error('The `multiple` attribute can\'t be found');
    }
  };

  ctrl.collapseAll = function collapseAll (exceptionalPane) {
    if (isDisabled) { return; }

    angular.forEach($scope.panes, function (iteratedPane) {
      if (iteratedPane !== exceptionalPane) {
        ctrl.collapse(iteratedPane);
      }
    });
  };

  // API
  $scope.internalControl = {
    toggle: function toggle (indexOrId) {
      if (angular.isString(indexOrId)) {
        ctrl.toggle( ctrl.getPaneById(indexOrId) );
      } else {
        ctrl.toggle( ctrl.getPaneByIndex(indexOrId) );
      }
    },
    expand: function expand (indexOrId) {
      if (angular.isString(indexOrId)) {
        ctrl.expand( ctrl.getPaneById(indexOrId) );
      } else {
        ctrl.expand( ctrl.getPaneByIndex(indexOrId) );
      }
    },
    collapse: function collapse (indexOrId) {
      if (angular.isString(indexOrId)) {
        ctrl.collapse( ctrl.getPaneById(indexOrId) );
      } else {
        ctrl.collapse( ctrl.getPaneByIndex(indexOrId) );
      }
    },
    expandAll: ctrl.expandAll,
    collapseAll: ctrl.collapseAll,
    hasExpandedPane: ctrl.hasExpandedPane
  };
}
vAccordionController.$inject = ['$scope'];



// vPane directive
angular.module('vAccordion.directives')
  .directive('vPane', vPaneDirective);


function vPaneDirective ($timeout, $animate, accordionConfig) {
  return {
    restrict: 'E',
    require: '^vAccordion',
    transclude: true,
    controller: vPaneController,
    scope: {
      isExpanded: '=?expanded',
      isDisabled: '=?ngDisabled',
      id: '@?'
    },
    link: function (scope, iElement, iAttrs, accordionCtrl, transclude) {
      transclude(scope.$parent.$new(), function (clone, transclusionScope) {
        transclusionScope.$pane = scope.internalControl;
        if (scope.id) { transclusionScope.$pane.id = scope.id; }
        iElement.append(clone);
      });

      if (!angular.isDefined(scope.isExpanded)) {
        scope.isExpanded = (angular.isDefined(iAttrs.expanded) && (iAttrs.expanded === ''));
      }

      if (angular.isDefined(iAttrs.disabled)) {
        scope.isDisabled = true;
      }

      var states = accordionConfig.states;

      var paneHeader = iElement.find('v-pane-header'),
          paneContent = iElement.find('v-pane-content'),
          paneInner = paneContent.find('div');

      var accordionId = accordionCtrl.getAccordionId();

      if (!paneHeader[0]) {
        throw new Error('The `v-pane-header` directive can\'t be found');
      }

      if (!paneContent[0]) {
        throw new Error('The `v-pane-content` directive can\'t be found');
      }

      scope.paneElement = iElement;
      scope.paneContentElement = paneContent;
      scope.paneInnerElement = paneInner;

      scope.accordionCtrl = accordionCtrl;

      accordionCtrl.addPane(scope);

      function emitEvent (eventName) {
        eventName = (angular.isDefined(accordionId)) ? accordionId + ':' + eventName : 'vAccordion:' + eventName;
        scope.$emit(eventName);
      }

      function expand () {
        accordionCtrl.disable();

        paneContent.attr('aria-hidden', 'false');

        paneHeader.attr({
          'aria-selected': 'true',
          'aria-expanded': 'true'
        });

        emitEvent('onExpand');

        $animate
          .addClass(iElement, states.expanded)
          .then(function () {
            accordionCtrl.enable();
            emitEvent('onExpandAnimationEnd');
          });
      }

      function collapse () {
        accordionCtrl.disable();

        paneContent.attr('aria-hidden', 'true');

        paneHeader.attr({
          'aria-selected': 'false',
          'aria-expanded': 'false'
        });

        emitEvent('onCollapse');

        $animate
          .removeClass(iElement, states.expanded)
          .then(function () {
            accordionCtrl.enable();
            emitEvent('onCollapseAnimationEnd');
          });
      }

      scope.$evalAsync(function () {
        if (scope.isExpanded) {
          iElement.addClass(states.expanded);
          paneContent
            .css('max-height', 'none')
            .attr('aria-hidden', 'false');

          paneHeader.attr({
            'aria-selected': 'true',
            'aria-expanded': 'true'
          });
        } else {
          paneContent
            .css('max-height', '0px')
            .attr('aria-hidden', 'true');

          paneHeader.attr({
            'aria-selected': 'false',
            'aria-expanded': 'false'
          });
        }
      });

      scope.$watch('isExpanded', function (newValue, oldValue) {
        if (newValue === oldValue) { return true; }
        if (newValue) { expand(); }
        else { collapse(); }
      });
    }
  };
}
vPaneDirective.$inject = ['$timeout', '$animate', 'accordionConfig'];


// vPane directive controller
function vPaneController ($scope) {
  var ctrl = this;

  ctrl.isExpanded = function isExpanded () {
    return $scope.isExpanded;
  };

  ctrl.toggle = function toggle () {
    if (!$scope.isAnimating && !$scope.isDisabled) {
      $scope.accordionCtrl.toggle($scope);
    }
  };

  ctrl.expand = function expand () {
    if (!$scope.isAnimating && !$scope.isDisabled) {
      $scope.accordionCtrl.expand($scope);
    }
  };

  ctrl.collapse = function collapse () {
    if (!$scope.isAnimating && !$scope.isDisabled) {
      $scope.accordionCtrl.collapse($scope);
    }
  };

  ctrl.focusPane = function focusPane () {
    $scope.isFocused = true;
  };

  ctrl.blurPane = function blurPane () {
    $scope.isFocused = false;
  };

  $scope.internalControl = {
    toggle: ctrl.toggle,
    expand: ctrl.expand,
    collapse: ctrl.collapse,
    isExpanded: ctrl.isExpanded
  };
}
vPaneController.$inject = ['$scope'];



// vPaneContent directive
angular.module('vAccordion.directives')
  .directive('vPaneContent', vPaneContentDirective);


function vPaneContentDirective () {
  return {
    restrict: 'E',
    require: '^vPane',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {},
    link: function (scope, iElement, iAttrs) {
      iAttrs.$set('role', 'tabpanel');
      iAttrs.$set('aria-hidden', 'true');
    }
  };
}



// vPaneHeader directive
angular.module('vAccordion.directives')
  .directive('vPaneHeader', vPaneHeaderDirective);


function vPaneHeaderDirective () {
  return {
    restrict: 'E',
    require: ['^vPane', '^vAccordion'],
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {},
    link: function (scope, iElement, iAttrs, ctrls) {
      iAttrs.$set('role', 'tab');
      iAttrs.$set('tabindex', '0');

      var paneCtrl = ctrls[0],
          accordionCtrl = ctrls[1];

      var isInactive = angular.isDefined(iAttrs.inactive);

      function onClick () {
        if (isInactive) { return false; }
        scope.$apply(function () { paneCtrl.toggle(); });
      }

      function onKeydown (event) {
        if (event.keyCode === 32  || event.keyCode === 13) {
          scope.$apply(function () { paneCtrl.toggle(); });
          event.preventDefault();
        } else if (event.keyCode === 39 || event.keyCode === 40) {
          scope.$apply(function () { accordionCtrl.focusNext(); });
          event.preventDefault();
        } else if (event.keyCode === 37 || event.keyCode === 38) {
          scope.$apply(function () { accordionCtrl.focusPrevious(); });
          event.preventDefault();
        }
      }

      function onFocus () {
        paneCtrl.focusPane();
      }

      function onBlur () {
        paneCtrl.blurPane();
      }

      iElement[0].onfocus = onFocus;
      iElement[0].onblur = onBlur;
      iElement.bind('click', onClick);
      iElement.bind('keydown', onKeydown);

      scope.$on('$destroy', function () {
        iElement.unbind('click', onClick);
        iElement.unbind('keydown', onKeydown);
        iElement[0].onfocus = null;
        iElement[0].onblur = null;
      });
    }
  };
}

})(angular);
// AngularDevise
// -------------------
// v1.2.1
//
// Copyright (c)2016 Justin Ridgewell
// Distributed under MIT license
//
// https://github.com/cloudspace/angular_devise

!function(a){"use strict";var b=a.module("Devise",[]);b.provider("AuthIntercept",function(){var a=!1;this.interceptAuth=function(b){return a=!!b||void 0===b,this},this.$get=["$rootScope","$q",function(b,c){return{responseError:function(d){var e=d.config.interceptAuth;if(e=!!e||a&&void 0===e,e&&401===d.status){var f=c.defer();return b.$broadcast("devise:unauthorized",d,f),f.reject(d),f.promise}return c.reject(d)}}}]}).config(["$httpProvider",function(a){a.interceptors.push("AuthIntercept")}]),b.provider("Auth",function(){function b(b,c,d){var h={method:f[b].toLowerCase(),url:e[b]};return c&&(g?(h.data={},h.data[g]=c):h.data=c),a.extend(h,d),h}function c(b,c){a.forEach(b,function(a,d){this[d+c]=function(a){return void 0===a?b[d]:(b[d]=a,this)}},this)}function d(a){return function(){return a}}var e={login:"/users/sign_in.json",logout:"/users/sign_out.json",register:"/users.json",sendResetPasswordInstructions:"/users/password.json",resetPassword:"/users/password.json"},f={login:"POST",logout:"DELETE",register:"POST",sendResetPasswordInstructions:"POST",resetPassword:"PUT"},g="user",h=function(a){return a.data};c.call(this,f,"Method"),c.call(this,e,"Path"),this.resourceName=function(a){return void 0===a?g:(g=a,this)},this.parse=function(a){return"function"!=typeof a?h:(h=a,this)},this.$get=["$q","$http","$rootScope",function(a,c,e){function f(a){return j._currentUser=a,a}function g(){f(null),j._promise=null}function i(a){return function(b){return e.$broadcast("devise:"+a,b),b}}var j={_currentUser:null,parse:h,_promise:null,reset:function(){g(),j.currentUser()},login:function(a,d){var e=arguments.length>0,g=j.isAuthenticated();return a=a||{},c(b("login",a,d)).then(j.parse).then(f).then(function(a){return e&&!g?i("new-session")(a):a}).then(i("login"))},logout:function(a){var e=d(j._currentUser);return c(b("logout",void 0,a)).then(g).then(e).then(i("logout"))},register:function(a,d){return a=a||{},c(b("register",a,d)).then(j.parse).then(f).then(i("new-registration"))},sendResetPasswordInstructions:function(a){return a=a||{},c(b("sendResetPasswordInstructions",a)).then(j.parse).then(i("send-reset-password-instructions-successfully"))},resetPassword:function(a){return a=a||{},c(b("resetPassword",a)).then(j.parse).then(f).then(i("reset-password-successfully"))},currentUser:function(){return j.isAuthenticated()?a.when(j._currentUser):(null===j._promise&&(j._promise=j.login()),j._promise)},isAuthenticated:function(){return!!j._currentUser}};return j}]})}(angular);
/*
 * angular-loading-bar
 *
 * intercepts XHR requests and creates a loading bar.
 * Based on the excellent nprogress work by rstacruz (more info in readme)
 *
 * (c) 2013 Wes Cruver
 * License: MIT
 */



(function() {

'use strict';

// Alias the loading bar for various backwards compatibilities since the project has matured:
angular.module('angular-loading-bar', ['cfp.loadingBarInterceptor']);
angular.module('chieffancypants.loadingBar', ['cfp.loadingBarInterceptor']);


/**
 * loadingBarInterceptor service
 *
 * Registers itself as an Angular interceptor and listens for XHR requests.
 */
angular.module('cfp.loadingBarInterceptor', ['cfp.loadingBar'])
  .config(['$httpProvider', function ($httpProvider) {

    var interceptor = ['$q', '$cacheFactory', '$timeout', '$rootScope', '$log', 'cfpLoadingBar', function ($q, $cacheFactory, $timeout, $rootScope, $log, cfpLoadingBar) {

      /**
       * The total number of requests made
       */
      var reqsTotal = 0;

      /**
       * The number of requests completed (either successfully or not)
       */
      var reqsCompleted = 0;

      /**
       * The amount of time spent fetching before showing the loading bar
       */
      var latencyThreshold = cfpLoadingBar.latencyThreshold;

      /**
       * $timeout handle for latencyThreshold
       */
      var startTimeout;


      /**
       * calls cfpLoadingBar.complete() which removes the
       * loading bar from the DOM.
       */
      function setComplete() {
        $timeout.cancel(startTimeout);
        cfpLoadingBar.complete();
        reqsCompleted = 0;
        reqsTotal = 0;
      }

      /**
       * Determine if the response has already been cached
       * @param  {Object}  config the config option from the request
       * @return {Boolean} retrns true if cached, otherwise false
       */
      function isCached(config) {
        var cache;
        var defaultCache = $cacheFactory.get('$http');
        var defaults = $httpProvider.defaults;

        // Choose the proper cache source. Borrowed from angular: $http service
        if ((config.cache || defaults.cache) && config.cache !== false &&
          (config.method === 'GET' || config.method === 'JSONP')) {
            cache = angular.isObject(config.cache) ? config.cache
              : angular.isObject(defaults.cache) ? defaults.cache
              : defaultCache;
        }

        var cached = cache !== undefined ?
          cache.get(config.url) !== undefined : false;

        if (config.cached !== undefined && cached !== config.cached) {
          return config.cached;
        }
        config.cached = cached;
        return cached;
      }


      return {
        'request': function(config) {
          // Check to make sure this request hasn't already been cached and that
          // the requester didn't explicitly ask us to ignore this request:
          if (!config.ignoreLoadingBar && !isCached(config)) {
            $rootScope.$broadcast('cfpLoadingBar:loading', {url: config.url});
            if (reqsTotal === 0) {
              startTimeout = $timeout(function() {
                cfpLoadingBar.start();
              }, latencyThreshold);
            }
            reqsTotal++;
            cfpLoadingBar.set(reqsCompleted / reqsTotal);
          }
          return config;
        },

        'response': function(response) {
          if (!response.config.ignoreLoadingBar && !isCached(response.config)) {
            reqsCompleted++;
            $rootScope.$broadcast('cfpLoadingBar:loaded', {url: response.config.url, result: response});
            if (reqsCompleted >= reqsTotal) {
              setComplete();
            } else {
              cfpLoadingBar.set(reqsCompleted / reqsTotal);
            }
          }
          return response;
        },

        'responseError': function(rejection) {
          if (!rejection.config) {
           $log.error('Other interceptors are not returning config object \n https://github.com/chieffancypants/angular-loading-bar/pull/50');
          }
          if (!rejection.config.ignoreLoadingBar && !isCached(rejection.config)) {
            reqsCompleted++;
            $rootScope.$broadcast('cfpLoadingBar:loaded', {url: rejection.config.url, result: rejection});
            if (reqsCompleted >= reqsTotal) {
              setComplete();
            } else {
              cfpLoadingBar.set(reqsCompleted / reqsTotal);
            }
          }
          return $q.reject(rejection);
        }
      };
    }];

    $httpProvider.interceptors.push(interceptor);
  }]);


/**
 * Loading Bar
 *
 * This service handles adding and removing the actual element in the DOM.
 * Generally, best practices for DOM manipulation is to take place in a
 * directive, but because the element itself is injected in the DOM only upon
 * XHR requests, and it's likely needed on every view, the best option is to
 * use a service.
 */
angular.module('cfp.loadingBar', [])
  .provider('cfpLoadingBar', function() {

    this.includeSpinner = true;
    this.includeBar = true;
    this.latencyThreshold = 100;
    this.startSize = 0.02;
    this.parentSelector = 'body';
    this.spinnerTemplate = '<div id="loading-bar-spinner"><div class="spinner-icon"></div></div>';
    this.loadingBarTemplate = '<div id="loading-bar"><div class="bar"><div class="peg"></div></div></div>';

    this.$get = ['$injector', '$document', '$timeout', '$rootScope', function ($injector, $document, $timeout, $rootScope) {
      var $animate;
      var $parentSelector = this.parentSelector,
        loadingBarContainer = angular.element(this.loadingBarTemplate),
        loadingBar = loadingBarContainer.find('div').eq(0),
        spinner = angular.element(this.spinnerTemplate);

      var incTimeout,
        completeTimeout,
        started = false,
        status = 0;

      var includeSpinner = this.includeSpinner;
      var includeBar = this.includeBar;
      var startSize = this.startSize;

      /**
       * Inserts the loading bar element into the dom, and sets it to 2%
       */
      function _start() {
        if (!$animate) {
          $animate = $injector.get('$animate');
        }

        var $parent = $document.find($parentSelector).eq(0);
        $timeout.cancel(completeTimeout);

        // do not continually broadcast the started event:
        if (started) {
          return;
        }

        $rootScope.$broadcast('cfpLoadingBar:started');
        started = true;

        if (includeBar) {
          $animate.enter(loadingBarContainer, $parent, angular.element($parent[0].lastChild));
        }

        if (includeSpinner) {
          $animate.enter(spinner, $parent, angular.element($parent[0].lastChild));
        }

        _set(startSize);
      }

      /**
       * Set the loading bar's width to a certain percent.
       *
       * @param n any value between 0 and 1
       */
      function _set(n) {
        if (!started) {
          return;
        }
        var pct = (n * 100) + '%';
        loadingBar.css('width', pct);
        status = n;

        // increment loadingbar to give the illusion that there is always
        // progress but make sure to cancel the previous timeouts so we don't
        // have multiple incs running at the same time.
        $timeout.cancel(incTimeout);
        incTimeout = $timeout(function() {
          _inc();
        }, 250);
      }

      /**
       * Increments the loading bar by a random amount
       * but slows down as it progresses
       */
      function _inc() {
        if (_status() >= 1) {
          return;
        }

        var rnd = 0;

        // TODO: do this mathmatically instead of through conditions

        var stat = _status();
        if (stat >= 0 && stat < 0.25) {
          // Start out between 3 - 6% increments
          rnd = (Math.random() * (5 - 3 + 1) + 3) / 100;
        } else if (stat >= 0.25 && stat < 0.65) {
          // increment between 0 - 3%
          rnd = (Math.random() * 3) / 100;
        } else if (stat >= 0.65 && stat < 0.9) {
          // increment between 0 - 2%
          rnd = (Math.random() * 2) / 100;
        } else if (stat >= 0.9 && stat < 0.99) {
          // finally, increment it .5 %
          rnd = 0.005;
        } else {
          // after 99%, don't increment:
          rnd = 0;
        }

        var pct = _status() + rnd;
        _set(pct);
      }

      function _status() {
        return status;
      }

      function _completeAnimation() {
        status = 0;
        started = false;
      }

      function _complete() {
        if (!$animate) {
          $animate = $injector.get('$animate');
        }

        $rootScope.$broadcast('cfpLoadingBar:completed');
        _set(1);

        $timeout.cancel(completeTimeout);

        // Attempt to aggregate any start/complete calls within 500ms:
        completeTimeout = $timeout(function() {
          var promise = $animate.leave(loadingBarContainer, _completeAnimation);
          if (promise && promise.then) {
            promise.then(_completeAnimation);
          }
          $animate.leave(spinner);
        }, 500);
      }

      return {
        start            : _start,
        set              : _set,
        status           : _status,
        inc              : _inc,
        complete         : _complete,
        includeSpinner   : this.includeSpinner,
        latencyThreshold : this.latencyThreshold,
        parentSelector   : this.parentSelector,
        startSize        : this.startSize
      };


    }];     //
  });       // wtf javascript. srsly
})();       //
;
/*! angular-google-chart 2017-04-16 */
/*
* @description Google Chart Api Directive Module for AngularJS
* @version 1.0.0-beta.1
* @author GitHub Contributors <https://github.com/angular-google-chart/angular-google-chart/graphs/contributors>
* @license MIT
* @year 2013
*/
/* global angular */

(function(){
    angular.module('googlechart', [])
        .run(registerResizeEvent);

    registerResizeEvent.$inject = ['$rootScope', '$window'];

    function registerResizeEvent($rootScope, $window){
        angular.element($window).on('resize', function () {
                $rootScope.$emit('resizeMsg');
            });
    }
})();
/* global angular, google */
(function(){
    angular.module('googlechart')
        .factory('FormatManager', formatManagerFactory);

        function formatManagerFactory(){
            // Handles the processing of Google Charts API Formats
            function FormatManager($google){
                var self = this;
                var oldFormatTemplates = {};
                self.iFormats = {}; // Holds instances of formats (ie. self.iFormats.date[0] = new $google.visualization.DateFormat(params))
                self.applyFormats = applyFormats;

                // apply formats of type to datatable
                function apply(tFormats, dataTable){
                    var i, formatType;
                    for (formatType in tFormats){
                        if (tFormats.hasOwnProperty(formatType)){
                            for (i = 0; i < self.iFormats[formatType].length; i++) {
                                if (tFormats[formatType][i].columnNum < dataTable.getNumberOfColumns()) {
                                    self.iFormats[formatType][i].format(dataTable, tFormats[formatType][i].columnNum);
                                }
                            }
                        }
                    }
                }

                function applyFormat(formatType, FormatClass, tFormats){
                    var i;
                    if (angular.isArray(tFormats[formatType])) {
                        // basic change detection; no need to run if no changes
                        if (!angular.equals(tFormats[formatType], oldFormatTemplates[formatType])) {
                            oldFormatTemplates[formatType] = tFormats[formatType];
                            self.iFormats[formatType] = [];

                            if (formatType === 'color') {
                                instantiateColorFormatters(tFormats);
                            } else {
                                for (i = 0; i < tFormats[formatType].length; i++) {
                                    self.iFormats[formatType].push(new FormatClass(
                                        tFormats[formatType][i])
                                    );
                                }
                            }
                        }
                    }
                }

                function applyFormats(dataTable, tFormats, customFormatters) {
                    var formatType, FormatClass, requiresHtml = false;
                    if (!angular.isDefined(tFormats) || !angular.isDefined(dataTable)){
                        return { requiresHtml: false };
                    }
                    for (formatType in tFormats){
                        if (tFormats.hasOwnProperty(formatType)){
                            FormatClass = getFormatClass(formatType, customFormatters);
                            if (!angular.isFunction(FormatClass)){
                                // if no class constructor was returned,
                                // there's no point in completing cycle
                                continue;
                            }
                            applyFormat(formatType, FormatClass, tFormats);

                            //Many formatters require HTML tags to display special formatting
                            if (formatType === 'arrow' || formatType === 'bar' || formatType === 'color') {
                                requiresHtml = true;
                            }
                        }
                    }
                    apply(tFormats, dataTable);
                    return { requiresHtml: requiresHtml };
                }

                function instantiateColorFormatters(tFormats){
                    var t, colorFormat, i, data, formatType = 'color';
                    for (t = 0; t < tFormats[formatType].length; t++) {
                        colorFormat = new $google.visualization.ColorFormat();

                        for (i = 0; i < tFormats[formatType][t].formats.length; i++) {
                            data = tFormats[formatType][t].formats[i];

                            if (typeof (data.fromBgColor) !== 'undefined' && typeof (data.toBgColor) !== 'undefined') {
                                colorFormat.addGradientRange(data.from, data.to, data.color, data.fromBgColor, data.toBgColor);
                            } else {
                                colorFormat.addRange(data.from, data.to, data.color, data.bgcolor);
                            }
                        }

                        self.iFormats[formatType].push(colorFormat);
                    }
                }

                function getFormatClass(formatType, customFormatters){
                    var className = formatType.charAt(0).toUpperCase() + formatType.slice(1).toLowerCase() + "Format";
                    if ($google.visualization.hasOwnProperty(className)){
                        return google.visualization[className];
                    } else if (angular.isDefined(customFormatters) && customFormatters.hasOwnProperty(formatType)) {
                        return customFormatters[formatType];
                    }
                    return;
                }
            }

            return FormatManager;
        }
})();
/* global angular, google */

(function() {

    angular.module('googlechart')
        .controller('GoogleChartController', GoogleChartController);

    GoogleChartController.$inject = ['$scope', '$element', '$attrs', '$injector', '$timeout', '$window', '$rootScope', 'GoogleChartService'];

    function GoogleChartController($scope, $element, $attrs, $injector, $timeout, $window, $rootScope, GoogleChartService) {
        var self = this;
        var resizeHandler;
        var googleChartService;

        init();

        function cleanup() {
            resizeHandler();
        }

        function draw() {
            if (!draw.triggered && (self.chart !== undefined)) {
                draw.triggered = true;
                $timeout(setupAndDraw, 0, true);
            }
            else if (self.chart !== undefined) {
                $timeout.cancel(draw.recallTimeout);
                draw.recallTimeout = $timeout(draw, 10);
            }
        }

        // Watch function calls this.
        function drawAsync() {
            googleChartService.getReadyPromise()
                .then(draw);
        }

        //setupAndDraw() calls this.
        function drawChartWrapper() {
            googleChartService.draw();
            draw.triggered = false;
        }

        function init() {
            // Instantiate service
            googleChartService = new GoogleChartService();

            self.registerChartListener = googleChartService.registerChartListener;
            self.registerWrapperListener = googleChartService.registerWrapperListener;
            self.registerServiceListener = googleChartService.registerServiceListener;

            /* Watches, to refresh the chart when its data, formatters, options, view,
            or type change. All other values intentionally disregarded to avoid double
            calls to the draw function. Please avoid making changes to these objects
            directly from this directive.*/
            $scope.$watch(watchValue, watchHandler, true); // true is for deep object equality checking

            // Redraw the chart if the window is resized
            resizeHandler = $rootScope.$on('resizeMsg', drawAsync);

            //Cleanup resize handler.
            $scope.$on('$destroy', cleanup);
        }

        function setupAndDraw() {
            googleChartService.setup($element,
            self.chart.type,
            self.chart.data,
            self.chart.view,
            self.chart.options,
            self.chart.formatters,
            self.chart.customFormatters);

            $timeout(drawChartWrapper);
        }

        function watchHandler() {
            self.chart = $scope.$eval($attrs.chart);
            drawAsync();
        }

        function watchValue() {
            var chartObject = $scope.$eval($attrs.chart);
            if (angular.isDefined(chartObject) && angular.isObject(chartObject)) {
                return {
                    customFormatters: chartObject.customFormatters,
                    data: chartObject.data,
                    formatters: chartObject.formatters,
                    options: chartObject.options,
                    type: chartObject.type,
                    view: chartObject.view
                };
            }
        }
    }
})();
/* global angular */
(function(){
    angular.module('googlechart')
        .directive('agcBeforeDraw', beforeDrawDirective);

    function beforeDrawDirective(){
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs, googleChartController){
                callback.$inject=['chartWrapper'];
                function callback(chartWrapper){
                    scope.$apply(function (){
                        scope.$eval(attrs.agcBeforeDraw, {chartWrapper: chartWrapper});
                    });
                }
                googleChartController.registerServiceListener('beforeDraw', callback, this);
            }
        };
    }
})();

/* global angular */
(function() {
    angular.module('googlechart')
        .provider('agcGstaticLoader', agcGstaticLoaderProvider);

    function agcGstaticLoaderProvider(){
        var useBothLoaders = false;
        var version = "current";
        var options = {
            packages: ["corechart"]
        };

        /** Add Google Visualization API package to loader configuration. */
        this.addPackage = function(packageName){
            options.packages = options.packages || [];
            options.packages.push(packageName);

            if (needsBothLoaders())
                useBothLoaders = true;
            return this;
        };

        /** Delete key from underlying loader configuration. */
        this.clearOption = function(key){
            delete this._options[key];
            return this;
        };

        /** Remove Google Visualization API package from loader configuration. */
        this.removePackage = function(packageName){
            options.packages = this._options.packages || [];
            var index = options.packages.indexOf(packageName);
            if (index > -1)
                options.packages.splice(index, 1);
            return this;
        };

        /** Set option to value. See developers.google.com/chart/ for information about loader options. */
        this.setOption = function(key, value){
            options[key] = value;
            return this;
        };

        /** Sets underlying loader options object to value provided. Replaces everything, included packages. */
        this.setOptions = function(value){
            options = value;
            return this;
        };

        /** Set Google Visualization API frozen version to load. Default: 'current' */
        this.setVersion = function(value){
            version = value;
            if (needsBothLoaders())
                useBothLoaders = true;
            return this;
        };

        /** Override for internal setting to add both loader scripts. Required under certain conditions. */
        this.useBothLoaders = function(value){
            if (typeof value === 'undefined')
                value = true;

            useBothLoaders = !!value;
            return this;
        };

        /** Check if conditions are correct to need both JSAPI and gstatic loader scripts. */
        function needsBothLoaders(){
            var versionCheck, packageCheck;

            versionCheck = !isNaN(+version) && +version < 45;
            packageCheck = options.packages.indexOf("geochart") > -1 ||
                options.packages.indexOf("map") > -1;

            return versionCheck && packageCheck;
        }

        this.$get = function($rootScope, $q, agcScriptTagHelper){

            function scriptLoadCallback(){
                if (!google ||
                    !google.charts ||
                    typeof google.charts.setOnLoadCallback !== 'function'){
                    return $q.reject("Google charts library loader not present.");
                }

                var deferred = $q.defer();

                google.charts.load(version, options);

                google.charts.setOnLoadCallback(function(){
                    $rootScope.$apply(function(){
                        deferred.resolve(google);
                    });
                });

                return deferred.promise;
            }

            var tagPromise = agcScriptTagHelper("https://www.gstatic.com/charts/loader.js");
            if (useBothLoaders)
                tagPromise = tagPromise.then(function(){ return agcScriptTagHelper("https://www.google.com/jsapi");});
            var libraryPromise = tagPromise.then(scriptLoadCallback);

            return libraryPromise;
        };
        this.$get.$inject = ["$rootScope", "$q", "agcScriptTagHelper"];
    }
})();

/* global angular */
(function() {
    angular.module("googlechart")
        .factory("agcJsapiLoader", agcJsapiLoaderFactory);

    agcJsapiLoaderFactory.$inject = ["$log", "$rootScope", "$q", "agcScriptTagHelper", "googleChartApiConfig"];
    function agcJsapiLoaderFactory($log, $rootScope, $q, agcScriptTagHelper, googleChartApiConfig){
        $log.debug("[AGC] jsapi loader invoked.");
        var apiReady = $q.defer();
        // Massage configuration as needed.
        googleChartApiConfig.optionalSettings = googleChartApiConfig.optionalSettings || {};

        var userDefinedCallback = googleChartApiConfig.optionalSettings.callback;

        var settings = {
            callback: function() {
                if (angular.isFunction(userDefinedCallback))
                    userDefinedCallback.call(this);

                $rootScope.$apply(function(){
                    apiReady.resolve(google);
                });
            }
        };

        settings = angular.extend({}, googleChartApiConfig.optionalSettings, settings);

        $log.debug("[AGC] Calling tag helper...");
        agcScriptTagHelper("//www.google.com/jsapi")
            .then(function(){
                $log.debug("[AGC] Tag helper returned success.");
                window.google.load('visualization', googleChartApiConfig.version || '1', settings);
            })
            .catch(function(){
                $log.error("[AGC] Tag helper returned error. Script may have failed to load.");
                apiReady.reject();
            });

        return apiReady.promise;
    }
})();

/* global angular */
(function(){
    angular.module("googlechart")
        .provider("agcLibraryLoader", AgcLibraryLoaderProvider);

    AgcLibraryLoaderProvider.$inject = ["$injector"];

    function AgcLibraryLoaderProvider($injector){

        var DEFAULT_LOADER = "Jsapi";

        this.$get = function(loader){
            return loader;
        };

        this.setLoader = function(loaderName){
            if ($injector.has(this.getProviderName(loaderName)))
                this.$get.$inject = [this.getProviderName(loaderName)];
            else {
                console.warn("[Angular-GoogleChart] Loader type \"" + loaderName + "\" doesn't exist. Defaulting to JSAPI loader.");
                this.$get.$inject = [this.getProviderName(DEFAULT_LOADER)];
            }
        };

        this.getProviderName = function(loaderName){
            loaderName = loaderName.charAt(0).toUpperCase() + loaderName.slice(1);
            return "agc" + loaderName + "Loader";
        };

        this.setLoader(DEFAULT_LOADER);
    }
})();

/* global angular */
(function(){
    angular.module("googlechart")
        .provider("agcNullLoader", AgcNullLoaderProvider);

    /** Fake loader strategy. Use this if you're loading the google charts library
     *  in some non-standard way.
     */

    function AgcNullLoaderProvider(){
        this._hasTrigger = false;
        this._libraryOverride = null;
        this._triggerFunction = (function(){
            // If the trigger function is called before $get,
            // just act as if it was never fetched.
            if (this._deferred)
                this._deferred.resolve(this._libraryOverride || google);
            else
                this._hasTrigger = false;
        }).bind(this);
        this._deferred = null;
    }

    AgcNullLoaderProvider.prototype.$get = function($q){
        this._deferred = $q.defer();

        if (!this._hasTrigger)
            this._deferred.resolve(this._libraryOverride || google);

        return this._deferred.promise;
    };
    AgcNullLoaderProvider.prototype.$get.$inject = ["$q"];

    AgcNullLoaderProvider.prototype.getTriggerFunction = function(){
        // Records that the trigger function was fetched.
        // Will wait for it to be called to resolve.
        // This is useful for manual, but deferred, loading of
        // the google charts library.
        this._hasTrigger = true;
        return this._triggerFunction;
    };

    /** Forces angular-google-chart to load this object as the google library.
     *  Makes no checks to ensure that the object passed is compatible. Use
     *  at own risk.
     */
    AgcNullLoaderProvider.prototype.overrideLibrary = function(library){
        this._libraryOverride = library;
    };
})();

(function(){
    angular.module('googlechart')
        .directive('agcOnClick', onClickDirective);

    function onClickDirective(){
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs, googleChartController){
                callback.$inject = ['args', 'chart', 'chartWrapper'];
                function callback(args, chart, chartWrapper){
                    scope.$apply(function (){
                        scope.$eval(attrs.agcOnClick, {args: args, chart: chart, chartWrapper: chartWrapper});
                    });
                }
                googleChartController.registerChartListener('click', callback, this);
            }
        };
    }
})();

/* global angular */
(function(){
    angular.module('googlechart')
        .directive('agcOnError', onErrorDirective);
    function onErrorDirective(){
        return{
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs, googleChartController){
                callback.$inject = ['chartWrapper', 'chart', 'args'];
                function callback(chartWrapper, chart, args){
                    var returnValues = {
                        chartWrapper: chartWrapper,
                        chart: chart,
                        args: args,
                        error: args[0],
                        err: args[0],
                        id: args[0].id,
                        message: args[0].message
                    };
                    scope.$apply(function(){
                        scope.$eval(attrs.agcOnError, returnValues);
                    });
                }
                googleChartController.registerWrapperListener('error', callback, this);
            }
        };
    }
})();
/* global angular */

(function(){
    angular.module('googlechart')
        .directive('agcOnMouseout', agcOnMouseoutDirective);

    function agcOnMouseoutDirective(){
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs, googleChartController){
                callback.$inject = ['args', 'chart', 'chartWrapper'];
                function callback(args, chart, chartWrapper){
                    var returnParams = {
                        chartWrapper: chartWrapper,
                        chart: chart,
                        args: args,
                        column: args[0].column,
                        row: args[0].row
                    };
                    scope.$apply(function () {
                        scope.$eval(attrs.agcOnMouseout, returnParams);
                    });
                }
                googleChartController.registerChartListener('onmouseout', callback, this);
            }
        };
    }
})();
/* global angular */

(function(){
    angular.module('googlechart')
        .directive('agcOnMouseover', agcOnMouseoverDirective);

    function agcOnMouseoverDirective(){
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs, googleChartController){
                callback.$inject = ['args', 'chart', 'chartWrapper'];
                function callback(args, chart, chartWrapper){
                    var returnParams = {
                        chartWrapper: chartWrapper,
                        chart: chart,
                        args: args,
                        column: args[0].column,
                        row: args[0].row
                    };
                    scope.$apply(function () {
                        scope.$eval(attrs.agcOnMouseover, returnParams);
                    });
                }
                googleChartController.registerChartListener('onmouseover', callback, this);
            }
        };
    }
})();
/* global angular */

(function(){
    angular.module('googlechart')
        .directive('agcOnRangeChange', agcOnRangeChangeDirective);

    function agcOnRangeChangeDirective(){
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs, googleChartController){
                callback.$inject = ['args', 'chart', 'chartWrapper'];
                function callback(args, chart, chartWrapper){
                    var returnParams = {
                        chartWrapper: chartWrapper,
                        chart: chart,
                        args: args,
                        start: args[0].start,
                        end: args[0].end
                    };
                    scope.$apply(function () {
                        scope.$eval(attrs.agcOnRangeChange, returnParams);
                    });
                }
                googleChartController.registerChartListener('rangechange', callback, this);
            }
        };
    }
})();

/* global angular */
(function(){
    angular.module('googlechart')
        .directive('agcOnReady', onReadyDirective);

    function onReadyDirective(){
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs, googleChartController){
                callback.$inject=['chartWrapper'];
                function callback(chartWrapper){
                    scope.$apply(function (){
                        scope.$eval(attrs.agcOnReady, {chartWrapper: chartWrapper});
                    });
                }
                googleChartController.registerWrapperListener('ready', callback, this);
            }
        };
    }
})();
/* global angular */
(function(){
    angular.module('googlechart')
        .directive('agcOnSelect', onSelectDirective);

    function onSelectDirective(){
        return {
            restrict: 'A',
            scope: false,
            require: 'googleChart',
            link: function(scope, element, attrs, googleChartController){
                callback.$inject = ['chartWrapper', 'chart'];
                function callback(chartWrapper, chart){
                    var selectEventRetParams = { selectedItems: chart.getSelection() };
                    // This is for backwards compatibility for people using 'selectedItem' that only wanted the first selection.
                    selectEventRetParams.selectedItem = selectEventRetParams.selectedItems[0];
                    selectEventRetParams.chartWrapper = chartWrapper;
                    selectEventRetParams.chart = chart;
                    scope.$apply(function () {
                        scope.$eval(attrs.agcOnSelect, selectEventRetParams);
                    });
                }
                googleChartController.registerWrapperListener('select', callback, this);
            }
        };
    }
})();
/* global angular */
(function() {
    angular.module("googlechart")
        .factory("agcScriptTagHelper", agcScriptTagHelperFactory);

    agcScriptTagHelperFactory.$inject = ["$q", "$document"];
    function agcScriptTagHelperFactory($q, $document)
    {
        /** Add a script tag to the document's head section and return an angular
          * promise that resolves when the script has loaded.
          */
        function agcScriptTagHelper(url)
        {
            var deferred = $q.defer();
            var head = $document.find('head');
            var script = angular.element('<script></script>');

            script.attr('type', 'text/javascript');

            script.on('load', onLoad);
            script.on('error', onError);

            script.attr('src', url);

            // This: head.append(script);
            // Adds the tag, but event handles don't work.
            // Workaround is to add element with native appendChild().
            head[0].appendChild(script[0]);

            function onLoad() {
                deferred.resolve();
            }

            function onError() {
                deferred.reject();
            }

            return deferred.promise;
        }

        return agcScriptTagHelper;
    }
})();

/* global angular, google */
/* jshint -W072 */
(function(){
    angular.module('googlechart')
        .directive('googleChart', googleChartDirective);

    googleChartDirective.$inject = [];

    function googleChartDirective() {

        return {
            restrict: 'A',
            scope: false,
            controller: 'GoogleChartController'
        };
    }
})();

/* global angular */
(function(){
    angular.module('googlechart')
        .value('googleChartApiConfig', {
            version: '1',
            optionalSettings: {
                packages: ['corechart']
            }
        });
})();
/* global angular */
(function(){
    angular.module('googlechart')
        .factory('googleChartApiPromise', googleChartApiPromiseFactory);

    googleChartApiPromiseFactory.$inject = ['agcLibraryLoader'];

    /** Here for backward-compatibility only. */
    function googleChartApiPromiseFactory(agcLibraryLoader) {
        return agcLibraryLoader;
    }
})();

/* global angular */
(function() {
    angular.module('googlechart')
        .factory('GoogleChartService', GoogleChartServiceFactory);

    GoogleChartServiceFactory.$inject = ['agcLibraryLoader', '$injector', '$q', 'FormatManager'];

    function GoogleChartServiceFactory(agcLibraryLoader, $injector, $q, FormatManager) {
        function GoogleChartService() {
            var self = this;
            self.draw = draw;
            self.getChartWrapper = getChartWrapper;
            self.getData = getData;
            self.getElement = getElement;
            self.getOption = getOption;
            self.getOptions = getOptions;
            self.getView = getView;
            self.getReadyPromise = getReadyPromise;
            self.isApiReady = isApiReady;
            self.registerChartListener = registerChartListener;
            self.registerServiceListener = registerServiceListener;
            self.registerWrapperListener = registerWrapperListener;
            self.setData = setData;
            self.setElement = setElement;
            self.setOption = setOption;
            self.setOptions = setOptions;
            self.setup = setup;
            self.setView = setView;

            var $google,
                _libraryPromise,
                _apiReady,
                _chartWrapper,
                _element,
                _chartType,
                _data,
                _view,
                _options,
                _formatters,
                _innerVisualization,
                _formatManager,
                _needsUpdate = true,
                _customFormatters,
                _serviceDeferred,
                serviceListeners = {},
                wrapperListeners = {},
                chartListeners = {};

            _init();

            function _activateServiceEvent(eventName) {
                var i;
                if (angular.isArray(serviceListeners[eventName])) {
                    for (i = 0; i < serviceListeners[eventName].length; i++) {
                        serviceListeners[eventName][i]();
                    }
                }
            }

            function _apiLoadFail(reason) {
                // Not sure what to do if this does happen.
                // Post your suggestions in the issues tracker at
                // https://github.com/angular-google-chart/angular-google-chart/
                return reason;
            }

            function _apiLoadSuccess(g) {
                $google = g;
                _apiReady = true;
                _serviceDeferred.resolve();
                return g;
            }


            function _continueSetup() {
                if (!angular.isDefined(_chartWrapper)) {
                    _chartWrapper = new $google.visualization.ChartWrapper({
                        chartType: _chartType,
                        dataTable: _data,
                        view: _view,
                        options: _options,
                        containerId: _element[0]
                    });
                    _registerListenersWithGoogle(_chartWrapper, wrapperListeners);
                }
                else {
                    _chartWrapper.setChartType(_chartType);
                    _chartWrapper.setDataTable(_data);
                    _chartWrapper.setView(_view);
                    _chartWrapper.setOptions(_options);
                }

                if (!_formatManager) {
                    _formatManager = new FormatManager($google);
                }

                if (_formatManager.applyFormats(_chartWrapper.getDataTable(),
                        _formatters, _customFormatters).requiresHtml) {
                    _chartWrapper.setOption('allowHtml', true);
                }

                _needsUpdate = false;
            }

            // Credit for this solution:
            // http://stackoverflow.com/a/20125572/3771976
            function _getSetDescendantProp(obj, desc, value) {
                var arr = desc ? desc.split(".") : [];

                while (arr.length && obj) {
                    var comp = arr.shift();
                    var match = new RegExp("(.+)\\[([0-9]*)\\]").exec(comp);

                    if (value) {
                        if (obj[comp] === undefined) {
                            obj[comp] = {};
                        }

                        if (arr.length === 0) {
                            obj[comp] = value;
                        }
                    }

                    obj = obj[comp];
                }

                return obj;
            }

            function _handleReady() {
                // When the chartWrapper is ready, check to see if the inner chart
                // has changed. If it has, re-register listeners onto that chart.
                if (_innerVisualization !== _chartWrapper.getChart()) {
                    _innerVisualization = _chartWrapper.getChart();
                    _registerListenersWithGoogle(_innerVisualization, chartListeners);
                }
            }

            function _init() {
                _apiReady = false;
                _serviceDeferred = $q.defer();
                //keeps the resulting promise to chain on other actions
                _libraryPromise = agcLibraryLoader
                    .then(_apiLoadSuccess)
                    .catch(_apiLoadFail);

                registerWrapperListener('ready', _handleReady, self);
            }

            function _registerListener(listenerCollection, eventName, listenerFn, listenerObject) {
                // This is the function that will be invoked by the charts API.
                // Passing the wrapper function allows the use of DI for
                // for the called function.
                var listenerWrapper = function() {
                    var locals = {
                        chartWrapper: _chartWrapper,
                        chart: _chartWrapper.getChart(),
                        args: arguments
                    };
                    $injector.invoke(listenerFn, listenerObject || this, locals);
                };

                if (angular.isDefined(listenerCollection) && angular.isObject(listenerCollection)) {
                    if (!angular.isArray(listenerCollection[eventName])) {
                        listenerCollection[eventName] = [];
                    }
                    listenerCollection[eventName].push(listenerWrapper);
                    return function() {
                        if (angular.isDefined(listenerWrapper.googleListenerHandle)) {
                            $google.visualization.events.removeListener(listenerWrapper.googleListenerHandle);
                        }
                        var fnIndex = listenerCollection[eventName].indexOf(listenerWrapper);
                        listenerCollection[eventName].splice(fnIndex, 1);
                        if (listenerCollection[eventName].length === 0) {
                            listenerCollection[eventName] = undefined;
                        }
                    };
                }
            }

            function _registerListenersWithGoogle(eventSource, listenerCollection) {
                for (var eventName in listenerCollection) {
                    if (listenerCollection.hasOwnProperty(eventName) && angular.isArray(listenerCollection[eventName])) {
                        for (var fnIterator = 0; fnIterator < listenerCollection[eventName].length; fnIterator++) {
                            if (angular.isFunction(listenerCollection[eventName][fnIterator])) {
                                listenerCollection[eventName][fnIterator].googleListenerHandle =
                                    $google.visualization.events.addListener(eventSource, eventName, listenerCollection[eventName][fnIterator]);
                            }
                        }
                    }
                }
            }

            function _runDrawCycle() {
                _activateServiceEvent('beforeDraw');
                _chartWrapper.draw();
            }

            /*
            This function does this:
                - waits for API to load, if not already loaded
                - sets up ChartWrapper object (create or update)
                - schedules timeout event to draw chart
            */
            function draw() {
                if (_needsUpdate) {
                    _libraryPromise = _libraryPromise.then(_continueSetup);
                }
                _libraryPromise = _libraryPromise.then(_runDrawCycle());
            }

            function getChartWrapper() {
                // Most get functions on this interface return copies,
                // this one should return reference so as to expose the
                //chart api to users
                return _chartWrapper;
            }

            function getData() {
                var data = _data || {};
                return angular.copy(data);
            }

            function getElement() {
                return _element;
            }

            function getOption(name) {
                var options = _options || {};
                return _getSetDescendantProp(options, name);
            }

            function getOptions() {
                var options = _options || {};
                return angular.copy(options);
            }

            function getReadyPromise() {
                return _serviceDeferred.promise;
            }

            function getView() {
                var view = _view || {};
                return angular.copy(view);
            }

            function isApiReady() {
                return _apiReady;
            }

            function registerChartListener(eventName, listenerFn, listenerObject) {
                return _registerListener(chartListeners, eventName, listenerFn, listenerObject);
            }

            function registerServiceListener(eventName, listenerFn, listenerObject) {
                return _registerListener(serviceListeners, eventName, listenerFn, listenerObject);
            }

            function registerWrapperListener(eventName, listenerFn, listenerObject) {
                return _registerListener(wrapperListeners, eventName, listenerFn, listenerObject);
            }

            function setData(data) {
                if (angular.isDefined(data)) {
                    _data = angular.copy(data);
                    _needsUpdate = true;
                }
            }

            function setElement(element) {
                if (angular.isElement(element) && _element !== element) {
                    _element = element;
                    // clear out the chartWrapper because we're going to need a new one
                    _chartWrapper = null;
                    _needsUpdate = true;
                }
            }

            function setOption(name, value) {
                _options = _options || {};
                _getSetDescendantProp(_options, name, angular.copy(value));
                _needsUpdate = true;
            }

            function setOptions(options) {
                if (angular.isDefined(options)) {
                    _options = angular.copy(options);
                    _needsUpdate = true;
                }
            }

            function setup(element, chartType, data, view, options, formatters, customFormatters) {
                // Keep values if already set,
                // can call setup() with nulls to keep
                // existing values
                _element = element || _element;
                _chartType = chartType || _chartType;
                _data = data || _data;
                _view = view || _view;
                _options = options || _options;
                _formatters = formatters || _formatters;
                _customFormatters = customFormatters || _customFormatters;

                _libraryPromise = _libraryPromise.then(_continueSetup);
            }

            function setView(view) {
                _view = angular.copy(view);
            }
        }
        return GoogleChartService;
    }
})();
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//



//


//

//

//





//






;
