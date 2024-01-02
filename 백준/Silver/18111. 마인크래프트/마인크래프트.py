n, m, b = map(int, input().split())

height_dict = {}

for _ in range(n):
    for height in map(int, input().split()):
        if height in height_dict:
            height_dict[height] += 1
        else:
            height_dict[height] = 1

height_dict = sorted(height_dict.items(), key=lambda x: x[0])

min_time = 500000000
min_height = 0

for height in range(height_dict[0][0], height_dict[-1][0] + 1):
    time = 0
    inventory = b
    for h, cnt in height_dict:
        if h > height:
            time += 2 * (h - height) * cnt
            inventory += (h - height) * cnt
        elif h < height:
            time += (height - h) * cnt
            inventory -= (height - h) * cnt
    if inventory < 0:
        continue
    if time <= min_time:
        min_time = time
        min_height = height

print(min_time, min_height)
