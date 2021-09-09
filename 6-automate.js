function palindrome(word) {}

const myScripts = [
    {
        function: palindrome,
        toTest: ['kayak' , 'noname', 1],
        expectedResult: [true, false, true]
    }
];
function automate(scripts) {
    // TODO
}

automate(myScripts)
// palindrome, kayak, true
// palindrome, noname, false 
// palindrome, 1, 'Merci de mettre une string valable', true
