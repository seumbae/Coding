#include<stdio.h>
#include<string.h>

int main(){
    char arr[100];
    int alpha[26];
    memset(alpha,-1,sizeof(alpha));

    scanf("%s",arr);

    for(int i=0;i<strlen(arr);i++){
        if(alpha[ arr[i] - 'a' ] == -1)
            alpha[ arr[i] - 'a' ] = i;
    }

    for(int i=0;i<26;i++)
        printf("%d ",alpha[i]);
}