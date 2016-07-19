//array of colors to randomly pull from, it is an array of hexadecimal strings
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

//helper function to get a number from 0 through 11 to be used to get one of the 10 random quote or colors
function getRandom() {
  return Math.floor(Math.random() * 12); //since random only approaches 1 but never includes 1, we can multiply by 12, then round down will always be 11 or less
}

function setColor() {
  var randomColor = colors[getRandom()];
  $('body').css({
    "background-color": randomColor,
    color: randomColor
  });
  $('#newQuote').css({
    "background-color": randomColor
  });
}

function setQuote() {
  var urlStr = "";
  var i = 0;
  i = Math.floor(Math.random() * 40) + 1;
  urlStr = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=" + i + "&callback=";
  $.getJSON(urlStr, function(a) {
    $("#quoteText").html(a[0].content + "<p>— " + a[0].title + "</p>");
  });
}

$("#tweetButton").click(function() {
  var intent = "https://twitter.com/intent/tweet?text=" + encodeURIComponent($("#quoteText").text());
  //used the lines below to substitute comma for semi-colon before encodeURI was working
  // if (intent.indexOf(';') >= 0)
  //   intent.replace(/;/g, ',');
  $(this).attr('href', intent);
});

//function to run when new quote button is clicked
$('#newQuote').click(function() {
  setColor();
  setQuote();
});

//run on load, same as function when clicking
$(document).ready(function() {
  setColor();
  setQuote();
});