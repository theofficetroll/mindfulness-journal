import React from 'react';
import EntryForm from './entryform.jsx';

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      latestEntry: '',
    }
    this.getLatestEntry = this.getLatestEntry.bind(this);

    this.getLatestEntry();
  }

  getLatestEntry() {
    // later this will do an API call
    // for now, just adding default information
  }

  render() {
    return (
      <div className="today">
        <EntryForm type="Today" entry={this.state.latestEntry} />
      </div>
    )
  }
}

export default Today;
