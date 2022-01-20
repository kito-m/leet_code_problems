

var longestCommonPrefix = function(listOfStrings) {
    let outputString = ''
    let lengthOfShortestString = Math.min.apply(Math, listOfStrings.map(function(str) { return str.length; }));
    for(let i = 0; i < lengthOfShortestString; i++){
        let firstCharOfFirstString = listOfStrings[0][i]
        for(let j = 0; j < listOfStrings.length; j++){
            if (listOfStrings[j][i] != firstCharOfFirstString){
                return outputString
            }
        }
        outputString += firstCharOfFirstString
    }
    return outputString
};


console.log(longestCommonPrefix(["flower","flow","fight"]))
console.log(longestCommonPrefix(["fliower","fliow","flight"]))
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))