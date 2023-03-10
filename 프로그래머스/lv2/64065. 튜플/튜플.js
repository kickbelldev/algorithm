function solution(s) {
    const answer = []
    const arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
    arr.sort((a, b) => a.length - b.length)
    
    const map = {}
    
    arr.forEach((col) => {
        col.forEach((row) => {
            if (!map[row]) {
                map[row] = 0
            }
            map[row]++
        })
    })
    
    return Object.entries(map).sort((a, b) => b[1] - a[1]).map(([item, cnt]) => Number(item))
}