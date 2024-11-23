/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1764                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1764                           #+#        #+#      #+#    */
/*   Solved: 2024/11/23 21:03:10 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

int main(){
    int n, m; 
    cin >> n >> m;
    vector<string> v1(n);
    vector<string> v2(m);

    for(auto& a : v1) cin >> a;
    for(auto& b : v2) cin >> b;

    //sort를 해야하네    
    sort(v1.begin(), v1.end());
    sort(v2.begin(), v2.end());
    vector<string> res(v1.size() + v2.size());

    auto iter = set_intersection(v1.begin(), v1.end(), v2.begin(), v2.end(), res.begin()); 
    res.erase(iter, res.end());
    
    cout << res.size() << "\n";
    for(string a : res){
        cout << a << "\n";
    }
}