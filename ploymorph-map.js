var googleMap = {
  show: function () {
    console.log('google地图渲染API')
  }
}

var baiduMap = {
  show: function () {
    console.log('baidu地图渲染API')
  }
}

var renderMap = function (map) {
  if(map.show instanceof Function) {
    map.show()
  }
}

renderMap(googleMap)
renderMap(baiduMap)