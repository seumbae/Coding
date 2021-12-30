#include<iostream>

using namespace std;

typedef struct _node{
    int data;
    struct _node* next;
    struct _node* before;
}Node;

typedef struct _list{
    int sum=0;
    struct _node* head = NULL;
    struct _node* tail = NULL;
}List;

void push(List* plist, int num){
    Node* newNode = new Node;
    newNode -> data = num;
    newNode -> next = NULL;
    newNode -> before = NULL;

    if(plist -> head == NULL){
        plist -> head = newNode;
        plist -> tail = newNode;
        plist -> sum += num;
    }
    else{
        plist -> tail -> next = newNode;
        newNode -> before = plist -> tail;
        plist -> tail = newNode;
        plist -> sum += num;
    }
}

void pop(List* plist){    
    if(plist -> sum == 0){
        return;
    }
    else{
        plist -> sum -= plist -> tail -> data;
        if(plist -> tail -> before == NULL){
            delete plist -> tail;    
        }
        else{
            plist -> tail = plist -> tail -> before;
            delete plist -> tail -> next;
        }        
    }
}
int main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    int n, num;
    cin >> n;

    List* list = new List;

    for(int i=0; i<n; i++){
        cin >> num;
        if(num){
            push(list, num);
        }
        else
            pop(list);
    }
    cout << list -> sum << "\n";
}