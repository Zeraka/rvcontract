import re
a = "i love love you "

newstr = a.replace("love","hate")
regex = re.compile('love')
newstr2 = regex.sub('hate', a)
print(newstr2)
