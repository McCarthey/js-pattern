/**
 * 鸭子类型
 */
var duck = {
  duckSinging: function() {
    console.log('Gagaga')
  }
}

var chicken = {
  duckSinging: function() {
    console.log('Gagaga')
  }
}

var choir = [] // 鸭子合唱团

var joinChoir = function(animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal)
    console.log('Congratulation!')
    console.log(`You are number ${choir.length}`)
  }
}

joinChoir(duck) // Congratulation! You are number 1

joinChoir(chicken) // Congratulation! You are number 2
