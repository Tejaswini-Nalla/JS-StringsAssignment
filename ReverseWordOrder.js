function reverseWordOrder(string) {
    let wordsInString = string.split(" ");
    let reverseOrderWords = wordsInString.reverse();
    return reverseOrderWords.join(" ");
}

function main() {
    console.log("Reverse word order of 'This is my name':",reverseWordOrder("This is my name"));
    console.log("Reverse word order of 'This       is my name':",reverseWordOrder("This       is my name"));
}

main()