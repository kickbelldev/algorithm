function solution(brown, yellow) {
    for (let i = 1; i <= yellow; i++) {
        if (yellow % i === 0) {
            const width = parseInt(yellow / i)
            const height = parseInt(yellow / width)
            
            if (brown === width * 2 + height * 2 + 4) {
                return [width + 2, height + 2]
            }
        }
    }
}