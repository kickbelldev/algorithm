N, M = map(int, input().split())

board = []

for _ in range(N):
    row = list(input())

    board.append(row)

result = []

for a in range(N - 7):
    for b in range(M - 7):
        i1 = 0
        i2 = 0
        for i in range(a, a + 8):
            for j in range(b, b + 8):
                if (i + j) % 2 == 0:
                    if board[i][j] != 'B':
                        i1 += 1
                    if board[i][j] != 'W':
                        i2 += 1
                else:
                    if board[i][j] != 'B':
                        i2 += 1
                    if board[i][j] != 'W':
                        i1 += 1
        result.append(i1)
        result.append(i2)

print(min(result))