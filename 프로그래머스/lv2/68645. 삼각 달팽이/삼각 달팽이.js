function solution(n) {
    const arr = new Array(n).fill(0).map(() => new Array())
    
    let direction = 'D'
    let row = -1
    let col = 0
    let cnt = 1
    
    let flag = true
    
    for (let i = n; i > 0; i -= 3) {
        for (let j = 0; j < i; j++) {
            arr[++row][col] = cnt++
        }
        for (let j = 0; j < i - 1; j++) {
            arr[row][++col] = cnt++
        }
        for (let j = 0; j < i - 2; j++) {
            arr[--row][--col] = cnt++
        }
    }
    
    return arr.flat()
}