#include<stdio.h>
#include<stdbool.h>

int main(){
    int num, cycle=0, tmp;
    
    scanf("%d",&num);
    tmp = num;

    do{
        tmp = (tmp%10)*10 + (tmp/10 + tmp%10)%10;
        cycle++;
    }while(num != tmp);
    printf("%d",cycle);
        

}