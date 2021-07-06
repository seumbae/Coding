#include<stdio.h>

int main(){
    int n;

    scanf("%d",&n);

    for(int i=0;i<2*n-1;i++){
        if(i<n){
            for(int j=0;j<i;j++)
                printf(" ");
            for(int j= 2*(n-i)-1 ; j>0 ; j-- )
                printf("*");
            printf("\n");
        }
        else{
            for(int j=n-2;j>i-n;j--)
                printf(" ");
            for(int j=0; j<2*(i-n)+3; j++)
                printf("*");
            printf("\n");
        }
    }
}
