Function.prototype.apply1 = function(context = window,arr) {
    context = context instanceof Object ? context : {}
    context.fn = this
    const result = context.fn(...arr)
    delete context.fn
    return result
  }

//   var obj = {
//     name: 'hxy'
// }
// var name = "css"
// function sayname (a,b) {
//     console.log(this.name,a,b)
// }
// sayname.apply1(obj,[1,2])