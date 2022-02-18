#include<iostream>
#include<cmath>

using namespace std;

int main(){
    int home;
    cin >> home;

    int dp[1001][3];

    int i;
    for(i=0; i<home; i++){
        cin >> dp[i][0] >> dp[i][1] >> dp[i][2];
        if(i != 0){
            dp[i][0] += min(dp[i-1][1], dp[i-1][2]);
            dp[i][1] += min(dp[i-1][0], dp[i-1][2]);
            dp[i][2] += min(dp[i-1][0], dp[i-1][1]);
        }
    }

    cout << min(min(dp[i-1][0], dp[i-1][1]),dp[i-1][2]);
}