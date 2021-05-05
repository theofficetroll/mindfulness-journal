import React, { useEffect, useState } from 'react';
import EntryList from '../components/entryList.jsx';
import Navbar from '../components/navbar.jsx';

// TODO
// Consider if I want to group the entries by type

const Daily = () => {
  const [ entries, setEntries ] = useState({});

  // TODO
  // Add hook to pull entries from db into entries object

  return (
    <div>
      <Navbar />
      <div>
        <h2>Your journal logs from today.</h2>
        <EntryList entries={entries} />
      </div>
    </div>
  );
};

export default Daily;
