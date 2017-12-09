import React from 'react';
import Group from './Group';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toISOString(),
      items: [
        { id: 'a', value: 'Some text' },
        { id: 'b', value: 'Some other text' },
        { id: 'c', value: 'Third text' },
      ],
    };
  }

  componentDidMount() {
    this.timeout = setInterval(
      () => {
        this.setState({
          time: new Date().toISOString(),
        });
      },
      100,
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  log = (v) => {
    console.log(v);
  };

  render() {
    return (
      <Group
        log={this.log}
        {...this.state}
      />
    );
  }
}

export default App;
