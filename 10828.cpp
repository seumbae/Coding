#include<iostream>

using namespace std;

typedef struct _node{
    int data;
    struct _node *next;
}Node;

typedef struct linkedList{
    int size=0;

    struct _node* head = NULL;
    struct _node* tail = NULL;
    struct _node* cur = NULL;
}List; 

Node* getNode(){
    Node* temp = new Node;
    temp -> next = NULL;
    return temp;
}

void push(List* plist, int num){
    Node *temp = getNode();
    temp -> data = num;

    
}

void pop(List* plist){

}
int size(List* plist){
    return plist -> size;
}
int empty(List* plist){
    return 0;
}
void top(List* plist){

}

int main(){
    int n;
    
    List* list;

    cin >> n;
    
    for(int i=0; i<n; i++){
        string command;
        cin >> command;
        
        if(command == "push"){
            int num;
            cin >> num;
            push(list, num);
        }
        else if(command == "pop"){
            pop(list);
        }
        else if(command == "size"){
            size(list);
        }
        else if(command == "empty"){
            cout << empty(list);
        }
        else if(command == "top"){
            top(list);
        }
    }
}
