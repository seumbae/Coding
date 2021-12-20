#include<iostream>

using namespace std;

int main(){
    int humans;
    cin >> humans;
    
    int** arr = new int*[humans];
    for(int i=0; i<humans; i++){
        arr[i] = new int[3]();
    }
    for(int i=0; i<humans; i++){
        cin >> arr[i][0] >> arr[i][1];
    }

    for(int i=0 ; i<humans; i++){
        for(int j=0; j<humans; j++){
            if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]){
                arr[i][2]++;
            }
        }
    }

    for(int i=0; i<humans; i++){
        cout << arr[i][2] << " ";
    }
}