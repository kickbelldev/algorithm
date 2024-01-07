function solution(edges) {
    const map = {}
    const initialVisited = []
    let visited = []

    for (const [start, end] of edges) {
        map[start] = map[start] ?? []
        initialVisited[start] = false
        initialVisited[end] = false
        map[start].push(end)
    }
    
    let eightCnt = 0
    let donutCnt = 0
    let isDonut = false
    let hasNext = false
    const checkDonut = (start, n, cnt) => {
        if (!map[n]) {
            return
        }
        if (visited[n]) {
            return
        }
        visited[n] = true
        
        if (n == start) {
            for (const candidate of map[n]) {
                if (!visited[candidate]) {
                    hasNext = true
                    return
                }
            }
            isDonut = true
            return
        }
        if (map[n].length > 1) {
            hasNext = true
            return
        }
        for (const next of map[n]) {
            checkDonut(start, next, cnt + 1)
        }
    }
    let isLine = false
    let lineCnt = 0
    const checkLine = (start, n) => {
        if (visited[n]) {
            return
        }
        if (!map[n]) {
            isLine = true
            return
        }
        for (const next of map[n]) {
            checkLine(start, next)
        }
    }
    
    let addedNode = 0
    let cnt = 0
    const list = []
    visited = [...initialVisited]
    for (const [start, nextList] of Object.entries(map)) {
        let isAdded = true
        let currDonutCnt = 0
        let currEightCnt = 0
        let currLineCnt = 0
        for (const next of nextList) {
            isDonut = false
            hasNext = false
            checkDonut(start, next, 1)
            if (hasNext) {
                currEightCnt++
                eightCnt++
            } else if (isDonut) {
                currDonutCnt++
                donutCnt++
            } else {
                isLine = false
                checkLine(start, next)
                if (isLine) {
                    currLineCnt++
                }
            }
        }
        list.push([start, currDonutCnt, currLineCnt, currEightCnt])
        cnt++
    }
    console.log(list)
    lineCnt += Math.max(...Object.keys(map)) - cnt
    console.log(addedNode, donutCnt, lineCnt, eightCnt)
}