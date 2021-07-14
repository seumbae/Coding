#include <iostream>
#include <algorithm>

using namespace std;

int main(){
    int len;

    cin >> len;

    // dynamic allocation
    int *arr = new int[len]; 

    for(int i=0;i < len;i++)
        cin >> arr[i];

    int small=arr[0], large=arr[0];
    for(int i=1; i < len; i++){
        small = min(small,arr[i]);
        large = max(large,arr[i]);
    }

    cout << small << " " << large;

    // dynamic allocation delete
    delete[] arr;
    
}