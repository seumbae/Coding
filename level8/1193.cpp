#include<iostream>

using namespace std;

int main(){
    int location, num=1;

    cin >> location;
    int** arr = new int*[location];

    for(int i=0;i<location;i++){
        arr[i] = new int[location];
    }

    for(int i=0;i<location;i++){
        for(int j=0;j<=i;j++){
            arr[i][j] = num++;
        }
    }

    for(int i=0;i<location;i++){
        for(int j=0;j<=i;j++){
            cout << arr[i][j];
        }
        cout << endl;
    }

}