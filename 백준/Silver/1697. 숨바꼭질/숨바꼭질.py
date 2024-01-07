d = [0] * 100001

n, k = map(int, input().split())

q = [n]

while q:
    curr_location = q.pop(0)

    if curr_location == k:
        print(d[k])
        break

    for next_location in (curr_location - 1, curr_location + 1, curr_location * 2):
        if 0 <= next_location <= 100000 and d[next_location] == 0:
            d[next_location] = d[curr_location] + 1
            q.append(next_location)