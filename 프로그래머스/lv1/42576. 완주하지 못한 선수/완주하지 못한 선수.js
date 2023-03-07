function solution(participant, completion) {
    const map = new Map()
    
    for (const part of participant) {
        if (map.has(part)) map.set(part, map.get(part) + 1)
        else map.set(part, 1)
    }
    
    for (const comp of completion) {
        if (map.has(comp)) map.set(comp, map.get(comp) - 1)
    }
    
    for (const [key, value] of map) {
        if (value) return key
    }
}