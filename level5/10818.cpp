#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int n;
    cin >> n;

    int *arr = new int[n];
    for(int i=0; i<n; i++)
        cin >> *(arr+i);

    int maxElem = *max_element(arr, arr+n);
    int minElem = *min_element(arr, arr+n);

    cout << minElem << " " << maxElem << endl;

    delete[] arr;
}