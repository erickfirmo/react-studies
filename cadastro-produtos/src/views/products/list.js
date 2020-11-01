import React from 'react'

class ListProduct extends React.Component {

    state = {
        products: []
    }

    render(){
        return (
        <table className="table table-hover">
            <thead>
                <th>Nome</th>      
                <th>SKU</th>      
                <th>Preço</th>      
                <th>Fornecedor</th>     
                <th></th>           
            </thead>
            <tbody>
                {
                    this.state.products.map( product => {
                        return (
                            <tr>
                                <td>{product.name}</td>      
                                <td>{product.sku}</td>      
                                <td>{product.price}</td>      
                                <td>{product.provider}</td>     
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        )
    }

}

export default ListProduct