#include<iostream>

using namespace std;

int main(){
    int n, sum=0;
    (cin >> n).get();
    char* arr = new char[n];
    
    cin.getline(arr, n+1);

    while(*arr)
        sum += *(arr++) - '0';
    
    cout << sum;
}