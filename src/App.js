import React from 'react';

class App extends React.Component {

  state = {
    name : 'Érick Firmo'
  }

  render() {
    return (
      <>
        {this.state.name}
      </>
    )
  }
}

export default App;
