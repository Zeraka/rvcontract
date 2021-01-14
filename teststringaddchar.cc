#include<iostream>
#include<cstdlib>
using namespace std;

int main(){
    char a = 'a';
    string b = "123";
    int c = 1;
    char * e = "123";
    b = a+ b + char(c+'0');
    int d = stoi(e);
    cout << d;

    return 0;
}