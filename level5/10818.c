#include<stdio.h>
#include<stdlib.h>

int main(){
    int n;

    scanf("%d",&n);
    int *arr = malloc(n * sizeof(int));
    
    for(int i=0 ;i<n; i++)
        scanf("%d", arr+i);

    int min = *arr, max = *arr;

    for(int i=1; i<n; i++){
        min = min > *(arr+i) ? *(arr+i) : min;
        max = max > *(arr+i) ? max : *(arr+i);
    }
    printf("%d %d",min,max);

    free(arr);
}