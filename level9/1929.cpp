#include<iostream>
#include<cmath>
using namespace std;

int main(){
    int m, n;
    cin >> m >> n;
    int arr[n+1];
    
    for(int i=0; i<n+1; i++){
        if(i == 0 || i== 1){
            *(arr+i) = 0;
            continue;
        }
        *(arr+i) = i;
    }

    for(int i=2; i<=sqrt(n+1); i++){
        if(*(arr+i) == 0)   continue;
        for(int j=2*i; j<n+1; j+=i){
            arr[j] = 0;
        }
    }
    
    for(int i=m; i<n+1; i++){
        if(*(arr+i))
            cout << *(arr+i) << '\n';
    }
}

