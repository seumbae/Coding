/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1541                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1541                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 22:38:47 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<string>

using namespace std;

int main(){
    string str; cin >> str;
    
    int res = 0;
    string num = "";
    bool flag = false;

    for(int i=0; i<=str.size(); i++){
        if(str[i] == '-' || str[i] == '+' || i == str.size()){
            if(flag){ // 마이너스
                res -= stoi(num);
                num ="";
            }
            else{
                res += stoi(num);
                num ="";
            }
        }
        else{
            num += str[i];
        }
        if(str[i] == '-') flag = true;
    }
    cout << res;
}