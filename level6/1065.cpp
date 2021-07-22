#include<iostream>
#include<algorithm>

using namespace std;

bool sequence(int n){
    if(n<100)
        return true;
    else if(n<1000){
        //세자리 수
        int first, second, third;
        third = n%10;
        second = (n/10)%10;
        first = n/100;

        if( (second - first) == (third - second) )
            return true;
        else
            return false;
    }
    else if(n == 1000)
        return false;
}

int main(){
    int n, cnt=0; // 1<= n <=1000
    
    cin >> n;
    int arr[n] = {false};

    for(int i=0;i<n;i++){
        if(sequence(i+1))
            arr[i] = true;
    }
    cnt = count(arr,arr+n,true);

    cout << cnt << endl;
}
