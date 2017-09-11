import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
require('./less/bootstrap.less');
require('./css/main.css');
var section = document.createElement('section');
document.body.appendChild(section);
import { Select } from 'antd';
const Option = Select.Option;

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};
let index = 0;
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Joseph'
    }
  }
  componentDidMount(){

      this.setState({
        name: 'fan'
      },() => console.log(this.state.name,'????????'));

  }

  render() {
    index++;
    console.log(index,'第' + index + '次渲染')
    return(
      <div>{this.state.name}</div>
      <div>{this.state.name}</div>
    )
  }
}

ReactDOM.render(<App />, section);
/*var ButtonInstance = React.createClass({
  render: function(){
    return <p>123</p>
  }
});*/
  /*const buttonsInstance = (

   );*/

//ReactDOM.render(<MainSec />, section);
