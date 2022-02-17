#include<iostream>

using namespace std;

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int n;
    cin >> n;

    long dp[1000001] = {1,2,};
    for(int i=2; i<n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % 15746;
    }
    cout << dp[n-1];
}