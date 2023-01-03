#include<iostream>
#include<sstream>

using namespace std;

int reverse(int num){
    int remainder, rev=0;

    while(num){
        remainder = num%10;
        rev = rev*10 + remainder;
        num /= 10;
    }
    return rev;
}
int main(){
    string str;
    getline(cin, str);
    istringstream subString(str);
    int idx=0, revNum[2];
    string buf[2];

    while(getline(subString, buf[idx], ' ')){
        revNum[idx] = reverse(stoi(buf[idx], nullptr));
        idx++;
    }
    
    cout << (revNum[0] > revNum[1] ? revNum[0] : revNum[1]) << endl;


}