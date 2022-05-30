function palindrome(str) {
    let hendStr = str.replace(/[-_&\/\\#,+()$~%.'":*?<>{}\s]/g, '').toLowerCase();
    let reverseStr = hendStr.split().reverse().join();
    return hendStr === reverseStr;
}
