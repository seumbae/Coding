#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    string str;
    string cro[8] = {"c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="};
    cin >> str;

    int numString = str.length();

    int cnt=0;

    for(auto n : cro){
        int current = 0;
        while(true){
            if( (current = str.find(n, current)) != string::npos){
                current += n.length();
                cnt++;
            }
            else
                break;
        }
    }
    cout << numString-cnt;

}