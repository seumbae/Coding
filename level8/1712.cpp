#include<iostream>
#include<cstdio>
using namespace std;

int main(){
    int fixed, variable, sold;
    int brpoint = -1;
    
    cin >> fixed >> variable >> sold;
    //fixed + variable*x <sold*x
    int ret = sold - variable;
    
    if(ret != 0 && ret > 0)
        brpoint = (fixed / ret) + 1;

    cout << brpoint;
}