#include<iostream>
#include<cmath>

using namespace std;

void solve(int num){
// n < x, x<=2n
    int *arr = new int[num*2+1];

    for(int i=0;i<num*2+1; i++)
        *(arr+i) = i;
    
    for(int i=2; i<num*2+1; i++){
        if(*(arr+i) == 0) continue;
        for(int j=i*2; j<num*2+1; j+=i)
            *(arr+j) = 0;
    }
    int cnt=0;
    for(int i=num+1; i<num*2+1; i++){
        if(*(arr+i)) cnt++;
    }
    cout << cnt << '\n';

}


int main(){
    int n;
    
    while(true){
        cin >> n;
        if(!n)  break;
        solve(n);
    }
}