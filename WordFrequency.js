function areSameWords(word1, word2) {
    return word1 === word2;
}
function wordFrequency(text, word) {
    let count = 0;
    let wordsInText = text.split(" ");
    for(let index=0; index < wordsInText.length; index++) {
        if(areSameWords(wordsInText[index],word)) {
            count++;
        }
    }
    return count;
}

function main() {
    console.log(wordFrequency("hello world","hello"));
    console.log(wordFrequency("hello hello","hello"));
    console.log(wordFrequency("hello Hello","Hello"));
    console.log(wordFrequency("hellohello Hello","hello"));
}

main();