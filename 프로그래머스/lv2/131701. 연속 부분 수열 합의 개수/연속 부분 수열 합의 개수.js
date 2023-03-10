function solution(elements) {
    let length = elements.length
    elements = [...elements, ...elements]
    
    const answer = new Set()
    
    for (let i = 0; i < length + 1; i++) {
        
        for (let j = 1; j <= length; j++) {
            answer.add(elements.slice(i, i + j).reduce((acc, curr) => acc + curr))
        }
    }
    
    return answer.size;
}