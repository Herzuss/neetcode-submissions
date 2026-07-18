class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let formated = s.toLowerCase().replace(/[^a-z0-9]/g, '')
        let reversed = formated.split('').reverse().join('')
        if(formated === reversed) return true
        else return false
    }
}
