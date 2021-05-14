import React, { useEffect, useState } from 'react';

const useDaily = (cb) => {
  const [ entries, setEntries ] = useState({ entries: {} });
  const [ query, setQuery ] = useState('');

  // const { status, entries } = useFetch(url);

  return {
    entries,
  };
};

const useFetch = (url, options) => {
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async() => {
      setStatus('fetching');
      const response = await fetch(url, options);
      const data = await response.json();
      setData(data);
      setStatus('fetched');
    };

  fetchData();
  }, [url]);

  return { status, data };
}

const useRapid = (cb) => {
  const [ inputs, setInputs ] = useState({ entry: '', entryType: '-' });

  const handleSubmit = (e) => {
    if(e) {
      e.preventDefault();
    }

    // TODO update to useFetch

    fetch(`http://localhost:3000/rapid`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Entry added!', inputs);
      return res;
    })
    .then(data => {
      setInputs(inputs => ({ entry: '', entryType: '-' }));
    })
    .catch(error => {
      console.log('Error received', error);
    })
  }

  const handleInputChange = (e) => {
    e.persist();
    let currentDate = new Date();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value, date: currentDate }));
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
}

const useContextMenu = (cb) => {
  // TODO
  // Everything
}

export {
  useRapid,
  useDaily,
  useFetch,
  useContextMenu,
};
