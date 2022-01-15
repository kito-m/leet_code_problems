
console.time(ran in);

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let iSlice = nums.slice(i);
        for (let j = 1; j < iSlice.length; j++) {
            if (nums[i] + iSlice[j] == target) {
                nums.splice(i, 1, null)
                return [i, nums.indexOf(iSlice[j])]
            }
        }
    }
}

// twoSum([2, 7, 11, 15], 9)
//[0, 1]

// twoSum(
//     [3, 2, 4],
//     6)
//[1, 2]

// twoSum(
//     [3, 2, 3],
//     6)
//[0, 2]

// twoSum(
//     [3, 3],
//     6)
//[0, 1]

let nums = Array.from(Array(20000).keys())
let target = 19999;


// console.log(nums[1000])

twoSum(nums, target)

console.timeEnd(ran in);
