/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11720                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11720                          #+#        #+#      #+#    */
/*   Solved: 2024/11/17 17:50:34 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<vector>

using namespace std;

int main(){
    int n; cin >>n;
    string str; cin >> str;
    
    int res = 0;
    
    /* for(int i=0; i<n; i++){
        res += str[i] - '0';
    }
    cout << res; */

    for(char ch : str){
        res += ch - '0';
    }
    cout << res;

}