function leet(word) {
  if (typeof word === "string") {
    let response = "";

    for (var i = 0; i < word.length; i++) {
      const letter = word[i];
      const letterUppercase = letter.toUpperCase();
      if (letterUppercase === "A") {
        response += "4";
      } else if (letterUppercase === "E") {
        response += "3";
      } else if (letterUppercase === "I") {
        response += "1";
      }else if (letterUppercase === "O") {
        response += "0";
      }else if (letterUppercase === "U") {
        response += "(_)";
      }else if (letterUppercase === "Y") {
        response += "7";
      } else {
        response += letter;
      }
    }
    return response;
  } else {
    return "Merci de mettre une string valable";
  }
}

console.log(leet('BADBADNOTGOOD - "In Your Eyes" (Feat. Charlotte Day Wilson)')); // B4DB4DN0TG00D - "1n 70(_)r 373s" (F34t. Ch4rl0tt3 D47 W1ls0N)
console.log(leet("")); // 
console.log(leet(1)); // Merci de mettre une string valable