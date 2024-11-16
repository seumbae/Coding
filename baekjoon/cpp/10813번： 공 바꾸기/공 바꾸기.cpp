/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10813                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10813                          #+#        #+#      #+#    */
/*   Solved: 2024/11/16 17:51:54 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int n, m;
    cin >> n >> m;

    int arr[n];
    for(int i=0; i<n; i++){
        arr[i] = i+1;
    }

    int a, b;
    for(int i=0; i<m; i++){
        cin >> a >> b;
        swap(*(arr+a-1), *(arr+b-1));
    }
    for(int i=0; i<n; i++){
        cout << arr[i] << " ";
    }
}