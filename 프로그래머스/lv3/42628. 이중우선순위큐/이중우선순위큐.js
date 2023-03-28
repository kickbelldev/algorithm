function solution(operations) {
    const queue = []
    for (const oper of operations) {
        const [o, num] = oper.split(' ').map((v) => {
            if (isNaN(v)) {
                return v
            }
            return +v
        })
        if (o === 'I') {
            queue.push(num)
            queue.sort((a, b) => a - b)
        } else {
            if (num === 1) {
                queue.pop()
            } else {
                queue.shift()
            }
        }
    }
    
    if (queue.length) {
        return [queue[queue.length - 1], queue[0]]
    }
    return [0, 0]
}