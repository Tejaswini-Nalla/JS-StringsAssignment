function areSameCharacters(character1, character2) {
    return character1 == character2;
}

function isPalindrome(string) {
    for(let index = 0; index < string.length/2; index++) {
        let indexFromLast = string.length - 1 - index;
        if(!areSameCharacters(string[index], string[indexFromLast])) {
            return false;
        }
    }
    return true;
}

function main() {
    console.log("Is madam Palindrome or not ?",isPalindrome("madam"));
}

main()