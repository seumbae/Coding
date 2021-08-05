#include<iostream>
#include<algorithm>

using namespace std;

int main(){
    string a, b, ans;
    int maxlen, carry = 0;

    cin >> a >> b;
    maxlen = max(a.length(), b.length());

    for(int i=0;i < maxlen; i++){
        int sum=0;
        int a_len = a.length() - i - 1;
        int b_len = b.length() - i - 1;

        if(a_len >= 0)
            sum += int(a[a_len] - '0');
        if(b_len >= 0)
            sum += int(b[b_len] - '0');
        sum += carry;

        if(sum >= 10)
            carry = 1;
        else
            carry = 0;
        
        ans += to_string(sum % 10);
    }
    if(carry)
        ans += to_string(carry);
    reverse(ans.begin(), ans.end());

    cout << ans;
}