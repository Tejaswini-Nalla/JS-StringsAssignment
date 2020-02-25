function countVowels(text) {
    const vowelsRegex = /[aeiouAEIOU]/g;
    const vowelsInSentence = text.match(vowelsRegex);
    if(vowelsInSentence == null) {
        return 0;
    }
    return vowelsInSentence.length;
}

function main() {
    console.log(countVowels("Apple is good For Health "));
}

main();