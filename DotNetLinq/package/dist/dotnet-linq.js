!function(t){var r={};function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var i in t)e.d(n,i,function(r){return t[r]}.bind(null,i));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},e.p="",e(e.s=6)}([function(t,r,e){"use strict";r.__esModule=!0,r.version=r.LinqSharp=r.Linq=void 0;var n=e(1);r.Linq=n.Linq;var i=e(4);r.LinqSharp=i.LinqSharp;r.version="0.9.9"},function(t,r,e){"use strict";r.__esModule=!0,r.Linq=void 0;var n=e(2),i=e(3),o=function(){function t(){}return t.enable=function(){return Array.prototype.select=this.select,Array.prototype.selectMany=this.selectMany,Array.prototype.where=this.where,Array.prototype.count=this.count,Array.prototype.any=this.any,Array.prototype.all=this.all,Array.prototype.sum=this.sum,Array.prototype.average=this.average,Array.prototype.min=this.min,Array.prototype.max=this.max,Array.prototype.take=this.take,Array.prototype.takeLast=this.takeLast,Array.prototype.takeWhile=this.takeWhile,Array.prototype.skip=this.skip,Array.prototype.skipLast=this.skipLast,Array.prototype.skipWhile=this.skipWhile,Array.prototype.firstOrDefault=this.firstOrDefault,Array.prototype.first=this.first,Array.prototype.lastOrDefault=this.lastOrDefault,Array.prototype.last=this.last,Array.prototype.singleOrDefault=this.singleOrDefault,Array.prototype.single=this.single,Array.prototype.intersect=this.intersect,Array.prototype.except=this.except,Array.prototype.union=this.union,Array.prototype.sequenceEqual=this.sequenceEqual,Array.prototype.contains=this.contains,Array.prototype.distinct=this.distinct,Array.prototype.orderBy=this.orderBy,Array.prototype.orderByDescending=this.orderByDescending,Array.prototype.groupBy=this.groupBy,Array.prototype.groupJoin=this.groupJoin,Array.prototype.zip=this.zip,Array.prototype.aggregate=this.aggregate,Array.prototype.defaultIfEmpty=this.defaultIfEmpty,!0},t.select=function(t){return this.map((function(r,e){return t(r,e)}))},t.selectMany=function(t){return this.map((function(r,e){return t(r,e)})).reduce((function(t,r){return t.concat(r)}),[])},t.where=function(t){return this.filter(t)},t.count=function(t){return(t?this.filter(t):this).length},t.any=function(t){return t?this.some(t):this.length>0},t.all=function(t){return this.every(t)},t.sum=function(t){return t?this.map((function(r){return t(r)})).reduce((function(t,r){return t+r}),0):this.reduce((function(t,r){return t+r}),0)},t.average=function(t){return t?this.map((function(r){return t(r)})).reduce((function(t,r){return t+r}),0)/this.length:this.reduce((function(t,r){return t+r}),0)/this.length},t.min=function(t){return t?Math.min.apply(Math,this.map((function(r){return t(r)}))):Math.min.apply(Math,this)},t.max=function(t){return t?Math.max.apply(Math,this.map((function(r){return t(r)}))):Math.max.apply(Math,this)},t.take=function(t){return this.slice(0,t)},t.takeLast=function(t){return this.slice(this.length-t)},t.takeWhile=function(t){for(var r=0,e=0;e<this.length&&t(this[e],e);e++)r++;return this.slice(0,r)},t.skip=function(t){return this.slice(t)},t.skipLast=function(t){return this.slice(0,this.length-t)},t.skipWhile=function(t){for(var r=0,e=0;e<this.length&&t(this[e],e);e++)r++;return this.slice(r)},t.firstOrDefault=function(t){var r=t?this.filter(t):this;return r.length>0?r[0]:null},t.first=function(t){var r=t?this.filter(t):this;if(r.length>0)return r[0];throw new Error("Sequence contains no elements")},t.lastOrDefault=function(t){var r=t?this.filter(t):this;return r.length>0?r[r.length-1]:null},t.last=function(t){var r=t?this.filter(t):this;if(r.length>0)return r[r.length-1];throw new Error("Sequence contains no elements")},t.singleOrDefault=function(t){var r=t?this.filter(t):this;if(r.length>0){if(1==r.length)return r[0];throw new Error("Sequence contains more than one element")}return null},t.single=function(t){var r=t?this.filter(t):this;if(r.length>0){if(1==r.length)return r[0];throw new Error("Sequence contains more than one element")}throw new Error("Sequence contains no elements")},t.intersect=function(t){return this.filter((function(r){return t.includes(r)}))},t.except=function(t){return this.filter((function(r){return!t.includes(r)}))},t.union=function(t){var r=this;return r.concat(t.filter((function(t){return!r.includes(t)})))},t.sequenceEqual=function(t){if(this.length!==t.length)return!1;for(var r=0;r<this.length;r++)if(this[r]!==t[r])return!1;return!0},t.contains=function(t){return this.indexOf(t)>-1},t.distinct=function(){return Array.from(new Set(this))},t.orderBy=function(t){return new i.Ordered(this,t,!1,void 0)},t.orderByDescending=function(t){return new i.Ordered(this,t,!0,void 0)},t.groupBy=function(t){for(var r={},e=[],i=0;i<this.length;i++){var o=this[i],u=t(o),s=JSON.stringify(u);-1==Object.keys(r).indexOf(s)&&(r[s]=e.length,e.push(new n.Grouping(u))),e[r[s]].push(o)}return e},t.groupJoin=function(t,r,e,n){return this.map((function(i){var o=r(i),u=t.filter((function(t){return e(t)===o}));return n(i,u)}))},t.zip=function(t,r){var e=[],n=Math.min(this.length,t.length);if(r)for(i=0;i<n;i++)e.push(r(this[i],t[i]));else for(var i=0;i<n;i++)e.push({first:this[i],second:t[i]});return e},t.aggregate=function(t,r,e){for(var n=t,i=0;i<this.length;i++){n=r(n,this[i])}return e?e(n):n},t.defaultIfEmpty=function(t){return 0===this.length?[t||null]:this},t}();r.Linq=o},function(t,r,e){"use strict";var n,i=this&&this.__extends||(n=function(t,r){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])})(t,r)},function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=t}n(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)});r.__esModule=!0,r.Grouping=void 0;var o=function(t){function r(r){var e=t.call(this)||this;return e.key=r,e}return i(r,t),r}(Array);r.Grouping=o},function(t,r,e){"use strict";var n=this&&this.__generator||function(t,r){var e,n,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,n=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=r.call(t,u)}catch(t){o=[6,t],n=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};r.__esModule=!0,r.Ordered=void 0;var i=function(){function t(r,e,n,i){var o=this;this.source=r,this.keySelector=e,this.desc=n,this.prevOrdered=i,this.thenBy=function(r){return new t(o.source,r,!1,o)},this.thenByDescending=function(r){return new t(o.source,r,!0,o)},this.toArray=function(){return o.source},this.order=function(t){return function(r,e){if(t){var n=(o.desc,t.order(t.prevOrdered)(r,e));if(0!=n)return n}var i=o.keySelector(r),u=o.keySelector(e);return i<u?o.desc?1:-1:i>u?o.desc?-1:1:0}},this.source.sort(this.order(this.prevOrdered))}return t.prototype[Symbol.iterator]=function(){var t,r;return n(this,(function(e){switch(e.label){case 0:t=0,r=this.source,e.label=1;case 1:return t<r.length?[4,r[t]]:[3,4];case 2:e.sent(),e.label=3;case 3:return t++,[3,1];case 4:return[2]}}))},t}();r.Ordered=i},function(t,r,e){"use strict";r.__esModule=!0,r.LinqSharp=void 0;var n=function(){function t(){}return t.enable=function(){return Array.prototype.selectPage=this.selectPage,Array.prototype.selectUntil=this.selectUntil,Array.prototype.selectWhile=this.selectWhile,Array.prototype.selectMore=this.selectMore,!0},t.selectPage=function(t,r){return this.slice((t-1)*r).slice(0,r)},t.selectUntil=function(t,r){for(var e=function(n,i){var o,u=t(n);if(r(n))i.push(n);else if(null!==(o=(null==u?void 0:u.length)>0)&&void 0!==o&&o)for(var s=0,a=u;s<a.length;s++){var l=a[s];e(l,i)}},n=[],i=0;i<this.length;i++){var o=this[i];e(o,n)}return n},t.selectWhile=function(t,r){for(var e=function(n,i){var o,u=t(n);if(r(n)&&(i.push(n),null!==(o=(null==u?void 0:u.length)>0)&&void 0!==o&&o))for(var s=0,a=u;s<a.length;s++){var l=a[s];e(l,i)}},n=[],i=0;i<this.length;i++){var o=this[i];e(o,n)}return n},t.selectMore=function(t,r){for(var e=this,n=function(i,o){var u,s;(null===(u=null==r?void 0:r.call(e,i))||void 0===u||u)&&o.push(i);var a=t(i);if(null!==(s=(null==a?void 0:a.length)>0)&&void 0!==s&&s)for(var l=0,c=a;l<c.length;l++){var h=c[l];n(h,o)}},i=[],o=0;o<this.length;o++){var u=this[o];n(u,i)}return i},t}();r.LinqSharp=n},,function(t,r,e){Object.defineProperty(r,"__esModule",{value:!0});var n=e(0);"undefined"!=typeof window&&(window.linqVersion=n.version,window.linq=n.Linq,window.linqSharp=n.LinqSharp),n.Linq.enable(),n.LinqSharp.enable()}]);