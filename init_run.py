#!/usr/bin/python3
#-*- coding: utf-8 -*-
import subprocess
import os


if __name__ == "__main__":
    #subprocess.run(start_ganache_cli)
    proc = subprocess.Popen('nohup ganache-cli >ganache-cli.log 2>&1 &',shell=True)

    #pid = os.system('nohup ganache-cli &>log &')
    print(proc.pid)
    proc1 = subprocess.Popen('nohup mongod >mongodb.log 2>&1 &',shell=True)
    print(proc1.pid)