function wordFrequency(text, word) {
    return text.split(" ").filter(element =>
                            element === word ).length;
}

function main() {
    console.log(wordFrequency("hello world","hello"));
    console.log(wordFrequency("hello hello","hello"));
    console.log(wordFrequency("hello Hello","Hello"));
    console.log(wordFrequency("hellohello Hello","hello"));
}

main();