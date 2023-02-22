#include<iostream>

using namespace std;
bool is_prime(int);

int main(){
    int n, x, count=0;
    cin >> n;

    for(int i=0; i<n; i++){
        cin >> x;
        if(is_prime(x))
            count++;
    }
    cout << count;
}

bool is_prime(int num){
    if(num == 1)
        return false;
    for(int i=2; i<num; i++){
        if(num%i == 0)
            return false;
    }
    return true;
}