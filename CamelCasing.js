function getTitleCase(word) {
    return word[0].toUpperCase().concat(word.slice(1));
}

function camelCase(words) {
    let result = words[0].toLowerCase();
    for(let index = 1; index < words.length; index++) {
        let titleCaseWord = getTitleCase(words[index]);
        result = result.concat(titleCaseWord);
    }
    return result;
}

function main() {
    console.log("CamelCase Notation of words ['hi','good', 'morning']",camelCase(['hi','good', 'morning']));
}

main();