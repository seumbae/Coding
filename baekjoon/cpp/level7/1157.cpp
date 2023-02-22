#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int arr[26]={0};
    string str;
    cin >> str;
    
    for(int i=0;i<str.length();i++){
        if(isupper(str[i]))
            str[i] = tolower(str[i]);
    }

    for(int i=0;i<str.length();i++){
        arr[str[i]-'a']++;
    }

    int max = 0, idx;

    for(int i=0;i<26;i++){
        if(max < arr[i]){
            max = arr[i];
            idx = i;
        }
    }

    if(count(arr, arr+26, max) != 1)
        cout << "?";
    else 
        cout << char(idx+65);
}