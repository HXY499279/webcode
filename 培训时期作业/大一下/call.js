Function.prototype.call1 = function(context = window, ...args) {
    context = context instanceof Object ? context : {}
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
  }

//   var obj = {
//       name: 'hxy'
//   }
//   var name = "css"
//   function sayname (a,b) {
//       console.log(this.name,a,b)
//   }
//   sayname.call(obj,1,2)