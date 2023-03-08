function solution(dots) {
    const a = (dots[0][0] - dots[1][0]) / (dots[0][1] - dots[1][1])
    const b = (dots[2][0] - dots[3][0]) / (dots[2][1] - dots[3][1])
    if (a === b) {
        return 1
    }
    const c = (dots[0][0] - dots[2][0]) / (dots[0][1] - dots[2][1])
    const d = (dots[1][0] - dots[3][0]) / (dots[1][1] - dots[3][1])
    if (c === d) {
        return 1
    }
    const e = (dots[0][0] - dots[3][0]) / (dots[0][1] - dots[3][1])
    const f = (dots[1][0] - dots[2][0]) / (dots[1][1] - dots[2][1])
    if (e === f) {
        return 1
    }
    return 0
}