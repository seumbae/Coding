#include<iostream>

using namespace std;

int main(){
    int arr[9],idx,max;

    for(int i=0;i < 9;i++)
        cin >> arr[i];
    
    max = arr[0];
    idx = 0;

    for(int i=1; i < 9; i++){
        if(arr[i] > max){
            max = arr[i];
            idx = i;
        }
    }
    cout << max << "\n" << idx+1;
}