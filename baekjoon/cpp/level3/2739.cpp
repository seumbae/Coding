#include <iostream>

using namespace std;

int main(){
    int n;

    cin >> n;

    for(int idx = 1; idx < 10; idx++){
        cout << n << " * " << idx << " = " << n*idx << endl;
    }
}
