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

makeSound(new Duck()) // 'Gagaga'
makeSound(new Chicken()) // 'Gegege'