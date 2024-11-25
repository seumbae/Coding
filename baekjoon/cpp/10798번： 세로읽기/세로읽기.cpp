/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10798                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10798                          #+#        #+#      #+#    */
/*   Solved: 2024/11/25 23:23:43 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<vector>

using namespace std;

int main(){
    vector<string> str(5);
    int _max = 0;
    for(auto& st : str) {
        cin >> st;

        if(st.size() > _max) _max = st.size();
    }

    string res = "";
    for(int i=0; i<_max; i++){
        for(int j=0; j<5; j++){
            if(str[j].size() < i+1) continue;
            else res += str[j][i];
        }
    }
    cout << res;
}