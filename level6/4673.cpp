#include<iostream>
using namespace std;

int selfNumber(int num){
    int ans = num;
    
    while(num){
        ans += num%10;
        num /= 10;
    }
    return ans;

}

int main(){
    bool arr[10001] = {false};
    
    for(int i=1;i<10001;i++){
        if(selfNumber(i) <= 10000)
            arr[selfNumber(i)] = true; 
    }
    for(int i=1;i<10001;i++){
        if(!arr[i])
            cout << i << endl;
    }
}