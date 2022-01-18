console.time("ran in");


var romanToInt = function (roman_numeral_string) {

    let roman_numerals = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let potential_doubles = { 'I': { 'V': 4, 'X': 9 }, 'X': { 'L': 40, 'C': 90 }, 'C': { 'D': 400, 'M': 900 } }
    let int_from_roman = 0

    for (let i = 0; i < roman_numeral_string.length; i++) {
        if (Object.keys(potential_doubles).includes(roman_numeral_string[i]) && Object.keys(potential_doubles[roman_numeral_string[i]]).includes(roman_numeral_string[i + 1])) {
            let second_char_keys = Object.keys(potential_doubles[roman_numeral_string[i]])
            for (let j = 0; j < second_char_keys.length; j++) {
                if (roman_numeral_string[i + 1] == second_char_keys[j]) {
                    int_from_roman += potential_doubles[roman_numeral_string[i]][roman_numeral_string[i + 1]]
                    roman_numeral_string = roman_numeral_string.replace(`${roman_numeral_string[i + 1]}`, '')
                    break
                }
            }
        }
        else {
            int_from_roman += roman_numerals[roman_numeral_string[i]]
        }
    }
    return int_from_roman
}


console.log('\n\n\n-----------\n')

console.log(`I --> ${romanToInt("I")}`)
console.log(`V --> ${romanToInt("V")}`)
console.log(`X --> ${romanToInt("X")}`)
console.log(`L --> ${romanToInt("L")}`)
console.log(`C --> ${romanToInt("C")}`)
console.log(`D --> ${romanToInt("D")}`)
console.log(`M --> ${romanToInt("M")}`)

console.log('\n-----------\n')

console.log(`IV --> ${romanToInt("IV")}`)
console.log(`IX --> ${romanToInt("IX")}`)
console.log(`XL --> ${romanToInt("XL")}`)
console.log(`XC --> ${romanToInt("XC")}`)
console.log(`CD --> ${romanToInt("CD")}`)
console.log(`CM --> ${romanToInt("CM")}`)

console.log('\n-----------\n')


console.log(`II --> ${romanToInt("II")}`)
console.log(`VV --> ${romanToInt("VV")}`)
console.log(`XX --> ${romanToInt("XX")}`)
console.log(`LL --> ${romanToInt("LL")}`)
console.log(`CC --> ${romanToInt("CC")}`)
console.log(`DD --> ${romanToInt("DD")}`)
console.log(`MM --> ${romanToInt("MM")}`)

console.log('\n-----------\n')

console.log(romanToInt('CCXLIV')) //244
console.log(romanToInt("MMMDCCXXIV")) //3724

console.timeEnd("ran in");