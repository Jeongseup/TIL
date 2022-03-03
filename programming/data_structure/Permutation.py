def find_permutation(s):
	# base case
	if len(s) == 1:
		# print(list(s), s)
		return list(s)

	ans = []
	curr = s[0]
	s = s[1:]

	words = find_permutation(s)

	for sub in words:
		for i in range(len(sub) + 1):
			ans.append("".join([sub[:i], curr, sub[i:]]))

	return ans

s = "abc"
# res = find_permutation(s)
# print(res)

res = []
def find_permutation2(chs, s, e):
	if s == e -1:
		res.append("".join(chs))
	else:
		for i in range(s, e):
			chs[s], chs[i] = chs[i], chs[s]
			find_permutation2(chs, s + 1, e)
			# backtrack..?
			chs[s], chs[i] = chs[i], chs[s]

s = "abc"

find_permutation2(list(s), 0, len(s))
print(res)