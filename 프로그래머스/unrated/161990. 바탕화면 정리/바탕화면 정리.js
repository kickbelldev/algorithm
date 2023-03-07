function solution(wallpaper) {
    const n = wallpaper.length
    const m = wallpaper[0].length
    let first = { x: Number.MAX_SAFE_INTEGER, y: Number.MAX_SAFE_INTEGER }
    let last = { x: 0, y: 0 }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (wallpaper[i][j] === '#') {
                first = { x: Math.min(i, first.x), y: Math.min(j, first.y) }
                last = { x: Math.max(i + 1, last.x), y: Math.max(j + 1, last.y) }
            }
        }
    }
    return [first.x, first.y, last.x, last.y]
}