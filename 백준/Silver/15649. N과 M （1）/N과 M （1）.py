import copy

N, M = map(int, input().split())

visit = [False] * (N + 1)


def back(num, cnt, li):
    if num > N:
        return
    if cnt == M:
        print(" ".join(map(str, li)))
        return
    for i in range(1, N + 1):
        if visit[i] is False:
            visit[i] = True
            new_li = copy.deepcopy(li)
            new_li.append(i)
            back(i, cnt + 1, new_li)
            visit[i] = False


back(0, 0, [])
