import React from 'react';

const Entry = ({ entry, time }) => {

  return (
    <div className='entry'>
      {time} : {entry}
    </div>
  )
}

export default Entry;
