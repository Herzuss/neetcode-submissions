class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = []
        for(let token of tokens){
            if(isNaN(token)){
               let a = stack.pop()
               let b = stack.pop()
               if(token === '+') stack.push(a+b)
               else if(token === '-') stack.push(b-a)
               else if(token === '*') stack.push(a*b)
               else if(token === '/') stack.push(Math.trunc(b/a))
            }
            else{
                stack.push(Number(token))
            }
        }
        return stack.pop()
    }
}
