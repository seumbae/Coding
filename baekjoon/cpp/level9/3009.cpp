#include<iostream>

using namespace std;

void solve(int (*pos)[2],int row){
    int* ans = new int[2];

    for(int i=0; i<2; i++){
        if(pos[0][i] == pos[1][i])
            ans[i] = pos[2][i];
        else if(pos[0][i] == pos[2][i])
            ans[i] = pos[1][i];
        else if(pos[1][i] == pos[2][i])
            ans[i] = pos[0][i];
    }
    cout << ans[0] << " " << ans[1];
    delete[] ans;
}

int main(){
    int pos[3][2];
    
    for(int i=0;i<3;i++){
        for(int j=0;j<2;j++)
            cin >> pos[i][j];
    }
    solve(pos, 3);
}