function solution(N, number) {
    if (N === number) {
        return 1
    }
    
    const numberSetList = Array.from({length: 10}).map(() => new Set())
    
    numberSetList[1].add(N)
    
    const calc = (cnt) => {
        
        numberSetList[cnt].add(Number(N.toString().repeat(cnt)))
        for (let i = 1; i < cnt; i++) {
            for (const left of numberSetList[i]) {
                for (const right of numberSetList[cnt - i]) {
                    numberSetList[cnt].add(left + right)
                    numberSetList[cnt].add(left - right)
                    numberSetList[cnt].add(left * right)
                    if (right !== 0) {
                        numberSetList[cnt].add(left / right)
                    }
                }
            }
        }
    }
    
    for (let i = 2; i < 9; i++) {
        calc(i)
        
        if (numberSetList[i].has(number)) {
            return i
        }
    }
    
    return -1
}