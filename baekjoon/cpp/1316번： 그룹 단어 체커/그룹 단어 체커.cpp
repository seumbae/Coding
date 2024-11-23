/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1316                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1316                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 16:31:53 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>

using namespace std;

int main(){
    int n; cin >> n;
    string str;
    int res = 0;
    while(n--){
        cin >> str;
        bool checker = true;
        
        int alpha[26] = {0,};
        for(int i=0; i<str.size()-1; i++){
            if(alpha[str[i] - 'a']) continue;
            
            int idx = i;
            bool flag = true;
            for(int j=i+1; j<str.size(); j++){
                if(str[j] == str[i]){
                    if(j - idx == 1) idx = j;
                    else {
                        flag = false;
                        break;
                    }
                }
            }
            alpha[str[i] - 'a'] = 1;
            if(!flag) {
                checker = false;
                break;
            }
        }
        if(checker) res++;
    }
    cout<< res;
}