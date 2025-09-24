(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function t(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(s){if(s.ep)return;s.ep=!0;const c=t(s);fetch(s.href,c)}})();const rc=()=>{};var Jr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},sc=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const c=n[t++];e[r++]=String.fromCharCode((s&31)<<6|c&63)}else if(s>239&&s<365){const c=n[t++],h=n[t++],p=n[t++],w=((s&7)<<18|(c&63)<<12|(h&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(w>>10)),e[r++]=String.fromCharCode(56320+(w&1023))}else{const c=n[t++],h=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(c&63)<<6|h&63)}}return e.join("")},Qs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const c=n[s],h=s+1<n.length,p=h?n[s+1]:0,w=s+2<n.length,E=w?n[s+2]:0,S=c>>2,b=(c&3)<<4|p>>4;let A=(p&15)<<2|E>>6,x=E&63;w||(x=64,h||(A=64)),r.push(t[S],t[b],t[A],t[x])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ys(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):sc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const c=t[n.charAt(s++)],p=s<n.length?t[n.charAt(s)]:0;++s;const E=s<n.length?t[n.charAt(s)]:64;++s;const b=s<n.length?t[n.charAt(s)]:64;if(++s,c==null||p==null||E==null||b==null)throw new oc;const A=c<<2|p>>4;if(r.push(A),E!==64){const x=p<<4&240|E>>2;if(r.push(x),b!==64){const L=E<<6&192|b;r.push(L)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ac=function(n){const e=Ys(n);return Qs.encodeByteArray(e,!0)},wn=function(n){return ac(n).replace(/\./g,"")},Zs=function(n){try{return Qs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=()=>cc().__FIREBASE_DEFAULTS__,lc=()=>{if(typeof process>"u"||typeof Jr>"u")return;const n=Jr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zs(n[1]);return e&&JSON.parse(e)},ki=()=>{try{return rc()||hc()||lc()||uc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},eo=n=>ki()?.emulatorHosts?.[n],dc=n=>{const e=eo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},to=()=>ki()?.config,no=n=>ki()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function io(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...n};return[wn(JSON.stringify(t)),wn(JSON.stringify(h)),""].join(".")}const Lt={};function gc(){const n={prod:[],emulator:[]};for(const e of Object.keys(Lt))Lt[e]?n.emulator.push(e):n.prod.push(e);return n}function mc(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Xr=!1;function ro(n,e){if(typeof window>"u"||typeof document>"u"||!Ht(window.location.host)||Lt[n]===e||Lt[n]||Xr)return;Lt[n]=e;function t(A){return`__firebase__banner__${A}`}const r="__firebase__banner",c=gc().prod.length>0;function h(){const A=document.getElementById(r);A&&A.remove()}function p(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function w(A,x){A.setAttribute("width","24"),A.setAttribute("id",x),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function E(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Xr=!0,h()},A}function S(A,x){A.setAttribute("id",x),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function b(){const A=mc(r),x=t("text"),L=document.getElementById(x)||document.createElement("span"),V=t("learnmore"),U=document.getElementById(V)||document.createElement("a"),X=t("preprendIcon"),Y=document.getElementById(X)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const Z=A.element;p(Z),S(U,V);const Te=E();w(Y,X),Z.append(Y,L,U,Te),document.body.appendChild(Z)}c?(L.innerText="Preview backend disconnected.",Y.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Y.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function _c(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function so(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ic(){const n=q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oo(){try{return typeof indexedDB=="object"}catch{return!1}}function ao(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}function vc(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="FirebaseError";class ae extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Ec,Object.setPrototypeOf(this,ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rt.prototype.create)}}class rt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,c=this.errors[e],h=c?Tc(c,r):"Error",p=`${this.serviceName}: ${h} (${s}).`;return new ae(s,p,r)}}function Tc(n,e){return n.replace(Ac,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ac=/\{\$([^}]+)}/g;function Sc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fe(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const c=n[s],h=e[s];if(Yr(c)&&Yr(h)){if(!Fe(c,h))return!1}else if(c!==h)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Yr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bc(n,e){const t=new Cc(n,e);return t.subscribe.bind(t)}class Cc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Rc(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ci),s.error===void 0&&(s.error=ci),s.complete===void 0&&(s.complete=ci);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Rc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ci(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc=1e3,kc=2,Oc=14400*1e3,Dc=.5;function Qr(n,e=Pc,t=kc){const r=e*Math.pow(t,n),s=Math.round(Dc*r*(Math.random()-.5)*2);return Math.min(Oc,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n){return n&&n._delegate?n._delegate:n}class oe{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fc;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mc(e))try{this.getOrInitializeService({instanceIdentifier:qe})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:s});r.resolve(c)}catch{}}}}clearInstance(e=qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qe){return this.instances.has(e)}getOptions(e=qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[c,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(c);r===p&&h.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const c=this.instances.get(r);return c&&e(c,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lc(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qe){return this.component?this.component.multipleInstances?e:qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lc(n){return n===qe?void 0:n}function Mc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const xc={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},Fc=D.INFO,Vc={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},jc=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Vc[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kn{constructor(e){this.name=e,this._logLevel=Fc,this._logHandler=jc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const Bc=(n,e)=>e.some(t=>n instanceof t);let Zr,es;function $c(){return Zr||(Zr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hc(){return es||(es=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const co=new WeakMap,Ii=new WeakMap,ho=new WeakMap,hi=new WeakMap,Oi=new WeakMap;function Wc(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",c),n.removeEventListener("error",h)},c=()=>{t(Ue(n.result)),s()},h=()=>{r(n.error),s()};n.addEventListener("success",c),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&co.set(t,n)}).catch(()=>{}),Oi.set(e,n),e}function zc(n){if(Ii.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",h),n.removeEventListener("abort",h)},c=()=>{t(),s()},h=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",c),n.addEventListener("error",h),n.addEventListener("abort",h)});Ii.set(n,e)}let vi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ii.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ho.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ue(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gc(n){vi=n(vi)}function qc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(li(this),e,...t);return ho.set(r,e.sort?e.sort():[e]),Ue(r)}:Hc().includes(n)?function(...e){return n.apply(li(this),e),Ue(co.get(this))}:function(...e){return Ue(n.apply(li(this),e))}}function Kc(n){return typeof n=="function"?qc(n):(n instanceof IDBTransaction&&zc(n),Bc(n,$c())?new Proxy(n,vi):n)}function Ue(n){if(n instanceof IDBRequest)return Wc(n);if(hi.has(n))return hi.get(n);const e=Kc(n);return e!==n&&(hi.set(n,e),Oi.set(e,n)),e}const li=n=>Oi.get(n);function lo(n,e,{blocked:t,upgrade:r,blocking:s,terminated:c}={}){const h=indexedDB.open(n,e),p=Ue(h);return r&&h.addEventListener("upgradeneeded",w=>{r(Ue(h.result),w.oldVersion,w.newVersion,Ue(h.transaction),w)}),t&&h.addEventListener("blocked",w=>t(w.oldVersion,w.newVersion,w)),p.then(w=>{c&&w.addEventListener("close",()=>c()),s&&w.addEventListener("versionchange",E=>s(E.oldVersion,E.newVersion,E))}).catch(()=>{}),p}const Jc=["get","getKey","getAll","getAllKeys","count"],Xc=["put","add","delete","clear"],ui=new Map;function ts(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ui.get(e))return ui.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=Xc.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Jc.includes(t)))return;const c=async function(h,...p){const w=this.transaction(h,s?"readwrite":"readonly");let E=w.store;return r&&(E=E.index(p.shift())),(await Promise.all([E[t](...p),s&&w.done]))[0]};return ui.set(e,c),c}Gc(n=>({...n,get:(e,t,r)=>ts(e,t)||n.get(e,t,r),has:(e,t)=>!!ts(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qc(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Qc(n){return n.getComponent()?.type==="VERSION"}const Ei="@firebase/app",ns="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new kn("@firebase/app"),Zc="@firebase/app-compat",eh="@firebase/analytics-compat",th="@firebase/analytics",nh="@firebase/app-check-compat",ih="@firebase/app-check",rh="@firebase/auth",sh="@firebase/auth-compat",oh="@firebase/database",ah="@firebase/data-connect",ch="@firebase/database-compat",hh="@firebase/functions",lh="@firebase/functions-compat",uh="@firebase/installations",dh="@firebase/installations-compat",fh="@firebase/messaging",ph="@firebase/messaging-compat",gh="@firebase/performance",mh="@firebase/performance-compat",yh="@firebase/remote-config",_h="@firebase/remote-config-compat",wh="@firebase/storage",Ih="@firebase/storage-compat",vh="@firebase/firestore",Eh="@firebase/ai",Th="@firebase/firestore-compat",Ah="firebase",Sh="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="[DEFAULT]",bh={[Ei]:"fire-core",[Zc]:"fire-core-compat",[th]:"fire-analytics",[eh]:"fire-analytics-compat",[ih]:"fire-app-check",[nh]:"fire-app-check-compat",[rh]:"fire-auth",[sh]:"fire-auth-compat",[oh]:"fire-rtdb",[ah]:"fire-data-connect",[ch]:"fire-rtdb-compat",[hh]:"fire-fn",[lh]:"fire-fn-compat",[uh]:"fire-iid",[dh]:"fire-iid-compat",[fh]:"fire-fcm",[ph]:"fire-fcm-compat",[gh]:"fire-perf",[mh]:"fire-perf-compat",[yh]:"fire-rc",[_h]:"fire-rc-compat",[wh]:"fire-gcs",[Ih]:"fire-gcs-compat",[vh]:"fire-fst",[Th]:"fire-fst-compat",[Eh]:"fire-vertex","fire-js":"fire-js",[Ah]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new Map,Ch=new Map,Ai=new Map;function is(n,e){try{n.container.addComponent(e)}catch(t){Ie.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function me(n){const e=n.name;if(Ai.has(e))return Ie.debug(`There were multiple attempts to register component ${e}.`),!1;Ai.set(e,n);for(const t of In.values())is(t,n);for(const t of Ch.values())is(t,n);return!0}function st(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function de(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xe=new rt("app","Firebase",Rh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new oe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=Sh;function uo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ti,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw xe.create("bad-app-name",{appName:String(s)});if(t||(t=to()),!t)throw xe.create("no-options");const c=In.get(s);if(c){if(Fe(t,c.options)&&Fe(r,c.config))return c;throw xe.create("duplicate-app",{appName:s})}const h=new Uc(s);for(const w of Ai.values())h.addComponent(w);const p=new Ph(t,r,h);return In.set(s,p),p}function Di(n=Ti){const e=In.get(n);if(!e&&n===Ti&&to())return uo();if(!e)throw xe.create("no-app",{appName:n});return e}function ne(n,e,t){let r=bh[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),c=e.match(/\s|\//);if(s||c){const h=[`Unable to register library "${r}" with version "${e}":`];s&&h.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ie.warn(h.join(" "));return}me(new oe(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="firebase-heartbeat-database",Oh=1,jt="firebase-heartbeat-store";let di=null;function fo(){return di||(di=lo(kh,Oh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(jt)}catch(t){console.warn(t)}}}}).catch(n=>{throw xe.create("idb-open",{originalErrorMessage:n.message})})),di}async function Dh(n){try{const t=(await fo()).transaction(jt),r=await t.objectStore(jt).get(po(n));return await t.done,r}catch(e){if(e instanceof ae)Ie.warn(e.message);else{const t=xe.create("idb-get",{originalErrorMessage:e?.message});Ie.warn(t.message)}}}async function rs(n,e){try{const r=(await fo()).transaction(jt,"readwrite");await r.objectStore(jt).put(e,po(n)),await r.done}catch(t){if(t instanceof ae)Ie.warn(t.message);else{const r=xe.create("idb-set",{originalErrorMessage:t?.message});Ie.warn(r.message)}}}function po(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=1024,Lh=30;class Mh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new xh(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ss();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Lh){const s=Fh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ie.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ss(),{heartbeatsToSend:t,unsentEntries:r}=Uh(this._heartbeatsCache.heartbeats),s=wn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ie.warn(e),""}}}function ss(){return new Date().toISOString().substring(0,10)}function Uh(n,e=Nh){const t=[];let r=n.slice();for(const s of n){const c=t.find(h=>h.agent===s.agent);if(c){if(c.dates.push(s.date),os(t)>e){c.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),os(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class xh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oo()?ao().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Dh(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return rs(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function os(n){return wn(JSON.stringify({version:2,heartbeats:n})).length}function Fh(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(n){me(new oe("platform-logger",e=>new Yc(e),"PRIVATE")),me(new oe("heartbeat",e=>new Mh(e),"PRIVATE")),ne(Ei,ns,n),ne(Ei,ns,"esm2020"),ne("fire-js","")}Vh("");function go(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jh=go,mo=new rt("auth","Firebase",go());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new kn("@firebase/auth");function Bh(n,...e){vn.logLevel<=D.WARN&&vn.warn(`Auth (${yt}): ${n}`,...e)}function pn(n,...e){vn.logLevel<=D.ERROR&&vn.error(`Auth (${yt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,...e){throw Ni(n,...e)}function pe(n,...e){return Ni(n,...e)}function yo(n,e,t){const r={...jh(),[e]:t};return new rt("auth","Firebase",r).create(e,{appName:n.name})}function Ye(n){return yo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ni(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return mo.create(n,...e)}function C(n,e,...t){if(!n)throw Ni(e,...t)}function _e(n){const e="INTERNAL ASSERTION FAILED: "+n;throw pn(e),new Error(e)}function Ee(n,e){n||_e(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){return typeof self<"u"&&self.location?.href||""}function $h(){return as()==="http:"||as()==="https:"}function as(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($h()||so()||"connection"in navigator)?navigator.onLine:!0}function Wh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=yc()||wc()}get(){return Hh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(n,e){Ee(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qh=new zt(3e4,6e4);function Gt(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Be(n,e,t,r,s={}){return wo(n,s,async()=>{let c={},h={};r&&(e==="GET"?h=r:c={body:JSON.stringify(r)});const p=Wt({key:n.config.apiKey,...h}).slice(1),w=await n._getAdditionalHeaders();w["Content-Type"]="application/json",n.languageCode&&(w["X-Firebase-Locale"]=n.languageCode);const E={method:e,headers:w,...c};return _c()||(E.referrerPolicy="no-referrer"),n.emulatorConfig&&Ht(n.emulatorConfig.host)&&(E.credentials="include"),_o.fetch()(await Io(n,n.config.apiHost,t,p),E)})}async function wo(n,e,t){n._canInitEmulator=!1;const r={...zh,...e};try{const s=new Xh(n),c=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw un(n,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const p=c.ok?h.errorMessage:h.error.message,[w,E]=p.split(" : ");if(w==="FEDERATED_USER_ID_ALREADY_LINKED")throw un(n,"credential-already-in-use",h);if(w==="EMAIL_EXISTS")throw un(n,"email-already-in-use",h);if(w==="USER_DISABLED")throw un(n,"user-disabled",h);const S=r[w]||w.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw yo(n,S,E);ve(n,S)}}catch(s){if(s instanceof ae)throw s;ve(n,"network-request-failed",{message:String(s)})}}async function Kh(n,e,t,r,s={}){const c=await Be(n,e,t,r,s);return"mfaPendingCredential"in c&&ve(n,"multi-factor-auth-required",{_serverResponse:c}),c}async function Io(n,e,t,r){const s=`${e}${t}?${r}`,c=n,h=c.config.emulator?Li(n.config,s):`${n.config.apiScheme}://${s}`;return Gh.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}function Jh(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Xh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(pe(this.auth,"network-request-failed")),qh.get())})}}function un(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=pe(n,e,r);return s.customData._tokenResponse=t,s}function cs(n){return n!==void 0&&n.enterprise!==void 0}class Yh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Jh(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Qh(n,e){return Be(n,"GET","/v2/recaptchaConfig",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zh(n,e){return Be(n,"POST","/v1/accounts:delete",e)}async function En(n,e){return Be(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function el(n,e=!1){const t=je(n),r=await t.getIdToken(e),s=Mi(r);C(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const c=typeof s.firebase=="object"?s.firebase:void 0,h=c?.sign_in_provider;return{claims:s,token:r,authTime:Mt(fi(s.auth_time)),issuedAtTime:Mt(fi(s.iat)),expirationTime:Mt(fi(s.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function fi(n){return Number(n)*1e3}function Mi(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return pn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Zs(t);return s?JSON.parse(s):(pn("Failed to decode base64 JWT payload"),null)}catch(s){return pn("Caught error parsing JWT payload as JSON",s?.toString()),null}}function hs(n){const e=Mi(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ae&&tl(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function tl({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mt(this.lastLoginAt),this.creationTime=Mt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(n){const e=n.auth,t=await n.getIdToken(),r=await Bt(n,En(e,{idToken:t}));C(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const c=s.providerUserInfo?.length?vo(s.providerUserInfo):[],h=rl(n.providerData,c),p=n.isAnonymous,w=!(n.email&&s.passwordHash)&&!h?.length,E=p?w:!1,S={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:h,metadata:new bi(s.createdAt,s.lastLoginAt),isAnonymous:E};Object.assign(n,S)}async function il(n){const e=je(n);await Tn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rl(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function vo(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(n,e){const t=await wo(n,{},async()=>{const r=Wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:c}=n.config,h=await Io(n,s,"/v1/token",`key=${c}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const w={method:"POST",headers:p,body:r};return n.emulatorConfig&&Ht(n.emulatorConfig.host)&&(w.credentials="include"),_o.fetch()(h,w)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ol(n,e){return Be(n,"POST","/v2/accounts:revokeToken",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){C(e.length!==0,"internal-error");const t=hs(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(C(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:c}=await sl(e,t);this.updateTokensAndExpiration(r,s,Number(c))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:c}=t,h=new ut;return r&&(C(typeof r=="string","internal-error",{appName:e}),h.refreshToken=r),s&&(C(typeof s=="string","internal-error",{appName:e}),h.accessToken=s),c&&(C(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return _e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class re{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new nl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Bt(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return el(this,e)}reload(){return il(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new re({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Tn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(de(this.auth.app))return Promise.reject(Ye(this.auth));const e=await this.getIdToken();return await Bt(this,Zh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,p=t.tenantId??void 0,w=t._redirectEventId??void 0,E=t.createdAt??void 0,S=t.lastLoginAt??void 0,{uid:b,emailVerified:A,isAnonymous:x,providerData:L,stsTokenManager:V}=t;C(b&&V,e,"internal-error");const U=ut.fromJSON(this.name,V);C(typeof b=="string",e,"internal-error"),Oe(r,e.name),Oe(s,e.name),C(typeof A=="boolean",e,"internal-error"),C(typeof x=="boolean",e,"internal-error"),Oe(c,e.name),Oe(h,e.name),Oe(p,e.name),Oe(w,e.name),Oe(E,e.name),Oe(S,e.name);const X=new re({uid:b,auth:e,email:s,emailVerified:A,displayName:r,isAnonymous:x,photoURL:h,phoneNumber:c,tenantId:p,stsTokenManager:U,createdAt:E,lastLoginAt:S});return L&&Array.isArray(L)&&(X.providerData=L.map(Y=>({...Y}))),w&&(X._redirectEventId=w),X}static async _fromIdTokenResponse(e,t,r=!1){const s=new ut;s.updateFromServerResponse(t);const c=new re({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Tn(c),c}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];C(s.localId!==void 0,"internal-error");const c=s.providerUserInfo!==void 0?vo(s.providerUserInfo):[],h=!(s.email&&s.passwordHash)&&!c?.length,p=new ut;p.updateFromIdToken(r);const w=new re({uid:s.localId,auth:e,stsTokenManager:p,isAnonymous:h}),E={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new bi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!c?.length};return Object.assign(w,E),w}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Map;function we(n){Ee(n instanceof Function,"Expected a class definition");let e=ls.get(n);return e?(Ee(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ls.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Eo.type="NONE";const us=Eo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n,e,t){return`firebase:${n}:${e}:${t}`}class dt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:c}=this.auth;this.fullUserKey=gn(this.userKey,s.apiKey,c),this.fullPersistenceKey=gn("persistence",s.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await En(this.auth,{idToken:e}).catch(()=>{});return t?re._fromGetAccountInfoResponse(this.auth,t,e):null}return re._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new dt(we(us),e,r);const s=(await Promise.all(t.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=s[0]||we(us);const h=gn(r,e.config.apiKey,e.name);let p=null;for(const E of t)try{const S=await E._get(h);if(S){let b;if(typeof S=="string"){const A=await En(e,{idToken:S}).catch(()=>{});if(!A)break;b=await re._fromGetAccountInfoResponse(e,A,S)}else b=re._fromJSON(e,S);E!==c&&(p=b),c=E;break}}catch{}const w=s.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!w.length?new dt(c,e,r):(c=w[0],p&&await c._set(h,p.toJSON()),await Promise.all(t.map(async E=>{if(E!==c)try{await E._remove(h)}catch{}})),new dt(c,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(To(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ro(e))return"Blackberry";if(Po(e))return"Webos";if(Ao(e))return"Safari";if((e.includes("chrome/")||So(e))&&!e.includes("edge/"))return"Chrome";if(Co(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function To(n=q()){return/firefox\//i.test(n)}function Ao(n=q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function So(n=q()){return/crios\//i.test(n)}function bo(n=q()){return/iemobile/i.test(n)}function Co(n=q()){return/android/i.test(n)}function Ro(n=q()){return/blackberry/i.test(n)}function Po(n=q()){return/webos/i.test(n)}function Ui(n=q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function al(n=q()){return Ui(n)&&!!window.navigator?.standalone}function cl(){return Ic()&&document.documentMode===10}function ko(n=q()){return Ui(n)||Co(n)||Po(n)||Ro(n)||/windows phone/i.test(n)||bo(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(n,e=[]){let t;switch(n){case"Browser":t=ds(q());break;case"Worker":t=`${ds(q())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${yt}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=c=>new Promise((h,p)=>{try{const w=e(c);h(w)}catch(w){p(w)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n,e={}){return Be(n,"GET","/v2/passwordPolicy",Gt(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ul=6;class dl{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ul,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fs(this),this.idTokenSubscription=new fs(this),this.beforeStateQueue=new hl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=we(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await En(this,{idToken:e}),r=await re._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(de(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===h)&&p?.user&&(r=p.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(c){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Tn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(de(this.app))return Promise.reject(Ye(this));const t=e?je(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return de(this.app)?Promise.reject(Ye(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return de(this.app)?Promise.reject(Ye(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ll(this),t=new dl(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new rt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ol(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&we(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[we(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(C(p,this,"internal-error"),p.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const w=e.addObserver(t,r,s);return()=>{h=!0,w()}}else{const w=e.addObserver(t);return()=>{h=!0,w()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(de(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Bh(`Error while retrieving App Check token: ${e.error}`),e?.token}}function qt(n){return je(n)}class fs{constructor(e){this.auth=e,this.observer=null,this.addObserver=bc(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pl(n){On=n}function Do(n){return On.loadJS(n)}function gl(){return On.recaptchaEnterpriseScript}function ml(){return On.gapiScript}function yl(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class _l{constructor(){this.enterprise=new wl}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class wl{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Il="recaptcha-enterprise",No="NO_RECAPTCHA";class vl{constructor(e){this.type=Il,this.auth=qt(e)}async verify(e="verify",t=!1){async function r(c){if(!t){if(c.tenantId==null&&c._agentRecaptchaConfig!=null)return c._agentRecaptchaConfig.siteKey;if(c.tenantId!=null&&c._tenantRecaptchaConfigs[c.tenantId]!==void 0)return c._tenantRecaptchaConfigs[c.tenantId].siteKey}return new Promise(async(h,p)=>{Qh(c,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(w=>{if(w.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const E=new Yh(w);return c.tenantId==null?c._agentRecaptchaConfig=E:c._tenantRecaptchaConfigs[c.tenantId]=E,h(E.siteKey)}}).catch(w=>{p(w)})})}function s(c,h,p){const w=window.grecaptcha;cs(w)?w.enterprise.ready(()=>{w.enterprise.execute(c,{action:e}).then(E=>{h(E)}).catch(()=>{h(No)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new _l().execute("siteKey",{action:"verify"}):new Promise((c,h)=>{r(this.auth).then(p=>{if(!t&&cs(window.grecaptcha))s(p,c,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let w=gl();w.length!==0&&(w+=p),Do(w).then(()=>{s(p,c,h)}).catch(E=>{h(E)})}}).catch(p=>{h(p)})})}}async function ps(n,e,t,r=!1,s=!1){const c=new vl(n);let h;if(s)h=No;else try{h=await c.verify(t)}catch{h=await c.verify(t,!0)}const p={...e};return r?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function El(n,e,t,r,s){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await ps(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await ps(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n,e){const t=st(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),c=t.getOptions();if(Fe(c,e??{}))return s;ve(s,"already-initialized")}return t.initialize({options:e})}function Al(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(we);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Sl(n,e,t){const r=qt(n);C(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,c=Lo(e),{host:h,port:p}=bl(e),w=p===null?"":`:${p}`,E={url:`${c}//${h}${w}/`},S=Object.freeze({host:h,port:p,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){C(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),C(Fe(E,r.config.emulator)&&Fe(S,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=E,r.emulatorConfig=S,r.settings.appVerificationDisabledForTesting=!0,Ht(h)?(io(`${c}//${h}${w}`),ro("Auth",!0)):Cl()}function Lo(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bl(n){const e=Lo(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const c=s[1];return{host:c,port:gs(r.substr(c.length+1))}}else{const[c,h]=r.split(":");return{host:c,port:gs(h)}}}function gs(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Cl(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _e("not implemented")}_getIdTokenResponse(e){return _e("not implemented")}_linkToIdToken(e,t){return _e("not implemented")}_getReauthenticationResolver(e){return _e("not implemented")}}async function Rl(n,e){return Be(n,"POST","/v1/accounts:sendOobCode",Gt(n,e))}async function Pl(n,e){return Rl(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ft(n,e){return Kh(n,"POST","/v1/accounts:signInWithIdp",Gt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="http://localhost";class et extends Mo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ve("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...c}=t;if(!r||!s)return null;const h=new et(r,s);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ft(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ft(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ft(e,t)}buildRequest(){const e={requestUri:kl,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Uo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Kt{constructor(){super("facebook.com")}static credential(e){return et._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Kt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return et._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ne.credential(t,r)}catch{return null}}}Ne.GOOGLE_SIGN_IN_METHOD="google.com";Ne.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Kt{constructor(){super("github.com")}static credential(e){return et._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.GITHUB_SIGN_IN_METHOD="github.com";Le.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Kt{constructor(){super("twitter.com")}static credential(e,t){return et._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Me.credential(t,r)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const c=await re._fromIdTokenResponse(e,r,s),h=ms(r);return new gt({user:c,providerId:h,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=ms(r);return new gt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function ms(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends ae{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,An.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new An(e,t,r,s)}}function xo(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?An._fromErrorAndOperation(n,c,e,r):c})}async function Ol(n,e,t=!1){const r=await Bt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return gt._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(n,e,t=!1){const{auth:r}=n;if(de(r.app))return Promise.reject(Ye(r));const s="reauthenticate";try{const c=await Bt(n,xo(r,s,e,n),t);C(c.idToken,r,"internal-error");const h=Mi(c.idToken);C(h,r,"internal-error");const{sub:p}=h;return C(n.uid===p,r,"user-mismatch"),gt._forOperation(n,s,c)}catch(c){throw c?.code==="auth/user-not-found"&&ve(r,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(n,e,t=!1){if(de(n.app))return Promise.reject(Ye(n));const r="signIn",s=await xo(n,r,e),c=await gt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(c.user),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(n,e,t){C(t.url?.length>0,n,"invalid-continue-uri"),C(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),C(typeof t.linkDomain>"u"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(C(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(C(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(n,e,t){const r=qt(n),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function c(h,p){C(p.handleCodeInApp,r,"argument-error"),p&&Ll(r,h,p)}c(s,t),await El(r,s,"getOobCode",Pl)}function Ul(n,e,t,r){return je(n).onIdTokenChanged(e,t,r)}function xl(n,e,t){return je(n).beforeAuthStateChanged(e,t)}const Sn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Sn,"1"),this.storage.removeItem(Sn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl=1e3,Vl=10;class Vo extends Fo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ko(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,w)=>{this.notifyListeners(h,w)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const h=this.storage.getItem(r);!t&&this.localCache[r]===h||this.notifyListeners(r,h)},c=this.storage.getItem(r);cl()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Vl):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vo.type="LOCAL";const jl=Vo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo extends Fo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jo.type="SESSION";const Bo=jo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Dn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:c}=t.data,h=this.handlersMap[s];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const p=Array.from(h).map(async E=>E(t.origin,c)),w=await Bl(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:w})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xi(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let c,h;return new Promise((p,w)=>{const E=xi("",20);s.port1.start();const S=setTimeout(()=>{w(new Error("unsupported_event"))},r);h={messageChannel:s,onMessage(b){const A=b;if(A.data.eventId===E)switch(A.data.status){case"ack":clearTimeout(S),c=setTimeout(()=>{w(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),p(A.data.response);break;default:clearTimeout(S),clearTimeout(c),w(new Error("invalid_response"));break}}},this.handlers.add(h),s.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:E,data:t},[s.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function Hl(n){ge().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function Wl(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zl(){return navigator?.serviceWorker?.controller||null}function Gl(){return $o()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="firebaseLocalStorageDb",ql=1,bn="firebaseLocalStorage",Wo="fbase_key";class Jt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nn(n,e){return n.transaction([bn],e?"readwrite":"readonly").objectStore(bn)}function Kl(){const n=indexedDB.deleteDatabase(Ho);return new Jt(n).toPromise()}function Ci(){const n=indexedDB.open(Ho,ql);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(bn,{keyPath:Wo})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(bn)?e(r):(r.close(),await Kl(),e(await Ci()))})})}async function ys(n,e,t){const r=Nn(n,!0).put({[Wo]:e,value:t});return new Jt(r).toPromise()}async function Jl(n,e){const t=Nn(n,!1).get(e),r=await new Jt(t).toPromise();return r===void 0?null:r.value}function _s(n,e){const t=Nn(n,!0).delete(e);return new Jt(t).toPromise()}const Xl=800,Yl=3;class zo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ci(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Yl)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $o()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dn._getInstance(Gl()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Wl(),!this.activeServiceWorker)return;this.sender=new $l(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ci();return await ys(e,Sn,"1"),await _s(e,Sn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ys(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Jl(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_s(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const c=Nn(s,!1).getAll();return new Jt(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:c}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(c)&&(this.notifyListeners(s,c),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Xl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zo.type="LOCAL";const Ql=zo;new zt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(n,e){return e?we(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends Mo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ft(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ft(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ft(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function eu(n){return Nl(n.auth,new Fi(n),n.bypassAuthState)}function tu(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Dl(t,new Fi(n),n.bypassAuthState)}async function nu(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),Ol(t,new Fi(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,s,c=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:c,error:h,type:p}=e;if(h){this.reject(h);return}const w={auth:this.auth,requestUri:t,sessionId:r,tenantId:c||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(w))}catch(E){this.reject(E)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eu;case"linkViaPopup":case"linkViaRedirect":return nu;case"reauthViaPopup":case"reauthViaRedirect":return tu;default:ve(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new zt(2e3,1e4);class lt extends Go{constructor(e,t,r,s,c){super(e,t,s,c),this.provider=r,this.authWindow=null,this.pollId=null,lt.currentPopupAction&&lt.currentPopupAction.cancel(),lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=xi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iu.get())};e()}}lt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="pendingRedirect",mn=new Map;class su extends Go{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=mn.get(this.auth._key());if(!e){try{const r=await ou(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}mn.set(this.auth._key(),e)}return this.bypassAuthState||mn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ou(n,e){const t=hu(e),r=cu(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function au(n,e){mn.set(n._key(),e)}function cu(n){return we(n._redirectPersistence)}function hu(n){return gn(ru,n.config.apiKey,n.name)}async function lu(n,e,t=!1){if(de(n.app))return Promise.reject(Ye(n));const r=qt(n),s=Zl(r,e),h=await new su(r,s,t).execute();return h&&!t&&(delete h.user._redirectEventId,await r._persistUserIfCurrent(h.user),await r._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=600*1e3;class du{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!qo(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(pe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uu&&this.cachedEventUids.clear(),this.cachedEventUids.has(ws(e))}saveEventToCache(e){this.cachedEventUids.add(ws(e)),this.lastProcessedEventTime=Date.now()}}function ws(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qo({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function fu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qo(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pu(n,e={}){return Be(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mu=/^https?/;async function yu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await pu(n);for(const t of e)try{if(_u(t))return}catch{}ve(n,"unauthorized-domain")}function _u(n){const e=Si(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===r}if(!mu.test(t))return!1;if(gu.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new zt(3e4,6e4);function Is(){const n=ge().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Iu(n){return new Promise((e,t)=>{function r(){Is(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Is(),t(pe(n,"network-request-failed"))},timeout:wu.get()})}if(ge().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ge().gapi?.load)r();else{const s=yl("iframefcb");return ge()[s]=()=>{gapi.load?r():t(pe(n,"network-request-failed"))},Do(`${ml()}?onload=${s}`).catch(c=>t(c))}}).catch(e=>{throw yn=null,e})}let yn=null;function vu(n){return yn=yn||Iu(n),yn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=new zt(5e3,15e3),Tu="__/auth/iframe",Au="emulator/auth/iframe",Su={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cu(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Li(e,Au):`https://${n.config.authDomain}/${Tu}`,r={apiKey:e.apiKey,appName:n.name,v:yt},s=bu.get(n.config.apiHost);s&&(r.eid=s);const c=n._getFrameworks();return c.length&&(r.fw=c.join(",")),`${t}?${Wt(r).slice(1)}`}async function Ru(n){const e=await vu(n),t=ge().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:Cu(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Su,dontclear:!0},r=>new Promise(async(s,c)=>{await r.restyle({setHideOnLeave:!1});const h=pe(n,"network-request-failed"),p=ge().setTimeout(()=>{c(h)},Eu.get());function w(){ge().clearTimeout(p),s(r)}r.ping(w).then(w,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ku=500,Ou=600,Du="_blank",Nu="http://localhost";class vs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lu(n,e,t,r=ku,s=Ou){const c=Math.max((window.screen.availHeight-s)/2,0).toString(),h=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const w={...Pu,width:r.toString(),height:s.toString(),top:c,left:h},E=q().toLowerCase();t&&(p=So(E)?Du:t),To(E)&&(e=e||Nu,w.scrollbars="yes");const S=Object.entries(w).reduce((A,[x,L])=>`${A}${x}=${L},`,"");if(al(E)&&p!=="_self")return Mu(e||"",p),new vs(null);const b=window.open(e||"",p,S);C(b,n,"popup-blocked");try{b.focus()}catch{}return new vs(b)}function Mu(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="__/auth/handler",xu="emulator/auth/handler",Fu=encodeURIComponent("fac");async function Es(n,e,t,r,s,c){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:yt,eventId:s};if(e instanceof Uo){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",Sc(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[S,b]of Object.entries({}))h[S]=b}if(e instanceof Kt){const S=e.getScopes().filter(b=>b!=="");S.length>0&&(h.scopes=S.join(","))}n.tenantId&&(h.tid=n.tenantId);const p=h;for(const S of Object.keys(p))p[S]===void 0&&delete p[S];const w=await n._getAppCheckToken(),E=w?`#${Fu}=${encodeURIComponent(w)}`:"";return`${Vu(n)}?${Wt(p).slice(1)}${E}`}function Vu({config:n}){return n.emulator?Li(n,xu):`https://${n.authDomain}/${Uu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="webStorageSupport";class ju{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bo,this._completeRedirectFn=lu,this._overrideRedirectResult=au}async _openPopup(e,t,r,s){Ee(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await Es(e,t,r,Si(),s);return Lu(e,c,xi())}async _openRedirect(e,t,r,s){await this._originValidation(e);const c=await Es(e,t,r,Si(),s);return Hl(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:c}=this.eventManagers[t];return s?Promise.resolve(s):(Ee(c,"If manager is not set, promise should be"),c)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Ru(e),r=new du(e);return t.register("authEvent",s=>(C(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(pi,{type:pi},s=>{const c=s?.[0]?.[pi];c!==void 0&&t(!!c),ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ko()||Ao()||Ui()}}const Bu=ju;var Ts="@firebase/auth",As="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wu(n){me(new oe("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=r.options;C(h&&!h.includes(":"),"invalid-api-key",{appName:r.name});const w={apiKey:h,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oo(n)},E=new fl(r,s,c,w);return Al(E,t),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),me(new oe("auth-internal",e=>{const t=qt(e.getProvider("auth").getImmediate());return(r=>new $u(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ne(Ts,As,Hu(n)),ne(Ts,As,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=300,Gu=no("authIdTokenMaxAge")||zu;let Ss=null;const qu=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gu)return;const s=t?.token;Ss!==s&&(Ss=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ku(n=Di()){const e=st(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Tl(n,{popupRedirectResolver:Bu,persistence:[Ql,jl,Bo]}),r=no("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(r,location.origin);if(location.origin===c.origin){const h=qu(c.toString());xl(t,h,()=>h(t.currentUser)),Ul(t,p=>h(p))}}const s=eo("auth");return s&&Sl(t,`http://${s}`),t}function Ju(){return document.getElementsByTagName("head")?.[0]??document}pl({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const c=pe("internal-error");c.customData=s,t(c)},r.type="text/javascript",r.charset="UTF-8",Ju().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wu("Browser");var Xu="firebase",Yu="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ne(Xu,Yu,"app");var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vi;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,u){function f(){}f.prototype=u.prototype,m.F=u.prototype,m.prototype=new f,m.prototype.constructor=m,m.D=function(y,g,I){for(var d=Array(arguments.length-2),K=2;K<arguments.length;K++)d[K-2]=arguments[K];return u.prototype[g].apply(y,d)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(m,u,f){f||(f=0);const y=Array(16);if(typeof u=="string")for(var g=0;g<16;++g)y[g]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(g=0;g<16;++g)y[g]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=m.g[0],f=m.g[1],g=m.g[2];let I=m.g[3],d;d=u+(I^f&(g^I))+y[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(g^u&(f^g))+y[1]+3905402710&4294967295,I=u+(d<<12&4294967295|d>>>20),d=g+(f^I&(u^f))+y[2]+606105819&4294967295,g=I+(d<<17&4294967295|d>>>15),d=f+(u^g&(I^u))+y[3]+3250441966&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(I^f&(g^I))+y[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(g^u&(f^g))+y[5]+1200080426&4294967295,I=u+(d<<12&4294967295|d>>>20),d=g+(f^I&(u^f))+y[6]+2821735955&4294967295,g=I+(d<<17&4294967295|d>>>15),d=f+(u^g&(I^u))+y[7]+4249261313&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(I^f&(g^I))+y[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(g^u&(f^g))+y[9]+2336552879&4294967295,I=u+(d<<12&4294967295|d>>>20),d=g+(f^I&(u^f))+y[10]+4294925233&4294967295,g=I+(d<<17&4294967295|d>>>15),d=f+(u^g&(I^u))+y[11]+2304563134&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(I^f&(g^I))+y[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=I+(g^u&(f^g))+y[13]+4254626195&4294967295,I=u+(d<<12&4294967295|d>>>20),d=g+(f^I&(u^f))+y[14]+2792965006&4294967295,g=I+(d<<17&4294967295|d>>>15),d=f+(u^g&(I^u))+y[15]+1236535329&4294967295,f=g+(d<<22&4294967295|d>>>10),d=u+(g^I&(f^g))+y[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^g&(u^f))+y[6]+3225465664&4294967295,I=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(I^u))+y[11]+643717713&4294967295,g=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(g^I))+y[0]+3921069994&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^I&(f^g))+y[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^g&(u^f))+y[10]+38016083&4294967295,I=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(I^u))+y[15]+3634488961&4294967295,g=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(g^I))+y[4]+3889429448&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^I&(f^g))+y[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^g&(u^f))+y[14]+3275163606&4294967295,I=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(I^u))+y[3]+4107603335&4294967295,g=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(g^I))+y[8]+1163531501&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(g^I&(f^g))+y[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=I+(f^g&(u^f))+y[2]+4243563512&4294967295,I=u+(d<<9&4294967295|d>>>23),d=g+(u^f&(I^u))+y[7]+1735328473&4294967295,g=I+(d<<14&4294967295|d>>>18),d=f+(I^u&(g^I))+y[12]+2368359562&4294967295,f=g+(d<<20&4294967295|d>>>12),d=u+(f^g^I)+y[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^g)+y[8]+2272392833&4294967295,I=u+(d<<11&4294967295|d>>>21),d=g+(I^u^f)+y[11]+1839030562&4294967295,g=I+(d<<16&4294967295|d>>>16),d=f+(g^I^u)+y[14]+4259657740&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^I)+y[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^g)+y[4]+1272893353&4294967295,I=u+(d<<11&4294967295|d>>>21),d=g+(I^u^f)+y[7]+4139469664&4294967295,g=I+(d<<16&4294967295|d>>>16),d=f+(g^I^u)+y[10]+3200236656&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^I)+y[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^g)+y[0]+3936430074&4294967295,I=u+(d<<11&4294967295|d>>>21),d=g+(I^u^f)+y[3]+3572445317&4294967295,g=I+(d<<16&4294967295|d>>>16),d=f+(g^I^u)+y[6]+76029189&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(f^g^I)+y[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=I+(u^f^g)+y[12]+3873151461&4294967295,I=u+(d<<11&4294967295|d>>>21),d=g+(I^u^f)+y[15]+530742520&4294967295,g=I+(d<<16&4294967295|d>>>16),d=f+(g^I^u)+y[2]+3299628645&4294967295,f=g+(d<<23&4294967295|d>>>9),d=u+(g^(f|~I))+y[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~g))+y[7]+1126891415&4294967295,I=u+(d<<10&4294967295|d>>>22),d=g+(u^(I|~f))+y[14]+2878612391&4294967295,g=I+(d<<15&4294967295|d>>>17),d=f+(I^(g|~u))+y[5]+4237533241&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~I))+y[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~g))+y[3]+2399980690&4294967295,I=u+(d<<10&4294967295|d>>>22),d=g+(u^(I|~f))+y[10]+4293915773&4294967295,g=I+(d<<15&4294967295|d>>>17),d=f+(I^(g|~u))+y[1]+2240044497&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~I))+y[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~g))+y[15]+4264355552&4294967295,I=u+(d<<10&4294967295|d>>>22),d=g+(u^(I|~f))+y[6]+2734768916&4294967295,g=I+(d<<15&4294967295|d>>>17),d=f+(I^(g|~u))+y[13]+1309151649&4294967295,f=g+(d<<21&4294967295|d>>>11),d=u+(g^(f|~I))+y[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=I+(f^(u|~g))+y[11]+3174756917&4294967295,I=u+(d<<10&4294967295|d>>>22),d=g+(u^(I|~f))+y[2]+718787259&4294967295,g=I+(d<<15&4294967295|d>>>17),d=f+(I^(g|~u))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+u&4294967295,m.g[1]=m.g[1]+(g+(d<<21&4294967295|d>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+I&4294967295}r.prototype.v=function(m,u){u===void 0&&(u=m.length);const f=u-this.blockSize,y=this.C;let g=this.h,I=0;for(;I<u;){if(g==0)for(;I<=f;)s(this,m,I),I+=this.blockSize;if(typeof m=="string"){for(;I<u;)if(y[g++]=m.charCodeAt(I++),g==this.blockSize){s(this,y),g=0;break}}else for(;I<u;)if(y[g++]=m[I++],g==this.blockSize){s(this,y),g=0;break}}this.h=g,this.o+=u},r.prototype.A=function(){var m=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);m[0]=128;for(var u=1;u<m.length-8;++u)m[u]=0;u=this.o*8;for(var f=m.length-8;f<m.length;++f)m[f]=u&255,u/=256;for(this.v(m),m=Array(16),u=0,f=0;f<4;++f)for(let y=0;y<32;y+=8)m[u++]=this.g[f]>>>y&255;return m};function c(m,u){var f=p;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=u(m)}function h(m,u){this.h=u;const f=[];let y=!0;for(let g=m.length-1;g>=0;g--){const I=m[g]|0;y&&I==u||(f[g]=I,y=!1)}this.g=f}var p={};function w(m){return-128<=m&&m<128?c(m,function(u){return new h([u|0],u<0?-1:0)}):new h([m|0],m<0?-1:0)}function E(m){if(isNaN(m)||!isFinite(m))return b;if(m<0)return U(E(-m));const u=[];let f=1;for(let y=0;m>=f;y++)u[y]=m/f|0,f*=4294967296;return new h(u,0)}function S(m,u){if(m.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(m.charAt(0)=="-")return U(S(m.substring(1),u));if(m.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=E(Math.pow(u,8));let y=b;for(let I=0;I<m.length;I+=8){var g=Math.min(8,m.length-I);const d=parseInt(m.substring(I,I+g),u);g<8?(g=E(Math.pow(u,g)),y=y.j(g).add(E(d))):(y=y.j(f),y=y.add(E(d)))}return y}var b=w(0),A=w(1),x=w(16777216);n=h.prototype,n.m=function(){if(V(this))return-U(this).m();let m=0,u=1;for(let f=0;f<this.g.length;f++){const y=this.i(f);m+=(y>=0?y:4294967296+y)*u,u*=4294967296}return m},n.toString=function(m){if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(L(this))return"0";if(V(this))return"-"+U(this).toString(m);const u=E(Math.pow(m,6));var f=this;let y="";for(;;){const g=Te(f,u).g;f=X(f,g.j(u));let I=((f.g.length>0?f.g[0]:f.h)>>>0).toString(m);if(f=g,L(f))return I+y;for(;I.length<6;)I="0"+I;y=I+y}},n.i=function(m){return m<0?0:m<this.g.length?this.g[m]:this.h};function L(m){if(m.h!=0)return!1;for(let u=0;u<m.g.length;u++)if(m.g[u]!=0)return!1;return!0}function V(m){return m.h==-1}n.l=function(m){return m=X(this,m),V(m)?-1:L(m)?0:1};function U(m){const u=m.g.length,f=[];for(let y=0;y<u;y++)f[y]=~m.g[y];return new h(f,~m.h).add(A)}n.abs=function(){return V(this)?U(this):this},n.add=function(m){const u=Math.max(this.g.length,m.g.length),f=[];let y=0;for(let g=0;g<=u;g++){let I=y+(this.i(g)&65535)+(m.i(g)&65535),d=(I>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);y=d>>>16,I&=65535,d&=65535,f[g]=d<<16|I}return new h(f,f[f.length-1]&-2147483648?-1:0)};function X(m,u){return m.add(U(u))}n.j=function(m){if(L(this)||L(m))return b;if(V(this))return V(m)?U(this).j(U(m)):U(U(this).j(m));if(V(m))return U(this.j(U(m)));if(this.l(x)<0&&m.l(x)<0)return E(this.m()*m.m());const u=this.g.length+m.g.length,f=[];for(var y=0;y<2*u;y++)f[y]=0;for(y=0;y<this.g.length;y++)for(let g=0;g<m.g.length;g++){const I=this.i(y)>>>16,d=this.i(y)&65535,K=m.i(g)>>>16,$e=m.i(g)&65535;f[2*y+2*g]+=d*$e,Y(f,2*y+2*g),f[2*y+2*g+1]+=I*$e,Y(f,2*y+2*g+1),f[2*y+2*g+1]+=d*K,Y(f,2*y+2*g+1),f[2*y+2*g+2]+=I*K,Y(f,2*y+2*g+2)}for(m=0;m<u;m++)f[m]=f[2*m+1]<<16|f[2*m];for(m=u;m<2*u;m++)f[m]=0;return new h(f,0)};function Y(m,u){for(;(m[u]&65535)!=m[u];)m[u+1]+=m[u]>>>16,m[u]&=65535,u++}function Z(m,u){this.g=m,this.h=u}function Te(m,u){if(L(u))throw Error("division by zero");if(L(m))return new Z(b,b);if(V(m))return u=Te(U(m),u),new Z(U(u.g),U(u.h));if(V(u))return u=Te(m,U(u)),new Z(U(u.g),u.h);if(m.g.length>30){if(V(m)||V(u))throw Error("slowDivide_ only works with positive integers.");for(var f=A,y=u;y.l(m)<=0;)f=Ae(f),y=Ae(y);var g=ee(f,1),I=ee(y,1);for(y=ee(y,2),f=ee(f,2);!L(y);){var d=I.add(y);d.l(m)<=0&&(g=g.add(f),I=d),y=ee(y,1),f=ee(f,1)}return u=X(m,g.j(u)),new Z(g,u)}for(g=b;m.l(u)>=0;){for(f=Math.max(1,Math.floor(m.m()/u.m())),y=Math.ceil(Math.log(f)/Math.LN2),y=y<=48?1:Math.pow(2,y-48),I=E(f),d=I.j(u);V(d)||d.l(m)>0;)f-=y,I=E(f),d=I.j(u);L(I)&&(I=A),g=g.add(I),m=X(m,d)}return new Z(g,m)}n.B=function(m){return Te(this,m).h},n.and=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)&m.i(y);return new h(f,this.h&m.h)},n.or=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)|m.i(y);return new h(f,this.h|m.h)},n.xor=function(m){const u=Math.max(this.g.length,m.g.length),f=[];for(let y=0;y<u;y++)f[y]=this.i(y)^m.i(y);return new h(f,this.h^m.h)};function Ae(m){const u=m.g.length+1,f=[];for(let y=0;y<u;y++)f[y]=m.i(y)<<1|m.i(y-1)>>>31;return new h(f,m.h)}function ee(m,u){const f=u>>5;u%=32;const y=m.g.length-f,g=[];for(let I=0;I<y;I++)g[I]=u>0?m.i(I+f)>>>u|m.i(I+f+1)<<32-u:m.i(I+f);return new h(g,m.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.B,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=E,h.fromString=S,Vi=h}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});var dn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof dn=="object"&&dn];for(var o=0;o<i.length;++o){var a=i[o];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var r=t(this);function s(i,o){if(o)e:{var a=r;i=i.split(".");for(var l=0;l<i.length-1;l++){var _=i[l];if(!(_ in a))break e;a=a[_]}i=i[i.length-1],l=a[i],o=o(l),o!=l&&o!=null&&e(a,i,{configurable:!0,writable:!0,value:o})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(o){var a=[],l;for(l in o)Object.prototype.hasOwnProperty.call(o,l)&&a.push([l,o[l]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},h=this||self;function p(i){var o=typeof i;return o=="object"&&i!=null||o=="function"}function w(i,o,a){return i.call.apply(i.bind,arguments)}function E(i,o,a){return E=w,E.apply(null,arguments)}function S(i,o){var a=Array.prototype.slice.call(arguments,1);return function(){var l=a.slice();return l.push.apply(l,arguments),i.apply(this,l)}}function b(i,o){function a(){}a.prototype=o.prototype,i.Z=o.prototype,i.prototype=new a,i.prototype.constructor=i,i.Ob=function(l,_,v){for(var T=Array(arguments.length-2),R=2;R<arguments.length;R++)T[R-2]=arguments[R];return o.prototype[_].apply(l,T)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function x(i){const o=i.length;if(o>0){const a=Array(o);for(let l=0;l<o;l++)a[l]=i[l];return a}return[]}function L(i,o){for(let l=1;l<arguments.length;l++){const _=arguments[l];var a=typeof _;if(a=a!="object"?a:_?Array.isArray(_)?"array":a:"null",a=="array"||a=="object"&&typeof _.length=="number"){a=i.length||0;const v=_.length||0;i.length=a+v;for(let T=0;T<v;T++)i[a+T]=_[T]}else i.push(_)}}class V{constructor(o,a){this.i=o,this.j=a,this.h=0,this.g=null}get(){let o;return this.h>0?(this.h--,o=this.g,this.g=o.next,o.next=null):o=this.i(),o}}function U(i){h.setTimeout(()=>{throw i},0)}function X(){var i=m;let o=null;return i.g&&(o=i.g,i.g=i.g.next,i.g||(i.h=null),o.next=null),o}class Y{constructor(){this.h=this.g=null}add(o,a){const l=Z.get();l.set(o,a),this.h?this.h.next=l:this.g=l,this.h=l}}var Z=new V(()=>new Te,i=>i.reset());class Te{constructor(){this.next=this.g=this.h=null}set(o,a){this.h=o,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let Ae,ee=!1,m=new Y,u=()=>{const i=Promise.resolve(void 0);Ae=()=>{i.then(f)}};function f(){for(var i;i=X();){try{i.h.call(i.g)}catch(a){U(a)}var o=Z;o.j(i),o.h<100&&(o.h++,i.next=o.g,o.g=i)}ee=!1}function y(){this.u=this.u,this.C=this.C}y.prototype.u=!1,y.prototype.dispose=function(){this.u||(this.u=!0,this.N())},y.prototype[Symbol.dispose]=function(){this.dispose()},y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function g(i,o){this.type=i,this.g=this.target=o,this.defaultPrevented=!1}g.prototype.h=function(){this.defaultPrevented=!0};var I=(function(){if(!h.addEventListener||!Object.defineProperty)return!1;var i=!1,o=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const a=()=>{};h.addEventListener("test",a,o),h.removeEventListener("test",a,o)}catch{}return i})();function d(i){return/^[\s\xa0]*$/.test(i)}function K(i,o){g.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,o)}b(K,g),K.prototype.init=function(i,o){const a=this.type=i.type,l=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=o,o=i.relatedTarget,o||(a=="mouseover"?o=i.fromElement:a=="mouseout"&&(o=i.toElement)),this.relatedTarget=o,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&K.Z.h.call(this)},K.prototype.h=function(){K.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var $e="closure_listenable_"+(Math.random()*1e6|0),Aa=0;function Sa(i,o,a,l,_){this.listener=i,this.proxy=null,this.src=o,this.type=a,this.capture=!!l,this.ha=_,this.key=++Aa,this.da=this.fa=!1}function Qt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Zt(i,o,a){for(const l in i)o.call(a,i[l],l,i)}function ba(i,o){for(const a in i)o.call(void 0,i[a],a,i)}function Xi(i){const o={};for(const a in i)o[a]=i[a];return o}const Yi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qi(i,o){let a,l;for(let _=1;_<arguments.length;_++){l=arguments[_];for(a in l)i[a]=l[a];for(let v=0;v<Yi.length;v++)a=Yi[v],Object.prototype.hasOwnProperty.call(l,a)&&(i[a]=l[a])}}function en(i){this.src=i,this.g={},this.h=0}en.prototype.add=function(i,o,a,l,_){const v=i.toString();i=this.g[v],i||(i=this.g[v]=[],this.h++);const T=xn(i,o,l,_);return T>-1?(o=i[T],a||(o.fa=!1)):(o=new Sa(o,this.src,v,!!l,_),o.fa=a,i.push(o)),o};function Un(i,o){const a=o.type;if(a in i.g){var l=i.g[a],_=Array.prototype.indexOf.call(l,o,void 0),v;(v=_>=0)&&Array.prototype.splice.call(l,_,1),v&&(Qt(o),i.g[a].length==0&&(delete i.g[a],i.h--))}}function xn(i,o,a,l){for(let _=0;_<i.length;++_){const v=i[_];if(!v.da&&v.listener==o&&v.capture==!!a&&v.ha==l)return _}return-1}var Fn="closure_lm_"+(Math.random()*1e6|0),Vn={};function Zi(i,o,a,l,_){if(Array.isArray(o)){for(let v=0;v<o.length;v++)Zi(i,o[v],a,l,_);return null}return a=nr(a),i&&i[$e]?i.J(o,a,p(l)?!!l.capture:!1,_):Ca(i,o,a,!1,l,_)}function Ca(i,o,a,l,_,v){if(!o)throw Error("Invalid event type");const T=p(_)?!!_.capture:!!_;let R=Bn(i);if(R||(i[Fn]=R=new en(i)),a=R.add(o,a,l,T,v),a.proxy)return a;if(l=Ra(),a.proxy=l,l.src=i,l.listener=a,i.addEventListener)I||(_=T),_===void 0&&(_=!1),i.addEventListener(o.toString(),l,_);else if(i.attachEvent)i.attachEvent(tr(o.toString()),l);else if(i.addListener&&i.removeListener)i.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return a}function Ra(){function i(a){return o.call(i.src,i.listener,a)}const o=Pa;return i}function er(i,o,a,l,_){if(Array.isArray(o))for(var v=0;v<o.length;v++)er(i,o[v],a,l,_);else l=p(l)?!!l.capture:!!l,a=nr(a),i&&i[$e]?(i=i.i,v=String(o).toString(),v in i.g&&(o=i.g[v],a=xn(o,a,l,_),a>-1&&(Qt(o[a]),Array.prototype.splice.call(o,a,1),o.length==0&&(delete i.g[v],i.h--)))):i&&(i=Bn(i))&&(o=i.g[o.toString()],i=-1,o&&(i=xn(o,a,l,_)),(a=i>-1?o[i]:null)&&jn(a))}function jn(i){if(typeof i!="number"&&i&&!i.da){var o=i.src;if(o&&o[$e])Un(o.i,i);else{var a=i.type,l=i.proxy;o.removeEventListener?o.removeEventListener(a,l,i.capture):o.detachEvent?o.detachEvent(tr(a),l):o.addListener&&o.removeListener&&o.removeListener(l),(a=Bn(o))?(Un(a,i),a.h==0&&(a.src=null,o[Fn]=null)):Qt(i)}}}function tr(i){return i in Vn?Vn[i]:Vn[i]="on"+i}function Pa(i,o){if(i.da)i=!0;else{o=new K(o,this);const a=i.listener,l=i.ha||i.src;i.fa&&jn(i),i=a.call(l,o)}return i}function Bn(i){return i=i[Fn],i instanceof en?i:null}var $n="__closure_events_fn_"+(Math.random()*1e9>>>0);function nr(i){return typeof i=="function"?i:(i[$n]||(i[$n]=function(o){return i.handleEvent(o)}),i[$n])}function H(){y.call(this),this.i=new en(this),this.M=this,this.G=null}b(H,y),H.prototype[$e]=!0,H.prototype.removeEventListener=function(i,o,a,l){er(this,i,o,a,l)};function W(i,o){var a,l=i.G;if(l)for(a=[];l;l=l.G)a.push(l);if(i=i.M,l=o.type||o,typeof o=="string")o=new g(o,i);else if(o instanceof g)o.target=o.target||i;else{var _=o;o=new g(l,i),Qi(o,_)}_=!0;let v,T;if(a)for(T=a.length-1;T>=0;T--)v=o.g=a[T],_=tn(v,l,!0,o)&&_;if(v=o.g=i,_=tn(v,l,!0,o)&&_,_=tn(v,l,!1,o)&&_,a)for(T=0;T<a.length;T++)v=o.g=a[T],_=tn(v,l,!1,o)&&_}H.prototype.N=function(){if(H.Z.N.call(this),this.i){var i=this.i;for(const o in i.g){const a=i.g[o];for(let l=0;l<a.length;l++)Qt(a[l]);delete i.g[o],i.h--}}this.G=null},H.prototype.J=function(i,o,a,l){return this.i.add(String(i),o,!1,a,l)},H.prototype.K=function(i,o,a,l){return this.i.add(String(i),o,!0,a,l)};function tn(i,o,a,l){if(o=i.i.g[String(o)],!o)return!0;o=o.concat();let _=!0;for(let v=0;v<o.length;++v){const T=o[v];if(T&&!T.da&&T.capture==a){const R=T.listener,B=T.ha||T.src;T.fa&&Un(i.i,T),_=R.call(B,l)!==!1&&_}}return _&&!l.defaultPrevented}function ka(i,o){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=E(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(o)>2147483647?-1:h.setTimeout(i,o||0)}function ir(i){i.g=ka(()=>{i.g=null,i.i&&(i.i=!1,ir(i))},i.l);const o=i.h;i.h=null,i.m.apply(null,o)}class Oa extends y{constructor(o,a){super(),this.m=o,this.l=a,this.h=null,this.i=!1,this.g=null}j(o){this.h=arguments,this.g?this.i=!0:ir(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(i){y.call(this),this.h=i,this.g={}}b(_t,y);var rr=[];function sr(i){Zt(i.g,function(o,a){this.g.hasOwnProperty(a)&&jn(o)},i),i.g={}}_t.prototype.N=function(){_t.Z.N.call(this),sr(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hn=h.JSON.stringify,Da=h.JSON.parse,Na=class{stringify(i){return h.JSON.stringify(i,void 0)}parse(i){return h.JSON.parse(i,void 0)}};function or(){}function La(){}var wt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Wn(){g.call(this,"d")}b(Wn,g);function zn(){g.call(this,"c")}b(zn,g);var ot={},ar=null;function Gn(){return ar=ar||new H}ot.Ia="serverreachability";function cr(i){g.call(this,ot.Ia,i)}b(cr,g);function It(i){const o=Gn();W(o,new cr(o))}ot.STAT_EVENT="statevent";function hr(i,o){g.call(this,ot.STAT_EVENT,i),this.stat=o}b(hr,g);function z(i){const o=Gn();W(o,new hr(o,i))}ot.Ja="timingevent";function lr(i,o){g.call(this,ot.Ja,i),this.size=o}b(lr,g);function vt(i,o){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){i()},o)}function Et(){this.g=!0}Et.prototype.ua=function(){this.g=!1};function Ma(i,o,a,l,_,v){i.info(function(){if(i.g)if(v){var T="",R=v.split("&");for(let N=0;N<R.length;N++){var B=R[N].split("=");if(B.length>1){const $=B[0];B=B[1];const he=$.split("_");T=he.length>=2&&he[1]=="type"?T+($+"="+B+"&"):T+($+"=redacted&")}}}else T=null;else T=v;return"XMLHTTP REQ ("+l+") [attempt "+_+"]: "+o+`
`+a+`
`+T})}function Ua(i,o,a,l,_,v,T){i.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+_+"]: "+o+`
`+a+`
`+v+" "+T})}function at(i,o,a,l){i.info(function(){return"XMLHTTP TEXT ("+o+"): "+Fa(i,a)+(l?" "+l:"")})}function xa(i,o){i.info(function(){return"TIMEOUT: "+o})}Et.prototype.info=function(){};function Fa(i,o){if(!i.g)return o;if(!o)return null;try{const v=JSON.parse(o);if(v){for(i=0;i<v.length;i++)if(Array.isArray(v[i])){var a=v[i];if(!(a.length<2)){var l=a[1];if(Array.isArray(l)&&!(l.length<1)){var _=l[0];if(_!="noop"&&_!="stop"&&_!="close")for(let T=1;T<l.length;T++)l[T]=""}}}}return Hn(v)}catch{return o}}var qn={NO_ERROR:0,TIMEOUT:8},Va={},ur;function Kn(){}b(Kn,or),Kn.prototype.g=function(){return new XMLHttpRequest},ur=new Kn;function Tt(i){return encodeURIComponent(String(i))}function ja(i){var o=1;i=i.split(":");const a=[];for(;o>0&&i.length;)a.push(i.shift()),o--;return i.length&&a.push(i.join(":")),a}function Se(i,o,a,l){this.j=i,this.i=o,this.l=a,this.S=l||1,this.V=new _t(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new dr}function dr(){this.i=null,this.g="",this.h=!1}var fr={},Jn={};function Xn(i,o,a){i.M=1,i.A=rn(ce(o)),i.u=a,i.R=!0,pr(i,null)}function pr(i,o){i.F=Date.now(),nn(i),i.B=ce(i.A);var a=i.B,l=i.S;Array.isArray(l)||(l=[String(l)]),Cr(a.i,"t",l),i.C=0,a=i.j.L,i.h=new dr,i.g=zr(i.j,a?o:null,!i.u),i.P>0&&(i.O=new Oa(E(i.Y,i,i.g),i.P)),o=i.V,a=i.g,l=i.ba;var _="readystatechange";Array.isArray(_)||(_&&(rr[0]=_.toString()),_=rr);for(let v=0;v<_.length;v++){const T=Zi(a,_[v],l||o.handleEvent,!1,o.h||o);if(!T)break;o.g[T.key]=T}o=i.J?Xi(i.J):{},i.u?(i.v||(i.v="POST"),o["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,o)):(i.v="GET",i.g.ea(i.B,i.v,null,o)),It(),Ma(i.i,i.v,i.B,i.l,i.S,i.u)}Se.prototype.ba=function(i){i=i.target;const o=this.O;o&&Re(i)==3?o.j():this.Y(i)},Se.prototype.Y=function(i){try{if(i==this.g)e:{const R=Re(this.g),B=this.g.ya(),N=this.g.ca();if(!(R<3)&&(R!=3||this.g&&(this.h.h||this.g.la()||Lr(this.g)))){this.K||R!=4||B==7||(B==8||N<=0?It(3):It(2)),Yn(this);var o=this.g.ca();this.X=o;var a=Ba(this);if(this.o=o==200,Ua(this.i,this.v,this.B,this.l,this.S,R,o),this.o){if(this.U&&!this.L){t:{if(this.g){var l,_=this.g;if((l=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(l)){var v=l;break t}}v=null}if(i=v)at(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Qn(this,i);else{this.o=!1,this.m=3,z(12),He(this),At(this);break e}}if(this.R){i=!0;let $;for(;!this.K&&this.C<a.length;)if($=$a(this,a),$==Jn){R==4&&(this.m=4,z(14),i=!1),at(this.i,this.l,null,"[Incomplete Response]");break}else if($==fr){this.m=4,z(15),at(this.i,this.l,a,"[Invalid Chunk]"),i=!1;break}else at(this.i,this.l,$,null),Qn(this,$);if(gr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),R!=4||a.length!=0||this.h.h||(this.m=1,z(16),i=!1),this.o=this.o&&i,!i)at(this.i,this.l,a,"[Invalid Chunked Response]"),He(this),At(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),oi(T),T.P=!0,z(11))}}else at(this.i,this.l,a,null),Qn(this,a);R==4&&He(this),this.o&&!this.K&&(R==4?Br(this.j,this):(this.o=!1,nn(this)))}else nc(this.g),o==400&&a.indexOf("Unknown SID")>0?(this.m=3,z(12)):(this.m=0,z(13)),He(this),At(this)}}}catch{}finally{}};function Ba(i){if(!gr(i))return i.g.la();const o=Lr(i.g);if(o==="")return"";let a="";const l=o.length,_=Re(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return He(i),At(i),"";i.h.i=new h.TextDecoder}for(let v=0;v<l;v++)i.h.h=!0,a+=i.h.i.decode(o[v],{stream:!(_&&v==l-1)});return o.length=0,i.h.g+=a,i.C=0,i.h.g}function gr(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function $a(i,o){var a=i.C,l=o.indexOf(`
`,a);return l==-1?Jn:(a=Number(o.substring(a,l)),isNaN(a)?fr:(l+=1,l+a>o.length?Jn:(o=o.slice(l,l+a),i.C=l+a,o)))}Se.prototype.cancel=function(){this.K=!0,He(this)};function nn(i){i.T=Date.now()+i.H,mr(i,i.H)}function mr(i,o){if(i.D!=null)throw Error("WatchDog timer not null");i.D=vt(E(i.aa,i),o)}function Yn(i){i.D&&(h.clearTimeout(i.D),i.D=null)}Se.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(xa(this.i,this.B),this.M!=2&&(It(),z(17)),He(this),this.m=2,At(this)):mr(this,this.T-i)};function At(i){i.j.I==0||i.K||Br(i.j,i)}function He(i){Yn(i);var o=i.O;o&&typeof o.dispose=="function"&&o.dispose(),i.O=null,sr(i.V),i.g&&(o=i.g,i.g=null,o.abort(),o.dispose())}function Qn(i,o){try{var a=i.j;if(a.I!=0&&(a.g==i||Zn(a.h,i))){if(!i.L&&Zn(a.h,i)&&a.I==3){try{var l=a.Ba.g.parse(o)}catch{l=null}if(Array.isArray(l)&&l.length==3){var _=l;if(_[0]==0){e:if(!a.v){if(a.g)if(a.g.F+3e3<i.F)hn(a),an(a);else break e;si(a),z(18)}}else a.xa=_[1],0<a.xa-a.K&&_[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=vt(E(a.Va,a),6e3));wr(a.h)<=1&&a.ta&&(a.ta=void 0)}else ze(a,11)}else if((i.L||a.g==i)&&hn(a),!d(o))for(_=a.Ba.g.parse(o),o=0;o<_.length;o++){let N=_[o];const $=N[0];if(!($<=a.K))if(a.K=$,N=N[1],a.I==2)if(N[0]=="c"){a.M=N[1],a.ba=N[2];const he=N[3];he!=null&&(a.ka=he,a.j.info("VER="+a.ka));const Ge=N[4];Ge!=null&&(a.za=Ge,a.j.info("SVER="+a.za));const Pe=N[5];Pe!=null&&typeof Pe=="number"&&Pe>0&&(l=1.5*Pe,a.O=l,a.j.info("backChannelRequestTimeoutMs_="+l)),l=a;const ke=i.g;if(ke){const ln=ke.g?ke.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ln){var v=l.h;v.g||ln.indexOf("spdy")==-1&&ln.indexOf("quic")==-1&&ln.indexOf("h2")==-1||(v.j=v.l,v.g=new Set,v.h&&(ei(v,v.h),v.h=null))}if(l.G){const ai=ke.g?ke.g.getResponseHeader("X-HTTP-Session-Id"):null;ai&&(l.wa=ai,M(l.J,l.G,ai))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-i.F,a.j.info("Handshake RTT: "+a.T+"ms")),l=a;var T=i;if(l.na=Wr(l,l.L?l.ba:null,l.W),T.L){Ir(l.h,T);var R=T,B=l.O;B&&(R.H=B),R.D&&(Yn(R),nn(R)),l.g=T}else Vr(l);a.i.length>0&&cn(a)}else N[0]!="stop"&&N[0]!="close"||ze(a,7);else a.I==3&&(N[0]=="stop"||N[0]=="close"?N[0]=="stop"?ze(a,7):ri(a):N[0]!="noop"&&a.l&&a.l.qa(N),a.A=0)}}It(4)}catch{}}var Ha=class{constructor(i,o){this.g=i,this.map=o}};function yr(i){this.l=i||10,h.PerformanceNavigationTiming?(i=h.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _r(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function wr(i){return i.h?1:i.g?i.g.size:0}function Zn(i,o){return i.h?i.h==o:i.g?i.g.has(o):!1}function ei(i,o){i.g?i.g.add(o):i.h=o}function Ir(i,o){i.h&&i.h==o?i.h=null:i.g&&i.g.has(o)&&i.g.delete(o)}yr.prototype.cancel=function(){if(this.i=vr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function vr(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let o=i.i;for(const a of i.g.values())o=o.concat(a.G);return o}return x(i.i)}var Er=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wa(i,o){if(i){i=i.split("&");for(let a=0;a<i.length;a++){const l=i[a].indexOf("=");let _,v=null;l>=0?(_=i[a].substring(0,l),v=i[a].substring(l+1)):_=i[a],o(_,v?decodeURIComponent(v.replace(/\+/g," ")):"")}}}function be(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let o;i instanceof be?(this.l=i.l,St(this,i.j),this.o=i.o,this.g=i.g,bt(this,i.u),this.h=i.h,ti(this,Rr(i.i)),this.m=i.m):i&&(o=String(i).match(Er))?(this.l=!1,St(this,o[1]||"",!0),this.o=Ct(o[2]||""),this.g=Ct(o[3]||"",!0),bt(this,o[4]),this.h=Ct(o[5]||"",!0),ti(this,o[6]||"",!0),this.m=Ct(o[7]||"")):(this.l=!1,this.i=new Pt(null,this.l))}be.prototype.toString=function(){const i=[];var o=this.j;o&&i.push(Rt(o,Tr,!0),":");var a=this.g;return(a||o=="file")&&(i.push("//"),(o=this.o)&&i.push(Rt(o,Tr,!0),"@"),i.push(Tt(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&i.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&i.push("/"),i.push(Rt(a,a.charAt(0)=="/"?qa:Ga,!0))),(a=this.i.toString())&&i.push("?",a),(a=this.m)&&i.push("#",Rt(a,Ja)),i.join("")},be.prototype.resolve=function(i){const o=ce(this);let a=!!i.j;a?St(o,i.j):a=!!i.o,a?o.o=i.o:a=!!i.g,a?o.g=i.g:a=i.u!=null;var l=i.h;if(a)bt(o,i.u);else if(a=!!i.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var _=o.h.lastIndexOf("/");_!=-1&&(l=o.h.slice(0,_+1)+l)}if(_=l,_==".."||_==".")l="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){l=_.lastIndexOf("/",0)==0,_=_.split("/");const v=[];for(let T=0;T<_.length;){const R=_[T++];R=="."?l&&T==_.length&&v.push(""):R==".."?((v.length>1||v.length==1&&v[0]!="")&&v.pop(),l&&T==_.length&&v.push("")):(v.push(R),l=!0)}l=v.join("/")}else l=_}return a?o.h=l:a=i.i.toString()!=="",a?ti(o,Rr(i.i)):a=!!i.m,a&&(o.m=i.m),o};function ce(i){return new be(i)}function St(i,o,a){i.j=a?Ct(o,!0):o,i.j&&(i.j=i.j.replace(/:$/,""))}function bt(i,o){if(o){if(o=Number(o),isNaN(o)||o<0)throw Error("Bad port number "+o);i.u=o}else i.u=null}function ti(i,o,a){o instanceof Pt?(i.i=o,Xa(i.i,i.l)):(a||(o=Rt(o,Ka)),i.i=new Pt(o,i.l))}function M(i,o,a){i.i.set(o,a)}function rn(i){return M(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Ct(i,o){return i?o?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Rt(i,o,a){return typeof i=="string"?(i=encodeURI(i).replace(o,za),a&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function za(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Tr=/[#\/\?@]/g,Ga=/[#\?:]/g,qa=/[#\?]/g,Ka=/[#\?@]/g,Ja=/#/g;function Pt(i,o){this.h=this.g=null,this.i=i||null,this.j=!!o}function We(i){i.g||(i.g=new Map,i.h=0,i.i&&Wa(i.i,function(o,a){i.add(decodeURIComponent(o.replace(/\+/g," ")),a)}))}n=Pt.prototype,n.add=function(i,o){We(this),this.i=null,i=ct(this,i);let a=this.g.get(i);return a||this.g.set(i,a=[]),a.push(o),this.h+=1,this};function Ar(i,o){We(i),o=ct(i,o),i.g.has(o)&&(i.i=null,i.h-=i.g.get(o).length,i.g.delete(o))}function Sr(i,o){return We(i),o=ct(i,o),i.g.has(o)}n.forEach=function(i,o){We(this),this.g.forEach(function(a,l){a.forEach(function(_){i.call(o,_,l,this)},this)},this)};function br(i,o){We(i);let a=[];if(typeof o=="string")Sr(i,o)&&(a=a.concat(i.g.get(ct(i,o))));else for(i=Array.from(i.g.values()),o=0;o<i.length;o++)a=a.concat(i[o]);return a}n.set=function(i,o){return We(this),this.i=null,i=ct(this,i),Sr(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[o]),this.h+=1,this},n.get=function(i,o){return i?(i=br(this,i),i.length>0?String(i[0]):o):o};function Cr(i,o,a){Ar(i,o),a.length>0&&(i.i=null,i.g.set(ct(i,o),x(a)),i.h+=a.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],o=Array.from(this.g.keys());for(let l=0;l<o.length;l++){var a=o[l];const _=Tt(a);a=br(this,a);for(let v=0;v<a.length;v++){let T=_;a[v]!==""&&(T+="="+Tt(a[v])),i.push(T)}}return this.i=i.join("&")};function Rr(i){const o=new Pt;return o.i=i.i,i.g&&(o.g=new Map(i.g),o.h=i.h),o}function ct(i,o){return o=String(o),i.j&&(o=o.toLowerCase()),o}function Xa(i,o){o&&!i.j&&(We(i),i.i=null,i.g.forEach(function(a,l){const _=l.toLowerCase();l!=_&&(Ar(this,l),Cr(this,_,a))},i)),i.j=o}function Ya(i,o){const a=new Et;if(h.Image){const l=new Image;l.onload=S(Ce,a,"TestLoadImage: loaded",!0,o,l),l.onerror=S(Ce,a,"TestLoadImage: error",!1,o,l),l.onabort=S(Ce,a,"TestLoadImage: abort",!1,o,l),l.ontimeout=S(Ce,a,"TestLoadImage: timeout",!1,o,l),h.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=i}else o(!1)}function Qa(i,o){const a=new Et,l=new AbortController,_=setTimeout(()=>{l.abort(),Ce(a,"TestPingServer: timeout",!1,o)},1e4);fetch(i,{signal:l.signal}).then(v=>{clearTimeout(_),v.ok?Ce(a,"TestPingServer: ok",!0,o):Ce(a,"TestPingServer: server error",!1,o)}).catch(()=>{clearTimeout(_),Ce(a,"TestPingServer: error",!1,o)})}function Ce(i,o,a,l,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),l(a)}catch{}}function Za(){this.g=new Na}function ni(i){this.i=i.Sb||null,this.h=i.ab||!1}b(ni,or),ni.prototype.g=function(){return new sn(this.i,this.h)};function sn(i,o){H.call(this),this.H=i,this.o=o,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(sn,H),n=sn.prototype,n.open=function(i,o){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=o,this.readyState=1,Ot(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const o={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(o.body=i),(this.H||h).fetch(new Request(this.D,o)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,kt(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Ot(this)),this.g&&(this.readyState=3,Ot(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Pr(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function Pr(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var o=i.value?i.value:new Uint8Array(0);(o=this.B.decode(o,{stream:!i.done}))&&(this.response=this.responseText+=o)}i.done?kt(this):Ot(this),this.readyState==3&&Pr(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,kt(this))},n.Na=function(i){this.g&&(this.response=i,kt(this))},n.ga=function(){this.g&&kt(this)};function kt(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Ot(i)}n.setRequestHeader=function(i,o){this.A.append(i,o)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],o=this.h.entries();for(var a=o.next();!a.done;)a=a.value,i.push(a[0]+": "+a[1]),a=o.next();return i.join(`\r
`)};function Ot(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function kr(i){let o="";return Zt(i,function(a,l){o+=l,o+=":",o+=a,o+=`\r
`}),o}function ii(i,o,a){e:{for(l in a){var l=!1;break e}l=!0}l||(a=kr(a),typeof i=="string"?a!=null&&Tt(a):M(i,o,a))}function F(i){H.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(F,H);var ec=/^https?$/i,tc=["POST","PUT"];n=F.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,o,a,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);o=o?o.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ur.g(),this.g.onreadystatechange=A(E(this.Ca,this));try{this.B=!0,this.g.open(o,String(i),!0),this.B=!1}catch(v){Or(this,v);return}if(i=a||"",a=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var _ in l)a.set(_,l[_]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const v of l.keys())a.set(v,l.get(v));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(a.keys()).find(v=>v.toLowerCase()=="content-type"),_=h.FormData&&i instanceof h.FormData,!(Array.prototype.indexOf.call(tc,o,void 0)>=0)||l||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[v,T]of a)this.g.setRequestHeader(v,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(v){Or(this,v)}};function Or(i,o){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=o,i.o=5,Dr(i),on(i)}function Dr(i){i.A||(i.A=!0,W(i,"complete"),W(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,W(this,"complete"),W(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),F.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Nr(this):this.Xa())},n.Xa=function(){Nr(this)};function Nr(i){if(i.h&&typeof c<"u"){if(i.v&&Re(i)==4)setTimeout(i.Ca.bind(i),0);else if(W(i,"readystatechange"),Re(i)==4){i.h=!1;try{const v=i.ca();e:switch(v){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var o=!0;break e;default:o=!1}var a;if(!(a=o)){var l;if(l=v===0){let T=String(i.D).match(Er)[1]||null;!T&&h.self&&h.self.location&&(T=h.self.location.protocol.slice(0,-1)),l=!ec.test(T?T.toLowerCase():"")}a=l}if(a)W(i,"complete"),W(i,"success");else{i.o=6;try{var _=Re(i)>2?i.g.statusText:""}catch{_=""}i.l=_+" ["+i.ca()+"]",Dr(i)}}finally{on(i)}}}}function on(i,o){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const a=i.g;i.g=null,o||W(i,"ready");try{a.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Re(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Re(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var o=this.g.responseText;return i&&o.indexOf(i)==0&&(o=o.substring(i.length)),Da(o)}};function Lr(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function nc(i){const o={};i=(i.g&&Re(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<i.length;l++){if(d(i[l]))continue;var a=ja(i[l]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const v=o[_]||[];o[_]=v,v.push(a)}ba(o,function(l){return l.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Dt(i,o,a){return a&&a.internalChannelParams&&a.internalChannelParams[i]||o}function Mr(i){this.za=0,this.i=[],this.j=new Et,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Dt("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Dt("baseRetryDelayMs",5e3,i),this.Za=Dt("retryDelaySeedMs",1e4,i),this.Ta=Dt("forwardChannelMaxRetries",2,i),this.va=Dt("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new yr(i&&i.concurrentRequestLimit),this.Ba=new Za,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Mr.prototype,n.ka=8,n.I=1,n.connect=function(i,o,a,l){z(0),this.W=i,this.H=o||{},a&&l!==void 0&&(this.H.OSID=a,this.H.OAID=l),this.F=this.X,this.J=Wr(this,null,this.W),cn(this)};function ri(i){if(Ur(i),i.I==3){var o=i.V++,a=ce(i.J);if(M(a,"SID",i.M),M(a,"RID",o),M(a,"TYPE","terminate"),Nt(i,a),o=new Se(i,i.j,o),o.M=2,o.A=rn(ce(a)),a=!1,h.navigator&&h.navigator.sendBeacon)try{a=h.navigator.sendBeacon(o.A.toString(),"")}catch{}!a&&h.Image&&(new Image().src=o.A,a=!0),a||(o.g=zr(o.j,null),o.g.ea(o.A)),o.F=Date.now(),nn(o)}Hr(i)}function an(i){i.g&&(oi(i),i.g.cancel(),i.g=null)}function Ur(i){an(i),i.v&&(h.clearTimeout(i.v),i.v=null),hn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&h.clearTimeout(i.m),i.m=null)}function cn(i){if(!_r(i.h)&&!i.m){i.m=!0;var o=i.Ea;Ae||u(),ee||(Ae(),ee=!0),m.add(o,i),i.D=0}}function ic(i,o){return wr(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=o.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=vt(E(i.Ea,i,o),$r(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const _=new Se(this,this.j,i);let v=this.o;if(this.U&&(v?(v=Xi(v),Qi(v,this.U)):v=this.U),this.u!==null||this.R||(_.J=v,v=null),this.S)e:{for(var o=0,a=0;a<this.i.length;a++){t:{var l=this.i[a];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break t}l=void 0}if(l===void 0)break;if(o+=l,o>4096){o=a;break e}if(o===4096||a===this.i.length-1){o=a+1;break e}}o=1e3}else o=1e3;o=Fr(this,_,o),a=ce(this.J),M(a,"RID",i),M(a,"CVER",22),this.G&&M(a,"X-HTTP-Session-Id",this.G),Nt(this,a),v&&(this.R?o="headers="+Tt(kr(v))+"&"+o:this.u&&ii(a,this.u,v)),ei(this.h,_),this.Ra&&M(a,"TYPE","init"),this.S?(M(a,"$req",o),M(a,"SID","null"),_.U=!0,Xn(_,a,null)):Xn(_,a,o),this.I=2}}else this.I==3&&(i?xr(this,i):this.i.length==0||_r(this.h)||xr(this))};function xr(i,o){var a;o?a=o.l:a=i.V++;const l=ce(i.J);M(l,"SID",i.M),M(l,"RID",a),M(l,"AID",i.K),Nt(i,l),i.u&&i.o&&ii(l,i.u,i.o),a=new Se(i,i.j,a,i.D+1),i.u===null&&(a.J=i.o),o&&(i.i=o.G.concat(i.i)),o=Fr(i,a,1e3),a.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ei(i.h,a),Xn(a,l,o)}function Nt(i,o){i.H&&Zt(i.H,function(a,l){M(o,l,a)}),i.l&&Zt({},function(a,l){M(o,l,a)})}function Fr(i,o,a){a=Math.min(i.i.length,a);const l=i.l?E(i.l.Ka,i.l,i):null;e:{var _=i.i;let R=-1;for(;;){const B=["count="+a];R==-1?a>0?(R=_[0].g,B.push("ofs="+R)):R=0:B.push("ofs="+R);let N=!0;for(let $=0;$<a;$++){var v=_[$].g;const he=_[$].map;if(v-=R,v<0)R=Math.max(0,_[$].g-100),N=!1;else try{v="req"+v+"_"||"";try{var T=he instanceof Map?he:Object.entries(he);for(const[Ge,Pe]of T){let ke=Pe;p(Pe)&&(ke=Hn(Pe)),B.push(v+Ge+"="+encodeURIComponent(ke))}}catch(Ge){throw B.push(v+"type="+encodeURIComponent("_badmap")),Ge}}catch{l&&l(he)}}if(N){T=B.join("&");break e}}T=void 0}return i=i.i.splice(0,a),o.G=i,T}function Vr(i){if(!i.g&&!i.v){i.Y=1;var o=i.Da;Ae||u(),ee||(Ae(),ee=!0),m.add(o,i),i.A=0}}function si(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=vt(E(i.Da,i),$r(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,jr(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=vt(E(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,z(10),an(this),jr(this))};function oi(i){i.B!=null&&(h.clearTimeout(i.B),i.B=null)}function jr(i){i.g=new Se(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var o=ce(i.na);M(o,"RID","rpc"),M(o,"SID",i.M),M(o,"AID",i.K),M(o,"CI",i.F?"0":"1"),!i.F&&i.ia&&M(o,"TO",i.ia),M(o,"TYPE","xmlhttp"),Nt(i,o),i.u&&i.o&&ii(o,i.u,i.o),i.O&&(i.g.H=i.O);var a=i.g;i=i.ba,a.M=1,a.A=rn(ce(o)),a.u=null,a.R=!0,pr(a,i)}n.Va=function(){this.C!=null&&(this.C=null,an(this),si(this),z(19))};function hn(i){i.C!=null&&(h.clearTimeout(i.C),i.C=null)}function Br(i,o){var a=null;if(i.g==o){hn(i),oi(i),i.g=null;var l=2}else if(Zn(i.h,o))a=o.G,Ir(i.h,o),l=1;else return;if(i.I!=0){if(o.o)if(l==1){a=o.u?o.u.length:0,o=Date.now()-o.F;var _=i.D;l=Gn(),W(l,new lr(l,a)),cn(i)}else Vr(i);else if(_=o.m,_==3||_==0&&o.X>0||!(l==1&&ic(i,o)||l==2&&si(i)))switch(a&&a.length>0&&(o=i.h,o.i=o.i.concat(a)),_){case 1:ze(i,5);break;case 4:ze(i,10);break;case 3:ze(i,6);break;default:ze(i,2)}}}function $r(i,o){let a=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(a*=2),a*o}function ze(i,o){if(i.j.info("Error code "+o),o==2){var a=E(i.bb,i),l=i.Ua;const _=!l;l=new be(l||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||St(l,"https"),rn(l),_?Ya(l.toString(),a):Qa(l.toString(),a)}else z(2);i.I=0,i.l&&i.l.pa(o),Hr(i),Ur(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function Hr(i){if(i.I=0,i.ja=[],i.l){const o=vr(i.h);(o.length!=0||i.i.length!=0)&&(L(i.ja,o),L(i.ja,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.oa()}}function Wr(i,o,a){var l=a instanceof be?ce(a):new be(a);if(l.g!="")o&&(l.g=o+"."+l.g),bt(l,l.u);else{var _=h.location;l=_.protocol,o=o?o+"."+_.hostname:_.hostname,_=+_.port;const v=new be(null);l&&St(v,l),o&&(v.g=o),_&&bt(v,_),a&&(v.h=a),l=v}return a=i.G,o=i.wa,a&&o&&M(l,a,o),M(l,"VER",i.ka),Nt(i,l),l}function zr(i,o,a){if(o&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return o=i.Aa&&!i.ma?new F(new ni({ab:a})):new F(i.ma),o.Fa(i.L),o}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gr(){}n=Gr.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function te(i,o){H.call(this),this.g=new Mr(o),this.l=i,this.h=o&&o.messageUrlParams||null,i=o&&o.messageHeaders||null,o&&o.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=o&&o.initMessageHeaders||null,o&&o.messageContentType&&(i?i["X-WebChannel-Content-Type"]=o.messageContentType:i={"X-WebChannel-Content-Type":o.messageContentType}),o&&o.sa&&(i?i["X-WebChannel-Client-Profile"]=o.sa:i={"X-WebChannel-Client-Profile":o.sa}),this.g.U=i,(i=o&&o.Qb)&&!d(i)&&(this.g.u=i),this.A=o&&o.supportsCrossDomainXhr||!1,this.v=o&&o.sendRawJson||!1,(o=o&&o.httpSessionIdParam)&&!d(o)&&(this.g.G=o,i=this.h,i!==null&&o in i&&(i=this.h,o in i&&delete i[o])),this.j=new ht(this)}b(te,H),te.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},te.prototype.close=function(){ri(this.g)},te.prototype.o=function(i){var o=this.g;if(typeof i=="string"){var a={};a.__data__=i,i=a}else this.v&&(a={},a.__data__=Hn(i),i=a);o.i.push(new Ha(o.Ya++,i)),o.I==3&&cn(o)},te.prototype.N=function(){this.g.l=null,delete this.j,ri(this.g),delete this.g,te.Z.N.call(this)};function qr(i){Wn.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var o=i.__sm__;if(o){e:{for(const a in o){i=a;break e}i=void 0}(this.i=i)&&(i=this.i,o=o!==null&&i in o?o[i]:void 0),this.data=o}else this.data=i}b(qr,Wn);function Kr(){zn.call(this),this.status=1}b(Kr,zn);function ht(i){this.g=i}b(ht,Gr),ht.prototype.ra=function(){W(this.g,"a")},ht.prototype.qa=function(i){W(this.g,new qr(i))},ht.prototype.pa=function(i){W(this.g,new Kr)},ht.prototype.oa=function(){W(this.g,"b")},te.prototype.send=te.prototype.o,te.prototype.open=te.prototype.m,te.prototype.close=te.prototype.close,qn.NO_ERROR=0,qn.TIMEOUT=8,qn.HTTP_ERROR=6,Va.COMPLETE="complete",La.EventType=wt,wt.OPEN="a",wt.CLOSE="b",wt.ERROR="c",wt.MESSAGE="d",H.prototype.listen=H.prototype.J,F.prototype.listenOnce=F.prototype.K,F.prototype.getLastError=F.prototype.Ha,F.prototype.getLastErrorCode=F.prototype.ya,F.prototype.getStatus=F.prototype.ca,F.prototype.getResponseJson=F.prototype.La,F.prototype.getResponseText=F.prototype.la,F.prototype.send=F.prototype.ea,F.prototype.setWithCredentials=F.prototype.Fa}).apply(typeof dn<"u"?dn:typeof self<"u"?self:typeof window<"u"?window:{});const Cs="@firebase/firestore",Rs="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xt="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new kn("@firebase/firestore");function se(n,...e){if(mt.logLevel<=D.DEBUG){const t=e.map(ji);mt.debug(`Firestore (${Xt}): ${n}`,...t)}}function Ko(n,...e){if(mt.logLevel<=D.ERROR){const t=e.map(ji);mt.error(`Firestore (${Xt}): ${n}`,...t)}}function Qu(n,...e){if(mt.logLevel<=D.WARN){const t=e.map(ji);mt.warn(`Firestore (${Xt}): ${n}`,...t)}}function ji(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Jo(n,r,t)}function Jo(n,e,t){let r=`FIRESTORE (${Xt}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ko(r),new Error(r)}function Ut(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Jo(e,s,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class O extends ae{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(G.UNAUTHENTICATED)))}shutdown(){}}class ed{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class td{constructor(e){this.t=e,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ut(this.o===void 0,42304);let r=this.i;const s=w=>this.i!==r?(r=this.i,t(w)):Promise.resolve();let c=new xt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new xt,e.enqueueRetryable((()=>s(this.currentUser)))};const h=()=>{const w=c;e.enqueueRetryable((async()=>{await w.promise,await s(this.currentUser)}))},p=w=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=w,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit((w=>p(w))),setTimeout((()=>{if(!this.auth){const w=this.t.getImmediate({optional:!0});w?p(w):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new xt)}}),0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ut(typeof r.accessToken=="string",31837,{l:r}),new Xo(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ut(e===null||typeof e=="string",2055,{h:e}),new G(e)}}class nd{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=G.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class id{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new nd(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(G.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ps{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rd{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,de(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ut(this.o===void 0,3512);const r=c=>{c.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,se("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable((()=>r(c)))};const s=c=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>s(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?s(c):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ps(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ut(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ps(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=sd(40);for(let c=0;c<s.length;++c)r.length<20&&s[c]<t&&(r+=e.charAt(s[c]%62))}return r}}function Ve(n,e){return n<e?-1:n>e?1:0}function ad(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),c=e.charAt(r);if(s!==c)return gi(s)===gi(c)?Ve(s,c):gi(s)?1:-1}return Ve(n.length,e.length)}const cd=55296,hd=57343;function gi(n){const e=n.charCodeAt(0);return e>=cd&&e<=hd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="__name__";class le{constructor(e,t,r){t===void 0?t=0:t>e.length&&$t(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&$t(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return le.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof le?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const c=le.compareSegments(e.get(s),t.get(s));if(c!==0)return c}return Ve(e.length,t.length)}static compareSegments(e,t){const r=le.isNumericId(e),s=le.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?le.extractNumericId(e).compare(le.extractNumericId(t)):ad(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vi.fromString(e.substring(4,e.length-2))}}class ie extends le{construct(e,t,r){return new ie(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ie(t)}static emptyPath(){return new ie([])}}const ld=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends le{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return ld.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ks}static keyField(){return new Ke([ks])}static fromServerFormat(e){const t=[];let r="",s=0;const c=()=>{if(r.length===0)throw new O(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let h=!1;for(;s<e.length;){const p=e[s];if(p==="\\"){if(s+1===e.length)throw new O(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const w=e[s+1];if(w!=="\\"&&w!=="."&&w!=="`")throw new O(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=w,s+=2}else p==="`"?(h=!h,s++):p!=="."||h?(r+=p,s++):(c(),s++)}if(c(),h)throw new O(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.path=e}static fromPath(e){return new Je(ie.fromString(e))}static fromName(e){return new Je(ie.fromString(e).popFirst(5))}static empty(){return new Je(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Je(new ie(e.slice()))}}function ud(n,e,t,r){if(e===!0&&r===!0)throw new O(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function dd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fd(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$t(12329,{type:typeof n})}function pd(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fd(n);throw new O(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n,e){const t={typeString:n};return e&&(t.value=e),t}function Yt(n,e){if(!dd(n))throw new O(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,c="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const h=n[r];if(s&&typeof h!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${r}' field to equal '${c.value}'`;break}}if(t)throw new O(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Os=-62135596800,Ds=1e6;class ue{static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ds);return new ue(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Os)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ds}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ue._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Yt(e,ue._jsonSchema))return new ue(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Os;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ue._jsonSchemaVersion="firestore/timestamp/1.0",ue._jsonSchema={type:j("string",ue._jsonSchemaVersion),seconds:j("number"),nanoseconds:j("number")};function gd(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new md("Invalid base64 string: "+c):c}})(e);return new tt(t)}static fromUint8Array(e){const t=(function(s){let c="";for(let h=0;h<s.length;++h)c+=String.fromCharCode(s[h]);return c})(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const Ri="(default)";class Cn{constructor(e,t){this.projectId=e,this.database=t||Ri}static empty(){return new Cn("","")}get isDefaultDatabase(){return this.database===Ri}isEqual(e){return e instanceof Cn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t=null,r=[],s=[],c=null,h="F",p=null,w=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=c,this.limitType=h,this.startAt=p,this.endAt=w,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function _d(n){return new yd(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ns,P;(P=Ns||(Ns={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Vi([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=1048576;function mi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,r=1e3,s=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&se("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,r,s,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=c,this.deferred=new xt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((h=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,c){const h=Date.now()+r,p=new Bi(e,t,h,s,c);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Ls,Ms;(Ms=Ls||(Ls={})).Ma="default",Ms.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo="firestore.googleapis.com",xs=!0;class Fs{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Yo,this.ssl=xs}else this.host=e.host,this.ssl=e.ssl??xs;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=wd;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Id)throw new O(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ud("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ed(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(k.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Qo{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Fs({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Fs(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Zu;switch(r.type){case"firstParty":return new id(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Us.get(t);r&&(se("ComponentProvider","Removing Datastore"),Us.delete(t),r.terminate())})(this),Promise.resolve()}}function Td(n,e,t,r={}){n=pd(n,Qo);const s=Ht(e),c=n._getSettings(),h={...c,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;s&&(io(`https://${p}`),ro("Firestore",!0)),c.host!==Yo&&c.host!==p&&Qu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const w={...c,host:p,ssl:s,emulatorOptions:r};if(!Fe(w,h)&&(n._setSettings(w),r.mockUserToken)){let E,S;if(typeof r.mockUserToken=="string")E=r.mockUserToken,S=G.MOCK_USER;else{E=pc(r.mockUserToken,n._app?.options.projectId);const b=r.mockUserToken.sub||r.mockUserToken.user_id;if(!b)throw new O(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new G(b)}n._authCredentials=new ed(new Xo(E,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $i(this.firestore,e,this._query)}}class fe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fe(this.firestore,e,this._key)}toJSON(){return{type:fe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Yt(t,fe._jsonSchema))return new fe(e,r||null,new Je(ie.fromString(t.referencePath)))}}fe._jsonSchemaVersion="firestore/documentReference/1.0",fe._jsonSchema={type:j("string",fe._jsonSchemaVersion),referencePath:j("string")};class Hi extends $i{constructor(e,t,r){super(e,t,_d(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fe(this.firestore,null,new Je(e))}withConverter(e){return new Hi(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="AsyncQueue";class js{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vd(this,"async_queue_retry"),this._c=()=>{const r=mi();r&&se(Vs,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new xt;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gd(e))throw e;se(Vs,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ko("INTERNAL UNHANDLED ERROR: ",Bs(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Bi.createAndSchedule(this,e,t,r,(c=>this.hc(c)));return this.tc.push(s),s}uc(){this.nc&&$t(47125,{Pc:Bs(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Bs(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ad extends Qo{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new js,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new js(e),this._firestoreClient=void 0,await e}}}function Sd(n,e){const t=typeof n=="object"?n:Di(),r=typeof n=="string"?n:Ri,s=st(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const c=dc("firestore");c&&Td(s,...c)}return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ye(tt.fromBase64String(e))}catch(t){throw new O(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ye(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ye._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Yt(e,ye._jsonSchema))return ye.fromBase64String(e.bytes)}}ye._jsonSchemaVersion="firestore/bytes/1.0",ye._jsonSchema={type:j("string",ye._jsonSchemaVersion),bytes:j("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qe._jsonSchemaVersion}}static fromJSON(e){if(Yt(e,Qe._jsonSchema))return new Qe(e.latitude,e.longitude)}}Qe._jsonSchemaVersion="firestore/geoPoint/1.0",Qe._jsonSchema={type:j("string",Qe._jsonSchemaVersion),latitude:j("number"),longitude:j("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let c=0;c<r.length;++c)if(r[c]!==s[c])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Yt(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ze(e.vectorValues);throw new O(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:j("string",Ze._jsonSchemaVersion),vectorValues:j("object")};const bd=new RegExp("[~\\*/\\[\\]]");function Cd(n,e,t){if(e.search(bd)>=0)throw $s(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Zo(...e.split("."))._internalPath}catch{throw $s(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function $s(n,e,t,r,s){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new O(k.INVALID_ARGUMENT,c+n+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,r,s,c){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new fe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ta("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Rd extends ea{data(){return super.data()}}function ta(n,e){return typeof e=="string"?Cd(n,e):e instanceof Zo?e._internalPath:e._delegate._internalPath}class fn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pt extends ea{constructor(e,t,r,s,c,h){super(e,t,r,s,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _n(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ta("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}pt._jsonSchemaVersion="firestore/documentSnapshot/1.0",pt._jsonSchema={type:j("string",pt._jsonSchemaVersion),bundleSource:j("string","DocumentSnapshot"),bundleName:j("string"),bundle:j("string")};class _n extends pt{data(e={}){return super.data(e)}}class Ft{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new _n(this._firestore,this._userDataWriter,r.key,r,new fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,c){if(s._snapshot.oldDocs.isEmpty()){let h=0;return s._snapshot.docChanges.map((p=>{const w=new _n(s._firestore,s._userDataWriter,p.doc.key,p.doc,new fn(s._snapshot.mutatedKeys.has(p.doc.key),s._snapshot.fromCache),s.query.converter);return p.doc,{type:"added",doc:w,oldIndex:-1,newIndex:h++}}))}{let h=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((p=>c||p.type!==3)).map((p=>{const w=new _n(s._firestore,s._userDataWriter,p.doc.key,p.doc,new fn(s._snapshot.mutatedKeys.has(p.doc.key),s._snapshot.fromCache),s.query.converter);let E=-1,S=-1;return p.type!==0&&(E=h.indexOf(p.doc.key),h=h.delete(p.doc.key)),p.type!==1&&(h=h.add(p.doc),S=h.indexOf(p.doc.key)),{type:Pd(p.type),doc:w,oldIndex:E,newIndex:S}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ft._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=od.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((c=>{c._document!==null&&(t.push(c._document),r.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),s.push(c.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Pd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $t(61501,{type:n})}}Ft._jsonSchemaVersion="firestore/querySnapshot/1.0",Ft._jsonSchema={type:j("string",Ft._jsonSchemaVersion),bundleSource:j("string","QuerySnapshot"),bundleName:j("string"),bundle:j("string")};(function(e,t=!0){(function(s){Xt=s})(yt),me(new oe("firestore",((r,{instanceIdentifier:s,options:c})=>{const h=r.getProvider("app").getImmediate(),p=new Ad(new td(r.getProvider("auth-internal")),new rd(h,r.getProvider("app-check-internal")),(function(E,S){if(!Object.prototype.hasOwnProperty.apply(E.options,["projectId"]))throw new O(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cn(E.options.projectId,S)})(h,s),h);return c={useFetchStreams:t,...c},p._setSettings(c),p}),"PUBLIC").setMultipleInstances(!0)),ne(Cs,Rs,e),ne(Cs,Rs,"esm2020")})();const na="@firebase/installations",Wi="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=1e4,ra=`w:${Wi}`,sa="FIS_v2",kd="https://firebaseinstallations.googleapis.com/v1",Od=3600*1e3,Dd="installations",Nd="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},nt=new rt(Dd,Nd,Ld);function oa(n){return n instanceof ae&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa({projectId:n}){return`${kd}/projects/${n}/installations`}function ca(n){return{token:n.token,requestStatus:2,expiresIn:Ud(n.expiresIn),creationTime:Date.now()}}async function ha(n,e){const r=(await e.json()).error;return nt.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function la({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Md(n,{refreshToken:e}){const t=la(n);return t.append("Authorization",xd(e)),t}async function ua(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Ud(n){return Number(n.replace("s","000"))}function xd(n){return`${sa} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=aa(n),s=la(n),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&s.append("x-firebase-client",E)}const h={fid:t,authVersion:sa,appId:n.appId,sdkVersion:ra},p={method:"POST",headers:s,body:JSON.stringify(h)},w=await ua(()=>fetch(r,p));if(w.ok){const E=await w.json();return{fid:E.fid||t,registrationStatus:2,refreshToken:E.refreshToken,authToken:ca(E.authToken)}}else throw await ha("Create Installation",w)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=/^[cdef][\w-]{21}$/,Pi="";function Bd(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=$d(n);return jd.test(t)?t:Pi}catch{return Pi}}function $d(n){return Vd(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Map;function pa(n,e){const t=Ln(n);ga(t,e),Hd(t,e)}function ga(n,e){const t=fa.get(n);if(t)for(const r of t)r(e)}function Hd(n,e){const t=Wd();t&&t.postMessage({key:n,fid:e}),zd()}let Xe=null;function Wd(){return!Xe&&"BroadcastChannel"in self&&(Xe=new BroadcastChannel("[Firebase] FID Change"),Xe.onmessage=n=>{ga(n.data.key,n.data.fid)}),Xe}function zd(){fa.size===0&&Xe&&(Xe.close(),Xe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="firebase-installations-database",qd=1,it="firebase-installations-store";let yi=null;function zi(){return yi||(yi=lo(Gd,qd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(it)}}})),yi}async function Rn(n,e){const t=Ln(n),s=(await zi()).transaction(it,"readwrite"),c=s.objectStore(it),h=await c.get(t);return await c.put(e,t),await s.done,(!h||h.fid!==e.fid)&&pa(n,e.fid),e}async function ma(n){const e=Ln(n),r=(await zi()).transaction(it,"readwrite");await r.objectStore(it).delete(e),await r.done}async function Mn(n,e){const t=Ln(n),s=(await zi()).transaction(it,"readwrite"),c=s.objectStore(it),h=await c.get(t),p=e(h);return p===void 0?await c.delete(t):await c.put(p,t),await s.done,p&&(!h||h.fid!==p.fid)&&pa(n,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(n){let e;const t=await Mn(n.appConfig,r=>{const s=Kd(r),c=Jd(n,s);return e=c.registrationPromise,c.installationEntry});return t.fid===Pi?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Kd(n){const e=n||{fid:Bd(),registrationStatus:0};return ya(e)}function Jd(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(nt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Xd(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Yd(n)}:{installationEntry:e}}async function Xd(n,e){try{const t=await Fd(n,e);return Rn(n.appConfig,t)}catch(t){throw oa(t)&&t.customData.serverCode===409?await ma(n.appConfig):await Rn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Yd(n){let e=await Hs(n.appConfig);for(;e.registrationStatus===1;)await da(100),e=await Hs(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Gi(n);return r||t}return e}function Hs(n){return Mn(n,e=>{if(!e)throw nt.create("installation-not-found");return ya(e)})}function ya(n){return Qd(n)?{fid:n.fid,registrationStatus:0}:n}function Qd(n){return n.registrationStatus===1&&n.registrationTime+ia<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zd({appConfig:n,heartbeatServiceProvider:e},t){const r=ef(n,t),s=Md(n,t),c=e.getImmediate({optional:!0});if(c){const E=await c.getHeartbeatsHeader();E&&s.append("x-firebase-client",E)}const h={installation:{sdkVersion:ra,appId:n.appId}},p={method:"POST",headers:s,body:JSON.stringify(h)},w=await ua(()=>fetch(r,p));if(w.ok){const E=await w.json();return ca(E)}else throw await ha("Generate Auth Token",w)}function ef(n,{fid:e}){return`${aa(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(n,e=!1){let t;const r=await Mn(n.appConfig,c=>{if(!_a(c))throw nt.create("not-registered");const h=c.authToken;if(!e&&rf(h))return c;if(h.requestStatus===1)return t=tf(n,e),c;{if(!navigator.onLine)throw nt.create("app-offline");const p=of(c);return t=nf(n,p),p}});return t?await t:r.authToken}async function tf(n,e){let t=await Ws(n.appConfig);for(;t.authToken.requestStatus===1;)await da(100),t=await Ws(n.appConfig);const r=t.authToken;return r.requestStatus===0?qi(n,e):r}function Ws(n){return Mn(n,e=>{if(!_a(e))throw nt.create("not-registered");const t=e.authToken;return af(t)?{...e,authToken:{requestStatus:0}}:e})}async function nf(n,e){try{const t=await Zd(n,e),r={...e,authToken:t};return await Rn(n.appConfig,r),t}catch(t){if(oa(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ma(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Rn(n.appConfig,r)}throw t}}function _a(n){return n!==void 0&&n.registrationStatus===2}function rf(n){return n.requestStatus===2&&!sf(n)}function sf(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Od}function of(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function af(n){return n.requestStatus===1&&n.requestTime+ia<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cf(n){const e=n,{installationEntry:t,registrationPromise:r}=await Gi(e);return r?r.catch(console.error):qi(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(n,e=!1){const t=n;return await lf(t),(await qi(t,e)).token}async function lf(n){const{registrationPromise:e}=await Gi(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(n){if(!n||!n.options)throw _i("App Configuration");if(!n.name)throw _i("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw _i(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function _i(n){return nt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="installations",df="installations-internal",ff=n=>{const e=n.getProvider("app").getImmediate(),t=uf(e),r=st(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pf=n=>{const e=n.getProvider("app").getImmediate(),t=st(e,wa).getImmediate();return{getId:()=>cf(t),getToken:s=>hf(t,s)}};function gf(){me(new oe(wa,ff,"PUBLIC")),me(new oe(df,pf,"PRIVATE"))}gf();ne(na,Wi);ne(na,Wi,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn="analytics",mf="firebase_id",yf="origin",_f=60*1e3,wf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ki="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=new kn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Q=new rt("analytics","Analytics",If);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n){if(!n.startsWith(Ki)){const e=Q.create("invalid-gtag-resource",{gtagURL:n});return J.warn(e.message),""}return n}function Ia(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function Ef(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Tf(n,e){const t=Ef("firebase-js-sdk-policy",{createScriptURL:vf}),r=document.createElement("script"),s=`${Ki}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Af(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Sf(n,e,t,r,s,c){const h=r[s];try{if(h)await e[h];else{const w=(await Ia(t)).find(E=>E.measurementId===s);w&&await e[w.appId]}}catch(p){J.error(p)}n("config",s,c)}async function bf(n,e,t,r,s){try{let c=[];if(s&&s.send_to){let h=s.send_to;Array.isArray(h)||(h=[h]);const p=await Ia(t);for(const w of h){const E=p.find(b=>b.measurementId===w),S=E&&e[E.appId];if(S)c.push(S);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),n("event",r,s||{})}catch(c){J.error(c)}}function Cf(n,e,t,r){async function s(c,...h){try{if(c==="event"){const[p,w]=h;await bf(n,e,t,p,w)}else if(c==="config"){const[p,w]=h;await Sf(n,e,t,r,p,w)}else if(c==="consent"){const[p,w]=h;n("consent",p,w)}else if(c==="get"){const[p,w,E]=h;n("get",p,w,E)}else if(c==="set"){const[p]=h;n("set",p)}else n(c,...h)}catch(p){J.error(p)}}return s}function Rf(n,e,t,r,s){let c=function(...h){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(c=window[s]),window[s]=Cf(c,n,e,t),{gtagCore:c,wrappedGtag:window[s]}}function Pf(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ki)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=30,Of=1e3;class Df{constructor(e={},t=Of){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const va=new Df;function Nf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Lf(n){const{appId:e,apiKey:t}=n,r={method:"GET",headers:Nf(t)},s=wf.replace("{app-id}",e),c=await fetch(s,r);if(c.status!==200&&c.status!==304){let h="";try{const p=await c.json();p.error?.message&&(h=p.error.message)}catch{}throw Q.create("config-fetch-failed",{httpStatus:c.status,responseMessage:h})}return c.json()}async function Mf(n,e=va,t){const{appId:r,apiKey:s,measurementId:c}=n.options;if(!r)throw Q.create("no-app-id");if(!s){if(c)return{measurementId:c,appId:r};throw Q.create("no-api-key")}const h=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new Ff;return setTimeout(async()=>{p.abort()},_f),Ea({appId:r,apiKey:s,measurementId:c},h,p,e)}async function Ea(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=va){const{appId:c,measurementId:h}=n;try{await Uf(r,e)}catch(p){if(h)return J.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${p?.message}]`),{appId:c,measurementId:h};throw p}try{const p=await Lf(n);return s.deleteThrottleMetadata(c),p}catch(p){const w=p;if(!xf(w)){if(s.deleteThrottleMetadata(c),h)return J.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${w?.message}]`),{appId:c,measurementId:h};throw p}const E=Number(w?.customData?.httpStatus)===503?Qr(t,s.intervalMillis,kf):Qr(t,s.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return s.setThrottleMetadata(c,S),J.debug(`Calling attemptFetch again in ${E} millis`),Ea(n,S,r,s)}}function Uf(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),c=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(c),r(Q.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function xf(n){if(!(n instanceof ae)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ff{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Vf(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const c=await e,h={...r,send_to:c};n("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(){if(oo())try{await ao()}catch(n){return J.warn(Q.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return J.warn(Q.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Bf(n,e,t,r,s,c,h){const p=Mf(n);p.then(A=>{t[A.measurementId]=A.appId,n.options.measurementId&&A.measurementId!==n.options.measurementId&&J.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${A.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(A=>J.error(A)),e.push(p);const w=jf().then(A=>{if(A)return r.getId()}),[E,S]=await Promise.all([p,w]);Pf(c)||Tf(c,E.measurementId),s("js",new Date);const b=h?.config??{};return b[yf]="firebase",b.update=!0,S!=null&&(b[mf]=S),s("config",E.measurementId,b),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.app=e}_delete(){return delete Vt[this.app.options.appId],Promise.resolve()}}let Vt={},zs=[];const Gs={};let wi="dataLayer",Hf="gtag",qs,Ta,Ks=!1;function Wf(){const n=[];if(so()&&n.push("This is a browser extension environment."),vc()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Q.create("invalid-analytics-context",{errorInfo:e});J.warn(t.message)}}function zf(n,e,t){Wf();const r=n.options.appId;if(!r)throw Q.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)J.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Q.create("no-api-key");if(Vt[r]!=null)throw Q.create("already-exists",{id:r});if(!Ks){Af(wi);const{wrappedGtag:c,gtagCore:h}=Rf(Vt,zs,Gs,wi,Hf);Ta=c,qs=h,Ks=!0}return Vt[r]=Bf(n,zs,Gs,e,qs,wi,t),new $f(n)}function Gf(n=Di()){n=je(n);const e=st(n,Pn);return e.isInitialized()?e.getImmediate():qf(n)}function qf(n,e={}){const t=st(n,Pn);if(t.isInitialized()){const s=t.getImmediate();if(Fe(e,t.getOptions()))return s;throw Q.create("already-initialized")}return t.initialize({options:e})}function Kf(n,e,t,r){n=je(n),Vf(Ta,Vt[n.app.options.appId],e,t,r).catch(s=>J.error(s))}const Js="@firebase/analytics",Xs="0.10.18";function Jf(){me(new oe(Pn,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return zf(r,s,t)},"PUBLIC")),me(new oe("analytics-internal",n,"PRIVATE")),ne(Js,Xs),ne(Js,Xs,"esm2020");function n(e){try{const t=e.getProvider(Pn).getImmediate();return{logEvent:(r,s,c)=>Kf(t,r,s,c)}}catch(t){throw Q.create("interop-component-reg-failed",{reason:t})}}}Jf();const Xf={apiKey:"AIzaSyCO7vxCrIkTPY1Y-2iU84ZfW7D7tT-Sthk",authDomain:"stacksaver-b3b79.firebaseapp.com",projectId:"stacksaver-b3b79",storageBucket:"stacksaver-b3b79.firebasestorage.app",messagingSenderId:"800774118759",appId:"1:800774118759:web:8341e3d3e32f9b4b3863c2",measurementId:"G-EE4MXJ9KNL"},Ji=uo(Xf);Sd(Ji);const Yf=Ku(Ji);Gf(Ji);console.log("main.js is running");console.log("main.js loaded");document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".email-form");n.addEventListener("submit",async e=>{e.preventDefault();const t=n.querySelector('input[type="email"]').value;await Ml(Yf,t,{url:"https://friendly-space-orbit-6v45x5446r7c57q9-5173.app.github.dev/home.html",handleCodeInApp:!0}),window.localStorage.setItem("emailForSignIn",t),alert("Check your inbox for a sign-in link!")})});
