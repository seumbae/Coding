#include<iostream>
#include<sstream>

using namespace std;

int reverse(int a){
    int remainder, rev=0;
    while(a){
        remainder = a%10;
        rev = rev*10 + remainder;
        a/=10;
    }
    return rev;
}

int main(){
    string str;
    int num[2];

    getline(cin,str);
    int previous=0, current,idx=0;
    current = str.find(' ');

    while(current != string::npos){
        string substring = str.substr(previous, current-previous);
        num[idx++] = stoi(substring, nullptr);
        previous = current+1;
        current = str.find(' ', previous);
    }
    num[idx] = stoi(str.substr(previous, current-previous));

    num[0] = reverse(num[0]);
    num[1] = reverse(num[1]);
    
    cout << (num[0] > num[1] ? num[0] : num[1]) << endl;

}