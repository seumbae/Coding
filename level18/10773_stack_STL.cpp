#include<iostream>
#include<stack>

using namespace std;

int main(){
    int n, num, ans=0;
    cin >> n;

    stack<int> st;

    for(int i=0; i<n; i++){
        cin >> num;
        if(num){
            st.push(num);
            ans += num;
        }
        else{
            ans -= st.top();
            st.pop();
        }
    }    
    cout << ans;
}