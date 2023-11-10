"use strict";var l=function(i,e){return function(){return e||i((e={exports:{}}).exports,e),e.exports}};var g=l(function(_,v){
var m=require('@stdlib/assert-is-string/dist').isPrimitive,o=require('@stdlib/assert-is-integer/dist').isPrimitive,s=require('@stdlib/error-tools-fmtprodmsg/dist'),f=/[\uDC00-\uDFFF]/,F=/[\uD800-\uDBFF]/;function E(i,e){var n,a,r,t,u;if(!m(i))throw new TypeError(s('null3F',i));if(arguments.length>1){if(!o(e))throw new TypeError(s('null7f',e));r=e}else r=0;return a=i.length,r<0&&(r+=a,r<0&&(r=0)),n=a-1,r>=n?-1:(t=r+1,u=t+1,F.test(i[r])&&f.test(i[t])?u>=n?-1:u:t)}v.exports=E
});var R=g();module.exports=R;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
