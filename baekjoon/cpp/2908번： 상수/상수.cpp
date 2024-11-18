/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2908                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2908                           #+#        #+#      #+#    */
/*   Solved: 2024/11/18 22:29:52 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

int main(){
    int a, b; cin >> a >> b;   
    
    string _a = to_string(a);
    reverse(_a.begin(), _a.end());
    string _b = to_string(b);
    reverse(_b.begin(), _b.end());

    cout << max(stoi(_a), stoi(_b));
}