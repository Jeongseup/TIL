from collections import defaultdict
from typing import List


def groupAnagrams(strs: List[str]) -> List[List[str]]:
	hashmap = defaultdict(list)

	for string in strs:
		hashmap["".join(sorted(string))].append(string)

	return hashmap.values()


def groupAnagrams2(strs: List[str]) -> List[List[str]]:
	hashmap = defaultdict(list)

	for s in strs:
		count = [0] * 26

		for chr in s:
			# list 배열을 tuple로 처리하면 키값으로 사용할 수 있어진다.
			count[ord(chr) - ord('a')] += 1

		hashmap[tuple(count)].append(s)

	return hashmap.values()

sts = ['abc','bca','cba','bc']
print(groupAnagrams(sts))
print(groupAnagrams2(sts))

