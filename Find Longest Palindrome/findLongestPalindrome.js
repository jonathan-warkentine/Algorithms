function findPalindrome (string) {
    
    let subStrLength = string.length;

    while (subStrLength >= 2) {
        let position = 0;
        while (position+subStrLength<=string.length) {
            if (checkPalindrome(string.slice(position, position+subStrLength-1))) {
                return {maxLength: subStrLength, substring: string.slice(position, position+subStrLength-1)};
            };
            position++;
        }

        subStrLength--;
    }

    return false;
}

function checkPalindrome (substring) {
    if (substring.length<2) {
        return false;
    }
    if (! (substring.length % 2)) {
        if (substring[0] === substring[substring.length-1]) {
            if (substring.length === 2) {
                return true;
            }
            return checkPalindrome(substring.slice(1, substring.length-1));
        }
        return false;
    }
    
    return checkPalindrome(substring.slice(0, Math.floor(substring.length/2) ) + substring.slice(Math.ceil(substring.length/2) ));
} 