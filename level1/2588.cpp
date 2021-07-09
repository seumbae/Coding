#include<iostream>

using namespace std;

int calc(int remainder, int to){
    for(int i =0 ;i < to; i++)
        remainder *= 10;
    return remainder;
}
int main(){
    int a, b, remainder,ans=0;

    cin >> a >> b;

    for(int i=0; b; i++){
        remainder = b%10;
        ans += a*calc(remainder, i);
        cout << a * remainder << endl;
        b /= 10;
    }
    cout << ans;
}