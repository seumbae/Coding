#include<iostream>
#include<cstring>

using namespace std;

int main(){
    int row;

    cin >> row;
    char* str = new char[80];

    for(int i=0;i<row;i++){
        cin >> str;
        int sum=0, score=0;
        for(int j=0;j<strlen(str);j++){
            if(*(str+j) == 'O'){
                score++;
                sum += score;
            }
            else
                score = 0;
        }
        cout << sum << endl;
    }
    
}