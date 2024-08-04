import sys

input = sys.stdin.readline

n, m = map(int, input().split())

board = [list(map(int, input().split())) for _ in range(n)]
visit = [[False for _ in range(m)] for _ in range(n)]
answer = [[-1 for _ in range(m)] for _ in range(n)]

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]


def bfs(y, x):
    queue = [[x, y, 0]]

    while queue:
        x, y, cnt = queue.pop(0)

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if 0 <= nx < m and 0 <= ny < n and not visit[ny][nx] and board[ny][nx] == 1:
                visit[ny][nx] = True
                answer[ny][nx] = cnt + 1
                queue.append([nx, ny, cnt + 1])


for i in range(n):
    for j in range(m):
        if board[i][j] == 2:
            visit[i][j] = True
            answer[i][j] = 0
            bfs(i, j)
        if board[i][j] == 0:
            answer[i][j] = 0

for row in answer:
    for item in row:
        print(item, end=" ")
    print()
