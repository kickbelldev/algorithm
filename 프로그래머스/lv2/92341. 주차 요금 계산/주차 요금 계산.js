function solution (fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees
    
    const map = {}
    
    const map2 = {}
    
    
    
    for (const record of records) {
        const [time, number, type] = record.split(' ')
        
        const [hh, mm] = time.split(':')
        const minutes = +hh * 60 + +mm
        if (type === 'IN') {
            map[number] = minutes
        } else {
            let diff = minutes - map[number]
            
            delete map[number]
            if (!map2[number]) {
                map2[number] = 0
            }
            map2[number] += diff
        }
    }
    for (const [number, minutes] of Object.entries(map)) {
        let diff = 60 * 24 - 1 - minutes
        if (!map2[number]) {
            map2[number] = 0
        }
        map2[number] += diff
    }
    
    const feeMap = {}
    
    for (let [number, minutes] of Object.entries(map2)) {
        feeMap[number] = baseFee
        if (minutes > baseTime) {
            minutes -= baseTime
            minutes = Math.ceil(minutes / unitTime)
            feeMap[number] += minutes * unitFee
        }
    }
    
    return Object.entries(feeMap).sort((a, b) => Number(a[0]) - Number(b[0])).map((v) => v[1])
}