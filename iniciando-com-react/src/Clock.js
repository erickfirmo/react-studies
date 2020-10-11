import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log('Executando didMouth');
    }

    componentWillUnmouth() {
        console.log('Executando willUnmouth');
    }

    componentDidUpdate() {
        console.log('Executando didUpdate');
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;
