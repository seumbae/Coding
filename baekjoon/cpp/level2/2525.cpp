#include<iostream>

using namespace std;

int main(){
    int hour, minute;
    cin >> hour >> minute;

    int need;
    cin >> need;

    minute += need % 60;
    hour += need / 60;
    
    hour += minute / 60;
    minute = minute % 60;
    hour = hour % 24;
    
    cout << hour << " " << minute;
}