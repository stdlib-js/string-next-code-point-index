"use strict";var l=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var g=l(function(_,v){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,o=require('@stdlib/assert-is-integer/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist'),f=/[\uDC00-\uDFFF]/,F=/[\uD800-\uDBFF]/;function E(i,r){var t,a,e,n,u;if(!m(i))throw new TypeError(s('1lf3F',i));if(arguments.length>1){if(!o(r))throw new TypeError(s('1lf7f',r));e=r}else e=0;return a=i.length,e<0&&(e+=a,e<0&&(e=0)),t=a-1,e>=t?-1:(n=e+1,u=n+1,F.test(i[e])&&f.test(i[n])?u>=t?-1:u:n)}v.exports=E
});var R=g();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
