#include<iostream>

using namespace std;

const int mod = 1000000000;

int main(){
    int dp[100][10] = {0,};
    int n;
    cin >> n;

    for(int i=1; i<=9; i++){
        dp[0][i] = 1;
    }
    for(int i=1; i<n; i++){
        for(int j=0; j<=9; j++){
            if(j==0)
                dp[i][j] = dp[i-1][j+1] % mod;
            if(j>0 && j<9)
                dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1]) % mod;
            if(j==9)
                dp[i][j] = dp[i-1][j-1] % mod;
        }
    }
    int ans = 0;
    for(int i=0; i<=9; i++){
        ans =  (ans + dp[n-1][i]) % mod;
    }
    cout << ans;
}
