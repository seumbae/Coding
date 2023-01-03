#include<iostream>

using namespace std;

int main(){
    int bag, sum;
    cin >> bag;

    int x = bag / 5; //max of x
    int y = bag / 3; //max of y
    int cnt = x+y;
    int ans_x=0, ans_y=0;

    for(int i=x;i>=0;i--){
        for(int j=y;j>=0;j--){
            sum = (i*5 + j*3);
            if(sum == bag){
                if(i+j <= cnt){
                    ans_x = i;
                    ans_y = j;
                }
            }
        }
    }

    if(ans_x == 0 && ans_y == 0)
        cout << "-1";
    else
        cout << (ans_x + ans_y);
}
