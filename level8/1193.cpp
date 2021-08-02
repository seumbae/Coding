#include<iostream>

using namespace std;

int main(){ 
    int location;

    cin >> location;

    int layer=1;

    while(true){
        if(location <= layer*(layer+1)/2){
            int r = (location - (layer*(layer-1)/2));
            if(layer%2 == 0){
                cout << r << "/" << layer-r+1;
                break;
            }
            else{
                cout << layer-r+1 << "/" << r;
                break;
            }
        }
        layer++;
    }
}