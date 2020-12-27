function detectOS() {
    var userAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return 'M';
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return 'L';
    if (isWin) {
        return 'W'
    }
    return null;
}

var windowsImg = "<img alt='Windows' src='/static/pic/javahelper/win.gif' height='16' width='16' />";
var linuxImg = "<img alt='Linux' src='/static/pic/javahelper/linux.gif' height='16' width='16' />";
var macImg = "<img alt='OS X' src='/static/pic/javahelper/apple.gif' height='16' width='16' />";