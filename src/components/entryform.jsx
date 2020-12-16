import React from 'react';

class EntryForm extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      entry: this.props.entry,
      type: this.props.type,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // API call to PUT or PUSH will go here
    // Will need some indicator that it's submitted
    // Possibly a change to CSS tags?
    // I assume we want the entry to remain?
    console.log('Entry submitted!');
  }

  handleChange (event) {
    let target = event.target;
    let value = target.value;
    this.setState({
      entry: value,
    });
  }

  render() {
    return (
      <div>
        {this.state.type}
        <form>
          <label>
            New Entry:
            <textarea rows={10} name="newEntry" onChange={this.handleChange} value={this.state.entry}/>
          </label>
          <br />
          <input type="submit" value="submit" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}

export default EntryForm;
