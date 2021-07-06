#include<stdio.h>

int main(){
    int a,b,tmp;
    
    scanf("%d%d",&a,&b);
    tmp=b;
    printf("%d\n",a * (b%10));
    b/=10;
    printf("%d\n",a * (b%10));
    b/=10;
    printf("%d\n",a * (b%10));
    printf("%d",a*tmp);

}