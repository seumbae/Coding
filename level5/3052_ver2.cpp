#include<iostream>

using namespace std;

int main(){
    bool arr[42] = {false};
    int num,cnt=0;

    for(int i=0; i<10; i++){
        cin >> num;
        arr[num%42] = true;
    }

    for(int i : arr){
        if(i)
            cnt++;
    }

    cout << cnt;
    
}