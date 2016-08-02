let CommonApp = {
  initFun: function(){
    // 分辨率Resolution适配
    var docEl = document.documentElement,
      bodyEl = document.getElementsByTagName("body")[0],
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = 10 * (clientWidth / 360) + 'px';
      };

    // Abort if browser does not support addEventListener
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
    recalc();

  }
}
export default CommonApp;