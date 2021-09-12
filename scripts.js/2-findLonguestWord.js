function findLongestWord(sentence) {
    // divide the sentence into separate words
    let arrayOfWordsInSentence = sentence.split(" ");
    // declare a variable to store the longest word (in the future)
    let longestWord = "";
    // iterate through the words in the array
    for (i = 0; i < arrayOfWordsInSentence.length; i++) {
        // store each word in the variable "word"
        let word = arrayOfWordsInSentence[i]
        // check if stored word is bigger than the current longest word
        if (word.length > longestWord.length) {
            // set new longest word
            longestWord = word;
        }
    }
    return longestWord;
}
console.log(findLongestWord("Le chemin le plus cours n'est pas toujours le meilleur")); // toujours

