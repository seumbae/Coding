#include<iostream>
#include<cmath>

using namespace std;

int main(){
    int test;
    double a[3], b[3];

    cin >> test;
    for(int k=0; k<test; k++){
        for(int i=0; i<3; i++)
            cin >> a[i];
        for(int i=0; i<3; i++)
            cin >> b[i];
        double d = sqrt(pow(b[0]-a[0],2) + pow(b[1]-a[1],2));
        int sum_r = a[2] + b[2];
        int dif_r = abs(a[2]-b[2]);

        if(d==0 && dif_r==0)
            cout << "-1\n";
        else if(d > sum_r || d < dif_r)
            cout << "0\n";
        else if(d==sum_r || d==dif_r)
            cout << "1\n";
        else
            cout << "2\n";
    }
            
}