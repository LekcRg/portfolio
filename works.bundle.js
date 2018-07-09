webpackJsonp([0],[function(e,t,r){"use strict";function n(e){return"[object Array]"===c.call(e)}function o(e){return null!==e&&"object"==typeof e}function s(e){return"[object Function]"===c.call(e)}function i(e,t){if(null!==e&&void 0!==e)if("object"!=typeof e&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}var a=r(2),u=r(11),c=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:function(e){return"[object ArrayBuffer]"===c.call(e)},isBuffer:u,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===c.call(e)},isFile:function(e){return"[object File]"===c.call(e)},isBlob:function(e){return"[object Blob]"===c.call(e)},isFunction:s,isStream:function(e){return o(e)&&s(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:i,merge:function e(){function t(t,n){"object"==typeof r[n]&&"object"==typeof t?r[n]=e(r[n],t):r[n]=t}for(var r={},n=0,o=arguments.length;n<o;n++)i(arguments[n],t);return r},extend:function(e,t,r){return i(t,function(t,n){e[n]=r&&"function"==typeof t?a(t,r):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,r){"use strict";(function(t){function n(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o,s=r(0),i=r(13),a={"Content-Type":"application/x-www-form-urlencoded"},u={adapter:("undefined"!=typeof XMLHttpRequest?o=r(3):void 0!==t&&(o=r(3)),o),transformRequest:[function(e,t){return i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},s.forEach(["delete","get","head"],function(e){u.headers[e]={}}),s.forEach(["post","put","patch"],function(e){u.headers[e]=s.merge(a)}),e.exports=u}).call(t,r(7))},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(14),s=r(16),i=r(17),a=r(18),u=r(4),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(19);e.exports=function(e){return new Promise(function(f,l){var p=e.data,d=e.headers;n.isFormData(p)&&delete d["Content-Type"];var h=new XMLHttpRequest,m="onreadystatechange",g=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||a(e.url)||(h=new window.XDomainRequest,m="onload",g=!0,h.onprogress=function(){},h.ontimeout=function(){}),e.auth){var w=e.auth.username||"",v=e.auth.password||"";d.Authorization="Basic "+c(w+":"+v)}if(h.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h[m]=function(){if(h&&(4===h.readyState||g)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in h?i(h.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?h.response:h.responseText,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:t,config:e,request:h};o(f,l,r),h=null}},h.onerror=function(){l(u("Network Error",e,null,h)),h=null},h.ontimeout=function(){l(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var y=r(20),x=(e.withCredentials||a(e.url))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;x&&(d[e.xsrfHeaderName]=x)}if("setRequestHeader"in h&&n.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:h.setRequestHeader(t,e)}),e.withCredentials&&(h.withCredentials=!0),e.responseType)try{h.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),l(e),h=null)}),void 0===p&&(p=null),h.send(p)})}}).call(t,r(7))},function(e,t,r){"use strict";var n=r(15);e.exports=function(e,t,r,o,s){var i=new Error(e);return n(i,t,r,o,s)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},,,function(e,t,r){e.exports=r(10)},function(e,t,r){"use strict";function n(e){var t=new i(e),r=s(i.prototype.request,t);return o.extend(r,i.prototype,t),o.extend(r,t),r}var o=r(0),s=r(2),i=r(12),a=r(1),u=n(a);u.Axios=i,u.create=function(e){return n(o.merge(a,e))},u.Cancel=r(6),u.CancelToken=r(26),u.isCancel=r(5),u.all=function(e){return Promise.all(e)},u.spread=r(27),e.exports=u,e.exports.default=u},function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new i,response:new i}}var o=r(1),s=r(0),i=r(21),a=r(22);n.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),(e=s.merge(o,this.defaults,{method:"get"},e)).method=e.method.toLowerCase();var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},s.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(s.merge(r||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(s.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(4);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(0);e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(n(t)+"="+n(e))}))}),s=i.join("&")}return s&&(e+=(-1===e.indexOf("?")?"?":"&")+s),e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,i={};return e?(n.forEach(e.split("\n"),function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}}),i):i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return!0}},function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,r,o=String(e),s="",i=0,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.charAt(0|i)||(a="=",i%1);s+=a.charAt(63&t>>8-i%1*8)){if((r=o.charCodeAt(i+=.75))>255)throw new n;t=t<<8|r}return s}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(0);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(0),s=r(23),i=r(5),a=r(1),u=r(24),c=r(25);e.exports=function(e){return n(e),e.baseURL&&!u(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(n(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(6);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";var n=document.querySelector("#hamburger"),o=document.querySelector("#fs-navigation");n.addEventListener("click",function(e){e.preventDefault,o.classList.toggle("is-active"),this.classList.toggle("is-active")})},,,,,,,,function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=n(r(8));r(28),r(37),r(29);var s=r(38),i=n(r(9));new o.default({el:".works-form",data:{form:{name:"",mail:"",message:""},response:""},methods:{validateWorksForm:function(){var e=this;i.default.post("http://loftschool.ozpkmsimply.tmweb.ru/feedback.php",this.form).then(function(t){console.log(t.data),e.response=t.data})},addErrorClass:function(e){e.target.classList.add("works__form--error"),e.target.nextSibling.classList.add("input__error--active"),e.target.nextSibling.classList.add("input__error--active")},removeErrorClass:function(e){e.target.classList.remove("works__form--error"),setTimeout(function(){e.target.nextSibling.classList.remove("input__error--active")},1e3)}}}),console.log("sdfasf"),s.blur.set(),window.onresize=function(){s.blur.set(),console.log("sadf")}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=n(r(8)),s=n(r(9));s.default.defaults.baseURL="http://webdev-api.loftschool.com/";var i={template:"#slider-buttons",props:{works:Array,currentIndex:Number},methods:{slide:function(e){this.$emit("slide",e)},getNewArray:function(e){var t=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(this.works));switch(e){case"prev":return t.unshift(t.pop()),t[this.currentIndex];case"next":return t.push(t.shift()),t[this.currentIndex]}}}},a={template:"#slider-pic",props:{work:Object}},u={template:"#slider-info",props:{work:Object},methods:{callback:function(e){console.log(e)},enterHandler:function(e,t){var r=e.innerText.trim().split("").map(function(e){return"<span>"+e+"</span>"}).join("");e.innerHTML=r;var n=Array.from(e.children),o=0;!function e(r){var s=r[o],i=setTimeout(function(){e(n)},20);s.classList.add("jackInTheBox"),++o>=r.length&&(clearTimeout(i),t())}(n)}}};new o.default({el:"#slider-wrapper",components:{info:u,pictures:a,buttons:i},data:{works:[],currentWork:{},currentIndex:0},watch:{currentIndex:function(){this.currentWork=this.works[this.currentIndex],console.log(this.currentIndex+" "+this.works.length)}},created:function(){var e=this;s.default.get("/works/23").then(function(t){e.works=t.data,e.currentWork=e.works[0]})},methods:{handleSlide:function(e){console.log(e),"prev"==e?0==this.currentIndex?this.currentIndex=this.works.length-1:this.currentIndex--:"next"==e&&(this.currentIndex==this.works.length-1?this.currentIndex=0:this.currentIndex++)}},template:"#slider"})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,s,i;t.blur=(n={bgBlock:".works-about",blurBlock:".works-about__blur",blurWrapper:".works-about__contact-card"},o=document.querySelector(n.bgBlock),s=document.querySelector(n.blurBlock),i=document.querySelector(n.blurWrapper),{set:function(){var e=o.offsetWidth,t=o.offsetHeight,r=i.offsetTop,n=s.style,a=parseInt(getComputedStyle(o).backgroundPositionY)/100;"auto"!==getComputedStyle(o).backgroundSize?e>t/1.0608?(t=1.0608*e,n.backgroundSize=e+"px auto",n.backgroundPositionY=-r-(t-o.offsetHeight)*a+"px"):(n.backgroundSize="auto "+t+"px",n.backgroundPositionY=-r+"px"):(n.backgroundSize="auto",n.backgroundPositionY=-r-(1273-t)*a+"px")}})}],[36]);