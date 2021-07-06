#include<stdio.h>
#include<string.h>

int main(){
    long char arr[1000001];
    int brr[26][1]={0};
    
    scanf("%s",arr);
    
    for(int i=0;i<strlen(arr);i++){
        if(islower(arr[i]))
            arr[i] = toupper(arr[i]);
    }

    for(int i=0;i<strlen(arr);i++){
        brr[arr[i] - 'A'][0]++;
    }

    int max = brr[0][0];

    for(int i=1;i<26;i++){
        if(max < *(brr[i]) )
            max = *(brr[i]);
        
    }


}