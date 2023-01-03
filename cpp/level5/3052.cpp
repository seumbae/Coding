#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int n;
    bool *elem = new bool[42];
    fill(elem, elem+42, false);

    for(int i=0; i<10; i++){
        cin >> n;
        elem[n%42] = true;
    }
    int ans = count(elem, elem+42, true);
    cout << ans;
}