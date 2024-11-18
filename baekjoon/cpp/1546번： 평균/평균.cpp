/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1546                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1546                           #+#        #+#      #+#    */
/*   Solved: 2024/11/17 17:19:01 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<algorithm>
#include<vector>

using namespace std;

int main(){
    int  n, a;
    cin >> n;

    vector<int> score;
    for(int i=0; i<n; i++){
        cin >> a; score.push_back(a);
    }

    double _max = (double)*max_element(score.begin(), score.end());
    double avg = 0;

    for(int i=0; i<n; i++){
        avg += score[i] / _max * 100 /n;
    }
    cout << avg;
}