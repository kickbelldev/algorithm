function solution(spell, dic) {
    for (let str of dic) {
        let i = 0
        spell.forEach((v) => {
            const newStr = str.replace(v, '')
            if (str.length !== newStr.length) {
                i++
                str = newStr
            }
        })
        if (i === spell.length && !str.length) {
            return 1
        }
    }
    return 2
}