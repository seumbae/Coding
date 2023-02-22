#include<iostream>

using namespace std;

typedef struct _node{
    int data;
    struct _node* next;
    struct _node* prev;
}Node;

typedef struct _list{
    int size;
    struct _node* front;
    struct _node* back;
}List;

void init(List* deque){
    deque -> size = 0;
    deque -> front = NULL;
    deque -> back = NULL;
}
Node* getNode(int val){
    Node* newNode = new Node;
    
    newNode -> data = val;
    newNode -> next = NULL;
    newNode -> prev = NULL;
    return newNode;
}

int size(List* deque){
    return deque -> size;
}
int empty(List* deque){
    return size(deque) ? 0 : 1;
}

void push_front(List* deque, int val){
    Node* node = getNode(val);

    if(empty(deque)){
        deque -> front = node;
        deque -> back = node;
        deque -> size++;
    }
    else{
        deque -> front -> prev = node;
        node -> next  = deque -> front;
        deque -> front = node;
        deque -> size++;
    }
}

void push_back(List* deque, int val){
    Node* node = getNode(val);

    if(empty(deque)){
        deque -> front = node;
        deque -> back = node;
        deque -> size++;
    }
    else{
        deque -> back -> next = node;
        node -> prev = deque -> back;
        deque -> back = node;
        deque -> size++;
    }
}

int pop_front(List* deque){
    if(empty(deque))
        return -1;
    else{
        int data = deque -> front -> data;
        if(deque -> back == deque -> front){
            delete deque -> front;
        }
        else{
            deque -> front = deque -> front -> next;
            delete deque -> front -> prev;
        }
        deque -> size--;
        return data;
    }
}
int pop_back(List* deque){
    if(empty(deque))
        return -1;
    else{
        int data = deque -> back -> data;
        if(deque -> back == deque -> front){
            delete deque -> back;
        }
        else{
            deque -> back = deque -> back -> prev;
            delete deque -> back -> next;
        }
        deque -> size--;
        return data;
    }
}

int front(List* deque){
    if(empty(deque))
        return -1;
    else{
        return deque -> front -> data;
    }
}

int back(List* deque){
    if(empty(deque))
        return -1;
    else{
        return deque -> back -> data;
    }
}
int main(){
    int testcase, data;
    cin >> testcase;

    List* deque = new List;
    init(deque);

    string cmd;
    while(testcase--){
        cin >> cmd;
        if(cmd == "push_front"){cin >> data; push_front(deque, data);}
        else if(cmd =="push_back"){cin >> data; push_back(deque,data);}
        else if(cmd == "pop_front"){cout << pop_front(deque) << "\n";}
        else if(cmd == "pop_back"){cout << pop_back(deque) << "\n";}
        else if(cmd == "size"){cout << size(deque) << "\n";}
        else if(cmd == "empty"){cout << empty(deque) << "\n";}
        else if(cmd == "front"){cout << front(deque) << "\n";}
        else if(cmd == "back"){cout << back(deque) << "\n";}
    }
}