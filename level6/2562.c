#include <stdio.h>

int main(){
    int arr[9],max,inum=1;

    for(int i=0;i<9;i++)
        scanf("%d",&arr[i]);
    max = arr[0];

    for(int i=1;i<9;i++){
        if(max < arr[i]){
            max = arr[i];
            inum = i+1;
        }
    }
    printf("%d\n%d",max,inum);
    
}