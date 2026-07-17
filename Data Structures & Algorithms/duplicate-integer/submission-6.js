class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numsAlreadyChecked = []
        for(let i = 0; i < nums.length; i++){
            if(numsAlreadyChecked.includes(nums[i])) return true
            else numsAlreadyChecked.push(nums[i])
        }
        return false
    }
}
