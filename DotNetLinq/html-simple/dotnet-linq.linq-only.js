!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.version=e.LinqSharp=e.Linq=void 0;var n=r(1);Object.defineProperty(e,"Linq",{enumerable:!0,get:function(){return n.Linq}});var i=r(4);Object.defineProperty(e,"LinqSharp",{enumerable:!0,get:function(){return i.LinqSharp}});e.version="0.9.9"},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Linq=void 0;var n=r(2),i=r(3);e.Linq=function(){function t(){}return t.enable=function(){return Array.prototype.select=this.select,Array.prototype.selectMany=this.selectMany,Array.prototype.where=this.where,Array.prototype.count=this.count,Array.prototype.any=this.any,Array.prototype.all=this.all,Array.prototype.sum=this.sum,Array.prototype.average=this.average,Array.prototype.min=this.min,Array.prototype.max=this.max,Array.prototype.take=this.take,Array.prototype.takeLast=this.takeLast,Array.prototype.takeWhile=this.takeWhile,Array.prototype.skip=this.skip,Array.prototype.skipLast=this.skipLast,Array.prototype.skipWhile=this.skipWhile,Array.prototype.firstOrDefault=this.firstOrDefault,Array.prototype.first=this.first,Array.prototype.lastOrDefault=this.lastOrDefault,Array.prototype.last=this.last,Array.prototype.singleOrDefault=this.singleOrDefault,Array.prototype.single=this.single,Array.prototype.intersect=this.intersect,Array.prototype.except=this.except,Array.prototype.union=this.union,Array.prototype.sequenceEqual=this.sequenceEqual,Array.prototype.contains=this.contains,Array.prototype.distinct=this.distinct,Array.prototype.orderBy=this.orderBy,Array.prototype.orderByDescending=this.orderByDescending,Array.prototype.groupBy=this.groupBy,Array.prototype.groupJoin=this.groupJoin,Array.prototype.zip=this.zip,Array.prototype.aggregate=this.aggregate,Array.prototype.defaultIfEmpty=this.defaultIfEmpty,!0},t.select=function(t){return this.map((function(e,r){return t(e,r)}))},t.selectMany=function(t){return this.map((function(e,r){return t(e,r)})).reduce((function(t,e){return t.concat(e)}),[])},t.where=function(t){return this.filter(t)},t.count=function(t){return(t?this.filter(t):this).length},t.any=function(t){return t?this.some(t):this.length>0},t.all=function(t){return this.every(t)},t.sum=function(t){return t?this.map((function(e){return t(e)})).reduce((function(t,e){return t+e}),0):this.reduce((function(t,e){return t+e}),0)},t.average=function(t){return t?this.map((function(e){return t(e)})).reduce((function(t,e){return t+e}),0)/this.length:this.reduce((function(t,e){return t+e}),0)/this.length},t.min=function(t){return t?Math.min.apply(Math,this.map((function(e){return t(e)}))):Math.min.apply(Math,this)},t.max=function(t){return t?Math.max.apply(Math,this.map((function(e){return t(e)}))):Math.max.apply(Math,this)},t.take=function(t){return this.slice(0,t)},t.takeLast=function(t){return this.slice(this.length-t)},t.takeWhile=function(t){for(var e=0,r=0;r<this.length&&t(this[r],r);r++)e++;return this.slice(0,e)},t.skip=function(t){return this.slice(t)},t.skipLast=function(t){return this.slice(0,this.length-t)},t.skipWhile=function(t){for(var e=0,r=0;r<this.length&&t(this[r],r);r++)e++;return this.slice(e)},t.firstOrDefault=function(t){var e=t?this.filter(t):this;return e.length>0?e[0]:null},t.first=function(t){var e=t?this.filter(t):this;if(e.length>0)return e[0];throw new Error("Sequence contains no elements")},t.lastOrDefault=function(t){var e=t?this.filter(t):this;return e.length>0?e[e.length-1]:null},t.last=function(t){var e=t?this.filter(t):this;if(e.length>0)return e[e.length-1];throw new Error("Sequence contains no elements")},t.singleOrDefault=function(t){var e=t?this.filter(t):this;if(e.length>0){if(1==e.length)return e[0];throw new Error("Sequence contains more than one element")}return null},t.single=function(t){var e=t?this.filter(t):this;if(e.length>0){if(1==e.length)return e[0];throw new Error("Sequence contains more than one element")}throw new Error("Sequence contains no elements")},t.intersect=function(t){return this.filter((function(e){return t.includes(e)}))},t.except=function(t){return this.filter((function(e){return!t.includes(e)}))},t.union=function(t){var e=this;return e.concat(t.filter((function(t){return!e.includes(t)})))},t.sequenceEqual=function(t){if(this.length!==t.length)return!1;for(var e=0;e<this.length;e++)if(this[e]!==t[e])return!1;return!0},t.contains=function(t){return this.indexOf(t)>-1},t.distinct=function(){return Array.from(new Set(this))},t.orderBy=function(t){return new i.Ordered(this,t,!1,void 0)},t.orderByDescending=function(t){return new i.Ordered(this,t,!0,void 0)},t.groupBy=function(t){for(var e={},r=[],i=0;i<this.length;i++){var o=this[i],u=t(o),s=JSON.stringify(u);-1==Object.keys(e).indexOf(s)&&(e[s]=r.length,r.push(new n.Grouping(u))),r[e[s]].push(o)}return r},t.groupJoin=function(t,e,r,n){return this.map((function(i){var o=e(i),u=t.filter((function(t){return r(t)===o}));return n(i,u)}))},t.zip=function(t,e){var r=[],n=Math.min(this.length,t.length);if(e)for(i=0;i<n;i++)r.push(e(this[i],t[i]));else for(var i=0;i<n;i++)r.push({first:this[i],second:t[i]});return r},t.aggregate=function(t,e,r){for(var n=t,i=0;i<this.length;i++){n=e(n,this[i])}return r?r(n):n},t.defaultIfEmpty=function(t){return 0===this.length?[t||null]:this},t}()},function(t,e,r){"use strict";var n,i=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)});Object.defineProperty(e,"__esModule",{value:!0}),e.Grouping=void 0;var o=function(t){function e(e){var r=t.call(this)||this;return r.key=e,r}return i(e,t),e}(Array);e.Grouping=o},function(t,e,r){"use strict";var n=this&&this.__generator||function(t,e){var r,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(a){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(u=0)),u;)try{if(r=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return u.label++,{value:s[1],done:!1};case 5:u.label++,n=s[1],s=[0];continue;case 7:s=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){u=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){u.label=s[1];break}if(6===s[0]&&u.label<i[1]){u.label=i[1],i=s;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(s);break}i[2]&&u.ops.pop(),u.trys.pop();continue}s=e.call(t,u)}catch(t){s=[6,t],n=0}finally{r=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Ordered=void 0;var i=function(){function t(e,r,n,i){var o=this;this.source=e,this.keySelector=r,this.desc=n,this.prevOrdered=i,this.thenBy=function(e){return new t(o.source,e,!1,o)},this.thenByDescending=function(e){return new t(o.source,e,!0,o)},this.toArray=function(){return o.source},this.order=function(t){return function(e,r){if(t){var n=(o.desc,t.order(t.prevOrdered)(e,r));if(0!=n)return n}var i=o.keySelector(e),u=o.keySelector(r);return i<u?o.desc?1:-1:i>u?o.desc?-1:1:0}},this.source.sort(this.order(this.prevOrdered))}return t.prototype[Symbol.iterator]=function(){var t,e;return n(this,(function(r){switch(r.label){case 0:t=0,e=this.source,r.label=1;case 1:return t<e.length?[4,e[t]]:[3,4];case 2:r.sent(),r.label=3;case 3:return t++,[3,1];case 4:return[2]}}))},t}();e.Ordered=i},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.LinqSharp=void 0;e.LinqSharp=function(){function t(){}return t.enable=function(){return Array.prototype.selectPage=this.selectPage,Array.prototype.selectUntil=this.selectUntil,Array.prototype.selectWhile=this.selectWhile,Array.prototype.selectMore=this.selectMore,!0},t.selectPage=function(t,e){return this.slice((t-1)*e).slice(0,e)},t.selectUntil=function(t,e){for(var r=function(n,i){var o,u=t(n);if(e(n))i.push(n);else if(null!==(o=(null==u?void 0:u.length)>0)&&void 0!==o&&o)for(var s=0,a=u;s<a.length;s++){var l=a[s];r(l,i)}},n=[],i=0;i<this.length;i++){var o=this[i];r(o,n)}return n},t.selectWhile=function(t,e){for(var r=function(n,i){var o,u=t(n);if(e(n)&&(i.push(n),null!==(o=(null==u?void 0:u.length)>0)&&void 0!==o&&o))for(var s=0,a=u;s<a.length;s++){var l=a[s];r(l,i)}},n=[],i=0;i<this.length;i++){var o=this[i];r(o,n)}return n},t.selectMore=function(t,e){for(var r=this,n=function(i,o){var u,s;(null===(u=null==e?void 0:e.call(r,i))||void 0===u||u)&&o.push(i);var a=t(i);if(null!==(s=(null==a?void 0:a.length)>0)&&void 0!==s&&s)for(var l=0,c=a;l<c.length;l++){var h=c[l];n(h,o)}},i=[],o=0;o<this.length;o++){var u=this[o];n(u,i)}return i},t}()},function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var n=r(0);"undefined"!=typeof window&&(window.linqVersion=n.version,window.linq=n.Linq),n.Linq.enable()}]);