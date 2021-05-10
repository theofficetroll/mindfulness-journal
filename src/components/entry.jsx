import React from 'react';

const Entry = ({ entry, date }) => {
  return (
    <div className='entry'>
      {entry} : {date}
    </div>
  )
}

export default Entry;
