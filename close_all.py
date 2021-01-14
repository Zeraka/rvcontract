#!/usr/bin/python3

import subprocess

def deleteproc(processName):
    return 'ps -ef | grep '+processName+' | grep -v grep | cut -c 9-15 | xargs kill -s 9'

if __name__ == "__main__":
    subprocess.Popen(deleteproc('ganache-cli'), shell=True)
    subprocess.Popen(deleteproc('mongod'),shell=True)