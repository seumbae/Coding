#include<iostream>
#include<cmath>

typedef unsigned int ui;

using namespace std;

int main(){
    ui test, x, y;

    cin >> test;

    for(int i=0; i<test; i++){
        cin >> x >> y;
        ui distance = y - x;
        int count = 1, tmp = 1;
        
        while(true){
            if(distance == 1)
                break;
            tmp = ceil(sqrt(tmp)+tmp);
            count++;
            if( tmp >= distance)
                break;
        }
        cout << count << endl;
    }
    
}
