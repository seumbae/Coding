#include<iostream>
#include<cmath>

using namespace std;

int calc(int n){
    int a = 1;

    while(n){
        a *= 2;
        n--;
    }
    return a-1;
}

void hanoi(int num, int from, int by, int to){
    if(num == 1){
        cout << from << " " << to << "\n";
    }else{
        hanoi(num-1, from, to, by);
        cout << from <<" " << to << "\n";
        hanoi(num-1, by, from, to);
    }
}

int main(){
    int n;
    cin >> n;

    int cnt = pow(2,n)-1;
    cout << cnt << "\n";
    hanoi(n, 1, 2, 3);

}