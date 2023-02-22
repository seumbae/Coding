#include<iostream>

using namespace std;

int main(){
    int *elem = new int[10];
    fill(elem, elem+10, 0);

    int a,b,c;
    cin >> a >> b >> c;
    int ans = a*b*c;
    
    while(ans){
        elem[ans%10]++;
        ans /= 10;
    }
    for(int i=0; i<10; i++)
        cout << *(elem+i) << "\n";
}