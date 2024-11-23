/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10988                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10988                          #+#        #+#      #+#    */
/*   Solved: 2024/11/23 20:59:26 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>

using namespace std;

int main(){
    string str; cin >> str;

    int res = 1;
    for(int i=0; i<str.size()/2; i++){
        if(str[i] != str[str.size()-1-i]) res = 0;
    }
    cout << res;
}