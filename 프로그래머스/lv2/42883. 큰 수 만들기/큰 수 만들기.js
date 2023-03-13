function solution (number, k) {
    const stack = []
    
    for (const num of number) {
        while (stack.length && stack[stack.length - 1] < num && k > 0) {
            k--
            stack.pop()
        }
        stack.push(num)
    }
    
    stack.splice(number.length - k, k)
    
    return stack.join('')
}