Function.prototype.myCall = function () {
    // const This = this
   console.log(this.this) 
    // This();
}
var Obj1 = {
    name: 'hxy'
}
var Obj = {
    name: 'HXy',
    age: 19,
    way: function way() {
        console.log(this.name)
    }
}
Obj.way.myCall()