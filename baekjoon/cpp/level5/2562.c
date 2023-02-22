#include<stdio.h>

int main(){
    int arr[9];

    for(int i=0; i<9; i++)
        scanf("%d",arr+i);
    
    int max = *arr, idx=0;

    for(int i=1; i<9; i++){
        if(max < *(arr+i)){
            max = *(arr+i);
            idx = i;
        }
    }

    printf("%d\n%d",max,idx+1);
}