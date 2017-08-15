import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="content">
        <h2>Forms test</h2>
        <p>Few form test with react and maybe redux</p>
        <input
          onChange={event => this.setState({ term: event.target.value })}
        />
        <p>
          {this.state.term}
        </p>
      </div>
    );
  }
}

export default Forms;
