#include<iostream>
#include<cmath>

using namespace std;

int main(){
    int N; //odd natural number
    cin >> N;
    int sum=0, num;
    int count[8001]={0}; //0~3999 4000 4001~8000
    int* arr = new int[N];

    for(int i=0; i<N; i++){
        cin >> num;
        sum += num;
        count[num + 4000]++;
    }
    //산술 평균
    int avg = round((double)sum/N);

    //최빈값찾기
    int maxCnt=0;
    for(int i=0; i<8001; i++){
        if(count[i] != 0)
            maxCnt = maxCnt < count[i] ? i-4000 : maxCnt;
    }

    //정렬
    int k=0;
    for(int i=0; i<8001; i++){
        if(count[i] != 0){
            for(int j=0; j<count[i]; j++){
                arr[k] = i - 4000;
                k++;
            }
        }
    }
    
    int middle = arr[N/2];
    int range = arr[N-1] - arr[0];
    
    cout << avg << "\n" << middle << "\n" << maxCnt << "\n" << range;

    
}