#include<iostream>
#include<algorithm>
#include<vector>

using namespace std;

int compare(pair<int,int> p1, pair<int,int> p2){
    if(p1.first == p2.first)
        return p1.second < p2.second;
    return p1.first < p2.first;
}
int main(){
    int n, a, b;
    cin >> n;

    vector<pair<int,int>> v;
    
    for(int i=0; i<n; i++){
        cin >> a >> b;
        v.push_back(pair<int,int>(a,b));
        //or v.push_back(make_pair(a,b));
    }
    sort(v.begin(), v.end(), compare);

    for(auto a : v)
        cout << a.first << " " << a.second << "\n";

}