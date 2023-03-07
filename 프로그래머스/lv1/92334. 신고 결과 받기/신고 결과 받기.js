function solution(id_list, report, k) {
    const reportMap = {}
    for (const id of id_list) {
        reportMap[id] = {}
    }
    
    for (const r of report) {
        const [reporter, suspect] = r.split(' ')
        
        reportMap[suspect][reporter] = true
    }
    
    let answer = Array(id_list.length).fill(0)
    for (const [suspect, result] of Object.entries(reportMap)) {
        for (const [reporter, _] of Object.entries(result)) {
            if (Object.keys(result).length >= k) {
                const index = id_list.indexOf(reporter)
                answer[index]++
            }
        }
    }
    return answer
}