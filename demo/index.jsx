import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
require('./js/jquery-3.0.0.min.js');
import CommonApp from './js/index.js';

require('./less/bootstrap.less');
require('./css/main.css');



var imgUrl = require('./img/apply.png');
var imgUrl1 = require('./img/audit.png');
var imgUrl2 = require('./img/fast.png');

var section = document.createElement('section');
document.body.appendChild(section);
section.className = 'page-reg';
class Main extends React.Component{
  render(){
    return (
      <div className="wrapper">
        <div className="banner"></div>
        <ul className="feature-list clearfix">
          <li className="list-item">
            <img src={imgUrl} />
              <p>手机申请</p>
          </li>
          <li className="list-dec"></li>
          <li className="list-item">
            <img src={imgUrl1} />
              <p>极速审核</p>
          </li>
          <li className="list-dec"></li>
          <li className="list-item">
            <img src={imgUrl2} />
              <p>瞬间到账</p>
          </li>
        </ul>
        <Form />
        <p className="service text-center">客服电话：021-31338820&nbsp;&nbsp;&nbsp;&nbsp;客服时间：9:30-18:30</p>
      </div>
    )
  }
  componentDidMount(){
    CommonApp.initFun();
  }
}
class Form extends React.Component {
  render() {
    return (
      <form className="reg-form j_regForm" method="" action="">
        <div className="form-group">
          <input name="mobile" className="form-control" type="text" placeholder="请输入您的手机号码"/>
        </div>
        <div className="form-group pass-box">
          <input name="password" className="form-control" type="password" placeholder="请输入6-8位数字密码"/>
          <a className="j_passSwitch" href="javascript:;" data-switch="0">显示密码</a>
        </div>
        <div className="form-group verify-box clearfix">
          <input name="verify" className="form-control" type="text" placeholder="请输入验证码"/>
          <a className="btn btn-primary j_msgs" href="javascript:;">
            获取验证码
          </a>
        </div>
        <div className="form-group agreement clearfix">
          <div className="chk-box">
            <input className="j_agree" name="agree" type="checkbox"/>
            <span></span>
          </div>
          <p>我同意<a href="#">《借款服务与隐私协议》</a></p>
        </div>
        <div className="form-group submit-box">
          <input type="submit" className="btn btn-primary j_submit" href="javascript:;" value="快速注册" disabled/>
        </div>
      </form>
    )

  }
}
/*class ButtonInstance extends React.Component{
  render(){
    return (
        <div>

          <Button>Default</Button>

          <Button bsStyle="primary">Primary</Button>

          <Button bsStyle="success">Success</Button>

          <Button bsStyle="info">Info</Button>

          <Button bsStyle="warning">Warning</Button>

          <Button bsStyle="danger">Danger</Button>

          <Button bsStyle="link">Link</Button>
        </div>
    )


  }
}*/
/*var ButtonInstance = React.createClass({
  render: function(){
    return <p>123</p>
  }
});*/
  /*const buttonsInstance = (

   );*/

ReactDOM.render(<Main />, section)