/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 25206                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: seumbae <boj.kr/u/seumbae>                  +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/25206                          #+#        #+#      #+#    */
/*   Solved: 2024/11/25 23:48:53 by seumbae       ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
#include<iostream>
#include<vector>
#include<sstream>
#include<string>
#include<map>

using namespace std;
vector<string> split(string str, char delim){
    string token;
    stringstream ss(str);
    vector<string> res;

    while(getline(ss, token, delim)){
        res.push_back(token);
    }
    return res;
}

double getScore(string str){
    if(str == "A+") return 4.5;
    if(str == "A0") return 4.0;
    if(str == "B+") return 3.5;
    if(str == "B0") return 3.0;
    if(str == "C+") return 2.5;
    if(str == "C0") return 2.0;
    if(str == "D+") return 1.5;
    if(str == "D0") return 1.0;
    if(str == "F")  return 0.0;
}

int main(){
    double sum = 0, total = 0;
    map<string, double> score = {
        {"A+", 4.5},
        {"A0", 4.0},
        {"B+", 3.5},
        {"B0", 3.0},
        {"C+", 2.5},
        {"C0", 2.0},
        {"D+", 1.5},
        {"D0", 1.0},
        {"F", 0.0}
    };
    for(int i=0; i<20; i++){
        string str; getline(cin, str, '\n');
        vector<string> v = split(str, ' ');

        if(v[2] == "P") continue;
        total += stod(v[1]);
        sum += stod(v[1]) * score[v[2]];
    }
    cout << sum / total;
}