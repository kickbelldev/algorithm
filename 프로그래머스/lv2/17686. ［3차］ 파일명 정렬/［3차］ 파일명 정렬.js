function solution(files) {
    const alphaRegex = /^[a-z|\-|\.|\s]+/
    const numberRegex = /^[0-9]+/
    
    files.sort((a, b) => {
        a = a.toLowerCase()
        const aHead = a.match(alphaRegex)[0]
        a = a.replace(aHead, '')
        const aTail = Number(a.match(numberRegex)[0])
        
        b = b.toLowerCase()
        const bHead = b.match(alphaRegex)[0]
        b = b.replace(bHead, '')
        const bTail = Number(b.match(numberRegex)[0])
        
        if (aHead < bHead) {
            return -1
        } else if (aHead > bHead) {
            return 1
        } else {
            if (aTail < bTail) {
                return -1
            } else {
                return 1
            }
        }
    })
    
    return files
}