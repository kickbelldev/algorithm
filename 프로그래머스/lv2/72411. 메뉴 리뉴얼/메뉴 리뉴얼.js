function getCombination (arr, num) {
    const result = []

    if (num === 1) return arr.map((v) => ([v]))

    arr.forEach((f, i, o) => {
        const r = o.slice(i + 1)
        const combinations = getCombination(r, num - 1)
        const attached = combinations.map((v) => ([f, ...v]))
        result.push(...attached)
    })

    return result
}

function solution (orders, course) {
    const result = []
    
    for (const c of course) {
        const map = {}
        for (const order of orders) {
            const combination = getCombination(order.split('').sort(), c)
            
            for (const c of combination) {
                const comb = c.join('')
                if (!map[comb]) {
                    map[comb] = 0
                }

                map[comb]++
            }
            
            for (const [menu, cnt] of Object.entries(map)) {
                
            }
        }
        const max = Math.max(...Object.values(map))
        
        for (const [menu, orderCnt] of Object.entries(map)) {
            if (orderCnt === max && orderCnt >= 2) {
                result.push(menu)
            }
        }
    }
    
    return result.sort()
}