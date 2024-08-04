import sys

input = sys.stdin.readline

n, m = map(int, input().split())

board = [[] for _ in range(n)]
visit = [False for _ in range(n)]

for _ in range(m):
    u, v = map(int, input().split())
    u -= 1
    v -= 1
    board[u].append(v)
    board[v].append(u)


ans = 0


def bfs(a):
    queue = [a]

    while queue:
        pos = queue.pop(0)

        for node in board[pos]:
            if not visit[node]:
                visit[node] = True
                queue.append(node)


for i in range(n):
    if not visit[i]:
        bfs(i)
        ans += 1

print(ans)
