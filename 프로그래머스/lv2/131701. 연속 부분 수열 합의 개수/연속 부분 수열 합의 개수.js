function solution(elements) {
    let length = elements.length
    elements = [...elements, ...elements]
    const answer = new Set()
    
    for (let i = 0; i < length; i++) {
        let sum = 0
        for (let j = 0; j < length; j++) {
            sum += elements[i + j]
            answer.add(sum)
        }
    }
    
    return answer.size;
}