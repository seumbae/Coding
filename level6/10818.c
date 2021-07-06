#include <stdio.h>

int main(){
    int n,low,high;

    scanf("%d",&n);

    int arr[n];

    for(int i=0;i<n;i++)
        scanf("%d",&arr[i]);
    low = high = arr[0];

    for(int i=1;i<n;i++){
        low = arr[i] < low ? arr[i] : low;
        high = arr[i] > high ? arr[i] : high;
    }

    printf("%d %d",low,high);
}