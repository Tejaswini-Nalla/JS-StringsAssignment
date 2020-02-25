function uniqueLetterCount(sentence) {
    const characterRegex = /[a-z]/gi;
    let lettersInSentence = sentence.match(characterRegex);
    let uniqueLetters = [];
    for(let index = 0; index < lettersInSentence.length; index++) {
        if(!uniqueLetters.includes(lettersInSentence[index])) {
            uniqueLetters.push(lettersInSentence[index]);
        }
    }
    return uniqueLetters.length
}

function main() {
    console.log(uniqueLetterCount("hello"));
    console.log(uniqueLetterCount("a,b,c"));
}

main();