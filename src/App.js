import React from 'react';

class App extends React.Component {

  state = {
    name: ''
  }

  changeName = (event) => {
    let name = event.target.value;
    this.setState({
      name: name
    });
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.changeName}></input>
        <h1>Hello {this.state.name}</h1>
      </React.Fragment>
    )
  }
}

export default App;
