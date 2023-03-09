function solution(n) {
    let m = n
    while ((n.toString(2).match(/1/g) || []).length !== ((++m).toString(2).match(/1/g) || []).length) {
    }
    return m
}