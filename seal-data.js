var myObject = (function() {
  var __name = 'sven' // 私有变量
  return {
    getName: function() { // 公开方法
      console.log(__name)
      return __name
    }
  }
})()

myObject.getName()

// 利用闭包实现一个计数器
var counter = function() {
  var __count = 0
  return function(){
    console.log(__count)
    return __count++
  }
}()

counter() // 0
counter() // 1
counter() // 2