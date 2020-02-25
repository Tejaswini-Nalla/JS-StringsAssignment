function wordFrequency(text, word) {
    let wordsInText = text.split(" ");
    for(let index=0; index < wordsInText.length; index++) {
        if(areSameWords(wordsInText[index],word)) {

        }
    }
}

function main() {
    console.log(wordFrequency("hello world","hello"));
}

main();