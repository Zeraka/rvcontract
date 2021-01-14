#!/usr/bin/python3
'''

'''
import sys

a = sys.stdin.readline() 

b = a[2:-1] 
d = 0
k = 0
mp = {'A':10,'B':'11','C':12,'D':13,'E':14,'F':15}
for c in b[::-1]:
    if c.isdigit() == 1:
        d = d + int(c)*(16**k) 
        k = k+1
    else:
        d = d + int(mp[c])*(16**k)
        k = k+1
print(d)