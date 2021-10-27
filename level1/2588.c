#include<stdio.h>

int calc(int a, int b){
    for(int i=0; i<b; i++)
        a *= 10;
    return a;
}

int main(){
    int a, b, rem, sum=0;

    scanf("%d\n%d",&a,&b);

    for(int i=0;i<3;i++){
        rem = b%10;
        sum += a * calc(rem, i);
        printf("%d\n",a * rem);
        b /= 10;
    }
    printf("%d\n",sum);
    
}