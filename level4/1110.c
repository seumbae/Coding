#include<stdio.h>
#include<stdbool.h>

int main(){
    int cnt=0,n,newnum;

    scanf("%d",&n);
    newnum = n;

    do{
        newnum = (newnum%10) * 10 + (newnum/10 + newnum%10) %10;
        cnt++;
    }while(newnum != n);
    printf("%d",cnt);
}