function solution(my_string) {
    const arr = my_string.split(' ')
    let answer = Number(arr[0])
    arr.forEach((v, i) => {
        if (v === '+') {
            answer += Number(arr[i + 1])
        }
        if (v === '-') {
            answer -= Number(arr[i + 1])
        }
    })
    return answer
}