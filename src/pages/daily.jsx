import React from 'react';
import Entry from '../components/entry.jsx';
import Navbar from '../components/navbar.jsx';
import { useDaily, useFetch } from '../helpers/customHooks.js';

// TODO
// Consider if I want to group the entries by type

const Daily = () => {

  // TODO
  // Organize entries in different ways?
  // Edit date to show only relevent data
  // Show Date somewhere

  const res = useFetch(`http://localhost:3000/rapid`);
  const data = res.data;

  // Today's date
  const time = new Date();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const date = month + '/' + day;

  let entries = [];
  let timeStamp = '';

  for (let j = 0; j < data.length; j++) {
    if (data[j].entry) {
      timeStamp = data[j].date;
      entries.push(
        <Entry key={j} entry={data[j].entry} time={timeStamp} />
      )
    }
  }

  return (
    <div>
      <Navbar />
      <div className="entry-list">
        <h2>Your journal logs from today, {date}.</h2>
        {entries}
      </div>
    </div>
  );
};

export default Daily;
