function solution(arr) {
    let lcm = 1
    for (let i = 0; i < arr.length; i++) {
        lcm *= arr[i] / gcd(arr[i], lcm)
    }
    
    return lcm
}

function gcd (p, q) {
    if (q === 0) {
        return p
    }
    
    return gcd(q, p % q)
}