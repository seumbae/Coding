#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int n;
    cin >> n;
    int* arr = new int[n+1];

    for(int i=1; i<n+1; i++)
        cin >> arr[i];

    sort(arr+1, arr+(n+1));

    int ans = 0;
    for(int i=1; i<n+1; i++){
        for(int j=1; j<=i; j++)
            ans += arr[j];
    }

    cout << ans;
}