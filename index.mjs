// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.0-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";var r=/[\uDC00-\uDFFF]/,i=/[\uD800-\uDBFF]/;function n(n,m){var a,d,u,g,l;if(!t(n))throw new TypeError(s("invalid argument. First argument must be a string. Value: `%s`.",n));if(arguments.length>1){if(!e(m))throw new TypeError(s("invalid argument. Second argument must be an integer. Value: `%s`.",m));u=m}else u=0;return d=n.length,u<0&&(u+=d)<0&&(u=0),u>=(a=d-1)?-1:(l=(g=u+1)+1,i.test(n[u])&&r.test(n[g])?l>=a?-1:l:g)}export{n as default};
//# sourceMappingURL=index.mjs.map