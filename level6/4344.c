#include <stdio.h>

int main(){
    int n,st;
    double sum;

    scanf("%d",&n);

    for(int i=0;i<n;i++){
        scanf("%d",&st);
        int arr[st],cnt=0; 
        sum=0;
        for(int j=0;j<st;j++){
            scanf("%d",&arr[j]);
            sum+=arr[j];
        }
        sum/=st;
        for(int j=0;j<st;j++){
            if(sum < arr[j])
                cnt++;
        }
        printf("%.3f%%\n",(double)cnt/(double)st*100);
    }
}