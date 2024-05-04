n = int(input())

a, b = map(int, input().split())

m = int(input())

d = dict()
reverse = dict()

for _ in range(0, m):
    x, y = map(int, input().split())

    if x in d:
        d[x].append(y)
    else:
        d[x] = [y]

    if y in reverse:
        pass
    else:
        reverse[y] = x


answer = -1

visited = [False] * (n + 1)

visited[a] = True

def dfs(x, cnt):
    global answer

    if x == b:
        answer = cnt
        return


    if x in reverse:
        if visited[reverse[x]] == False:
            visited[reverse[x]] = True
            dfs(reverse[x], cnt + 1)
            visited[reverse[x]] = False
    if x in d:
        for child in d[x]:
            if visited[child] == False:
                visited[child] = True
                dfs(child, cnt + 1)
                visited[child] = False
    
dfs(a, 0)

print(answer)