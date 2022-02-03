#include <iostream>
#include <queue>

using namespace std;

int main()
{
    queue<int> que;
    int n;
    cin >> n;

    for (int i = 1; i <= n; i++)
    {
        que.push(i);
    }

    while (que.size() != 1)
    {
        que.pop();
        int data = que.front();
        que.pop();
        que.push(data);
    }
    cout << que.front();
}