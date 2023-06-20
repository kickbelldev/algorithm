def getFactors(n):
    li = []
    for i in range(1, n):
        if n % i == 0:
            li.append(i)

    return li


while True:
    n = int(input())

    if n == -1:
        break

    li = getFactors(n)

    s = 0
    for item in li:
        s += item

    if n == s:
        print(f"{n} = {' + '.join(map(str, li))}")
    else:
        print(f"{n} is NOT perfect.")
