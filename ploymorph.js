var makeSound = function(animal) {
  if(animal instanceof Duck) {
    console.log('Gagaga')
  } else if(animal instanceof Chicken) {
    console.log('Gegege')
  }
}

var Duck = function() {}
var Chicken = function() {}

makeSound(new Duck()) // 'Gagaga'
makeSound(new Chicken()) // 'Gegege'