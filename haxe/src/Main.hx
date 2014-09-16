package;
import js.Browser;

extern class Crel {
    public function new():Void;
    public function set(a:Array<Dynamic>):Dynamic;
}

class Main {
	
	var ____:Dynamic;
	var  ___:Dynamic;
	
   	public static function main():Void {
   		new Main();
   	}

   	public function new() {
   		Browser.window.onload = init;
	}
	
   	private function init(e:Dynamic):Void {
		
		untyped __js__('(function(c,f){"object"===typeof exports?module.exports=f():"function"===typeof define&&define.amd?define(f):c.crel=f()})(window,function(){function c(){var a=(arguments[0] instanceof Array&&arguments.length==1)?arguments[0]:arguments,b=a[0],d,e=a[1],g=2,m=a.length,n=c.attrMap,b=c.isElement(b)?b:document.createElement(b);if(1===m)return b;if("object"!==typeof e||c.isElement(e)||e instanceof Array)--g,e=null;if(1===m-g&&"string"===typeof a[g]&&void 0!==b.textContent)b.textContent=a[g];else for(;g<m;++g)if(d=a[g],null!=d)if(d instanceof Array)for(var k=0;k<d.length;++k){var p=
		b,l=d[k];f(l)||(l=document.createTextNode(l));p.appendChild(l)}else k=b,f(d)||(d=document.createTextNode(d)),k.appendChild(d);for(var h in e)n[h]?(a=c.attrMap[h],"function"===typeof a?a(b,e[h]):b.setAttribute(a,e[h])):b.setAttribute(h,e[h]);return b}var f="function"===typeof Element?function(a){return a instanceof Element}:function(a){return"object"===typeof a&&1===a.nodeType&&"object"===typeof a.ownerDocument};c.attrMap={};c.isElement=f;return c});');
		untyped __js__('var Crel=function() {}; Crel.prototype.set = function(a) { return window.crel(a); }');
		____ = ___ = (new Crel()).set;
		
		____([Browser.document.body,{"class":"test"}
			,___(["div"
				,___(["p","1"])
				,___(["p","2"])
				,___(["p","3"])
			])
		]);
	
	}
	
}