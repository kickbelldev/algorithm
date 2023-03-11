function solution (priorities, location) {
    const queue = priorities.map((p, i) => ({ p, i })).reverse()
    let cnt = 1
    while (queue.length) {
        const curr = queue.pop()
        let flag = false
        for (const item of queue) {
            const { p } = item
            if (curr.p < p) {
                flag = true
                break
            }
        }
        if (flag) {
            queue.unshift(curr)
        } else if (curr.i === location) {
            return cnt
        } else {
            cnt++
        }
    }
}