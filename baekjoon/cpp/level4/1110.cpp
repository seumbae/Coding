#include<iostream>

using namespace std;

int main(){
    int n, first, second, ans, cnt=0;

    cin >> n;
    ans = n;
    while (true)
    {
        first = n / 10;
        second = n % 10;
        n = second*10 + (first + second)%10;
        cnt++;
        if (ans == n){
            cout << cnt << endl;
            break;
        }
    }
}