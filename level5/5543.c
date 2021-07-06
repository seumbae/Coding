#include<stdio.h>

int main(){
    int minb,mind;
    int tbur,mbur,bbur,coke,cider;
    
    scanf("%d%d%d%d%d",&tbur,&mbur,&bbur,&coke,&cider);

    if(tbur <= mbur)
        minb = tbur;
    else
        minb = mbur;
    
    if(minb >= bbur)
        minb = bbur;

    if(coke <= cider)
        mind = coke;
    else
        mind = cider;

    printf("%d",minb + mind - 50);
}