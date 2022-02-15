#include<iostream>
#include<cstring>

using namespace std;

int main(){
    int testCase;
    cin >> testCase;

    int arr[41][2] = {0,};
    arr[0][0] = 1;
    arr[1][1] = 1;

    int n;
    for(int i=0; i<testCase; i++){
        cin >> n;
        for(int j=2; j<=n; j++){
            arr[j][0] = arr[j-1][0] + arr[j-2][0];
            arr[j][1] = arr[j-1][1] + arr[j-2][1];
        }
        cout << arr[n][0] << " " << arr[n][1] << "\n";
    }
}