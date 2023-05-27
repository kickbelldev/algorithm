d = dict()
l = []

n, m = map(int, input().split())
for _ in range(n):
    name = input()
    d[name] = True
    
for _ in range(m):
    name = input()
    if name in d:
        l.append(name)
l.sort()
print(len(l))
for item in l:
    print(item)