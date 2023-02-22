#include<iostream>
#include<vector>
#include<tuple>
#include<algorithm>

using namespace std;

bool compare(tuple<int, string, int> p1, tuple<int, string, int> p2){
    if(get<0>(p1) == get<0>(p2))
        return get<2>(p1) < get<2>(p2);
    return get<0>(p1) < get<0>(p2);
}

int main(){
    int n;
    cin >> n;
    
    vector<tuple<int, string, int>> v;

    for(int i=0; i<n; i++){
        int age;
        string name;
        cin >> age >> name;
        v.push_back(make_tuple(age, name, i));
    }
    sort(v.begin(), v.end(), compare);
    /*
    vector<pair<int, string>>으로 구현해서 sort를 이용하면
    int 값이 같을 경우 어떤 값이 앞에 올지 모른다.
    이러한 경우 stable_sort를 사용하면 int값이 같더라도
    더 빠른 index의 int값이 무조건 앞으로 오게 된다. 오호
    */
    for(auto a : v)
        cout << get<0>(a) << " " << get<1>(a) << "\n";
        
} 