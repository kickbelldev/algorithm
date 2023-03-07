function solution(k, score) {
    let arr = []
    
    const answer = []
    
    for (const s of score) {
        if (arr.length < k) {
            arr.push(s)
            arr.sort((a, b) => b - a)
        } else if (s >= arr[arr.length - 1]) {
            arr = [s, ...arr].sort((a, b) => b - a).slice(0, k)
        }
        answer.push(arr[arr.length - 1])
    }
    
    return answer
}