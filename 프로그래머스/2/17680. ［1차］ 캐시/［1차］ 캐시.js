function solution (cacheSize, cities) {
    let arr = []
    
    let answer = 0
    
    for (const city of cities) {
        const index = arr.indexOf(city.toLowerCase())
        if (index !== -1) {
            answer++
            const pop = arr.splice(index, 1)
            arr = [...pop, ...arr]
        } else {
            answer += 5
            arr = [city.toLowerCase(), ...arr].slice(0, cacheSize)
        }
    }
    
    return answer
}