function countVowels(text) {
    const vowelsRegex = /[aeiou]/gi;
    const vowelsInSentence = text.match(vowelsRegex);
    if(vowelsInSentence == null) {
        return 0;
    }
    return vowelsInSentence.length;
}

function main() {
    console.log(countVowels("Apple is good For Health "));
    console.log(countVowels("AEioU "));
}

main();