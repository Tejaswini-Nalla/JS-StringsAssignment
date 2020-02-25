function areSameCharacters(character1, character2) {
    return character1 == character2;
}

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
}

main()