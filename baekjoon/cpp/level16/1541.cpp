#include<iostream>
#include<string>

using namespace std;

int main(){
    string equation;
    cin >> equation;

    bool flag = 1;
    int ans = 0;
    for(int i=0; i<equation.length(); i++){
        string num;
        while(i<equation.length() && equation[i] != '-' && equation[i] != '+'){
            num += equation[i++];
        }
        
        if(flag)
            ans += stoi(num);
        else
            ans -= stoi(num);
        
        
        if(flag && equation[i] == '-')
            flag = 0;
    }
    cout << ans;

        
}