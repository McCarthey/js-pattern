var func = function (a, b, c) {
  console.log(this === window)
}

func.apply(null, [1, 2, 3])

// 严格模式
var func = function (a, b, c) {
  "use strict"
  console.log(this === null)
}

func.apply(null, [1, 2, 3])

Math
  .max
  .apply(null, [1, 2, 5, 4, 3])


var obj1 = {
  name: 'sven'
}

var obj2 = {
  name: 'anne'
}

window.name ='window'

var getName = function() {
  console.log(this.name)
}

getName() // 'window'
getName.apply(obj1) // 'sven'
getName.call(obj2) // 'anne'