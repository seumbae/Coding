/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2941                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2941                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 17:15:43 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<string>

using namespace std;

int main(){
    string str; cin >> str;
    string alpha[8] = {"dz=","c=", "c-", "d-", "lj", "nj", "s=", "z="};
    
    for(string a : alpha){
        while(true){
            int idx = str.find(a);
            if(idx == string::npos) break;

            str = str.substr(0, idx) + "*" + str.substr(idx+a.size());
        }
    }
    cout << str.size();
}