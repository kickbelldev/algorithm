di = { chr(65 + i): 10 + i for i in range(26) }

num, digit = input().split()
num_list = list(num)
digit = int(digit)

l = len(num_list)

result = 0

for i in reversed(range(l)):
    if num_list[l - i - 1] in di:
        result += di[num_list[l - i - 1]] * pow(digit, i)
    else:
        result += int(num_list[l - i - 1]) * pow(digit, i)

print(result)