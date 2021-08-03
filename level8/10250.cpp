#include<iostream>
#include<cmath>

using namespace std;

int main(){
    int test;
    int height, width, th;

    cin >> test;

    for(int i=0;i<test;i++){
        cin >> height >> width >> th;

        int row = th % height;
        if(row == 0)
            row = height;
        int col = ceil(double(th)/double(height));

        int ans = row * 100 + col;

        cout << ans << endl;
    }
}