/*function isSpace(word) {
    return word != " ";
}*/

function removeSpaces(list) {
    let index = list.length-1;
    while(list[index] === " ") {
        list.pop();
        index--;
    }
    return list;
}

function strip(sentence) {
    let words = sentence.split("");
    words = removeSpaces(words);
    words = removeSpaces(words.reverse());
    return words.join("");
}

function main() {
    console.log(strip(" hello "));
    console.log(strip(" hello"));
    console.log(strip("  hello "));
    console.log(strip("  hello world "));
}

main();