#include <iostream>

using namespace std;

int main(){
    int h, m; // 0 <= h <= 23, 0 <= m <= 59

    cin >> h >> m ;

    if(m >= 45)
        cout << h << " " << m-45;
    else
        cout << (h+23)%24 << " " << (m+15)%60;
    
}