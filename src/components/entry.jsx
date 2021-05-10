import React from 'react';

const Entry = ({ entry, time }) => {

  // TODO
  // Make it prettier
  // Cut irrelevent data from date to just show timestamp - this may be done on Daily page.

  return (
    <div className='entry'>
      {time} : {entry}
    </div>
  )
}

export default Entry;
