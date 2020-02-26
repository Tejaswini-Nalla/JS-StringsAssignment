const functions = require('./Palindrome.js');
console.log(functions);
/*function areSameCharacters(character1, character2) {
    return character1 === character2;
}*/

function strikeOut(text, strikingLetter) {
    //return text.replace(strikingLetter, '-');
    let strikeOutText = "";
    for(let index = 0; index < text.length; index++) {
        if(functions.areSameCharacters(text[index],strikingLetter)) {
            strikeOutText = strikeOutText.concat("-");
        }
        else {
            strikeOutText = strikeOutText.concat(text[index]);
        }
    }
    return strikeOutText;
}

function main() {
    console.log(strikeOut("hello fellow","l"));
    console.log(strikeOut("hello","o"));
    console.log(strikeOut("hello","h"));
    console.log(strikeOut("hello","a"));
    console.log(strikeOut("hello",""));
    console.log(strikeOut("","a"));
    console.log(strikeOut("",""));
}

main();