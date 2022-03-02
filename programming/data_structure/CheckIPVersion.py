# pattern = re.compile(r'\w{3,4}')
# print(pattern)
import re
import string


def check_ip_v4(ipv4: str) -> str:
	ipnums = ipv4.split('.')

	for num in ipnums:
		if len(num) == 0 or len(num) > 3:
			return 'Neither'

		if (len(num) != 1 and num[0] == '0') or \
				not num.isdigit() or int(num) > 255:
			return 'Neither'

	return 'IPv4'


def check_ip_v6(ipv6: str) -> str:
	ipnums = ipv6.split(":")

	for num in ipnums:
		if len(num) == 0 or len(num) > 4 or \
				not all(c in string.hexdigits for c in num):
			return 'Neither'

	return 'IPv6'


def validIPAddress(IP: str) -> str:
	if IP.count('.') == 3:
		return check_ip_v4(IP)
	elif IP.count(":") == 7:
		return check_ip_v6(IP)

	return 'Neither'

def validIPAddress2(IP: str) -> str:
	IPv4 = '(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])'

	ipv4 = \
		re.compile(r'^({p}\.){{3}}{p}$'.format(p=IPv4))

	if ipv4.match(IP):
		return "IPV4"

	IPv6 = '([0-9a-f]{1,4})'

	ipv6 = \
		re.compile(r'^({p}\:){{7}}{p}$'.format(p=IPv6),
				   re.IGNORECASE)

	if ipv6.match(IP):
		return "IPV6"

	return "Neither"

