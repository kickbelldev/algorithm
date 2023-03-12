function solution (numbers) {
    numbers = numbers.split('')
    
    const visited = Array(numbers.length).fill(false)
    
    const strList = []
    
    function dfs (str) {
        
        for (let i = 0; i < numbers.length; i++) {
            const number = numbers[i]
            if (!visited[i]) {
                visited[i] = true
                strList.push(str + number)
                dfs(str + number)
                visited[i] = false
            }
        }
    }
    
    dfs('')
    
    const numberList = [...new Set(strList.map((v) => Number(v)))]
    
    const max = Math.max(...numberList)
    
    const prime = Array(max + 1).fill(false)
    
    prime[0] = true
    prime[1] = true
    
    for (let i = 2; i <= max; i++) {
        if (prime[i]) {
            continue
        }
        for (let j = 2 * i; j <= max; j += i) {
            prime[j] = true
        }
    }
    
    let answer = 0
    
    for (const number of numberList) {
        if (!prime[number]) {
            answer++
        }
    }
    
    return answer
}