function solution(num, total) {
    for (let i = -100; i <= 1000; i++) {
        if (num * (i + (i + num - 1)) / 2 === total) {
            return new Array(num).fill(0).map((v, j) => j + i)
        }
    }
}