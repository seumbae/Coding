#include<iostream>
#include<vector>

using namespace std;

long sum(vector<int> &a){
    long ans=0;

    for(int i=0;i<a.size();i++){
        ans +=a[i];    
    }
    return ans;
}

int main(){
    int n,input;
    vector<int> v;

    cin >> n;

    for(int i=0;i<n;i++){
        cin >> input;
        v.push_back(input);
    }
    
    long ans = sum(v);
    cout << ans << endl;
}