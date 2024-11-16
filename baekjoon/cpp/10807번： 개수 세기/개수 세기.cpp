/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10807                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10807                          #+#        #+#      #+#    */
/*   Solved: 2024/11/16 16:54:04 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>

using namespace std;

int main(){
    int a;
    cin >> a;
    
    int arr[a];

    for(int i=0; i<a; i++){
        cin >> arr[i];
    }
    
    int b, res = 0;
    cin >> b;

    for(int i=0; i<a; i++){
        if(arr[i] == b) res++;
    }

    cout << res;
    return 0;
}