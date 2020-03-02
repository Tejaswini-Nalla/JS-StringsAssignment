function reverse(string) {
    let reversedString = "";
        for(let index = string.length - 1; index >= 0; index--) {
            reversedString = reversedString + string[index];
        }
    return reversedString;
}
 
function reverseWords(string) {
    return string.split(" ").reduce((accumulator, word) =>
                                accumulator.concat(reverse(word)).concat(" "),
                                "").slice(0,string.length);
}

function main() {
    console.log(reverseWords("hello world"));
    console.log(reverseWords("+-- --+"));
}
main();