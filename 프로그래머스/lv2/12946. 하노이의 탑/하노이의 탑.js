function solution (n) {
    const answer = []
    function move (cnt, start, via, end) {
        if (cnt === 1) {
            answer.push([start, end])
            return
        }
        
        move(cnt - 1, start, end, via)
        move(1, start, via, end)
        move(cnt - 1, via, start, end)
    }
    move(n, 1, 2, 3)
    return answer
}