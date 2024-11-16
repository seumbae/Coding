/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10871                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10871                          #+#        #+#      #+#    */
/*   Solved: 2024/11/16 17:01:44 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<string>
using namespace std;

int main(){
    int n, x, a;
    cin >> n >> x;

    string res = "";
    for(int i=0; i< n; i++){
        cin >> a;
        if(a < x) res += to_string(a) + " ";
    }

    cout << res;
    return 0;
}