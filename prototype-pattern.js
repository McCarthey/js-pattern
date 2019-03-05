/**
 * 使用克隆的原型模式：通过克隆来创建对象的一种模式
 * ES5提供了Object.create()方法，用于克隆对象
 */
var Plane = function() {
  this.blood = 100
  this.attackLevel = 1
  this.defenseLevel = 1
}
var plane = new Plane()
plane.blood = 500
plane.attackLevel = 10
plane.defenseLevel = 7

var clonePlane = Object.create(plane)
console.log(clonePlane)

/**
 * 如果不支持Object.create()方法，可以使用如下ployfill
 */
Object.create = Object.create || function(obj) {
  var F = function(){}
  F.prototype = obj
  return new F()
}