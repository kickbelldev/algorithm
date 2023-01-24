function solution(n) {
    let i = 6
    while (true) {
        if (i % n === 0) return i / 6
        i+= 6
    }
}