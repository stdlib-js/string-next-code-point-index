// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";var r=/[\uDC00-\uDFFF]/,i=/[\uD800-\uDBFF]/;function n(n,o){var m,d,l,f,h;if(!t(n))throw new TypeError(e("1lf3F",n));if(arguments.length>1){if(!s(o))throw new TypeError(e("1lf7f",o));l=o}else l=0;return d=n.length,l<0&&(l+=d)<0&&(l=0),l>=(m=d-1)?-1:(h=(f=l+1)+1,i.test(n[l])&&r.test(n[f])?h>=m?-1:h:f)}export{n as default};
//# sourceMappingURL=index.mjs.map
