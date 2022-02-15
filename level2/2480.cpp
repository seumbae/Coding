#include<iostream>

using namespace std;

int main(){
    int a, b, c;
    cin >> a >> b >> c;

    int ans=0;
    if( (a==b) && (b==c) ){ //3개가 같은경우 
        ans = 10000 + a*1000;
        cout << ans;
    }else if(a==b){ //2개가 같은경우
        ans = 1000 + a*100;
        cout << ans;
    }else if(b==c){
        ans = 1000 + b*100;
        cout << ans;
    }else if(a==c){
        ans = 1000 + a*100;
        cout << ans;
    }else{
        int temp =  a>b ? a : b;
        int max = temp > c ? temp : c ;
        cout << max*100;
    }
}