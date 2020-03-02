function getTitleCase(word) {
        return word[0].toUpperCase().concat(word.slice(1).toLowerCase());
}

function camelCase(words) {
    return words.slice(1).reduce((accumulator,word) =>
                            accumulator.concat(getTitleCase(word)),
                            words[0].toLowerCase());

}

function main() {
    console.log("CamelCase Notation of words ['Hi','goOd', 'morning']",camelCase(['Hi','goOd', 'morNIng']));
}

main();

