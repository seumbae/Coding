#include<stdio.h>

int main(){
    int n;

    scanf("%d",&n);

    for(int i = 0 ; i < n ; i++){
        for(int j = 0 ; j < n ; j++){
            if(n-j>i+1){
                printf(" ");
            }
            else{
               printf("*"); 
            }
        }
        printf("\n");
    }
}
/*
  for(int i=0;i<N;i++)
        {
            for(int j=0;j<N;j++)
            {
                if((N-j) > (i+1)) Console.Write(" ");
                else Console.Write("*");
            }
            if(i == (N-1)) break;
            Console.WriteLine();
        }
*/