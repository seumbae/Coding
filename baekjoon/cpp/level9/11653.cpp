#include<iostream>

using namespace std;

void solve(int num){
    int div=2;

    while(num>1){
        if(num%div == 0){
            cout << div << endl;
            num /= div;
        }
        else
            div++;
    }
}

int main(){
    int n;
    cin >> n;
    
    solve(n);
}

