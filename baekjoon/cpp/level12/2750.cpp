#include<iostream>

using namespace std;

// Bubble Sort O(N^2)
void bubbleSort(int n, int* arr){
    int* brr = arr;
    for(int i=n; i>1; i--){
        for(int j=1; j<i; j++){
            if(brr[j-1] > brr[j])
                swap(brr[j-1], brr[j]); //앞에 있는 수가 더 크면 교환
        }
    }
    for(int k=0; k<n; k++)
        cout << brr[k] << "\n";
    
}
// Insertion Sort O(N^2) (best: O(N))
void insertionSort(int n, int* arr){
    int* brr = arr;
    for(int i=1; i<n; i++){
        for(int j=i; j>0; j--){
            if(brr[j] < brr[j-1])
                swap(brr[j],brr[j-1]);
            else
                break;
        }
    }
    for(int i=0; i<n; i++)
        cout << *(brr+i) << "\n";
}

// Selection Sort O(N^2)
void selectionSort(int n, int* arr){
    int* brr = arr;
    for(int i=0; i<n; i++){
        int min_index = i;
        for(int j=i+1; j<n; j++){
            if(brr[min_index] > brr[j]){
                min_index = j;
            }
        }
        swap(brr[i],brr[min_index]);
    }
    for(int i=0; i<n; i++){
        cout << *(brr+i) << "\n";
    }
}

int main(){
    int n;
    cin >> n;
    int* arr = new int[n];
    for(int i=0; i<n; i++)
        cin >> *(arr+i);
    //selectionSort(n, arr);
    //bubbleSort(n, arr);
    insertionSort(n, arr);
}