/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9086                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9086                           #+#        #+#      #+#    */
/*   Solved: 2024/11/17 17:43:28 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>

using namespace std;

int main(){
    int n; cin >> n;
    
    string str;
    for(int i=0; i<n; i++){
        cin >> str;
        cout << str[0] << str[str.size()-1] << "\n";
    }
}