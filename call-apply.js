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