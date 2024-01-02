import sys
input = sys.stdin.readline

N, M = map(int, input().split())

graph = [[] for _ in range(N+1)]

min_kevin = 100000000
min_kevin_node = 0

for _ in range(M):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

for i in range(1, N + 1):
    graph[i].sort()

    kevin = [0] * (N + 1)
    visited = [False] * (N + 1)
    queue = [i]
    visited[i] = True

    while queue:
        current = queue.pop(0)

        for node in graph[current]:
            if not visited[node]:
                queue.append(node)
                visited[node] = True
                kevin[node] = kevin[current] + 1
    if min_kevin > sum(kevin):
        min_kevin = sum(kevin)
        min_kevin_node = i

print(min_kevin_node)
