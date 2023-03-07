function solution(cards1, cards2, goal) {
    cards1 = cards1.reverse()
    cards2 = cards2.reverse()
    goal = goal.reverse()
    while (goal.length) {
        
        const g = goal.pop()
        
        if (cards1[cards1.length - 1] === g) {
            cards1.pop()
        } else if(cards2[cards2.length - 1] == g) {
            cards2.pop()
        } else {
            return 'No'
        }
    }
    return 'Yes'
}