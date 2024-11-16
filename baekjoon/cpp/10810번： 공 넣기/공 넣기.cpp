/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10810                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10810                          #+#        #+#      #+#    */
/*   Solved: 2024/11/16 17:39:38 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int n, m;
    cin >> n >> m;

    int arr[n];
    fill_n(arr, n, 0);
    
    int i, j, k;
    for(int q=0; q<m; q++){
        cin >> i >> j >> k;
        //마지막 주소는 열려있음
        fill(arr+i-1, arr+j, k);
    }

    for(int i=0; i<n; i++){
        cout << arr[i] << " ";
    }
}