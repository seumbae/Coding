#include<iostream>
#include<algorithm>

using namespace std;

int constructor(int n){
    int ans = n;
    while(n){
        ans += n%10;
        n /= 10;
    }
    return ans;
}

int main(){
    int n, sum;
    cin >> n;

    for(int i=1 ;i<=n;i++){
        sum = constructor(i);
        if(sum == n){
            cout << i;
            return 0;
        }
    }
    cout << "0";
}