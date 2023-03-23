arr = [False] * 31

for _ in range(28):
    n = int(input())
    arr[n] = True

for i in range(1, 31):
    if arr[i] == False:
        print(i)