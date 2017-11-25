import React from 'react';
import { render } from 'react-dom';

import { tieqviet } from './tieqviet';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const styleArea = {
  width: '100%',
  fontSize: 16,
  border: '1px solid black',
  padding: '5px',
  boxSizing: 'border-box',
  resize: 'none',
  outline: 'none',
  fontFamily: 'Arial',
  textAlign: 'left',
  whiteSpace: 'pre-line',
  height: '40vh',
  overflow: 'scroll'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    const text = [
      'Con chó tru',
      'Trục trặc'
    ]
    this.state = {
      value: text[Math.floor(Math.random() * text.length)]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return <div style={styles}>
      <div>
        <h3>Tiếng Việt </h3>
        <textarea style={styleArea} value={this.state.value} onChange={this.handleChange} />
        <a href='http://vi.blogtamsu.com/khi-tieng-viet-duoc-viet-thanh-tieq-viet.html'><h3>{tieqviet('Tiếng Việt')} </h3></a>
        <div style={styleArea}>{tieqviet(this.state.value)}</div>
      </div>
      <h4>@netcell</h4>
    </div>
  }
};

render(<App />, document.getElementById('root'));