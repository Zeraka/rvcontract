#!/usr/bin/python3
#-*- coding:utf-8 -*-

import os
import subprocess

# 如果该目录已存在，则不创建
#a = "mkdir newdir"
#b = os.popen(a,'r',1)

#print(b)

c = ['mkdir', 'anotherdir']
d = subprocess.run(c)
print(d)