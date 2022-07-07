#include<iostream>
#include<cmath>

using namespace std;

int main(){
    int W, H, X, Y, P;
    //Width, height, x, y, case *R=height/2
    cin >> W >> H >> X >> Y >> P;
    
    int playerX, playerY;
    double distance;
    int ans = 0;
    for(int i=0; i<P; i++){
        cin >> playerX >> playerY;
        //왼쪽 반원에 있는 경우
        if(playerX<X && playerY>Y){
            distance = sqrt(pow(playerX-X,2) +pow(playerY-(Y+H/2),2));
            if(distance <= H/2)
                ans++;
        }   
        //네모에 있는 경우
        else if(((playerX>=X && playerX<=X+W) && (playerY>=Y && playerY<=Y+H))){
            ans++;
        }
        //오른쪽 반원에 있는 경우
        else if(playerX>X+W && playerY>Y){
            distance = sqrt(pow(playerX-(X+W),2)+pow(playerY-(Y+H/2),2));
            if(distance <= H/2)
                ans++;
        }
    }
    cout << ans;

}