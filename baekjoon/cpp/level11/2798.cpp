#include<iostream>

using namespace std;

int main(){
    int numberCards, M;
    int ans[2] = {0};

    cin >> numberCards >> M;

    int* cards = new int[numberCards];

    for(int i=0 ; i<numberCards; i++)
        cin >> *(cards+i);

    for(int i=0; i<numberCards-2; i++){
        for(int j=i+1; j<numberCards-1; j++){
            for(int k=j+1; k<numberCards; k++){
                ans[1] = cards[i] + cards[j] + cards[k];
                if(ans[1] > ans[0] && ans[1] <= M){
                    ans[0] = ans[1];
                }
            }
        }
        
    }
    cout << ans[0];
}