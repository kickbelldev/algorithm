function solution(babbling) {
    const regex = /^(aya|ye|woo|ma)*$/
    return babbling.reduce((acc, curr) => regex.test(curr) ? acc + 1 : acc, 0)
}