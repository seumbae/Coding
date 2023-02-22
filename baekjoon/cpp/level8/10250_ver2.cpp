#include<iostream>


using namespace std;

int main(){
    int test;
    int height, width, th;

    cin >> test;

    for(int i=0;i<test;i++){
        cin >> height >> width >> th;

        int row=th, col=1;

        while(true){
            if(height == th)
                break;
            row -= height;
            if(row <0 || row == 0){
                row += height;
                break;
            }
            col++;
        }

        int ans = row * 100 + col;

        cout << ans << endl;
    }
}