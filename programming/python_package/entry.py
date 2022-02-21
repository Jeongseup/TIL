# case1

# ./number_package/statistics_module
import number_package.statistics_module 
print(number_package.statistics_module.sum(1,2))


# case2
from number_package import arithmetic_module
print(arithmetic_module.sum(1,2))


# case3
from number_package.statistics_module import sum as ssum
print(ssum(1,2))