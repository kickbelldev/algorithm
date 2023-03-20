function solution(order) {
    const subStack = []
    let cnt = 0
    for (let i = 1; i < order.length + 1; i++) {
        subStack.push(i)
        while (subStack.length && subStack[subStack.length - 1] === order[cnt]) {
            cnt++
            subStack.pop()
        }
    }
    
    return cnt
}