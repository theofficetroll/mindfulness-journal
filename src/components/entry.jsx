import React from 'react';
import { useContextMenu } from '../helpers/customHooks.js';

// TODO
// Add options to make updates to entries
// Right click to make updates?

const Entry = ({ entry, time, entryType }) => {

  return (
    <div className='entry' onContextMenu={useContextMenu}>
      {entryType} {time} : {entry}
    </div>
  )
}

export default Entry;
