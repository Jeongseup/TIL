def isPalindrome(s: str) -> bool:
	# 앞쪽 포인터
	i = 0
	# 뒷쪽 포인터
	j = len(s) - 1

	s = s.lower()

	while i < j:
		# 영어나 숫자가 아니면 포인터 뒤로 이동
		while i < j:
			if s[i].isalnum():
				break
			i += 1

		# 영어나 숫자가 아니라면 뒷쪽 포인터 앞으로 이동
		while i < j:
			if s[j].isalnum():
				break
			j -= 1

		# 두 포인터 값이 다르면 바로 False
		if s[i] != s[j]:
			return False

		i += 1
		j -= 1

	# 다 통과했으면 True
	return True


def isPalindrome2(s: str) -> bool:
	# tempString = [ chr for chr in s if ch.isalnum()]
	tempString = list(filter(str.isalnum, s))
	s = "".join(tempString).lower()

	return s == s[::-1]

# print(list(filter(str.isalnum, 'hello world')))