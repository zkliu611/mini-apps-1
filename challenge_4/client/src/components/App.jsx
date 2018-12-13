import React from 'react';
import Columns from './Columns.jsx'
import Box from './Box.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board : [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
      ],
    }
  }

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <div>
          <Columns />
        </div>
      </div>
      )
  }
  
}

export default App;