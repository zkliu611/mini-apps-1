import React from 'react';
import Box from './Box.jsx';

var Columns = (props) => {
  console.log(props)
  return (
    <div>
      {props.columns.map((box) => <div className='column'><Box box={box}/></div>)}
    </div>
    )
}

export default Columns;