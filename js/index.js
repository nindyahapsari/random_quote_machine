$(document).ready(function() {
  
   $(".btn").on("click", function() {
     getQuotes();
     getColor();
        console.log("button just clicked");
  });
  
  $('#twitter-button').on('click', function() {
    if(!inIframe()) {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    }
  });
  
  function getQuotes() {
    
    var quotes = ["Cuz without turtles there would be no turtles", 
                  "The only way to do great work is to love what you do",
                  "If you can dream it, you can achieve it",
                  "Either write something worth reading or do something worth writing",
                  'Change your thoughts and you change your world',
                  'It’s not the years in your life that count. It’s the life in your years',
                  'When everything seems to be going against you, remember that the airplane takes off against the                    wind, not with it',
                  'The question isn’t who is going to let me; it’s who is going to stop me'];
    
    var author = ["Bretman Rock",
                  "Steve Jobs",
                  "Zig Ziglar",
                  "Benjamin Franklin",
                  "Norman Vincent Peale",
                  "Abraham Lincoln",
                  "Henry Ford",
                  "Ayn Rand"];
    
   
    
    
    var randomNumber = Math.floor((Math.random() * quotes.length));
    
    var randomQuote = quotes[randomNumber];
    var randomAuthor = author[randomNumber];
    
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor); 
    
    
  }
  
  
  function getColor() {
    
     var colors = ['#16a085', 
                  '#27ae60', 
                  '#2c3e50', 
                  '#f39c12', 
                  '#e74c3c', 
                  '#9b59b6', 
                  '#FB6964', 
                  '#342224', 
                  "#472E32", 
                  "#BDBB99", 
                  "#77B1A9", 
                  "#73A857"];
    
    var color = Math.floor(Math.random() * colors.length);
    
    var backColor = colors[color];
    var col = colors[color];
    
  
    $("body").animate(
      { 
      
      backgroundColor: backColor,
      color: colors[color]
      
    }, 1000
      
    );
    
   
    
    // css('background-color', backColor);
    
    
  
    $(".btn").animate(
    {
      // backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  ); 
  }
 
   
});