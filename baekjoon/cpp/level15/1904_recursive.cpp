#include<iostream>

using namespace std;

int dp[1000001] = {1,2,};
int solve(int num){
    if(dp[num-1])
        return dp[num-1];
    dp[num-1] = (solve(num-1) + solve(num-2)) % 15746;
    return dp[num-1];
}
int main(){
    int n;
    cin >> n;

    cout << solve(n);
} 