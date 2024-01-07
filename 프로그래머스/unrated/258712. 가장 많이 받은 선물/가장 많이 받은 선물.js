function solution(friends, gifts) {
    const board = new Array(friends.length).fill(0).map(() => new Array(friends.length).fill(0))
    const map = {}
    
    
    for (let i = 0; i < friends.length; i++) {
        map[friends[i]] = i;
    }
    
    for (const gift of gifts) {
        const [giver, reciever] = gift.split(' ')
        
        board[map[giver]][map[reciever]]++
    }
    
    const index = new Array(friends.length).fill(0)
    const get = new Array(friends.length).fill(0)
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
            if (board[i][j]) {
                index[i] += board[i][j]
            }
            if (board[j][i]) {
                index[i] -= board[j][i]
            }
            
            if (board[i][j] > board[j][i]) {
                get[i]++
            }
        }
    }
    console.log(get)
    
    for (let i = 0; i < friends.length; i++) {
        for (let j = 0; j < friends.length; j++) {
            if (i !== j) {
                if (board[i][j] === board[j][i]) {
                    if (index[i] > index[j]) {
                        
                        get[i]++
                    }
                }
            }
        }
    }
    
    return Math.max(...get)
}