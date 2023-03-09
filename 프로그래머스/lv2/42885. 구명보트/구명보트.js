function solution(people, limit) {
    people.sort((a, b) => b - a)
    
    let answer = 0
    
    let left = 0
    let right = people.length - 1
    
    while (left < right) {
        const sum = people[left] + people[right]
        
        left++
        if (sum <= limit) {
            right--
        }
        
        answer++
    }
    
    if (left === right) answer++
    
    return answer
}