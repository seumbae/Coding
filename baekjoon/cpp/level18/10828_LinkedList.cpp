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
}List; 

Node* getNode(int num){
    Node* temp = new Node;

    temp -> data = num;
    temp -> next = NULL;
    return temp;
}
void empty(List* plist){
    if(plist -> size == 0){
        cout << "1\n";
    }else
        cout << "0\n";
}
void push(List* plist, int num){
    Node *temp = getNode(num);

    if(plist -> head == NULL){
        plist -> head = temp;
        plist -> tail = temp;
    }else{
        plist -> tail -> next = temp;
        plist -> tail = temp;
    }
    (plist -> size)++;    
}

void pop(List* plist){
    struct _node* temp = plist -> head;

    if(plist -> size == 0){
        cout << "-1\n";
    }
    else{
        while(temp -> next != plist -> tail && temp != plist -> tail){
            temp = temp -> next;
        }
        cout << plist -> tail -> data << "\n";
        delete plist -> tail;
        plist -> tail = temp;
        (plist -> size)--;
    }
}
void size(List* plist){
    cout << plist -> size << "\n";
}
void top(List* plist){
    if(plist -> size == 0){
        cout << "-1\n";
    }else{
        cout << plist -> tail -> data << "\n";
    }
}

int main(){
    int n;
    
    List* list = new List;

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
            empty(list);
        }
        else if(command == "top"){
            top(list);
        }
    }
}
