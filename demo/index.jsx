import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonInput } from 'react-bootstrap';
require('./js/plugins/jquery-validation/jquery.validate.min.js')
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
  render() {
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
        <MyForm />
        <p className="service text-center">客服电话：021-31338820&nbsp;&nbsp;&nbsp;&nbsp;客服时间：9:30-18:30</p>
      </div>
    )
  }
  componentDidMount(){
    CommonApp.initFun();
    CommonApp.formValidate();
  }
}
class MyForm extends React.Component {
  render() {
    return (
      /*<Form className="reg-form j_regForm" method="" action="" onValidSubmit={this._handleValidSubmit.bind(this)} onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>*/
      <form className="reg-form j_regForm" method="" action="">
        <div className="form-group">
          <input name="mobile" className="form-control" type="text" placeholder="请输入您的手机号码"/>
        </div>
        <PassSec />
        <VerifySec />
        <Accept />
      </form>
    )

  }
}
class VerifySec extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      switch: true
    }
    this.clickh = this.clickh.bind(this);
  }

  render() {
    return (
      <div className="form-group verify-box clearfix">
        <input name="verify" className="form-control" type="text" placeholder="请输入验证码" />
        <a className="btn btn-primary" ref="btn" onClick={this.clickh}>获取验证码</a>
      </div>
    )
  }
  clickh() {

    var count = 30,
      self = this;
    if(this.state.switch){
      this.setState({
        switch: false,
      });
      this.refs.btn.disabled = true;
      this.timer = setInterval(function(){
        self.refs.btn.innerHTML = count;
        count --;
        if(count < 0){
          clearInterval(self.timer);
          self.setState({
            switch: true,
          });
          self.refs.btn.innerHTML = '重新获取';
          self.refs.btn.disabled = false;
        }
      },1000);
    }
  }
}

class PassSec extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      switch: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  render(){
    return(
      <div className="form-group pass-box">
        <input name="password" className="form-control" type="password" ref="pass" placeholder="请输入6-8位数字密码"/>
        <a className="j_passSwitch" href="javascript:;" data-switch="0" ref="passSwitch" onClick={this.handleClick}>显示密码</a>
      </div>
    )
  }
  handleClick(){
    if(this.state.switch){
      this.refs.pass.type = 'text';
      this.refs.passSwitch.innerHTML = '隐藏密码';
      this.setState({
        switch: false
      });
    } else {
      this.refs.pass.type = 'password';
      this.refs.passSwitch.innerHTML = '显示密码';
      this.setState({
        switch: true
      });
    }
  }
}

class Accept extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      checked: true
    }
  }
  render(){
    return(
      <div>
        <div className="form-group agreement clearfix">
          <div className="chk-box">
            <input className="j_agree" name="agree" type="checkbox" defaultChecked onChange={this.handleChange.bind(this)}/>
            <span></span>
          </div>
          <p>我同意<a href="#">《借款服务与隐私协议》</a></p>
        </div>
        <div className="form-group submit-box">
          <input type="submit" className="btn btn-primary j_submit" href="javascript:;" value="快速注册" ref="submit"/>
        </div>
      </div>
    )
  }
  handleChange(){
    if(this.state.checked){
      this.refs.submit.disabled = true;
      this.setState({
        checked: false
      });
    } else {
      this.refs.submit.disabled = false;
      this.setState({
        checked: true
      });
    }
  }
}
ReactDOM.render(<Main />, section)
