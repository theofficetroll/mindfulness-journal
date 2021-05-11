import React from 'react';

const Entry = ({ entry, time, entryType }) => {

  return (
    <div className='entry'>
      {entryType} {time} : {entry}
    </div>
  )
}

export default Entry;
