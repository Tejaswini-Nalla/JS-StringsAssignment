export function areSameCharacters(character1, character2) {
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
    console.log("Is 'madam' Palindrome or not ?",isPalindrome("madam"));
    console.log("Is 'abcd' Palindrome or not?",isPalindrome("abcd"));
    console.log("Is 'a' Palindrome or not ?",isPalindrome("a"));
    console.log("Is 'Madam' Palindrome or not ?",isPalindrome("Madam"));
    console.log("Is '' Palindrome or not ?",isPalindrome(""));
}

main();