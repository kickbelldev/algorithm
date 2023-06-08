board = [[False for _ in range(100)] for _ in range(100)]

N = int(input())

for _ in range(N):
    l, b = map(int, input().split())

    for i in range(l, l + 10):
        for j in range(b, b + 10):
            board[i][j] = True

cnt = 0

for i in range(100):
    for j in range(100):
        if board[i][j]:
            cnt += 1

print(cnt)