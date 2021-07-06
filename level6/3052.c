#include <stdio.h>
#include <stdbool.h>

int main(){
    bool rev[42] ={false};
    int a,cnt=0;

    for(int i=0;i<10;i++){
        scanf("%d",&a);
        rev[a%42] = true;
    }

    for(int i=0;i<42;i++){
        if(rev[i])
            cnt++;
    }
    printf("%d",cnt);
}

