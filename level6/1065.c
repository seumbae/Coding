#include <stdio.h>

int main(){
    int n,han;

    scanf("%d",&n);

    han = n < 100 ? n : 99;
    
    for(int num = 100;num <= n ; num++){
        if(2*(num%100/10) == num/100 + num%10)
            han++;
    }
    printf("%d",han);
}