#include<iostream>
#include<cmath>

using namespace std;

int main(){
    int n;
    cin >> n;

    int* arr = new int[n+1];
    int* dp = new int[n+1];
    arr[0] = 0;
    dp[0] = 0;

    for(int i=1; i<=n; i++){
        cin >> *(arr+i);
    }
    dp[1] = arr[1];
    if(n>1){
        dp[2] = arr[1] + arr[2];
        for(int i=3; i<=n; i++){
            dp[i] = max(dp[i-2], dp[i-3] + arr[i-1]) + arr[i];
        }
    }
    cout << dp[n];   
}