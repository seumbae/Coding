/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2562                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2562                           #+#        #+#      #+#    */
/*   Solved: 2024/11/16 17:36:21 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>

using namespace std;

int main(){
    int a;
    int idx, res = 0;
    
    for(int i=0; i<9; i++){
        cin >> a;
        if(a > res){
            res = a;
            idx = i+1;
        }
    }
    cout << res << "\n" << idx;
    return 0;
}