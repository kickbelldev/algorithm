function solution(my_string) {
    return my_string.split('').reduce((acc, curr) => {
        const num = Number(curr)
        if (Number.isInteger(num)) return acc + num
        return acc
    }, 0)
}