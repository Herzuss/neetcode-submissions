class Solution {
public:
    bool isPalindrome(string s) {
    string odTylu ="";

    for(char c: s){
        if(isalnum(c))
            odTylu += tolower(c);
}

    string reversedOdTylu = odTylu;
    reverse(reversedOdTylu.begin(), reversedOdTylu.end());
    return odTylu == reversedOdTylu;
    }
};
