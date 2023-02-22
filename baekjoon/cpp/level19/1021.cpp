#include<iostream>
#include<deque>
#include<queue>

using namespace std;

int main(){
    int dequeSize, m;
    cin >> dequeSize >> m;

    queue<int> que;
    for(int i=0; i<m; i++){
        int data;
        cin >> data;
        que.push(data);
    }

    deque<int> deque1, deque2;
    for(int i=1; i<=dequeSize; i++)
        deque1.push_back(i);
    deque2 = deque1;
    
    int ans=0;
    for(int i=0; i<m; i++){
        int cnt1=0, cnt2=0; 
        while(true){
            if(que.front() == deque1.front()){
                deque1.pop_front();
                break;
            }
            deque1.push_back(deque1.front());
            deque1.pop_front();
            cnt1++;
        }
        
        while(true){
            if(que.front() == deque2.front()){
                deque2.pop_front();
                break;
            }
            deque2.push_front(deque2.back());
            deque2.pop_back();
            cnt2++;
        }
        que.pop();
        ans += (cnt1 > cnt2 ? cnt2: cnt1);
    }
    cout << ans;

    
    
}