function solution(tickets) {
    const cityMap = {}
    const routeMap = {}
    
    for (let i = 0; i < tickets.length; i++) {
        const [start, end] = tickets[i]
        cityMap[start] = cityMap[start] ?? []
        cityMap[start].push(end)
        routeMap[`${start}/${end}`] = routeMap[`${start}/${end}`] ?? 0
        routeMap[`${start}/${end}`]++
    }
    const list = ['ICN']
    const result = []
    const dfs = (curr, li) => {
        let isAllTicketsUsed = true
        for (const [route, cnt] of Object.entries(routeMap)) {
            if (cnt) {
                isAllTicketsUsed = false
            }
        }
        if (isAllTicketsUsed) {
            result.push(li)
            return
        }
        if (!cityMap[curr]) {
            return
        }
        
        for (const next of cityMap[curr]) {
            if (routeMap[`${curr}/${next}`]) {
                routeMap[`${curr}/${next}`]--
                dfs(next, [...li, next])
                routeMap[`${curr}/${next}`]++
            }
        }
    }
    
    dfs('ICN', list)
    return result.sort()[0]
}