
//-2147483648
//2147483648


//12345678900987654321

var isPalindrome = function (x) {
    if (x == 0) {
        return true
    }
    if (x < 0){
        return false
    }
    let num_string = `${x}`
    let reversed = ''
    for (let i = 0; i < num_string.length; i++) {
        reversed = `${num_string[i]}${reversed}`
    }
    if (x == parseInt(reversed)){
        return true
    }
    else{
        return false
    }
};


console.log(isPalindrome(0))
console.log(isPalindrome(123))
console.log(isPalindrome(-123))
console.log(isPalindrome(10))
console.log(isPalindrome(101))