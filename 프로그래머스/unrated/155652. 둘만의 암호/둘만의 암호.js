function solution(s, skip, index) {
    const arr = []
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i)
        for (let i = 0; i < index; i++) {
            charCode++
            while (skip.includes(String.fromCharCode(charCode))) {
                charCode++
            }
            if (charCode > 122) {
                charCode = 97
            }
            while (skip.includes(String.fromCharCode(charCode))) {
                charCode++
            }
        }
        arr.push(String.fromCharCode(charCode))
    }
    return arr.join('')
}