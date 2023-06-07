N = int(input())

cnt = 0

for _ in range(N):
    se = set()
    li = list(input())
    flag = True
    se.add(li[0])
    for i in range(1, len(li)):
        ch = li[i]
        be = li[i - 1]
        
        if ch != be:
            if ch in se:
                flag = False
                break
        
        se.add(ch)
    if flag:
        cnt += 1

print(cnt)