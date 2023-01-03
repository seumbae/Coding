#include<iostream>
#include<string>

using namespace std;

int main(){
    int n, i=666;
    int count = 0;
    cin >> n;

    while(1){
        string num = to_string(i);
        if(num.find("666") != string::npos){
            count++;
            if(count == n){
                cout << i;
                return 0;
            }
        }
        i++;
    }
}