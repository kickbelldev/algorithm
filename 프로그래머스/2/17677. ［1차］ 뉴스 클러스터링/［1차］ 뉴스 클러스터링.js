function solution (str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    let arr1 = []
    let arr2 = []
    
    for (let i = 0; i < str1.length - 1; i++) {
        arr1.push(str1.slice(i, i + 2))
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        arr2.push(str2.slice(i, i + 2))
    }
    
    const regex = /[a-z]{2}/
    
    arr1 = arr1.filter((v) => regex.test(v))
    arr2 = arr2.filter((v) => regex.test(v))
    
    let interCnt = 0
    let unionCnt = 0
    
    const set = new Set([...arr1, ...arr2])
    
    for (const item of set) {
        const has1 = arr1.filter((x) => x === item).length
        const has2 = arr2.filter((x) => x === item).length
        
        interCnt += Math.min(has1, has2)
        unionCnt += Math.max(has1, has2)
    }
    
    return unionCnt ? Math.floor((interCnt / unionCnt) * 65536) : 65536
}