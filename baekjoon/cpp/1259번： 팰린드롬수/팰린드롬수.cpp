/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1259                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1259                           #+#        #+#      #+#    */
/*   Solved: 2024/11/25 23:03:23 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<string>

using namespace std;

int main(){
    while(true){
        int n; cin >> n;
        if(n == 0) break;
        string str = to_string(n);

        bool flag = true;
        for(int i=0; i<str.size()/2; i++){
            if(str[i] != str[str.size()-1-i]){
                flag = false;
                break;
            }
        }
        if(flag) cout << "yes" << "\n";
        else cout << "no" << "\n";
    }
}