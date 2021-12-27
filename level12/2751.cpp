#include<iostream>
#include<algorithm>

using namespace std;

int* sorted;

//QuickSort Avg: O(N*logN) but, Worst: O(N^2) 
void quickSort(int* arr, int start, int end){
    if(start >= end) return; // the number of data is 1    
    int pivot = start;
    int left = start + 1;
    int right = end;

    while(left <= right){
        //pivot보다 큰 수 찾기
        while(left <= end && arr[pivot] >= arr[left]){
            left++;
        }
        //pivot보다 작은 수 찾기
        while(right > start && arr[pivot] <= arr[right]){
            right--;
        }
        if(left > right) // left의 인덱스가 right보다 클 때
            swap(arr[pivot], arr[right]);
        else
            swap(arr[left], arr[right]);
    }

    //각각 왼쪽, 오른쪽, 현재 right는 중앙에 있는 pivot을 가리키고 있음
    quickSort(arr, start, right-1);
    quickSort(arr, right+1, end);
}
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
    //quickSort(arr, 0, n-1);
    //mergeSort(arr, 0, n-1);
    sort(arr, arr+n);
    
    for(int i=0; i<n; i++)
        cout << *(arr+i) << "\n";
}