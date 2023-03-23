hh, mm = map(int, input().split())
minutes = int(input())

time = hh * 60 + mm + minutes

if time >= 1440:
    time -= 1440

hour = time // 60
minute = time % 60

print('%d %d' % (hour, minute))