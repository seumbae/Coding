#include<iostream>

using namespace std;

int main(){
    int test;
    cin >> test;

    for(int i=0;i<test;i++){
        int row, col;
        cin >> row >> col;
        
        int *arr = new int[col];

        for(int j=0;j<col;j++)
            arr[j] = j+1;

        for(int j=0;j<row;j++){
            for(int j=1; j<col; j++){
                arr[j] += arr[j-1];
            }
        }
        cout << arr[col-1] << endl;
        delete[] arr;
        
    }
}