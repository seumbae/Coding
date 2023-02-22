#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

bool comp(pair<int,int> a, pair<int,int> b){ 
    if(a.second == b.second){ 
        return a.first < b.first;
    }else{ 
        return a.second < b.second; 
    } 
}
int main(){
    int n;
    cin >> n;
    
    int start, end;
    vector<pair<int,int>> v;

    for(int i=0; i<n; i++){
        cin >> start >> end;
        v.push_back({start,end});
    }
    sort(v.begin(), v.end(), comp);

    int ans = 1;
    end = v[0].second;
    for(int i=1; i<n; i++){
        if(v[i].first >= end){
            ans++;
            end = v[i].second;
        }
    }
    cout << ans;
}