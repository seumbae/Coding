#include <iostream>
#include <queue>

using namespace std;

int main()
{
    queue<int> que;
    int n, k;
    cin >> n >> k;

    for (int i = 1; i <= n; i++)
    {
        que.push(i);
    }
    cout << "<";

    while (!que.empty())
    {
        for (int i = 1; i < k; i++)
        {
            que.push(que.front());
            que.pop();
        }
        if (que.size() == 1)
        {
            cout << que.front() << ">\n";
            que.pop();
        }
        else
        {
            cout << que.front() << ", ";
            que.pop();
        }
    }
}