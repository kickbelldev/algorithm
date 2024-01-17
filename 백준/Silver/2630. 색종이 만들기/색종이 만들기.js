let n
let board
const answer = [0, 0]

const dnc = (x, y, n) => {
  const currColor = board[y][x]
  let isClear = true
  for (let i = y; i < y + n; i++) {
    for (let j = x; j < x + n; j++) {
      if (currColor !== board[i][j]) {
        isClear = false
      }
    }
  }
  
  if (isClear) {
    answer[currColor]++
    return
  }
  const next = n / 2
  dnc(x, y, next)
  dnc(x + next, y, next)
  dnc(x, y + next, next)
  dnc(x + next, y + next, next)
}

const solution = () => {
  dnc(0, 0, n)

  console.log(answer[0])
  console.log(answer[1])
}

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const input = []

rl.on('line', (line) => {
  input.push(line)
}).on('close', () => {
  n = Number(input.shift())

  board = input.map((line) => line.split(' ').map((val) => Number(val)))

  solution()
})
