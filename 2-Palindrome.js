function isPalindrome(word) {
  const cleanWord = word.toLowerCase().replace(/\s+/g, ''); //regx for clean spaces
  const reversedWord = cleaned.split('').reverse().join('');
  return cleanWord === reversedWord;
}

console.log(isPalindrome("level"));    //true
console.log(isPalindrome("Radar")); //true
console.log(isPalindrome("Hello"));  //false          
console.log(isPalindrome("this is not a palindrome")); //false
console.log(isPalindrome("A man a plan a canal Panama"));   //true                        
