function solution(X, Y) {
    let answer = '';
    const number = Array.from(Array(10).fill(0))
    const arr = []

    for(let i = 0; i < X.length; i++) {
        number[X[i]] += 1
    }

    for(let i = 0; i < Y.length; i++) {
        if(number[Y[i]] > 0) {
            arr.push(Y[i])
            number[Y[i]] -= 1
        }
    }

    
    if(!arr.length) return '-1'
    else if(arr[0] === '0') return '0'

    return arr.sort((a, b) => b - a).join('')
}