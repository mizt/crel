(function () { "use strict";
var Main = function() {
	window.onload = $bind(this,this.init);
};
Main.main = function() {
	new Main();
};
Main.prototype = {
	init: function(e) {
		(function(c,f){"object"===typeof exports?module.exports=f():"function"===typeof define&&define.amd?define(f):c.crel=f()})(window,function(){function c(){var a=(arguments[0] instanceof Array&&arguments.length==1)?arguments[0]:arguments,b=a[0],d,e=a[1],g=2,m=a.length,n=c.attrMap,b=c.isElement(b)?b:document.createElement(b);if(1===m)return b;if("object"!==typeof e||c.isElement(e)||e instanceof Array)--g,e=null;if(1===m-g&&"string"===typeof a[g]&&void 0!==b.textContent)b.textContent=a[g];else for(;g<m;++g)if(d=a[g],null!=d)if(d instanceof Array)for(var k=0;k<d.length;++k){var p=
		b,l=d[k];f(l)||(l=document.createTextNode(l));p.appendChild(l)}else k=b,f(d)||(d=document.createTextNode(d)),k.appendChild(d);for(var h in e)n[h]?(a=c.attrMap[h],"function"===typeof a?a(b,e[h]):b.setAttribute(a,e[h])):b.setAttribute(h,e[h]);return b}var f="function"===typeof Element?function(a){return a instanceof Element}:function(a){return"object"===typeof a&&1===a.nodeType&&"object"===typeof a.ownerDocument};c.attrMap={};c.isElement=f;return c});;
		var Crel=function() {}; Crel.prototype.set = function(a) { return window.crel(a); }
		this.____ = this.___ = ($_=new Crel(),$bind($_,$_.set));
		this.____([window.document.body,{ 'class' : "test"},this.___(["div",this.___(["p","1"]),this.___(["p","2"]),this.___(["p","3"])])]);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
Main.main();
})();
