n, m = map(int, input().split())

arr = [a for a in range(1, n + 1)]

for _ in range(m):
    i, j = map(int, input().split())
    i -= 1
    j -= 1
    arr[i], arr[j] = arr[j], arr[i]
    
print(' '.join([str(c) for c in arr]))