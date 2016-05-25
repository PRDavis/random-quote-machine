

var colorGen = function(){
  var possibles = "0123456789ABCDEF".split('');
  var result = '#';
  for (var i = 0; i < 6; i++){
    result += possibles[Math.floor(Math.random() * 16)];
  }
  return result;
};

var getNewQuote = function(){
  var url =  'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=jsonpCallback';
  $.ajax({
    type: 'GET',
    url: url,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(data) {
    },
    error: function(e) {
      console.log(e.message);
    }
  }
);
};

function jsonpCallback(data){
  var content = data[0].content;
  var title = data[0].title;
  title = "- " + title;
  content = content.slice(3);
  content = content.slice(0,-5);
  if (content.length > 249) {
    getNewQuote();
  }
  colorEverything();
  $('.put-quote-here').html(content);
  $('.put-attrib-here').html(title);
}

var colorEverything = function() {
  var randColor = colorGen();
  $(".apply-rand-color").css("color", randColor);
  $("body").css("background-color", randColor);
  $("button").css("background-color", randColor);
  $("i").css("color", randColor);
};

var init = function(){
  getNewQuote();
  colorEverything();
};

$("button").click(function(){
  getNewQuote();

});
init();
