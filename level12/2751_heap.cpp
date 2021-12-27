#include<iostream>

using namespace std;

void heapSort(int* arr,int size){
    //heapify
    for(int i=1; i<size; i++){
        int child = i;
        do{
            int parent = (child - 1) / 2;
            if(arr[parent] < arr[child]){
                swap(arr[parent], arr[child]);
            }
            child = parent;
        }while(child != 0);
    }

    //크기를 줄여가며 반복적으로 힙 구성
    for(int i = size-1; i>=0 ;i--){
        //0번째 있는 값이 가장 크기때문에 가장 뒤로 보낸다 -> 오름차순
        swap(arr[0], arr[i]);
        int parent = 0;
        int child = 1;
        //heap 구성
        do{
            child = 2*parent + 1;
            //자식중에 더 큰값 찾기
            if(arr[child] < arr[child+1] && child < i-1){
                child++;
            }
            //부모보다 자식이 더 크다면 교환
            if(arr[parent] < arr[child] && child < i){
                swap(arr[parent], arr[child]);
            }
            parent = child;
        }while(child < i);
    }
}

int main(){
    int n;
    cin >> n;
    int* arr = new int[n];

    for(int i=0; i<n; i++)
        cin >> *(arr+i);
    
    heapSort(arr, n);
    
    for(int i=0; i<n; i++)
        cout << *(arr+i) << "\n";
}