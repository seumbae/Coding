#include<iostream>

using namespace std;

void solve(int x, int y, int w, int h){
    int distance_x = x > w-x ? w-x : x;
    int distance_y = y > h-y ? h-y : y;
    int ans = min(distance_y, distance_x);

    cout << ans;
}

int main(){
    int x, y, w, h;
    cin >> x >> y >> w >> h;

    solve(x, y, w, h);
}