#include<iostream>
#include<algorithm>
#include<stack>

using namespace std;

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    stack<pair<int,int>> stk;
    int range, data;
    cin >> range;
    
    int* arr = new int[range];
    fill_n(arr,range,-1);

    for(int i=0; i<range; i++){
        cin >> data;
        while(!stk.empty() && stk.top().first < data){
            arr[stk.top().second] = data;
            stk.pop();
        }
        stk.push({data,i});
    }
    for(int i=0; i<range; i++){
        cout << arr[i] << " ";
    }
}