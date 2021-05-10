import React from 'react';

const Entry = ({ entry, time }) => {

  // TODO
  // Make it prettier

  return (
    <div className='entry'>
      {time} : {entry}
    </div>
  )
}

export default Entry;
