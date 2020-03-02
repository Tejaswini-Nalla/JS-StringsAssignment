function interleave(text, seperator) {
    return text.split("").join(seperator);
}

function main() {
    console.log(interleave("abc", ","));
    console.log(interleave("1234", "e&a"));
    console.log(interleave("", "x"));
    console.log(interleave(" 123", ","));
}

main()