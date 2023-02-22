#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int n;
    cin >> n;
    double *score = new double[n];

    for(int i=0; i<n; i++)
        cin >> *(score+i);
    
    double max = *max_element(score, score+n);
    double avg =0;
    for(int i=0; i<n; i++){
        *(score+i) = *(score+i)/max*100;
        avg += *(score+i);
    }
    cout.precision(8);
    cout << avg/n;
    

    delete[] score;
}