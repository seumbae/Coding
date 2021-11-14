#include<iostream>
#include<cstring>

using namespace std;

int main(){
    int n;
    cin >> n;
    char *elem = new char[80];

    for(int i=0; i<n; i++){
        cin >> elem;
        int ans=0, cnt=0;
        for(int j=0; j<strlen(elem); j++){
            if(*(elem+i) == 'O')
                cnt++;
            else if(*(elem+i) == 'X')
                cnt=0;
            ans +=cnt;
        }
    cout << ans << "\n";
    }
    delete[] elem;
}
