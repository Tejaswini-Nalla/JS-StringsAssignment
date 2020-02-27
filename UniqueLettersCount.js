function uniqueLetterCount(sentence) {
    const characterRegex = /[a-z]/g;
    let lettersInSentence = sentence.toLowerCase().match(characterRegex);
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
    console.log(uniqueLetterCount("heLlo"));
    console.log(uniqueLetterCount("HeLo"));
    console.log(uniqueLetterCount("a,b,c"));
    console.log(uniqueLetterCount("apPLe is"));
}

main();