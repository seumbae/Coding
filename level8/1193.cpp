#include<iostream>

using namespace std;

int main(){ 
    int location;

    cin >> location;

    int layer=1;

    while(true){
        if(location <= layer*(layer+1)/2){
            int ans = (location - (layer*(layer-1)/2));
            if(layer%2 == 0){
                cout << ans << "/" << layer-ans+1;
                break;
            }
            else{
                cout << layer-ans+1 << "/" << ans;
                break;
            }
        }
        layer++;
    }
}