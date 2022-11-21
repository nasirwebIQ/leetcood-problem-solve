
var nums = [1,3,5,6]
var  target = 5

var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] >= target) {
        return i
        }
        }
        return nums.length
};
searchInsert(nums)
console.log("nasir uddin");
