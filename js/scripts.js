//back-end:
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p","q", "r", "s", "t", "v", "w", "x", "y", "z"];

var toPigLatin = function(word){
  if(word.length <= 1 && word[0]==="a" || word[0]==="i") {
    return word[0]+"way";
  }
}
//front-end:

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();

    var word = $("#word").val();
    var result = toPigLatin(word);

    console.log("hello!")
    console.log(word)
    console.log(result)

    $(".result").append();
  });
});