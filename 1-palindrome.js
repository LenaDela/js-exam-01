function palindrome(word) {
    // check type is string    
    if (typeof word !== 'string') {
        return 'Merci de mettre une string valable';
    }

    // check if palindrome 
    let numLettersLessOne = word.length - 1;
    for (let i = 0; i < numLettersLessOne / 2; i++) {
        // first loop, i = 0
        // x = k
        let x = word[i];//forward character
        // first loop, i = 0
        // numLettersLessOne = 4
        // y = k
        let y = word[numLettersLessOne - i];//backward character
        if (x != y) {
            // return false if string not match
            return false;
        }
    }
    /// return true if string is palindrome
    return true;
}
console.log(palindrome('kayak')) // true
console.log(palindrome('noname')) // false
console.log(palindrome(1)) //Merci de mettre une string valable
