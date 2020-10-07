import React from 'react';
//import './App.css';

function ComponenteFuncional() {
  return (
    <>
        <h1>Hello World</h1>
    </>
  );
}

class App extends React.Component {
  render() {
    return (
      <>
        <ComponenteFuncional></ComponenteFuncional>
      </>
    )
  }
}

export default App;
