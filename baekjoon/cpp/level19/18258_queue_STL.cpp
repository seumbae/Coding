#include <iostream>
#include <queue>

using namespace std;

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    queue<int> que;
    int n;
    cin >> n;

    for (int i = 0; i < n; i++)
    {
        string cmd;
        cin >> cmd;
        if (cmd == "push")
        {
            int data;
            cin >> data;
            que.push(data);
        }
        else if (cmd == "pop")
        {
            if (que.empty())
            {
                cout << "-1\n";
            }
            else
            {
                cout << que.front() << "\n";
                que.pop();
            }
        }
        else if (cmd == "size")
        {
            cout << que.size() << "\n";
        }
        else if (cmd == "empty")
        {
            cout << que.empty() << "\n";
        }
        else if (cmd == "front")
        {
            if (que.empty())
                cout << "-1\n";
            else
                cout << que.front() << "\n";
        }
        else if (cmd == "back")
        {
            if (que.empty())
                cout << "-1\n";
            else
                cout << que.back() << "\n";
        }
    }
}
