function solution (bridge_length, weight, truck_weights) {
    let bridge = Array(bridge_length).fill(0)
    
    bridge[0] = truck_weights[0]
    
    let i = 1
    
    let time = 1
    while (i < truck_weights.length || bridge.findIndex((v) => v) !== -1) {
        bridge.pop()
        const w = bridge.reduce((acc, curr) => acc + curr, 0) + truck_weights[i]
        
        if (w <= weight) {
            if (i < truck_weights.length) {
                bridge.unshift(truck_weights[i++])
            } else {
                bridge.unshift(0)
            }
        } else {
            bridge.unshift(0)
        }
        
        time++
    }
    
    return time
}