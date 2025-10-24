//O{n2}
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

// O(n)
function TwoSum(arr, target) {
  const seen = {};
  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];
    if (seen.hasOwnProperty(compliment)) {
      return [seen[compliment], i];
    }
    seen[arr[i]] = i;
  }
  return [];
}


