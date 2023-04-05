function solution (genres, plays) {
    const songMap = {}
    const rankMap = {}
    
    for (let i = 0; i < genres.length; i++) {
        if (!songMap[genres[i]]) {
            songMap[genres[i]] = []
        }
        if (!rankMap[genres[i]]) {
            rankMap[genres[i]] = 0
        }
        songMap[genres[i]].push([i, plays[i]])
        rankMap[genres[i]] += plays[i]
    }
    return Object.entries(rankMap).sort((a, b) => b[1] - a[1]).map(([genre, play]) => songMap[genre].sort((a, b) => b[1] - a[1]).slice(0, 2).map((v) => v[0])).flat()
}