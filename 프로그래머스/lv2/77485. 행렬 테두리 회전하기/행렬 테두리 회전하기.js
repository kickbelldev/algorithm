function solution(rows, columns, queries) {
    const arr = new Array(rows).fill(0).map((_, i) => new Array(columns).fill(0).map((_, j) => i * columns + j + 1))
    
    const result = []
    
    for (const query of queries) {
        let [y1, x1, y2, x2] = query
        x1--;y1--;x2--;y2--
        
        const first = arr[y1][x1]
        
        let min = 10001
        
        for (let i = y1; i < y2; i++) {
            const item = arr[i + 1][x1]
            if (item < min) min = item
            arr[i][x1] = item
        }
        
        for (let i = x1; i < x2; i++) {
            const item = arr[y2][i + 1]
            if (item < min) min = item
            arr[y2][i] = item
        }
        
        for (let i = y2; i > y1; i--) {
            const item = arr[i - 1][x2]
            if (item < min) min = item
            arr[i][x2] = item
        }
        
        for (let i = x2; i > x1; i--) {
            const item = arr[y1][i - 1]
            if (item < min) min = item
            arr[y1][i] = item
        }
        if (first < min) min = first
        arr[y1][x1 + 1] = first
        
        result.push(min)
    }
    
    
    return result
}