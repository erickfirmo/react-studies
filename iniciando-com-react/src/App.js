import React from 'react';

function App (props) {

  const changeName = event => {
    console.log(event.target.value)
  }

  const createComboBox = () => {
    const options = [ "Fulano", "Cicrano" ]

    const comboBoxOptions = options.map( option => <option>{option}</option>)

    return (
      <select>
        {comboBoxOptions}
      </select>
    )

  }

  const MyComboBox = () => createComboBox();

  return (
    <React.Fragment>
      <input className="text-center" type="text" value={props.name} onChange={changeName}></input>
      <h1>Hello {props.name}</h1>
      <MyComboBox/>
    </React.Fragment>
  )
  
}

export default App;
