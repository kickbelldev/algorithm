while True:
    s = input()

    if s == '.':
        break

    stack = []
    flag = True

    for i in s:
        if i == '(' or i == '[':
              stack.append(i)
        elif i == ')':
            if not stack or stack[-1] != '(':
                flag = False
                break
            else:
                stack.pop()
        elif i == ']':
            if not stack or stack[-1] != '[':
                flag = False
                break
            else:
                stack.pop()
    if flag and not stack:
        print('yes')
    else:
        print('no')
