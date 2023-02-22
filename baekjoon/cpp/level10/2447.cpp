#include<iostream>

using namespace std;

void star(int row, int col){
    if(row%3 == 1 && col%3 == 1)
        cout << " ";
    else if (row >= 3 || col >= 3)
        star(row/3, col/3);
    else
        cout << "*";
    //star(row-1, col-1);
}

int main(){
    int n;
    cin >> n;

    for(int i=0; i<n; i++){
        for(int j=0; j<n; j++)
            star(i,j);
        cout << "\n";
    }
    // 00 01 02
    // 10 11 12
    // 20 21 22
}