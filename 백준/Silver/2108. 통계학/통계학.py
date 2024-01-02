import sys

n = int(sys.stdin.readline())

num_sum = 0
num_list = []
num_freq = {}

max_freq = 0
max_num = []

for i in range(n):
    num = int(sys.stdin.readline())
    num_sum += num
    num_list.append(num)
    if num in num_freq:
        num_freq[num] += 1
    else:
        num_freq[num] = 1

for (num, freq) in num_freq.items():
    if max_freq <= freq:
        if max_freq < freq:
            max_num = []
        max_freq = freq
        max_num.append(num)

median = sorted(num_list)[n//2]

num_max = max(num_list)
num_min = min(num_list)

print(round(num_sum/n))
print(median)
if len(max_num) > 1:
    print(sorted(max_num)[1])
else:
    print(max_num[0])
print(num_max - num_min)
