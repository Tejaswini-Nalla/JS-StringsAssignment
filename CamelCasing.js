function getTitleCase(word, index) {
    if(index === 0) {
        return word.toLowerCase()
    }
    else {
        let titleCasedWord = word.toLowerCase();
        return titleCasedWord[0].toUpperCase().concat(titleCasedWord.slice(1));
    }
}

function camelCase(words) {
    let result = words.map(getTitleCase);
    return result.join("");
}

function main() {
    console.log("CamelCase Notation of words ['hi','goOd', 'morning']",camelCase(['hi','goOd', 'morNIng']));
}

main();

/*let result = words[0].toLowerCase();
   for(let index = 1; index < words.length; index++) {
       let titleCaseWord = getTitleCase(words[index]);
       result = result.concat(titleCaseWord);
   }*/