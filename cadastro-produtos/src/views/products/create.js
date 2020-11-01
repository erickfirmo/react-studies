import React from 'react'

import ProductService from '../../app/ProductService'

class CreateProduct extends React.Component {

    constructor() {
        super()
        this.service = new ProductService()
    }

    state = {
        name: '',
        sku: '',
        description: '',
        price: 0,
        provider: '',
        success: false,
        errors: []
    }

    onChange = (event) => {
        const value = event.target.value
        const fieldName = event.target.name
        this.setState({ [fieldName]: value })
    }

    onSubmit = (event) => {
        const product = {
            name: this.state.name,
            sku: this.state.sku,
            description: this.state.description,
            price: this.state.price,
            provider: this.state.provider,
        }

        try {
            this.service.save(product)
            this.clearFields()
            this.setState({ success: true })

        } catch(e) {
            const errors = e.errors
            this.setState({ errors: errors })

        }
    }

    clearFields = () => {
        this.setState({
            name: '',
            sku: '',
            description: '',
            price: 0,
            provider: '',
            success: false,
            errors: []
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">

                    { this.state.success &&
                    
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Sucesso!</strong> Produto cadastrado com sucesso!
                            <a href="#" className="alert-link"></a>
                        </div>
                    }

                    { this.state.errors.length > 0 &&

                        this.state.errors.map( (message, i) => {
                            return (
                                <div className="alert alert-dismissible alert-danger" key={i}>
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong> {message}
                                    <a href="#" className="alert-link"></a>
                                </div>
                            )
                        })
                    }

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text"
                                    name="name"
                                    value={this.state.name}
                                    className="form-control"
                                    onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input className="form-control"
                                       type="text"
                                       name="sku"
                                       value={this.state.sku}
                                       onChange={this.onChange} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea name="description"
                                          value={this.state.description}
                                          className="form-control"
                                          onChange={this.onChange}>        
                                </textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input type="text"
                                       name="price"
                                       value={this.state.price}
                                       className="form-control" 
                                       onChange={this.onChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input type="text"
                                       name="provider"
                                       value={this.state.provider}
                                       className="form-control"
                                       onChange={this.onChange} />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>
                        <div className="col-md-1">
                            <button onClick={this.clearFields} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>   
        )
    }
}

export default CreateProduct