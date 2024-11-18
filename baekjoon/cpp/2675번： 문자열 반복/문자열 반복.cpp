/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2675                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2675                           #+#        #+#      #+#    */
/*   Solved: 2024/11/17 18:55:59 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>

using namespace std;

int main(){
    int n, r; cin >> n;
    string str;

    for(int i=0; i<n; i++){
        cin >> r >> str;
        string res = "";

        for(auto ch : str){
            for(int j=0; j<r; j++){
                res += ch;
            }
        }
        cout << res << "\n";
    }
}