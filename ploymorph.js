var makeSound = function(animal) {
  animal.sound()
}

var Duck = function() {}
Duck.prototype.sound = function() {
  console.log('Gagaga')
}

var Chicken = function() {}
Chicken.prototype.sound = function() {
  console.log('Gegege');
}

var Dog = function() {}
Dog.prototype.sound = function() {
  console.log('Wangwangwang')
}

makeSound(new Duck()) // 'Gagaga'
makeSound(new Chicken()) // 'Gegege'
makeSound(new Dog()) // 'WangWangWang'

/**
 * 如上所示，我们可以向makeSound函数中传递不同的对象，不需要其他静态类型语言中的向上转型之类的技术取得多态的效果
 */