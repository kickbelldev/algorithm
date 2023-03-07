function solution(numlist, n) {
    return numlist.sort((a, b) => {
        const p = Math.abs(a - n)
        const q = Math.abs(b - n)
        if (p > q) {
            return 1
        } else if (p < q) {
            return -1
        } else if (a > b) {
            return -1
        } else {
            return 1
        }
    })
}