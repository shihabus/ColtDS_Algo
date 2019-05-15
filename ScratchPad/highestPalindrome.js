
// https://medium.com/@lonell.liburd/highest-value-palindrome-1275edcd1430
function isPalindrome(s){
    let i = 0;
    let j = s.length-1;
    
    while(j > i){
        if (s[i] == s[j]){
            i++; j--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('shihab')) 

function highestValuePalindrome(s,n,k) {
    let lo = 0;
    let hi = n-1;;
    let diff = 0;
    let string=s.split('')

    for(let i=0, j=n-1; i<n/2; i++, j--){
        if (string[i] != string[j]){
            diff++;
        }
    }

    if (diff > k){
        return -1;
    }

    while(hi >= lo){
        if (k <= 0){
            break;
        }

        if (string[lo] == string[hi]){
            if (k > 1 && (k-2) >= diff && string[lo] != '9'){
                string[lo] = '9';
                string[hi] = '9';
                k-=2;
            }
        }
        else {
            if (k > 1 && (k-2) >= diff-1){
                if (string[lo] != '9'){
                    string[lo] = '9';
                    k--;
                }
                if (string[hi] != '9'){
                    string[hi] = '9';
                    k--;
                }
            } else {
                if (string[lo] > string[hi]){
                    string[hi] = string[lo];
                } else {
                    string[lo] = string[hi];
                }
                k--;
            }
            diff--;
        }
        if (lo == hi && k > 0){
            string[lo] = '9';
            k--;
        }
        lo++;
        hi--;
    }

    let result=string.join('')
    return isPalindrome(result) ? result : -1;
}

console.log(highestValuePalindrome("10011", 5, 1))