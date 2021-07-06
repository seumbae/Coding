#include<stdio.h>

int main(){
    int n;

    scanf("%d",&n);

    for(int i=0; i<2*n;i++){
        if( (i+1)%2 !=0 ){
            for(int j=0;j<n;j++){
                if( (j+1)%2 == 0)
                    printf(" ");
                else
                    printf("*");
            }
            printf("\n");
        } //È¦¼ö¹ø Â° row
        else{
            for(int j=0;j<n;j++){
                if( (j+1)%2 == 0)
                    printf("*");
                else
                    printf(" ");
            }
            printf("\n");
        }
    }
    
}
