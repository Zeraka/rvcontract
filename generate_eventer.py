#file_name  = unicode("demo.sol","utf-8") #转码 python3中已变为str()
file_name = str("demo.sol")
new_file_name = str("newfile.sol")
with open(file_name, mode='r+') as f: #采用的模式是可读可写
    with open(new_file_name,mode='a') as n:
        for line in f: # 自动变为line字符串
            if("contract" in line):
                line = line+"\n     event(stirng str1, string str2);\n"
            # 判断line中是否有get
            if("get()" in line):
                # 在该行后面插入字符串
                line= line +"\n     emit Event(\"event\",\"kis\");\n"
            #print(line)
            #修改原来文件
            n.write(str(line)) #已追加方式将字符串写入文本保存。
        n.close()
        f.close()
    
    