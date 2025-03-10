import sys
input = sys.stdin.readline

N, M, K = map(int, input().split())

board = [[0 for _ in range(M + 1)] for _ in range(N + 1)]
visited = [[False for _ in range(M + 1)] for _ in range(N + 1)]

for _ in range(K):
    r, c = map(int, input().split())

    r -= 1
    c -= 1

    board[r][c] = 1

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

max_size = 0

import collections

def bfs(i, j):
    global max_size

    size = 0

    queue = collections.deque([(i, j)])

    while len(queue):
        y, x = queue.pop()

        if visited[y][x]:
            continue

        size += 1
        visited[y][x] = True

        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx >= M or nx < 0 or ny >= N or ny < 0 or visited[ny][nx] or board[ny][nx] == 0:
                continue

            queue.appendleft((ny, nx))

    max_size = max(size, max_size)

for i in range(N):
    for j in range(M):
        if board[i][j] == 1:
            bfs(i, j)

print(max_size)