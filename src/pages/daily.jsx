import React from 'react';
import EntryList from '../components/entryList.jsx';
import Navbar from '../components/navbar.jsx';
import { useDaily } from '../helpers/customHooks.js';

// TODO
// Consider if I want to group the entries by type

const Daily = () => {
  const { entries } = useDaily();

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
