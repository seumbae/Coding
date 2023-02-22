#include<iostream>

using namespace std;

int main(){
    int alphabet[26];
    fill_n(alphabet,26,-1);
    string str;

    getline(cin,str);

    for(int i=0;i<str.length();i++){
        if(alphabet[str[i] - 'a'] == -1)
            alphabet[str[i] - 'a'] = i;
    }
    for(int i : alphabet)
        cout << i << " ";
}