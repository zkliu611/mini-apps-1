import React from 'react';
import Columns from './Columns.jsx'
import Box from './Box.jsx';

var Table = (props) => {
  console.log(props)
  return (
    <div id="table">
      {props.board.map((columns) => <Columns columns={columns}/>)}
    </div>
    )
}

export default Table;
 // {this.props.board.map((columns) => <columns columns={columns}/>)}