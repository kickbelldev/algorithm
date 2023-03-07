function solution(board, moves) {
    const result = []
    let answer = 0
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const current = board[j][moves[i] - 1]
            if (current) {
                board[j][moves[i] - 1] = 0

                if (result[result.length - 1] === current) {
                    result.pop()
                    answer += 2
                } else {
                    result.push(current)
                }
                break
            }
        }
    }
    return answer;
}