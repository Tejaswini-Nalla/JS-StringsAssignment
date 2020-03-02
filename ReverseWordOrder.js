function reverseWordOrder(string) {
    return string.split(" ").reverse().join(" ");
}

function main() {
    console.log(reverseWordOrder("This is my name"));
    console.log(reverseWordOrder("This       is my name"));
}

main()