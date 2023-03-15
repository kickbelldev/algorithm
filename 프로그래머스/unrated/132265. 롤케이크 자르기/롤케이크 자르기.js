function solution(topping) {
    let answer = 0
    const aMap = new Map()
    const bMap = new Map()
    
    topping.forEach((v) => {
        if (!aMap.get(v)) {
            aMap.set(v, 0)
        }
        aMap.set(v, aMap.get(v) + 1)
    })
    
    topping.forEach((v) => {
        aMap.set(v, aMap.get(v) - 1)
        
        if (!bMap.get(v)) {
            bMap.set(v, 0)
        }
        bMap.set(v, bMap.get(v) + 1)
        
        if (!aMap.get(v)) {
            aMap.delete(v)
        }
        
        if (aMap.size === bMap.size) {
            answer++
        }
    })
    
    return answer
}