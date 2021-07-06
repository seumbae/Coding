#include<stdio.h>

int main(){
    int h,m;

    scanf("%d%d",&h,&m);

    /* 24시간 표현 사용 0~23 0:0(자정) */

    if( m >= 45)
        printf("%d %d",(h+24)%24,m-45);
    else 
        printf("%d %d",(h+23)%24,m+15);
}