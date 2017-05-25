# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?



require 'prime'
number = 600851475143

p number.prime_division.sort_by{|a,b| a<=>b}.max[0]
