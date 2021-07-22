#include<iostream>
#include<cstring>

using namespace std;

int main(){
    int n;

    cin >> n;

    for(int i=0;i<n;i++){
        int student;
        cin >> student;

        int* arr = new int[student];
        int sum=0;
        for(int j=0;j<student;j++){
            cin >> arr[j];
            sum += *(arr+j);
        }
        double avg = double(sum)/student;
        int cnt=0;

        for(int j=0;j<student;j++){
            if(avg < *(arr+j))
                cnt++;
        }
        cout << fixed;
        cout.precision(3);
        cout << double(cnt)/student*100 << "%" << endl;

    }
}