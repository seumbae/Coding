#include<stdio.h>
#include<string.h>

int main(){
    int test,re;
    char arr[20];

    scanf("%d",&test);

    for(int i=0;i<test;i++){
        scanf("%d %s",&re,arr);
            for(int j=0; j<strlen(arr);j++){
                for(int k=0; k<re;k++)
                    printf("%c",arr[j]);
            }
            printf("\n");
    }
}