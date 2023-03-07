function solution(numbers, hand) {
    let answer = []
    let currentL = '*'
    let currentR = '#'
    
    const distanceLMap = {
        2: { 1: 1, 2: 0, 4: 2, 5: 1, 7: 3, 8: 2, '*': 4, 0: 3 },
        5: { 1: 2, 2: 1, 4: 1, 5: 0, 7: 2, 8: 1, '*': 3, 0: 2 },
        8: { 1: 3, 2: 2, 4: 2, 5: 1, 7: 1, 8: 0, '*': 2, 0: 1 },
        0: { 1: 4, 2: 3, 4: 3, 5: 2, 7: 2, 8: 1, '*': 1, 0: 0 }
    }
    
    const distanceRMap = {
        2: { 3: 1, 2: 0, 6: 2, 5: 1, 9: 3, 8: 2, '#': 4, 0: 3 },
        5: { 3: 2, 2: 1, 6: 1, 5: 0, 9: 2, 8: 1, '#': 3, 0: 2 },
        8: { 3: 3, 2: 2, 6: 2, 5: 1, 9: 1, 8: 0, '#': 2, 0: 1 },
        0: { 3: 4, 2: 3, 6: 3, 5: 2, 9: 2, 8: 1, '#': 1, 0: 0 }
    }
    
    numbers.forEach((v) => {
        switch (v) {
            case 1:
            case 4:
            case 7:
                answer.push('L')
                currentL = v
                break
            case 3:
            case 6:
            case 9:
                answer.push('R')
                currentR = v
                break
            default:
                const distanceL = distanceLMap[v][currentL]
                const distanceR = distanceRMap[v][currentR]
                if (distanceL < distanceR) {
                    answer.push('L')
                    currentL = v
                } else if (distanceL > distanceR) {
                    answer.push('R')
                    currentR = v
                } else if (hand === 'left') {
                    answer.push('L')
                    currentL = v
                } else {
                    answer.push('R')
                    currentR = v
                }
        }
    })
    return answer.join('')
}