import React from 'react';
import Entry from '../components/entry.jsx';
import Navbar from '../components/navbar.jsx';
import { useFetch } from '../helpers/customHooks.js';

// Overview
// Pulls all open tasks with current or prior date

// TODO
// Add checkboxen for items to be migrated
// Add buttons for types of migration:
//   Cancel
//   Next Day
//   Date of Choice
//   Add to Routine - Routine not yet implemented
//   Week of Choice - WoC not yet implemented
//   Month of Choice - MoC not yet implemented

const Migration = () => {

  const res = useFetch(`http://localhost:3000/migration`);
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
        timeStamp = dateStamp.slice(5, 10) + ' ' + dateStamp.slice(11, 16);
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
        <h2>Your journal logs ready to be migrated.</h2>
        {entries}
      </div>
    </div>
  );
};

export default Migration;
