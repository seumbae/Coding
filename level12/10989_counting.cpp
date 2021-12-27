#include<iostream>
#include<cstdio>

using namespace std;

//CountingSort
int main(){
    int arr[10000]={0};
    int n;
    int num;
    
    cin >> n;
    for(int i=0; i<n; i++){
        scanf("%d",&num);
        //cin >> num;
        arr[num-1]++;
    }
    for(int i=0; i<10000; i++){
        if(arr[i] != 0){
            for(int j=0; j<arr[i]; j++){
                printf("%d\n",i+1);
                //cout << i+1 << "\n";
            }
        }
    }

}