#include<iostream>

using namespace std;

int* sorted;

//MergeSort O(N*logN)
void merge(int* arr, int start, int middle, int end){
    int i = start;
    int j = middle + 1;
    int k = start;

    //작은 순서대로 배열에 삽입
    while(i<= middle && j<=end){
        if(arr[i] <= arr[j]){
            sorted[k] = arr[i];
            i++;
        }else{
            sorted[k] = arr[j];
            j++;
        }
        k++;
    }
    //남은 데이터 삽입
    if(i > middle){
        for(;j<=end;j++){
            sorted[k] = arr[j];
            k++;
        }
    }else{
        for(;i<=middle; i++){
            sorted[k] = arr[i];
            k++;
        }
    }
    for(int t=start; t<=end; t++){
        arr[t] = sorted[t];
    }
}
void mergeSort(int* arr, int start, int end){
    //크기가 1보다 큰 경우
    if(start < end){
        int middle = (start + end)/2;
        mergeSort(arr, start, middle);
        mergeSort(arr, middle+1, end);
        merge(arr, start, middle, end);
    }
}

int main(){
    int n;
    cin >> n;
    int* arr = new int[n];
    sorted = new int[n];

    for(int i=0; i<n; i++)
        cin >> *(arr+i);
    
    mergeSort(arr, 0, n-1);
    
    for(int i=0; i<n; i++)
        cout << *(arr+i) << "\n";
}