/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1152                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1152                           #+#        #+#      #+#    */
/*   Solved: 2024/11/17 19:02:31 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<sstream>
#include<vector>
#include<algorithm>

using namespace std;

vector<string> split(string str, char delim){
    vector<string> result;
    stringstream ss(str);
    string token;

    while(getline(ss, token, delim)){
        result.push_back(token);
    }
    return result;
}

int main(){
    string str; getline(cin, str);
    vector<string> v;

    if(str[0] == ' '){
        str = str.substr(1, str.size());
    }
    if(str[str.size()-1] == ' ') str = str.substr(0, str.size()-1);

    v = split(str, ' ');

    cout << v.size();
}