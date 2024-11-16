/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10818                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10818                          #+#        #+#      #+#    */
/*   Solved: 2024/11/16 17:09:57 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<algorithm>
#include<climits>
using namespace std;

int main(){
    int n;
    cin >> n;
    
    int arr[n];
    /* //sort 468ms
    for(int i=0; i<n; i++){
        cin >> arr[i];
    }
    sort(arr, arr+n);
    cout << arr[0] << " " << arr[n-1]; */

    /* // max, min 416ms
    for(int i=0; i<n; i++){
        cin >> arr[i];
    }
    cout << *min_element(arr, arr+n) << " " << *max_element(arr, arr+n); */

    //404ms
    int _max = INT_MIN, _min = INT_MAX;
    for(int i=0; i<n; i++){
        cin >> arr[i];
        _max = max(_max, arr[i]);
        _min = min(_min, arr[i]);
    }
    cout << _min << " " << _max; 
    return 0;
}