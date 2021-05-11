import React from 'react';
import Entry from '../components/entry.jsx';
import Navbar from '../components/navbar.jsx';
import { useDaily, useFetch } from '../helpers/customHooks.js';

// TODO
// Consider if I want to group the entries by type

const Daily = () => {

  // TODO
  // Organize entries in different ways?

  const res = useFetch(`http://localhost:3000/daily`);
  const data = res.data;

  console.log('dailies recovered', data);

  // Today's date
  const time = new Date();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const date = month + '/' + day;

  let entries = [];
  let timeStamp = '';
  let dateStamp = '';

  for (let j = 0; j < data.length; j++) {
    if (data[j].entry) {
      dateStamp = data[j].date;
      if(dateStamp) {
        timeStamp = dateStamp.slice(11, 16);
      } else {
        timeStamp = '';
      }
      entries.push(
        <Entry key={j} entry={data[j].entry} time={timeStamp} entryType={data[j].entryType}/>
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
