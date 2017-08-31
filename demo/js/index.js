
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
  },
  //表单验证
   formValidate: function (){
    $('.j_regForm').validate({
      rules: {
        mobile: {
          required: true,
          rangelength: [11, 11],
          number: true,
        },
        password: {
          required: true,
          rangelength: [6, 8],
          number: true,
        },
        verify: {
          required: true,
        }
      },
      messages: {
        mobile: {
          required: '请输入手机号码',
          rangelength: '请输入正确的手机号码',
          number: '请输入正确的手机号码',
        },
        password: {
          required: '请输入密码',
          rangelength: '请输入6-8位数字密码',
          number: '请输入6-8位数字密码',
        },
        verify: {
          required: '请输入正确的验证码',
        }
      },
    });
  }
}
export default CommonApp;