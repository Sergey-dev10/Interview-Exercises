function palindrome(str) {
    let hsndStr = str.replace(/[-_&\/\\#,+()$~%.'":*?<>{}\s]/g, '').toLowerCase();
    const mid = Math.round(hsndStr.length / 2);
    let len = hsndStr.length;
    for (let i = 0; i < mid; i++) {
        if (hsndStr[i] !== hsndStr[len - 1 - i]) return false; 
    }
    return true;
}
