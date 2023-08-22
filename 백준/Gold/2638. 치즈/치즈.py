N, M = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(N)]
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

cnt = 0

while True:
    visit = [[False] * M for _ in range(N)]
    cnt_board = [[0] * M for _ in range(N)]
    flag = False

    queue = [[0, 0]]

    while len(queue) != 0:
        x, y = queue.pop(0)

        if visit[x][y]:
            continue

        visit[x][y] = True
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and board[nx][ny] == 1:
                cnt_board[nx][ny] += 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < M and board[nx][ny] == 0:
                queue.append([nx, ny])

    for i in range(N):
        for j in range(M):
            if cnt_board[i][j] >= 2:
                board[i][j] = 0
                flag = True
    if flag != True:
        break
    cnt += 1
print(cnt)
