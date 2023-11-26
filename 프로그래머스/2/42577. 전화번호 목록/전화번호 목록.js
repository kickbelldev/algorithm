function solution(phone_book) {
    const map = {}
    for (const phone of phone_book) {
        map[phone] = true
    }
    
    for (const phone of phone_book) {
        for (let i = 0; i < phone.length; i++) {
            const prefix = phone.slice(0, i)
            
            if (map[prefix]) {
                return false
            }
        }
    }
    
    return true
}