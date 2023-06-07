li = [ 'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=' ]

s = input()

cnt = 0

while len(s) > 0:
    three = s[:3]
    two = s[:2]

    if three in li:
        s = s[3:]
    elif two in li:
        s = s[2:]
    else:
        s = s[1:]

    cnt += 1

print(cnt)