function solution(park, routes) {
    const d = {
        N: [0, -1],
        S: [0, 1],
        W: [-1, 0],
        E: [1, 0]
    }
    
    const map = []
    for (const row of park) {
        const r = row.split('')  
        map.push(r)
    }
    
    let [h, w] = getStart(map)
    
    for (const route of routes) {
        const [op, n] = route.split(' ')
        
        const nw = w + d[op][0] * n
        const nh = h + d[op][1] * n
            
        if (nw < 0 || nw >= park[0].length || nh < 0 || nh >= park.length) {
            continue
        }
        let overObstacle = false
        for (let i = 1; i <= n; i++) {
            const nw = w + d[op][0] * i
            const nh = h + d[op][1] * i
            if (map[nh][nw] === 'X') {
                overObstacle = true
                break
            }
        }
        if (overObstacle) {
            continue
        }
        h = nh
        w = nw
    }
    
    return [h, w]
}

function getStart (map) {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] === 'S') {
                return [i, j]
            }
        }
    }
}