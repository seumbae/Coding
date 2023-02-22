#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    int *elem = new int[9];

    for(int i=0; i<9; i++)
        cin >> *(elem+i);
    int maxElem = *max_element(elem, elem+9);
    auto pos = find(elem, elem+9, maxElem);
    
    //if (pos != end(elem))
    cout << maxElem << " " <<  distance(elem, pos)+1 << endl;
}