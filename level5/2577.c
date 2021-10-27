#include<stdio.h>

int main(){
    int a, b, c, ret;
    scanf("%d%d%d",&a,&b,&c);
    ret = a*b*c;

    int arr[10]= {0};

    while(ret){
        arr[ret%10]++;
        ret /= 10;
    }

    for(int i=0; i<10; i++)
        printf("%d\n",*(arr+i));
        
}