input_hex = "B"

for i in range(1, 16):
	first = int(input_hex, 16)
	second = i

	print(f'{input_hex} * {hex(i)[2:].upper()} = {hex(first * second)[2:].upper()}')


"""
B*1=B
B*2=16
B*3=21
B*4=2C
B*5=37
B*6=42
B*7=4D
B*8=58
B*9=63
B*A=6E
B*B=79
B*C=84
B*D=8F
B*E=9A
B*F=A5
"""