/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 8958                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/8958                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 16:16:29 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<vector>

using namespace std;

int main(){
    int n; cin >> n;
    string str;

    for(int i=0; i<n; i++){
        cin >> str;
        int score = 0;
        int o = 0;
        for(int j=0; j<str.size(); j++){
            if(str[j] == 'O') score += ++o;
            else o = 0;
        }
        cout << score << "\n";
    }
}