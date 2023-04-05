function solution (n, works) {
    const list = []
    for (const work of works) {
        if (!list[work]) {
            list[work] = 0
        }
        list[work]++
    }
    for (let i = list.length - 1; i > 0; i--) {
        if (list[i]) {
            if (!list[i - 1]) {
                list[i - 1] = 0
            }
            if (n >= list[i]) {
                n -= list[i]
                list[i - 1] += list[i]
                list[i] = 0
            } else {
                list[i] -= n
                list[i - 1] += n
                break
            }
        }
    }
    
    return list.reduce((acc, curr, idx) => acc + (idx ** 2) * curr, 0)
}