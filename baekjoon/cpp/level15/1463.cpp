#include<iostream>
#include<cmath>

using namespace std;

int dp[1000001] = {0,};

int solve(int n){
    if(n == 1)
        return 0;
    if(dp[n])
        return dp[n];
    dp[n] = solve(n-1) + 1;
    if(n%3 == 0)
        dp[n] = min(dp[n],solve(n/3) + 1);
    if(n%2 == 0)
        dp[n] = min(dp[n],solve(n/2) + 1);
    
    return dp[n];
}
int main(){
    int n;
    cin >> n;

    cout << solve(n);
}