#include<iostream>
#include<vector>

using namespace std;

int main(){
    int melon;
    cin >> melon;

    vector<pair<int,int>> vec;
    vector<pair<int,int>> tmp;
    
    int direction, length;

    for(int i=0; i<6; i++){
        cin >> direction >> length;
        vec.push_back(make_pair(direction, length));
    }
    
    int bigSquare, smallSquare;
    while(true){
        if((vec[0].first == vec[2].first) && (vec[1].first == vec[3].first))
            break;
        else{
            vec.push_back(vec[0]);
            vec.erase(vec.begin());
        }
    }
    bigSquare = vec[4].second * vec[5].second;
    smallSquare = vec[(4+3)%6].second *  vec[(4+4)%6].second;
    
    int area = bigSquare - smallSquare;
    cout << area*melon;

}