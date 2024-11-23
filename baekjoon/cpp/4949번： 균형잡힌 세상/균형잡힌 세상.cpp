/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 4949                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/4949                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 23:19:24 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<stack>

using namespace std;

int main(){

    while(true){
        string str;
        getline(cin, str);
        if(str == ".") break;

        stack<char> st;
        bool flag = true;
        for(int i=0; i< str.size(); i++){
            if(str[i] == '(' || str[i] == '['){
                st.push(str[i]);
            }
            else if(str[i] == ']'){
                if(!st.empty() && st.top() == '['){
                    st.pop();
                }
                else{
                    flag = false;
                    break;
                }
            }
            else if(str[i] == ')'){
                if(!st.empty() && st.top() == '('){
                    st.pop();
                }
                else{
                    flag = false;
                    break;
                }
            }
        }
        if(st.empty() && flag) cout << "yes" << "\n";
        else cout << "no" << "\n";
    }
}