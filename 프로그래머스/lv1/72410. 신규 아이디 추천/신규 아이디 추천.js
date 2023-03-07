function solution(new_id) {
    let id = new_id
    
    id = id.toLowerCase()
    
    id = id.replace(/[^0-9a-z\-._]/gi, '')
    
    id = id.replace(/\.+/gi, '.')
    
    if (id[0] === '.') id = id.replace('.', '')
    if (id[id.length - 1] === '.') id = id.substring(0, id.length - 1)
    
    if (!id.length) id = 'a'
    
    if (id.length >= 16) id = id.substring(0, 15)
    if (id[id.length - 1] === '.') id = id.substring(0, id.length - 1)
    
    while (id.length <= 2) {
        id = id + id[id.length - 1]
    }
    var answer = id;
    return answer;
}