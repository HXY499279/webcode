// 实现flat方法
var infinity = Number()
Array.prototype.myFlat = function (times = 1) {
    var Arr = this
    if (times === infinity) {
        function flatten() {
            while (Arr.some(item => item instanceof Object)) {
                Arr = [].concat(...Arr)
            }
            return Arr
        }
        console.log(flatten())
    }else {
        function flatten () {
            for (let i = 1 ; i <= times ;i++){
                Arr = [].concat(...Arr)
            }
            return Arr
        }
        console.log(flatten())
    }
}

let arr = [1, [2, 3, [4, [5]]]];

arr.myFlat() //output:[1,2,3,[4,[5]]]

arr.myFlat(2) //output:[1,2,3,4,[5]]]

arr.myFlat(infinity) //output:[1,2,3,4,5]