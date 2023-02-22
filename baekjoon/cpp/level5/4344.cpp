#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int test;
    cin >> test;

    for(int i=0; i<test; i++){
        int stNum;
        double avg = 0;
        cin >> stNum;
        
        int *st = new int[stNum];
        for(int j=0; j<stNum; j++){
            cin >> *(st + j);
            avg += *(st+j);
        }
        avg /= stNum;
        double ans =0;
        for(int j=0; j<stNum; j++){
            if(*(st+j) > avg)
                ans++;
        }
        ans = ans/stNum*100;
        cout << fixed;
        cout.precision(3);
        cout << ans << "%\n"; 
    }
}