function interleave(text, seperator) {
    let letters = text.split("");
    return letters.join(seperator);
}

function main() {
    console.log(interleave("abc", ","));
    console.log(interleave("1234", "e&a"));
    console.log(interleave("", "x"));
    console.log(interleave(" 123", ","));
}

main()