function solution (players, callings) {
    const rank = {}
    for (const i in players) {
        rank[players[i]] = +i
    }
    for (const called of callings) {
        const passed = players[rank[called] - 1]
        players[rank[called] - 1] = called
        players[rank[called]] = passed
        rank[called]--
        rank[passed]++
    }
    
    return Object.entries(rank).sort((a, b) => a[1] - b[1]).map((v) => v[0])
}