#include<stdio.h>
#include<stdlib.h>
#include<string.h>

//������ ���ڿ��� �޴� ����
int main(){
    int n,sum=0;
    char *p; 

    scanf("%d\n",&n);
    p= (char*)malloc(sizeof(char)*(n+1));

    scanf("%s",p);

    while(*p){
        sum+=*(p++) - '0';
    }
    printf("%d",sum);
}