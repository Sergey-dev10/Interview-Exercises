function palindrome(str) {
    let hendStr = str.replace(/[-_&\/\\#,+()$~%.'":*?<>{}\s]/g, '').toLowerCase();
    const mid = Math.round(hendStr.length / 2);
    let len = hendStr.length;
    for (let i = 0; i < mid; i++) {
        if (hendStr[i] !== hendStr[len - 1 - i]) return false; 
    }
    return true;
}