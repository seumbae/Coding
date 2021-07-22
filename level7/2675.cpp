#include<iostream>

using namespace std;

int main(){
    int t, r;
    cin >> t;

    for(int i=0;i<t;i++){
        cin >> r;
        string str, newStr;
        cin >> str;
        for(int j=0;j < r*str.length();j++)
            newStr += str[j/r];
        cout << newStr << endl;
    }
}