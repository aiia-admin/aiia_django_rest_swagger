!function(e){function n(n){for(var t,a,u=n[0],c=n[1],i=n[2],d=0,p=[];d<u.length;d++)a=u[d],o[a]&&p.push(o[a][0]),o[a]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);for(f&&f(n);p.length;)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,n=0;n<s.length;n++){for(var r=s[n],t=!0,u=1;u<r.length;u++){var c=r[u];0!==o[c]&&(t=!1)}t&&(s.splice(n--,1),e=a(a.s=r[0]))}return e}var t={},o={1:0};var s=[];function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,n,r){a.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/static/aiia_django_rest_swagger/bundles/";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var f=c;s.push([935,0]),r()}({234:function(e,n){},380:function(e,n,r){},398:function(e,n){},407:function(e,n){},428:function(e,n){},435:function(e,n){},437:function(e,n){},935:function(e,n,r){"use strict";var t,o=r(934),s=(t=o)&&t.__esModule?t:{default:t};r(382),r(380);var a=Object.assign({dom_id:"#rest-swagger-ui",spec:window.drsSpec},window.drsSettings),u=window.document.getElementsByName("csrfmiddlewaretoken");if(u.length){var c=u[0].value;a.requestInterceptor=function(e){return e.headers["X-CSRFToken"]=c,a.acceptHeaderVersion&&(e.headers.accept+="; version="+a.acceptHeaderVersion),e.headers=Object.assign(e.headers,a.customHeaders),e}}window.swagger=(0,s.default)(a)}});