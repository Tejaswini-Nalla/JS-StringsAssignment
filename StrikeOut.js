import {areSameCharacters} from "./Palindrome";

function strikeOut(text, strikingLetter) {
    //return text.replace(strikingLetter, '-');
    let strikeOutText = "";
    for(let index = 0; index < text.length; index++) {
        if(areSameCharacters(text[index],strikingLetter)) {
            strikeOutText = strikeOutText.concat("-");
        }
        strikeOutText = strikeOutText.concat(text[index]);
    }
    return strikeOutText;
}

function main() {
    console.log(strikeOut("hello fellow","l"));
    console.log(strikeOut("",""));
}

main();