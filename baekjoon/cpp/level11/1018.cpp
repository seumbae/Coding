#include<iostream>
using namespace std;

char const BLACK = 'B';
char const WHITE = 'W';

int main(){
    int min=0,cnt=0;
    int row, col;
    bool flag = true;

    cin >> row >> col;
    char** chess = new char*[row];
    for(int i=0; i<row; i++){
        chess[i] = new char[col];
    }
    
    for(int i=0; i<row; i++){
        for(int j=0; j<col; j++){
            cin >> chess[i][j];
        }
    }

    //BW
    for(int i=0; i<row-7; i++){
        for(int j=0; j<col-7; j++){
            for(int k=i; k<i+8; k++){
                for(int w=j; w<j+8; w++){
                    if((k+w)%2 == 0 && chess[k][w] != BLACK){
                        cnt++;
                    }else if((k+w)%2 == 1 && chess[k][w] != WHITE){
                        cnt++;
                    }
                }
            }
            if(flag){
                min = cnt;
                flag = false;
            }else{
               min = min > cnt ? cnt : min; 
            }
            cnt = 0;
        }
    }

    //WB
    for(int i=0; i<row-7; i++){
        for(int j=0; j<col-7; j++){
            for(int k=i; k<i+8; k++){
                for(int w=j; w<j+8; w++){
                    if((k+w)%2 == 0 && chess[k][w] != WHITE){
                        cnt++;
                    }else if((k+w)%2 == 1 && chess[k][w] != BLACK){
                        cnt++;
                    }
                }
            }
            min = min > cnt ? cnt : min; 
            cnt = 0;
        }
    }
    cout << min;
}