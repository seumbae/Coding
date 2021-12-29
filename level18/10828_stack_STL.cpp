#include<iostream>
#include<stack>

using namespace std;

int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    int n;
    stack<int> st;

    cin >> n;

    string cmd;
    int num;
    for(int i=0; i<n; i++){
        cin >> cmd;
        if(cmd == "push"){
            cin >> num;
            st.push(num);
        }else if(cmd == "top"){
            if(!st.empty()){
                cout << st.top() << "\n";
            }else{
                cout << "-1\n";
            }
        }else if(cmd == "empty"){
            cout << st.empty() << "\n";
        }else if(cmd == "pop"){
            if(!st.empty()){
                cout << st.top() << "\n";
                st.pop();
            }
            else
                cout << "-1\n";

        }else if(cmd == "size"){
            cout << st.size() << "\n";
        }
    }
}