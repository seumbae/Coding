#include<stdio.h>
#include<stdlib.h>

int main(){
    int test;
    scanf("%d",&test);

    for(int i=0; i<test; i++){
        int num, sum=0;
        scanf("%d",&num);
        int *arr = (int*)malloc(sizeof(int) * num);
        for(int j=0; j<num; j++){
            scanf("%d",arr+j);
            sum += *(arr+j);
        }
        double avg = sum/num;
        int over = 0;
        for(int j=0; j<num; j++){
            if(avg < *(arr+j))
                over++;
        }
        printf("%.3lf%%\n",(double)over/num*100);
    }
}