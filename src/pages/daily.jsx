import React from 'react';
import Entry from '../components/entry.jsx';
import Navbar from '../components/navbar.jsx';
import { useDaily, useFetch } from '../helpers/customHooks.js';

// TODO
// Consider if I want to group the entries by type

const Daily = () => {
  // const { entries } = useDaily();

  // TODO
  // Organize entries in different ways?

  const res = useFetch(`http://localhost:3000/rapid`);
  const data = res.data;

  let entries = [];

  for (let j = 0; j < data.length; j++) {
    if (data[j].entry) {
      entries.push(
        <Entry key={j} entry={data[j].entry} date={data[j].date } />
      )
    }
  }

  return (
    <div>
      <Navbar />
      <div className="entry-list">
        <h2>Your journal logs from today.</h2>
        {entries}
      </div>
    </div>
  );
};

export default Daily;
