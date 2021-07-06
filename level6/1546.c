#include <stdio.h>

int main(){
    int n;

    scanf("%d",&n);

    float arr[n],max=0,sum=0;

    for(int i=0;i<n;i++)
        scanf("%f",&arr[i]);
    max = arr[0];

    for(int i=1;i<n;i++)
        max = max < arr[i] ? arr[i] : max;
    for(int i=0;i<n;i++){
        arr[i] = arr[i]/max*100;
        sum += arr[i];
    }
    printf("%f",sum/n);
    
}