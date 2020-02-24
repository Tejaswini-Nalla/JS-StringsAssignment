function countVowels(word) {
    const vowelsRegex = /[aeiouAEIOU]/g;
    const vowels = word.match(vowelsRegex);
    if(vowels.length > 0) {
        return vowels.length;
    }
    return 0;
}

function main() {
    console.log(countVowels("ApplE"));
}

main();