n = int(input())
arr = map(int, input().split())
v = int(input())
result = 0

for item in arr:
    if item == v:
        result += 1

print(result)