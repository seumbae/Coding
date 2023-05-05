#include <string>
#include <vector>
#include <algorithm>
#include <map>

using namespace std;

vector<string> solution(vector<string> players, vector<string> callings) {
    map<string, int> m;
    
    for(int i=0; i<players.size(); i++){
        m[players[i]] = i;
    }
    
    for(auto name : callings){
        int prev = m[name]-1, pos = m[name];
        
        m[players[prev]] = pos;
        m[players[pos]] = prev;
        swap(players[prev], players[pos]);
    }
    
    return players;
}