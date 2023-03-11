function solution(dirs) {
    const map = {}
    let x = 0
    let y = 0
    for (const dir of dirs) {
        let nx = x
        let ny = y
        switch (dir) {
            case 'U':
                if (y < 5) ny += 1
                break
            case 'D':
                if (y > -5) ny -= 1
                break
            case 'R':
                if (x < 5) nx += 1
                break
            case 'L':
                if (x > -5) nx -= 1
                break
        }
        if (x !== nx || y !== ny) {
            map[`${x}/${y}^${nx}/${ny}`] = true
            map[`${nx}/${ny}^${x}/${y}`] = true
        }
        x = nx
        y = ny
    }
    
    return Object.keys(map).length / 2
}