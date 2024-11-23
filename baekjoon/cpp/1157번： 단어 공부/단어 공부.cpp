/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1157                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1157                           #+#        #+#      #+#    */
/*   Solved: 2024/11/18 23:10:09 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int arr[26] = {0,};
    string str; cin >> str;

    for(int i=0; i<str.size(); i++){
        arr[tolower(str[i]) - 'a']++;
    }
    int _max = *max_element(arr, arr+26);
    int idx=0, cnt=0;
    for(int i=0; i<26; i++){
        if(_max == arr[i]) {
            cnt++;
            idx = i;
        }
    }
    if(cnt > 1) cout << '?';
    else{
        char ch = 'A' + idx;
        cout << ch;
    }
}