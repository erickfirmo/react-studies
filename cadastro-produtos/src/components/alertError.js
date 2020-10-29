import React from 'react'

class AlertError extends React.Component {

    constructor(props){
        super(props)
        this.setState({ showComponent: true })
    }
    
    state = {
        showComponent: true
    }

    close = () => {
        this.setState({ showComponent: false })
    }

    render() {         
        if (this.state.showComponent == true) {

            return (
                <div className="alert alert-dismissible alert-danger" key={this.props.key}>
                    <button type="button" className="close" data-dismiss="alert" onClick={ this.close }>&times;</button>
                    <strong>Erro!</strong> {this.props.message}
                    
                    <a href="#" className="alert-link"></a>
                </div>
            )
        } else {
            return <></>
        }
    }

}

export default AlertError