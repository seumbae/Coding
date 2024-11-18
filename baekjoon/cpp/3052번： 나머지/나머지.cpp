/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 3052                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/3052                           #+#        #+#      #+#    */
/*   Solved: 2024/11/17 16:43:06 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<set>

using namespace std;

int main(){
    set<int> s;

    int a;
    for(int i=0; i<10; i++){
        cin >> a;
        s.insert(a % 42);
    }
    cout << s.size();
}