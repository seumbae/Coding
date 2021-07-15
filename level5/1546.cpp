#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int len;
    cin >> len;

    double *arr = new double[len];
    double avg = 0;

    for(int i=0; i<len; i++)
        cin >> arr[i];
    
    double maxVal = *max_element(arr, arr+len);

    for(int i=0;i <len ;i++){
        arr[i] = arr[i]/maxVal * 100;
        avg += arr[i]/len;
    }

    //cout.precision(4);
    cout << avg;
    
    
}