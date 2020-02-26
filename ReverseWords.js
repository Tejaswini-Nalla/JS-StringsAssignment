function reverse(string) {
    let reversedString = "";
        for(let index = string.length - 1; index >= 0; index--) {
            reversedString = reversedString + string[index];
        }
    return reversedString;
}
 
function reverseWords(string) {
    let words = string.split(" ");
    let reversedWords = [];
    for (let index = 0; index < words.length; index++) {
        reversedWords = reversedWords.concat(reverse(words[index]));
    }
    return reversedWords.join(" ");
}

function main() {
    console.log("String 'hello world' After reversing words",reverseWords("hello world"));
    console.log("String '+-- --+' After reversing words",reverseWords("+-- --+"));
}

main();