#include<iostream>

using namespace std;
struct dial{
    string alpa;
    int dial_num;
};

int main(){
    dial *st = new dial[8];

    for(int i=0;i<8;i++){
        (st+i) -> dial_num = i+2;
        switch(i){
            case 0:
                (st+i) -> alpa = "ABC";
                break;
            case 1:
                (st+i) -> alpa = "DEF";
                break;
            case 2:
                (st+i) -> alpa = "GHI";
                break;
            case 3:
                (st+i) -> alpa = "JKL";
                break;
            case 4:
                (st+i) -> alpa = "MNO";
                break;
            case 5:
                (st+i) -> alpa = "PQRS";
                break;
            case 6:
                (st+i) -> alpa = "TUV";
                break;
            case 7:
                (st+i) -> alpa = "WXYZ";
                break;
        }
    }

    string str;
    cin >> str;
    
    int cnt=0;

    for(int i=0;i<str.length();i++){
        int j=0;
        while(true){
            if((st+j)->alpa.find(str[i]) != string::npos){
                cnt += (st+j) -> dial_num +1;
                break;
            }
            else
                j++;
        }
    }
    cout << cnt;

}