#include <string>
#include <vector>
#include <map>

using namespace std;

vector<int> solution(vector<string> name, vector<int> yearning, vector<vector<string>> photo) {
    map<string, int> m;
    
    for(int i=0; i<name.size(); i++){
        m[name[i]] = yearning[i];
    }
    
    vector<int> ans;
    
    for(int i=0; i<photo.size(); i++){
        int sum = 0;
        for(auto n : photo[i]){
            sum += m[n];
        }
        ans.push_back(sum);
    }
        
    return ans;
}