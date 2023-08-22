from collections import deque

M, N = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(N)]

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

queue = deque([])
for i in range(N):
    for j in range(M):
        if board[i][j] == 1:
            queue.append((i, j))

while queue:
    x, y = queue.popleft()
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < N and 0 <= ny < M and board[nx][ny] == 0:
            board[nx][ny] = board[x][y] + 1
            queue.append((nx, ny))
            
flag = True
res = 0
for i in range(N):
    for j in range(M):
        if board[i][j] == 0:
            flag = False
    res = max(res, max(board[i]))

if not flag:
    print(-1)
else:
    print(res - 1)