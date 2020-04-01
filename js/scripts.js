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



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// var testArr = [0,1,2,3,4,5,6];
// var numberToCut = 3;
// if (name === "Ben"){
//   numberToCut = 5;
// }
// var cutout = testArr.splice(0, numberToCut);
// console.log("testArr: ", testArr)
// console.log("cutout: ", cutout)

var toPigLatin = function(word){
  if (word.length >= 1){
    if (word[0]=== "a" || word[0] === "i"){
      return word[0]+"way";
    }
  } else if(word.length >= 2){
      for(var a=0; a<= consonants.length; a++){
        if(word[1] === consonants[a]){
          var remove = consonants.splice(1, word)
          return remove;
      }
      for(var i=0; i<= consonants.length; i++){
        if(word[0]===consonants[i]){
          return word+"ay";
        }
        // if (word[0] && word[2]===consonants[i]){
        //   return word.splice(0,1,"ay")
        // }
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
    // var sentence = [];
    var result = toPigLatin(word);

    console.log(word)
    console.log(result)

    $("ul").append("<li>"+result+"</li>");
  });
});