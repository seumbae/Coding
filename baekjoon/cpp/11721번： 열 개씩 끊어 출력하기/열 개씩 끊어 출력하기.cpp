/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11721                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11721                          #+#        #+#      #+#    */
/*   Solved: 2024/11/25 23:21:11 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>

using namespace std;

int main(){
    string str; cin >> str;

    for(int i=0; i<=str.size()/10; i++){
        cout << str.substr(i*10, 10) << "\n";
    }
}