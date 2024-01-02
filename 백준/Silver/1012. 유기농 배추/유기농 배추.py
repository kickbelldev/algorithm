import sys
input = sys.stdin.readline

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

t = int(input())

for _ in range(t):
    m, n, k = map(int, input().split())

    graph = [[0] * m for _ in range(n)]

    for _ in range(k):
        x, y = map(int, input().split())
        graph[y][x] = 1


    def bfs(x, y):
        queue = [(x, y)]
        graph[y][x] = 0

        while queue:
            x, y = queue.pop(0)

            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]

                if 0 <= nx < m and 0 <= ny < n and graph[ny][nx] == 1:
                    queue.append((nx, ny))
                    graph[ny][nx] = 0

    result = 0

    for i in range(n):
        for j in range(m):
            if graph[i][j] == 1:
                bfs(j, i)
                result += 1

    print(result)
