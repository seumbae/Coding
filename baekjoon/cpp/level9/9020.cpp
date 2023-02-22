#include<iostream>
#include<cmath>
#include<algorithm>

using namespace std;
const int MAX = 10001;
 
int arr[MAX];
 
void sieveOfEratosthenes(){ 
    for(int i=0; i<MAX; i++)
        arr[i] = i;

    for (int i=2; i<=sqrt(MAX); i++){
        if(arr[i] == 0) continue;
        for (int j=2*i; j<MAX; j+=i)
            arr[j] = 0;
    }
}
 
void Goldbach(int n)
{
    for (int i=n/2 ; i>= 2; i--)
    {
        if(!arr[i]) continue;
        int diff = n - arr[i];
 

        if (*find(arr+i, arr+n, diff))
        {
            cout << arr[i] << " " << diff << '\n';
            return;
        }
    }
}

int main()
{
    int test, num;
    cin >> test;

    sieveOfEratosthenes();
    
    while(test-- > 0){
        cin >> num;
        Goldbach(num);
    }
}