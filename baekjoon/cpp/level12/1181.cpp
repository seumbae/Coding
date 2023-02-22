#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

bool compare(string p1, string p2){
    if(p1.length() == p2.length())
        return p1 < p2;
    return p1.length() < p2.length();
}
int main(){
    int n;
    cin >> n;

    vector<string> v;
    for(int i=0; i<n; i++){
        string str;
        cin >> str;
        if(find(v.begin(), v.end(), str) == v.end())
            v.push_back(str);
        
    }
    sort(v.begin(), v.end(), compare);

    for(auto a : v)
        cout << a << "\n";
}