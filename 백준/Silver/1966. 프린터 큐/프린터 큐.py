for i in range(int(input())):
    n, m = map(int, input().split())
    p_list = list(map(int, input().split()))
    for i in range(n):
        p_list[i] = {
            "index": i,
            "priority": p_list[i]
        }
    
    cnt = 0
    while True:
        current = p_list.pop(0)
        flag = False
        for item in p_list:
            if current['priority'] < item['priority']:
                flag = True
                break
                
        if flag:
            p_list.append(current)
        else:
            cnt += 1
            if current['index']== m:
                print(cnt)
                break
