function solution(my_string) {
    const vowel = ['a', 'e', 'i', 'o', 'u']
    return my_string.split('').filter((v) => !vowel.includes(v)).join('')
}