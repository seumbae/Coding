#include<stdio.h>
#include<stdlib.h>

int main(){
    int n;
    scanf("%d",&n);
    double *arr = malloc(n * sizeof(double));

    for(int i=0; i<n; i++)
        scanf("%lf",arr+i);

    double max = *arr;
    for(int i=1;i<n;i++)
        max = max < *(arr+i) ? *(arr+i) : max;

    double sum = 0;
    for(int i=0; i<n; i++){
        *(arr+i) = *(arr+i)/max * 100;
        sum += *(arr+i);
    }
    printf("%.6lf",sum/n);
    
    
}

