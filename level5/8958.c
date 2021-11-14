#include<stdio.h>
#include<stdlib.h>
#include<string.h>

int main(){
    int n;
    char *str = (char*)malloc(sizeof(char)*80);
    scanf("%d",&n);

    for(int i=0; i<n; i++){
        scanf("%s",str);
        int sum=0, idx=0;
        for(int j=0; j<strlen(str); j++){
            if(*(str+j)== 'X')
                idx = 0;
            else
                sum += ++idx;
        }
        printf("%d\n",sum);
    }
}