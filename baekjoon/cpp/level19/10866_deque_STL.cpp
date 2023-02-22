#include<iostream>
#include<deque>

using namespace std;

int main(){
    int testcase;
    cin >> testcase;

    deque<int> dque;
    while(testcase--){
        string cmd;
        cin >> cmd;
        
        if(cmd == "push_back"){
            int data;
            cin >> data;
            dque.push_back(data);
        }
        else if(cmd == "push_front"){
            int data;
            cin >> data;
            dque.push_front(data);
        }
        else if(cmd == "pop_front"){
            if(dque.empty())
                cout << "-1\n";
            else{
                cout << dque.front() << "\n";
                dque.pop_front();
            }
        }
        else if(cmd == "pop_back"){
            if(dque.empty())
                cout << "-1\n";
            else{
                cout << dque.back() << "\n";
                dque.pop_back();
            }
        }
        else if(cmd == "size"){
            cout << dque.size() << "\n";
        }
        else if(cmd == "empty"){
            if(dque.empty())
                cout << "1\n";
            else
                cout << "0\n";
        }
        else if(cmd == "front"){
            if(dque.empty())
                cout << "-1\n";
            else
                cout << dque.front() << "\n";
        }
        else if(cmd == "back"){
            if(dque.empty())
                cout << "-1\n";
            else
                cout << dque.back() << "\n";
        }
    }
}