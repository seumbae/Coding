#include<iostream>

using namespace std;

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

int main(){
    int n;
    cin >> n;
    int* arr = new int[n];

    for(int i=0; i<n; i++)
        cin >> *(arr+i);
    quickSort(arr, 0, n-1);
    
    
    for(int i=0; i<n; i++)
        cout << *(arr+i) << "\n";
}