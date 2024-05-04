n = int(input())

a, b = map(int, input().split())

m = int(input())

d = dict()

for _ in range(0, m):
    x, y = map(int, input().split())

    if x in d:
        d[x].append(y)
    else:
        d[x] = [y]

    if y in d:
        d[y].append(x)
    else:
        d[y] = [x]

answer = -1

visited = [False] * (n + 1)
visited[a] = True

queue = [(a, 0)]

while queue:
    x, cnt = queue.pop(0)

    if x == b:
        answer = cnt
        break
    
    if x in d:
        for child in d[x]:
            if visited[child] == False:
                visited[child] = True
                queue.append((child, cnt + 1))

print(answer)
