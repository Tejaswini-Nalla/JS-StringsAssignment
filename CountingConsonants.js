function countConsonants(text) {
    const consonantsRegex = /[^aeiou]/gi;
    const consonantsInText = text.match(consonantsRegex);
    if(consonantsInText == null) {
        return 0;
    }
    return consonantsInText.length;
}

function main() {
    console.log(countConsonants("hola"));
    console.log(countConsonants("coffee"));
}

main();