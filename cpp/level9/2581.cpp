#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;
bool is_prime(int);

int main(){
    vector<int> v;
    int m, n, sum=0;
    cin >> m >> n;
    
    for(int i=m; i <= n; i++){
        if(is_prime(i)){
            v.push_back(i);
            sum += i;
        }
    }
    if(sum == 0)
        cout << "-1";
    else{
        cout << sum << endl;
        cout << *min_element(v.begin(), v.end()) << endl;
    }
    

}

bool is_prime(int num){
    if(num == 1)
        return false;
    for(int i=2; i<num; i++){
        if(num%i == 0)
            return false;
    }
    return true;
}