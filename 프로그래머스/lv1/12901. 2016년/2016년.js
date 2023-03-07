function solution(a, b) {
    const date = new Date(`2016-${a}-${b}`)
    return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][date.getDay()]
}