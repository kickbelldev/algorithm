function solution (word) {
    let arr = ["","A","E","I","O","U"]

    let result = []

    function recursion (n, str){
        if(n === 0){
            result.push(str)
            return
        }
        for(let i = 0; i < 6; i++){
            recursion(n - 1,`${str}${arr[i]}`)
        }
    }
    recursion(5, '')
    let data = [...new Set(result)].sort()
    return data.indexOf(word)
}