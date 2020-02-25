function isSpace(word) {
    return word != " ";
}
function strip(sentence) {
    let words = sentence.split("");
    let strippedSentence = words.filter(isSpace).join("");
    return strippedSentence;
}

function main() {
    console.log(strip(" hello "));
    console.log(strip(" hello"));
    console.log(strip("  hello "));
}

main();