def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

A, B = map(int, input().split())

A, B = max(A, B), min(A, B)

cd = gcd(A, B)

print(cd)
print(int(A * B / cd))