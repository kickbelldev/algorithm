function solution(common) {
    const [first, second, third] = common
    if (third - second === second - first) {
        return common.pop() + second - first
    } else {
        return common.pop() * second / first
    }
}