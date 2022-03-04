import math

num1, num2 = 10.0, 3.0

len = 3
print(f'{num1/num2:.{len}f}')

result = num1 / num2
print(f'올림 : {math.ceil(result)}')
print(f'내림 : {math.floor(result)}')
print(f'내림 : {math.trunc(result)}')
print(f' 반올림 : {round(result, 3)}')
# 3.333