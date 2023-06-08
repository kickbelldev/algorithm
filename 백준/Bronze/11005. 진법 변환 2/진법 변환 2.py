di = { 10 + i: chr(65 + i)  for i in range(26) }

num, digit = map(int, input().split())

result = ""

i = 0
while num > 0:
    place = digit * pow(digit, i)
    remain = num % place
    num //= place

    if remain > 9:
        result += di[remain]
    else:
        result += str(remain)

print(result[::-1])