test = "000907-1121112  "

# 공백 문자 제거
# print(len(test.strip()), len(test))

# - 제거해서 print
result = test.strip().replace("-", "")
print(result)

