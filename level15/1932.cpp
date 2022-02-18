#include<iostream>
#include<algorithm>

using namespace std;

int calc(int num){
    if(num == 1)
        return 1;
    return num + calc(num-1);
}
int main(){
    int dp[501][501];
    int height;
    cin >> height;

    for(int i=0; i<height; i++){
        for(int j=0; j<=i; j++){
            cin >> dp[i][j];
            if(i){
                if(j == 0){
                    dp[i][0] += dp[i-1][0];
                }
                else if(j == i){
                    dp[i][j] += dp[i-1][j-1];
                }
                else{
                    dp[i][j] += max(dp[i-1][j-1], dp[i-1][j]);
                }
            }
        }
    }
    cout << *max_element(dp[height-1], dp[height-1]+height);
}