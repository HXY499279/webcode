var funcs = [];
for (let i = 0; i < 10; i++) {
  funcs.push(function  () {
             console.log(i)
             })
}
funcs.forEach(function (item,index,array) {
  console.log(item())
  })