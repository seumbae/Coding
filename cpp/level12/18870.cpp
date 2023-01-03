#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main(){
    int n, x;
    cin >> n;

    vector<int> v;
    vector<int> idx;
    for(int i=0; i<n; i++){
        cin >> x;
        v.push_back(x);
        idx.push_back(x);
    }
    sort(v.begin(), v.end());
    v.erase(unique(v.begin(), v.end()), v.end()); //중복제거

    for(auto a : idx){
        cout << lower_bound(v.begin(), v.end(), a) - v.begin() << " ";
    }

}