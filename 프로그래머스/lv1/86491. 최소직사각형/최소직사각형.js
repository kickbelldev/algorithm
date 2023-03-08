function solution(sizes) {
    for (let i = 0; i < sizes.length; i++) {
        sizes[i] = sizes[i].sort((a, b) => a - b)
    }
    let width = 0
    let height = 0
    for (const [w, h] of sizes) {
        if (w > width) {
            width = w
        }
        if (h > height) {
            height = h
        }
    }
    
    return width * height
}