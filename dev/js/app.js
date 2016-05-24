

var colorGen = function(){
  var possibles = "0123456789ABCDEF".split('');
  var result = '#';
  for (var i = 0; i < 6; i++){
    result += possibles[Math.floor(Math.random() * 16)];
  }
  return result;
};

var randColor = colorGen();



$("body").css("background-color", randColor);
$("i").css("color", randColor);
