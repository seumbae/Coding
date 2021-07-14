#include<iostream>

using namespace std;

int main(){
    int ans, a, b, c, arr[10]={};

    cin >> a >> b >> c;
    ans = a*b*c;

    while(ans){
        arr[ans%10]++;
        ans /=10;
    }
    
    //range based for
    for(int i : arr)
        cout << i << endl;
}