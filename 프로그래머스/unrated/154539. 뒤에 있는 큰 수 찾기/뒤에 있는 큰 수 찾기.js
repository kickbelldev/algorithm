function solution(numbers) {
    const arr = new Array(numbers.length).fill(-1)
    const stack = []
    for (let i = 0; i < numbers.length; i++) {
        while (stack.length && numbers[stack[stack.length - 1]] < numbers[i]) {
            arr[stack.pop()] = numbers[i]
        }
        stack.push(i)
    }
    
    return arr
}