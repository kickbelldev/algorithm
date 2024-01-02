n = int(input())

find = False
for num in range(1, n + 1):
    str_num = str(num)

    candidate = num
    for digit in str_num:
        candidate += int(digit)

    if candidate == n:
        print(num)
        find = True
        break
if not find:
    print(0)