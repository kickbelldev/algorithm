function solution(arr) {
    let answer = 0
    
    arr.sort((a, b) => a - b)
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i], arr[j])
        }
    }
    
    return answer
}