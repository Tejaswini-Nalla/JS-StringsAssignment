function wordFrequency(text, word) {
    let count = 0;
    let wordsInText = text.split(" ");
    const areSameWords = element => element == word;
    count = wordsInText.filter(areSameWords).length;
    return count;
}

function main() {
    console.log(wordFrequency("hello world","hello"));
    console.log(wordFrequency("hello hello","hello"));
    console.log(wordFrequency("hello Hello","Hello"));
    console.log(wordFrequency("hellohello Hello","hello"));
}

main();