#include<iostream>

using namespace std;

int main(){
    int a, b;

    do{
        cin >> a >> b;
        if(a && b)
            cout << a+b << endl;
    }while(a && b);
}