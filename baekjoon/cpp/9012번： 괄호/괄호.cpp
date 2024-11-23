/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9012                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9012                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 16:20:31 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<stack>

using namespace std;

int main(){
    int n; cin >> n;
    string ps;

    for(int i=0; i<n; i++){
        cin >> ps;
        stack<char> st;
        string vps = "YES";
        for(int j=0; j<ps.size(); j++){
            if(ps[j] == '(') st.push('(');
            else{
                if(st.empty()){
                    vps = "NO";
                    break;
                }
                else st.pop();
            }
        }
        if(st.size() > 0) vps = "NO";
        cout << vps << "\n";
    }
}