#include <stdio.h>
#include <stdbool.h>

//n은 양의 정수
int d(int n){
    int sum=n;

    while(n>0){
        sum += n%10;
        n/=10;
    }
    return sum ;
}
int main(){
    int arr[10001] = {false};

    for(int i=1;i<10001;i++){
        if(d(i) <= 10000)
            arr[d(i)] = true;
    }
    for(int i=1;i<10001;i++){
        if(!arr[i])
            printf("%d\n",i);
    }
}