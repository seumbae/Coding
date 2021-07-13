#include <stdio.h>

long long sum(int *a, int n){
    long long ans=0;

    for(int i=0;i<n;i++){
        ans+=*(a+i);
    }
    return ans;
}

int main(){
    int n;
    long long a;

    scanf("%d",&n);
    int arr[n];

    for(int i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    a = sum(arr,n);
    printf("%lld",a);
}