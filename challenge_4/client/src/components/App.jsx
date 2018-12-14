import React from 'react';
import Table from './Table.jsx'
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
        <div id='board'>
          <Table board={this.state.board}/>
        </div>
      </div>
      )
  }

}

export default App;