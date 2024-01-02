import sys
input = sys.stdin.readline

N, M = map(int, input().split())

li = []
m = {}

for i in range(N):
    pokemon = input().replace('\n', '')
    li.append(pokemon)
    m[pokemon] = i

for _ in range(M):
    i = input().replace('\n', '')

    if i.isnumeric():
        print(li[int(i) - 1])
    else:
        print(m[i] + 1)
