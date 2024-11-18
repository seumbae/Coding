/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10809                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10809                          #+#        #+#      #+#    */
/*   Solved: 2024/11/17 18:44:22 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main(){
    //26개
    string str; cin >> str;
    vector<int> v(26); fill(v.begin(), v.end(), -1);

    char ch = 'a';

    for(int i=0; i<26; i++){
        int idx = str.find(ch);
        if(idx != string::npos){
            v[ch-'a'] = idx;
        }
        ch++;
    }
    for(auto a : v){
        cout << a << " ";
    }
}