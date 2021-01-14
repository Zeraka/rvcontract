'''

'''
import re
file_name = str("testdemo.sol")
new_file_name = str("newtestdemo.sol")
pattern = r"\\n"
regexstr = re.compile(pattern)
newstr = ""
with open(file_name, "r+") as f:
    #with open(new_file_name, "a") as p:
    for line in f:
        #print(line)
        # 所有的\\n 替换为 \n
        newstr = regexstr.sub("\n", line)
        
    f.close()

with open(new_file_name, "a") as p:
    p.write(newstr)
    p.close()
print(newstr)
            
