function checkPalindrome(){
    const len = string.length;
    for(let i=0; i< len/2; i++){
        if(string[i] !== string[len-1 -i]){
            return "String is not Palindrome";
    }
}
    return "String is Palindrome";
}
const string = prompt('Enter a string: ');
const value = checkPalindrome(string);
console.log(value);