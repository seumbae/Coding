/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 5597                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/5597                           #+#        #+#      #+#    */
/*   Solved: 2024/11/17 16:28:11 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    bool arr[30]; fill_n(arr, 30, false);    
    
    int a;
    for(int i=0; i<28; i++){
        cin >> a;
        arr[a-1] = true;
    }

    for(int i=0; i<30; i++){
        if(!arr[i]) cout << i+1 << "\n";
    }
}