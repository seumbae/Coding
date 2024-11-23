/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1181                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1181                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 20:30:40 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<set>
#include<vector>
#include<algorithm>

using namespace std;

bool comp(string a, string b){
    if(a.size() == b.size()) return a < b;
    else return a.size() < b.size();
}

int main(){
    int n; cin >> n;
    set<string> s;

    while(n--){
        string str;
        cin >> str;
        s.insert(str);
    }

    vector<string> v(s.begin(), s.end());
    sort(v.begin(), v.end(), comp);

    for(auto a : v){
        cout << a << "\n";
    }
}