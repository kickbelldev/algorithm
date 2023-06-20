N, K = map(int, input().split())

li = [False] * (N + 1)

li[0] = True

answer = []

i = 0
for _ in range(N):
    k = 0
    while k != K:
        i += 1
        if i > N:
            i = li.index(False)
        if not li[i]:
            k += 1
    li[i] = True
    answer.append(i)

print(f"<{', '.join(map(str, answer))}>")
