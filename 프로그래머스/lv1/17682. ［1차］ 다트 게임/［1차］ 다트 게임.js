function solution(dartResult) {
    const arr = []
    
    const regex = /(\d)+(S|D|T)+(\*|#)*/g
    
    const result = dartResult.match(regex)
    
    for (let i = 0; i < 3; i++) {
        const game = result[i]
        
        const [bonus, option] = game.replace(/\d/g, '').split('')
        arr[i] = parseInt(game)
        
        const b = bonus === 'T' ? 2 : bonus === 'D' ? 1 : 0
        for (let j = 0; j < b; j++) {
            arr[i] *= parseInt(game)
        }
        
        switch (option) {
            case '*':
                arr[i] *= 2
                arr[i - 1] *= 2
                break
            case '#':
                arr[i] *= -1
                break
        }
    }
    
    return arr.reduce((acc, curr) => acc + curr, 0)
}