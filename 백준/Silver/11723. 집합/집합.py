import sys
input = sys.stdin.readline

s = set()

def add(s, x):
    if x not in s:
        s.add(x)

def remove(s, x):
    if x in s:
        s.remove(x)

def check(s, x):
    if x in s:
        print(1)
    else:
        print(0)

def toggle(s, x):
    if x in s:
        s.remove(x)
    else:
        s.add(x)

def all(s):
    s.clear()
    for i in range(1, 21):
        s.add(i)

def empty(s):
    s.clear()

M = int(input())

for _ in range(M):
    command = input().split()
    operator = command[0]
    if len(command) > 1:
        operand = int(command[1])

    if operator == 'add':
        add(s, operand)
    elif operator == 'remove':
        remove(s, operand)
    elif operator == 'check':
        check(s, operand)
    elif operator == 'toggle':
        toggle(s, operand)
    elif operator == 'all':
        all(s)
    elif operator == 'empty':
        empty(s)
