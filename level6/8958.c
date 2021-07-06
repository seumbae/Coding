#include <stdio.h>
#include <stdbool.h>

int main(){
    int n,i,sum,score;
    char arr[80] = {false};

    scanf("%d\n",&n);

    for (int j = 0; j < n; j++)
    {
        i=sum=score=0;
        while (true)
        {
            arr[i] = getchar();
            if (arr[i] == '\n')
            {
                arr[i] = false;
                break;
            }
            i++;
        }
        i=0;
        while(arr[i]){
            if(arr[i] == 'O')
                sum+=(++score);
            else if(arr[i] == 'X')
                score = 0;
            i++;    
        }
    printf("%d\n",sum);    
    }
}