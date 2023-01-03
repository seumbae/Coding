#include<iostream>

using namespace std;

int main(){
    int ans, maxNum, num=1;

    cin >>maxNum;

    for(ans=1; ans < maxNum; ans++){
        num += (ans-1)*6;
        if(maxNum <= num)
            break;
    }
    cout << ans;
}