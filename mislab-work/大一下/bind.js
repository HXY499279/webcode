Function.prototype.bind1 = function(context) {
	if (typeof this !== 'function') {
		throw new Error()
	}
	var seft = this;
	var args = Array.prototype.slice.call(arguments, 1);
	var Fun = function() {};
	var fBound = function() {
		var bindArgs = args.concat(Array.prototype.slice.call(arguments));
		var vm = this instanceof Fun ? this : context;
		return seft.apply(vm, bindArgs);
	}
	Fun.prototype = this.prototype;
	fBound.prototype = new Fun();
	return fBound;
}

var obj= {}
function add (a,b) {
    console.log(a+b);
}
add.bind1(obj,2,3)()