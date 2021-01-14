#!/usr/bin/python3
'''
python 如何遍历多行字符串,同时在safewt后面插入一行 xxxxyyyy,
怎么办到？
先将字符串按照'\n'分割，生成数组，然后遍历数组，找到符合要求的行，在该行后面添加一行。
这里的问题是数组中的字符串顺序是倒序的，需要从尾部向前面遍历。

python倒序遍历有以下几种方法：

for line in reversed(a): #reversed(a)是生成了a的迭代器， 需要遍历，或者再将 b= reversed(a) 变为list, list(b)
通用方法：
    for i in range(len(a)-1,-1,-1): #range(start, stop[, step]), 例如[4,-1),
第三种： for i in a[::-1]

a.reverse() #直接把列表a本身倒序
'''

str = "asfdb;\nwesfpjoing;\nwbfliqwbefpwqufn\nasfdwe\nsafewt\nqwern\nvar\ntgwtg\n\nftwg\n"

lines = str.split('\n')
lines.reverse()
newstr = ''
for line in lines:
    #print(line)
    if "safewt" in line:
        line = line + '\n' + "xxxxyyyy"
    newstr = line +'\n' + newstr #倒序的
print(newstr)

lines = str.split('\n')