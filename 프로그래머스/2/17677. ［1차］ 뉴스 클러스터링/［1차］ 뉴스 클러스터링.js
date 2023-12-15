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
    
    for (let i = 0; i < arr1.length; i++) {
        const idx = arr2.indexOf(arr1[i])
        
        if (~idx) {
            interCnt++
            arr2.splice(idx, 1)
        }
        
        unionCnt++
    }
    
    unionCnt += arr2.length
    
    return unionCnt ? Math.floor((interCnt / unionCnt) * 65536) : 65536
}