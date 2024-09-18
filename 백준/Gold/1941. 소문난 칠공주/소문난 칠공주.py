import sys

input = sys.stdin.readline

from collections import deque

borad = [list(input().strip()) for _ in range(5)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

result = 0


def bfs(path):
    global result
    visited = [path[0]]
    queue = deque([path[0]])

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if (nx, ny) in path and (nx, ny) not in visited:
                visited.append((nx, ny))
                queue.append((nx, ny))

    if len(visited) == 7:
        result += 1


def dfs(x, y, depth, y_count, path):
    if y_count >= 4:
        return

    if depth == 7:
        bfs(path[:])
        return

    for i in range(x * 5 + y + 1, 25):
        nx = i // 5
        ny = i % 5
        if (nx, ny) not in path:
            path.append((nx, ny))
            if borad[nx][ny] == "S":
                dfs(nx, ny, depth + 1, y_count, path)
            else:
                dfs(nx, ny, depth + 1, y_count + 1, path)
            path.pop()


for x in range(5):
    for y in range(5):
        path = [(x, y)]
        if borad[x][y] == "S":
            dfs(x, y, 1, 0, path)
        else:
            dfs(x, y, 1, 1, path)

print(result)
