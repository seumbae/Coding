#include<iostream>
#include<stack>
#include<string>

using namespace std;

int main(){
    ios::sync_with_stdio(0);
	cin.tie(0);
    string str;

    while(true){
        getline(cin, str);
        if(str[0] == '.') break;
        
        stack<char> st;
        int len = str.length()-1; //.제거

        for(int i=0; i<len; i++){ 
            if(str[i] == '(' || str[i] == '['){
                st.push(str[i]);
            }
            else if(str[i] == ')'){
                if(st.empty() || st.top() == '['){
                    st.push(str[i]);
                    break;
                }
                st.pop();
            }
            else if(str[i] == ']'){
                if(st.empty() || st.top() == '('){
                    st.push(str[i]);
                    break;
                }
                st.pop();
            }
        }
        if(st.size() == 0) cout << "yes\n";
        else cout << "no\n";
    }
}