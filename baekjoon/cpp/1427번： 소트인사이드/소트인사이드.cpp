/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1427                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1427                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 20:41:51 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<string>
#include<vector>
#include<algorithm>
#include<sstream>
#include<iterator>

using namespace std;

int main(){
    int n; cin >> n;
    string str = to_string(n);

    vector<char> v(str.begin(), str.end());

    sort(v.begin(), v.end(), greater<char>());

    ostringstream oss;
    copy(v.begin(), v.end(), ostream_iterator<char>(oss, ""));
    cout << oss.str();
}