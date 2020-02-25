function reverse(string) {
    let reversedString = "";
    for(let index = string.length - 1; index >= 0; index--) {
        reversedString = reversedString + string[index];
    }
    return reversedString;
}

function main() {
    console.log("Reverse of 'Even this should be in reverse':",reverse("Even this should be in reverse"));
    console.log("Reverse of 'hello':",reverse("hello"));
}

main();