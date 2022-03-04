"""
월 : 계절 이름
12, 1, 2 : winter
  3, 4, 5 : spring
  6, 7, 8 : summer
  9, 10, 11 : fall

예시

if n//3==1 :
  print("spring")
"""

month = int(input("Enter one month : "))


def find_season(month):
	if month // 3 == 1:
		return "spring"
	elif month // 3 == 2:
		return "summer"
	elif month // 3 == 3:
		return "fall"
	else:
		return "winter"

print(find_season(month))