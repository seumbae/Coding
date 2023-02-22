#include<iostream>
#include<string>

using namespace std;

int main(){
    int n;
    cin >> n;
    int cnt = n;

    for(int i=0; i<n; i++){
        string str;
        bool flag = false;
        cin >> str;
        
        for(int j=0; j<str.length(); j++){
            if(str.length() == 1 || str.length() == 2){
                break;
            }
            if(str[j] != str[j+1]){
                for(int k = j+2; k <= str.length(); k++){
                    if(str[j] == str[k]){
                        cnt--;
                        flag = true;
                        break;
                    }
                }
            }
            if(flag)
                break;
        }
    }

    cout << cnt;
}