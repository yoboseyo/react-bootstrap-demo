import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';

require('./less/bootstrap.less');
require('./css/main.css');
var section = document.createElement('section');
document.body.appendChild(section);

class ButtonInstance extends React.Component{
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
}
/*var ButtonInstance = React.createClass({
  render: function(){
    return <p>123</p>
  }
});*/
  /*const buttonsInstance = (

   );*/

ReactDOM.render(<ButtonInstance />, section);