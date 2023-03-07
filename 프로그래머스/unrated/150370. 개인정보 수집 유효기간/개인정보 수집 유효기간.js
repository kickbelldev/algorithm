function solution(today, terms, privacies) {
    const t = {}
    for (const term of terms) {
        const [type, period] = term.split(' ')
        t[type] = parseInt(period)
    }
    
    const currentDate = new Date(today)
    
    const result = []
    
    for (let i = 0; i < privacies.length; i++) {
        const privacy = privacies[i]
        const [date, type] = privacy.split(' ')
        const deadline = new Date(date)
        deadline.setMonth(deadline.getMonth() + t[type])
        
        if (currentDate >= deadline) {
            result.push(i + 1)
        }
    }
    
    return result
}