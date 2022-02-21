import arithmetic_module 
import statistics_module

print(arithmetic_module.sum(1,2))
print(statistics_module.sum(1,2))

from statistics_module import sum as ssum
print(ssum(2,3))