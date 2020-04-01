//back-end:
//
// for Loops: example 
// var languages = ['HTML', 'CSS', 'Javascript'];
// for (var index = 0; index < languages.length; index += 1) {
//   console.log(index)
//   alert ('I love ' + languages[index] + '!');
// }

// letter variables:
var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p","q", "r", "s", "t", "v", "w", "x", "y", "z"];

// var toPigLatin = function(word){
//     if (word[0].includes(consonants) === true) {
//       return word + "ay"
//   } else if (word[0].includes(vowels) === true){
//       return word + "way";
//   }
// }



var toPigLatin = function(word){
  if (word.length <= 1){
    if (word[0]=== || word[0]==="i"){
      return word[0]+"way";
    }
  } else if(word.length >= 2){
      for(var i=0; i<= consonants.length; i++){
        if(word[0]===consonants[i]){
          return word+"ay";
        }
      }
  }
}

      // forEach Loops: example 
      // var firstConst = [];
      // consonants.forEach(function(consonant){
      //   firstConst.push(consanant + "ay");
      // });

      // var firstVow = [];


      // var toPigLatin = function(word){
      //   if (word.length >= 2 && word[0] === ) { 
      //     return word + "ay";
      //  } else if (word.length <= 1 && word[0]==="a" || word[0]==="i") {
      //     return word[0]+"way";
      //   }
//front-end:

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();

    var word = $("#word").val();
    var result = toPigLatin(word);

    console.log("hello!")
    console.log(word)
    console.log(result)

    $("ul").append("<li>"+result+"</li>");
  });
});