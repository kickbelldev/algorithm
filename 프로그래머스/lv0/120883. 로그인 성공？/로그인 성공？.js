function solution(id_pw, db) {
    const a = db.find((v) => id_pw[0] === v[0])
    if (!a) {
        return 'fail'
    }
    if (a[1] !== id_pw[1]) {
        return 'wrong pw'
    }
    return 'login'
}