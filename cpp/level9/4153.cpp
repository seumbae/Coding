#include<iostream>
#include<algorithm>

using namespace std;

void solve(int *arr){
    sort(arr, arr+3);

    if((arr[0]*arr[0] + arr[1]*arr[1]) == arr[2]*arr[2])
        cout << "right\n";
    else
        cout << "wrong\n"; 
}

int main(){
    int *arr = new int[3];

    while(true){
        for(int i=0;i<3;i++)
            cin >> arr[i];
        if(!(*arr) && !(*(arr+1)) && !(*(arr+2)))
            break;
        solve(arr);
    }    
    delete[] arr;
}

