/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10811                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10811                          #+#        #+#      #+#    */
/*   Solved: 2024/11/17 16:54:59 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<algorithm>
#include<vector>

using namespace std;

int main(){
    int n, m;
    cin >> n >> m;

    vector<int> v;
    for(int i=0; i<n; i++){
        v.push_back(i+1);    
    }

    int i, j;
    for(int k=0; k<m; k++){
        cin >> i >> j;
        reverse(v.begin()+i-1, v.begin()+j);
    }

    for(auto a : v){
        cout << a << " ";
    }
}
