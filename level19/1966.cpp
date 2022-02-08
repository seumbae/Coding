#include <iostream>
#include <queue>

using namespace std;

int main(){
    int testCase;
    cin >> testCase;

    for(int i=0; i<testCase; i++){
        int n, m, pri, cnt=0;
        cin >> n >> m;

        queue<pair<int,int>> que;
        priority_queue<int> pque;
        
        for(int j=0; j<n; j++){
            cin >> pri;
            que.push({j,pri});
            pque.push(pri);
        }

        while(!que.empty()){
            if(que.front().second == pque.top()){
                cnt++;
                if(que.front().first == m){
                    cout << cnt << "\n";
                    break;
                }
                que.pop();
                pque.pop();
            }else{
                que.push(que.front());
                que.pop();
            }
        }
    }

}