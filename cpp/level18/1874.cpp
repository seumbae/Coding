#include <iostream>
#include <stack>

using namespace std;

int main()
{
    int n;
    cin >> n;

    int num, idx = 0;
    stack<int> st;
    string op;
    for (int i = 0; i < n; i++){
        cin >> num;
        if (idx < num){
            while (idx != num){
                st.push(++idx);
                op += '+';
            }
            st.pop();
            op += '-';
        }
        else if (idx > num){
            if(st.empty()){
                cout << "NO\n";
                exit(0);
            }
            
            do{
                st.pop();
                op += '-';
            }while(!st.empty() && st.top() >= num);
        }
    }
    for (auto a : op){
        cout << a << "\n";
    }
}