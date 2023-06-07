C = int(input())

for _ in range(C):
    li = list(map(int, input().split()))
    N = li[0]
    scores = li[1:]
    avg = sum(scores) / N
    cnt = 0
    for score in scores:
        if score > avg:
            cnt += 1
    rate = cnt / N *100
    print(f'{rate:.3f}%')