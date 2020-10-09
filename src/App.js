import React from 'react';

class App extends React.Component {

  changeName = (event) => {
    let name = event.target.value;
    this.setState({
      name: name
    })
  }

  createComboBox = () => {
    const options = [ "Fulano", "Cicrano" ]

    const comboBoxOptions = options.map( option => <option>{option}</option>)

    return (
      <select>
        {comboBoxOptions}
      </select>
    )

  }

  render() {
    const MyComboBox = () => this.createComboBox()

    return (
      <React.Fragment>
        <input type="text" value={this.props.name} onChange={this.changeName}></input>
        <h1>Hello {this.props.name}</h1>
        <h2>{ this.props.age }</h2>
        <MyComboBox />
      </React.Fragment>
    )
  }
}

export default App;
