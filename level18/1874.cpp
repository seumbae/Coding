#include<iostream>
#include<stack>

using namespace std;

int main(){
    int n;
    cin >> n;

    int num, idx=0;
    stack<int> st;
    string op;
    for(int i=0; i<n; i++){
        cin >> num;
        if(idx < num){
            while(idx != num){
                st.push(++idx);
                op += '+';
            }
        }
        if(idx >= num){
            if(st.top() == num){
                st.pop();
                op += '-';
            }
            else{
                while(st.top() != num){
                    st.pop();
                    op += '-';
                }
            }
        }
    }
    for(auto a : op){
        cout << a << "\n";
    }
}