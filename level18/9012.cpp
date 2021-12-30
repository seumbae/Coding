#include<iostream>
#include<stack>

using namespace std;

int main(){
    int n;
    cin >> n;

    string str;
    for(int i=0;i<n;i++){
        bool flag = false;
        stack<char> st;
        cin >> str;
        int len = str.length();
            for(int j=0; j<len; j++){
                if(str[j] == '('){
                    st.push(str[j]);
                }
                else if(str[j] == ')'){
                    if(st.size() > 0){
                        if(st.top() == '('){
                            st.pop();
                        }
                        else{
                            break;
                        }
                    }
                    else{
                        st.push(str[j]);
                        break;
                    }
                }
            }
            if(st.size() == 0) cout << "YES\n";
            else cout << "NO\n";
    }
}