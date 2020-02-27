function getLetters(sentence) {
    const characterRegex = /[a-z]/g;
    return sentence.toLowerCase().match(characterRegex);
}

function uniqueLetterCount(sentence) {
    let lettersInSentence = getLetters(sentence);
    let uniqueLetters = [];
    const checkUniqueLetter = function(letter) {
        if(!uniqueLetters.includes(letter)) {
            uniqueLetters.push(letter);
        }
    }
    lettersInSentence.forEach(checkUniqueLetter);
    return uniqueLetters.length
}

function main() {
    console.log(uniqueLetterCount("hello"));
    console.log(uniqueLetterCount("heLlo"));
    console.log(uniqueLetterCount("HeLo"));
    console.log(uniqueLetterCount("a,b,c"));
    console.log(uniqueLetterCount("apPLe is"));
}

main();