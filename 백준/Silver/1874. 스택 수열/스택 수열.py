import sys

n = int(sys.stdin.readline())

stack = []
trace = []

i = 1
flag = True
for _ in range(n):
    num = int(sys.stdin.readline())

    while i <= num:
        stack.append(i)
        i += 1
        trace.append("+")

    if len(stack) == 0:
        flag = False
        print("NO")
        break

    while len(stack) > 0:
        a = stack.pop()
        trace.append("-")
        if a == num:
            break

if flag:
    print("\n".join(trace))
