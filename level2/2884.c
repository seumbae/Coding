#include<stdio.h>

int main(){
    int h,m;

    scanf("%d%d",&h,&m);

    /* 24�ð� ǥ�� ��� 0~23 0:0(����) */

    if( m >= 45)
        printf("%d %d",(h+24)%24,m-45);
    else 
        printf("%d %d",(h+23)%24,m+15);
}