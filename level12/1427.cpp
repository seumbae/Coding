#include<iostream>
#include<algorithm>

using namespace std;

int intLen(int num){
    int cnt = 0;
    while(num){
        num /= 10;
        cnt++;
    }
    return cnt;
}

int main(){
    int n;
    cin >> n;
    
    int length = intLen(n);
    int* arr = new int[length];

    for(int i=0; i<length; i++){
        arr[i] = n%10;
        n /= 10;
    }
    sort(arr, arr+length, greater<>());

    for(int i=0; i<length; i++)
        cout << arr[i];    
}