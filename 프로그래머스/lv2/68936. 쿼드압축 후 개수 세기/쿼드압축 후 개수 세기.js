function solution(arr) {
    const visited = new Array(arr.length).fill(0).map(() => new Array(arr.length).fill(false))
    
    const result = [0, 0]

    function check (a, b, size) {
        if (visited[a][b]) return false
        const first = arr[a][b]
        for (let i = a; i < a + size; i++) {
            for (let j = b; j < b + size; j++) {
                if (arr[i][j] !== first) return false
            }
        }
        
        return true
    }
    
    function visit (a, b, size) {
        const first = arr[a][b]
        result[first]++
        for (let i = a; i < a + size; i++) {
            for (let j = b; j < b + size; j++) {
                visited[i][j] = true
            }
        }
    }
    
    for (let i = arr.length; i >= 1; i /= 2) {
        for (let j = 0; j < arr.length; j += i) {
            for (let k = 0; k < arr.length; k += i) {
                if (check(j, k, i)) {
                    visit(j, k, i)
                }
            }
        }
    }
    
    return result
}
