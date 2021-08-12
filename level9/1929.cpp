#include<iostream>
#include<vector>

using namespace std;

void solve(int m, int n){
    vector<int> v;

    for(int i=m; i<=n; i++)
        v.push_back(i);
    
    for(int i=2; i<n; i++){
        for(int j=0; j<v.size(); j++){
            if(v[j] == 0 || v[j] == i)
                continue;
            if((v[j]%i) == 0)
                v[j] = 0;
        }
    }

    for(auto a:v){
        if(a)   cout << a << endl;
    }
    
}

int main(){
    int a, b;
    cin >> a >> b;

    solve(a, b);
}

