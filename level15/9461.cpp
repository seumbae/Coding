#include<iostream>

using namespace std;

long solve(long* dp, int idx){
    if(dp[idx])
        return dp[idx];
    
    dp[idx] = solve(dp, idx-5) + solve(dp, idx-1); 
    return dp[idx];
}
int main(){
   int testCase;
   cin >> testCase;

   for(int i=0;i<testCase; i++){
       long dp[100] = {1,1,1,2,2,};
       int n;
       cin >> n;
    
       cout << solve(dp, n-1) << "\n";
   }
}