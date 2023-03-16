function solution (m, musicinfos) {
    const neoNoteList = getNoteList(m)
    const neoNoteStr = neoNoteList.join('')
    
    const result = { time: 0, title: '(None)' }
    
    for (const musicinfo of musicinfos) {
        const [start, end, title, notes] = musicinfo.split(',')
        
        const time = getTime(start, end)
        
        const musicNoteRawList = getNoteList(notes)
        
        const musicNoteList = []
        for (let i = 0; i < time; i++) {
            musicNoteList.push(musicNoteRawList[i % musicNoteRawList.length])
        }
        
        const musicNoteStr = musicNoteList.join('')
        
        const index = musicNoteStr.indexOf(neoNoteStr)
        if (index !== -1) {
            if (time > result.time) {
                result.time = time
                result.title = title
            }
        }
    }
    
    return result.title
}

function getNoteList (m) {
    let i = 0
    
    const arr = []
    
    while (i < m.length) {
        if (m[i + 1] === '#') {
            arr.push(m.slice(i, i + 1).toLowerCase())
            i += 2
        } else {
            arr.push(m.slice(i, i + 1))
            i += 1
        }
    }
    
    return arr
}

function getTime (start, end) {
    const startMinutes = getMinutes(start)
    const endMinutes = getMinutes(end)
    
    return endMinutes - startMinutes
}

function getMinutes (hhmm) {
    const [hh, mm] = hhmm.split(':')
    
    return Number(hh) * 60 + Number(mm)
}