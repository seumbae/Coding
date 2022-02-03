#include <iostream>

using namespace std;
typedef struct _node
{
    int data;
    struct _node *next;
} Node;

typedef struct _queue
{
    int size;
    struct _node *head;
    struct _node *tail;
} Queue;

Node *getNode(int data)
{
    Node *newNode = new Node;
    newNode->data = data;
    newNode->next = NULL;

    return newNode;
}
void push(Queue *queue, int data)
{
    Node *node = getNode(data);

    if (queue->head == NULL)
    {
        queue->head = node;
        queue->tail = node;
        queue->size++;
    }
    else
    {
        queue->tail->next = node;
        queue->tail = node;
        queue->size++;
    }
}

int pop(Queue *queue)
{
    if (queue->size == 0)
        return -1;
    else
    {
        int temp = queue->head->data;
        delete queue->head;
        queue->head = queue->head->next;
        queue->size--;
        return temp;
    }
}

int size(Queue *queue)
{
    return queue->size;
}

int empty(Queue *queue)
{
    return queue->size == 0 ? 1 : 0;
}

int front(Queue *queue)
{
    if (empty(queue))
    {
        return -1;
    }
    else
    {
        return queue->head->data;
    }
}

int back(Queue *queue)
{
    if (empty(queue))
    {
        return -1;
    }
    else
    {
        return queue->tail->data;
    }
}

int main()
{
    ios::sync_with_stdio(0);
    cin.tie(0);
    int n;
    cin >> n;

    Queue *queue = new Queue;
    /* init queue */
    queue->head = NULL;
    queue->tail = NULL;
    queue->size = 0;

    for (int i = 0; i < n; i++)
    {
        string cmd;
        cin >> cmd;
        if (cmd == "push")
        {
            int data;
            cin >> data;
            push(queue, data);
        }
        else if (cmd == "pop")
        {
            cout << pop(queue) << "\n";
        }
        else if (cmd == "size")
        {
            cout << size(queue) << "\n";
        }
        else if (cmd == "empty")
        {
            cout << empty(queue) << "\n";
        }
        else if (cmd == "front")
        {
            cout << front(queue) << "\n";
        }
        else if (cmd == "back")
        {
            cout << back(queue) << "\n";
        }
    }
}