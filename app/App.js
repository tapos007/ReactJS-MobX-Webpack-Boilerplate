import React, { Component } from 'react';
import {render} from 'react-dom';
import Form from './Form';
import StudentInformation from './StudentInformation';
import TotalResult from  './TotalResult';
class App extends Component {
  render(){
    return (
      <div>
        <TotalResult/>
        <Form/>
        <StudentInformation/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
