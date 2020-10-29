import React from 'react'

class AlertError extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="alert alert-dismissible alert-danger" key={this.props.key}>
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <strong>Erro!</strong> {this.props.message}
                <a href="#" className="alert-link"></a>
            </div>
        )
    }

}

export default AlertError