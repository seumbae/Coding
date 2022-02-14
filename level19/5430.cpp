#include<iostream>
#include<cctype>
#include<deque>
#include<algorithm>

using namespace std;

int main(){
   int testCase, n;
   string func, arr;
   deque<int> que;

   cin >> testCase;
    while(testCase--){
        cin >> func >> n >> arr;

        string str="";
        for(auto c : arr){
            if(c >= '0' && c<='9'){
                str += c;
            }else if(c == ',' || c == ']'){
                if(!str.empty()){
                    que.push_back(stoi(str));
                    str.clear();
                }
            }
        }
        
        int rCnt=0, funcLen = func.length();
        bool flag = false;
        for(int i=0; i<funcLen; i++){
            if(func[i] == 'R'){
                rCnt++;
            }
            else if(func[i] == 'D'){
                if(rCnt%2 == 1){
                    if(que.empty()){
                        flag = true;
                        break;
                    }
                    que.pop_back();
                }
                else{
                    if(que.empty()){
                        flag = true;
                        break;
                    }
                    que.pop_front();
                }
            }
        } 

        if(!que.empty()){       
            if(rCnt%2 == 1)
                reverse(que.begin(), que.end());
            cout << "[";
            cout<< que.front();
            que.pop_front();
            for(auto a : que){
                cout << "," << que.front();
                que.pop_front();
            }
            cout << "]\n";
        }else if(flag){
            cout << "error\n";
        }
        else{
            cout << "[]\n";
        }
    }
}


